import React from 'react'
import styled from 'styled-components'
import { Label } from '../label'
import { ITextfield } from './types'
import { TSize } from '../types'
import { TEXTFIELD_SIZE, TEXTFIELD_ICON_SIZE } from './constant'

const StyledInputContainer = styled.div<{$size: TSize, $isError: boolean}>`
    display: flex;
    align-items: center;
    padding-left: ${({ $size }) => TEXTFIELD_SIZE[$size].paddingHorizontal};
    padding-right: ${({ $size }) => TEXTFIELD_SIZE[$size].paddingHorizontal};
    border-width: 1px;
    border-style: solid;
    border-color: ${({$isError}) => $isError ? 'var(--danger-color)' : 'color-mix(in srgb, white 20%, var(--neutral-color))'};
    transition: all .2s ease-in-out;
    border-radius: .25rem;
    color: color-mix(in srgb, white 20%, var(--neutral-color));

    &:focus-within {
        border-color: ${({$isError}) => $isError ? 'var(--danger-color)' : 'var(--neutral-color)'};
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

const StyledSuffixIcon = styled.div<{ $size: TSize }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    color: inherit;
    margin-left: ${({ $size }) => TEXTFIELD_ICON_SIZE[$size].spacer};
`

const StyledValidationText = styled.span`
    display: block;
    font-size: .875rem;
    margin-top: 0.25rem;
    color: var(--danger-color);
`

const Textfield: React.FC<ITextfield> = ({
    size = 'normal',
    prefixIcon: PrefixIcon,
    suffixIcon: SuffixIcon,
    label,
    isRequired,
    isError,
    className,
    containerProps,
    inputProps,
    labelProps,
    validationMessage,
    ...props
}) => {
    return (
        <div {...props}>
            {label && (
                <Label
                    size={size}
                    text={label}
                    isRequired={isRequired}
                    {...labelProps}
                />
            )}
            <StyledInputContainer
                $size={size}
                $isError={isError || false}
                {...containerProps}
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
                {SuffixIcon && (
                    <StyledSuffixIcon
                        $size={size}
                    >
                        <SuffixIcon size={TEXTFIELD_ICON_SIZE[size].iconSize} />
                    </StyledSuffixIcon>
                )}
            </StyledInputContainer>
            {isError && (
                <StyledValidationText>
                    {validationMessage}
                </StyledValidationText>
            )}
        </div>
    )
}

export default Textfield