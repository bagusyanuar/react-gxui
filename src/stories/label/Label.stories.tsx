import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../components/label'

const meta: Meta<typeof Label> = {
    title: 'Component/Forms/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: 'text',
            description: 'Required',
            defaultValue: 'Form Label'
        },
        isRequired: {
            control: 'boolean',
            description: 'Optional',
            table: {
                type: {
                    summary: `false | true`,
                },
                defaultValue: { summary: `false` },
            },
        },
        size: {
            control: 'select',
            description: 'Optional',
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


type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        text: 'Form Label'
    },
    render: function Render({ ...props }) {
        return <Label {...props} />;
    }
};

export const Required: Story = {
    args: {
        text: 'Form Label Required'
    },
    render: function Render({ ...props }) {
        return <Label isRequired={true} {...props} />;
    }
};
