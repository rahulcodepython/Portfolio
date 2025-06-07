import LogoutButton from "@/app/(admin)/dashboard/logout-button";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { getBaseUrl } from "@/utils/GetBaseUrl";
import { CheckLineIcon, FileText, Mail } from "lucide-react";
import Link from "next/link";

const Dashboard = async () => {
    const baseurl = await getBaseUrl();

    const response = await fetch(`${baseurl}/api/stats`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'force-cache',
        next: { revalidate: 120 },
    })

    const data = await response.json()

    return (
        <div className="flex flex-col gap-8 max-w-5xl w-full">
            <div className="flex items-center justify-center w-full">
                <div className="text-center flex flex-col gap-4 w-fit">
                    <Heading title="Welcome Back! Rahul" />
                    <p className="text-gray-600 dark:text-gray-300">Here's what's happening today.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-100 p-4 rounded-md shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 cursor-pointer">
                    <div className="flex flex-row items-center justify-between pb-2">
                        <div className="text-sm font-medium text-blue-800">Projects</div>
                        <CheckLineIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-blue-900">
                            {data.projects}
                        </div>
                    </div>
                </div>

                <div className="bg-green-100 p-4 rounded-md shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 cursor-pointer">
                    <div className="flex flex-row items-center justify-between pb-2">
                        <div className="text-sm font-medium text-green-800">Blogs</div>
                        <FileText className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-green-900">
                            {data.blogs}
                        </div>
                    </div>
                </div>

                <div className="bg-purple-100 p-4 rounded-md shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 cursor-pointer">
                    <div className="flex flex-row items-center justify-between pb-2">
                        <div className="text-sm font-medium text-purple-800">Messages</div>
                        <Mail className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-purple-900">
                            {data.message}
                        </div>
                        <p className="text-xs text-purple-600 mt-1">{data.unreadMessages} unread</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div>
                    <div className="text-xl font-semibold">Quick Actions</div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link href={'/'} className="w-full hover:scale-110 transition-transform ease-in-out duration-200">
                        <Button variant="outline" className="flex flex-col items-center h-auto py-4 cursor-pointer w-full">
                            <span>Go to Home</span>
                        </Button>
                    </Link>
                    <Link href={'/blogs'} className="w-full hover:scale-110 transition-transform ease-in-out duration-200">
                        <Button variant="outline" className="flex flex-col items-center h-auto py-4 cursor-pointer w-full">
                            <span>Go to Blogs</span>
                        </Button>
                    </Link>
                    <Link href={'/editor'} className="w-full hover:scale-110 transition-transform ease-in-out duration-200">
                        <Button variant="outline" className="flex flex-col items-center h-auto py-4 cursor-pointer w-full">
                            <span>Go to Editor</span>
                        </Button>
                    </Link>
                    <LogoutButton />
                </div>
            </div>
        </div>
    )
}

export default Dashboard