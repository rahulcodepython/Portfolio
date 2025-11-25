import db from "@/lib/database/db";
import { Skill, SkillCreate, SkillUpdate } from "../schema";

// Skills queries
export function getAllSkills(): Skill[] {
    const database = db
    return database.prepare("SELECT * FROM skills ORDER BY created_at DESC").all() as Skill[]
}

export function createSkill(data: SkillCreate): Skill {
    const database = db
    const result = database
        .prepare(`
    INSERT INTO skills (name, category, proficiency_level)
    VALUES (?, ?, ?)
    RETURNING *
  `)
        .get(data.name, data.category, data.proficiency_level)

    return result as Skill
}

export function updateSkill(id: number, data: SkillUpdate): Skill {
    const database = db
    const fields = Object.keys(data)
        .map((key) => `${key} = ?`)
        .join(", ")
    const values = Object.values(data)

    const result = database.prepare(`UPDATE skills SET ${fields} WHERE id = ? RETURNING *`).get(...values, id)

    return result as Skill
}

export function deleteSkill(id: number): void {
    const database = db
    database.prepare("DELETE FROM skills WHERE id = ?").run(id)
}