import React from 'react'
import { StyledSpinner } from './styled'
import { ISpinner } from './types'

const Spinner: React.FC<ISpinner> = ({ size }) => {
    return (
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
    )
}

export default Spinner