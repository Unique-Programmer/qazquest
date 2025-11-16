import styles from './Button.module.scss'

type Variant = 'primary' | 'outline'

export function Button({
  variant = 'primary',
  children,
  ...rest
}: {
  variant?: Variant
  children: React.ReactNode
}) {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]}`}
      {...rest}
    >
      {children}
    </button>
  )
}
