"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { ReactNode } from "react"
import { useState } from "react"

export function Providers({ children }: { children: ReactNode }) {
    // Create a new QueryClient instance for each session
    // This ensures proper caching per user session in Next.js App Router
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 1000 * 60 * 5, // 5 minutes - data stays fresh
                        gcTime: 1000 * 60 * 10, // 10 minutes - cache retention (formerly cacheTime)
                        retry: 1,
                        refetchOnWindowFocus: false,
                        refetchOnMount: false, // Don't refetch on component mount if data is fresh
                        refetchOnReconnect: false, // Don't refetch on network reconnect if data is fresh
                    },
                    mutations: {
                        retry: 1,
                    },
                },
            })
    )

    return <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>
}
