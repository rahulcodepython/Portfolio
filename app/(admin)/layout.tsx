"use client"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Providers } from "@/lib/react-query/provide";
import { usePathname } from "next/navigation";
import type React from "react";
import AdminSidebar from "./dashboard/admin-sidebar";

export default function AdminLayout({
    children
}: {
    children: React.ReactNode
}) {
    const header = {
        "contacts": {
            title: "Contacts",
            description: "View and manage contact form submissions",
        },
        "dashboard": {
            title: "Dashboard",
            description: "Welcome back to your RahulCodePython",
        },
        "skills": {
            title: "Skills",
            description: "Manage your skills",
        },
        "projects": {
            title: "Projects",
            description: "Manage your portfolio projects",
        },
        "settings": {
            title: "Settings",
            description: "Manage your portfolio site configuration",
        },
    } as const;

    type HeaderKey = keyof typeof header;

    const pathname = usePathname()

    const routeSegment = pathname.split('/').filter(Boolean).pop() || 'contacts';

    const currentHeaderKey = routeSegment in header ? routeSegment as HeaderKey : 'contacts';
    const currentHeader = header[currentHeaderKey];

    return (
        <SidebarProvider>
            <AdminSidebar />
            <SidebarInset>
                <main className="flex flex-col h-screen bg-background">
                    <div className="pt-4 pb-2 px-8">
                        <SidebarTrigger className="" />
                    </div>
                    <section className="flex-1 overflow-y-auto">
                        <div className="p-8 pt-2">
                            <div className="mb-8">
                                <h1 className="text-3xl font-bold text-foreground">{currentHeader.title}</h1>
                                <p className="text-muted-foreground">{currentHeader.description}</p>
                            </div>
                            <Providers>
                                {children}
                            </Providers>
                        </div>
                    </section>
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
