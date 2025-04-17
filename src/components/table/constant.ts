import { TAlign } from './types'

type TThAlign = {
    align: string;
}

export const ROW_ALIGN: Record<TAlign, TThAlign> = {
    left: {
        align: 'start',
    },
    center: {
        align: 'center',
    },
    right: {
        align: 'end',
    }
}