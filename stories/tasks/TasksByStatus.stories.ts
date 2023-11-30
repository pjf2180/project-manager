import type { Meta, StoryObj } from '@storybook/react';

import { TasksByStatus } from '../../app/ui/tasks/TasksByStatus';
import * as TaskPreviewCardStory from './TaskPreviewCard.stories';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Tasks/TasksByStatus',
    component: TasksByStatus,
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
} satisfies Meta<typeof TasksByStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        groups: {
            open: [
                {
                    ...TaskPreviewCardStory.Primary.args.task
                },
                {
                    ...TaskPreviewCardStory.Primary.args.task
                },
            ],
            progress: [
                {
                    ...TaskPreviewCardStory.Primary.args.task
                },
                {
                    ...TaskPreviewCardStory.Primary.args.task
                },
            ],
            closed: [
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
        }
    },
};
