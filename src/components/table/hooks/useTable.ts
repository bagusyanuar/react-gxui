import { useState, useEffect, useCallback } from 'react'
import { TServer } from '../types'
import { Paginator } from '../libs'

type THook<T> = {
    data: T[];
    pageLength: number[];
    useServer?: TServer;
}
const useTable = <T,>({
    data,
    pageLength,
    useServer
}: THook<T>) => {
    const [selectedPage, setSelectedPage] = useState<number>(0);
    const [totalRows, setTotalRows] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [pages, setPages] = useState<number[]>([]);
    const [pageSize, setPageSize] = useState<number>(pageLength[0]);
    const [shownData, setShownData] = useState<T[]>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        if (useServer) {
            // paginator.getPages()
            // const pages = Array.from({ length: useServer.totalPages }, (_, i) => i + 1);
            // setPages(pages);
            return
        };
        const totalRows = data.length;
        const paginate = Paginator.paginate(totalRows, pageSize);
        const totalPages = paginate.totalPages
        const pages = paginate.pages
        const shownData = data.slice(0, pageSize);
        setSelectedPage(1);
        setTotalRows(totalRows);
        setTotalPages(totalPages);
        setPages(pages);
        setShownData(shownData);
        return () => { setShownData([]) }
    }, [data, pageSize, useServer])

    useEffect(() => {
        if (useServer) return;
        const startIndex = (selectedPage - 1) * pageSize;
        const endIndex = startIndex + pageSize
        const shownData = data.slice(startIndex, endIndex);
        setShownData(shownData);
        return () => { }
    }, [selectedPage, useServer])

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>, fields: string[]) => {
            const search = e.target.value.toLowerCase();
            setSearch(search);
            const filteredData = <T, K extends keyof T>(
                data: T[],
                search: string,
                fields: K[]
            ): T[] => {
                return data.filter((item) => {
                    fields.some(field => {
                        const value = item[field];
                        return value?.toString().toLowerCase().includes(search)
                    });
                })
            };

            //console log filtered data here,
        },
        [search],
    )


    return {
        selectedPage,
        setSelectedPage,
        totalPages,
        totalRows,
        search,
        pageSize,
        pages,
        shownData,
        setPageSize,
        handleSearch
    }
}

export default useTable;