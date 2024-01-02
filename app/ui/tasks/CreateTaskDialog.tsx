'use client';
import { TaskViewModel } from "@/app/lib/models/tasks";
import { Label } from "@/app/lib/models/labels";
import { Member } from "@/app/lib/models/members";
import { Dialog } from "../shared/Dialog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CreateTask } from "./CreateTask";

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
    const searchParams = useSearchParams();
    const router = useRouter();
    const displayCreateModal = searchParams.get('createTaskOpen') == 'true';

    const handleDismiss = () => {
        const params = new URLSearchParams(searchParams);
        params.set('createTaskOpen', 'false');
        const newUrl = `${pathname}?${params.toString()}`
        router.replace(newUrl);
    }

    return (
        displayCreateModal && <Dialog onDismissHandler={handleDismiss}>
            <CreateTask
                taskVm={taskVm}
                labels={labels}
                projectId={projectId}
                projectMembers={projectMembers}
                actionFn={actionFn} />
        </Dialog>
    )
}