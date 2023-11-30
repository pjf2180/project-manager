import { Task, TaskGroupByStatus, TaskStatus } from "@/app/lib/models/tasks";
import { TaskColumn } from "./TaskColumn";

export function TasksByStatus({ groups }: { groups: TaskGroupByStatus }) {

    const groupKeys: TaskStatus[] = Object.keys(groups) as TaskStatus[];

    return <div className="max-w-6xl md:flex">
        {
            groupKeys.map((key: TaskStatus) => {
                const groupTasks: Task[] = groups[key];
                return (<div className="w-full md:w-1/3 p-4 border border-solid border-white">
                    <TaskColumn count={groupTasks.length} status={key} tasks={groupTasks} />
                </div>)
            })
        }
    </div>
}