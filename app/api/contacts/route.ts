import { getAllContacts } from "@/lib/database/queries/contacts.queries"
import { errorResponse, successResponse } from "@/lib/response"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const contacts = await getAllContacts()
        return NextResponse.json(successResponse(contacts, "Contacts fetched successfully"))
    } catch (error) {
        return NextResponse.json(errorResponse("Failed to fetch contacts"), { status: 500 })
    }
}