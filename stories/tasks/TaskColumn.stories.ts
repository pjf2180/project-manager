import type { Meta, StoryObj } from '@storybook/react';

import { TaskColumn } from '../../app/ui/tasks/TaskColumn';
import * as TaskPreviewCardStory from './TaskPreviewCard.stories';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Tasks/TaskColumn',
    component: TaskColumn,
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
} satisfies Meta<typeof TaskColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        status: 'open',
        count: 6,
        tasks: [
            {
                ...TaskPreviewCardStory.Primary.args.task
            },
            {
                ...TaskPreviewCardStory.Primary.args.task
            },
            {
                ...TaskPreviewCardStory.Primary.args.task
            },
            {
                ...TaskPreviewCardStory.Primary.args.task
            },
        ]
    },
};
