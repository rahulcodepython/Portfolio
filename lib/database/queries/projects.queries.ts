import db from "@/lib/database/db";
import { Project, ProjectCreate, ProjectUpdate } from "../schema";

// Projects queries
export function getAllProjects(): Project[] {
    const database = db
    return database.prepare("SELECT * FROM projects ORDER BY created_at DESC").all() as Project[]
}

export function createProject(data: ProjectCreate): Project {
    const database = db
    const result = database
        .prepare(`
    INSERT INTO projects (title, description, technologies, image_url, live_url, github_url, featured)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    RETURNING *
  `)
        .get(data.title, data.description, data.technologies, data.image_url, data.live_url, data.github_url, data.featured)

    return result as Project
}

export function updateProject(id: number, data: ProjectUpdate): Project {
    const database = db
    const fields = Object.keys(data)
        .map((key) => `${key} = ?`)
        .join(", ")
    const values = Object.values(data)

    const result = database.prepare(`UPDATE projects SET ${fields} WHERE id = ? RETURNING *`).get(...values, id)

    return result as Project
}

export function deleteProject(id: number): void {
    const database = db
    database.prepare("DELETE FROM projects WHERE id = ?").run(id)
}

export function getFeaturedProjects(): Project[] {
    const database = db
    return database.prepare("SELECT * FROM projects WHERE featured = 1 ORDER BY created_at DESC").all() as Project[]
}