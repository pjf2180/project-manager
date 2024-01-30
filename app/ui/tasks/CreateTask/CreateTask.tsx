import { Label } from "@/app/lib/models/labels";
import { User } from "@/app/lib/models/members";
import { TaskViewModel } from "../../../lib/models/tasks";
import Link from "next/link";
import { MemberDropdown } from "../../users/MemberDropdown";
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { LabelSelector } from "../../shared/inputs/labels";

export type CreateTaskFormData = {
    name: string;
    description: string;
    memberIds: string[];
    timeEstimate?: number;
    dueDate: string;
    labels: any[];
}

export type CreateTaskDialogProps = {
    projectId: string;
    taskVm?: TaskViewModel;
    projectMembers: User[];
    labels: Label[];
    actionFn: (formData: FormData) => void
}
export function CreateTask({ taskVm, projectId, projectMembers, labels, actionFn }: CreateTaskDialogProps) {
    const pathname = usePathname();
    const [formData, setFormData] = useState<CreateTaskFormData>({
        name: '',
        description: '',
        memberIds: [],
        timeEstimate: 0,
        dueDate: '',
        labels: []
    });
    const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target } = e;
        const { value, name } = target;
        setFormData((prevData: CreateTaskFormData) => {
            return { ...prevData, [name]: value }
        });
    };
    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-between p-4 pl-8 pr-8 border-b-2 ">
                <div className="font-semibold text-xl text-main">Create Task</div>
                <div className="font-light text-2xl text-slate-400"><Link href={`${pathname}`}>x</Link></div>
            </div>
            <div className="pt-4 flex-1 overflow-scroll">
                <form action={actionFn}>
                    <div className="pl-8 pr-8">
                        <div className="flex flex-col mb-3">
                            <label className="text-sm text-secondary pb-1" htmlFor="task-name">Task Name</label>
                            <input className="border-2 rounded-md p-3" id="task-name" name="name" type="text" value={formData.name} onChange={onInputChange} />
                        </div>

                        <div className="flex flex-col mb-3">
                            <label className="text-sm text-secondary pb-1" htmlFor="myTextarea">DESCRIPTION</label>
                            <textarea id="myTextarea" className="p-3 border rounded-md" rows={4} name="description" value={formData.description} onChange={onInputChange} />
                        </div>

                        <div className="flex mb-3">
                            <div className="w-full bg-white">
                                <div className="flex flex-col">
                                    <label className="text-sm text-secondary" htmlFor="task-name">ASSIGNED TO</label>
                                    <MemberDropdown members={projectMembers} selectedMemberIds={[]} />
                                </div>
                            </div>
                        </div>


                        <div className="flex mb-3">
                            <div className="flex flex-col w-1/2 bg-white">
                                <label className="text-sm text-secondary" htmlFor="timeEstimate">ESTIMATED TIME(HOURS)</label>
                                <input
                                    className="border rounded-md p-3"
                                    type="number"
                                    id="timeEstimate"
                                    name="timeEstimate"
                                    value={formData.timeEstimate}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="flex flex-col w-1/2 bg-white ml-4">
                                <label className="text-sm text-secondary" htmlFor="dueDate">DUE DATE</label>
                                <input
                                    className="border rounded-md p-3"
                                    type="text"
                                    id="dueDate"
                                    name="dueDate"
                                    value={formData.dueDate}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <LabelSelector
                                name="labels"
                                initialSelection={[]}
                                optionLabels={labels} />
                        </div>

                    </div>
                    {/* Footer */}
                    <div className="flex justify-between p-4 pl-8 pr-8 border-t-2 mt-6">
                        <div className="flex">
                            <button className="p-1 pr-4 pl-4 rounded-md border-2 text-sm text-secondary bg-slate-100">
                                <Link href={`${pathname}`}>Cancel</Link>
                            </button>
                        </div>
                        <div className="flex justify-end gap-4">
                            <div className="flex">
                                <button type="submit" className="p-2 pr-4 pl-4 rounded-md border-2 bg-green text-white">Create Task</button>
                            </div>
                        </div>
                        <input type="hidden" name="task_status" value="open" />
                        <input type="hidden" name="projectId" value={projectId} />
                    </div>
                </form>
            </div>
        </div>
    )
}