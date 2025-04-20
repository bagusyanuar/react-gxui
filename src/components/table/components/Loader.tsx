import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
    height: 20rem;
    color: var(--neutral-color);
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    gap: .125rem;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid color-mix(in srgb, white 50%, var(--neutral-color));
`

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;


export const StyledSpinner = styled.svg`
    width: 16px;
    height: 16px;
    animation: ${spin} 1s linear infinite;
    color: inherit;
    margin-bottom: .25rem;

    circle {
        fill: currentColor;
    }
`

const Loader = () => {
    return (
        <StyledContainer>
            <StyledSpinner
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
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
            <span>Loading...</span>
        </StyledContainer>
    )
}

export default Loader