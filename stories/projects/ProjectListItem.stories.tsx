import type { Meta, StoryObj } from '@storybook/react';

import { ProjectListItem } from '../../app/ui/projects/projectListItem';
// import * as TaskPreviewCardStory from './TaskPreviewCard.stories';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Projects/ProjectListItem',
    component: ProjectListItem,
    decorators: [
        (storyFn: () => React.ReactNode) => (
            <div style={{ padding: '8px', border: '1px dashed #ccc' }}>
                {storyFn()}
            </div>
        )
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
} satisfies Meta<typeof ProjectListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        selected: false,
        item: {
            title: 'Front-End Dev',
            memberCount: 6
        }
    },
};
export const Selected: Story = {
    args: {
        selected: true,
        item: {
            title: 'Front-End Dev',
            memberCount: 6
        }
    },
};
