import { Project } from "../../models/projects";
import { prismaClient } from "../../prisma/client";

export async function fetchProjects(userId: string): Promise<Project[]> {
    try {
        const projects = await prismaClient.projects.findMany({
            include: {
                projectmembers: {
                    where: {
                        user_id: userId
                    }
                },
            },
        });
        return projects.map(p => ({
            name: p.name,
            id: p.id
        }));
    } catch (error) {
        throw new Error(`Error fetching projects for user: ${userId}`);
    }
}