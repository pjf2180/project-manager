import { sql } from "@vercel/postgres";
import { Task, TaskGroupByStatus } from "../../models/tasks";
import { Label } from "../../models/labels";
import { Member } from "../../models/members";

export async function fetchTasksByStatus(projectId: string): Promise<TaskGroupByStatus> {
    // const response: TaskGroupByStatus = {
    //     closed: [
    //         {
    //             description: 'The description for this task',
    //             dueDate: new Date('2023-11-30T02:31:37.750Z'),
    //             id: '0',
    //             labels: [
    //                 {
    //                     color: 'green',
    //                     id: '0',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'blue',
    //                     id: '1',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'red',
    //                     id: '2',
    //                     text: 'design'
    //                 }
    //             ],
    //             members: [
    //                 {
    //                     email: 'johnappleseed@gmail.',
    //                     id: '0',
    //                     lastName: 'appleSeed',
    //                     name: 'John',
    //                     profileImage: ''
    //                 },
    //                 {
    //                     email: 'jehnappleseed@gmail.',
    //                     id: '1',
    //                     lastName: 'appleSeed',
    //                     name: 'Jen',
    //                     profileImage: ''
    //                 }
    //             ],
    //             name: 'Website Redesign',
    //             projectId: 'asdffsd',
    //             time_estimate: 45
    //         },
    //         {
    //             description: 'The description for this task',
    //             dueDate: new Date('2023-11-30T02:31:37.750Z'),
    //             id: '0',
    //             labels: [
    //                 {
    //                     color: 'green',
    //                     id: '0',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'blue',
    //                     id: '1',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'red',
    //                     id: '2',
    //                     text: 'design'
    //                 }
    //             ],
    //             members: [
    //                 {
    //                     email: 'johnappleseed@gmail.',
    //                     id: '0',
    //                     lastName: 'appleSeed',
    //                     name: 'John',
    //                     profileImage: ''
    //                 },
    //                 {
    //                     email: 'jehnappleseed@gmail.',
    //                     id: '1',
    //                     lastName: 'appleSeed',
    //                     name: 'Jen',
    //                     profileImage: ''
    //                 }
    //             ],
    //             name: 'Website Redesign',
    //             projectId: 'asdffsd',
    //             time_estimate: 45
    //         },
    //         {
    //             description: 'The description for this task',
    //             dueDate: new Date('2023-11-30T02:31:37.750Z'),
    //             id: '0',
    //             labels: [
    //                 {
    //                     color: 'green',
    //                     id: '0',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'blue',
    //                     id: '1',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'red',
    //                     id: '2',
    //                     text: 'design'
    //                 }
    //             ],
    //             members: [
    //                 {
    //                     email: 'johnappleseed@gmail.',
    //                     id: '0',
    //                     lastName: 'appleSeed',
    //                     name: 'John',
    //                     profileImage: ''
    //                 },
    //                 {
    //                     email: 'jehnappleseed@gmail.',
    //                     id: '1',
    //                     lastName: 'appleSeed',
    //                     name: 'Jen',
    //                     profileImage: ''
    //                 }
    //             ],
    //             name: 'Website Redesign',
    //             projectId: 'asdffsd',
    //             time_estimate: 45
    //         },
    //         {
    //             description: 'The description for this task',
    //             dueDate: new Date('2023-11-30T02:31:37.750Z'),
    //             id: '0',
    //             labels: [
    //                 {
    //                     color: 'green',
    //                     id: '0',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'blue',
    //                     id: '1',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'red',
    //                     id: '2',
    //                     text: 'design'
    //                 }
    //             ],
    //             members: [
    //                 {
    //                     email: 'johnappleseed@gmail.',
    //                     id: '0',
    //                     lastName: 'appleSeed',
    //                     name: 'John',
    //                     profileImage: ''
    //                 },
    //                 {
    //                     email: 'jehnappleseed@gmail.',
    //                     id: '1',
    //                     lastName: 'appleSeed',
    //                     name: 'Jen',
    //                     profileImage: ''
    //                 }
    //             ],
    //             name: 'Website Redesign',
    //             projectId: 'asdffsd',
    //             time_estimate: 45
    //         }
    //     ],
    //     open: [
    //         {
    //             description: 'The description for this task',
    //             dueDate: new Date('2023-11-30T02:31:37.750Z'),
    //             id: '0',
    //             labels: [
    //                 {
    //                     color: 'green',
    //                     id: '0',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'blue',
    //                     id: '1',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'red',
    //                     id: '2',
    //                     text: 'design'
    //                 }
    //             ],
    //             members: [
    //                 {
    //                     email: 'johnappleseed@gmail.',
    //                     id: '0',
    //                     lastName: 'appleSeed',
    //                     name: 'John',
    //                     profileImage: ''
    //                 },
    //                 {
    //                     email: 'jehnappleseed@gmail.',
    //                     id: '1',
    //                     lastName: 'appleSeed',
    //                     name: 'Jen',
    //                     profileImage: ''
    //                 }
    //             ],
    //             name: 'Website Redesign',
    //             projectId: 'asdffsd',
    //             time_estimate: 45
    //         },
    //         {
    //             description: 'The description for this task',
    //             dueDate: new Date('2023-11-30T02:31:37.750Z'),
    //             id: '0',
    //             labels: [
    //                 {
    //                     color: 'green',
    //                     id: '0',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'blue',
    //                     id: '1',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'red',
    //                     id: '2',
    //                     text: 'design'
    //                 }
    //             ],
    //             members: [
    //                 {
    //                     email: 'johnappleseed@gmail.',
    //                     id: '0',
    //                     lastName: 'appleSeed',
    //                     name: 'John',
    //                     profileImage: ''
    //                 },
    //                 {
    //                     email: 'jehnappleseed@gmail.',
    //                     id: '1',
    //                     lastName: 'appleSeed',
    //                     name: 'Jen',
    //                     profileImage: ''
    //                 }
    //             ],
    //             name: 'Website Redesign',
    //             projectId: 'asdffsd',
    //             time_estimate: 45
    //         }
    //     ],
    //     progress: [
    //         {
    //             description: 'The description for this task',
    //             dueDate: new Date('2023-11-30T02:31:37.750Z'),
    //             id: '0',
    //             labels: [
    //                 {
    //                     color: 'green',
    //                     id: '0',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'blue',
    //                     id: '1',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'red',
    //                     id: '2',
    //                     text: 'design'
    //                 }
    //             ],
    //             members: [
    //                 {
    //                     email: 'johnappleseed@gmail.',
    //                     id: '0',
    //                     lastName: 'appleSeed',
    //                     name: 'John',
    //                     profileImage: ''
    //                 },
    //                 {
    //                     email: 'jehnappleseed@gmail.',
    //                     id: '1',
    //                     lastName: 'appleSeed',
    //                     name: 'Jen',
    //                     profileImage: ''
    //                 }
    //             ],
    //             name: 'Website Redesign',
    //             projectId: 'asdffsd',
    //             time_estimate: 45
    //         },
    //         {
    //             description: 'The description for this task',
    //             dueDate: new Date('2023-11-30T02:31:37.750Z'),
    //             id: '0',
    //             labels: [
    //                 {
    //                     color: 'green',
    //                     id: '0',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'blue',
    //                     id: '1',
    //                     text: 'design'
    //                 },
    //                 {
    //                     color: 'red',
    //                     id: '2',
    //                     text: 'design'
    //                 }
    //             ],
    //             members: [
    //                 {
    //                     email: 'johnappleseed@gmail.',
    //                     id: '0',
    //                     lastName: 'appleSeed',
    //                     name: 'John',
    //                     profileImage: ''
    //                 },
    //                 {
    //                     email: 'jehnappleseed@gmail.',
    //                     id: '1',
    //                     lastName: 'appleSeed',
    //                     name: 'Jen',
    //                     profileImage: ''
    //                 }
    //             ],
    //             name: 'Website Redesign',
    //             projectId: 'asdffsd',
    //             time_estimate: 45
    //         }
    //     ]
    // };

    const fakeLabels: Label[] = [{
        color: 'green',
        id: '0',
        text: 'design'
    },
    {
        color: 'blue',
        id: '1',
        text: 'design'
    },
    {
        color: 'red',
        id: '2',
        text: 'design'
    }];
    await new Promise((resolve) => setTimeout(resolve, 4000));
    try {
        const data = await sql`
        SELECT *
        FROM tasks
        WHERE project_id = ${projectId}
        ORDER BY created_at DESC
        LIMIT 10`;

        const projectTaskProms: Promise<Task>[] = data.rows.map(async (r) => {
            const members = await fetchMembersByTask(r.id);
            return {
                id: r.id,
                name: r.name,
                status: r.task_status,
                projectId: r.project_id,
                time_estimate: r.time_estimate,
                description: r.description,
                labels: [...fakeLabels],
                members,
                dueDate: new Date(r.due_date),
            }
        });
        const projectTasks: Task[] = await Promise.all(projectTaskProms);
        return {
            open: projectTasks.filter(p => p.status === 'open'),
            progress: projectTasks.filter(p => p.status === 'progress'),
            closed: projectTasks.filter(p => p.status === 'closed'),
        };
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the latest tasks.');
    }

}

export async function fetchMembersByTask(taskId: string): Promise<Member[]> {
    try {
        const taskMembers = await sql`
        SELECT u.*
        FROM tasks t
        JOIN taskmembers tskMem ON tskMem.task_id = t.id
        JOIN users u ON u.id = tskMem.user_id
        WHERE t.id = ${taskId}
        `;

        return taskMembers.rows.map((row) => {
            return {
                id: row.id,
                email: row.email,
                name: row.name,
                lastName: row.last_name,
                profileImage: row.profile_pic
            }
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}