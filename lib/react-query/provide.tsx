"use client"

import { queryClient } from "@/lib/react-query/query-client"
import { QueryClientProvider } from "@tanstack/react-query"
import type { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>
}
