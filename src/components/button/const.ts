import { ButtonVariant } from './enum'

type TVariant = {
    background: string;
    color: string;
    hoverBackground: string;
    hoverColor: string;
    border: string;
}

export const BUTTON_VARIANT: Record<ButtonVariant, TVariant> = {
    [ButtonVariant.Primary]: {
        background: 'var(--primary-color)',
        color: 'white',
        border: '1px solid var(--primary-color)',
        hoverBackground: 'color-mix(in srgb, black 20%, var(--primary-color))',
        hoverColor: 'white'
    },
    [ButtonVariant.Accent]: {
        background: 'var(--accent-color)',
        color: 'white',
        border: '1px solid var(--accent-color)',
        hoverBackground: 'color-mix(in srgb, black 20%, var(--accent-color))',
        hoverColor: 'white'
    },
    [ButtonVariant.PrimaryOutlined]: {
        background: 'white',
        color: 'var(--primary-color)',
        border: '1px solid var(--primary-color)',
        hoverBackground: 'var(--primary-color)',
        hoverColor: 'white'
    },
    [ButtonVariant.AccentOutlined]: {
        background: '',
        color: 'white',
        border: '',
        hoverBackground: '',
        hoverColor: 'white'
    },
}
export const VARIANT_BACKGROUND = {
    [ButtonVariant.Primary]: 'var(--primary-color)',
    [ButtonVariant.Accent]: 'var(--accent-color)',
    [ButtonVariant.PrimaryOutlined]: 'white',
    [ButtonVariant.AccentOutlined]: 'white'
}

export const VARIANT_HOVER_BACKGROUND = {
    [ButtonVariant.Primary]: 'color-mix(in srgb, black 20%, var(--primary-color))',
    [ButtonVariant.Accent]: 'color-mix(in srgb, black 20%, var(--accent-color))',
    [ButtonVariant.PrimaryOutlined]: 'color-mix(in srgb, black 20%, var(--primary-color))',
    [ButtonVariant.AccentOutlined]: 'color-mix(in srgb, black 20%, var(--accent-color))'
}