'use client';
import { TaskViewModel } from "@/app/lib/models/tasks";
import { LabelSelector } from "../shared/inputs/labels";
import { Label } from "@/app/lib/models/labels";
import { ChangeEvent, useState } from "react";
import { Member } from "@/app/lib/models/members";
import { MemberDropdown } from "../users/MemberDropdown";
import { Dialog } from "../shared/Dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    projectMembers: Member[];
    labels: Label[];
    actionFn: (formData: FormData) => void
}

export function CreateTaskDialog({ taskVm, projectId, projectMembers, labels, actionFn }: CreateTaskDialogProps) {

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
        <Dialog>
            <form action={actionFn}>
                <div className="bg-white rounded-md" style={{ width: '600px' }}>
                    <div className="flex justify-between p-4 pl-8 pr-8 border-b-2 mb-4 ">
                        <div className="font-semibold text-2xl">Create Task</div>
                        <div className="font-light text-2xl text-slate-400"><Link href={`${pathname}`}>x</Link></div>
                    </div>
                    <div className="pl-8 pr-8">
                        <div className="flex flex-col mb-3">
                            <label className="pb-1" htmlFor="task-name">Task Name</label>
                            <input className="border-2 rounded-md p-3" id="task-name" name="name" type="text" value={formData.name} onChange={onInputChange} />
                        </div>

                        <div className="flex flex-col mb-3">
                            <label className="pb-1" htmlFor="myTextarea">DESCRIPTION</label>
                            <textarea id="myTextarea" className="p-3 border rounded-md" rows={4} name="description" value={formData.description} onChange={onInputChange} />
                        </div>

                        <div className="flex mb-3">
                            <div className="w-full bg-white">
                                <div className="flex flex-col">
                                    <label className="" htmlFor="task-name">ASSIGNED TO</label>
                                    <MemberDropdown members={projectMembers} selectedMemberIds={[]} />
                                </div>
                            </div>
                        </div>


                        <div className="flex mb-3">
                            <div className="flex flex-col w-1/2 bg-white">
                                <label htmlFor="timeEstimate">ESTIMATED TIME(HOURS)</label>
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
                                <label htmlFor="dueDate">DUE DATE</label>
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
                            <button className="p-2 pr-4 pl-4 rounded-md border-2 bg-slate-100">
                                <Link href={`${pathname}`}>Cancel</Link>
                            </button>
                        </div>
                        <div className="flex justify-end gap-4">
                            <div className="flex">
                                <button type="submit" className="p-2 pr-4 pl-4 rounded-md border-2 bg-green-600 text-white">Create Task</button>
                            </div>
                        </div>
                        <input type="hidden" name="projectId" value={projectId} />
                    </div>
                </div>
            </form>
        </Dialog>
    )
}