import { errorResponse, successResponse } from "@/lib/response"
import { NextResponse } from "next/server"

// GitHub API configuration (will be from env variables)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "demo_token"
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "rahulcodepython"
const GITHUB_REPO = process.env.GITHUB_REPO || "file-storage"

// Upload path mapping
const UPLOAD_PATHS = {
    projectImage: "portfolio/projectImage",
    skills: "portfolio/skills",
    resume: "portfolio/resume",
} as const

type UploadPathKey = keyof typeof UPLOAD_PATHS

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const file = formData.get("file") as File
        const uploadPath = formData.get("uploadPath") as UploadPathKey

        if (!file) {
            return NextResponse.json(errorResponse("No file provided"), { status: 400 })
        }

        if (!uploadPath || !UPLOAD_PATHS[uploadPath]) {
            return NextResponse.json(errorResponse("Invalid upload path"), { status: 400 })
        }

        // Validate file type
        const allowedTypes = {
            projectImage: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
            skills: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
            resume: ["application/pdf"],
        }

        if (!allowedTypes[uploadPath].includes(file.type)) {
            return NextResponse.json(
                errorResponse(`Invalid file type. Allowed types: ${allowedTypes[uploadPath].join(", ")}`),
                { status: 400 }
            )
        }

        // Validate file size (5MB for images, 10MB for PDFs)
        const maxSize = uploadPath === "resume" ? 10 * 1024 * 1024 : 5 * 1024 * 1024
        if (file.size > maxSize) {
            return NextResponse.json(
                errorResponse(`File too large. Max size: ${maxSize / (1024 * 1024)}MB`),
                { status: 400 }
            )
        }

        // Generate unique filename
        const timestamp = Date.now()
        const extension = file.name.split(".").pop()
        const sanitizedName = file.name
            .split(".")[0]
            .replace(/[^a-zA-Z0-9]/g, "_")
            .toLowerCase()
        const filename = `${sanitizedName}_${timestamp}.${extension}`

        // Convert file to base64
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        const base64Content = buffer.toString("base64")

        // Upload to GitHub
        const githubPath = `${UPLOAD_PATHS[uploadPath]}/${filename}`
        const githubApiUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${githubPath}`

        const response = await fetch(githubApiUrl, {
            method: "PUT",
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: `Upload ${filename}`,
                content: base64Content,
                branch: "main",
            }),
        })

        if (!response.ok) {
            const error = await response.json()
            console.error("GitHub upload error:", error)
            return NextResponse.json(errorResponse("Failed to upload file to GitHub"), { status: 500 })
        }

        const result = await response.json()

        // Return the raw file URL
        const fileUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO}/main/${githubPath}`

        return NextResponse.json(
            successResponse(
                {
                    url: fileUrl,
                    filename: filename,
                    path: githubPath,
                    sha: result.content.sha,
                },
                "File uploaded successfully"
            ),
            { status: 201 }
        )
    } catch (error) {
        console.error("Upload error:", error)
        return NextResponse.json(errorResponse("Internal server error"), { status: 500 })
    }
}
