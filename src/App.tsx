import HomePage from "./pages/Homepage"
import Header from "./components/Header/Header"
import CursorSpotlight from "./components/common/CursorSpotlight"
import { useImageStore } from './store/store';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import React, { Suspense } from 'react';

const ImageModal = React.lazy(() => import('./components/modal/ImageModal'));
function App() {
  const isModalOpen = useImageStore((state) => state.isModalOpen);
  return (
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen">
      <CursorSpotlight />
      <Header />
      <HomePage />
      
      {/* AnimatePresence akan menangani animasi exit saat komponen di-remove dari DOM */}
      <AnimatePresence>
        {isModalOpen && (
          <Suspense fallback={null}>
            <ImageModal />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
    </LazyMotion>
  )
}

export default App