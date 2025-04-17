import React from 'react'
import styled from 'styled-components'
import { ITable } from './types'
import TH from './components/TH'

const StyledTable = styled.table`
    width: 800px;
`

const Table = <T,>({
    columns,
}: ITable<T>) => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    {columns.map((column, index) => {
                        return <TH
                            key={index}
                            title={column.title}
                            align={column.align}
                        />
                    })}
                </tr>
            </thead>
        </StyledTable>
    )
}

export default Table