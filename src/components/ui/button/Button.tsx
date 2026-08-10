import clsx from 'clsx';
import styles from './Button.module.css';
import { roboto } from '@/assets/fonts/fonts';

type Props = {
	name: string,
	color?: 'dark' | 'light'
}

export const Button = ({name, color = `dark`} : Props) => {

	const btnClass = clsx (
    [styles.btn], 
    [styles[color]],
    roboto.className
  )

	return (
		<button className={btnClass}>{name}</button>
	)
}