'use client'

import { Button } from '@/components/ui/button/Button'
import styles from './RecipeCard.module.css'
import type { Recipe } from '@/types/types'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

type Props = {
	data: Recipe
}

export const RecipeCard = ({data}: Props) => {
  const [imgSrc, setImgSrc] = useState(data.image);

	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Image src={imgSrc} width={612} height={234} alt="picture" onError={() => setImgSrc('/img/placeholder/A1w8fru2gKL.jpg')}/>
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>{data.title}</h3>
				<p className={styles.description}>
					{data.description}
				</p>
				<div className={styles.footer}>
					<div className={styles.attributes}>
						<span>{data.cookingTime} Min</span> - <span>{data.servings} serves</span>
					</div>
					<Link href={`/recipes/${data.id}`}><Button name='view recipe'/></Link> 
				</div>
			</div>
		</div>
	)
}
