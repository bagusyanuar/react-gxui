import React from 'react'
import styled from 'styled-components'
import { ITable } from './types'
import TH from './components/TH'
import TD from './components/TD'
import Pagination from './components/Pagination'
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

const Table = <T,>({
    columns,
    data,
    useServer,
    className,
    pageLength = [5, 25, 50],
}: ITable<T>) => {
    const hook = useTable({
        data,
        pageLength,
        useServer: useServer
    });
    console.log('RENDER TABLE');
    return (
        <StyledContainer>
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
                selectedPage={useServer ? useServer.page : hook.selectedPage}
                pages={hook.pages}
                totalRows={useServer ? useServer.totalRows : hook.totalRows}
                onPerPageChange={perPage => { hook.setPageSize(perPage) }}
                onPageChange={page => {
                    hook.setSelectedPage(page);
                    // onPageChange?.(page);
                }}
            />
        </StyledContainer>
    )
}

export default Table