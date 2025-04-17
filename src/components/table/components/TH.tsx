import React from 'react'
import styled from 'styled-components'
import { TH_ALIGN } from '../constant'
import { TAlign, ITH } from '../types'

const StyledTH = styled.th`
    font-size: 0.725rem;
`

const StyledContainer = styled.div<{ $align: TAlign }>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${({ $align }) => TH_ALIGN[$align].align};
`

const TH: React.FC<ITH> = ({
    title,
    align = 'center'
}) => {
    return (
        <StyledTH>
            <StyledContainer $align={align}>
                <span>{title}</span>
            </StyledContainer>
        </StyledTH>
    )
}

export default TH