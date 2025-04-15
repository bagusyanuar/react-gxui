import type { Meta, StoryObj } from '@storybook/react';
import { Textfield } from '../../components/textfield'
import { LuMail, LuUser, LuLock, LuSearch } from 'react-icons/lu';
import { IconType } from 'react-icons'

const iconOptions: Record<string, IconType> = {
    Mail: LuMail,
    User: LuUser,
    Lock: LuLock,
};

const meta = {
    title: 'Component/Forms/Textfield',
    component: Textfield,
    parameters: {
        layout: 'centered',
        //         docs: {
        //             source: {
        //                 code: `
        //                 import { LuMail } from 'react-icons/lu';

        // <Textfield prefixIcon={LuMail} />
        // `,
        //             },
        //         },
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            defaultValue: 'Form Label',
            description: 'Label for input'
        },
        labelProps: {
            control: false,
            description: 'React HTMLLabelElement'
        },
        inputProps: {
            control: false,
            description: 'React HTMLInputElement'
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
        prefixIcon: {
            // options: Object.keys(iconOptions),
            // mapping: iconOptions,
            // control: {
            //     type: 'select',
            //     labels: {
            //         Mail: 'Mail',
            //         User: 'User',
            //         Lock: 'Lock',
            //     },
            // },
            control: false,
            table: {
                type: { summary: 'IconType (from react-icons)' },
            },
        },
        suffixIcon: {
            control: false,
            table: {
                type: { summary: 'IconType (from react-icons)' },
            },
        },
    },
    args: {},
} satisfies Meta<typeof Textfield>;

export default meta;

type Story = StoryObj<typeof Textfield>;

export const Default: Story = {
    args: {},
    render: function Render(props) {
        return <Textfield {...props} />
    }
};

export const WithLabel: Story = {
    args: {
        label: 'Form Label'
    },
    render: function Render(props) {
        return <Textfield {...props} />
    }
};

export const WithRequiredLabel: Story = {
    args: {
        label: 'Form Label',
        isRequired: true
    },
    render: function Render(props) {
        return <Textfield {...props} />
    }
};

export const WithPrefixIcon: Story = {
    args: {
        label: 'Input With Prefix Icon',
    },
    parameters: {
        docs: {
            source: {
                code: `
                import { LuMail } from 'react-icons/lu';

<Textfield 
    label="Input With Prefix Icon" 
    prefixIcon={LuMail} 
/>
`,
            },
        },
    },
    render: function Render(props) {
        return <Textfield prefixIcon={LuMail} {...props} />
    }
};

export const WithSuffixIcon: Story = {
    args: {},
    parameters: {
        docs: {
            source: {
                code: `
                import { LuCalendar } from 'react-icons/lu';

<Textfield 
    prefixIcon={LuCalendar} 
/>
`,
            },
        },
    },
    render: function Render(props) {
        return <Textfield inputProps={{ placeholder: 'Search...' }} suffixIcon={LuSearch} {...props} />
    }
};

export const CustomInputProps: Story = {
    args: {},
    render: function Render(props) {
        return <Textfield inputProps={{ placeholder: 'Search...' }} {...props} />
    }
};

export const CustomLabelProps: Story = {
    args: {
        label: 'Form Label'
    },
    render: function Render(props) {
        return <Textfield labelProps={{ 
            style: {
                fontStyle: 'italic'
            }
         }} {...props} />
    }
};
