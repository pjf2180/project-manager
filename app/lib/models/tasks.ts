import { Label } from "./labels";
import { User } from "./members";

export type Task = {
    id: string;
    projectId: string; // FK
    name: string;
    status: TaskStatus;
    description?: string;
    time_estimate: number; // hours
    dueDate: Date;
    members: User[];
    created_at: Date;
    labels?: Label[];
    todos: TaskTodo[];
};

export type TaskStatus = 'open' | 'progress' | 'closed';

export type TaskGroupByStatus = {
    [key in TaskStatus]: Task[];
};

export type TaskTodo = {
    text: string;
    completed: boolean;
}

export type TaskViewModel = {
    task: Task,
    todo: TaskTodo[]
}