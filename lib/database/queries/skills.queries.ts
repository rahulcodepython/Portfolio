import pool from "@/lib/database/db";
import { Skill, SkillCreate, SkillUpdate } from "../schema";

// Skills queries
export async function getAllSkills(): Promise<Skill[]> {
    try {
        const result = await pool.query("SELECT * FROM skills ORDER BY created_at DESC");
        return result.rows as Skill[];
    } catch (error) {
        console.error("Error fetching all skills:", error);
        throw error;
    }
}

export async function createSkill(data: SkillCreate): Promise<Skill> {
    try {
        const result = await pool.query(
            `INSERT INTO skills (name, category, proficiency_level)
       VALUES ($1, $2, $3)
       RETURNING *`,
            [data.name, data.category, data.proficiency_level]
        );

        return result.rows[0] as Skill;
    } catch (error) {
        console.error("Error creating skill:", error);
        throw error;
    }
}

export async function updateSkill(id: number, data: SkillUpdate): Promise<Skill> {
    try {
        const fields = Object.keys(data);
        const values = Object.values(data);

        // Create parameterized query with $1, $2, etc.
        const setClause = fields.map((key, index) => `${key} = $${index + 1}`).join(", ");
        const query = `UPDATE skills SET ${setClause} WHERE id = $${fields.length + 1} RETURNING *`;

        const result = await pool.query(query, [...values, id]);
        return result.rows[0] as Skill;
    } catch (error) {
        console.error("Error updating skill:", error);
        throw error;
    }
}

export async function deleteSkill(id: number): Promise<void> {
    try {
        await pool.query("DELETE FROM skills WHERE id = $1", [id]);
    } catch (error) {
        console.error("Error deleting skill:", error);
        throw error;
    }
}