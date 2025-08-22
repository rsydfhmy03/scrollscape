// src/pages/HomePage.tsx
import { useEffect, useRef, useCallback, type RefObject } from 'react';
import { useImageStore } from '../store/store';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

const HomePage = () => {
  const { images, status, error, fetchImages, currentPage } = useImageStore();

  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMoreImages = useCallback(() => {
    if (status !== 'loading') {
      fetchImages(currentPage + 1);
    }
  }, [currentPage, fetchImages, status]);

  useInfiniteScroll({
    targetRef: loaderRef as RefObject<HTMLElement>,
    callback: loadMoreImages,
    canFetchMore: status !== 'loading', 
  });

  useEffect(() => {
    if (images.length === 0 && status === 'idle') {
      fetchImages(1);
    }
  }, [fetchImages, images.length, status]);

  return (
    <main className="container mx-auto px-4 pb-12">
      {status === 'loading' && images.length === 0 && (
        <p className="text-center text-neon-cyan animate-pulse text-lg">
          Scanning the network for visual data...
        </p>
      )}

      {status === 'error' && (
        <p className="text-center text-red-500 font-mono">
          // Network Error: Connection timed out. {error}
        </p>
      )}

      <ImageGrid images={images} />
      <div ref={loaderRef} className="h-10" />

      {status === 'loading' && images.length > 0 && (
        <p className="text-center text-neon-cyan animate-pulse">
          Loading more assets...
        </p>
      )}
    </main>
  );
};

export default HomePage;