'use client';

import styles from './Skeletons.module.css';

export const PageSkeleton = () => {
  return (
    <div className={styles.container}>
      {[1, 2, 3, 4].map((blockIndex) => (
        <div key={blockIndex} className={styles.skeletonBlock}>
          <div className={styles.headerSkeleton}>
            <div className={styles.titleSkeleton}></div>
            <div className={styles.arrowsSkeleton}>
              <div className={styles.arrowSkeleton}></div>
              <div className={styles.arrowSkeleton}></div>
            </div>
          </div>
          
          <div className={styles.cardsGrid}>
            {[1, 2, 3].map((cardIndex) => (
              <div key={cardIndex} className={styles.cardSkeleton}>
                <div className={styles.imageSkeleton}></div>
                <div className={styles.contentSkeleton}>
                  <div className={styles.textLineSkeleton}></div>
                  <div className={styles.textLineSkeleton}></div>
                  <div className={styles.textLineSkeletonShort}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

