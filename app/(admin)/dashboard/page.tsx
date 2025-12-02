import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getStats } from "@/lib/database/queries/stats.queries"
import { FolderKanban, Lightbulb, Mail } from "lucide-react"
import Link from "next/link"

export default async function DashboardPage() {
    const { stats, recentProjects, recentUnreadContacts } = await getStats()

    const statCards = [
        {
            title: "Total Projects",
            value: stats.totalProjects,
            icon: FolderKanban,
            href: "/dashboard/projects",
            description: "Manage your portfolio projects",
        },
        {
            title: "Total Skills",
            value: stats.totalSkills,
            icon: Lightbulb,
            href: "/dashboard/skills",
            description: "Update your skill set",
        },
        {
            title: "Unread Contacts",
            value: stats.unreadContacts,
            icon: Mail,
            href: "/dashboard/contacts",
            description: "New contact submissions",
        },
    ]

    return (
        <div>
            <div className="mb-8 grid gap-4 md:grid-cols-3">
                {statCards.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <Link key={stat.title} href={stat.href}>
                            <Card className="transition-all hover:shadow-lg">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                                    <Icon className="h-5 w-5 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Projects</CardTitle>
                        <CardDescription>Your latest portfolio projects</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between h-full">
                        {recentProjects.length === 0 ? (
                            <p className="text-sm text-muted-foreground">No projects yet</p>
                        ) : (
                            <div className="space-y-4">
                                {recentProjects.map((project) => (
                                    <div key={project.id} className="flex items-start gap-3">
                                        <div className="flex-1">
                                            <h4 className="font-medium text-foreground">{project.title}</h4>
                                            <p className="text-sm text-muted-foreground line-clamp-1">{project.description.slice(0, 30) + "..."}</p>
                                            <p className="mt-1 text-xs text-muted-foreground">{project.technologies}</p>
                                        </div>
                                        {project.featured && (
                                            <span className="rounded-full bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="mt-4">
                            <Button asChild variant="outline" className="w-full bg-transparent">
                                <Link href="/dashboard/projects">View All Projects</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Contacts</CardTitle>
                        <CardDescription>Latest contact form submissions</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between h-full">
                        {
                            recentUnreadContacts.length === 0 ? (
                                <p className="text-sm text-muted-foreground">No contacts yet</p>
                            ) : (
                                <div className="space-y-4">
                                    {
                                        recentUnreadContacts.map((contact) => (
                                            <div key={contact.id} className="flex items-start gap-3">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-medium text-foreground">{contact.name}</h4>
                                                        {!contact.read && <span className="h-2 w-2 rounded-full bg-accent" />}
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">{contact.email}</p>
                                                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{contact.message.slice(0, 30) + "..."}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                        <div className="mt-4">
                            <Button asChild variant="outline" className="w-full bg-transparent">
                                <Link href="/dashboard/contacts">View All Contacts</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}