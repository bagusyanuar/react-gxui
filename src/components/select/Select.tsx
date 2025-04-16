import React from 'react'
import styled from 'styled-components'
import ReactSelect from 'react-select'
import { ISelect } from './types'

const StyledSelectContainer = styled.div`
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


const Select: React.FC<ISelect> = ({
  ...props
}) => {
  return (
    <StyledSelectContainer {...props}>
      <ReactSelect
        instanceId={`select-a`}
        classNamePrefix="react-select"
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' }
        ]}
        styles={{
          container: (base) => ({
            ...base,
            width: '100%',
            padding: '0.75rem 0.75rem'
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
          indicatorSeparator: () => ({ display: 'none' }),
          valueContainer: (base) => ({
            ...base,
            padding: '0 0',
            fontSize: '1rem',
            minHeight: 'unset',
          }),
          input: (base) => ({
            ...base,
            padding: '0 0',
            margin: '0 0'
          }),
          dropdownIndicator: (base) => ({
            ...base,
            padding: '0 0',
            width: 'auto',
            svg: {
              width: 16,
              height: 16,
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
            width: '100%'
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected
            ? 'var(--primary-color)'
            : state.isFocused
            ? 'color-mix(in srgb, white 80%, var(--primary-color))'
            : 'white'
          })
        }}
      />
    </StyledSelectContainer>
  )
}

export default Select