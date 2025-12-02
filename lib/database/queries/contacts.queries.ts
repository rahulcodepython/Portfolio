import pool from "@/lib/database/db";
import { Contact, ContactCreate } from "../schema";

// Contacts queries
export async function getAllContacts(): Promise<Contact[]> {
    try {
        const result = await pool.query("SELECT * FROM contacts ORDER BY created_at DESC");
        return result.rows as Contact[];
    } catch (error) {
        console.error("Error fetching all contacts:", error);
        throw error;
    }
}

export async function createContact(data: ContactCreate): Promise<void> {
    try {
        await pool.query(
            `INSERT INTO contacts (name, email, message)
       VALUES ($1, $2, $3)`,
            [data.name, data.email, data.message]
        );
    } catch (error) {
        console.error("Error creating contact:", error);
        throw error;
    }
}

export async function markContactAsRead(id: number, read: boolean): Promise<Contact> {
    try {
        const result = await pool.query(
            "UPDATE contacts SET read = $1 WHERE id = $2 RETURNING *",
            [read, id]
        );
        return result.rows[0] as Contact;
    } catch (error) {
        console.error("Error marking contact as read:", error);
        throw error;
    }
}

export async function deleteContact(id: number): Promise<void> {
    try {
        await pool.query("DELETE FROM contacts WHERE id = $1", [id]);
    } catch (error) {
        console.error("Error deleting contact:", error);
        throw error;
    }
}