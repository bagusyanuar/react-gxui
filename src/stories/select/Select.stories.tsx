import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../components/select'

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
        return <Select 
            style={{
                width: '200px'
            }}
        />;
    },

};
