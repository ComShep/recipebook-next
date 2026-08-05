import clsx from 'clsx'
import styles from './Button.module.css'

type Props = {
	name: string,
	color?: 'dark' | 'light'
}

export const Button = ({name, color = `dark`} : Props) => {

	const btnClass = clsx (
    [styles.btn], 
    [styles[color]]
  )

	return (
		<button className={btnClass}>{name}</button>
	)
}