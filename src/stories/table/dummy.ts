export type TUser = {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    education: {
        degree: string;
        field: string;
    }
}

export const data: TUser[] = [
    {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        address: '123 Main St',
        education: {
            degree: 'Bachelor',
            field: 'Computer Science',
        }
    },
    {
        id: '2',
        firstName: 'Jane',
        lastName: 'Doe',
        phone: '9876543210',
        address: '456 Elm St',
        education: {
            degree: 'Bachelor',
            field: 'Computer Science',
        }
    },
    {
        id: '3',
        firstName: 'Bob',
        lastName: 'Smith',
        phone: '5555555555',
        address: '789 Oak St',
        education: {
            degree: 'Bachelor',
            field: 'Computer Science',
        }
    },
    {
        id: '4',
        firstName: 'Alice',
        lastName: 'Johnson',
        phone: '1111111111',
        address: '321 Pine St',
        education: {
            degree: 'Bachelor',
            field: 'Computer Science',
        }
    },
    {
        id: '5',
        firstName: 'Mike',
        lastName: 'Williams',
        phone: '2222222222',
        address: '456 Maple St',
        education: {
            degree: 'Bachelor',
            field: 'Mathematics',
        }
    },
    {
        id: '6',
        firstName: 'Emily',
        lastName: 'Davis',
        phone: '3333333333',
        address: '789 Cedar St',
        education: {
            degree: 'Bachelor',
            field: 'Physic',
        }
        
    },
    {
        id: '7',
        firstName: 'Kevin',
        lastName: 'Miller',
        phone: '4444444444',
        address: '321 Walnut St',
        education: {
            degree: 'Bachelor',
            field: 'Communication Science',
        }
    },
    {
        id: '8',
        firstName: 'Sarah',
        lastName: 'Taylor',
        phone: '5555555555',
        address: '456 Hickory St',
        education: {
            degree: 'Bachelor',
            field: 'Psychology',
        }
    }
];
