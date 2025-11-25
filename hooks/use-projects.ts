"use client"

import { clientApi, CreateProjectRequestType, UpdateProjectRequestType } from "@/lib/api/client"
import type { Project } from "@/lib/database/schema"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export function useProjects() {
    const queryClient = useQueryClient()

    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["projects"],
        queryFn: () => clientApi.getProjects(),
    })

    const createMutation = useMutation({
        mutationFn: (data: CreateProjectRequestType) => clientApi.createProject(data),
        onSuccess: (response) => {
            // Add the new project to cache instead of refetching
            queryClient.setQueryData(["projects"], (oldData: { data: Project[] } | undefined) => {
                if (!oldData) return oldData

                toast.success(response.message)

                return {
                    ...oldData,
                    data: [...oldData.data, response.data],
                }
            })
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    const updateMutation = useMutation({
        mutationFn: ({ id, data }: { id: string; data: UpdateProjectRequestType }) =>
            clientApi.updateProject(id, data),
        onSuccess: (response) => {
            // Update the project in cache instead of refetching
            queryClient.setQueryData(["projects"], (oldData: { data: Project[] } | undefined) => {
                if (!oldData) return oldData

                toast.success(response.message)

                return {
                    ...oldData,
                    data: oldData.data.map((project) =>
                        project.id === response.data.id ? response.data : project
                    ),
                }
            })
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    const deleteMutation = useMutation({
        mutationFn: (id: string) => clientApi.deleteProject(id),
        onSuccess: (response, deletedId) => {
            // Remove the deleted project from cache instead of refetching
            queryClient.setQueryData(["projects"], (oldData: { data: Project[] } | undefined) => {
                if (!oldData) return oldData

                toast.success(response.message)

                return {
                    ...oldData,
                    data: oldData.data.filter((project) => project.id !== Number.parseInt(deletedId)),
                }
            })
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    return {
        projects: data?.data || [],

        isLoading,
        isFetching,
        error: error as Error | null,

        createProject: (data: CreateProjectRequestType) => createMutation.mutateAsync(data),
        isCreating: createMutation.isPending,
        createError: createMutation.error as Error | null,

        updateProject: (id: string, data: UpdateProjectRequestType) =>
            updateMutation.mutateAsync({ id, data }),
        isUpdating: updateMutation.isPending,
        updateError: updateMutation.error as Error | null,

        deleteProject: (id: string) => deleteMutation.mutateAsync(id),
        isDeleting: deleteMutation.isPending,
        deleteError: deleteMutation.error as Error | null,
    }
}
