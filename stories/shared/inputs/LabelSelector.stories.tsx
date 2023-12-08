import type { Meta, StoryObj } from '@storybook/react';

import { LabelSelector } from '../../../app/ui/shared/inputs/labels';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/inputs/LabelSelector',
    component: LabelSelector,
    decorators: [
        (storyFn: () => React.ReactNode) => {
            return (<div style={{ padding: '8px', border: '1px dashed #ccc', backgroundColor: 'white' }} >
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
} satisfies Meta<typeof LabelSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoSelections: Story = {
    args: {
        optionLabels: [
            {
                id: 0,
                color: 'green',
                text: 'BACKEND'
            },
            {
                id: 1,
                color: 'blue',
                text: 'FRONT-END'
            },
            {
                id: 2,
                color: 'red',
                text: 'DASHBOARD'
            },
        ],
        initialSelection: []
    },
};
export const SomeSelections: Story = {
    args: {
        optionLabels: [
            {
                id: 0,
                color: 'green',
                text: 'BACKEND'
            },
            {
                id: 1,
                color: 'blue',
                text: 'FRONT-END'
            },
            {
                id: 2,
                color: 'red',
                text: 'DASHBOARD'
            },
        ],
        initialSelection: [
            0
        ]
    },
};
