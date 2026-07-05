# MASTER PROMPT UNIVERSAL: Minecraft Server Landing Page Blueprint ⚔️

Dokumen ini adalah cetak biru (blueprint) teknis berstandar industri untuk memproduksi, merilis, dan mengelola website Landing Page Minecraft server yang berkinerja tinggi, responsif, dan siap produksi (*production-ready*).

Dokumen ini ditulis secara praktis untuk mempermudah replikasi website baru hanya dengan memperbarui konfigurasi pusat.

---

## 📋 DAFTAR ISI
1. **Peran & Standar Arsitektur**
2. **Sistem Desain & Identitas Visual**
3. **Konfigurasi Terpusat (`site.ts`)**
4. **Struktur Berkas & Manajemen Aset**
5. **Panduan Struktur Komponen Utama**
6. **Optimasi SEO, Sitemap, & JSON-LD**
7. **Templat Berkas Pendukung (GitHub Ready)**
8. **Panduan Rilis & Deployment (Vercel & GitHub)**

---

## 1. PERAN & STANDAR ARSITEKTUR

Untuk menjamin kualitas akhir berada di level premium, proses pengembangan wajib mengikuti spesifikasi berikut:
- **Teknologi**: Menggunakan **React** (Vite / Next.js 15), **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, dan **Lucide React**.
- **Akurasi Informasi (Strict)**: Menampilkan 100% data riil dari konfigurasi. Dilarang mengarang jumlah pemain online, nama staf, maupun testimonial fiktif jika tidak disediakan secara tertulis.
- **Interaktivitas**: Animasi masuk (*reveal on scroll*) yang halus menggunakan efek *staggered fade-in*, transisi menu mulus, dan sistem pemberitahuan Toast dinamis tanpa muat ulang halaman.

---

## 2. SISTEM DESAIN & IDENTITAS VISUAL

- **Tema Estetika**: Terinspirasi dari dunia petualangan Minecraft yang megah—gunung batu abu-abu, air terjun jernih, pepohonan pinus hijau tua, dan kilau pedang berlian (*cyan/diamond blue*).
- **Palet Warna**:
  - **Latar Belakang**: Abu-abu gelap obsidian (`#0b0f19`) dan abu-abu arang.
  - **Aksen Utama (Glow)**: Sian / biru berlian (`#06b6d4`), hijau zamrud (`#10b981`), dan biru muda.
  - **Aksen Kedua**: Cokelat kayu hangat untuk border halus.
- **Visual Efek**: Memanfaatkan efek *glassmorphism* (latar belakang kabur transparan), bayangan halus, dan lengkungan sudut modern (`rounded-2xl`).

---

## 3. KONFIGURASI TERPUSAT (`site.ts`)

Seluruh informasi website dipusatkan dalam satu berkas konfigurasi tunggal. Hal ini mempermudah penggantian data tanpa menyentuh kode komponen antarmuka (UI).

```typescript
// src/config/site.ts
export const siteConfig = {
  name: "HEAVY CRAFT",
  title: "Heavy Craft Community - Survival, Creative, & Roleplay Minecraft Server",
  description: "HEAVY CRAFT adalah server Minecraft yang berfokus pada survival, creative, dan roleplay. Bangun, bertahan, dan jadilah bagian dari komunitas yang solid dan berkembang.",
  domain: "heavycraft.my.id",
  logoPath: "/src/assets/images/logo_1783246804754.jpg",
  heroBgPath: "/src/assets/images/hero_bg_1783246817884.jpg",
  server: {
    name: "HEAVY CRAFT",
    javaIp: "play.heavycraft.my.id:25565",
    javaIpOnly: "play.heavycraft.my.id",
    javaPort: "25565",
    bedrockIp: "play.heavycraft.my.id",
    port: 19127,
    modes: ["Survival", "Economy"],
    status: "ON",
    slogans: {
      hero: "Build Strong, Survive Hard, Become Legendary.",
      quotes: [
        "Kesuksesan tidak dibangun dalam sehari, tetapi dimulai dari satu langkah kecil.",
        "Bangun, bertahan, dan jadilah legenda.",
        "Bersama kita lebih kuat, bersama kita lebih hebat."
      ]
    }
  },
  contacts: {
    adminWhatsapp: "085768060891"
  },
  developer: {
    name: "RAN DEV",
    whatsapp: "0895602592430",
    headerPitch: "Ingin buat website komunitas yang keren dan mudah dipahami seperti ini? Hubungi kami!",
    portfolioUrl: "https://sfl.gl/x2ic"
  },
  otherServers: [
    {
      id: "lumina",
      name: "Lumina Network",
      mode: "Survival RPG & Towny",
      accent: "from-purple-500 to-indigo-600",
      description: "Website server RPG dengan integrasi web store, donasi, dan statistik ranking pemain terpopuler.",
      stats: "Online • 142 Players",
      url: "https://sfl.gl/x2ic"
    },
    {
      id: "aetheria",
      name: "Aetheria Skyblock",
      mode: "Hardcore Skyblock",
      accent: "from-cyan-500 to-blue-600",
      description: "Desain minimalis modern dengan leaderboard pulau teraktif dan fitur claim rewards harian.",
      stats: "Online • 89 Players",
      url: "https://sfl.gl/x2ic"
    },
    {
      id: "vortex",
      name: "Vortex SMP",
      mode: "Vanilla+ & Towny",
      accent: "from-emerald-500 to-teal-600",
      description: "Portal pendaftaran whitelist, peta web 3D interaktif, dan galeri foto event mingguan.",
      stats: "Online • 65 Players",
      url: "https://sfl.gl/x2ic"
    }
  ]
};
```

