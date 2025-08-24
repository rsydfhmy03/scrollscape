import HomePage from "./pages/Homepage"
import Header from "./components/Header/Header"
import CursorSpotlight from "./components/common/CursorSpotlight"
import { useImageStore } from './store/store';
import ImageModal from './components/modal/ImageModal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const isModalOpen = useImageStore((state) => state.isModalOpen);
  return (
    <div className="min-h-screen">
      <CursorSpotlight />
      <Header />
      <HomePage />
      
      {/* AnimatePresence akan menangani animasi exit saat komponen di-remove dari DOM */}
      <AnimatePresence>
        {isModalOpen && <ImageModal />}
      </AnimatePresence>
    </div>
  )
}

export default App