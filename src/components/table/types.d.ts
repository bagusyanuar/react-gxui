export interface ITable<T> {
    columns: IColums<T>[];
}

export interface IColums<T> {
    title: string;
    selector?: (row: T, index: number) => any;
    align?: TAlign;
}

export interface ITH {
    title: string;
    align?: TAlign;
}
export type TAlign = 'left' | 'center' | 'right';