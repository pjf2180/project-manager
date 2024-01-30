import type { Meta, StoryObj } from '@storybook/react';
import { StoryFrameDecorator } from '../../../../../stories/utils/decorators';
import { TaskTodoList } from './TaskTodoList';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Tasks/TaskTodoList',
    component: TaskTodoList,
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
} satisfies Meta<typeof TaskTodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllUnselected: Story = {
    args: {
        todos: [
            {
                text: 'Login page styles',
                completed: false
            },
            {
                text: 'Login page data',
                completed: false
            },
            {
                text: 'Login page error handling',
                completed: false
            },
            {
                text: 'Login page form validation',
                completed: false
            },
        ]
    }
};
export const SomeSelected: Story = {
    args: {
        todos: [
            {
                text: 'Login page styles',
                completed: true
            },
            {
                text: 'Login page data',
                completed: true
            },
            {
                text: 'Login page error handling',
                completed: false
            },
            {
                text: 'Login page form validation',
                completed: false
            },
        ]
    }
};
