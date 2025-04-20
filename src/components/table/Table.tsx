import React from 'react'
import styled from 'styled-components'
import { ITable } from './types'
import TH from './components/TH'
import TD from './components/TD'
import Pagination from './components/Pagination'
import NoData from './components/NoData'
import { useTable } from './hooks'

const StyledContainer = styled.div`
    width: 100%;
`

const StyledTableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    margin-bottom: .5rem;
`

const StyledTable = styled.table`
    width: 100%;
    background: transparent;
    border-collapse:  collapse;
    table-layout: fixed;
`

const StyledThead = styled.thead`
    width: 100%;
    border-bottom: 1px solid color-mix(in srgb, white 50%, var(--neutral-color));
`

const StyledRow = styled.tr`
    border-bottom: 1px solid color-mix(in srgb, white 50%, var(--neutral-color));
`

const StyledExtensionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-bottom: 0.5rem;
`

const StyledSearchContainer = styled.div`
    position: relative;
`

const StyledSearchIcon = styled.svg`
    position: absolute;
    left: .75rem;
    top: 35%;
    color: var(--neutral-color);
    width: 14px;
    height: 14px;
`

const StyledExtensionSearch = styled.input`
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: color-mix(in srgb, white 20%, var(--neutral-color));
    transition: all .2s ease-in-out;
    border-radius: .25rem;
    color: color-mix(in srgb, white 20%, var(--neutral-color));
    font: .75rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 2rem;
    padding-right: .5rem;

    &:focus {
        color: var(--neutral-color);
        border-color: var(--neutral-color);
    }
`

const Table = <T,>({
    columns,
    data,
    useServer,
    className,
    pageLength = [10, 25, 50],
}: ITable<T>) => {
    const hook = useTable({
        columns,
        data,
        pageLength,
        useServer: useServer
    });
    console.log('RENDER TABLE');
    return (
        <StyledContainer>
            <StyledExtensionContainer>
                <StyledSearchContainer>
                    <StyledExtensionSearch
                        placeholder='search...'
                        value={hook.search}
                        onChange={hook.handleSearch}
                    />
                    <StyledSearchIcon xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z" />
                    </StyledSearchIcon>
                </StyledSearchContainer>
            </StyledExtensionContainer>
            <StyledTableContainer className={className}>
                <StyledTable>
                    <StyledThead>
                        <tr>
                            {columns.map((column, index) => {
                                return <TH
                                    key={index}
                                    title={column.title}
                                    align={column.align}
                                    width={column.width}
                                />
                            })}
                        </tr>
                    </StyledThead>
                    <tbody>
                        {
                            (useServer ? data : hook.shownData).length === 0 ?
                                (
                                    <tr>
                                        <td colSpan={columns.length}>
                                            <NoData />
                                        </td>
                                    </tr>
                                ) :
                                (useServer ? data : hook.shownData).map((row, rowIndex) => {
                                    return (
                                        <StyledRow key={rowIndex}>
                                            {columns.map((column, colIndex) => {
                                                return <TD
                                                    key={colIndex}
                                                    align={column.align}
                                                >
                                                    {column.selector ? column.selector(row, rowIndex) : <></>}
                                                </TD>
                                            })}
                                        </StyledRow>
                                    );
                                })
                        }

                    </tbody>
                </StyledTable>
            </StyledTableContainer>
            <Pagination
                pageLength={pageLength}
                selectedPage={useServer ? useServer.page : hook.meta.page}
                pages={hook.meta.pages}
                totalRows={useServer ? useServer.totalRows : hook.meta.totalRows}
                onPerPageChange={perPage => {
                    hook.handlePerPageChange(perPage);
                }}
                onPageChange={page => {
                    hook.handlePageChange(page);
                    // hook.setSelectedPage(page);
                    // onPageChange?.(page);
                }}
            />
        </StyledContainer>
    )
}

export default Table