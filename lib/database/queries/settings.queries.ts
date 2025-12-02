import pool from "@/lib/database/db";
import { Settings, SettingsUpdate } from "../schema";

// Settings queries
export async function getSettings(): Promise<Settings | undefined> {
    try {
        const result = await pool.query("SELECT * FROM settings WHERE id = 1");
        return result.rows[0] as Settings | undefined;
    } catch (error) {
        console.error("Error fetching settings:", error);
        throw error;
    }
}

export async function updateSettings(data: SettingsUpdate): Promise<Settings | undefined> {
    try {
        const fields = Object.keys(data);
        const values = Object.values(data);

        if (fields.length === 0) {
            return getSettings();
        }

        // Create parameterized query with $1, $2, etc.
        const setClause = fields.map((key, index) => `${key} = $${index + 1}`).join(", ");
        const query = `UPDATE settings SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = 1 RETURNING *`;

        const result = await pool.query(query, values);
        return result.rows[0] as Settings;
    } catch (error) {
        console.error("Error updating settings:", error);
        throw error;
    }
}

export async function createSettingsIfNotExists(): Promise<void> {
    try {
        await pool.query(`
      INSERT INTO settings (id)
      VALUES (1)
      ON CONFLICT (id) DO NOTHING
    `);
    } catch (error) {
        console.error("Error creating settings:", error);
        throw error;
    }
}