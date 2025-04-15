export type TSize = 'large' | 'normal' | 'small'

export type HTMLBaseProps<T> =
    T extends HTMLButtonElement ? React.ButtonHTMLAttributes<T> :
    T extends HTMLInputElement ? React.InputHTMLAttributes<T> :
    T extends HTMLTextAreaElement ? React.TextareaHTMLAttributes<T> :
    React.HTMLAttributes<T>;