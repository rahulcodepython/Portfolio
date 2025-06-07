"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { MessageItemType } from "@/types"
import React from "react"

const DashboardShowMessage = ({ children, item, readMessage }: {
    children: React.ReactNode,
    item: MessageItemType,
    readMessage: (id: string) => Promise<void>
}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        if (isOpen && item.unread) {
            item._id && readMessage(item._id)
        }
    }, [isOpen]);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{item.subject}</DialogTitle>
                    <DialogDescription>
                        {item.message}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default DashboardShowMessage