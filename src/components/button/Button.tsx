import React from 'react'
import styled from 'styled-components'
import { IButton } from './types'
import { ButtonVariant, ButtonSize } from './enum'
import { VARIANT_BACKGROUND, VARIANT_HOVER_BACKGROUND, BUTTON_VARIANT } from './const'
import ButtonLoader from './ButtonLoader'

export const StyledButton = styled.button<{
    $variant: ButtonVariant,
    $size: ButtonSize
}>`
    background-color: ${({ $variant }) => BUTTON_VARIANT[$variant].background};
    cursor: pointer;
    padding: .75rem 1.75rem;
    color: ${({ $variant }) => BUTTON_VARIANT[$variant].color};
    border: ${({ $variant }) => BUTTON_VARIANT[$variant].border};
    outline: none;
    transition: all 0.2s ease-in-out;
    border-radius: .25rem;
    font-size: ${({ $size }) => $size === ButtonSize.Small ? '0.875rem' : '1rem'};

    &:hover {
        background-color: ${({ $variant }) => BUTTON_VARIANT[$variant].hoverBackground};
        color: ${({ $variant }) => BUTTON_VARIANT[$variant].hoverColor};
    }

    &:disabled {
        background-color: ${({ $variant }) => $variant === ButtonVariant.Accent ? 'color-mix(in srgb, black 20%, var(--accent-color))' : 'color-mix(in srgb, black 20%, var(--primary-color))'};
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
                    <ButtonLoader size={size === ButtonSize.Small ? 14 : 16} />
            }
        </StyledButton>
    )
}

export default Button