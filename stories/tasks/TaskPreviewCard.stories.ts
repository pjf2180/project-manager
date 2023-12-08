import type { Meta, StoryObj } from '@storybook/react';

import { TaskPreviewCard } from '../../app/ui/tasks/TaskPreviewCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Tasks/TaskPreviewCard',
    component: TaskPreviewCard,
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
} satisfies Meta<typeof TaskPreviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        task: {
            name: 'Website Redesign',
            description: 'The description for this task',
            dueDate: new Date(),
            id: '0',
            status: 'open',
            projectId: 'asdffsd',
            time_estimate: 45,
            labels: [
                {
                    color: 'green',
                    text: 'design'
                },
                {
                    color: 'blue',
                    text: 'design'
                },
                {
                    color: 'red',
                    text: 'design'
                },
            ],
            members: [
                {
                    email: 'johnappleseed@gmail.',
                    name: 'John',
                    lastName: 'appleSeed',
                    profileImage: '',
                    id: '0'
                },
                {
                    email: 'jehnappleseed@gmail.',
                    name: 'Jen',
                    lastName: 'appleSeed',
                    profileImage: '',
                    id: '1'
                },
            ]

        }

    },
};
