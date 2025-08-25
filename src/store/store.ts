import { create } from "zustand";
import { fetchImages as apiFetchImages, searchImages as apiSearchImages } from "../api/unsplash";
import type { UnsplashImage } from "../types/api";

interface ImageState {
    images: UnsplashImage[];
    currentPage: number;
    status: 'idle' | 'loading' | 'error' | 'success';
    error: string | null;
    selectedImage: UnsplashImage | null;
    isModalOpen: boolean;
    mode : 'browse' | 'search';
    searchTerm : string;
    searchImages : UnsplashImage[];
    searchCurrentPage : number;

    // fetchImages: (page: number) => Promise<void>;
    fetchImages: () => Promise<void>;
    selectImage: (image: UnsplashImage) => void;
    closeModal: () => void;

    setSearchTerm: (term: string) => void;
    searchImagesByTerm: () => Promise<void>;
    clearSearch: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useImageStore = create<ImageState>((set, get) => ({
    images : [],
    currentPage: 1,
    status : 'idle' as const,
    error : null,
    selectedImage : null,
    isModalOpen : false,

    mode : 'browse' as const,
    searchTerm : '',
    searchImages : [],
    searchCurrentPage : 1,

    fetchImages: async () => {
    const { currentPage } = get();
    
    set({ status: 'loading', error: null });
    try {
      const newImages = await apiFetchImages(currentPage); 
      set((state) => ({
        images: currentPage === 1 ? newImages : [...state.images, ...newImages],
        status: 'success',
        currentPage: state.currentPage + 1, 
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An Unknown Error Occurred';
      set({ status: 'error', error: errorMessage });
    }
  },

    selectImage: (image : UnsplashImage) => {
        set({selectedImage : image, isModalOpen : true});
    },

    closeModal: () => {
        set({selectedImage : null, isModalOpen : false});
    },

    setSearchTerm: (term : string) => {
        set({ searchTerm: term, mode: term ? 'search' : 'browse', searchCurrentPage: 1 });
    },

    searchImagesByTerm: async () => {
        const { searchTerm, searchCurrentPage } = get();
        if (!searchTerm) return;

        if (searchCurrentPage === 1) {
            set({ status: 'loading', error: null });
        }

            set({ status: 'loading', error: null });
            try {
            const newImages = await apiSearchImages(searchTerm, searchCurrentPage);
            set((state) => ({
                searchImages: searchCurrentPage === 1 ? newImages : [...state.searchImages, ...newImages],
                status: 'success',
                searchCurrentPage: state.searchCurrentPage + 1,
            }));
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'An Unknown Error Occurred';
                set({status : 'error', error : errorMessage})
            }
  },

  clearSearch: () => {
    set({
        searchTerm: '',
        searchImages: [],
        searchCurrentPage: 1,
        mode: 'browse',
        status: 'idle',
    })
  }
}))