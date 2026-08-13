"use client"

import styles from './CookingTipsNourishingCard.module.css'
import Link from "next/link"
import { Button } from '@/components/ui/button/Button'
import type { CookingTipsDetail, SubSectionType } from '@/types/types'

type Props = {
	data: CookingTipsDetail,
	subSection?: SubSectionType | null
}

export const CoolingTipsNourishingCard = ({data, subSection}: Props) => {
	return (
		<div className={styles.card} style={{ 'backgroundImage': `url(${data.image})` }}>
			<div className={styles.info}>
				<h3 className={styles.title}>{data.title}</h3>
				<p className={styles.description}>
					{data.description}
				</p>
				<div className={styles.footer}>
					<div className={styles.attributes}>
						<span>{data.time} Min</span> - <span>{data.date}</span>
					</div>
					<Link href={`/cooking-tips/${subSection}/${data.id}`}><Button name='read more' color='light' /></Link>
				</div>
			</div>
		</div>
	)
}
