import styled, { keyframes } from 'styled-components';
import { IButton } from './types'

export const StyledButton = styled.button`
    background-color: var(--primary-color);
    cursor: pointer;
    padding: 10px 20px;
    color: white;
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    border-radius: .5rem;

    &:hover {
        background-color: color-mix(in srgb, black 20%, var(--primary-color));
    }

    &:disabled {
        background-color: color-mix(in srgb, black 20%, var(--primary-color));
        cursor: default;
    }
`

export const StyledLoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 100%;
    color: white;
`

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;


export const StyledSpinner = styled.svg<{ $size: number }>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    animation: ${spin} 1s linear infinite;
    color: inherit;

    circle {
        fill: currentColor;
    }
`