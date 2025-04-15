import { ButtonVariant, ButtonSize } from './enum'
import {TVariant, TSize} from './types'

type TButtonVariant = {
    background: string;
    color: string;
    hoverBackground: string;
    hoverColor: string;
    border: string;
    disabledBackgroud: string;
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
        disabledBackgroud: 'color-mix(in srgb, black 20%, var(--primary-color))'
    },
    'accent': {
        background: 'var(--accent-color)',
        color: 'white',
        border: 'var(--accent-color)',
        hoverBackground: 'color-mix(in srgb, black 20%, var(--accent-color))',
        hoverColor: 'white',
        disabledBackgroud: 'color-mix(in srgb, black 20%, var(--accent-color))'
    },
    'primary-outlined': {
        background: 'white',
        color: 'var(--primary-color)',
        border: 'var(--primary-color)',
        hoverBackground: 'var(--primary-color)',
        hoverColor: 'white',
        disabledBackgroud: 'white'
    },
    'accent-outlined': {
        background: 'white',
        color: 'var(--accent-color)',
        border: 'var(--accent-color)',
        hoverBackground: 'var(--accent-color)',
        hoverColor: 'white',
        disabledBackgroud: 'white',
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