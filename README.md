# Scrollscape - Infinite Image Gallery 🖼️✨

**Scrollscape** is a modern image gallery application designed to deliver a seamless and immersive infinite scrolling experience. Built with a hacker-inspired aesthetic and glassmorphism interface, this project serves not only as a functional gallery but as a demonstration of modern front-end implementation concepts, efficient state management, and aggressive performance optimization.

[![Deploy with Vercel](https://vercel.com/button)](https://scrollscape-mitahudev.vercel.app/)

**[➡️ Live Demo](https://scrollscape-mitahudev.vercel.app/)**

---

## Core Features

-   🖼️ **Seamless Infinite Scroll**: Automatically loads new images as users scroll, utilizing the **Intersection Observer API** for maximum efficiency
-   🔍 **Smart Search**: Real-time search functionality with debouncing implementation to prevent excessive API calls
-   ❤️ **Favorites System**: Save preferred images with persistent data storage via `localStorage`
-   🖱️ **Interactive Detail View**: Elegant modal pop-up for detailed image viewing with animations and photographer information
-   🎨 **Thematic & Responsive UI**: Glassmorphism interface with hacker theme, fully responsive across all device sizes
-   🚀 **High Performance**: Aggressively optimized for superior Lighthouse scores, focusing on **Core Web Vitals (LCP, FCP)**

---

## Technology Stack

This project leverages modern technologies focused on performance and developer experience.

| Category               | Technologies                                                                                             |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| **Core Framework**     | React 18, TypeScript, Vite                                                                               |
| **State Management**   | Zustand (minimalist and efficient global state management)                                               |
| **Styling & Animation**| Tailwind CSS, Framer Motion, Lucide Icons                                                                |
| **Data Fetching**      | Axios, Unsplash API                                                                                      |
| **Code Quality**       | ESLint, Prettier                                                                                         |
| **Testing**            | Vitest, React Testing Library *(basic configuration provided)*                                           |

---

## Implementation Details

### Core Concepts
This project implements several important concepts in modern front-end development:

#### 1. Centralized State Management
- Utilizes **Zustand** for all global state management (image data, loading status, application mode, etc.)
- Chosen for minimal boilerplate compared to Redux while providing powerful state management via hooks

#### 2. Custom Hooks for Reusable Logic
- **`useInfiniteScroll`**: Abstracts **Intersection Observer API** logic into a clean custom hook
- **`useDebounce`**: Prevents API calls on every keystroke in `SearchBar`, improving efficiency

#### 3. Modular Component Architecture
- Components divided by functionality (`ImageCard`, `ImageGrid`, `SearchBar`, `ImageModal`)
- Ensures clean, maintainable, and reusable code structure

---

## Performance & SEO Optimization

Performance is not an added feature but a core principle of this project.

#### Performance Optimizations
- ✅ **Modern Image Formats**: Requests images in **WebP** format from API (30-50% smaller than JPEG)
- ✅ **Loading Prioritization**: Above-the-fold images load aggressively (`loading="eager"`, `fetchpriority="high"`)
- ✅ **Lazy Loading**: Below-the-fold images deferred (`loading="lazy"`)
- ✅ **Code Splitting**: Heavy components like `ImageModal` loaded dynamically via `React.lazy()` and `Suspense`
- ✅ **Tree-Shaking for Animations**: Uses `LazyMotion` from Framer Motion to include only necessary animation code
- ✅ **Preconnect to Critical Domains**: Uses `<link rel="preconnect">` for faster connections to image CDN
- ✅ **Self-Hosted Fonts**: Local font hosting eliminates external network requests that block rendering

#### SEO Enhancements
- ✅ **Meta Tags**: Relevant `meta description` for improved search result appearance
- ✅ **`robots.txt`**: Valid `robots.txt` file to guide search engine crawlers

---

## Local Development

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rsydfhmy03/scrollscape.git
    cd scrollscape
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    - Create a `.env` file in the project root
    - Obtain an **Access Key** from [Unsplash Developers](https://unsplash.com/developers)
    - Add the key to the `.env` file:
        ```
        VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
        ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

5.  Open `http://localhost:5173` (or the indicated port) in your browser.

---

*Crafted with ❤️ by [Fahmy Rosyadi - @mitahudev03](https://www.linkedin.com/in/mitahudev03/)*