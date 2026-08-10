import clsx from 'clsx';
import styles from './ColorButton.module.css';
import { roboto } from '@/assets/fonts/fonts';

type Props = {
	name: string,
	bcgColor: string
}

export const ColorButton = ({name, bcgColor} : Props) => {

	const btnClass = clsx (
		styles.btn,
		styles[bcgColor],
    roboto.className
	)

	return (
		<button className={btnClass}>{name}</button>
	)
}
