import { Task } from "@/app/lib/models/tasks"
import { TaskPreviewCard } from "./TaskPreviewCard"

export function TaskColumn({ status, count, tasks = [] }: { status: string, count: number, tasks: Task[] }) {
    return <div className="flex flex-col gap-6">
        <div className="p-6 flex flex-row justify-between border-2 border-stone-100 text-black-800">
            <div>{status.toUpperCase()}</div>
            <div className="text-black-400">{count}</div>
        </div>
        <div>
            {
                tasks.map((t: Task) => {
                    return <TaskPreviewCard key={t.id} task={t} />
                })
            }
        </div>
    </div>
}