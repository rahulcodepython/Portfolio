"use client"

import * as React from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader
} from "@/components/ui/sidebar"

import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import {
    FolderKanban, LayoutDashboard, Lightbulb, LogOut, Mail, Settings
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const navItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Projects",
        href: "/dashboard/projects",
        icon: FolderKanban,
    },
    {
        title: "Skills",
        href: "/dashboard/skills",
        icon: Lightbulb,
    },
    {
        title: "Contacts",
        href: "/dashboard/contacts",
        icon: Mail,
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
]

export default function AdminSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()

    const router = useRouter()

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" })
        router.push("/login")
    }

    const user = {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    }

    return (
        <Sidebar collapsible="icon" {...props} className="h-full">
            <SidebarHeader className="border-b-2">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                            <Link href="/" className="text-xl font-bold text-foreground">
                                RahulCodePython
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                    <SidebarMenu>
                        {
                            navItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={item.href === pathname} className="data-[state=open]:bg-sidebar-primary data-[state=open]:text-sidebar-primary-foreground">
                                        <Link href={item.href}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer" onClick={handleLogout}>
                            <span className="flex items-center gap-2">
                                <LogOut className="w-4 h-4" />
                                <span>
                                    Logout
                                </span>
                            </span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}