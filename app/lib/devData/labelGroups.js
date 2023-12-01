const { ORGANIZATIONS } = require('./organizations');

const LABEL_GROUPS = [
    {
        organization_id: ORGANIZATIONS[0].id,
        options_json: JSON.stringify([
            {
                text: 'front-end',
                color: 'green'
            },
            {
                text: 'back-end',
                color: 'blue'
            },
        ])
    }
];

module.exports = {
    LABEL_GROUPS
}