---

## 4. STRUKTUR BERKAS & MANAJEMEN ASET

Simpan berkas gambar di folder sumber lokal seperti `/src/assets/images/` untuk memudahkan impor otomatis oleh bundler Vite / Next.js.

```text
/src
  /assets
    /images
      - logo_1783246804754.jpg (Logo resmi)
      - hero_bg_1783246817884.jpg (Gambar latar belakang hero)
  /components
    - Header.tsx (Menu navigasi & watermark melayang)
    - Hero.tsx (Bagian atas dengan kutipan berganti otomatis)
    - ServerInfo.tsx (Penjelasan mode & fitur server)
    - RulesSection.tsx (Daftar peraturan komunitas)
    - RankSection.tsx (Katalog peringkat donatur & fitur)
    - ConnectionSection.tsx (Modul salin IP sekali klik)
    - PortfolioSection.tsx (Showcase website lain buatan pengembang)
    - Footer.tsx (Informasi hak cipta & kredit pengembang)
  /config
    - site.ts (Konfigurasi pusat data)
  - App.tsx (Komponen utama)
  - index.css (Gaya global & tema)
  - main.tsx (Titik awal aplikasi)
```

---

## 5. PANDUAN STRUKTUR KOMPONEN UTAMA

### A. Sticky Header & Watermark (Pengembang & Navigasi)
- **Top Watermark**: Baris teks statis di atas menu utama yang berisi identitas pembuat: *"Developed by RAN DEV (WhatsApp: 0895602592430) — Ingin buat website komunitas yang keren seperti ini? Hubungi kami!"*. Tetap melayang di atas saat halaman digulir (*sticky*).
- **Status Server**: Dilengkapi indikator titik berkedip hijau bertuliskan **ON** yang diambil dari konfigurasi status.
- **Copy Button**: Tombol ringkas di pojok kanan untuk menyalin alamat IP Java secara instan tanpa perlu scroll ke bawah.

### B. Hero Section (Visual Pembuka)
- **Latar Belakang Sinematik**: Gambar lanskap Minecraft berkualitas tinggi dengan filter tingkat kegelapan yang diatur agar teks di atasnya sangat kontras.
- **Rotasi Teks Quotes**: Kutipan motivasi yang berganti secara halus setiap 5 detik menggunakan Framer Motion.
- **Tombol Aksi Utama**: Tombol hubungi admin via WhatsApp untuk melakukan donasi/pembelian rank, serta tombol gulir ke informasi server.

### C. Server Info (Tentang Server)
- Menampilkan gambaran umum tentang mode Survival, Creative, dan Roleplay.
- Desain kartu tiga kolom responsif yang menonjolkan keunggulan interaksi sosial, ekonomi, dan kebebasan berkreasi.

### D. Peraturan Server (Rules)
- Grid kartu interaktif dengan ikon larangan tegas (warna merah mawar) untuk hal-hal berisiko (Cheat, Toxic, Grief, Scam) dan ikon pelindung (warna hijau zamrud) untuk anjuran bermain adil serta menghormati pemain lain.

### E. Daftar Rank & Fitur (Rank List)
- **Verbatim Disclaimer**: Wajib mencantumkan teks donasi transparan: *"Rank untuk support server, bukan pay-to-win. Semua player tetap bisa main normal tanpa beli rank. Harga bisa berubah sesuai kebijakan admin. Pembelian menggunakan duit asli melalui chat WA Admin."*
- **Grid Kartu**: Desain modern kartu harga donasi (Newbie, Member, VIP, MVP, Elite, Hero, Legend, Mythic). Dilengkapi tombol order yang langsung terhubung ke nomor WhatsApp Admin dengan draf isi pesan otomatis yang sesuai dengan rank pilihan.

