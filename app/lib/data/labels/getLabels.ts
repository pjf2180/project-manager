import { Prisma } from "@prisma/client";
import { Label } from "../../models/labels";
import { prismaClient } from "../../prisma/client";

export async function fetchProjectLabels(projectId: string): Promise<Label[]> {
    let labels: Label[] = [];
    try {
        const project = await prismaClient.projects.findUniqueOrThrow({
            where: {
                id: projectId,
            },
            include: {
                organizations: {
                    include: {
                        labelgroups: true
                    }
                }
            }
        });
        const labelsJson = project.organizations.labelgroups?.options_json;
        if (labelsJson) {
            labels = JSON.parse((<Prisma.JsonArray>labelsJson).toString());
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching projects labels');
    }
    return labels;
}