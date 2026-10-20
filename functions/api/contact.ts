// Cloudflare Pages Function: POST /api/contact
// Validates the contact form and emails it via Resend. Secrets live in Cloudflare, never in the browser.
import { contactSchema } from "../../lib/validations"

interface Env {
    RESEND_API_KEY: string
    CONTACT_TO_EMAIL?: string
    CONTACT_FROM_EMAIL?: string
}

type PagesContext = { request: Request; env: Env }

const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json" },
    })

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")

export async function onRequestPost({ request, env }: PagesContext): Promise<Response> {
    let body: Record<string, unknown>
    try {
        body = await request.json()
    } catch {
        return json({ message: "Invalid request" }, 400)
    }

    // Honeypot filled in: pretend success so bots don't retry
    if (typeof body.website === "string" && body.website.trim() !== "") {
        return json({ message: "Message sent" })
    }

    const validation = contactSchema.safeParse(body)
    if (!validation.success) {
        const errors = Object.fromEntries(validation.error.issues.map((issue) => [String(issue.path[0]), issue.message]))
        return json({ message: "Validation failed", errors }, 400)
    }

    if (!env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not configured")
        return json({ message: "Email service is not configured" }, 500)
    }

    const { name, email, message } = validation.data

    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: env.CONTACT_FROM_EMAIL || "Portfolio <portfolio@rahulcodepython.in>",
            to: [env.CONTACT_TO_EMAIL || "rahulcodepython@gmail.com"],
            reply_to: email,
            subject: `New portfolio message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            html: `
                <h2>New message from your portfolio</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
            `,
        }),
    })

    if (!response.ok) {
        console.error("Resend error:", response.status, await response.text())
        return json({ message: "Failed to send message" }, 502)
    }

    return json({ message: "Message sent" })
}
