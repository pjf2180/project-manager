import * as React from 'react';
import {TaskLabelPreview} from './TaskLabelPreview';
import { UsersPreview } from '../users/UsersPreview';
import { Task } from '@/app/lib/models/tasks';

export function TaskPreviewCard({ task }: { task: Task }) {
    const { dueDate, name, members, labels }: Task = task;
    return (<div className="flex flex-col gap-6 p-6 border-2 border-stone-100">
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
            <p>{dueDate.toString()}</p>
        </div>
    </div>);
}