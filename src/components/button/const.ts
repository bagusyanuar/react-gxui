import { ButtonVariant, ButtonSize } from './enum'

type TVariant = {
    background: string;
    color: string;
    hoverBackground: string;
    hoverColor: string;
    border: string;
    disabledBackgroud: string;
}

type TSize = {
    fontSize: string;
    padding: string;
}

export const BUTTON_VARIANT: Record<ButtonVariant, TVariant> = {
    [ButtonVariant.Primary]: {
        background: 'var(--primary-color)',
        color: 'white',
        border: 'var(--primary-color)',
        hoverBackground: 'color-mix(in srgb, black 20%, var(--primary-color))',
        hoverColor: 'white',
        disabledBackgroud: 'color-mix(in srgb, black 20%, var(--primary-color))'
    },
    [ButtonVariant.Accent]: {
        background: 'var(--accent-color)',
        color: 'white',
        border: 'var(--accent-color)',
        hoverBackground: 'color-mix(in srgb, black 20%, var(--accent-color))',
        hoverColor: 'white',
        disabledBackgroud: 'color-mix(in srgb, black 20%, var(--accent-color))'
    },
    [ButtonVariant.PrimaryOutlined]: {
        background: 'white',
        color: 'var(--primary-color)',
        border: 'var(--primary-color)',
        hoverBackground: 'var(--primary-color)',
        hoverColor: 'white',
        disabledBackgroud: 'white'
    },
    [ButtonVariant.AccentOutlined]: {
        background: 'white',
        color: 'var(--accent-color)',
        border: 'var(--accent-color)',
        hoverBackground: 'var(--accent-color)',
        hoverColor: 'white',
        disabledBackgroud: 'white',
    },
}

export const BUTTON_SIZE: Record<ButtonSize, TSize> = {
    [ButtonSize.Large]: {
        fontSize: '1.25rem',
        padding: '0.75rem 2rem'
    },
    [ButtonSize.Normal]: {
        fontSize: '1rem',
        padding: '0.75rem 1.75rem'
    },
    [ButtonSize.Small]: {
        fontSize: '0.75rem',
        padding: '0.5rem 1.25rem'
    }
} 