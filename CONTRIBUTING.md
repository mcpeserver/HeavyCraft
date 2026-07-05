# Panduan Kontribusi (Contributing Guidelines)

Terima kasih telah tertarik untuk berkontribusi pada pengembangan website server Minecraft ini! Kami sangat menghargai kontribusi dari komunitas untuk menjaga kualitas website tetap optimal, cepat, dan responsif.

---

## 🚀 Cara Berkontribusi

### 1. Melaporkan Bug atau Masalah (Issues)
Jika Anda menemukan error, kendala visual, atau masalah keamanan:
- Buka tab **Issues** di repositori GitHub kami.
- Jelaskan bug secara detail (langkah-langkah reproduksi, ekspektasi hasil, dan screenshot jika ada).

### 2. Mengusulkan Fitur Baru
- Buka tab **Issues** dan pilih kategori *Feature Request*.
- Jelaskan mengapa fitur tersebut berguna untuk server komunitas Heavy Craft.

### 3. Mengirimkan Pull Request (PR)
Jika Anda ingin memperbaiki kode secara langsung:
1. Fork repositori ini ke akun GitHub Anda.
2. Buat branch baru dari branch utama (`main`):
   ```bash
   git checkout -b fitur/nama-fitur-anda
   ```
3. Lakukan perubahan kode. Pastikan Anda mengikuti standar penulisan kode berikut:
   - Gunakan TypeScript dengan tipe data yang ketat (*strict types*).
   - Gunakan kelas utilitas Tailwind CSS v4 secara rapi.
   - Pastikan kode telah lolos linter dengan menjalankan `npm run lint`.
4. Commit perubahan Anda dengan pesan yang jelas dan deskriptif:
   ```bash
   git commit -m "Tambah: Fitur salin port untuk Bedrock Edition"
   ```
5. Push branch Anda ke GitHub:
   ```bash
   git push origin fitur/nama-fitur-anda
   ```
6. Buka halaman repositori asli dan buat **Pull Request** baru.

---

## 🎨 Pedoman Desain & Kode
- **Aesthetic First**: Gunakan warna aksen cyan/emerald dengan latar belakang gelap gelap sesuai identitas visual Heavy Craft.
- **Responsive**: Uji setiap komponen baru pada perangkat seluler dan desktop.
- **Performa**: Optimasi pemuatan aset gambar dengan format `.webp` atau `.jpg` yang terkompresi.

Jika ada pertanyaan lebih lanjut seputar pengembangan, silakan hubungi pengembang utama di WhatsApp **0895602592430 (RAN DEV)**.
