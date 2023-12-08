import { TaskSchemaDto } from "../../actions";
import { Task, TaskStatus } from "../../models/tasks";
import { sql } from '@vercel/postgres';

export async function createTasks(tasks: TaskSchemaDto[]) {

    try {
        const task = tasks[0];
        const taskStatus: TaskStatus = 'open'
        await sql`
        INSERT INTO tasks ( name, task_status, description, time_estimate, due_date, project_id, labels_json)
        VALUES ( ${task.name}, ${taskStatus}, ${task.description}, ${task.timeEstimate}, ${task.dueDate}, ${task.projectId}, (${task.labels}::jsonb))
        ON CONFLICT (id) DO NOTHING;
        `;
    } catch (error) {
        console.error(error);
        throw error;
    }
}