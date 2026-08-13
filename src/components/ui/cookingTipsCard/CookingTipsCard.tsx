"use client"

import styles from './CookingTipsCard.module.css'
import Link from "next/link";
import Image from "next/image";
import { Button } from '@/components/ui/button/Button'
import type { CookingTipsDetail, SubSectionType } from '@/types/types'
import { useState } from 'react';

type Props = {
	data: CookingTipsDetail,
	subSection?: SubSectionType | null
}

export const CookingTipsCard = ({data, subSection}: Props) => {
  const [imgSrc, setImgSrc] = useState(data.image);

	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Image 
          src={imgSrc} 
          alt="picture" 
          width={402} 
          height={234}
          onError={() => setImgSrc('/img/placeholder/A1w8fru2gKL.jpg')}
        />
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>{data.title}</h3>
				<p className={styles.description}>
					{data.description}
				</p>
				<div className={styles.footer}>
					<div className={styles.attributes}>
						<span>{data.time} Min</span> - <span>{data.date}</span>
					</div>
					<Link href={`/cooking-tips/${subSection}/${data.id}`}><Button name='read more' /></Link> 
				</div>
			</div>
		</div>
	)
}
