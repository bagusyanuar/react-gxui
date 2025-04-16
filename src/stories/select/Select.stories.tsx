import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../components/select';
import { SelectOption } from '../../components/select/types'
import { LuMail } from 'react-icons/lu';

const meta: Meta<typeof Select> = {
    title: 'Component/Forms/Select',
    component: Select,
    parameters: {
        layout: 'centered',
        viewport: {
            style: {
                height: '900px',
            }
        }
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
            control: false,
            table: {
                type: { summary: 'IconType (from react-icons)' },
            },
        },
    },
    args: {},
    // decorators: [
    //     (Story) => (
    //         <>
    //             <style>
    //                 {`
    //                     .docs-story {
    //                     height: 400px;
    //                     margin: 0 auto;
    //                     }

    //                     .docs-story > div {
    //                         height: 100% !important;
    //                     }
    //                 `}
    //             </style>
    //             <Story />
    //         </>
    //     )
    // ]
};

export default meta;


type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {},
    render: function Render(props) {
        const options: SelectOption[] = [
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
        ];
        return <Select
            style={{
                width: '200px'
            }}
            options={options}
            placeholder='Please select an option'
            {...props}
        />;
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Form Label'
    },
    render: function Render(props) {
        const options: SelectOption[] = [
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
        ];
        return <Select
            style={{
                width: '500px'
            }}
            options={options}
            placeholder='Please select an option'
            {...props}
        />;
    },
};

export const WithRequiredLabel: Story = {
    args: {
        label: 'Form Label',
        isRequired: true,
    },
    render: function Render(props) {
        const options: SelectOption[] = [
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
        ];
        return <Select
            style={{
                width: '500px'
            }}
            options={options}
            placeholder='Please select an option'
            {...props}
        />;
    },
};

export const WithIcon: Story = {
    args: {
        label: 'Form Label'
    },
    render: function Render(props) {
        const options: SelectOption[] = [
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
        ];
        return <Select
            prefixIcon={LuMail}
            style={{
                width: '500px'
            }}
            options={options}
            placeholder='Please select an option'
            {...props}
        />;
    },
};
