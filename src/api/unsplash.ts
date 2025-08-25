import axios from "axios";
import type { UnsplashImage } from "../types/api";

const api = axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
    }
});

export const fetchImages = async (page: number): Promise<UnsplashImage[]> => {
  const response = await api.get<UnsplashImage[]>('/photos', {
    params: { page, per_page: 12 }
  });
  return response.data;
}

export const searchImages = async (term: string, page: number): Promise<UnsplashImage[]> => {
  const response = await api.get<{ results: UnsplashImage[] }>('/search/photos', {
    params: { query: term, page, per_page: 12 }
  });
  return response.data.results;
}
