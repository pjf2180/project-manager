import { prismaClient } from "../app/lib/prisma/client";
import { $Enums, Prisma, PrismaClient } from "@prisma/client";
const client = new PrismaClient();
import bcrypt from 'bcrypt'

export async function seedOrgs(client: PrismaClient): Promise<string[]> {
    try {
        const organizationsSeedData: Prisma.organizationsCreateInput =
        {
            name: 'DEMO ORG',
            labelgroups: {
                create: {
                    options_json: JSON.stringify([
                        {
                            text: 'front-end',
                            color: 'green'
                        },
                        {
                            text: 'back-end',
                            color: 'blue'
                        },
                        {
                            text: 'Design',
                            color: 'red'
                        },
                    ])
                }
            }
        };
        const createdOrgs = await client.organizations.create({ data: organizationsSeedData });
        return [createdOrgs.id];
    } catch (error) {
        throw new Error('Error seeding organizations: ');
    }
}
export async function seedProjects(client: PrismaClient, organization_id: string) {
    try {
        const PROJECTS = [
            {
                id: 'cd33b60b-4c0a-4b96-aefe-8d620f55f8fc',
                name: 'Front-end Dev',
                tasks: [{
                    name: 'Website Redesign1',
                    status: 'open',
                    description: `Our brand & product have evolved over the past two years, and our website should be updated to reflect this. The new site will be mobile-first, responsive and lightweight. We should also focus on SEO with David Kelly my brother.
                    Feel free to discuss this project with Jason as well.`,
                    timeEstimate: 6,
                    dueDate: '2023-12-28',
                    labels_json: JSON.stringify([
                        {
                            text: 'front-end',
                            color: 'green'
                        },
                    ]),
                    todos: [
                        {
                            text: 'Build wireframe mockup',
                            completed: true
                        },
                        {
                            text: 'Finalize design',
                            completed: false
                        },
                        {
                            text: 'Implement design',
                            completed: false
                        },
                        {
                            text: 'Tests',
                            completed: false
                        },
                    ],
                },
                {
                    name: 'Website Redesign',
                    status: 'open',
                    description: `Our brand & product have evolved over the past two years, and our website should be updated to reflect this. The new site will be mobile-first, responsive and lightweight. We should also focus on SEO with David Kelly my brother.
                    Feel free to discuss this project with Jason as well.`,
                    timeEstimate: 6,
                    dueDate: '2023-12-28',
                    labels_json: JSON.stringify([
                        {
                            text: 'front-end',
                            color: 'green'
                        },
                    ]),
                    todos: [
                        {
                            text: 'Build wireframe mockup',
                            completed: true
                        },
                        {
                            text: 'Finalize design',
                            completed: false
                        },
                        {
                            text: 'Implement design',
                            completed: false
                        },
                        {
                            text: 'Tests',
                            completed: false
                        },
                    ],
                },]
            },
            {
                id: 'c4051e34-43cd-4024-9043-7dd3d05db77b',
                name: 'Back-end Dev',
                tasks: [{
                    name: 'Backend Refactor',
                    status: 'progress',
                    description: `Our brand & product have evolved over the past two years, and our website should be updated to reflect this. The new site will be mobile-first, responsive and lightweight. We should also focus on SEO with David Kelly my brother.
                    Feel free to discuss this project with Jason as well.`,
                    timeEstimate: 6,
                    dueDate: '2023-12-28',
                    labels_json: JSON.stringify([
                        {
                            text: 'front-end',
                            color: 'blue'
                        },
                    ]),
                    todos: [
                        {
                            text: 'Build wireframe mockup',
                            completed: true
                        },
                        {
                            text: 'Finalize design',
                            completed: false
                        },
                        {
                            text: 'Implement design',
                            completed: false
                        },
                        {
                            text: 'Tests',
                            completed: false
                        },
                    ],
                },
                {
                    name: 'Website Redesign',
                    status: 'closed',
                    description: `Our brand & product have evolved over the past two years, and our website should be updated to reflect this. The new site will be mobile-first, responsive and lightweight. We should also focus on SEO with David Kelly my brother.
                    Feel free to discuss this project with Jason as well.`,
                    timeEstimate: 6,
                    dueDate: '2023-12-28',
                    labels_json: JSON.stringify([
                        {
                            text: 'back-end',
                            color: 'blue'
                        },
                    ]),
                    todos: [
                        {
                            text: 'Build wireframe mockup',
                            completed: true
                        },
                        {
                            text: 'Finalize design',
                            completed: false
                        },
                        {
                            text: 'Implement design',
                            completed: false
                        },
                        {
                            text: 'Tests',
                            completed: false
                        },
                    ],
                },]
            },
            {
                id: 'c3051e34-43cd-4024-9043-7dd3d05db77b',
                name: 'Back-end Dev2',
                tasks: [{
                    name: 'Api Integration',
                    status: 'open',
                    description: `Our brand & product have evolved over the past two years, and our website should be updated to reflect this. The new site will be mobile-first, responsive and lightweight. We should also focus on SEO with David Kelly my brother.
                    Feel free to discuss this project with Jason as well.`,
                    timeEstimate: 4,
                    dueDate: '2023-12-28',
                    labels_json: JSON.stringify([
                        {
                            text: 'front-end',
                            color: 'green'
                        },
                    ]),
                    todos: [
                        {
                            text: 'Build wireframe mockup',
                            completed: true
                        },
                        {
                            text: 'Finalize design',
                            completed: false
                        },
                        {
                            text: 'Implement design',
                            completed: false
                        },
                        {
                            text: 'Tests',
                            completed: false
                        },
                    ],
                },]

            },
        ];
        const createProjectProms = PROJECTS.map((project) => {
            const projectData: Prisma.projectsCreateInput = {
                name: project.name,
                organizations: {
                    connect: {
                        id: organization_id
                    }
                },
                tasks: {
                    create: [
                        ...project.tasks.map(t => ({
                            name: t.name,
                            task_status: t.status as $Enums.status,
                            due_date: new Date(t.dueDate).toISOString(),
                            time_estimate: t.timeEstimate,
                            description: t.description,
                            labels_json: t.labels_json,
                            todos_json: t.todos
                        }))
                    ]
                }
            }
            return client.projects.create({ data: projectData })
        });
        await Promise.all(createProjectProms);
    } catch (error) {
        throw new Error('Error seeding projects');
    }
}
export async function seedUsers(client: PrismaClient) {
    const USERS = [
        {
            name: 'John',
            password: '123456',
            lastName: 'Appleseed',
            email: 'johnapples@gmail.com',
            profilePic: ''
        },
        {
            name: 'Jane',
            password: '123456',
            lastName: 'Pearseed',
            email: 'janepear@gmail.com',
            profilePic: ''
        },
    ];
    try {
        const users = await Promise.all(
            USERS.map(async (u): Promise<Prisma.usersCreateManyInput> => {
                return {
                    name: u.name,
                    password: await bcrypt.hash(u.password, 10),
                    last_name: u.lastName,
                    email: u.email,
                    profile_pic: '',
                }
            }));
        await client.users.createMany({ data: users })
    } catch (error) {
        throw new Error('Error seeding users');
    }
}
export async function seedProjectMembers(client: PrismaClient) {
    try {
        const allProjects = await client.projects.findMany();
        const users = await client.users.findMany({ take: 2 });

        const projectMemberRelationsByProject: Prisma.projectmembersCreateManyInput[][] =
            allProjects.map((p): Prisma.projectmembersCreateManyInput[] => {
                return users.map((u): Prisma.projectmembersCreateManyInput => {
                    return {
                        project_id: p.id,
                        user_id: u.id
                    }
                })
            });

        const projectMemberRelations = projectMemberRelationsByProject
            .reduce((accum: Prisma.projectmembersCreateManyInput[], current: Prisma.projectmembersCreateManyInput[]) => {
                return [...accum, ...current];
            }, []);

        await client.projectmembers.createMany({ data: projectMemberRelations })

    } catch (error) {
        throw new Error('Error seeding project members');
    }
}
export async function seedTaskMembers(client: PrismaClient) {
    try {
        const allTasks = await prismaClient.tasks.findMany({});
        const allUsers = await prismaClient.users.findMany({});

        const taskMemberRelationsByTask: Prisma.taskmembersCreateManyInput[][] =
            allTasks.map((t): Prisma.taskmembersCreateManyInput[] => {
                return allUsers.map((u): Prisma.taskmembersCreateManyInput => ({
                    task_id: t.id,
                    user_id: u.id
                }))
            });
        const taskMemberRelationships = taskMemberRelationsByTask
            .reduce((accum: Prisma.taskmembersCreateManyInput[], current: Prisma.taskmembersCreateManyInput[]) => {
                return [...accum, ...current];
            }, []);

        await prismaClient.taskmembers.createMany({
            data: taskMemberRelationships
        })
    } catch (error) {
        throw new Error('Error seeding task members');
    }
}

async function eraseAllData(client: PrismaClient) {
    await client.labelgroups.deleteMany();
    await client.projectmembers.deleteMany();
    await client.taskmembers.deleteMany();
    await client.tasks.deleteMany();
    await client.projects.deleteMany();
    await client.users.deleteMany();
    await client.organizations.deleteMany();
}

async function main() {
    await client.$connect();
    await eraseAllData(client);
    const orgIds = await seedOrgs(client);
    await seedUsers(client);
    await seedProjects(client, orgIds[0]);
    await seedProjectMembers(client);
    await seedTaskMembers(client);
}

main()
    .catch(async (err) => {
        console.error(
            'An error occurred while attempting to seed the database:',
            err,
        );
    })
    .finally(async () => {
        await client.$disconnect();
    })