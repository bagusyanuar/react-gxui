import React from 'react'
import styled from 'styled-components'
import { ITextfield, TSize } from './types'
import { TEXTFIELD_SIZE, TEXTFIELD_ICON_SIZE, LABEL_SIZE } from './const'

const StyledInputContainer = styled.div<{ $size: TSize }>`
    display: flex;
    align-items: center;
    padding-left: ${({ $size }) => TEXTFIELD_SIZE[$size].paddingHorizontal};
    padding-right: ${({ $size }) => TEXTFIELD_SIZE[$size].paddingHorizontal};
    border-width: 1px;
    border-style: solid;
    border-color: color-mix(in srgb, white 20%, var(--neutral-color));
    transition: all .2s ease-in-out;
    border-radius: .25rem;
    color: color-mix(in srgb, white 20%, var(--neutral-color));

    &:focus-within {
        border-color: var(--neutral-color);
        color: var(--neutral-color);
    }
`

const StyledInput = styled.input<{ $size: TSize }>`
    padding-top: ${({ $size }) => TEXTFIELD_SIZE[$size].paddingVertical};
    padding-bottom: ${({ $size }) => TEXTFIELD_SIZE[$size].paddingVertical};
    flex-grow: 1;
    font-size: ${({ $size }) => TEXTFIELD_SIZE[$size].fontSize};
    outline: none;
    border: none;
    border-radius: .25rem;
    line-height: 1;
    color: color-mix(in srgb, black 20%, var(--neutral-color));
`

const StyledPrefixIcon = styled.div<{ $size: TSize }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    color: inherit;
    margin-right: ${({ $size }) => TEXTFIELD_ICON_SIZE[$size].spacer};
`

const StyledLabel = styled.label<{ $size: TSize }>`
    margin-bottom: 0.25rem;
    display: block;
    color: var(--neutral-color);
    font-size: ${({ $size }) => LABEL_SIZE[$size].fontSize};
`

const Textfield: React.FC<ITextfield> = ({
    size = 'normal',
    prefixIcon: PrefixIcon,
    label,
    className,
    inputProps,
    labelProps
}) => {
    return (
        <div className={className}>
            {label && (<StyledLabel
                $size={size}
                {...labelProps}
            >
                {label}
            </StyledLabel>)}
            <StyledInputContainer
                $size={size}
            >
                {PrefixIcon && (
                    <StyledPrefixIcon
                        $size={size}
                    >
                        <PrefixIcon size={TEXTFIELD_ICON_SIZE[size].iconSize} />
                    </StyledPrefixIcon>
                )}
                <StyledInput
                    type="text"
                    $size={size}
                    {...inputProps}
                />
            </StyledInputContainer>
        </div>
    )
}

export default Textfield