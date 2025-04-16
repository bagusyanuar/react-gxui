import { HTMLBaseProps, TSize } from '../types'
import { IconType } from 'react-icons'
import {
    GroupBase,
    OptionsOrGroups,
    SingleValue,
    MultiValue,
    ActionMeta
} from 'react-select'

export interface ISelect extends HTMLBaseProps<HTMLDivElement> {
    size?: TSize;
    id?: string;
    label?: string;
    isRequired?: boolean;
    isError?: boolean;
    options?: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
    onChange?: (value: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
    placeholder?: React.ReactNode;
    prefixIcon?: IconType;
    className?: string;
    labelProps?: HTMLBaseProps<HTMLLabelElement>;
    containerProps?: HTMLBaseProps<HTMLDivElement>;
    validationMessage?: string;
}

export interface ISelectMultiple extends Omit<ISelect, 'onChange'> {
    onChange?: (value: MultiValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
}

export type SelectOption = {
    value: string;
    label: string | React.ReactNode
}