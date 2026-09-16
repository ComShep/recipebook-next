"use client";

import styles from "./CookingTipsNourishingCard.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button/Button";
import type { CookingTipsDetail, SubSectionType } from "@/types/types";
import { useEffect, useState } from "react";

type Props = {
  data: CookingTipsDetail;
  subSection?: SubSectionType | null;
};

const PLACEHOLDER = "/img/placeholder/imagePlaceholder.jpg";

export const CoolingTipsNourishingCard = ({ data, subSection }: Props) => {
  const [imageUrl, setImageUrl] = useState(PLACEHOLDER);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ignore = false;
    const img = new Image();

    img.onload = () => {
      if (!ignore) setImageUrl(data.image);
    };
    img.onerror = () => {
      if (!ignore) setImageUrl(PLACEHOLDER);
    };
    img.src = data.image;

    return () => {
      ignore = true;
      img.onload = null;
      img.onerror = null;
    };
  }, [data.image]);

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.info}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.footer}>
          <div className={styles.attributes}>
            <span>{data.time} Min</span> - <span>{data.date}</span>
          </div>
          <Link href={`/cooking-tips/${subSection}/${data.id}`}>
            <Button name="read more" color="light" />
          </Link>
        </div>
      </div>
    </div>
  );
};
