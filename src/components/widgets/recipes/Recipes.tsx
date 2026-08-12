import type { Recipe } from '@/types/types'
import { Tag } from '@/components/ui/tag/Tag'
import { RecipeCard } from '@/components/ui/recipeCard/RecipeCard'
import styles from './Recipes.module.css'

type Props = {
	recipes: Array<Recipe> | null
}

export const Recipes = ({recipes}: Props) => {

	if (recipes === null) {
		return (
			<div>рецептов нет</div>
		)
	}

	return (
		<section className={styles.recipesSection}>
			<div className={styles.header}>
				<Tag title={"recipes"}/>
				<h2 className={styles.title}>Embark on a journey</h2>
				<p className={styles.text}>With our diverse collection of recipes we have something to satisfy every palate.</p>
			</div>
			<div className={styles.grid}>
				{recipes.map(recipe => (
					<RecipeCard data={recipe} key={recipe.id}/>
				))}
			</div>
		</section>
	)
}
