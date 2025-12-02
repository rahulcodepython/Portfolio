import { deleteContact } from "@/lib/database/queries/contacts.queries"
import { errorResponse, successResponse } from "@/lib/response"
import { NextResponse } from "next/server"

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await deleteContact(Number.parseInt(id))

    return NextResponse.json(successResponse({}, "Contact deleted successfully"))
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json(errorResponse("Unauthorized"), { status: 401 })
    }
    return NextResponse.json(errorResponse("Failed to delete contact"), { status: 500 })
  }
}
