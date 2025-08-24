import { motion } from 'framer-motion';
import type { UnsplashImage } from '../../types/api';
import { useImageStore } from '../../store/store';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

interface ImageCardProps {
  image: UnsplashImage;
}

const ImageCard = ({ image }: ImageCardProps) => {
  const selectImage = useImageStore((state) => state.selectImage);
  return (
    <motion.div
      onClick={() => selectImage(image)}
      className="group relative overflow-hidden rounded-lg shadow-lg 
                 border border-neon-cyan/20 
                 bg-slate-500/10 backdrop-blur-md" 
      variants={cardVariants}
      whileHover={{ scale: 1.05, y: -5 }} 
      transition={{ duration: 0.3 }}
    >
      {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-neon-cyan/20 rounded-lg"></div> */}

      <img
        src={image.urls.small}
        alt={image.alt_description || 'Unsplash Image'}
       className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
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