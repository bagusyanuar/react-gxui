import React from 'react'
import styled from 'styled-components'
import { PiMicrosoftExcelLogo } from 'react-icons/pi'

const StyledExportExcel = styled.button`
    background-color: #4CAF50; 
    color: white;
    border: none;
    padding: 8px 10px;
    cursor: pointer;
    transition: background-color 0.3s;   
    border-radius: 0.25rem;
    &:hover {
        background-color: #45a049;
    }
`
const Extensions = () => {
    return (
        <StyledExportExcel>
            <PiMicrosoftExcelLogo size={16} />
        </StyledExportExcel>
    )
}

export default Extensions