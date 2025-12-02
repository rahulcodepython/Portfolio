import { getSettings, updateSettings } from "@/lib/database/queries/settings.queries"
import { errorResponse, successResponse } from "@/lib/response"
import { settingsSchema } from "@/lib/validations"
import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function GET() {
    const settings = await getSettings()
    return NextResponse.json(successResponse(settings, "Settings fetched successfully"))
}

export async function PUT(request: Request) {
    try {
        const body = await request.json()
        const validation = settingsSchema.safeParse(body)

        if (!validation.success) {
            const errors: Record<string, string> = {}
            validation.error.issues.forEach((issue) => {
                errors[issue.path[0]] = issue.message
            })
            return NextResponse.json(errorResponse(errors.message))
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
