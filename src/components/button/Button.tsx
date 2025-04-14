import React from 'react'
import styled from 'styled-components'
import { IButton } from './types'
import { ButtonVariant, ButtonSize } from './enum'
import { BUTTON_VARIANT, BUTTON_SIZE } from './const'
import ButtonLoader from './ButtonLoader'

const StyledButton = styled.button<{
    $variant: ButtonVariant,
    $size: ButtonSize
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
        border-color: ${({ $variant }) => `color-mix(in srgb, white 65%, ${BUTTON_VARIANT[$variant].border})`};
        color: ${({ $variant }) => `color-mix(in srgb, white 65%, ${BUTTON_VARIANT[$variant].color})`};
        cursor: default;
    }
`

const Button: React.FC<IButton> = ({
    children,
    loading,
    disabled,
    onClick,
    variant = ButtonVariant.Primary,
    size = ButtonSize.Normal,
    className
}) => {
    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled || loading}
            className={className}
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