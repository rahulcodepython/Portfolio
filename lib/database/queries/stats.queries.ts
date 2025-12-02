import pool from "@/lib/database/db";
import { Contact, Project } from "../schema";

export async function getStats() {
  try {
    // Get counts
    const statsResult = await pool.query(`
      SELECT 
        (SELECT COUNT(*) FROM projects) as "totalProjects",
        (SELECT COUNT(*) FROM skills) as "totalSkills",
        (SELECT COUNT(*) FROM contacts WHERE read = FALSE) as "unreadContacts"
    `);

    const stats = statsResult.rows[0] as { totalProjects: string; totalSkills: string; unreadContacts: string };

    // Convert string counts to numbers (PostgreSQL COUNT returns bigint as string)
    const statsNumeric = {
      totalProjects: parseInt(stats.totalProjects),
      totalSkills: parseInt(stats.totalSkills),
      unreadContacts: parseInt(stats.unreadContacts),
    };

    // Get recent projects
    const recentProjectsResult = await pool.query(`
      SELECT * FROM projects 
      ORDER BY created_at DESC 
      LIMIT 3
    `);

    const recentProjects = recentProjectsResult.rows as Project[];

    // Get recent unread contacts
    const recentContactsResult = await pool.query(`
      SELECT * FROM contacts 
      WHERE read = FALSE 
      ORDER BY created_at DESC 
      LIMIT 3
    `);

    const recentUnreadContacts = recentContactsResult.rows as Contact[];

    return {
      stats: statsNumeric,
      recentProjects,
      recentUnreadContacts,
    };
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw error;
  }
}