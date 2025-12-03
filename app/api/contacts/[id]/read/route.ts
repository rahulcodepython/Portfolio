import { markContactAsRead } from "@/lib/database/queries/contacts.queries"
import { errorResponse, successResponse } from "@/lib/response"
import { contactUpdateSchema } from "@/lib/validations"
import { NextResponse } from "next/server"

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await request.json()

    // Validate with Zod
    const validation = contactUpdateSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(errorResponse("Invalid request data"), { status: 400 })
    }

    const { read } = validation.data
    const contact = await markContactAsRead(Number.parseInt(id), read)

    return NextResponse.json(successResponse(contact, "Contact updated successfully"))
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json(errorResponse("Unauthorized"), { status: 401 })
    }
    return NextResponse.json(errorResponse("Internal server error"), { status: 500 })
  }
}
