"use client"
import Heading from "@/components/heading"
import Section from "@/components/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import React from "react"
import { toast } from "sonner"

const Resume = () => {
    const fileRef = React.useRef<HTMLInputElement>(null)
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = () => {
        setLoading(true)
        if (fileRef.current?.files) {
            const file = fileRef.current.files[0]

            if (file) {
                const formData = new FormData()
                formData.append("file", file)

                fetch("/api/upload-resume", {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => response.json())
                    .then((data) => {
                        toast.success(data.msg)
                    })
                    .catch((error) => {
                        toast.error("An error occurred while uploading the resume.")
                    })
                    .finally(() => {
                        setLoading(false)
                        if (fileRef.current) {
                            fileRef.current.value = ""
                        }
                    })
            } else {
                setLoading(false)
                toast.error("No file selected.")
            }
        } else {
            toast.error("Please select a file to upload.")
        }
    }

    return (
        <Section>
            <Heading title="Resume" />
            <form className="flex flex-col gap-4 w-full max-w-xl">
                <label htmlFor="file">Resume</label>
                <Input type="file" id="file" ref={fileRef} />
                <Button
                    type="submit"
                    className="bg-primary text-white hover:bg-primary/90 transition-colors duration-300 cursor-pointer"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
                    {loading ? "Uploading..." : "Upload"}
                </Button>
            </form>
        </Section>
    )
}

export default Resume