# 🧱 Gamified Fitness Tracker – Backend

Ini adalah backend untuk aplikasi **Gamified Fitness Tracker** yang menangani autentikasi, manajemen user, penyimpanan data latihan, perhitungan XP, dan level.

Dibangun menggunakan **Express.js**, **TypeScript**, dan **Prisma** ORM dengan dukungan validasi melalui **Joi**, autentikasi menggunakan **JWT**, dan pengamanan data pengguna menggunakan **bcrypt**.

---

## 🚀 Fitur Utama

- Autentikasi berbasis JWT (Login/Register)
- Validasi input menggunakan Joi
- Penyimpanan data latihan menggunakan Prisma ORM
- Middleware proteksi route
- Struktur modular dan scalable

---

---

## 🛠️ Tech Stack

| Technology | Description                    |
| ---------- | ------------------------------ |
| Express.js | Framework REST API             |
| TypeScript | Bahasa bertipe statis          |
| Prisma     | ORM database modern            |
| JWT        | Autentikasi token              |
| Bcrypt     | Hashing password               |
| Joi        | Validasi skema request body    |
| Dotenv     | Konfigurasi environment        |
| CORS       | Middleware akses lintas origin |
| Nodemon    | Auto-reload saat dev           |

---

## 📡 API Routes

🔐 Auth

POST /api/auth/register

```bash
Body: { name, email, password }
```

POST /api/auth/login

```bash
Body: { email, password }
```

🏋️ Workout

**GET** /api/workouts

```bash
Response: [ { id, exercise_name, duration, calories_burned, date } ]
```

**POST** /api/workouts

```bash
Body: { exercise_name, duration, calories_burned, date }
```

**PUT** /api/workouts/:id

```bash
Body: { exercise_name, duration, calories_burned, date }
```

**DELETE** /api/workouts/:id

🧑‍💼 Profile

**GET** /api/profile

```bash
Response: { xp, level, progress }
```
