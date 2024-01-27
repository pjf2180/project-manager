import { User } from "../../models/members";
import { prismaClient } from "../../prisma/client";

export async function fetchProjectUsers(projectId: string): Promise<User[]> {
    try {
        const userProjects = await prismaClient.users.findMany({
            where: {
                projectmembers: {
                    some: {
                        project_id: projectId
                    }
                }
            }
        });
        return userProjects.map((u): User => ({
            email: u.email,
            id: u.id,
            lastName: u.last_name,
            name: u.name,
            password: '',
            profileImage: ''
        }))
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching project users for project:' + projectId);
    }
}