import * as React from 'react'

// Расширяем существующий модуль, не затираем его
declare module '@material-tailwind/react' {
  // оставляем экспорт самих компонентов, но с мягкими типами
  export const Button: React.FC<{
    variant?: string
    size?: string
    color?: string
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
    [key: string]: any
  }>

  export const IconButton: React.FC<{
    variant?: string
    size?: string
    color?: string
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
    [key: string]: any
  }>

  export const Drawer: React.FC<{
    open: boolean
    onClose: () => void
    className?: string
    children?: React.ReactNode
    placement?: 'left' | 'right' | 'top' | 'bottom'
    [key: string]: any
  }>
}
