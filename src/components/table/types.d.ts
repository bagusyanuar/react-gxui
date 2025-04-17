export interface ITable<T> {
    columns: TColums<T>[];
    data: T[];
    className?: string;
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

export type TAlign = 'left' | 'center' | 'right';