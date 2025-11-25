"use client"

import { clientApi, UpdateContactReadRequestType } from "@/lib/api/client"
import type { Contact } from "@/lib/database/schema"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export function useContacts() {
    const queryClient = useQueryClient()

    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["contacts"],
        queryFn: () => clientApi.getContacts(),
    })

    const updateReadMutation = useMutation({
        mutationFn: ({ id, data }: { id: string; data: UpdateContactReadRequestType }) =>
            clientApi.updateContactRead(id, data),
        onSuccess: (response) => {
            // Manually update the cache with the returned contact instead of refetching
            queryClient.setQueryData(["contacts"], (oldData: { data: Contact[] } | undefined) => {
                if (!oldData) return oldData

                toast.success(response.message)

                return {
                    ...oldData,
                    data: oldData.data.map((contact) =>
                        contact.id === response.data.id ? response.data : contact
                    ),
                }
            })
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    const deleteMutation = useMutation({
        mutationFn: (id: string) => clientApi.deleteContact(id),
        onSuccess: (_, deletedId) => {
            // Manually remove the deleted contact from cache instead of refetching
            queryClient.setQueryData(["contacts"], (oldData: { data: Contact[] } | undefined) => {
                if (!oldData) return oldData

                return {
                    ...oldData,
                    data: oldData.data.filter((contact) => contact.id !== Number.parseInt(deletedId)),
                }
            })
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    return {
        contacts: data?.data || [],

        isLoading,
        isFetching,
        error: error as Error | null,

        updateContactRead: (id: string, data: UpdateContactReadRequestType) =>
            updateReadMutation.mutateAsync({ id, data }),
        isUpdatingRead: updateReadMutation.isPending,
        updateReadError: updateReadMutation.error as Error | null,

        deleteContact: (id: string) => deleteMutation.mutateAsync(id),
        deleteError: deleteMutation.error as Error | null,
        isDeleting: deleteMutation.isPending,
    }
}
