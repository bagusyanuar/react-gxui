import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledPageInfo = styled.div`
    font-size: .75rem;
    color: var(--neutral-color);
`

const StyledPagePaginator = styled.div`
    display: flex;
    align-items: center;
    font-size: .75em;
    color: var(--neutral-color);
    gap: .5rem;
`

const Pagination = () => {
    return (
        <StyledContainer>
            <StyledPageInfo>Total Rows : 100</StyledPageInfo>
            <StyledPagePaginator>
                <span>Rows Per Page : </span>
                <select>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                </select>
            </StyledPagePaginator>
        </StyledContainer>
    )
}

export default Pagination