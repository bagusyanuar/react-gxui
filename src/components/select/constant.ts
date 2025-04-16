import { TSize } from '../types'

type TSelectSize = {
    paddingHorizontal: string;
    paddingHorizontalValue: string;
    paddingVertical: string;
    paddingVerticalValue: string;
    paddingVerticalHasValue: string;
    fontSize: string;
    arrowSize: number;
}

type TIconSize = {
    iconSize: number;
    spacer: string;
    position: string;
}

type TSelectValidationSize = {
    fontSize: string;
    spacer: string;
}

export const SELECT_SIZE: Record<TSize, TSelectSize> = {
    large: {
        paddingVertical: '0.75rem',
        paddingVerticalValue: '0.25rem',
        paddingHorizontal: '0.75rem',
        paddingHorizontalValue: '0.5rem',
        paddingVerticalHasValue: '0.45rem',
        fontSize: '1.25rem',
        arrowSize: 18,
    },
    normal: {
        paddingVertical: '0.75rem',
        paddingVerticalValue: '0.25rem',
        paddingHorizontal: '0.75rem',
        paddingHorizontalValue: '0.5rem',
        paddingVerticalHasValue: '0.45rem',
        fontSize: '1rem',
        arrowSize: 16
    },
    small: {
        paddingVertical: '0.5rem',
        paddingVerticalValue: '0.125rem',
        paddingHorizontal: '0.5rem',
        paddingHorizontalValue: '0.25rem',
        paddingVerticalHasValue: '0.343rem',
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

export const SELECT_VALIDATION_SIZE: Record<TSize, TSelectValidationSize> = {
    large: {
        fontSize: '1rem',
        spacer: '0.25rem'
    },
    normal: {
        fontSize: '0.875rem',
        spacer: '0.25rem'
    },
    small: {
        fontSize: '0.75rem',
        spacer: '0.125rem'
    },
}