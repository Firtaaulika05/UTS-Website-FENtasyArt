# 🎨 FENtasyArt

**FENtasyArt** adalah sebuah platform komunitas kreatif yang dirancang dengan antarmuka modern dan responsif.  
Website ini menjadi wadah bagi para seniman untuk menemukan ruang kerja, mengikuti lokakarya, memamerkan karya seni, serta terhubung dengan klien dan sesama pegiat kreatif.  

Proyek ini dibangun dengan fokus pada **pengalaman pengguna yang intuitif**, **desain visual yang menarik**, dan **interaktivitas yang fungsional**.

---

## ✨ Fitur Utama

- 🎨 **Desain Modern & Responsif**  
  Website dapat beradaptasi di berbagai ukuran layar — dari desktop hingga perangkat mobile — untuk memastikan pengalaman pengguna yang optimal.

- 📄 **Struktur Multi-Halaman**  
  Terdiri dari halaman **Home**, **About Us**, dan **Contact** agar navigasi lebih jelas dan mudah dipahami.

- 🖱 **Navigasi Interaktif**  
  Dilengkapi **sticky header** (menu tetap terlihat saat digulir) dan **dropdown menu** untuk akses cepat ke berbagai bagian penting.

- 📅 **Modal Pemesanan Dinamis**  
  Menyediakan pop-up form untuk pemesanan ruang atau pendaftaran workshop, yang menampilkan konten dinamis sesuai pilihan pengguna.

- 🚀 **Animasi & Transisi Halus**  
  Efek hover pada kartu, animasi saat scroll, serta transisi yang lembut memberikan kesan modern dan profesional.

- 👤 **Formulir Ramah Pengguna**  
  Tersedia form pemesanan dan form kontak dengan validasi input sederhana agar pengguna lebih mudah berinteraksi.

- 🔼 **Tombol “Back to Top”**  
  Memudahkan pengguna kembali ke atas halaman dengan efek smooth scrolling.

- 🛠 **Kode Terstruktur & Bersih**  
  Ditulis menggunakan **HTML5 semantik**, **CSS3 modern (Flexbox & Grid)**, dan **JavaScript vanilla** dengan struktur modular.

---

## 🛠 Teknologi yang Digunakan

- **HTML5** — struktur semantik halaman website.  
- **CSS3** — pengaturan gaya, layout (Flexbox & Grid), dan animasi.  
- **JavaScript (Vanilla)** — fungsionalitas interaktif seperti navigasi, modal, dan validasi form.  
- **Aset Eksternal:** Google Fonts (*Inter*) dan Font Awesome untuk ikon tambahan.

---

## 🚀 Cara Mengakses dan Menjalankan Proyek

Kunjungi hasil deploy proyek secara langsung melalui GitHub Pages di tautan berikut:

**https://firtaaulika05.github.io/UTS-Website-FENtasyArt/**

## 🔍 Penjelasan Kode Lengkap

Berikut adalah rincian mendetail mengenai struktur dan logika dari setiap file utama dalam proyek ini.

### 1\. Struktur HTML

