import { createSettingsIfNotExists, getSettings, updateSettings } from "@/lib/database/queries/settings.queries"
import { errorResponse, successResponse } from "@/lib/response"
import { settingsSchema } from "@/lib/validations"
import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function GET() {
    // Ensure settings exist before fetching
    await createSettingsIfNotExists()

    const settings = await getSettings()
    return NextResponse.json(successResponse(settings, "Settings fetched successfully"))
}

export async function PUT(request: Request) {
    try {
        // Ensure settings exist before updating
        await createSettingsIfNotExists()

        const body = await request.json()
        const validation = settingsSchema.safeParse(body)

        if (!validation.success) {
            const errors: Record<string, string> = {}
            validation.error.issues.forEach((issue) => {
                const field = issue.path[0]?.toString() || 'unknown'
                errors[field] = issue.message
            })
            // Return the first error or a generic message
            const firstError = Object.values(errors)[0] || "Validation failed"
            return NextResponse.json(errorResponse(firstError), { status: 400 })
        }

        const validatedData = validation.data

        const settings = await updateSettings(validatedData)

        revalidateTag('home-data', 'max')

        return NextResponse.json(successResponse(settings, "Settings updated successfully"))
    } catch (error) {
        console.error("Update settings error:", error)
        return NextResponse.json(errorResponse("Internal server error"), { status: 500 })
    }
}
