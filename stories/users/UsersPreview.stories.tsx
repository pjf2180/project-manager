import type { Meta, StoryObj } from '@storybook/react';

import { UsersPreview } from '../../app/ui/users/UsersPreview';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Users/UsersPreview',
    component: UsersPreview,
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
} satisfies Meta<typeof UsersPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
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
                name: 'Marcy',
                lastName: 'appleSeed',
                profileImage: '',
                id: '1'
            },
        ]
    },
};
