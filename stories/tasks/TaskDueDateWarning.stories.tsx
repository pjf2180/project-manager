import type { Meta, StoryObj } from '@storybook/react';
import { StoryFrameDecorator } from '../utils/decorators';
import { TaskDueDateWarning } from '../../app/ui/tasks/TaskDueDateWarning';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Tasks/TaskDueDateWarning',
    component: TaskDueDateWarning,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        //layout: 'centered',
    },
    decorators: [
        StoryFrameDecorator
    ],
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof TaskDueDateWarning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        dueDate: new Date('2023-12-18T01:41:37.684Z'),
        currentDate: new Date('2023-12-14T01:41:37.684Z'),
    }
};
