'use client'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import * as React from 'react'
import type { z } from 'zod'
import { GenericForm, type FieldConfig } from './generic-form'

export interface CreateEditModalProps<T extends z.ZodType<any, any>> {
    triggerButtonText?: string
    title: string
    description?: string
    schema: T
    fields: FieldConfig[]
    defaultValues?: Partial<z.infer<T>>
    onSubmit: (data: z.infer<T>) => void | Promise<void>
    submitButtonText?: string
    open?: boolean
    onOpenChange?: (open: boolean) => void
    triggerButtonVariant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    triggerButtonClassName?: string
    children?: React.ReactNode
}

export function CreateEditModal<T extends z.ZodType<any, any>>({
    triggerButtonText,
    title,
    description,
    schema,
    fields,
    defaultValues,
    onSubmit,
    submitButtonText = 'Save',
    open: controlledOpen,
    onOpenChange: controlledOnOpenChange,
    triggerButtonVariant = 'default',
    triggerButtonClassName,
    children,
}: CreateEditModalProps<T>) {
    const [internalOpen, setInternalOpen] = React.useState(false)
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    // Use controlled state if provided, otherwise use internal state
    const open = controlledOpen !== undefined ? controlledOpen : internalOpen
    const setOpen =
        controlledOnOpenChange !== undefined
            ? controlledOnOpenChange
            : setInternalOpen

    const handleSubmit = async (data: z.infer<T>) => {
        setIsSubmitting(true)
        try {
            await onSubmit(data)
            setOpen(false)
        } catch (error) {
            console.error('Form submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children || (
                    <Button variant={triggerButtonVariant} className={triggerButtonClassName}>
                        {triggerButtonText}
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                <div className="mt-4">
                    <GenericForm
                        schema={schema}
                        fields={fields}
                        defaultValues={defaultValues}
                        onSubmit={handleSubmit}
                        submitButtonText={submitButtonText}
                        isSubmitting={isSubmitting}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}
