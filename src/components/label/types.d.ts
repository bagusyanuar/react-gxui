import { HTMLBaseProps, TSize } from '../types'

export interface ILabel extends HTMLBaseProps<HTMLLabelElement> {
    text: string;
    size?: TSize;
    isRequired?: boolean;
}