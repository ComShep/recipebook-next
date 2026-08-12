import { getDetail } from "@/api/api"
import { RecipeDetailResponse } from "@/types/types";
import styles from './page.module.css'
import { DetailPageOverwiew } from "@/components/widgets/detailPageOverview/DetailPageOverview";
import { ItemsList } from "@/components/ui/itemsList/ItemsList";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function recipeDetail({params}: Props) {
  const { slug } = await params;
  const data = await getDetail<RecipeDetailResponse>(slug, 'recipes', null, {
    revalidate: 3600,
  });

  const detail = {
    slug: slug,
    ...data
  }

  return (
    <div className={styles.wrapper}>
				<DetailPageOverwiew
					tagTitle="recipe"
					title={detail.title}
					description={detail.description}
					image={detail.image}
					isRenderStats={true}
					cookingTime={detail.cookingTime}
					servings={detail.servings}
					category={detail.category}
				/>
				<section className={styles.info}>
					<div className={styles.instruction}>
						<h2 className={styles.instructionTitle}>Instructions</h2>
						<p className={styles.instructionText}>{detail.instructions}</p>
					</div>
					<div className={styles.rightSide}>
						<div className={styles.rightSideItem}>
							<ItemsList items={detail.ingredients} title='Ingredients' />
						</div>
						<div className={styles.rightSideItem}>
							<ItemsList items={detail.equipment} title='Equipment Needed for Preparation' />
						</div>
						<div className={styles.rightSideItem}>
							<h3 className={styles.itemTitle}>Nutritional Value</h3>
							<ul className={styles.nutritionalList}>
								<li className={styles.nutritionalItem}>Calories: <span>{detail.nutritional.calories}</span></li>
								<li className={styles.nutritionalItem}>Protein: <span>{detail.nutritional.protein}</span></li>
								<li className={styles.nutritionalItem}>Total Fat: <span>{detail.nutritional.total_fat}</span></li>
								<li className={styles.nutritionalItem}>Carbohydrates: <span>{detail.nutritional.carbohydrates}</span></li>
							</ul>
						</div>
					</div>
				</section>
			</div>
  )
}
