# Panduan Kontribusi (Contributing Guide)

Terima kasih telah berkontribusi untuk **HEAVY CRAFT**! Kami menyambut baik kontribusi Anda untuk mengembangkan website komunitas ini agar menjadi lebih baik.

## Cara Berkontribusi

1. **Fork Repositori**: Buat salinan repositori ini ke akun GitHub Anda.
2. **Kloning secara Lokal**: Klon repositori Anda ke komputer lokal:
   ```bash
   git clone https://github.com/username/heavycraft-web.git
   ```
3. **Buat Branch Baru**: Gunakan nama branch yang jelas dan relevan:
   ```bash
   git checkout -b fitur/fitur-baru
   ```
4. **Lakukan Perubahan**: Pastikan kode rapi, terstruktur, dan mengikuti standar TypeScript serta Tailwind CSS v4.
5. **Uji Aplikasi**: Jalankan `npm run lint` dan `npm run build` untuk memastikan tidak ada error sebelum submit.
6. **Commit & Push**:
   ```bash
   git commit -m "Tambah fitur: Deskripsi singkat"
   git push origin fitur/fitur-baru
   ```
7. **Buat Pull Request (PR)**: Kirimkan Pull Request ke repositori utama kami untuk ditinjau oleh kontributor inti.

## Aturan Gaya Penulisan Kode
- Gunakan komponen fungsional React (Functional Components) dengan Hooks.
- Pertahankan konfigurasi di `/src/config/site.ts` tanpa melakukan hardcode langsung di komponen UI.
- Gunakan utilitas Tailwind CSS v4 untuk penyesuaian visual.
