import { create } from "zustand";
import { fetchImages as apiFetchImages } from "../api/unsplash";
import type { UnsplashImage } from "../types/api";

interface ImageState {
    images: UnsplashImage[];
    currentPage: number;
    status: 'idle' | 'loading' | 'error' | 'success';
    error: string | null;
    selectedImage: UnsplashImage | null;
    isModalOpen: boolean;
    fetchImages: (page: number) => Promise<void>;
    selectImage: (image: UnsplashImage) => void;
    closeModal: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useImageStore = create<ImageState>((set, get) => ({
    images : [],
    currentPage: 1,
    status : 'idle',
    error : null,
    selectedImage : null,
    isModalOpen : false,

    fetchImages: async (page : number) =>{
        set({status : 'loading', error : null});
        try {
            const newImages = await apiFetchImages(page);
            set((state)=> ({
                images : page === 1 ? newImages : [...state.images, ...newImages],
                status : 'success',
                currentPage : page
            }))
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An Unknown Error Occurred';
            set({status : 'error', error : errorMessage})
        }
    },

    selectImage: (image : UnsplashImage) => {
        set({selectedImage : image, isModalOpen : true});
    },

    closeModal: () => {
        set({selectedImage : null, isModalOpen : false});
    }
}))