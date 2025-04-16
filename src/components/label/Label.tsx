import React from 'react'
import styled from 'styled-components'
import { ILabel } from './types'
import { LABEL_SIZE } from './constant'
import { TSize } from '../types'

const StyledLabel = styled.label<{ $size: TSize }>`
    margin-bottom: 0.25rem;
    display: block;
    color: var(--neutral-color);
    font-size: ${({ $size }) => LABEL_SIZE[$size].fontSize};
`

const StyledRequired = styled.span`
    margin-left: 0.25rem;
    color: var(--danger-color);
`

const Label: React.FC<ILabel> = ({
    text,
    size = 'normal',
    isRequired,
    ...labelProps
}) => {
    return (
        <StyledLabel
            $size={size}
            {...labelProps}
        >
            <span>{text}</span>
            {isRequired && (<StyledRequired>*</StyledRequired>)}
        </StyledLabel>
    )
}

export default Label