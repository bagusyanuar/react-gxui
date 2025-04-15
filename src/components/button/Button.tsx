import React from 'react'
import styled from 'styled-components'
import { IButton, TVariant } from './types'
import { TSize } from '../types'
import { BUTTON_VARIANT, BUTTON_SIZE } from './constant'
import ButtonLoader from './ButtonLoader'

const StyledButton = styled.button<{
    $variant: TVariant,
    $size: TSize
}>`
    background-color: ${({ $variant }) => BUTTON_VARIANT[$variant].background};
    cursor: pointer;
    padding: ${({ $size }) => BUTTON_SIZE[$size].padding};
    color: ${({ $variant }) => BUTTON_VARIANT[$variant].color};
    border-width: 1px;
    border-style: solid;
    border-color: ${({ $variant }) => BUTTON_VARIANT[$variant].border};
    outline: none;
    transition: all 0.2s ease-in-out;
    border-radius: .25rem;
    font-size: ${({ $size }) => BUTTON_SIZE[$size].fontSize};
    line-height: 1;

    &:hover {
        background-color: ${({ $variant }) => BUTTON_VARIANT[$variant].hoverBackground};
        color: ${({ $variant }) => BUTTON_VARIANT[$variant].hoverColor};
    }

    &:disabled {
        background-color: ${({ $variant }) => BUTTON_VARIANT[$variant].disabledBackgroud};
        border-color: ${({ $variant }) => BUTTON_VARIANT[$variant].disabledBorder};
        color: ${({ $variant }) => BUTTON_VARIANT[$variant].disabledColor};
        cursor: default;
    }
`

const Button: React.FC<IButton> = ({
    children,
    id,
    loading,
    disabled,
    variant = 'primary',
    size = 'normal',
}) => {
    return (
        <StyledButton
            id={id}
            disabled={disabled || loading}
            $variant={variant}
            $size={size}
        >
            {
                !loading ?
                    (children ?? <span>Button</span>)
                    :
                    <ButtonLoader
                        size={size}
                        variant={variant}
                    />
            }
        </StyledButton>
    )
}

export default Button