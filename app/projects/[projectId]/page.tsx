import { fetchProjectLabels } from "@/app/lib/data/labels/getLabels";
import { fetchTasksByStatus } from "@/app/lib/data/tasks/getTasks";
import { fetchProjectUsers } from "@/app/lib/data/users/getProjectUsers";
import { Label } from "@/app/lib/models/labels";
import { Member } from "@/app/lib/models/members";
import { TaskGroupByStatus } from "@/app/lib/models/tasks";
import { CreateTaskDialog } from "@/app/ui/tasks/CreateTaskDialog";
import { TasksByStatus } from "@/app/ui/tasks/TasksByStatus";

export const dynamic = 'force-dynamic';

export default async function ProjectTasksPage({ params, searchParams }: { params: { projectId: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
    const projectId = params.projectId;
    const displayModal = !!searchParams['modalOpen'];
    const projectMembers: Member[] = await fetchProjectUsers(projectId);
    const projectLabels: Label[] = await fetchProjectLabels(projectId);
    const groups: TaskGroupByStatus = await fetchTasksByStatus(projectId);
    return (
        <>
            <div className="flex justify-center">
                <TasksByStatus groups={groups} />
            </div>
            {
                displayModal && <CreateTaskDialog projectId={projectId} labels={projectLabels} projectMembers={projectMembers} />
            }
        </>
    )
}