import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/button'

const meta: Meta<typeof Button> = {
    title: 'Component/Forms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        id: {
            control: 'text',
            description: 'button id'
        },
        loading: {
            control: 'boolean',
            defaultValue: false,
            table: {
                type: {
                    summary: `true | false`,
                },
                defaultValue: { summary: `false` }
            },
            type: 'boolean',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
            table: {
                type: {
                    summary: `true | false`,
                },
                defaultValue: { summary: `false` }
            },
            type: 'boolean',
        },
        variant: {
            control: 'select',
            options: ['primary', 'accent', 'primary-outlined', 'accent-outlined'],
            table: {
                type: {
                    summary: `'primary' | 'accent' | 'primary-outlined' | 'accent-outlined'`,
                },
                defaultValue: { summary: `'primary'` },
            },
        },
        size: {
            control: 'select',
            options: ['large', 'normal', 'small'],
            table: {
                type: {
                    summary: `'large' | 'normal' | 'small'`,
                },
                defaultValue: { summary: `'normal'` },
            },
        },
    },
    args: {},
};

export default meta;


type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    argTypes: {},
    render: function Render(props) {
        return <Button {...props}>Click Me!</Button>;
    }
};

export const Accent: Story = {
    argTypes: {},
    render: function Render(props) {
        return <Button variant='accent' {...props}>Click Me!</Button>;
    }
};

export const PrimaryOutlined: Story = {
    argTypes: {},
    render: function Render(props) {
        return <Button variant='primary-outlined' {...props}>Click Me!</Button>;
    }
};

export const AccentOutlined: Story = {
    argTypes: {},
    render: function Render(props) {
        return <Button variant='accent-outlined' {...props}>Click Me!</Button>;
    }
};