Struktur HTML proyek ini terorganisir ke dalam beberapa file untuk kemudahan pengelolaan, dengan komponen seperti <header> dan <footer> yang konsisten di semua halaman.

  - **index.html**: Halaman utama (beranda).

      - **<header>** Berisi logo dan menu navigasi yang digunakan di semua halaman.
      - *Hero Section* (#home): Banner utama dengan gambar latar, overlay, dan tombol call-to-action (CTA).
      - *Main Sections*: Terdiri dari beberapa bagian (<section>) untuk "Ruang Tersedia" (#spaces), "Lokakarya Mendatang" (#workshops), dan "Pameran Saat Ini" (#exhibitions). Setiap bagian menggunakan tata letak grid untuk menampilkan kartu konten.
      - *Modal Pemesanan* (#bookingModal): Struktur HTML untuk formulir pop-up yang disembunyikan secara default dan diaktifkan melalui JavaScript.

  - **about.html**: Halaman informasi tentang FENtasyArt.

      - Berisi bagian untuk sejarah singkat, Visi & Misi, galeri dokumentasi kolaborasi, dan profil tim pengembang.

  - **contact.html**: Halaman untuk pertanyaan atau masukan dari pengguna.

      - Menampilkan formulir kontak (<form id="contactForm">) yang bersih dan fungsional.

### 2\. Styling (style.css)

File style.css menjadi pusat dari seluruh tampilan visual website, diorganisir secara logis untuk kemudahan pengelolaan.

  - *Variabel & Reset*:

      - *root*: Mendefinisikan CSS Custom Properties (variabel) untuk palet warna (--primary-color, dll.), border-radius, dan box-shadow. Ini adalah kunci untuk menjaga konsistensi tema.
      - *(Universal Selector)*: Menerapkan reset CSS standar untuk menghapus margin dan padding default browser, serta mengatur box-sizing: border-box untuk kalkulasi tata letak yang lebih akurat.

  - *Header & Navigasi*:

      - <header> diberi position: sticky agar tetap menempel di bagian atas layar saat pengguna menggulir halaman.
      - Menu dropdown diimplementasikan murni dengan CSS menggunakan pseudo-class :hover pada elemen .nav-item.

  - *Kartu & Grid* (.spaces-grid, .workshop-card, dll.):

      - **display: grid** digunakan untuk membuat tata letak utama pada bagian ruang, lokakarya, dan pameran. Fungsi repeat(auto-fit, minmax(320px, 1fr)) menciptakan grid yang sepenuhnya responsif tanpa memerlukan banyak media query.
      - Kartu diberi transition pada properti transform dan box-shadow untuk menciptakan efek terangkat (lift) yang halus saat kursor diarahkan.

  - *Styling Modal* (.modal):

      - Kontainer modal menggunakan position: fixed untuk menutupi seluruh layar. Awalnya disembunyikan dengan display: none dan opacity: 0.
      - Ketika diaktifkan, sebuah kelas .show ditambahkan melalui JavaScript, yang mengubah opacity menjadi 1 dan memicu animasi fade-in serta slide-down yang halus.

  - *Desain Responsif* (@media queries):

      - **Tablet (@media (max-width: 768px)):** Menu navigasi utama (.nav-menu) disembunyikan dan digantikan oleh ikon hamburger (.nav-toggle), yang akan memunculkan menu sebagai panel geser.
      - **Mobile (@media (max-width: 576px)):** Ukuran padding dan font diperkecil untuk optimasi pada layar kecil. Elemen seperti tombol di hero section disusun secara vertikal.

### 3\. Fungsionalitas (script.js)

File script.js mengontrol semua interaksi pengguna dan manipulasi konten dinamis. Seluruh skrip dibungkus dalam event listener DOMContentLoaded untuk memastikan kode berjalan setelah seluruh HTML dimuat.

  - *Logika Menu Mobile*:

      - Sebuah event listener pada ikon hamburger (#nav-toggle) akan menambah atau menghapus kelas .active pada menu navigasi (#nav-menu), yang mengontrol visibilitasnya melalui CSS.

  - *Logika Modal (Fungsionalitas Inti)*:

      - Event listener dipasang pada semua tombol dengan kelas .space-book atau .workshop-book.
      - Saat tombol diklik, skrip akan mencari elemen induk terdekat (.closest()) untuk menemukan kartu yang sesuai.
      - Kemudian, skrip secara dinamis mengambil informasi dari kartu tersebut (seperti judul, harga, dan detail) lalu memasukkannya ke elemen yang sesuai di dalam modal.
      - *Logika Kondisional*: Skrip memeriksa apakah item yang diklik adalah "ruang" atau "lokakarya". Jika itu ruang, input pemilih tanggal akan ditampilkan dan dijadikan required. Jika itu lokakarya, input tanggal disembunyikan karena tanggalnya sudah pasti.
      - Fungsi openModal() dan closeModal() menangani penampilan dan penyembunyian modal, termasuk transisi animasinya.
      - Pengiriman formulir ditangani dengan event.preventDefault() untuk mencegah halaman memuat ulang, lalu menampilkan pesan sukses.

  - *Penanganan Formulir Kontak*:

      - Mirip dengan modal, pengiriman formulir kontak menggunakan preventDefault(). Skrip melakukan validasi sederhana untuk memastikan semua kolom terisi, lalu menampilkan alert() sebagai konfirmasi dan mereset formulir.

  - *Peningkatan Antarmuka (UI Enhancements)*:

      - **initSmoothScroll**: Mengimplementasikan efek gulir yang mulus untuk semua tautan internal (anchor links).
      - **initScrollAnimations**: Menggunakan IntersectionObserver API untuk menerapkan animasi fade-in dan slide-up saat elemen masuk ke dalam layar.
      - **initBackToTop**: Secara dinamis membuat dan mengelola tombol "kembali ke atas" yang hanya muncul setelah pengguna menggulir cukup jauh ke bawah.

## 👤 Pengembang

Proyek ini disusun dan dikembangkan oleh 
* Firta Aulika - [24091397029] 
* Muhammad Nadhiful Asyror - [24091397044] 
* Angelica Immanuela Nazarina - [24091397050].
