import { ButtonVariant, ButtonSize } from './enum'
import { HTMLBaseProps, TSize } from '../types'

export interface IButton extends HTMLBaseProps<HTMLButtonElement> {
    children?: React.ReactNode;
    id?: string;
    loading?: boolean;
    variant?: TVariant
    size?: TSize
}

export type TVariant = 'primary' | 'accent' | 'primary-outlined' | 'accent-outlined'