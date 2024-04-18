import { Task } from "@/app/lib/models/tasks";
import { TaskPreviewCard } from "./TaskPreviewCard";
import { NewTaskLink } from "./NewTaskLink";
import clsx from "clsx";

export function TaskColumn({
  status,
  count,
  tasks = [],
}: {
  status: string;
  count: number;
  tasks: Task[];
}) {
  const getTopBorder = (status: string) => {
    switch (status) {
      case "open":
        return "";
      case "progress":
        return "border-t-green";
      case "closed":
        return "border-t-violet";
    }
  };
  const topBorder = getTopBorder(status);
  return (
    <div className="flex flex-col gap-8 min-w-[250px] max-w-[450px] w-full my-8">
      <div
        className={clsx(
          "bg-white p-8 flex flex-row justify-between border-2 rounded-md text-sm text-main font-semibold",
          topBorder
        )}
      >
        <div>{status.toUpperCase()}</div>
        <div className="text-gray">{count}</div>
      </div>
      <div>
        {tasks.map((t: Task, i: number) => {
          return (
            <TaskPreviewCard
              key={t.id}
              currentDate={new Date()}
              task={t}
              idx={i}
            />
          );
        })}
        <NewTaskLink>
          <div
            className={clsx(
              "bg-white flex justify-center border-2 p-5  text-xs text-gray",
              tasks.length == 0 ? "rounded-md" : "rounded-b-md"
            )}
          >
            ADD NEW TASK
          </div>
        </NewTaskLink>
      </div>
    </div>
  );
}
