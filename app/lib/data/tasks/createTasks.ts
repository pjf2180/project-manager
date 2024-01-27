import { Prisma } from "@prisma/client";
import { TaskSchemaDto } from "../../actions";
import { prismaClient } from "../../prisma/client";

export async function createTask(task: TaskSchemaDto, members: string[]) {
    try {
        await prismaClient.tasks.create({
            data: {
                description: task.description,
                name: task.name,
                labels_json: task.labels,
                task_status: task.task_status,
                due_date: task.dueDate,
                time_estimate: task.timeEstimate,
                project_id: task.projectId,
                taskmembers: {
                    createMany: {
                        data: members.map(x => ({ user_id: x }))
                    }
                }
            }
        })
    } catch (error) {
        console.error(error);
        throw new Error(`Error creating task: ${task.name}`)
    }
}