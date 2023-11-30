import { fetchTasksByStatus } from "../lib/data/tasks/getTasks";
import { TaskGroupByStatus } from "../lib/models/tasks";
import { TasksByStatus } from "../ui/tasks/TasksByStatus";

export const dynamic = 'force-dynamic';

export default async function BoardPage() {
    const groups: TaskGroupByStatus = await fetchTasksByStatus('cd33b60b-4c0a-4b96-aefe-8d620f55f8fc');
    return (
        <div className="flex justify-center">
            <TasksByStatus groups={groups}/>
        </div>
    )
}
