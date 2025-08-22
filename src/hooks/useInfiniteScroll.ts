import { useEffect, type RefObject } from 'react';

interface UseInfiniteScrollOptions {
  targetRef: RefObject<HTMLElement>;
  callback: () => void;
  canFetchMore: boolean;
}

export const useInfiniteScroll = ({
  targetRef,
  callback,
  canFetchMore,
}: UseInfiniteScrollOptions) => {
  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (firstEntry.isIntersecting && canFetchMore) {
          callback(); 
        }
      },
      {
        threshold: 1.0,
      }
    );

    observer.observe(target);


    return () => {
      observer.unobserve(target);
    };
  }, [targetRef, callback, canFetchMore]);
};