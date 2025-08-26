import { useEffect, useRef, useCallback, type RefObject } from 'react';
import { useImageStore } from '../store/store';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import type { UnsplashImage } from '../types/api';

const HomePage = () => {
   const { 
    images, searchImages, mode, status, error, searchTerm,
    fetchImages, searchImagesByTerm 
  } = useImageStore();

  const loaderRef = useRef<HTMLDivElement>(null);

  const imagesToDisplay = mode === 'search' ? searchImages : images;

  const loadMoreImages = useCallback(() => {
    if (status !== 'loading') {
      if (mode === 'search') {
        searchImagesByTerm();
      } else {
        fetchImages();
      }
    }
  }, [status, mode, searchImagesByTerm, fetchImages]);;

  useInfiniteScroll({
    targetRef: loaderRef as RefObject<HTMLElement>,
    callback: loadMoreImages,
    canFetchMore: status !== 'loading', 
  });

  useEffect(() => {
    const initialFetch = async () => {
      await fetchImages();
    };

    if (images.length === 0 && status === 'idle') {
      initialFetch();
    }
  }, [fetchImages, images.length, status]);

  useEffect(() => {
  if (images.length > 0) {
    const lcpImage = images[0];
    
    // Buat elemen link untuk preload
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = lcpImage.urls.small; 
    
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }
}, [images]);

  return (
    <main className="container mx-auto px-4 py-10 pb-12">
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

      {/* <ImageGrid images={images} />
      <div ref={loaderRef} className="h-10" /> */}
       {imagesToDisplay.length > 0 ? (
        <ImageGrid images={imagesToDisplay as UnsplashImage[]} />
      ) : (
        status === 'success' && mode === 'search' && (
          <p className="text-center text-light-slate/70 font-mono">
            // No assets found for query: "{searchTerm}"
          </p>
        )
      )}

      <div ref={loaderRef} className="h-10" />
      {status === 'loading' && imagesToDisplay.length > 0 && (
          <p className="text-center text-neon-cyan animate-pulse">
              Loading more assets...
          </p>
      )}
    </main>
  );
};

export default HomePage;