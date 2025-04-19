export interface ITable<T> {
    columns: TColums<T>[];
    data: T[];
    useServer?: TServer;
    className?: string;
    pageLength?: number[];
}

export type TServer = {
    totalRows: number;
    page: number;
    perPage: number;
}

export type TColums<T> =  {
    title: string;
    selector?: (row: T, index: number) => any;
    align?: TAlign;
    width?: string;
}

export type TTH = {
    title: string;
    align?: TAlign;
    width?: string;
}

export type TTD = {
    children: React.ReactNode;
    align?: TAlign
}

export type TPagination = {
    pageLength: number[];
    selectedPage: number;
    pages: number[];
    totalRows: number;
    onPerPageChange: (perPage: number) => void;
    onPageChange: (page: number) => void;
}

export type TAlign = 'left' | 'center' | 'right';