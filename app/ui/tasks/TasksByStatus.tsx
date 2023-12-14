import { Task, TaskGroupByStatus, TaskStatus } from "@/app/lib/models/tasks";
import { TaskColumn } from "./TaskColumn";

export function TasksByStatus({ groups }: { groups: TaskGroupByStatus }) {

    const groupKeys: TaskStatus[] = Object.keys(groups) as TaskStatus[];

    return <div className="md:flex gap-8">
        {
            groupKeys.map((key: TaskStatus) => {
                const groupTasks: Task[] = groups[key];
                return (<div className="w-full md:w-1/3 ">
                    <TaskColumn count={groupTasks.length} status={key} tasks={groupTasks} />
                </div>)
            })
        }
    </div>
}