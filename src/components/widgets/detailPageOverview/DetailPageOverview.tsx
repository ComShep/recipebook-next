"use client";

import { Tag } from "@/components/ui/tag/Tag";
import styles from "./DetailPageOverview.module.css";
import {
  IconBreakfest,
  IconClock,
  IconDessert,
  IconDinner,
  IconLunch,
  IconServes,
} from "@/components/ui/icons/Icons";
import type { ReactNode } from "react";
import Image from "next/image";
import { useImagePlaceholder } from "@/hooks/useImagePlaceholder";

type BaseProps = {
  tagTitle: string;
  title: string;
  description: string;
  image: string;
  isRenderStats: boolean;
};

type Props = BaseProps &
  (
    | {
        isRenderStats: true;
        cookingTime: number;
        servings: number;
        category: string;
      }
    | {
        isRenderStats: false;
        cookingTime?: never;
        servings?: never;
        category?: never;
      }
  );

export const DetailPageOverwiew = (props: Props) => {
  const {
    tagTitle,
    title,
    image,
    description,
    cookingTime,
    servings,
    category,
    isRenderStats = false,
  } = props;
  const { imageUrl } = useImagePlaceholder(image);
  const getCategoryIcon = (category?: string): ReactNode => {
    
    if (!category) {
      return null;
    }
    switch (category) {
      case "breakfast":
        return <IconBreakfest />;
      case "lunch":
        return <IconLunch />;
      case "dinner":
        return <IconDinner />;
      case "dessert":
        return <IconDessert />;
      default:
        return <IconServes />;
    }
  };
  console.log(image)
  const renderStats = () => {
    return (
      <>
        <div className={styles.stats}>
          <div className={styles.statsItem}>
            <IconClock />
            <span>{cookingTime} min</span>
          </div>
          <div className={styles.statsItem}>
            <IconServes />
            <span>{servings} serves</span>
          </div>
          <div className={styles.statsItem}>
            {getCategoryIcon(category)}
            <span>{category}</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <section className={styles.overview}>
      <Tag title={tagTitle} />
      <h1 className={styles.overviewTitle}>{title}</h1>
      <p className={styles.description}>{description}</p>
      {isRenderStats && renderStats()}
      {image && <Image src={imageUrl} unoptimized alt="img" width={1156} height={640} />}
    </section>
  );
};
