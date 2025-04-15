import React from 'react'
import styled, { keyframes } from 'styled-components'
import { TVariant, TSize } from './types'
import { BUTTON_VARIANT, BUTTON_SIZE } from './constant'


export const StyledWrapper = styled.div<{ $variant: TVariant }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 100%;
    color:  ${({ $variant }) => BUTTON_VARIANT[$variant].color};
`

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;


export const StyledSpinner = styled.svg<{ $size: TSize }>`
    width: ${({ $size }) => BUTTON_SIZE[$size].fontSize};
    height: ${({ $size }) => BUTTON_SIZE[$size].fontSize};
    animation: ${spin} 1s linear infinite;
    color: inherit;

    circle {
        fill: currentColor;
    }
`

const ButtonLoader: React.FC<{
    text?: string,
    size?: TSize,
    variant?: TVariant,
}> = ({
    text = 'loading...',
    size = 'normal',
    variant = 'primary'
}) => {
        return (
            <StyledWrapper
                $variant={variant}
            >
                <StyledSpinner
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    $size={size}
                >
                    <g>
                        <circle cx="3" cy="12" r="1.5" className="fill-current" />
                        <circle cx="21" cy="12" r="1.5" className="fill-current" />
                        <circle cx="12" cy="21" r="1.5" className="fill-current" />
                        <circle cx="12" cy="3" r="1.5" className="fill-current" />
                        <circle cx="5.64" cy="5.64" r="1.5" className="fill-current" />
                        <circle cx="18.36" cy="18.36" r="1.5" className="fill-current" />
                        <circle cx="5.64" cy="18.36" r="1.5" className="fill-current" />
                        <circle cx="18.36" cy="5.64" r="1.5" className="fill-current" />
                    </g>
                </StyledSpinner>
                <span style={{ color: 'inherit' }}>{text}</span>
            </StyledWrapper>
        )
    }

export default ButtonLoader