# HEAVY CRAFT - Website Komunitas Minecraft

Website Landing Page informatif dan modern untuk server Minecraft **HEAVY CRAFT** (Survival, Creative, dan Roleplay). Dikembangkan menggunakan React, Vite, TypeScript, Tailwind CSS v4, dan Framer Motion.

---

## 🚀 Fitur Utama
1. **Sticky Header & Watermark**: Navigasi responsif dan watermark pengembang **RAN DEV** yang tetap melekat di atas saat halaman di-scroll.
2. **Koneksi Sekali Klik**: Modul salin alamat server Java, Bedrock, dan Port secara instan lengkap dengan notifikasi Toast interaktif.
3. **Daftar Rank & Fitur**: Informasi donasi rank non-Pay-To-Win yang transparan dengan integrasi tombol chat langsung ke WhatsApp Admin.
4. **Peraturan Komunitas**: Tampilan kartu aturan server yang tegas demi kenyamanan bersama.
5. **Portfolio Showcase**: Menampilkan karya website komunitas Minecraft lainnya dari **RAN DEV** untuk mempromosikan layanan pembuatan web.

---

## 🛠️ Cara Menjalankan Project Secara Lokal

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

### Langkah-Langkah
1. **Clone atau Unduh Project**
2. **Instal Dependensi**
   Jalankan perintah berikut di terminal:
   ```bash
   npm install
   ```
3. **Jalankan Dev Server**
   ```bash
   npm run dev
   ```
   Buka browser dan akses halaman di `http://localhost:3000`.

4. **Build untuk Produksi**
   ```bash
   npm run build
   ```

---

## 🎨 Panduan Kustomisasi & Modifikasi

### 1. Mengganti Gambar & Logo
Semua aset gambar disimpan langsung di dalam folder source (`src/assets/images/`):
- **Logo Server**: Ganti file gambar logo Anda di `/src/assets/images/logo_1783246804754.jpg`.
- **Background Hero**: Ganti gambar background di `/src/assets/images/hero_bg_1783246817884.jpg`.

*Catatan: Anda tidak perlu membuat folder `public` tambahan karena semua aset dipanggil langsung menggunakan impor standar Vite di dalam file konfigurasi.*

### 2. Mengubah Data Informasi Server (Konfigurasi Terpusat)
Semua teks statis, IP, nomor WhatsApp, dan data portfolio diatur terpusat di dalam file `/src/config/site.ts`. Anda hanya perlu mengubah nilai di file tersebut untuk memperbarui konten website secara otomatis:

```typescript
// /src/config/site.ts
export const siteConfig = {
  name: "HEAVY CRAFT",
  domain: "heavycraft.my.id",
  server: {
    javaIp: "play.heavycraft.my.id:25565",
    bedrockIp: "play.heavycraft.my.id",
    port: 19127,
    // ...
  },
  contacts: {
    adminWhatsapp: "085768060891"
  },
  developer: {
    name: "RAN DEV",
    whatsapp: "0895602592430"
  }
}
```

### 3. Modifikasi Warna & Tema
Website ini menggunakan **Tailwind CSS v4**. Pengaturan font dan variabel tema utama dapat ditemukan di `/src/index.css`:
```css
@theme {
  --font-sans: "Inter", sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```
Anda bisa dengan mudah mengubah warna background, efek glow, dan gradien di dalam kelas utilitas Tailwind masing-masing komponen.

---

## 🌐 Panduan Deploy Instan

### Deploy ke Vercel (Rekomendasi)
1. Buat akun gratis di [Vercel](https://vercel.com).
2. Instal Vercel CLI (`npm i -g vercel`) atau hubungkan repositori GitHub Anda ke dashboard Vercel.
3. Impor project ini, pilih framework **Vite**, dan klik **Deploy**.

### Deploy ke GitHub Pages
1. Ubah konfigurasi `base` di `vite.config.ts` jika nama repositori Anda bukan root (misalnya: `base: '/nama-repo/'`).
2. Jalankan perintah `npm run build`.
3. Unggah isi folder `dist` yang dihasilkan ke cabang `gh-pages` repositori GitHub Anda.

---

## 📄 Lisensi & Kredit
- Dikembangkan secara profesional oleh **RAN DEV** (WhatsApp: 0895602592430).
- Desain dan kode dilisensikan di bawah lisensi MIT.
