# Scrollscape - Infinite Image Gallery 🖼️✨

**Scrollscape** adalah sebuah aplikasi galeri gambar modern yang dirancang untuk memberikan pengalaman *infinite scroll* yang mulus dan imersif. Dibangun dengan estetika *hacker-inspired* dan antarmuka *glassmorphism*, proyek ini bukan hanya sekadar galeri, melainkan sebuah demonstrasi implementasi konsep front-end modern, manajemen state yang efisien, dan optimasi performa yang agresif.

[![Deploy with Vercel](https://vercel.com/button)](https://scrollscape-mitahudev.vercel.app/)

**[➡️ Lihat Live Demo](https://scrollscape-mitahudev.vercel.app/)**

<br/>


---

## ## Fitur Utama

-   🖼️ **Infinite Scroll Mulus**: Galeri secara otomatis memuat gambar baru saat pengguna menggulir ke bawah, menggunakan **Intersection Observer API** untuk efisiensi maksimal.
-   🔍 **Pencarian Cerdas**: Fitur pencarian *real-time* dengan implementasi *debouncing* untuk mencegah panggilan API yang berlebihan dan menjaga performa.
-   ❤️ **Sistem Favorit**: Pengguna dapat menyimpan gambar favorit yang datanya akan tersimpan secara persisten di `localStorage` browser.
-   🖱️ **Tampilan Detail Interaktif**: Modal *pop-up* yang indah untuk melihat detail gambar, lengkap dengan animasi dan informasi fotografer.
-   🎨 **UI Tematik & Responsif**: Antarmuka *glassmorphism* dengan tema *hacker* yang responsif di semua ukuran layar, dari desktop hingga mobile.
-   🚀 **Performa Tinggi**: Dioptimalkan secara agresif untuk mendapatkan skor Lighthouse yang tinggi, dengan fokus pada metrik **Core Web Vitals (LCP, FCP)**.

---

## ## Tech Stack & Tools

Proyek ini dibangun menggunakan ekosistem teknologi modern yang berfokus pada performa dan *developer experience*.

| Kategori              | Teknologi                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| **Core** | React 18, TypeScript, Vite                                                                             |
| **State Management** | Zustand (untuk state global yang minimalis dan efisien)                                                |
| **Styling & Animasi** | Tailwind CSS (Utility-First), Framer Motion (Animasi), Lucide Icons                                      |
| **Data Fetching** | Axios (HTTP Client), Unsplash API                                                                        |
| **Linting & Format** | ESLint, Prettier                                                                                       |
| **Testing** | Vitest, React Testing Library *(konfigurasi dasar disiapkan)* |

---

## ## Konsep Inti & Detail Implementasi

Proyek ini menerapkan beberapa konsep penting dalam pengembangan front-end modern:

### ### 1. Manajemen State Terpusat
-   Menggunakan **Zustand** untuk mengelola semua state global (data gambar, status loading, mode aplikasi, dll.). Pendekatan ini dipilih karena *boilerplate*-nya yang minimal dibandingkan Redux, namun tetap menyediakan *powerfull state management* dengan *hooks*.

### ### 2. Custom Hooks untuk Logika Reusable
-   **`useInfiniteScroll`**: Mengabstraksi logika **Intersection Observer API** ke dalam sebuah *custom hook* yang bersih, membuat komponen `HomePage` tetap fokus pada tampilan.
-   **`useDebounce`**: Mencegah panggilan API pada setiap ketikan di `SearchBar`, meningkatkan efisiensi dan mengurangi beban pada API.

### ### 3. Arsitektur Komponen yang Modular
-   Komponen dipecah berdasarkan fungsionalitasnya (`ImageCard`, `ImageGrid`, `SearchBar`, `ImageModal`) untuk memastikan kode yang bersih, mudah dikelola, dan dapat digunakan kembali.

---

## ## Optimasi Performa & SEO

Performa bukan sebuah fitur tambahan, melainkan inti dari proyek ini. Berikut adalah langkah-langkah optimasi yang telah diterapkan untuk mencapai skor Lighthouse yang tinggi:

#### Performa
-   ✅ **Format Gambar Modern**: Meminta gambar dalam format **WebP** dari API untuk mengurangi ukuran file hingga 30-50% dibandingkan JPEG.
-   ✅ **Prioritas Pemuatan Gambar**: Gambar di atas layar (*above the fold*) dimuat secara agresif (`loading="eager"`, `fetchpriority="high"`) sementara gambar di bawahnya ditunda (`loading="lazy"`).
-   ✅ **Code Splitting**: Komponen berat seperti `ImageModal` dimuat secara dinamis menggunakan `React.lazy()` dan `Suspense`, mengurangi ukuran *bundle* JavaScript awal.
-   ✅ **Tree-Shaking untuk Animasi**: Menggunakan `LazyMotion` dari Framer Motion untuk memastikan hanya kode animasi yang diperlukan yang masuk ke dalam *bundle* produksi.
-   ✅ **Preconnect ke Domain Kritis**: Menggunakan `<link rel="preconnect">` untuk mempercepat koneksi awal ke CDN gambar (`images.unsplash.com`), mengurangi waktu LCP.
-   ✅ **Self-Hosted Fonts**: Meng-hosting file font secara lokal untuk menghilangkan permintaan jaringan eksternal yang memblokir render.

#### SEO
-   ✅ **Meta Tags**: Menambahkan `meta description` yang relevan untuk meningkatkan tampilan di hasil pencarian.
-   ✅ **`robots.txt`**: Menyediakan file `robots.txt` yang valid untuk memandu *crawler* mesin pencari.

---

## ## Menjalankan Proyek Secara Lokal

Untuk menjalankan proyek ini di lingkungan lokal, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/rsydfhmy03/scrollscape.git](https://github.com/rsydfhmy03/scrollscape.git)
    cd scrollscape
    ```

2.  **Install dependensi:**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**
    -   Buat file `.env` di direktori utama proyek.
    -   Dapatkan **Access Key** dari [Unsplash Developers](https://unsplash.com/developers).
    -   Tambahkan key tersebut ke file `.env`:
        ```
        VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
        ```

4.  **Jalankan development server:**
    ```bash
    npm run dev
    ```

5.  Buka `http://localhost:5173` (atau port yang tertera) di browser Anda.

<br/>

---
*Dibuat dengan ❤️ oleh [Fahmy Rosyadi - @mitahudev03](https://www.linkedin.com/in/mitahudev03/)*