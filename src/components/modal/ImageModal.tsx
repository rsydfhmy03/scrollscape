import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useImageStore } from '../../store/store';
import { X, Heart } from 'lucide-react'; 


const overlayVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.1 } },
};

const ImageModal = () => {
  const { selectedImage, closeModal } = useImageStore();


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  if (!selectedImage) return null; 

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={closeModal} 
    >
      <motion.div
        className="relative w-11/12 max-w-4xl rounded-lg border border-neon-cyan/20 bg-dark-void/50 shadow-2xl overflow-hidden"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 z-10 text-light-slate hover:text-neon-cyan transition-colors"
          aria-label="Close image view"
        >
          <X size={28} />
        </button>
        
        <div className="grid md:grid-cols-2">
          <div className="bg-black">
            <img
              src={selectedImage.urls.small}
              alt={selectedImage.alt_description || 'Selected image'}
              className="w-full h-full max-h-[80vh] object-contain"
            />
          </div>

          <div className="p-6 flex flex-col gap-4 text-sm font-mono">
            <h2 className="text-xl text-neon-cyan font-bold break-words">
              {selectedImage.alt_description || 'Untitled'}
            </h2>
            <div className="flex items-center gap-3 border-b border-neon-cyan/10 pb-4">
              <img src={selectedImage.user.profile_image.medium} alt={selectedImage.user.name} className="w-10 h-10 rounded-full border-2 border-neon-cyan/50" />
              <div>
                <p className="font-bold text-base text-light-slate">{selectedImage.user.name}</p>
                <a href={`https://unsplash.com/@${selectedImage.user.username}`} target="_blank" rel="noopener noreferrer" className="text-neon-cyan/80 hover:underline">
                  @{selectedImage.user.username}
                </a>
              </div>
            </div>
            
            <p className="text-light-slate/80 flex-grow">
              {selectedImage.description || "No description available."}
            </p>

            <div className="flex items-center gap-6 text-light-slate pt-4 border-t border-neon-cyan/10">
              <div className="flex items-center gap-2">
                <Heart className="text-red-500" size={18}/>
                <span>{selectedImage.likes.toLocaleString()} Likes</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;