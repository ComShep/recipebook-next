'use client';

import styles from './HomePageSkeleton.module.css';

export default function HomePageSkeleton() {
  return (
    <div className={styles.container}>
      {/* Hero-секция */}
      <section className={styles.heroSection}>
        <div className={styles.heroSkeleton}>
          <div className={styles.heroTitleSkeleton}></div>
          <div className={styles.heroSubtitleSkeleton}></div>
          <div className={styles.heroButtonSkeleton}></div>
        </div>
      </section>

      {/* Популярные рецепты */}
      <section className={styles.popularSection}>
        <div className={styles.headerSkeleton}>
          <div className={styles.titleSkeleton}></div>
          <div className={styles.linkSkeleton}></div>
        </div>
        
        <div className={styles.cardsGrid}>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className={styles.cardSkeleton}>
              <div className={styles.imageSkeleton}></div>
              <div className={styles.contentSkeleton}>
                <div className={styles.textLineSkeleton}></div>
                <div className={styles.textLineSkeleton}></div>
                <div className={styles.textLineSkeletonShort}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Категории */}
      <section className={styles.categoriesSection}>
        <div className={styles.headerSkeleton}>
          <div className={styles.titleSkeleton}></div>
        </div>
        
        <div className={styles.categoriesGrid}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className={styles.categorySkeleton}>
              <div className={styles.categoryIconSkeleton}></div>
              <div className={styles.categoryNameSkeleton}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Блог/советы */}
      <section className={styles.blogSection}>
        <div className={styles.headerSkeleton}>
          <div className={styles.titleSkeleton}></div>
        </div>
        
        <div className={styles.blogGrid}>
          {[1, 2, 3].map((index) => (
            <div key={index} className={styles.blogCardSkeleton}>
              <div className={styles.imageSkeleton}></div>
              <div className={styles.contentSkeleton}>
                <div className={styles.textLineSkeleton}></div>
                <div className={styles.textLineSkeleton}></div>
                <div className={styles.textLineSkeletonShort}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Подписка */}
      <section className={styles.subscribeSection}>
        <div className={styles.subscribeSkeleton}>
          <div className={styles.subscribeTitleSkeleton}></div>
          <div className={styles.subscribeSubtitleSkeleton}></div>
          <div className={styles.subscribeInputSkeleton}>
            <div className={styles.inputSkeleton}></div>
            <div className={styles.buttonSkeleton}></div>
          </div>
        </div>
      </section>
    </div>
  );
}