import React from 'react'
import { StyledButton, StyledLoaderWrapper, StyledSpinner } from './styled'
import { IButton } from './types'

const Button: React.FC<IButton> = ({
    children,
    loading,
    disabled
}) => {
    return (
        <StyledButton>
            {
                !loading ?
                    (children ?? <span>Button</span>)
                    :
                    (
                        <StyledLoaderWrapper>
                            <Spinner
                                size={16}
                            />
                            <span style={{ color: 'inherit' }}>Loading..</span>
                        </StyledLoaderWrapper>
                    )
            }

        </StyledButton>
    )
}

export default Button

const Spinner: React.FC<{ size: number }> = ({ size }) => {
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
