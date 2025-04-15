import type { Meta, StoryObj } from '@storybook/react';
import { Textfield } from '../../components/textfield'
import { LuMail, LuUser, LuLock } from 'react-icons/lu';
import { IconType } from 'react-icons'

const iconOptions: Record<string, IconType> = {
    Mail: LuMail,
    User: LuUser,
    Lock: LuLock,
};

const meta = {
    title: 'Component/Textfield',
    component: Textfield,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
        docs: {
            source: {
                code: `
                import { LuMail } from 'react-icons/lu';

<Textfield prefixIcon={LuMail} />
`,
            },
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        label: { control: 'text' },
        labelProps: {control: false},
        inputProps: {control: false},
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
        prefixIcon: {
            options: Object.keys(iconOptions),
            mapping: iconOptions,
            control: {
                type: 'select',
                labels: {
                    Mail: 'Mail',
                    User: 'User',
                    Lock: 'Lock',
                },
            },
            table: {
                type: { summary: 'IconType (from react-icons)' },
            },
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        prefixIcon: LuMail,
        size: 'normal',
        label: 'Form Label',
    },
};
