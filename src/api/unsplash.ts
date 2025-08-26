import axios from "axios";
import type { UnsplashImage } from "../types/api";

const api = axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
    }
});

const addImageOptimizationParams = (params: object) => {
  return {
    ...params,
    fm: 'webp', // Minta format WebP
    q: 75,      // Minta kualitas 75 (keseimbangan bagus antara ukuran dan kualitas)
  };
};

export const apiFetchImages = async (page: number): Promise<UnsplashImage[]> => {
  const response = await api.get('/photos', {
    params: addImageOptimizationParams({
      page: page,
      per_page: 12,
    }),
  });
  return response.data;
};

export const apiSearchImages = async (query: string, page: number): Promise<UnsplashImage[]> => {
  const response = await api.get('/search/photos', {
    params: addImageOptimizationParams({
      query: query,
      page: page,
      per_page: 12,
    }),
  });
  return response.data.results;
};
