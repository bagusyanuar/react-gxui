import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../components/table'
import { TColums } from '../../components/table/types'
import Extensions from './Extensions'
import { TUser, data } from './dummy'


const meta = {
    title: 'Component/Table/Client Table',
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
        data: {
            control: false,
            description: 'row data (required)'
        },
    },
    args: {},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;


export const Basic: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div style={{ width: '750px', margin: '0 auto' }}>
                <Story />
            </div>
        )
    ],
    render: function Render() {

        const columns: TColums<TUser>[] = [
            { title: 'First Name', selector: (row) => row.firstName },
            { title: 'Last Name', selector: row => row.lastName, searchKey: 'lastName' },
            { title: 'Phone', selector: row => row.phone, searchKey: 'phone' },
            { title: 'Address', selector: row => row.address, align: 'left', },
            { title: 'Education', selector: row => row.education.field, searchKey: 'education.field', },
        ];
        return <Table
            columns={columns}
            data={data}
        />
    }
};



export const Title: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div style={{ width: '750px', margin: '0 auto' }}>
                <Story />
            </div>
        )
    ],
    render: function Render() {

        const columns: TColums<TUser>[] = [
            { title: 'First Name', selector: (row) => row.firstName },
            { title: 'Last Name', selector: row => row.lastName, searchKey: 'lastName' },
            { title: 'Phone', selector: row => row.phone, searchKey: 'phone' },
            { title: 'Address', selector: row => row.address, align: 'left', },
            { title: 'Education', selector: row => row.education.field, searchKey: 'education.field', },
        ];
        return <Table
            columns={columns}
            data={data}
            title='Data Customer'
        />
    }
};

export const Search: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div style={{ width: '750px', margin: '0 auto' }}>
                <Story />
            </div>
        )
    ],
    render: function Render() {

        const columns: TColums<TUser>[] = [
            { title: 'First Name', selector: (row) => row.firstName },
            { title: 'Last Name', selector: row => row.lastName, searchKey: 'lastName' },
            { title: 'Phone', selector: row => row.phone, searchKey: 'phone' },
            { title: 'Address', selector: row => row.address, align: 'left', },
            { title: 'Education', selector: row => row.education.field, searchKey: 'education.field', },
        ];
        return <Table
            columns={columns}
            data={data}
            title='Data Customer'
            useSearch
        />
    }
};

export const Pagination: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div style={{ width: '750px', margin: '0 auto' }}>
                <Story />
            </div>
        )
    ],
    render: function Render() {

        const columns: TColums<TUser>[] = [
            { title: 'First Name', selector: (row) => row.firstName },
            { title: 'Last Name', selector: row => row.lastName, searchKey: 'lastName' },
            { title: 'Phone', selector: row => row.phone, searchKey: 'phone' },
            { title: 'Address', selector: row => row.address, align: 'left', },
            { title: 'Education', selector: row => row.education.field, searchKey: 'education.field', },
        ];
        return <Table
            columns={columns}
            data={data}
            title='Data Customer'
            useSearch
            usePagination
            pageLength={[5, 10, 15]}
        />
    }
};

export const Extension: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div style={{ width: '750px', margin: '0 auto' }}>
                <Story />
            </div>
        )
    ],
    render: function Render() {

        const columns: TColums<TUser>[] = [
            { title: 'First Name', selector: (row) => row.firstName },
            { title: 'Last Name', selector: row => row.lastName, searchKey: 'lastName' },
            { title: 'Phone', selector: row => row.phone, searchKey: 'phone' },
            { title: 'Address', selector: row => row.address, align: 'left', },
            { title: 'Education', selector: row => row.education.field, searchKey: 'education.field', },
        ];
        return <Table
            columns={columns}
            data={data}
            title='Data Customer'
            useSearch
            usePagination
            pageLength={[5, 10, 15]}
            extensions={<Extensions />}
        />
    }
};