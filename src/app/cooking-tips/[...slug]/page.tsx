import { DetailPageOverwiew } from "@/components/widgets/detailPageOverview/DetailPageOverview";
import styles from "./page.module.css";
import { ItemsList } from "@/components/ui/itemsList/ItemsList";
import { RecipeDetailResponse } from "@/types/types";
import { getDetail } from "@/api/api";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function СookingTipsDetail({ params }: Props) {
  const { slug } = await params;
  const data = await getDetail<RecipeDetailResponse>(
    slug[1],
    'cooking_tips',
    slug[0],
    {
      revalidate: 3600,
    },
  );

  const detail = {
    slug: slug,
    ...data,
  };
  
  return (
    <div className={styles.wrapper}>
      <DetailPageOverwiew
        tagTitle="cooking tips"
        title={detail.title}
        description={detail.description}
        image={detail.image}
        isRenderStats={false}
      />
      <section className={styles.info}>
        <div className={styles.instruction}>
          <h2 className={styles.instructionTitle}>Instructions</h2>
          <p className={styles.instructionText}>{detail.instructions}</p>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.rightSideItem}>
            <ItemsList items={detail.equipment} title="Equipment" />
          </div>
        </div>
      </section>
    </div>
  );
}
