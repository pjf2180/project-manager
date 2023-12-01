import { fetchTasksByStatus } from "../../lib/data/tasks/getTasks";
import { TaskGroupByStatus } from "../../lib/models/tasks";
import { TasksByStatus } from "../../ui/tasks/TasksByStatus";

export const dynamic = 'force-dynamic';

export default async function BoardPage({ params }: { params: { projectId: string } }) {
    const groups: TaskGroupByStatus = await fetchTasksByStatus(params.projectId);
    return (
        <div className="flex justify-center">
            <TasksByStatus groups={groups}/>
        </div>
    )
}
