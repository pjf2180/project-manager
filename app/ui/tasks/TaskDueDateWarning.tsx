import { calculateDaysRemaining } from "../../lib/utils/dates";

export type TaskDueDateWarningProps = {
    currentDate: Date;
    dueDate: Date;
}
export function TaskDueDateWarning({ currentDate, dueDate }: TaskDueDateWarningProps) {
    const remainingDays = calculateDaysRemaining(currentDate, dueDate);
    if (remainingDays > 5) {
        return null;
    }
    return (
        <div className="rounded-md text-sm text-white p-1 w-fit bg-orange">
            {
                remainingDays > 1 && 'IN ' + remainingDays.toString() + ' DAYS'
            }
            {
                remainingDays == 1 && 'TOMORROW'
            }
        </div>
    );
}