import { sql } from "@vercel/postgres";
import { User } from "../../models/members";

export async function fetchProjectUsers(projectId: string): Promise<User[]> {
    try {
        const fetchedUsers = await sql`
            SELECT u.*
            FROM users u
            JOIN projectMembers pMem ON u.id = pMem.user_id
            JOIN projects p ON p.id = pMem.project_id
            WHERE pMem.project_id = ${projectId}
        `;
        return fetchedUsers.rows.map(row => {
            return row as User
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}