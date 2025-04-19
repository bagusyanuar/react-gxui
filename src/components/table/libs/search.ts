import { TColums } from '../types'

export default class Search {

    static getSearchableFieldsFromColumns<T,>(columns: TColums<T>[]): (keyof T)[] {
        return columns
            .map(col => col.searchKey)
            .filter((key): key is keyof T => key !== undefined);
    }

    static getFilteredData<T,>(param: string, data: T[], searchFields: (keyof T)[]): T[] {
        if (!param) return data;
        return data.filter(item =>
            searchFields.some(field => {
                const value = item[field];
                return typeof value === 'string' || typeof value === 'number'
                    ? value.toString().toLowerCase().includes(param.toLowerCase())
                    : false;
            })
        );
    }
}