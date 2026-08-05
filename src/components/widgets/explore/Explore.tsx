import styles from "./Explore.module.css";
import {
  IconBreakfest,
  IconDessert,
  IconDinner,
  IconLunch,
  IconQuickBite,
} from "@/components/ui/icons/Icons";
import { Tag } from "@/components/ui/tag/Tag";
import { Button } from "@/components/ui/button/Button";

const categories = [
  {
    icon: <IconBreakfest />,
    name: "breakfest",
  },
  {
    icon: <IconLunch />,
    name: "lunch",
  },
  {
    icon: <IconDinner />,
    name: "dinner",
  },
  {
    icon: <IconDessert />,
    name: "dessert",
  },
  {
    icon: <IconQuickBite />,
    name: "quick bite!",
  },
];

export const Explore = () => {
  return (
    <section className={styles.exploreSection}>
      <div className={styles.info}>
        <Tag title="explore" />
        <h2 className={styles.title}>Our diverse Palette</h2>
        <p className={styles.text}>
          If you are a breakfast enthusiast, a connoisseur of savory delights,
          or on the lookout for irresistible desserts, our curated selection has
          something to satisfy every palate.
        </p>
        <Button name="see more" />
      </div>
      <div className={styles.categories}>
        {categories.map((category) => {
          return (
            <div
              key={category.name}
              className={styles.category}
            >
              {category.icon}
              <p>{category.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
