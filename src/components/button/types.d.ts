import { ButtonVariant, ButtonSize } from './enum'

export interface IButton {
    children?: React.ReactNode;
    loading?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    variant?: TVariant
    size?: TSize
    className?: string
}

export type TSize = 'large' | 'normal' | 'small'
export type TVariant = 'primary' | 'accent' | 'primary-outlined' | 'accent-outlined'