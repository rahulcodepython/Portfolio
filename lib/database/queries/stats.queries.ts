import db from "@/lib/database/db";
import { Contact, Project } from "../schema";

export function getStats() {
    const stats = db.prepare(`
  SELECT 
    (SELECT COUNT(*) FROM projects) as totalProjects,
    (SELECT COUNT(*) FROM skills) as totalSkills,
    (SELECT COUNT(*) FROM contacts WHERE read = 0) as unreadContacts
`).get() as { totalProjects: number; totalSkills: number; unreadContacts: number };

    const recentProjects = db.prepare(`
  SELECT * FROM projects 
  ORDER BY created_at DESC 
  LIMIT 3
`).all() as Project[];

    const recentUnreadContacts = db.prepare(`
  SELECT * FROM contacts 
  WHERE read = 0 
  ORDER BY created_at DESC 
  LIMIT 3
`).all() as Contact[];

    return {
        stats,
        recentProjects,
        recentUnreadContacts,
    };
}