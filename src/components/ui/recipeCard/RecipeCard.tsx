'use client'

import { Button } from '@/components/ui/button/Button'
import styles from './RecipeCard.module.css'
import type { Recipe } from '@/types/types'
import Link from "next/link";
import Image from "next/image";

type Props = {
	data: Recipe
}

export const RecipeCard = ({data}: Props) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Image src={data.image} width={612} height={234} alt="picture"/>
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
