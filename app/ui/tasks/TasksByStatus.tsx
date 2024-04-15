import { Task, TaskGroupByStatus, TaskStatus } from "@/app/lib/models/tasks";
import { TaskColumn } from "./TaskColumn";

export function TasksByStatus({ groups }: { groups: TaskGroupByStatus }) {
  const groupKeys: TaskStatus[] = Object.keys(groups) as TaskStatus[];

  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 md:gap-2 mx-auto px-2 max-w-[1024px]">
      {groupKeys.map((key: TaskStatus) => {
        const groupTasks: Task[] = groups[key];
        return (
          <TaskColumn
            count={groupTasks.length}
            status={key}
            tasks={groupTasks}
          />
        );
      })}
    </div>
  );
}
