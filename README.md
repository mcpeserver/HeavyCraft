# HEAVY CRAFT - Landing Page Komunitas Premium

Website landing page informatif yang solid, modern, dan sangat responsif untuk server Minecraft **HEAVY CRAFT** (Survival, Creative, & Roleplay). Proyek ini dibangun menggunakan **React**, **Vite**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, dan **Lucide Icons** dengan desain visual premium bertema kegunungan batu dan pedang berlian cyan.

---

## Fitur Utama

- ⚡ **Desain Premium Modern**: Kombinasi warna gelap Slate Gray/Obsidian, aksen cahaya Cyan/Diamond Blue, Emerald Green, dan Wood Brown yang hangat dengan efek glassmorphic halus.
- ⚙️ **Konfigurasi Terpusat**: Seluruh data teks, IP server, slogan, kontak WhatsApp, dan daftar server lain dipusatkan pada file `src/config/site.ts`. **Tidak ada hardcode data di dalam komponen UI.**
- 💻 **Sticky Header Ganda**: Banner promosi RAN DEV dan bilah navigasi utama menyatu secara lengket di bagian atas layar saat pengguna melakukan scrolling ke bawah.
- 📋 **Salin IP Sekali Klik**: Panel khusus untuk menyalin IP Java (`play.heavycraft.my.id:25565`), IP Bedrock (`play.heavycraft.my.id`), dan Port (`19127`) secara instan dilengkapi notifikasi Toast interaktif.
- 💎 **Daftar Rank & Fitur Terintegrasi**: Informasi detail rank player (Newbie, Member, VIP, MVP, Elite, Hero, Legend, Mythic) dengan tombol beli yang langsung menautkan chat ke WhatsApp Admin disertai draf teks pembelian otomatis.
- 🚀 **Portofolio & Galeri Server Lain**: Menampilkan galeri server mitra karya RAN DEV yang dilengkapi tombol konsultasi/pemesanan kustom langsung ke WhatsApp pengembang.
- 📈 **Utilitas Navigasi**: Progress indicator scroll horizontal di atas layar dan tombol Back to Top mengambang untuk meningkatkan kenyamanan navigasi.
- 🛡️ **Kelengkapan Repositori**: Dilengkapi berkas lisensi MIT, kebijakan privasi/keamanan, kontribusi, kode etik, riwayat rilis (changelog), dan konfigurasi deploy Vercel siap pakai.

---

## Panduan Instalasi & Pengembangan Lokal

### Prasyarat
Pastikan Anda sudah menginstal **Node.js** (versi 18 ke atas disarankan) di komputer Anda.

### Langkah-Langkah:
1. **Unduh atau Klon Repositori**:
   ```bash
   git clone https://github.com/username/heavycraft-web.git
   cd heavycraft-web
   ```

2. **Instal Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembangan**:
   ```bash
   npm run dev
   ```
   Buka browser dan akses alamat `http://localhost:3000`.

4. **Uji Linter (TypeScript Check)**:
   ```bash
   npm run lint
   ```

5. **Build Aplikasi untuk Produksi**:
   ```bash
   npm run build
   ```
   Hasil kompilasi akan berada di direktori `dist/` dan siap dideploy sebagai file statis.

---

## Panduan Kustomisasi & Modifikasi

### 1. Mengganti Informasi & Data Server
Seluruh data dipusatkan di file `src/config/site.ts`. Anda hanya perlu mengubah nilai di dalam file tersebut untuk mengupdate seluruh tampilan web:
```typescript
// Jalur file: src/config/site.ts
export const siteConfig = {
  name: "NAMA_SERVER_ANDA",
  title: "Title Browser Dan SEO Anda",
  domain: "domainanda.id",
  server: {
    javaIp: "play.domainanda.id:25565",
    bedrockIp: "play.domainanda.id",
    port: 19127,
    // ...
  }
};
```

### 2. Mengubah Warna Tema (Tailwind CSS v4)
Warna utama dikonfigurasi di file `/src/index.css` menggunakan format `@theme` bawaan Tailwind CSS v4. Anda dapat dengan mudah mengganti kode hex warna di sini:
```css
/* Jalur file: src/index.css */
@theme {
  --color-brand-cyan: #00f0ff;       /* Ganti warna Cyan/Diamond Blue */
  --color-brand-emerald: #10b981;    /* Ganti warna Emerald Green */
  --color-brand-wood: #8b5a2b;       /* Ganti warna Wood Brown */
  --color-brand-obsidian: #080d16;   /* Ganti warna Background Gelap */
  --color-brand-charcoal: #121824;   /* Ganti warna Card Slate */
}
```

### 3. Mengganti Gambar (Logo & Background)
Sesuai dengan struktur proyek modular, semua gambar disimpan di dalam folder `src/assets/images/` dan diimpor langsung oleh komponen. Untuk mengganti gambar, Anda cukup menimpa file gambar yang ada atau menaruh file baru di folder tersebut dan memperbarui jalur import di komponen terkait:
- **Logo Server**: Ganti file `src/assets/images/logo_1783279235216.jpg`
- **Background Hero**: Ganti file `src/assets/images/hero_bg_1783279248075.jpg`

---

## Panduan Deploy Instan

### A. Deploy ke GitHub
1. Buat repositori baru di akun GitHub Anda dengan nama `heavycraft-web`.
2. Lakukan inisialisasi Git di folder lokal Anda:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Heavy Craft Landing Page"
   git branch -M main
   git remote add origin https://github.com/USERNAME_GITHUB_ANDA/heavycraft-web.git
   git push -u origin main
   ```

### B. Deploy ke Vercel (Gratis & Sangat Mudah)
1. Buat akun di [Vercel](https://vercel.com/) jika belum punya.
2. Hubungkan akun GitHub Anda ke Vercel.
3. Klik tombol **New Project**, pilih repositori `heavycraft-web`.
4. Vercel akan otomatis mendeteksi proyek ini sebagai aplikasi **Vite**.
5. Biarkan pengaturan default apa adanya, lalu klik tombol **Deploy**.
6. Selesai! Website Anda akan langsung online dengan domain gratis seperti `heavycraft-web.vercel.app` dalam waktu kurang dari 1 menit. Anda juga dapat menghubungkan domain kustom seperti `heavycraft.my.id` melalui menu settings di dashboard Vercel.
