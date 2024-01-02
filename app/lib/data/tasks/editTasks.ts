import { TaskUpdate } from "../../actions";
import { createClient } from '@vercel/postgres';
import format from 'pg-format';

type SQLAssignment = { identifier: string, literal: string | number | undefined }

export async function editTask(taskUpdate: TaskUpdate) {
    const client = createClient();
    await client.connect();
    try {
        const assignments: SQLAssignment[] = getColumnAssignments(taskUpdate);
        const template = `UPDATE tasks SET ${createAssignmentTemplate(assignments)} WHERE id = '${taskUpdate.taskId}'`;
        const values = getTemplateValues(assignments);
        const sqlQuery = format(template, ...values);
        await client.query(sqlQuery);
    } catch (error) {
        console.error(error);
        throw error;
    }
    await client.end();
}

function getColumnAssignments(taskUpdate: TaskUpdate): SQLAssignment[] {

    const updatePairs: SQLAssignment[] = [];

    for (const key in taskUpdate) {
        if (key !== 'taskId' &&
            taskUpdate.hasOwnProperty(key as keyof TaskUpdate) &&
            notNullOrUndefined(taskUpdate[key as keyof TaskUpdate])
        ) {
            const pair: SQLAssignment = {
                identifier: key,
                literal: taskUpdate[key as keyof TaskUpdate]
            };
            updatePairs.push(pair);
        }
    }
    return updatePairs;
}

function createAssignmentTemplate(assignments: SQLAssignment[]) {
    return assignments.map(() => {
        return `%I = %L`
    });
}

function getTemplateValues(assignments: SQLAssignment[]): (string | number | undefined)[] {
    return assignments
        .reduce((accum: (string | number | undefined)[], current: SQLAssignment) => {
            const { identifier, literal } = current;
            return [...accum, identifier, literal];
        }, []);
}

function notNullOrUndefined(val: any) {
    return val != null && val != undefined;
}