'use client'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { AlertTriangle } from 'lucide-react'
import { useState } from 'react'

export interface DeleteModalProps {
    id: number
    onDelete: (id: number) => void | Promise<void>
    title?: string
    description?: string
    cancelText?: string
    deleteText?: string
    isDeleting?: boolean
    children: React.ReactNode
}

export function DeleteModal({
    id,
    onDelete,
    title = 'Are you sure?',
    description = 'This action cannot be undone. This will permanently delete this item.',
    cancelText = 'Cancel',
    deleteText = 'Delete',
    isDeleting = false,
    children,
}: DeleteModalProps) {
    const [open, setOpen] = useState(false)

    const handleDelete = async (id: number) => {
        await onDelete(id)
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                            <AlertTriangle className="h-5 w-5 text-destructive" />
                        </div>
                        <DialogTitle>{title}</DialogTitle>
                    </div>
                    <DialogDescription className="pt-3">{description}</DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => setOpen(false)}
                        disabled={isDeleting}
                    >
                        {cancelText}
                    </Button>
                    <Button
                        type="button"
                        variant="destructive"
                        onClick={() => handleDelete(id)}
                        disabled={isDeleting}
                    >
                        {isDeleting ? 'Deleting...' : deleteText}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
