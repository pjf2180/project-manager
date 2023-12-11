import type { Meta, StoryObj } from '@storybook/react';

import { CreateTaskDialog } from '../../app/ui/tasks/CreateTaskDialog';
import * as TaskPreviewCardStory from './TaskPreviewCard.stories';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Tasks/CreateTaskDialog',
    component: CreateTaskDialog,
    decorators: [
        (storyFn: () => React.ReactNode) => {
            return (<div style={{ padding: '8px', border: '1px dashed #ccc', backgroundColor: 'gray' }} >
                {storyFn()}
            </div>)
        }
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
} satisfies Meta<typeof CreateTaskDialog>;

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
                profileImage: 'urlforimage'
            }
        ]
    },
};
