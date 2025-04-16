import { ElementType } from 'react';
import { IconBaseProps, IconType } from 'react-icons'
import { TextfieldSize } from './enum'
import { HTMLBaseProps, TSize, TValidation } from '../types'

export interface ITextfield extends HTMLBaseProps<HTMLDivElement> {
    size?: TSize;
    label?: string;
    prefixIcon?: IconType;
    suffixIcon?: IconType;
    isRequired?: boolean;
    isError?: boolean;
    containerProps?: HTMLBaseProps<HTMLDivElement>;
    inputProps?: HTMLBaseProps<HTMLInputElement>;
    labelProps?: HTMLBaseProps<HTMLLabelElement>;
    validationMessage?: string;
}