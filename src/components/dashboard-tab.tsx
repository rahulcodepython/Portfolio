"use client"

import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import DashboardBlogsLayout from "./dashboard-blogs-layout"
import DashboardHome from "./dashboard-home"
import DashboardMessageLayout from "./dashboard-message-layout"
import DashboardProjectLayout from "./dashboard-project-layout"

const DashboardTab = () => {
    const [activeTab, setActiveTab] = useState("home")

    const search = useSearchParams()
    const router = useRouter()

    const initialTab = search.get("tab") || "home"

    useEffect(() => {
        setActiveTab(initialTab)
    }, [initialTab])

    const changeTab = (tab: string) => {
        setActiveTab(tab)
        router.push(`?tab=${tab}`)
    }

    return (
        <div className="grid md:grid-cols-[240px_1fr] gap-6 mx-auto w-7xl flex-1">
            <div className="bg-muted rounded-lg overflow-hidden">
                <nav className="flex flex-col gap-4 p-4">
                    <Button
                        variant={activeTab === "home" ? "secondary" : "ghost"}
                        className={`justify-start gap-3 px-4 py-3 text-left w-full transition-all ease-in-out duration-200 cursor-pointer hover:scale-105 hover:bg-primary hover:text-white ${activeTab === "home" ? "bg-primary text-white" : ""}`}
                        onClick={() => changeTab("home")}
                    >
                        Home
                    </Button>
                    <Button
                        variant={activeTab === "projects" ? "secondary" : "ghost"}
                        className={`justify-start gap-3 px-4 py-3 text-left w-full transition-all ease-in-out duration-200 cursor-pointer hover:scale-105 hover:bg-primary hover:text-white ${activeTab === "projects" ? "bg-primary text-white" : ""}`}
                        onClick={() => changeTab("projects")}
                    >
                        Projects
                    </Button>
                    <Button
                        variant={activeTab === "blogs" ? "secondary" : "ghost"}
                        className={`justify-start gap-3 px-4 py-3 text-left w-full transition-all ease-in-out duration-200 cursor-pointer hover:scale-105 hover:bg-primary hover:text-white ${activeTab === "blogs" ? "bg-primary text-white" : ""}`}
                        onClick={() => changeTab("blogs")}
                    >
                        Blogs
                    </Button>
                    <Button
                        variant={activeTab === "message" ? "secondary" : "ghost"}
                        className={`justify-start gap-3 px-4 py-3 text-left w-full transition-all ease-in-out duration-200 cursor-pointer hover:scale-105 hover:bg-primary hover:text-white ${activeTab === "message" ? "bg-primary text-white" : ""}`}
                        onClick={() => changeTab("message")}
                    >
                        Message
                    </Button>
                </nav>
            </div>
            <div className="bg-muted rounded-lg p-6">
                <div>
                    {
                        activeTab === "home" ? <DashboardHome /> :
                            activeTab === "projects" ? <DashboardProjectLayout /> :
                                activeTab === "blogs" ? <DashboardBlogsLayout /> :
                                    activeTab === "message" ? <DashboardMessageLayout /> :
                                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default DashboardTab