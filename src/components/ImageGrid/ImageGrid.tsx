import { motion } from 'framer-motion';
import type { UnsplashImage } from '../../types/api';
import ImageCard from '../ImageCard/ImageCard';

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

interface ImageGridProps {
  images: UnsplashImage[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {images.map((image, index) => (
        <ImageCard 
          key={image.id} 
          image={image} 
          priority={index < 4} 
        />
      ))}
    </motion.div>
  );
};

export default ImageGrid;