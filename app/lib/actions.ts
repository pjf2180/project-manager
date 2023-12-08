'use server';
import { z } from 'zod';
import { Label } from './models/labels';
import { createTasks } from './data/tasks/createTasks';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


const TaskSchema = z.object({
    name: z.string().max(50),
    description: z.string().max(1024),
    timeEstimate: z.coerce.number().gt(0),
    dueDate: z.string(),
    labels: z.string(),
    members: z.string(),
    projectId: z.string()
});
export type TaskSchemaDto = z.infer<typeof TaskSchema>;
const ValidateTaskSchema = TaskSchema.omit({});

const TaskLabelSchema = z.object({
    color: z.enum(['green', 'blue', 'red'], {
        invalid_type_error: 'Invalid label color'
    }),
    text: z.string().max(30),
}).array();
const ValidateLabels = TaskLabelSchema;

const TaskMembersSchema = z.array(z.string());
const ValidateMembers = TaskMembersSchema;


export async function createInvoice(formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries());
    try {
        const validatedTask = ValidateTaskSchema.parse(rawFormData);
        const labelsJson = formData.get('labels')?.toString();
        const labels: Label[] = JSON.parse(labelsJson as string);
        ValidateLabels.parse(labels);
        const membersJson = formData.get('members')?.toString();
        const memberIds: string[] = JSON.parse(membersJson as string);
        ValidateMembers.parse(memberIds);
        console.log('validation successful');
        await createTasks([validatedTask])
        console.log('Created task successfully');
    } catch (error) {
        console.error(error);
        return {
            message: 'Invalid form data'
        }
    }
    revalidatePath('/board');
    redirect(`/projects/${formData.get('projectId')}`);
}
