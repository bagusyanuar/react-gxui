import { TSize } from '../types'

type TTextfieldSize = {
    fontSize: string;
    paddingVertical: string;
    paddingHorizontal: string;
}

type TIconSize = {
    iconSize: number;
    spacer: string;
}

export const TEXTFIELD_SIZE: Record<TSize, TTextfieldSize> = {
    large: {
        fontSize: '1.25rem',
        paddingVertical: '0.75rem',
        paddingHorizontal: '0.75rem'
    },
    normal: {
        fontSize: '1rem',
        paddingVertical: '0.75rem',
        paddingHorizontal: '0.75rem'
    },
    small: {
        fontSize: '0.75rem',
        paddingVertical: '0.5rem',
        paddingHorizontal: '0.5rem'
    },
}

export const TEXTFIELD_ICON_SIZE: Record<TSize, TIconSize> = {
    large: {
        iconSize: 20,
        spacer: '0.5rem',
    },
    normal: {
        iconSize: 16,
        spacer: '0.5rem',
    },
    small: {
        iconSize: 12,
        spacer: '0.125rem',
    },
}