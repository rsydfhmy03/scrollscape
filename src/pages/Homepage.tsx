// src/pages/HomePage.tsx
import { useEffect } from 'react';
import { useImageStore } from '../store/store';
import ImageGrid from '../components/ImageGrid/ImageGrid';

const HomePage = () => {
  const { images, status, error, fetchImages } = useImageStore();

  useEffect(() => {
    // Hanya fetch jika images masih kosong
    if (images.length === 0) {
      fetchImages(1);
    }
  }, [fetchImages, images.length]);

  return (
    <main className="container mx-auto px-4 pb-12">
      {status === 'loading' && images.length === 0 && (
        <p className="text-center text-neon-cyan animate-pulse">Scanning the network...</p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-500">
          // Network Error: {error}
        </p>
      )}
      {images.length > 0 && <ImageGrid images={images} />}

    </main>
  );
};

export default HomePage;