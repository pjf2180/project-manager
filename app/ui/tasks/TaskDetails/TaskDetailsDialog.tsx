'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dialog } from "../../shared/Dialog";
import { TaskDetails } from "./TaskDetails";
import { Task } from "../../../lib/models/tasks";
import { updateTaskAction } from "@/app/lib/actions";

export function TaskDetailsDialog({ task }: { task?: Task }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentDate = new Date();

    const onDialogDismiss = () => {
        const params = new URLSearchParams(searchParams);
        params.set('taskDetails', 'null');
        const newUrl = `${pathname}?${params.toString()}`;
        router.replace(newUrl);
    }

    return task &&
        <Dialog
            onDismissHandler={onDialogDismiss}>
            <TaskDetails
                currentDate={currentDate}
                task={task} 
                onClose={onDialogDismiss}
                updateTaskAction={updateTaskAction}
                />
        </Dialog>
}