import { sql } from "@vercel/postgres";
import { Label } from "../../models/labels";

export async function fetchProjectLabels(projectId: string): Promise<Label[]> {
    try {
        const fetchedProject = await sql`
            SELECT p.*
            FROM projects p
            WHERE p.id = ${projectId}
        `;
        const project = fetchedProject.rows[0];
        const orgId = project['organization_id'];

        const fetchedLabelGroups = await sql`
            SELECT options_json
            FROM labelgroups
            WHERE organization_id = ${orgId}
        `;
        
        const labelOptions = fetchedLabelGroups.rows[0]['options_json'];
        return labelOptions;

    } catch (error) {
        console.error(error);
        throw error;
    }
}