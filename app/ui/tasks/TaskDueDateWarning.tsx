import { calculateDaysRemaining } from "../../lib/utils/dates";

export type TaskDueDateWarningProps = {
    currentDate: Date;
    dueDate: Date;
    displayDueDate?: boolean
}
export function TaskDueDateWarning({ currentDate, dueDate, displayDueDate = true }: TaskDueDateWarningProps) {
    const remainingDays = calculateDaysRemaining(currentDate, dueDate);
    if (remainingDays <= 0) {
        return (
            <div className="rounded-md text-sm text-white p-1 w-fit bg-orange">
                OVERDUE
            </div>
        );
    }
    if (remainingDays > 5) {
        return displayDueDate ? currentDate.toLocaleDateString('en-US') : null;
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