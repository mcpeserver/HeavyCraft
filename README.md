# ⚔️ HEAVY CRAFT - Official Community Landing Page ⚔️

Selamat datang di repositori resmi **HEAVY CRAFT**, sebuah Landing Page satu halaman (Single-Page Informative Landing Page) premium yang dirancang khusus untuk mempromosikan server Minecraft Anda secara elegan, cepat, dan responsif.

Landing Page ini dikembangkan secara profesional menggunakan **React**, **Vite**, **TypeScript**, **Tailwind CSS v4**, dan **Framer Motion** untuk memastikan pengalaman pengguna yang halus, animasi yang memikat, serta pengoptimalan SEO tingkat tinggi untuk meroketkan visibilitas di Google Search.

---

## 🚀 Fitur Utama

-   **Watermark Developer Terintegrasi**: Banner elegan RAN DEV di bagian paling atas halaman navbar dan footer untuk kepatuhan brand.
-   **Rotasi Slogan Dinamis**: Animasi pergantian kata kutipan motivasi server yang berganti halus secara otomatis.
-   **Grid Peraturan Server Interaktif**: Visualisasi kartu larangan (Cheat, Toxic, Grief, dll.) dengan ikon peringatan modern.
-   **Visualisasi Daftar Rank (Pricing Cards)**: Desain pricing card premium mulai dari Newbie, Member, VIP, hingga Mythic dengan warna badge Minecraft yang khas.
-   **Satu-Klik Salin Detail IP Server**: Salin IP Server Java, Bedrock, dan nomor Port secara langsung dengan notifikasi Toast interaktif.
-   **Floating Back to Top**: Tombol kembali ke atas otomatis dengan deteksi scroll viewport.
-   **Indikator Progress Membaca**: Progress bar linear tipis di bagian atas layar sesuai jarak scroll user.
-   **Sangat Responsif & Aksesibel**: Dioptimalkan untuk semua ukuran layar (Desktop, Smartphone, Tablet, hingga smartphone lipat).
-   **PWA & SEO Ready**: Lengkap dengan metadata Open Graph, Twitter Cards, robots.txt, sitemap.xml, manifest.webmanifest, dan struktur Schema.org JSON-LD.

---

## 📁 Struktur Folder Proyek

```bash
├── public/                    # Folder Aset Statis Publik (Akses Absolut)
│   ├── logo.png               # Logo utama server (Minecraft Stone/Diamond sword style)
│   ├── hero-bg.webp           # Background hero cinematic pegunungan tinggi
│   ├── robots.txt             # Izin crawler mesin pencari
│   ├── sitemap.xml            # Sitemap pencarian search engine
│   └── manifest.webmanifest   # Konfigurasi Progressive Web App (PWA)
├── src/
│   ├── components/            # Komponen Modular Reusable
│   │   ├── Header.tsx         # Navbar dengan Watermark & Copy IP Cepat
│   │   ├── Hero.tsx           # Tampilan depan, logo besar, slogan & CTA
│   │   ├── ServerInfo.tsx     # Informasi Mode (Survival, Creative, Roleplay)
│   │   ├── RulesSection.tsx   # Daftar 6 peraturan utama berserta icon
│   │   ├── RankSection.tsx    # Pricing rank cards terintegrasi pesanan WA Admin
│   │   ├── ConnectionSection.tsx # Detail koneksi satu klik salin IP Java/Bedrock
│   │   └── Footer.tsx         # Hak cipta dan watermark pengembang
│   ├── config/
│   │   └── site.ts            # SINGLE-SOURCE OF TRUTH: Seluruh Teks Statis & IP Server
│   ├── App.tsx                # Layout root & manajemen state toast
│   ├── main.tsx               # Entry point React
│   └── index.css              # Font import & variabel tema Tailwind v4
├── index.html                 # Entry point HTML utama & Meta SEO
├── package.json               # Dependensi & skrip build
└── tsconfig.json              # Konfigurasi TypeScript compiler
```

---

## 🛠️ Instalasi & Pengembangan Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan website ini di lingkungan lokal Anda:

