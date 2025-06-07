"use client"

import { MessageItemType } from "@/types"
import { Mail, MailOpen } from "lucide-react"
import React from "react"
import { toast } from "sonner"
import DashboardShowMessage from "./dashboard-show-message"
import Heading from "./heading"

const DashboardMessage = ({ data }: { data: MessageItemType[] }) => {
    const [messages, setMessages] = React.useState<MessageItemType[]>(data);

    const readMessage = async (id: string) => {
        try {
            const response = await fetch(`/api/message?_id=${id}`);
            if (!response.ok) {
                toast.error("Failed to read message");
                return;
            }
            setMessages((prev) => prev.map((msg) => msg._id === id ? { ...msg, unread: false } : msg));
            toast.success("Message marked as read");
        } catch (error) {
            toast.error("Error reading message");
        }
    }

    return (
        <div className="flex flex-col gap-16 items-center w-full">
            <Heading title="Messages" />
            <div className="w-full mx-8 divide-y divide-gray-200 dark:divide-gray-700">
                {
                    messages.length === 0 && (
                        <div className="text-center">
                            No messages found
                        </div>
                    )
                }

                {
                    messages && messages.length > 0 && messages.map((message) => (
                        <DashboardShowMessage key={message._id} item={message} readMessage={readMessage}>
                            <div className="mx-12 p-4 hover:scale-105 transition-transform ease-in-out duration-200 cursor-pointer bg-primary/10 rounded-md">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-semibold">
                                        {message.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">{message.name}</h3>
                                            <div className="flex items-center gap-2">
                                                {message.unread ? (
                                                    <Mail className="h-4 w-4 text-gray-500" />
                                                ) : (
                                                    <MailOpen className="h-4 w-4 text-blue-500" />
                                                )}
                                            </div>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{message.email}</p>
                                    </div>
                                </div>
                            </div>
                        </DashboardShowMessage>
                    ))
                }
            </div>
        </div>
    )
}

export default DashboardMessage