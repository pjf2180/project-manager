import { Task } from "@/app/lib/models/tasks"
import { TaskPreviewCard } from "./TaskPreviewCard"
import { NewTaskLink } from "./NewTaskLink"
import clsx from "clsx"

export function TaskColumn({ status, count, tasks = [] }: { status: string, count: number, tasks: Task[] }) {
    const getTopBorder = (status: string) => {
        console.log(status);
        switch(status){
            case 'open':
                return '';
            case 'progress':
                return 'border-t-green'
            case 'closed':
                return 'border-t-violet'
        }
    }
    const topBorder = getTopBorder(status);
    return <div className="flex flex-col gap-8 w-[350px]">
        <div className={clsx('p-8 flex flex-row justify-between border-2 rounded-md text-sm text-main font-semibold', topBorder )}>
            <div>{status.toUpperCase()}</div>
            <div className="text-gray">{count}</div>
        </div>
        <div>
            {
                tasks.map((t: Task, i: number) => {
                    return <TaskPreviewCard key={t.id} task={t} idx={i} />
                })
            }
            <NewTaskLink />
        </div>
    </div>
}