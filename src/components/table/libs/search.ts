import { TColums } from '../types'

export default class Search {

    private static getNestedValue(obj: any, path: string): any {
        return path.split('.').reduce((acc, part) => acc?.[part], obj);
    }
    
    static getSearchableFieldsFromColumns<T,>(columns: TColums<T>[]): string[] {
        return columns
            .map(col => col.searchKey)
            .filter((key): key is string => !!key);
    }

    static getFilteredData<T,>(param: string, data: T[], searchFields: string[]): T[] {
        if (!param) return data;
        return data.filter(item =>
            searchFields.some(field => {
                const value = Search.getNestedValue(item, field);
                return typeof value === 'string' || typeof value === 'number'
                    ? value.toString().toLowerCase().includes(param.toLowerCase())
                    : false;
            })
        );
    }
    
    // static getFilteredData<T,>(param: string, data: T[], searchFields: (keyof T)[]): T[] {
    //     if (!param) return data;
    //     return data.filter(item =>
    //         searchFields.some(field => {
    //             const value = Search.getNestedValue(item, field);
    //             return typeof value === 'string' || typeof value === 'number'
    //                 ? value.toString().toLowerCase().includes(param.toLowerCase())
    //                 : false;
    //         })
    //     );
    // }

    // static getSearchableFieldsFromColumns<T,>(columns: TColums<T>[]): (keyof T)[] {
    //     return columns
    //         .map(col => col.searchKey)
    //         .filter((key): key is keyof T => key !== undefined);
    // }
}