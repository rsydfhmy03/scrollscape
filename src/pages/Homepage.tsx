import { useEffect } from 'react';
import { useImageStore } from '../store/store';

const HomePage = () => {
  const { images, status, error, fetchImages } = useImageStore();

  useEffect(() => {
    fetchImages(1);
  }, [fetchImages]);

  return (
    <main className="container mx-auto px-4">
      {status === 'loading' && <p className="text-center">Loading images...</p>}
      {status === 'error' && <p className="text-center text-red-500">Error: {error}</p>}
      {status === 'success' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="bg-slate-800 rounded-lg overflow-hidden">
              <img
                src={image.urls.small}
                alt={image.alt_description || 'Unsplash Image'}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default HomePage;