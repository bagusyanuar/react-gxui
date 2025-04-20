import React from 'react'
import styled from 'styled-components'

const StyledNoDataContainer = styled.div`
    width: 100%;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .75rem;
    font-weight: bold;
    color: color-mix(in srgb, black 20%, var(--neutral-color));
    border-bottom: 1px solid color-mix(in srgb, white 50%, var(--neutral-color));
`
const NoData = () => {
  return (
    <StyledNoDataContainer>
        No data found...
    </StyledNoDataContainer>
  )
}

export default NoData