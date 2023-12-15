'use client';
import * as React from 'react';
import { TaskLabelPreview } from './TaskLabelPreview';
import { UsersPreview } from '../users/UsersPreview';
import { Task } from '@/app/lib/models/tasks';
import clsx from 'clsx';
import { TaskDueDateWarning } from './TaskDueDateWarning';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type TaskPreviewCardProps = {
    task: Task, idx: number, currentDate: Date
}

export function TaskPreviewCard({ task, idx, currentDate }: TaskPreviewCardProps) {
    const { dueDate, name, members, labels }: Task = task;
    const pathname = usePathname();
    return (
        <Link href={`${pathname}?taskDetails=${task.id}`}>
            <div
                className={
                    clsx('flex flex-col gap-6 p-6 border-2 border-b-0',
                        { 'rounded-t-md': idx == 0 })
                }
            >
                {/* {
                image && <div className="flex flex-row justify-between items-center ">
                <div className="text-white">Image</div>
                </div>
            } */}
                {
                    labels && <div className="flex flex-row justify-between items-center ">
                        <TaskLabelPreview labels={labels} />
                    </div>
                }
                <div className="flex flex-row justify-start gap-2 items-center">
                    <div className="text-black">{name}</div>
                </div>
                <div className="flex flex-row justify-between items-center ">
                    <UsersPreview members={members} />
                    <TaskDueDateWarning displayDueDate={false} currentDate={currentDate} dueDate={dueDate} />

                </div>
            </div>
        </Link>
    );
}