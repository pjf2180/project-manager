import { Task, TaskTodo } from "@/app/lib/models/tasks";
import { UsersPreview } from "../../users/UsersPreview";
import { Label } from "@/app/lib/models/labels";
import { LabelChip } from "../../shared/labels/LabelChip";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { TaskDueDateWarning } from "../TaskDueDateWarning";
import { TaskTodoList } from "./TaskTodoList/TaskTodoList";

export type TaskDetailProps = {
    task: Task,
    currentDate: Date,
    onClose: Function,
    updateTaskAction: (formData: FormData) => void
}

export function TaskDetails({ task, currentDate, onClose, updateTaskAction }: TaskDetailProps) {
    const { name, description, time_estimate, created_at, dueDate, members, labels = [], status } = task;
    const formRef = useRef<HTMLFormElement | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string>(status);
    const [todosState, setTodosState] = useState<TaskTodo[]>(task.todos);

    const handleStatusSelection = (e: ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setSelectedStatus(newValue);
    }

    useEffect(() => {
        const form = formRef.current
        form?.requestSubmit();
        console.log('Hi')
    }, [selectedStatus, todosState]);

    const handleTodoChange = (updatedTodos: TaskTodo[]) => {
        setTodosState(updatedTodos);
    }

    return <div className="flex flex-col h-full">
        <form ref={formRef} action={updateTaskAction}>
            <div className="flex justify-between p-8 border-b-2">
                <div className="text-main font-semibold text-xl">{name}</div>
                <div className="flex gap-5">
                    <input type="hidden" name="id" value={task.id} />
                    <select id="myDropdown" name="task_status" value={selectedStatus} onChange={handleStatusSelection}>
                        <option value="" disabled>Select...</option>
                        <option value="open">Open</option>
                        <option value="progress">In Progress</option>
                        <option value="closed">Closed</option>
                    </select>

                    <div className="font-light text-2xl text-slate-400 cursor-pointer" onClick={() => onClose()}>x</div>
                </div>
            </div>
            <div className="p-8 overflow-scroll flex-1 ">
                <div className="mb-8">
                    <div className="mb-5 text-sm text-secondary">DESCRIPTION</div>
                    <p className="text-base text-main">{description}</p>
                </div>
                <div className="mb-8">
                    <input type="hidden" name="todos_json" value={JSON.stringify(todosState)} />
                    <TaskTodoList
                        todos={todosState}
                        onChange={handleTodoChange} />
                </div>
                <div className="mb-8 flex gap-8">
                    <div className="w-[150px]">
                        <div className="mb-5 mr-8 text-sm text-secondary">TIME ESTIMATE</div>
                        <div className="text-main">{time_estimate} hours</div>
                    </div>
                    <div>
                        <div className="mb-5 text-sm text-secondary">CREATED</div>
                        <div className="text-base text-main">{created_at.toLocaleDateString('en-US')}</div>
                    </div>
                    <div>
                        <div className="mb-5 text-sm text-secondary">DUE DATE</div>
                        <TaskDueDateWarning currentDate={currentDate} dueDate={dueDate} />
                    </div>
                </div>
                <div className="mb-8 flex gap-8">
                    <div className="w-[150px]">
                        <div className="mb-5 mr-8 text-sm text-secondary">ASSIGNED TO</div>
                        <div className="text-main">
                            <UsersPreview members={members} />
                        </div>
                    </div>
                    <div>
                        <div className="mb-5 text-sm text-secondary">CREATED BY</div>
                        <div className="text-base text-main">YOURSELF</div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="mb-5 mr-8 text-sm text-secondary">LABELS</div>
                    <div className="flex gap-2.5 text-main">
                        {
                            labels.map((label: Label) => {
                                return <LabelChip label={label} />
                            })
                        }
                    </div>
                </div>
            </div>
        </form>
    </div>
}