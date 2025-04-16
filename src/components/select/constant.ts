import { TSize } from '../types'

type TSelectSize = {
    paddingHorizontal: string;
    paddingVertical: string;
    fontSize: string;
    arrowSize: number;
}

type TIconSize = {
    iconSize: number;
    spacer: string;
    position: string;
}

export const SELECT_SIZE: Record<TSize, TSelectSize> = {
    large: {
        paddingVertical: '0.75rem',
        paddingHorizontal: '0.75rem',
        fontSize: '1.25rem',
        arrowSize: 18,
    },
    normal: {
        paddingVertical: '0.75rem',
        paddingHorizontal: '0.75rem',
        fontSize: '1rem',
        arrowSize: 16
    },
    small: {
        paddingVertical: '0.5rem',
        paddingHorizontal: '0.5rem',
        fontSize: '0.75rem',
        arrowSize: 14
    }
}

export const SELECT_ICON_SIZE: Record<TSize, TIconSize> = {
    large: {
        iconSize: 20,
        spacer: '2.5rem',
        position: '0.75rem'
    },
    normal: {
        iconSize: 16,
        spacer: '2.125rem',
        position: '0.75rem'
    },
    small: {
        iconSize: 12,
        spacer: '1.5rem',
        position: '0.5rem'
    },
}
