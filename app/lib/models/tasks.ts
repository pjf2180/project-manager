export type Task = {
    id: string;
    projectId: string; // FK
    name: string;
    description?: string;
    time_estimate: number; // hours
    dueDate: Date;
}