const { USERS } = require("./users");

const TASKS = [
    {
        id: '7c4e2e38-5d17-4020-9c89-3fca6affda0e',
        name: 'Website Redesign',
        status: 'open',
        description: `Our brand & product have evolved over the past two years, and our website should be updated to reflect this. The new site will be mobile-first, responsive and lightweight. We should also focus on SEO with David Kelly my brother.
        Feel free to discuss this project with Jason as well.`,
        timeEstimate: 6,
        dueDate: '2023-11-28',
        projectId: 'cd33b60b-4c0a-4b96-aefe-8d620f55f8fc',
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
        members: [
            USERS[0].id,
            USERS[1].id
        ]
    },
    {
        id: '8f7768f8-570c-42dc-a18d-3c8ae7344be3',
        name: 'Api Integration',
        status: 'open',
        description: `Our brand & product have evolved over the past two years, and our website should be updated to reflect this. The new site will be mobile-first, responsive and lightweight. We should also focus on SEO with David Kelly my brother.
        Feel free to discuss this project with Jason as well.`,
        timeEstimate: 4,
        dueDate: '2023-12-28',
        projectId: 'c4051e34-43cd-4024-9043-7dd3d05db77b',
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
        members: [
            USERS[0].id,
            USERS[1].id
        ]
    },
];

module.exports = {
    TASKS
}