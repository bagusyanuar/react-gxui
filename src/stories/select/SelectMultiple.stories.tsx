import type { Meta, StoryObj } from '@storybook/react';
import { SelectMultiple } from '../../components/select';
import { SelectOption } from '../../components/select/types'
import { LuMail } from 'react-icons/lu';

const meta: Meta<typeof SelectMultiple> = {
    title: 'Component/Forms/SelectMultiple',
    component: SelectMultiple,
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
        isError: {
            control: 'boolean',
            description: 'validation status'
        },
        validationMessage: {
            control: 'text',
            description: 'text from validation'
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


type Story = StoryObj<typeof SelectMultiple>;

export const Default: Story = {
    args: {},
    render: function Render(props) {
        const options: SelectOption[] = [
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
        ];
        return <SelectMultiple
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
        return <SelectMultiple
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
        return <SelectMultiple
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
        return <SelectMultiple
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

export const WithErrorValidation: Story = {
    args: {
        label: 'Form Label',
        isError: true,
        validationMessage: 'This is an error text.'
    },
    render: function Render(props) {
        const options: SelectOption[] = [
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
        ];
        return <SelectMultiple
            style={{
                width: '500px'
            }}
            options={options}
            placeholder='Please select an option'
            {...props}
        />;
    },
};
