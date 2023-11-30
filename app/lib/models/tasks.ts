import { Label } from "./labels";
import { Member } from "./members";

export type Task = {
    id: string;
    projectId: string; // FK
    name: string;
    status: TaskStatus;
    description?: string;
    time_estimate: number; // hours
    dueDate: Date;
    members: Member[];
    labels?: Label[];
};

export type TaskStatus = 'open' | 'progress' | 'closed';

export type TaskGroupByStatus = {
    [key in TaskStatus]: Task[];
};
