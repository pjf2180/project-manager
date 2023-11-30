import type { Meta, StoryObj } from '@storybook/react';

import { TaskLabelPreview } from '../../app/ui/tasks/TaskLabelPreview';
import * as TaskPreviewCardStory from './TaskPreviewCard.stories';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Tasks/TaskLabelPreview',
    component: TaskLabelPreview,
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
} satisfies Meta<typeof TaskLabelPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        labels: [
            ...TaskPreviewCardStory.Primary.args.task.labels!
        ]
    },
};
