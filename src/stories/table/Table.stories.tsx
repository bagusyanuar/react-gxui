import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../components/table'
import { TColums } from '../../components/table/types'


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

type TUser = {
    email: string;
    username: string;
    profile: TProfile
}

type TProfile = {
    name: string;
    address: string;
}


const data: TUser[] = [
    { email: 'john.doe@gmail.com', username: 'john doe', profile: { name: 'John Doe', address: 'example address' } },
    { email: 'margareth.susane@gmail.com', username: 'margareth', profile: { name: 'Susan Margareth', address: 'example address' } }
]

export const Default: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div style={{ width: '800px', margin: '0 auto' }}>
                <Story />
            </div>
        )
    ],
    render: function Render() {

        const columns: TColums<TUser>[] = [
            { title: 'Email', selector: (row) => row.email, width: '15rem' },
            { title: 'Username', selector: row => row.username, width: '15rem' },
            { title: 'Address', selector: row => row.profile.address, align: 'left', width: '700px' },
        ];
        return <Table
            columns={columns}
            data={data}
            totalRows={data.length}
            onPerPageChange={(perPage) => console.log(perPage)} 
            onPageChange={page => console.log(page)}
        />
    }
};