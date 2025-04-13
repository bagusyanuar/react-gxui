import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: rebeccapurple;
  color: white;
`;
const PageTitle = () => {
  return (
    <StyledDiv className='text-red-500'>PageTitle</StyledDiv>
  )
}

export default PageTitle