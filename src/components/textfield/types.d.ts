import { ElementType } from 'react';
import { IconBaseProps, IconType } from 'react-icons'
import { TextfieldSize } from './enum'

export interface ITextfield {
    prefixIcon?: IconType
    size?: TSize
}

export type TSize = 'large' | 'normal' | 'small'