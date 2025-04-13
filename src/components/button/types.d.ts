import { ButtonVariant, ButtonSize } from './enum'

export interface IButton {
    children?: React.ReactNode;
    loading?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    variant?: ButtonVariant
    size?: ButtonSize
    className?: string
}