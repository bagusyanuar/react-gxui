import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../components/table'


const meta = {
    title: 'Component/TABLE/Table',
    component: Table,
    parameters: {
        layout: 'centered',

    },
    tags: ['autodocs'],
    argTypes: {
        columns: {
            control: false,
            description: 'table column (required)'
        },
    },
    args: {},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
    args: {},
    render: function Render() {
        return <Table
            columns={[
                { title: 'Column 1', align: 'left' },
                { title: 'Column 2' },
            ]}
        />
    }
};