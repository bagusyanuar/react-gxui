import { HTMLBaseProps, TSize } from '../types'
import { IconType } from 'react-icons'
import {
    GroupBase,
    OptionsOrGroups,
    SingleValue,
    ActionMeta
} from 'react-select'

export interface ISelect extends HTMLBaseProps<HTMLDivElement> {
    size?: TSize;
    id?: string;
    label?: string;
    isRequired?: boolean;
    options?: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
    onChange?: (value: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
    placeholder?: React.ReactNode;
    prefixIcon?: IconType;
    className?: string;
    labelProps?: HTMLBaseProps<HTMLLabelElement>;
}

export type SelectOption = {
    value: string;
    label: string | React.ReactNode
}