import { ElementType } from 'react';
import { IconBaseProps, IconType } from 'react-icons'
import { TextfieldSize } from './enum'
import { HTMLBaseProps, TSize } from '../types'

export interface ITextfield {
    size?: TSize;
    label?: string;
    prefixIcon?: IconType;
    suffixIcon?: IconType;
    className?: string;
    isRequired?: boolean;
    inputProps?: HTMLBaseProps<HTMLInputElement>;
    labelProps?: HTMLBaseProps<HTMLLabelElement>;
}