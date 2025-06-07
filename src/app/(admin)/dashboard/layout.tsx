import { AppSidebar } from "@/components/ui/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <SidebarTrigger />
                <section className="p-4 md:p-6 lg:p-8 w-full flex flex-col items-center">
                    {children}
                </section>
            </main>
        </SidebarProvider>
    )
}