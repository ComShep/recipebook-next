import { useRef, useState, useEffect, useCallback } from 'react';
import type { Swiper as SwiperType } from 'swiper';

export const useSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const isMountedRef = useRef(false);
  const [isBegining, setIsBegining] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  // ✅ Флаг монтирования
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const onSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;

    // ✅ Не обновляем состояние, если компонент ещё не смонтирован
    if (!isMountedRef.current) return;

    setIsBegining(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const onSlideChange = useCallback((swiper: SwiperType) => {
    // ✅ То же самое для смены слайда
    if (!isMountedRef.current) return;

    setIsBegining(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  return {
    isBegining,
    isEnd,
    handleNext,
    handlePrev,
    onSwiperInit,
    onSlideChange,
  };
};