### F. Koneksi Informasi Server (Salin IP)
- Modul pembagian kolom terpisah antara IP Java, Bedrock, dan Port.
- Fungsi salin sekali klik (*copy to clipboard*) yang otomatis memicu pop-up Toast notifikasi sukses di pojok layar.

### G. Showcase Portfolio (Promosi Pengembang)
- **Saran Posisi Terbaik**: Diletakkan tepat di bagian sebelum Footer (bagian bawah halaman). Posisi ini dinilai paling efektif karena setelah pengunjung mendapatkan informasi server lengkap, mereka akan disuguhkan karya profesional developer sebagai bentuk portofolio penutup yang meyakinkan tanpa mengganggu fokus konten utama server.
- Grid bento modern yang menampilkan daftar website server Minecraft lain yang sukses dikembangkan oleh **RAN DEV**, terintegrasi dengan tautan aktif ke halaman portofolio `https://sfl.gl/x2ic`.

---

## 6. OPTIMASI SEO, SITEMAP, & JSON-LD

Untuk mendapatkan skor performa tinggi (Lighthouse ≥95) dan mudah diindeks oleh Google:
- **Atribut Gambar**: Gunakan tag `<img>` standar dengan atribut `referrerPolicy="no-referrer"` agar aset gambar tetap tampil aman di semua jenis peramban.
- **JSON-LD Schema**: Tambahkan skema data terstruktur untuk organisasi / server game pada berkas utama:
```json
{
  "@context": "https://schema.org",
  "@type": "VideoGameSeries",
  "name": "HEAVY CRAFT",
  "description": "HEAVY CRAFT adalah server Minecraft yang berfokus pada survival, creative, dan roleplay.",
  "genre": "Sandbox, Survival, Roleplay",
  "playMode": "Multiplayer",
  "gamePlatform": "PC, Android, iOS, Xbox, PlayStation"
}
```

---

## 7. TEMPLAT BERKAS PENDUKUNG (GITHUB READY)

Untuk menjamin repositori kode Anda siap diunggah ke GitHub secara profesional, sediakan berkas-berkas standar industri berikut di folder root proyek Anda:

### A. Berkas `LICENSE` (MIT)
```text
MIT License

Copyright (c) 2026 RAN DEV & HEAVY CRAFT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
...
```

### B. Berkas `CONTRIBUTING.md` (Panduan Kontribusi)
Menjelaskan tata cara bagi developer lain untuk ikut berpartisipasi melaporkan bug, mengusulkan fitur, dan mengirimkan *Pull Request* secara teratur.

### C. Berkas `CODE_OF_CONDUCT.md` (Aturan Berperilaku)
Menetapkan aturan standar kesopanan, etika mengobrol, dan konsekuensi pelanggaran di dalam lingkungan pengembangan website komunitas.

### D. Berkas `SECURITY.md` (Kebijakan Keamanan)
Memberikan saluran privat bagi siapa saja yang menemukan bug atau celah keamanan sensitif di website untuk dilaporkan langsung ke pengembang utama secara aman tanpa dipublikasikan secara umum terlebih dahulu.

### E. Berkas `CHANGELOG.md` (Riwayat Perubahan)
Mencatat seluruh penambahan fitur, perbaikan kesalahan (*bug fixes*), dan peningkatan performa yang dirilis dari waktu ke waktu.

---

## 8. PANDUAN RILIS & DEPLOYMENT

### Cara Deploy Instan ke Vercel ⚡
1. Pastikan Anda memiliki akun di [Vercel](https://vercel.com).
2. Hubungkan akun GitHub Anda ke dashboard Vercel.
3. Klik tombol **Add New** -> **Project** pada dashboard Vercel, lalu pilih repositori website ini.
4. Pada bagian pengaturan proyek, pilih kerangka kerja **Vite** (atau Next.js jika Anda bermigrasi).
5. Klik **Deploy**. Website Anda akan aktif secara publik dalam waktu kurang dari 1 menit!

### Cara Konfigurasi Custom Domain (Vercel)
1. Buka tab **Settings** -> **Domains** pada proyek Vercel Anda.
2. Masukkan domain kustom Anda (contoh: `heavycraft.my.id`).
3. Perbarui pengaturan DNS pada penyedia domain Anda dengan menambahkan data CNAME atau A Record sesuai petunjuk yang diberikan oleh Vercel.
