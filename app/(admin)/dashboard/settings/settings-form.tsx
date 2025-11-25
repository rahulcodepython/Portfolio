"use client"

import type React from "react"

import { FileUploader } from "@/components/file-uploader"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSettings } from "@/hooks/use-settings"
import { Settings } from "@/lib/database/schema"
import { Facebook, FileText, Github, Image, Instagram, Linkedin, Twitter } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function SettingsForm({ settings }: { settings: Settings }) {
    const router = useRouter()
    const [errors, setErrors] = useState<Record<string, string>>({})

    const { isUpdating: loading, updateSettings } = useSettings()

    const [formData, setFormData] = useState({
        github_url: settings.github_url || "",
        linkedin_url: settings.linkedin_url || "",
        twitter_url: settings.twitter_url || "",
        facebook_url: settings.facebook_url || "",
        instagram_url: settings.instagram_url || "",
        cv_url: settings.cv_url || "",
        image_url: settings.image_url || "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({})
        updateSettings(formData)
    }

    return (
        <div className="w-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="space-y-6 w-2/3">
                {/* Social Media Links */}
                <Card>
                    <CardHeader>
                        <CardTitle>Social Media Links</CardTitle>
                        <CardDescription>Add links to your social media profiles</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="github_url" className="flex items-center gap-2">
                                <Github className="h-4 w-4" />
                                GitHub URL
                            </Label>
                            <Input
                                id="github_url"
                                value={formData.github_url}
                                onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
                                placeholder="https://github.com/username"
                                disabled={loading}
                            />
                            {errors.github_url && <p className="text-sm text-destructive">{errors.github_url}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="linkedin_url" className="flex items-center gap-2">
                                <Linkedin className="h-4 w-4" />
                                LinkedIn URL
                            </Label>
                            <Input
                                id="linkedin_url"
                                value={formData.linkedin_url}
                                onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                                placeholder="https://linkedin.com/in/username"
                                disabled={loading}
                            />
                            {errors.linkedin_url && <p className="text-sm text-destructive">{errors.linkedin_url}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="twitter_url" className="flex items-center gap-2">
                                <Twitter className="h-4 w-4" />
                                Twitter/X URL
                            </Label>
                            <Input
                                id="twitter_url"
                                value={formData.twitter_url}
                                onChange={(e) => setFormData({ ...formData, twitter_url: e.target.value })}
                                placeholder="https://twitter.com/username"
                                disabled={loading}
                            />
                            {errors.twitter_url && <p className="text-sm text-destructive">{errors.twitter_url}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="facebook_url" className="flex items-center gap-2">
                                <Facebook className="h-4 w-4" />
                                Facebook URL
                            </Label>
                            <Input
                                id="facebook_url"
                                value={formData.facebook_url}
                                onChange={(e) => setFormData({ ...formData, facebook_url: e.target.value })}
                                placeholder="https://facebook.com/username"
                                disabled={loading}
                            />
                            {errors.facebook_url && <p className="text-sm text-destructive">{errors.facebook_url}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="instagram_url" className="flex items-center gap-2">
                                <Instagram className="h-4 w-4" />
                                Instagram URL
                            </Label>
                            <Input
                                id="instagram_url"
                                value={formData.instagram_url}
                                onChange={(e) => setFormData({ ...formData, instagram_url: e.target.value })}
                                placeholder="https://instagram.com/username"
                                disabled={loading}
                            />
                            {errors.instagram_url && <p className="text-sm text-destructive">{errors.instagram_url}</p>}
                        </div>
                    </CardContent>
                </Card>

                {/* Resume/CV */}
                <Card>
                    <CardHeader>
                        <CardTitle>Resume/CV</CardTitle>
                        <CardDescription>Add a link to your resume or CV</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="cv_url" className="flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                CV URL
                            </Label>
                            <Input
                                id="cv_url"
                                value={formData.cv_url}
                                onChange={(e) => setFormData({ ...formData, cv_url: e.target.value })}
                                placeholder="https://example.com/resume.pdf"
                                disabled={loading}
                            />
                            {errors.cv_url && <p className="text-sm text-destructive">{errors.cv_url}</p>}

                            <div className="mt-2">
                                <p className="text-sm text-muted-foreground mb-2">Or upload a PDF:</p>
                                <FileUploader
                                    label=""
                                    required={false}
                                    config={{
                                        uploadPath: "resume",
                                        allowedTypes: ["application/pdf"],
                                        maxSizeMB: 10,
                                        accept: "application/pdf",
                                    }}
                                    currentValue={formData.cv_url}
                                    onUploadComplete={(url) => setFormData({ ...formData, cv_url: url })}
                                    disabled={loading}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Profile Image */}
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Image</CardTitle>
                        <CardDescription>Add a profile image for your portfolio</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="image_url" className="flex items-center gap-2">
                                <Image className="h-4 w-4" />
                                Image URL
                            </Label>
                            <Input
                                id="image_url"
                                value={formData.image_url}
                                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                                placeholder="https://example.com/profile.jpg"
                                disabled={loading}
                            />
                            {errors.image_url && <p className="text-sm text-destructive">{errors.image_url}</p>}

                            <div className="mt-2">
                                <p className="text-sm text-muted-foreground mb-2">Or upload an image:</p>
                                <FileUploader
                                    label=""
                                    required={false}
                                    config={{
                                        uploadPath: "projectImage",
                                        allowedTypes: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
                                        maxSizeMB: 5,
                                        accept: "image/jpeg,image/jpg,image/png,image/webp",
                                    }}
                                    currentValue={formData.image_url}
                                    onUploadComplete={(url) => setFormData({ ...formData, image_url: url })}
                                    disabled={loading}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex gap-4 justify-end">
                    <Button type="submit" disabled={loading}>
                        {loading ? "Saving..." : "Save Settings"}
                    </Button>
                </div>
            </form>
        </div>
    )
}
