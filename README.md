# Portofolio Dimas Pebrianto (Tema Moonlight) 🌙

Website portofolio pribadi satu halaman (*single page portfolio*) untuk **Dimas Pebrianto**, mahasiswa Universitas Bumigora. Dibangun dengan estetika visual **Moonlight** (cahaya bulan malam hari) yang elegan, modern, dan minimalis menggunakan teknologi murni web tanpa framework.

---

## 🚀 Fitur Utama
- **Tema Visual Moonlight**: Palet warna malam gelap dengan aksen cahaya bulan (`--moon`, `--glow`), bintang berkedip di latar belakang, dan visual bulan murni CSS.
- **Glassmorphism Design**: Kartu dan navigasi dengan efek kaca transparan, border halus, dan blur lembut.
- **Interaksi Halus**:
  - Animasi mengetik (*typing animation*) dinamis pada hero section.
  - *Smooth scrolling* antar bagian halaman.
  - Animasi *scroll reveal* (fade-in) menggunakan `IntersectionObserver`.
  - Indikator menu navigasi aktif (*scroll spy*).
  - Navigasi responsif dengan menu hamburger untuk perangkat mobile.
- **Aksesibel & Ringan**: Mendukung preferensi `prefers-reduced-motion`, kontras tinggi, navigasi keyboard (`:focus-visible`), dan bebas dari dependensi berat.
- **Hosting-Ready**: Didesain khusus menggunakan path relatif agar siap langsung di-deploy ke **GitHub Pages**.

---

## 📁 Struktur Berkas

```
/
├── index.html          # Halaman utama portofolio
├── css/
│   └── style.css       # Seluruh gaya desain tema Moonlight & responsivitas
├── js/
│   └── main.js         # Logika interaksi, typing effect, starfield, dan data dinamis
├── assets/
│   └── img/            # Tempat penyimpanan foto/aset gambar (.gitkeep)
├── .nojekyll           # Mencegah GitHub Pages memproses situs dengan Jekyll
└── README.md           # Panduan proyek dan deployment
```

---

## 💻 Cara Menjalankan Secara Lokal

Karena proyek ini menggunakan HTML5, CSS3, dan JavaScript vanilla murni tanpa proses *build*:

### Opsi 1: Buka Langsung di Browser
1. Buka folder proyek di komputer Anda.
2. Klik dua kali berkas `index.html` (atau klik kanan > *Open with* > Google Chrome / Microsoft Edge / Firefox).

### Opsi 2: Menggunakan Ekstensi Live Server (VS Code)
1. Buka folder proyek di Visual Studio Code.
2. Pastikan ekstensi **Live Server** (oleh Ritwick Dey) sudah terpasang.
3. Klik kanan pada berkas `index.html` lalu pilih **Open with Live Server** (atau klik tombol *Go Live* di pojok kanan bawah).
4. Portofolio akan terbuka otomatis di alamat `http://127.0.0.1:5500/`.

---

## 🌐 Panduan Deploy ke GitHub Pages

Ikuti langkah-langkah mudah berikut untuk mempublikasikan website ini ke internet secara gratis:

1. Buat repositori baru di GitHub (misal: `portfolio` atau `aboutme`).
2. Unggah seluruh berkas proyek ini ke branch `main`.
3. Buka halaman repositori di GitHub, lalu klik tab **Settings**.
4. Pada menu samping kiri, klik bagian **Pages** (di bawah kategori *Code and automation*).
5. Pada bagian **Build and deployment**:
   - **Source**: Pilih `Deploy from a branch`.
   - **Branch**: Pilih `main` dan biarkan foldernya `/ (root)`.
   - Klik tombol **Save**.
6. Tunggu 1–2 menit hingga proses deploy selesai. Tautan website Anda akan muncul di bagian atas halaman Settings > Pages (misal: `https://<username>.github.io/<repository-name>/`).

---

## 📝 Daftar Bagian yang Perlu Disesuaikan oleh Dimas

Seluruh data placeholder telah ditandai dengan jelas agar mudah diperbarui:

1. **Foto Profil** (`index.html`, baris `~77`):
   - Tambahkan foto profil Anda ke `assets/img/profile.jpg`.
   - Hapus `<div class="avatar-placeholder">` dan aktifkan tag `<img>` yang ada di komentar.
2. **Deskripsi Diri** (`index.html`, baris `~92`):
   - Ganti teks placeholder `[Isi deskripsi diri lebih lanjut...]` sesuai minat, fokus teknologi, atau motivasi Anda.
3. **Pendidikan** (`index.html`, baris `~135`):
   - Ganti `[Isi program studi]` (contoh: *S1 Ilmu Komputer* atau *S1 Sistem Informasi*).
   - Ganti `[Isi tahun]` (contoh: *2023*).
   - Ganti deskripsi akademik singkat pada bagian pendidikan.
4. **Kontak & Media Sosial** (`index.html`, baris `~159` - `~206`):
   - Ubah `mailto:placeholder@email.com` ke alamat email aktif Anda.
   - Ganti atribut `href="#"` pada tautan GitHub, LinkedIn, dan Instagram dengan URL profil Anda.
5. **Daftar Keahlian** (`js/main.js`, baris `~17`):
   - Sesuaikan nama teknologi, kategori, atau ikon di dalam array `skillsData`.
6. **Daftar Proyek** (`js/main.js`, baris `~53`):
   - Ubah judul, deskripsi, teknologi (`tags`), serta link `demoUrl` dan `codeUrl` di dalam array `projectsData`.
7. **Kata Animasi Ketik Hero** (`js/main.js`, baris `~83`):
   - Sesuaikan daftar status/peran di dalam array `typingWords` jika ingin mengganti frasa sapaan.

"# aboutme" 
