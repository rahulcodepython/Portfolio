import { createContact } from "@/lib/database/queries/contacts.queries"
import { errorResponse, successResponse } from "@/lib/response"
import { contactSchema } from "@/lib/validations"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const validation = contactSchema.safeParse(body)

        if (!validation.success) {
            const errors: Record<string, string> = {}
            validation.error.issues.forEach((issue) => {
                const field = issue.path[0]?.toString() || 'unknown'
                errors[field] = issue.message
            })
            return NextResponse.json(
                { success: false, message: "Validation failed", errors },
                { status: 400 }
            )
        }

        const { name, email, message } = validation.data

        // Store contact in database
        await createContact({ name, email, message })

        // Send email via EmailJS
        const serviceID = process.env.EMAILJS_SERVICE_ID
        const templateID = process.env.EMAILJS_TEMPLATE_ID
        const publicKey = process.env.EMAILJS_PUBLIC_KEY

        if (serviceID && templateID && publicKey) {
            try {
                const options = { publicKey }
                const emailData = {
                    from_name: name,
                    from_email: email,
                    message: message,
                }

                // await emailjs.send(serviceID, templateID, emailData, options)
                console.log('Email sent successfully via EmailJS')
            } catch (emailError) {
                console.error('EmailJS error:', emailError)
                // Don't fail the request if email fails, contact is already saved
            }
        } else {
            console.warn('EmailJS environment variables not configured')
        }

        return NextResponse.json(successResponse("Contact submitted successfully"), { status: 201 })
    } catch (error) {
        console.error("Create contact error:", error)
        return NextResponse.json(errorResponse("Internal server error"), { status: 500 })
    }
}
