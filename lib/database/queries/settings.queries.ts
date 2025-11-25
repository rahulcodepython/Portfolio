import db from "@/lib/database/db";
import Database from "better-sqlite3";
import { Settings, SettingsUpdate } from "../schema";

// Settings queries
export function getSettings(): Settings | undefined {
    const database = db
    return database.prepare("SELECT * FROM settings WHERE id = 1").get() as Settings | undefined
}

export function updateSettings(data: SettingsUpdate): Settings | undefined {
    const database = db
    const fields = Object.keys(data)
        .map((key) => `${key} = ?`)
        .join(", ")
    const values = Object.values(data)

    if (fields) {
        const result = database.prepare(`UPDATE settings SET ${fields}, updated_at = CURRENT_TIMESTAMP WHERE id = 1 RETURNING *`).get(...values)

        return result as Settings
    }

    return getSettings()
}

export function createsettingsIfNotExists(database: Database.Database): void {
    database
        .prepare(`
    INSERT OR IGNORE INTO settings (id)
    VALUES (1)
  `)
        .run()
}