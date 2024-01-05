import { Navbar } from '../../../app/ui/shared/layout/Navbar';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Layout/Navbar',
    component: Navbar,
    decorators: [
        (storyFn: () => React.ReactNode) => {
            return (<div style={{ padding: '8px', border: '1px dashed #ccc', backgroundColor: 'grey' }} >
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
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoSelections: Story = {
    args: {

    },
};
