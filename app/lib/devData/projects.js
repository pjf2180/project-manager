const { ORGANIZATIONS } = require("./organizations");

const PROJECTS = [
    {
        id: 'cd33b60b-4c0a-4b96-aefe-8d620f55f8fc',
        name: 'Front-end Dev',
        organization_id: ORGANIZATIONS[0].id
    },
    {
        id: 'c4051e34-43cd-4024-9043-7dd3d05db77b',
        name: 'Back-end Dev',
        organization_id: ORGANIZATIONS[0].id
    },
    {
        id: 'c3051e34-43cd-4024-9043-7dd3d05db77b',
        name: 'Back-end Dev2',
        organization_id: ORGANIZATIONS[0].id
    },
];

module.exports = {
    PROJECTS
};