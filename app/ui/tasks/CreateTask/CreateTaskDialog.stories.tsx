import type { Meta, StoryObj } from '@storybook/react';

import { CreateTask } from './CreateTask';
import * as TaskPreviewCardStory from '../../../../stories/tasks/TaskPreviewCard.stories';
import { StoryFrameDecorator } from '../../../../stories/utils/decorators';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Tasks/CreateTask',
    component: CreateTask,
    decorators: [
        StoryFrameDecorator
    ],

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        //layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof CreateTask>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        taskVm: {
            task: { ...TaskPreviewCardStory.Primary.args.task },
            todo: []
        },
        projectId: 'The projectId',
        labels: [
            {
                color: 'blue',
                text: 'DASHBOARD'
            },
            {
                color: 'blue',
                text: 'FRONTEND'
            },
        ],
        projectMembers: [
            {
                id: 'ID',
                email: 'BLAH@gmail.com',
                name: 'firstName',
                lastName: 'lastname',
                profileImage: 'urlforimage',
                password: ''
            }
        ]
    },
};
