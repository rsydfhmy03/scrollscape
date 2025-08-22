import { motion } from 'framer-motion';
import type { UnsplashImage } from '../../types/api';


const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

interface ImageCardProps {
  image: UnsplashImage;
}

const ImageCard = ({ image }: ImageCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg shadow-lg"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-neon-cyan/20 rounded-lg"></div>

      <img
        src={image.urls.small}
        alt={image.alt_description || 'Unsplash Image'}
        className="relative w-full h-80 object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white font-bold truncate">{image.alt_description || 'Untitled'}</p>
        <a
          href={image.user.portfolio_url || `https://unsplash.com/@${image.user.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neon-cyan hover:underline"
        >
          by {image.user.name}
        </a>
      </div>
    </motion.div>
  );
};

export default ImageCard;