### 1. Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (Versi 18 atau lebih baru recommended).

### 2. Kloning Repositori & Instal Dependensi
```bash
# Instal seluruh paket yang dibutuhkan dari package.json
npm install
```

### 3. Menjalankan Mode Pengembangan
```bash
# Menjalankan dev server pada port 3000
npm run dev
```
Buka peramban (browser) Anda dan akses `http://localhost:3000`.

### 4. Melakukan Kompilasi untuk Produksi
```bash
# Membangun file statis produksi di dalam folder dist/
npm run build
```

---

## 🎨 Panduan Kustomisasi & Modifikasi

### 1. Mengubah Seluruh Teks, IP, dan WhatsApp (Satu File Saja)
Anda **tidak perlu** mencari-cari teks di dalam komponen UI. Cukup buka file:
👉 `src/config/site.ts`

Di sana terdapat konfigurasi terpusat:
```typescript
export const siteConfig = {
  name: "HEAVY CRAFT",
  title: "Heavy Craft Community - Survival, Creative, & Roleplay Minecraft Server",
  domain: "heavycraft.my.id",
  server: {
    javaIp: "play.heavycraft.my.id:25565",
    bedrockIp: "play.heavycraft.my.id",
    port: 19127,
    // ...
  },
  contacts: {
    adminWhatsapp: "085768060891" // Nomor WhatsApp Admin utama penerima pesanan rank
  }
}
```

### 2. Mengganti Gambar Logo & Background Hero
Semua aset berada di folder root `/public`:
-   **Logo Resmi**: Cukup ganti file `public/logo.png` dengan logo server baru Anda. Pastikan nama file tetap `logo.png`.
-   **Background Hero**: Ganti file `public/hero-bg.webp` dengan screenshot sinematik shader Minecraft server Anda. Pastikan resolusinya tinggi (seperti 1920x1080) dan formatnya `.webp` atau `.jpg`.

### 3. Mengubah Warna Tema Utama (Tailwind v4 Theme)
Untuk mengubah nuansa warna (misalnya berganti dari tema Cyan ke tema Gold atau Red):
Buka file `src/index.css` dan ubah variabel `@theme` di bagian atas:
```css
@theme {
  --font-sans: "Inter", sans-serif;
  
  /* Ganti kode warna hex sesuai keinginan Anda */
  --color-brand-cyan: #06b6d4;   /* Ubah warna aksen Diamond Blue */
  --color-brand-green: #10b981;  /* Ubah warna aksen Emerald */
  --color-brand-blue: #3b82f6;   /* Ubah warna aksen Light Blue */
  
  --color-obsidian: #0b0f19;     /* Warna background ultra-dark */
  --color-charcoal: #121824;     /* Warna background card */
}
```

---

## 🌐 Panduan Deploy Instan ke Vercel / GitHub

### Metode 1: Menggunakan GitHub Pages
1.  Buat repositori baru di akun GitHub Anda.
2.  Push kode sumber lokal ke repositori GitHub tersebut.
3.  Konfigurasikan GitHub Actions untuk meng-compile build Vite dan otomatis men-deploy-nya ke halaman GitHub Pages Anda.

### Metode 2: Deploy Instan & Gratis ke Vercel (Rekomendasi)
1.  Buka [Vercel](https://vercel.com/) dan masuk menggunakan akun GitHub Anda.
2.  Klik tombol **Add New** ➜ **Project**.
3.  Impor repositori GitHub proyek website ini.
4.  Pada bagian **Framework Preset**, pilih **Vite**.
5.  Klik tombol **Deploy**. Dalam waktu kurang dari 1 menit, Landing Page HEAVY CRAFT Anda sudah aktif dan online dengan sertifikat SSL gratis!

---

## 🛡️ Hak Cipta & Lisensi

-   **HEAVY CRAFT** adalah merek komunitas yang dimiliki oleh pengelola server Heavy Craft.
-   Website ini dikembangkan dan dirancang oleh **RAN DEV (WhatsApp: 0895602592430)**. Kunjungi profil pengembang untuk kolaborasi lebih lanjut!
