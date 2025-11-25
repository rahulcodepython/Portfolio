"use client"

import { clientApi, CreateSkillRequestType, UpdateSkillRequestType } from "@/lib/api/client"
import type { Skill } from "@/lib/database/schema"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export function useSkills() {
    const queryClient = useQueryClient()

    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["skills"],
        queryFn: () => clientApi.getSkills(),
    })

    const createMutation = useMutation({
        mutationFn: (data: CreateSkillRequestType) => clientApi.createSkill(data),
        onSuccess: (response) => {
            // Add the new skill to cache instead of refetching
            queryClient.setQueryData(["skills"], (oldData: { data: Skill[] } | undefined) => {
                if (!oldData) return oldData

                return {
                    ...oldData,
                    data: [...oldData.data, response.data],
                }
            })
        },
    })

    const updateMutation = useMutation({
        mutationFn: ({ id, data }: { id: string; data: UpdateSkillRequestType }) =>
            clientApi.updateSkill(id, data),
        onSuccess: (response) => {
            // Update the skill in cache instead of refetching
            queryClient.setQueryData(["skills"], (oldData: { data: Skill[] } | undefined) => {
                if (!oldData) return oldData

                return {
                    ...oldData,
                    data: oldData.data.map((skill) =>
                        skill.id === response.data.id ? response.data : skill
                    ),
                }
            })
        },
    })

    const deleteMutation = useMutation({
        mutationFn: (id: string) => clientApi.deleteSkill(id),
        onSuccess: (_, deletedId) => {
            // Remove the deleted skill from cache instead of refetching
            queryClient.setQueryData(["skills"], (oldData: { data: Skill[] } | undefined) => {
                if (!oldData) return oldData

                return {
                    ...oldData,
                    data: oldData.data.filter((skill) => skill.id !== Number.parseInt(deletedId)),
                }
            })
        },
    })

    return {
        skills: data?.data || [],

        isLoading,
        isFetching,
        error: error as Error | null,

        isCreating: createMutation.isPending,
        createError: createMutation.error as Error | null,
        createSkill: (data: CreateSkillRequestType) => createMutation.mutateAsync(data),

        isUpdating: updateMutation.isPending,
        updateError: updateMutation.error as Error | null,
        updateSkill: (id: string, data: UpdateSkillRequestType) =>
            updateMutation.mutateAsync({ id, data }),

        deleteSkill: (id: string) => deleteMutation.mutateAsync(id),
        isDeleting: deleteMutation.isPending,
        deleteError: deleteMutation.error as Error | null,
    }
}
