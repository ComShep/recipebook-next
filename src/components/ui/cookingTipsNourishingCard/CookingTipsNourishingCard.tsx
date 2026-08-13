"use client"

import styles from './CookingTipsNourishingCard.module.css'
import Link from "next/link"
import { Button } from '@/components/ui/button/Button'
import type { CookingTipsDetail, SubSectionType } from '@/types/types'
import { useState } from 'react'

type Props = {
	data: CookingTipsDetail,
	subSection?: SubSectionType | null
}

const PLACEHOLDER = '/img/placeholder/A1w8fru2gKL.jpg'

export const CoolingTipsNourishingCard = ({data, subSection}: Props) => {
  const [imageUrl, setImageUrl] = useState(PLACEHOLDER);
  const [isLoaded, setIsLoaded] = useState(false);

  // Функция проверки картинки
  const checkImage = (url: string) => {
    const img = new Image();
    img.onload = () => {
      setImageUrl(url);
      setIsLoaded(true);
    };
    img.onerror = () => {
      setImageUrl(PLACEHOLDER);
      setIsLoaded(true);
    };
    img.src = url;
  };

  // Вызываем проверку при монтировании
  if (!isLoaded) {
    checkImage(data.image);
  }

	return (
		<div className={styles.card} style={{ 'backgroundImage':`url(${imageUrl})` }}>
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
