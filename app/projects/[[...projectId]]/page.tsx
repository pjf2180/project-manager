import { fetchProjectLabels } from "@/app/lib/data/labels/getLabels";
import { fetchTasksByStatus } from "@/app/lib/data/tasks/getTasks";
import { fetchProjectUsers } from "@/app/lib/data/users/getProjectUsers";
import { Label } from "@/app/lib/models/labels";
import { User } from "@/app/lib/models/members";
import { Task, TaskGroupByStatus } from "@/app/lib/models/tasks";
import { CreateTaskDialog } from "../../ui/tasks/CreateTask/CreateTaskDialog";
import { TasksByStatus } from "@/app/ui/tasks/TasksByStatus";
import { createInvoice } from "@/app/lib/actions";
import { TaskDetailsDialog } from "@/app/ui/tasks/TaskDetails/TaskDetailsDialog";

export const dynamic = "force-dynamic";

export default async function ProjectTasksPage({
  params,
  searchParams,
}: {
  params: { projectId: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const projectId = params.projectId[0];

  const projectMembers: User[] = await fetchProjectUsers(projectId);
  const projectLabels: Label[] = await fetchProjectLabels(projectId);
  const groups: TaskGroupByStatus = await fetchTasksByStatus(projectId);
  const getSelectedTask = (): Task | undefined => {
    for (let i = 0; i < groups.open.length; i++) {
      const task = groups.open[i];
      if (task.id == searchParams["taskDetails"]) {
        task.todos = [
          {
            completed: true,
            text: "Login redesign",
          },
          {
            completed: false,
            text: "Login form validation",
          },
        ];
        return task;
      }
    }
    for (let i = 0; i < groups.closed.length; i++) {
      const task = groups.closed[i];
      if (task.id == searchParams["taskDetails"]) {
        task.todos = [
          {
            completed: true,
            text: "Login redesign",
          },
          {
            completed: false,
            text: "Login form validation",
          },
        ];
        return task;
      }
    }
    for (let i = 0; i < groups.progress.length; i++) {
      const task = groups.progress[i];
      if (task.id == searchParams["taskDetails"]) {
        task.todos = [
          {
            completed: true,
            text: "Login redesign",
          },
          {
            completed: false,
            text: "Login form validation",
          },
        ];
        return task;
      }
    }
  };
  return (
    <>
      <TasksByStatus groups={groups} />
      <CreateTaskDialog
        actionFn={createInvoice}
        projectId={projectId}
        labels={projectLabels}
        projectMembers={projectMembers}
      />

      <TaskDetailsDialog task={getSelectedTask()} />
    </>
  );
}
