import { TAlign } from './types'

type TThAlign = {
    align: string;
}

export const TH_ALIGN: Record<TAlign, TThAlign> = {
    left: {
        align: 'justify-start',
    },
    center: {
        align: 'justify-center',
    },
    right: {
        align: 'justify-end',
    }
}