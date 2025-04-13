import styled, { keyframes } from 'styled-components'

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