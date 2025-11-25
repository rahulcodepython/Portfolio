"use client"

import { clientApi, UpdateSettingsRequestType } from "@/lib/api/client"
import type { Settings } from "@/lib/database/schema"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export function useSettings() {
    const queryClient = useQueryClient()

    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["settings"],
        queryFn: () => clientApi.getSettings(),
    })

    const updateMutation = useMutation({
        mutationFn: (data: UpdateSettingsRequestType) => clientApi.updateSettings(data),
        onSuccess: (response) => {
            // Update the settings in cache instead of refetching
            queryClient.setQueryData(["settings"], (oldData: { data: Settings } | undefined) => {
                if (!oldData) return oldData

                toast.success(response.message)

                return {
                    ...oldData,
                    data: response.data,
                }
            })
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    return {
        settings: data?.data || null,

        isLoading,
        isFetching,
        error: error as Error | null,

        updateSettings: (data: UpdateSettingsRequestType) => updateMutation.mutateAsync(data),
        isUpdating: updateMutation.isPending,
        updateError: updateMutation.error as Error | null,
    }
}
