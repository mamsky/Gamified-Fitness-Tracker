# 🎮 Gamified Fitness Tracker – Frontend

Ini adalah **frontend** untuk aplikasi **Gamified Fitness Tracker** — platform pelacakan kebugaran yang menyenangkan dan memotivasi. Aplikasi ini memungkinkan pengguna mencatat latihan, mendapatkan XP, naik level, dan memantau kemajuan kebugaran mereka secara real-time.

Dibangun menggunakan **Next.js** dan **TypeScript**, aplikasi ini didesain modular dan terintegrasi penuh dengan **React Hook Form**, **Zod**, dan **TanStack Query** untuk pengalaman pengguna yang cepat dan responsif.

---

## ✨ Fitur Utama

- Autentikasi (Register & Login)
- Workout Logging: Tambah, edit, hapus, lihat
- Tampilan Progress, XP dan level
- Fetch data efisien dengan React Query
- Manajemen token dengan cookie
- Toaster notifikasi untuk feedback UI
- Responsive UI

---

## 🚀 Tech Stack

| Technology           | Description                         |
| -------------------- | ----------------------------------- |
| Next.js              | Framework React dengan SSR          |
| TypeScript           | Bahasa JavaScript bertipe statis    |
| Tailwind CSS         | CSS utility-first untuk styling     |
| React Hook Form      | Form management dan validasi        |
| Zod                  | Validasi skema data                 |
| TanStack React Query | Manajemen query                     |
| Axios                | HTTP client untuk API request       |
| js-cookie            | Manajemen cookie browser            |
| react-hot-toast      | Notifikasi toast ringan dan stylish |
| Tailwind CSS         | Styling berbasis utility className  |

---

---

## 🗺️ Frontend Routing

Berikut adalah struktur routing halaman pada aplikasi frontend:

### ✅ **Frontend Pages**

| Route              | Deskripsi                                          |
| ------------------ | -------------------------------------------------- |
| `/login`           | Halaman login untuk pengguna masuk ke sistem.      |
| `/register`        | Halaman pendaftaran untuk pengguna baru.           |
| `/dashboard`       | Tampilan utama berisi:                             |
|                    | - XP saat ini                                      |
|                    | - Level pengguna                                   |
|                    | - Progress bar ke level berikutnya                 |
|                    | - Ringkasan log workout untuk **tanggal hari ini** |
|                    | - Tombol untuk menambahkan workout baru            |
| `/workouts`        | Menampilkan riwayat lengkap workout pengguna.      |
|                    | Dapat difilter berdasarkan tanggal.                |
| `/workouts/create` | Form untuk menambahkan workout baru.               |

> Semua halaman dilindungi dan hanya dapat diakses jika pengguna sudah login (authenticated route).

---
