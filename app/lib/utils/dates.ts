export function calculateDaysRemaining(currentDate: string | Date, dueDate: string | Date): number {
    const currentDateTime: Date = typeof currentDate === 'string' ? new Date(currentDate) : currentDate;
    const dueDateTime: Date = typeof dueDate === 'string' ? new Date(dueDate) : dueDate;

    // Calculate the difference in milliseconds
    const timeDifference = dueDateTime.getTime() - currentDateTime.getTime();

    // Convert the difference to days
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    // Round to the nearest whole number and return
    return Math.round(daysDifference);
}