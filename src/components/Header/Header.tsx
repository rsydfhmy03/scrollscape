import { motion } from 'framer-motion';
import SearchBar from '../Search/SearchBar';

const Header = () => {
  return (
    <motion.header 
      className="sticky top-4 z-50 mx-auto max-w-[1500px]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between p-4 rounded-lg
                      bg-white/5 backdrop-blur-lg border border-neon-cyan/20
                      shadow-lg">
        <h1 className="text-2xl font-bold text-neon-cyan glitch" data-text="Scrollscape">
          Scrollscape
        </h1>
        <div className="flex items-center gap-2 text-xs">
           <SearchBar />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span>NETWORK: SECURE</span>
        </div>
       
      </div>
    </motion.header>
  );
};

export default Header;