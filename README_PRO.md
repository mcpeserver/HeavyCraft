# HEAVY CRAFT — Professional Community Website

Website portofolio dan pusat informasi resmi untuk komunitas Minecraft **HEAVY CRAFT** (Survival & Economy). Website ini didesain menggunakan paradigma **Mobile-First Design**, pemisahan seksi berbasis state dinamis, serta optimasi caching tingkat lanjut untuk memastikan pengalaman bermain yang lancar (anti-lag), modern, dan intuitif.

---

## 🎨 Keunggulan Desain & Arsitektur

### 1. Desain Responsif & Mobile-First
*   **Tata Letak Proporsional**: Menggunakan sistem grid fleksibel Tailwind CSS yang mendahulukan kenyamanan pengguna layar sentuh HP (touch-friendly targets minimum 44px) kemudian membesar secara elegan pada monitor desktop.
*   **Anti-Overlap Layout**: Penggunaan unit tinggi/lebar dinamis (`min-h`, `max-w`) dikombinasikan dengan manajemen flexbox/grid presisi tinggi guna memastikan teks, tombol, dan gambar tidak saling menabrak pada perangkat apa pun (iPhone, Android, Tablet, Ultra-Wide PC).
*   **Header Sticky Berkinerja Tinggi**: Navigasi utama yang otomatis menempel di atas layar saat digulirkan (`sticky top-0`) dengan perpaduan latar belakang transparan kabur (*backdrop-blur-md*) dan efek bayangan lembut.

### 2. Pemisahan Halaman (State-Based Multi-Page)
Untuk mengatasi kelebihan beban render DOM (penyebab utama lag pada HP spek rendah saat melakukan scrolling panjang), website ini telah direfaktor menjadi arsitektur multi-page berbasis state dinamis:
*   **Beranda**: Fokus utama pada logo visual server, slogan interaktif, quote motivasi dinamis, dan akses cepat WA admin.
*   **Informasi Server**: Detail lengkap konfigurasi IP Server Java/Bedrock beserta tombol interaktif salin IP satu-klik.
*   **Peraturan**: Panduan regulasi resmi permainan demi menjaga ketertiban komunitas.
*   **Daftar Rank**: Tabel donasi donatur server (NEWBIE hingga MYTHIC) beserta rincian fasilitas eksklusifnya.

### 3. Peningkatan Performa Maksimal
*   **Lazy Animation Rendering**: Transisi perpindahan halaman menggunakan library animasi `motion` (`motion/react`) berkinerja tinggi berbasis hardware acceleration.
*   **Vercel Caching Optimization**: Integrasi file konfigurasi `vercel.json` dengan aturan *Cache-Control* statis jangka panjang (`immutable`) untuk aset gambar, file JS, CSS, sitemap, dan robots.txt. Menjamin pemuatan ulang situs hampir instan (0.2 detik).

---

## 📂 Struktur File Khusus

*   `public/sitemap.xml`: Peta situs XML yang memandu indeksasi mesin pencari Google/Bing agar SEO optimal.
*   `public/robots.txt`: Mengatur akses bot penjelajah web ke dalam situs.
*   `vercel.json`: Konfigurasi routing SPA, optimasi tajuk kompresi, dan aturan masa kedaluwarsa cache aset statis.
*   `.github/workflows/validate.yml`: Otomasi integrasi berkelanjutan (CI) untuk memverifikasi linter kode TypeScript dan build production di setiap commit.
*   `LICENSE`: Dokumen lisensi lisensi repositori resmi demi menjaga keaslian kode sumber.

---

## 🛠️ Panduan Pengembangan Lokal

1.  **Instalasi Dependensi**:
    ```bash
    npm install
    ```
2.  **Menjalankan Mode Pengembangan**:
    ```bash
    npm run dev
    ```
3.  **Membuat Build Produksi**:
    ```bash
    npm run build
    ```

---

## 📞 Kontak & Pengembangan Lebih Lanjut
Website ini dikembangkan oleh **RAN DEV** (WhatsApp: `0895602592430`). Jika Anda tertarik memesan website komunitas game, portofolio, atau aplikasi kustom yang serupa, silakan kunjungi RAN DEV Hub atau hubungi melalui tautan WhatsApp yang disediakan di dalam footer situs.
