import { useState, useEffect, useCallback, useRef } from 'react'
import { TServer, TColums } from '../types'
import { Paginator, Search } from '../libs'

type THook<T> = {
    columns: TColums<T>[];
    data: T[];
    usePagination: boolean;
    pageLength: number[];
    useServer?: TServer;
}

type TMetaPagination = {
    page: number;
    pages: number[];
    perPage: number;
    totalRows: number;
    totalPages: number;
}
const useTable = <T,>({
    columns,
    data,
    usePagination,
    pageLength,
    useServer
}: THook<T>) => {
    const [clientData, setClientData] = useState<T[]>([]);
    const [shownData, setShownData] = useState<T[]>([]);
    const [meta, setMeta] = useState<TMetaPagination>({
        page: 0,
        pages: [],
        perPage: pageLength[0],
        totalRows: 0,
        totalPages: 0
    })
    const [search, setSearch] = useState<string>('');
    const [searchFields, setSearchFileds] = useState<string[]>([]);
    const isFirstSearchRender = useRef(true);
    const isFirstPerPageRender = useRef(true);
    const isFirstPageRender = useRef(true);

    const initialClientEvent = useCallback(() => {
        console.log('initial table client...');
        console.log('pagination : ' + usePagination);
        setSearch('')
        setClientData(data);
        const totalRows = data.length;
        if (usePagination) {
            const paginate = Paginator.paginate(totalRows, meta.perPage);
            const totalPages = paginate.totalPages;
            const pages = Paginator.getShownPages(totalRows, meta.perPage, 1);
            setMeta(prev => ({
                ...prev,
                page: 1,
                totalRows: totalRows,
                totalPages: totalPages,
                pages: pages
            }));
            setShownData(data.slice(0, meta.perPage));
        } else {
            setMeta(prev => ({
                ...prev,
                totalRows: totalRows,
            }));
            setShownData(data);
        }
        setSearchFileds(Search.getSearchableFieldsFromColumns(columns));
    }, [])

    useEffect(() => {
        if (useServer) return;
        initialClientEvent();
        return () => { }
    }, [initialClientEvent])

    useEffect(() => {
        if (useServer) return;
        if (isFirstPerPageRender.current) {
            isFirstPerPageRender.current = false;
            return;
        }
        console.log('per page....');

        const totalRows = clientData.length;
        const paginate = Paginator.paginate(totalRows, meta.perPage);
        const totalPages = paginate.totalPages;
        const pages = Paginator.getShownPages(totalRows, meta.perPage, 1);
        setMeta(prev => ({
            ...prev,
            page: 1,
            totalPages: totalPages,
            pages: pages
        }));
        setShownData(clientData.slice(0, meta.perPage));
        return () => { }
    }, [meta.perPage])

    useEffect(() => {
        if (useServer) return;
        if (isFirstPageRender.current) {
            isFirstPageRender.current = false;
            return;
        }
        console.log('page....');
        const startIndex = (meta.page - 1) * meta.perPage;
        const endIndex = startIndex + meta.perPage;
        const pages = Paginator.getShownPages(meta.totalRows, meta.perPage, meta.page);
        setMeta(prev => ({ ...prev, pages: pages }));
        setShownData(clientData.slice(startIndex, endIndex));
        return () => { }
    }, [meta.page])

    useEffect(() => {
        if (useServer) return;
        if (isFirstSearchRender.current) {
            isFirstSearchRender.current = false;
            return;
        }
        const timeout = setTimeout(() => {
            console.log('search data...');
            const filteredData = Search.getFilteredData(search, data, searchFields);
            setClientData(filteredData);
            const totalRows = filteredData.length;
            if (usePagination) {
                const paginate = Paginator.paginate(totalRows, meta.perPage);
                const totalPages = paginate.totalPages
                const pages = Paginator.getShownPages(totalRows, meta.perPage, 1);
                const shownData = filteredData.slice(0, meta.perPage);
                setMeta(prev => ({
                    ...prev,
                    page: 1,
                    totalRows: totalRows,
                    totalPages: totalPages,
                    pages: pages
                }));
                setShownData(shownData);
            } else {
                setMeta(prev => ({
                    ...prev,
                    totalRows: totalRows,
                }));
                setShownData(filteredData);
            }
        }, 500);
        return () => { clearTimeout(timeout) }
    }, [search])

    const handlePerPageChange = (perPage: number) => {
        setMeta(prev => ({ ...prev, perPage: perPage }));
    }

    const handlePageChange = (page: number) => {
        setMeta(prev => ({ ...prev, page: page }));
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
    };

    return {
        meta,
        handlePerPageChange,
        handlePageChange,
        search,
        shownData,
        handleSearch
    }
}

export default useTable;