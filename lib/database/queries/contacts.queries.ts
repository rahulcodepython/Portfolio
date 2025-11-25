import db from "@/lib/database/db";
import { Contact, ContactCreate } from "../schema";

// Contacts queries
export function getAllContacts(): Contact[] {
    const database = db
    return database.prepare("SELECT * FROM contacts ORDER BY created_at DESC").all() as Contact[]
}

export function createContact(data: ContactCreate) {
    const database = db
    database
        .prepare(`
    INSERT INTO contacts (name, email, message)
    VALUES (?, ?, ?)
  `)
        .run(data.name, data.email, data.message)
}

export function markContactAsRead(id: number, read: boolean) {
    const database = db
    return database.prepare("UPDATE contacts SET read = ? WHERE id = ? RETURNING *").get(read ? 0 : 1, id)
}

export function deleteContact(id: number) {
    const database = db
    database.prepare("DELETE FROM contacts WHERE id = ?").run(id)
}