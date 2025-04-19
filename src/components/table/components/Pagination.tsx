import React from 'react'
import styled from 'styled-components'
import { TPagination } from '../types'

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

const StyledSelect = styled.select`
    font-size: .75rem;
    border: 1px solid var(--neutral-color);
    border-radius: 0.25rem;
    color: var(--neutral-color);
    padding-top: .25rem;
    padding-bottom: .25rem;
    padding-right: .25rem;

    &:focus {
        outline: none;
    }
`

const StyledNavigator = styled.div`
    display: flex;
    align-items: center;
    gap: .25rem;
`

const StyledButtonNavigator = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .75rem;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    color: var(--neutral-color);
    background-color: white;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        color: white;
        background-color: var(--primary-color);
    }

    &:disabled {
        cursor: default;
        color: color-mix(in srgb, white 50%, var(--neutral-color));
        background-color: white;
    }

    svg {
        width: 0.75rem;
        height: 0.75rem;
        color: currentColor;
    }
`

const StyledButtonPageNavigator = styled(StyledButtonNavigator) <{ $active: boolean }>`
    color: ${({ $active }) => $active ? 'white' : 'var(--neutral-color)'} ;
    background-color: ${({ $active }) => $active ? 'var(--primary-color)' : 'white'};
`

const Pagination: React.FC<TPagination> = ({
    pageLength,
    pages,
    totalRows,
    selectedPage,
    onPerPageChange,
    onPageChange,
}) => {
    return (
        <StyledContainer>
            <StyledPageInfo>Total Rows : {totalRows}</StyledPageInfo>
            <StyledPagePaginator>
                <span>Rows Per Page : </span>
                <StyledSelect
                    onChange={(e) => { onPerPageChange(parseInt(e.currentTarget.value)) }}
                >
                    {pageLength.map((value, key) => {
                        return <option key={key} value={value}>{value}</option>
                    })}
                </StyledSelect>
                <StyledNavigator>
                    <StyledButtonNavigator
                        disabled={selectedPage <= 1}
                        onClick={(e) => {
                            const prevPage = selectedPage - 1;
                            onPageChange(prevPage);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </StyledButtonNavigator>
                    {pages.map((page, key) => {
                        return <StyledButtonPageNavigator
                            key={key}
                            $active={page === selectedPage}
                            onClick={() => { onPageChange(page) }}
                        >
                            <span>{page}</span>
                        </StyledButtonPageNavigator>
                    })}
                    <StyledButtonNavigator
                        disabled={selectedPage === pages[pages.length - 1] || pages.length <= 1}
                        onClick={(e) => {
                            const nextPage = selectedPage + 1;
                            onPageChange(nextPage);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </StyledButtonNavigator>
                </StyledNavigator>
            </StyledPagePaginator>
        </StyledContainer>
    )
}

export default Pagination