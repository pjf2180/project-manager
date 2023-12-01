import { sql } from "@vercel/postgres";
import { Project } from "../../models/projects";

export async function fetchProjects(userId: string): Promise<Project[]> {
    try {
        const fetchedProjects = await sql`
            SELECT p.*
            FROM projects p
            JOIN projectMembers pMem ON p.id = pMem.project_id
            JOIN users u ON u.id = pMem.user_id
            WHERE u.id = ${userId}
        `;
        return fetchedProjects.rows.map(row => {
            return {
                id: row.id,
                name: row.name
            }
        })
    } catch (error) {
        console.error(error);
        throw error;
    }
}