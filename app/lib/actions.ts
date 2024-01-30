'use server';
import { z } from 'zod';
import { Label } from './models/labels';
import { createTask } from './data/tasks/createTasks';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { editTask } from './data/tasks/editTasks';
import { signIn, signOut } from '../../auth';
import { AuthError } from 'next-auth';

const TaskSchema = z.object({
  name: z.string().max(50),
  description: z.string().max(1024),
  timeEstimate: z.coerce.number().gt(0),
  dueDate: z.string(),
  labels: z.string(),
  members: z.string(),
  projectId: z.string(),
  todos_json: z.string(),
  task_status: z.enum(['progress', 'open', 'closed'])
});
export type TaskSchemaDto = z.infer<typeof TaskSchema>;
const TaskUpdateSchema = TaskSchema.partial().extend({ id: z.string() });
export type TaskUpdate = z.infer<typeof TaskUpdateSchema>;
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
    rawFormData["dueDate"] = new Date(rawFormData["dueDate"].toString()).toISOString();
    const validatedTask = ValidateTaskSchema.parse(rawFormData);
    const labelsJson = formData.get('labels')?.toString();
    const labels: Label[] = JSON.parse(labelsJson as string);
    ValidateLabels.parse(labels);
    const membersJson = formData.get('members')?.toString();
    const memberIds: string[] = JSON.parse(membersJson as string);
    ValidateMembers.parse(memberIds);
    await createTask(validatedTask, memberIds);
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

export async function updateTaskAction(formData: FormData) {
  const rawData = Object.fromEntries(formData);
  try {
    const validatedTask = TaskUpdateSchema.parse(rawData);
    await editTask(validatedTask as TaskUpdate);
    console.log('Succesfully updated task', rawData);
  } catch (error) {
    console.error(error);
  }
  revalidatePath(`/projects/${formData.get('taskId')}`)
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}