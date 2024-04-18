import type { Meta, StoryObj } from '@storybook/react';
import { StoryFrameDecorator } from '../../../../stories/utils/decorators';
import { TaskDetails } from './TaskDetails';
import * as TaskPreviewStory from '../../../../stories/tasks/TaskPreviewCard.stories';
import * as TaskTodoListStory from './TaskTodoList/TaskTodoList.stories';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Tasks/TaskDetails',
    component: TaskDetails,
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
} satisfies Meta<typeof TaskDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        currentDate: new Date('2023-12-14T01:41:37.684Z'),
        task: {
            ...TaskPreviewStory.Primary.args.task,
            todos: [
                ...TaskTodoListStory.Primary.args.todos
            ],
            dueDate: new Date('2023-12-18T01:41:37.684Z'),
        }
    }
};
