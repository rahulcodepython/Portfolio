import pool from "@/lib/database/db";
import { Project, ProjectCreate, ProjectUpdate } from "../schema";

// Projects queries
export async function getAllProjects(): Promise<Project[]> {
    try {
        const result = await pool.query("SELECT * FROM projects ORDER BY created_at DESC");
        return result.rows as Project[];
    } catch (error) {
        console.error("Error fetching all projects:", error);
        throw error;
    }
}

export async function createProject(data: ProjectCreate): Promise<Project> {
    try {
        const result = await pool.query(
            `INSERT INTO projects (title, description, technologies, image_url, live_url, github_url, featured)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
            [data.title, data.description, data.technologies, data.image_url, data.live_url, data.github_url, data.featured]
        );

        return result.rows[0] as Project;
    } catch (error) {
        console.error("Error creating project:", error);
        throw error;
    }
}

export async function updateProject(id: number, data: ProjectUpdate): Promise<Project> {
    try {
        const fields = Object.keys(data);
        const values = Object.values(data);

        // Create parameterized query with $1, $2, etc.
        const setClause = fields.map((key, index) => `${key} = $${index + 1}`).join(", ");
        const query = `UPDATE projects SET ${setClause} WHERE id = $${fields.length + 1} RETURNING *`;

        const result = await pool.query(query, [...values, id]);
        return result.rows[0] as Project;
    } catch (error) {
        console.error("Error updating project:", error);
        throw error;
    }
}

export async function deleteProject(id: number): Promise<void> {
    try {
        await pool.query("DELETE FROM projects WHERE id = $1", [id]);
    } catch (error) {
        console.error("Error deleting project:", error);
        throw error;
    }
}

export async function getFeaturedProjects(): Promise<Project[]> {
    try {
        const result = await pool.query("SELECT * FROM projects WHERE featured = TRUE");
        return result.rows as Project[];
    } catch (error) {
        console.error("Error fetching featured projects:", error);
        throw error;
    }
}