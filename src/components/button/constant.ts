import { ButtonVariant, ButtonSize } from './enum'
import { TVariant } from './types'
import { TSize } from '../types'

type TButtonVariant = {
    background: string;
    color: string;
    border: string;
    hoverBackground: string;
    hoverBorder: string;
    hoverColor: string;
    disabledBackgroud: string;
    disabledColor: string;
    disabledBorder: string;
}

type TButtonSize = {
    fontSize: string;
    padding: string;
}

export const BUTTON_VARIANT: Record<TVariant, TButtonVariant> = {
    'primary': {
        background: 'var(--primary-color)',
        color: 'white',
        border: 'var(--primary-color)',
        hoverBackground: 'color-mix(in srgb, black 20%, var(--primary-color))',
        hoverColor: 'white',
        hoverBorder: 'color-mix(in srgb, black 20%, var(--primary-color))',
        disabledBackgroud: 'color-mix(in srgb, black 20%, var(--primary-color))',
        disabledBorder: 'color-mix(in srgb, black 20%, var(--primary-color))',
        disabledColor: 'white'
    },
    'accent': {
        background: 'var(--accent-color)',
        color: 'white',
        border: 'var(--accent-color)',
        hoverBackground: 'color-mix(in srgb, black 20%, var(--accent-color))',
        hoverColor: 'white',
        hoverBorder: 'color-mix(in srgb, black 20%, var(--accent-color))',
        disabledBackgroud: 'color-mix(in srgb, black 20%, var(--accent-color))',
        disabledBorder: 'color-mix(in srgb, black 20%, var(--accent-color))',
        disabledColor: 'white'
    },
    'primary-outlined': {
        background: 'white',
        color: 'var(--primary-color)',
        border: 'var(--primary-color)',
        hoverBackground: 'var(--primary-color)',
        hoverColor: 'white',
        hoverBorder: 'var(--primary-color)',
        disabledBackgroud: 'white',
        disabledBorder: 'color-mix(in srgb, white 65%, var(--primary-color))',
        disabledColor: 'color-mix(in srgb, white 65%, var(--primary-color))'
    },
    'accent-outlined': {
        background: 'white',
        color: 'var(--accent-color)',
        border: 'var(--accent-color)',
        hoverBackground: 'var(--accent-color)',
        hoverColor: 'white',
        hoverBorder: 'var(--accent-color)',
        disabledBackgroud: 'white',
        disabledBorder: 'color-mix(in srgb, white 65%, var(--accent-color))',
        disabledColor: 'color-mix(in srgb, white 65%, var(--accent-color))'
    },
}

export const BUTTON_SIZE: Record<TSize, TButtonSize> = {
    large: {
        fontSize: '1.25rem',
        padding: '0.75rem 2rem'
    },
    normal: {
        fontSize: '1rem',
        padding: '0.75rem 1.75rem'
    },
    small: {
        fontSize: '0.75rem',
        padding: '0.5rem 1.25rem'
    }
} 