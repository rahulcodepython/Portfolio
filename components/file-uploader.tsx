"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileIcon, Loader2, X } from "lucide-react"
import { useState } from "react"

export interface FileUploadConfig {
    uploadPath: "projectImage" | "skills" | "resume"
    allowedTypes: string[]
    maxSizeMB: number
    accept: string // HTML accept attribute
}

interface FileUploaderProps {
    label: string
    required?: boolean
    config: FileUploadConfig
    currentValue?: string | null
    onUploadComplete: (url: string) => void
    disabled?: boolean
}

export function FileUploader({
    label,
    required = false,
    config,
    currentValue,
    onUploadComplete,
    disabled = false,
}: FileUploaderProps) {
    const [file, setFile] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)
    const [preview, setPreview] = useState<string | null>(currentValue || null)
    const [error, setError] = useState<string | null>(null)

    const isImage = config.uploadPath !== "resume"

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (!selectedFile) return

        setError(null)

        // Validate file type
        if (!config.allowedTypes.includes(selectedFile.type)) {
            setError(`Invalid file type. Allowed: ${config.allowedTypes.join(", ")}`)
            return
        }

        // Validate file size
        const maxSizeBytes = config.maxSizeMB * 1024 * 1024
        if (selectedFile.size > maxSizeBytes) {
            setError(`File too large. Max size: ${config.maxSizeMB}MB`)
            return
        }

        setFile(selectedFile)

        // Create preview for images
        if (isImage && selectedFile.type.startsWith("image/")) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(selectedFile)
        } else {
            setPreview(null)
        }

        // Auto-upload on file selection
        await uploadFile(selectedFile)
    }

    const uploadFile = async (fileToUpload: File) => {
        setUploading(true)
        setError(null)

        try {
            const formData = new FormData()
            formData.append("file", fileToUpload)
            formData.append("uploadPath", config.uploadPath)

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || "Upload failed")
            }

            // Call the callback with the uploaded file URL
            onUploadComplete(result.data.url)
            setPreview(result.data.url)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Upload failed")
            setFile(null)
            setPreview(currentValue || null)
        } finally {
            setUploading(false)
        }
    }

    const handleRemove = () => {
        setFile(null)
        setPreview(null)
        setError(null)
        onUploadComplete("")
    }

    return (
        <div className="space-y-2">
            <Label>
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
            </Label>

            {preview ? (
                <div className="space-y-2">
                    {isImage ? (
                        <div className="relative w-full max-w-xs">
                            <img
                                height={48}
                                width={48}
                                src={preview}
                                alt="Preview"
                                className="w-full h-48 object-cover rounded-lg border border-border"
                            />
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2"
                                onClick={handleRemove}
                                disabled={disabled || uploading}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 p-3 border border-border rounded-lg">
                            <FileIcon className="h-8 w-8 text-muted-foreground" />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-foreground truncate">
                                    {file?.name || "Uploaded file"}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {file ? `${(file.size / 1024).toFixed(2)} KB` : ""}
                                </p>
                            </div>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={handleRemove}
                                disabled={disabled || uploading}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="space-y-2">
                    <Input
                        type="file"
                        accept={config.accept}
                        onChange={handleFileChange}
                        disabled={disabled || uploading}
                        className="cursor-pointer"
                    />
                    <p className="text-xs text-muted-foreground">
                        Max size: {config.maxSizeMB}MB. Allowed: {config.allowedTypes.join(", ")}
                    </p>
                </div>
            )}

            {uploading && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Uploading...</span>
                </div>
            )}

            {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
    )
}
