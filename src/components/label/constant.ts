import { TSize } from './types'

type TLabelSize = {
    fontSize: string;
}

export const LABEL_SIZE: Record<TSize, TLabelSize> = {
    large: {
        fontSize: '1.25rem'
    },
    normal: {
        fontSize: '1rem'
    },
    small: {
        fontSize: '0.75rem'
    }
}