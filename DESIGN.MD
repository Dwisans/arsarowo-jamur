# Design System & UI Guide: Arsarowo Jamur (Clean, Modern & Fresh)

Dokumen ini berisi panduan teknis desain antarmuka (UI) untuk *landing page* Arsarowo Jamur. Fokus utama desain ini adalah **Clean, Modern, dan Segar (Fresh)** dengan tingkat keterbacaan tinggi, tanpa elemen yang berlebihan.

## 1. Palet Warna (Fresh & Clean)
Warna difokuskan pada latar belakang yang bersih (putih/terang) dengan aksen hijau segar yang melambangkan jamur organik dan alam.

- **`--color-bg-main`**: `#FFFFFF` (Putih bersih untuk latar utama agar terlihat luas dan modern).
- **`--color-bg-alt`**: `#F9FAFB` (Abu-abu sangat terang / Off-white, digunakan selang-seling antar *section* untuk pemisah visual).
- **`--color-primary`**: `#10B981` (Emerald Green - Hijau terang dan segar untuk identitas utama, header, dan ikon).
- **`--color-accent`**: `#F59E0B` (Amber / Oranye hangat - Khusus untuk tombol *Call to Action* agar menonjol dan memancing klik).
- **`--color-text-dark`**: `#1F2937` (Dark Gray - Untuk judul/heading. Jauh lebih nyaman di mata dibanding hitam pekat).
- **`--color-text-body`**: `#4B5563` (Medium Gray - Untuk teks paragraf/deskripsi agar mudah dibaca berlama-lama).

## 2. Tipografi (Profesional & Sangat Mudah Dibaca)
Tinggalkan font bergaya ukiran (serif) dan beralih ke font *Sans-Serif* modern yang bersih, simetris, dan standar industri web saat ini.

- **Font Utama (Heading & Body):** `Inter` atau `Plus Jakarta Sans`. 
  - *Kenapa?* Font ini sangat proporsional, tidak aneh-aneh, dan dirancang khusus untuk keterbacaan maksimal di layar digital (baik HP maupun monitor).
- **Hirarki Ukuran (Desktop):**
  - **H1 (Hero):** `3rem` (48px), Font-weight: `700` (Bold), Line-height: `1.2`.
  - **H2 (Section Title):** `2rem` (32px), Font-weight: `600` (Semi-bold), Line-height: `1.3`.
  - **H3 (Card Title):** `1.25rem` (20px), Font-weight: `600` (Semi-bold).
  - **Body (Paragraf):** `1rem` (16px) atau `1.125rem` (18px), Font-weight: `400` (Regular), Line-height: `1.6` (Memberi ruang bernapas antar baris teks).

## 3. Komponen UI (Clean & Terstruktur)

### A. Tombol (Buttons)
Desain kotak dengan sudut yang tidak terlalu membulat untuk menjaga kesan profesional dan modern.
- **Primary CTA (Tombol Pesan):**
  - Background: `--color-accent`
  - Text: Putih, Font-weight: `600`.
  - Border-radius: `8px` (Modern soft-square).
  - Padding: `12px 24px`.
  - Hover: Kecerahan warna sedikit menurun, dengan tambahan bayangan halus.

### B. Cards (Kotak Keunggulan & Proses)
Elemen *card* dirancang rata dan minimalis, menghindari garis batas (border) tebal.
- Background: `#FFFFFF`.
- Border: `1px solid #F3F4F6` (Sangat tipis, hampir tidak terlihat).
- Border-radius: `12px`.
- Box-shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.05)` (Bayangan sangat tipis, memberikan sedikit efek terangkat dari *background*).
- Padding: `24px`.

### C. Gambar & Ikon
- **Gambar:** Border-radius `12px` agar seragam dengan *cards*. 
- **Ikon:** Gunakan *line-icons* (ikon berbasis garis tepi seperti Feather Icons atau Lucide) dengan warna `--color-primary` dan ketebalan garis (stroke) `2px`.

## 4. Tata Letak (Whitespace is Key)
Kesan "Clean" didapat dari ruang kosong (*whitespace*) yang cukup.
- **Section Padding:** Berikan jarak atas dan bawah yang luas pada setiap seksi (minimal `80px` untuk desktop, `40px` untuk mobile).
- **Gap:** Jarak antar *card* (misal di bagian keunggulan) gunakan ukuran `24px` atau `32px`.

## 5. Animasi (Halus & Cepat)
Hindari animasi yang lambat, memantul, atau berlebihan. Gunakan transisi cepat yang responsif.
- **Hover Transitions:** 
  ```css
  .button, .card {
    transition: all 0.2s ease-in-out;
  }
  ```
- **Scroll Reveal (Opsional):** Jika menggunakan efek saat di-scroll, cukup gunakan **Fade In** (perubahan *opacity* dari 0 ke 1) dengan pergeseran posisi (Translate Y) maksimal `20px` ke atas. Durasi `0.4s` agar terasa instan dan modern.

## 6. Implementasi Teknis CSS
Gaya desain ini sangat kompatibel dengan arsitektur CSS modern berbasis komponen. Pendekatan struktur ini memudahkan pengelolaan kelas CSS, menjaga kode tetap bersih, dan menghindari konflik penamaan saat skala antarmuka berkembang.