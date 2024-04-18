import { Task, TaskGroupByStatus } from "../../models/tasks";
import { User } from "../../models/members";
import { prismaClient } from "../../prisma/client";
import { Label } from "../../models/labels";

export async function fetchTasksByStatus(projectId: string): Promise<TaskGroupByStatus> {

    const tasksForProject: Task[] = await getTasksForProject(projectId);
    return {
        open: tasksForProject.filter(p => p.status === 'open'),
        progress: tasksForProject.filter(p => p.status === 'progress'),
        closed: tasksForProject.filter(p => p.status === 'closed'),
    };
}
export async function getTasksForProject(project_id: string): Promise<Task[]> {
    try {
        const getTasks = await prismaClient.tasks.findMany({
            where: {
                project_id: project_id,
            },
            include: {
                taskmembers: {
                    include: {
                        users: true
                    }
                }
            }
        });
        return getTasks.map((t): Task => {
            const labels = JSON.parse(t.labels_json?.toString() ?? '') as Label[];
            return ({
                id: t.id,
                name: t.name,
                status: t.task_status,
                labels,
                description: t.description,
                time_estimate: t.time_estimate as number,
                dueDate: new Date(t.due_date ?? 0),
                created_at: new Date(t.created_at ?? 0),
                projectId: t.project_id as string,
                members: t.taskmembers.map(({ users }): User => ({
                    email: users.email,
                    id: users.id,
                    lastName: users.last_name,
                    name: users.name,
                    password: '',
                    profileImage: ''
                }))
            })
        })
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to fetch tasks for project: ${project_id}`)
    }
}
