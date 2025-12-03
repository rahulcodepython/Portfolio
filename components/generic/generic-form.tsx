'use client'

import { FileUploader, type FileUploadConfig } from '@/components/file-uploader'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

export type FieldType =
    | 'text'
    | 'email'
    | 'url'
    | 'number'
    | 'textarea'
    | 'select'
    | 'checkbox'
    | 'switch'
    | 'file'

export interface FieldConfig {
    name: string
    label: string
    type: FieldType
    placeholder?: string
    description?: string
    options?: { label: string; value: string | number }[]
    defaultValue?: any
    fileConfig?: FileUploadConfig
}

export interface GenericFormProps<T extends z.ZodType<any, any>> {
    schema: T
    fields: FieldConfig[]
    defaultValues?: Partial<z.infer<T>>
    onSubmit: (data: z.infer<T>) => void | Promise<void>
    submitButtonText?: string
    isSubmitting?: boolean
    className?: string
}

export function GenericForm<T extends z.ZodType<any, any>>({
    schema,
    fields,
    defaultValues,
    onSubmit,
    submitButtonText = 'Submit',
    isSubmitting = false,
    className,
}: GenericFormProps<T>) {
    const form = useForm<z.infer<T>>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as any,
    })

    const renderField = (field: FieldConfig) => (
        <FormField
            key={field.name}
            control={form.control}
            name={field.name as any}
            render={({ field: formField }) => (
                <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                        {field.type === 'textarea' ? (
                            <Textarea
                                placeholder={field.placeholder}
                                {...formField}
                                value={formField.value ?? ''}
                            />
                        ) : field.type === 'select' ? (
                            <Select
                                onValueChange={formField.onChange}
                                defaultValue={formField.value}
                                value={formField.value}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder={field.placeholder || 'Select...'} />
                                </SelectTrigger>
                                <SelectContent>
                                    {field.options?.map((option) => (
                                        <SelectItem
                                            key={option.value}
                                            value={String(option.value)}
                                        >
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        ) : field.type === 'checkbox' ? (
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    checked={formField.value}
                                    onCheckedChange={formField.onChange}
                                />
                            </div>
                        ) : field.type === 'switch' ? (
                            <div className="flex items-center space-x-2">
                                <Switch
                                    checked={!!formField.value}
                                    onCheckedChange={(checked) => {
                                        // Convert boolean to number (0 or 1) if the value is expected to be a number
                                        // Otherwise pass the boolean as-is
                                        const value = typeof formField.value === 'number' || field.defaultValue === 0
                                            ? (checked ? 1 : 0)
                                            : checked
                                        formField.onChange(value)
                                    }}
                                />
                            </div>
                        ) : field.type === 'file' && field.fileConfig ? (
                            <div className="space-y-2">
                                <Input
                                    type="url"
                                    placeholder={field.placeholder}
                                    {...formField}
                                    value={formField.value ?? ''}
                                />
                                <p className="text-sm text-muted-foreground">Or upload a file:</p>
                                <FileUploader
                                    label=""
                                    required={false}
                                    config={field.fileConfig}
                                    currentValue={formField.value as string}
                                    onUploadComplete={(url) => formField.onChange(url)}
                                    disabled={false}
                                />
                            </div>
                        ) : field.type === 'number' ? (
                            <Input
                                type="number"
                                placeholder={field.placeholder}
                                {...formField}
                                value={formField.value ?? ''}
                                onChange={(e) => {
                                    const value = e.target.value
                                    formField.onChange(value === '' ? '' : Number(value))
                                }}
                            />
                        ) : (
                            <Input
                                type={field.type}
                                placeholder={field.placeholder}
                                {...formField}
                                value={formField.value ?? ''}
                            />
                        )}
                    </FormControl>
                    {field.description && (
                        <FormDescription>{field.description}</FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    )

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={className || 'space-y-6'}
            >
                {fields.map((field) => renderField(field))}
                <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Submitting...' : submitButtonText}
                </Button>
            </form>
        </Form>
    )
}
