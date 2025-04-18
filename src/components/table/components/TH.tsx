import React from 'react'
import styled from 'styled-components'
import { ROW_ALIGN } from '../constant'
import { TAlign, TTH } from '../types'

const StyledTH = styled.th<{ $width: string }>`
    font-size: 0.725rem;
    font-weight: 600;
    width: ${({ $width }) => $width};
    color: color-mix(in srgb, black 20%, var(--neutral-color));
`

const StyledContainer = styled.div<{ $align: TAlign }>`
    display: flex;
    align-items: center;
    justify-content: ${({ $align }) => ROW_ALIGN[$align].align};
    padding: 0.5rem 0.25rem;
    text-transform: uppercase;
`

const TH: React.FC<TTH> = ({
    title,
    align = 'center',
    width = 'auto'
}) => {
    return (
        <StyledTH
            $width={width}
        >
            <StyledContainer $align={align}>
                <span>{title}</span>
            </StyledContainer>
        </StyledTH>
    )
}

export default TH