import React from 'react'
import styled from 'styled-components'
import { TTD, TAlign } from '../types'
import { ROW_ALIGN } from '../constant'

const StyledTD = styled.td`
    font-size: 0.725rem;
    color: var(--neutral-color);
`

const StyledContainer = styled.div<{ $align: TAlign }>`
    display: flex;
    align-items: center;
    justify-content: ${({ $align }) => ROW_ALIGN[$align].align};
    padding: 1rem 0.25rem;
`

const TD: React.FC<TTD> = ({
    children,
    align = 'center',
}) => {
    return (
        <StyledTD>
            <StyledContainer $align={align}>
                {children}
            </StyledContainer>
        </StyledTD>
    )
}

export default TD