import React from 'react'
import styled from 'styled-components'
import ReactSelect from 'react-select'
import { Label } from '../label'
import { ISelect } from './types'
import { TSize } from '../types'
import { SELECT_SIZE, SELECT_ICON_SIZE } from './constant'

const StyledSelectContainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-color: color-mix(in srgb, white 20%, var(--neutral-color));
    transition: all .2s ease-in-out;
    border-radius: .25rem;
    color: color-mix(in srgb, white 20%, var(--neutral-color));
    font-size: 1rem;

    &:focus-within {
        border-color: var(--neutral-color);
        color: var(--neutral-color);
    }
`

const StyledPrefixIcon = styled.div<{ $size: TSize }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${({ $size }) => SELECT_ICON_SIZE[$size].position};
  width: ${({ $size }) => SELECT_SIZE[$size].fontSize};
`

const Select: React.FC<ISelect> = ({
  options,
  size = 'normal',
  id,
  onChange,
  placeholder,
  prefixIcon: PrefixIcon,
  className,
  label,
  isRequired,
  labelProps,
  ...props
}) => {
  return (
    <div
      className={className}
      {...props}
    >
      {label && (
        <Label
          size={size}
          text={label}
          isRequired={isRequired}
          {...labelProps}
        />
      )}
      <StyledSelectContainer>
        {PrefixIcon && (
          <StyledPrefixIcon
            $size={size}
          >
            <PrefixIcon size={SELECT_ICON_SIZE[size].iconSize} />
          </StyledPrefixIcon>
        )}
        <ReactSelect
          instanceId={id}
          classNamePrefix="react-select"
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          styles={{
            container: (base) => ({
              ...base,
              width: '100%',
              paddingTop: SELECT_SIZE[size].paddingVertical,
              paddingRight: SELECT_SIZE[size].paddingHorizontal,
              paddingLeft: PrefixIcon ? SELECT_ICON_SIZE[size].spacer : SELECT_SIZE[size].paddingHorizontal,
              paddingBottom: SELECT_SIZE[size].paddingVertical,
            }),
            control: (base, state) => ({
              ...base,
              width: '100%',
              padding: '0 0',
              border: 'none',
              boxShadow: 'none',
              minHeight: 'unset',
              ...(state.isFocused && {
                border: 'none',
                boxShadow: 'none',
              })
            }),
            singleValue: (base) => ({
              ...base,
              color: 'var(--neutral-color)'
            }),
            indicatorSeparator: () => ({ display: 'none' }),
            valueContainer: (base) => ({
              ...base,
              padding: '0 0',
              fontSize: SELECT_SIZE[size].fontSize,
              minHeight: 'unset',
            }),
            input: (base) => ({
              ...base,
              padding: '0 0',
              margin: '0 0'
            }),
            dropdownIndicator: (base, state) => ({
              ...base,
              padding: '0 0',
              width: 'auto',
              transition: 'transform 0.3s ease',
              transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              svg: {
                width: SELECT_SIZE[size].arrowSize,
                height: SELECT_SIZE[size].arrowSize,
                color: state.isFocused ? 'var(--neutral-color)' : 'color-mix(in srgb, white 20%, var(--neutral-color))',
                transition: 'color 0.2s ease'
              }
            }),
            indicatorsContainer: (base) => ({
              ...base,
              padding: 0,
              width: 'auto',
            }),
            menu: (base) => ({
              ...base,
              left: '0',
              width: '100%',
              animation: 'fadeSlide 0.2s ease forwards',
              opacity: 0,
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected
                ? 'var(--primary-color)'
                : state.isFocused
                  ? 'color-mix(in srgb, white 80%, var(--primary-color))'
                  : 'white'
            }),
            placeholder: (base) => ({
              ...base,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
            })
          }}
        />
      </StyledSelectContainer>
    </div>
  )
}

export default Select