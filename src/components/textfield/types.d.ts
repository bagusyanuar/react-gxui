import { ElementType } from 'react';
import { IconBaseProps, IconType } from 'react-icons'
import { TextfieldSize } from './enum'

export interface ITextfield {
    size?: TSize;
    prefixIcon?: IconType;
    label?: string;
    className?: string;
    inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    labelProps?: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
}

export type TSize = 'large' | 'normal' | 'small'