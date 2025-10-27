# Wellness Tracker Dashboard

Dashboard tracking kesehatan mental untuk **EmergencyyCall** - Your Mental Health Companion 🖤

---

## 📋 Deskripsi Proyek

Wellness Tracker Dashboard adalah aplikasi web interaktif yang dirancang untuk membantu pengguna memantau kesehatan mental mereka melalui visualisasi data mood harian, pencatatan sesi konseling, dan pesan motivasi yang mendukung proses healing. Aplikasi ini menyediakan antarmuka yang user-friendly dan estetik untuk mencatat perjalanan kesehatan mental pengguna.

---

## 🛠️ Framework & Tools yang Digunakan

### **Core Framework**
- **[Next.js 16.0.0](https://nextjs.org)** - React framework dengan App Router untuk aplikasi web modern
- **[React 19.2.0](https://react.dev)** - Library JavaScript untuk membangun user interface yang interaktif
- **[TypeScript 5](https://www.typescriptlang.org)** - Superset JavaScript dengan type safety untuk kode yang lebih robust

### **UI & Styling**
- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first CSS framework untuk styling yang cepat dan konsisten
- **[Lucide React 0.548.0](https://lucide.dev)** - Icon library modern dengan koleksi icon yang lengkap dan customizable

### **Data Visualization**
- **[Recharts 3.3.0](https://recharts.org)** - Library charting berbasis React untuk visualisasi data mood tracking yang interaktif dan responsif

### **Development Tools**
- **ESLint 9** - Linter untuk menjaga kualitas dan konsistensi kode
- **PostCSS** - Tool untuk transformasi CSS dengan Tailwind CSS

---

## 🎨 Alasan Pemilihan Design & Struktur

### **1. Pemilihan Next.js sebagai Framework Utama**

**Alasan:**
- **Server-Side Rendering (SSR) & Static Generation**: Next.js mendukung berbagai rendering strategy yang memungkinkan performa optimal dan SEO yang baik untuk masa depan
- **App Router**: Menggunakan struktur folder berbasis rute yang intuitif dan mudah di-maintain
- **Built-in Optimization**: Automatic code splitting, image optimization, dan font optimization out-of-the-box
- **Developer Experience**: Hot reload yang cepat dan TypeScript support yang excellent
- **Scalability**: Mudah untuk scale aplikasi ketika fitur bertambah

### **2. Arsitektur Komponen Modular**

**Struktur Folder:**
```
app/
├── page.tsx           # Main dashboard component
├── InputPage.tsx      # Form input untuk sesi & mood
├── data.ts            # Data dummy terpisah (easy to replace with API)
├── layout.tsx         # Root layout
└── globals.css        # Global styles
```

**Alasan:**
- **Separation of Concerns**: Komponen dashboard dan input dipisah untuk maintainability
- **Data Abstraction**: Data dummy di file terpisah (`data.ts`) memudahkan transisi ke API backend
- **Component Reusability**: Setiap komponen memiliki tanggung jawab yang jelas dan dapat digunakan kembali
- **Easy Testing**: Struktur modular memudahkan unit testing per komponen

### **3. State Management dengan React Hooks**

**Alasan:**
- **Simplicity**: Menggunakan `useState` dan `useEffect` untuk state lokal yang cukup untuk skala aplikasi saat ini
- **No Extra Dependencies**: Tidak perlu library tambahan seperti Redux untuk state management
- **Easy to Upgrade**: Mudah untuk migrate ke state management library (Zustand, Redux) jika diperlukan di masa depan
- **Performance**: React hooks sudah cukup efisien untuk aplikasi ukuran medium

### **4. Design System dengan Tailwind CSS**

**Alasan:**
- **Rapid Development**: Utility classes memungkinkan styling cepat tanpa menulis CSS custom
- **Consistency**: Warna, spacing, dan typography yang konsisten menggunakan design tokens
- **Responsive Design**: Mobile-first approach dengan responsive utilities yang mudah
- **Dark Theme Ready**: Mudah untuk implement dark mode di masa depan
- **Small Bundle Size**: Purge unused CSS secara otomatis di production

### **5. Skema Warna & User Experience**

**Palet Warna:**
- **Primary**: Red-900 (#7f1d1d) - Merepresentasikan keseriusan dan fokus pada mental health
- **Secondary**: Gray tones - Memberikan kesan profesional dan menenangkan
- **Accent**: Gradient dari red ke gray - Modern dan eye-catching

**UX Principles:**
- **Minimalist Interface**: Fokus pada data yang penting tanpa overwhelm user
- **Visual Feedback**: Notifikasi, hover effects, dan animations untuk interaksi yang clear
- **Motivational Messages**: Memberikan dukungan emosional melalui pesan harian
- **Progressive Disclosure**: Form dan detail data ditampilkan saat diperlukan

---

## 🔗 Rencana Integrasi dengan Backend

### **Teknologi Backend yang Direkomendasikan**
- **Framework**: Node.js dengan Express.js atau NestJS
- **Database**: PostgreSQL atau MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API Style**: RESTful API

### **Database yang Dibutuhkan**
Aplikasi membutuhkan 3 tabel utama:
- **Users** - Data pengguna (id, email, name, password)
- **Moods** - Data mood tracking (id, user_id, mood_score, date, note)
- **Sessions** - Data sesi konseling (id, user_id, date, duration, notes)

### **API Endpoints yang Dibutuhkan**

**Authentication:**
- `POST /api/auth/register` - Registrasi user baru
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get user info

**Mood Tracking:**
- `GET /api/moods` - Get semua data mood
- `POST /api/moods` - Tambah mood baru
- `DELETE /api/moods/:id` - Hapus mood

**Counseling Sessions:**
- `GET /api/sessions` - Get semua sesi konseling
- `POST /api/sessions` - Tambah sesi baru
- `DELETE /api/sessions/:id` - Hapus sesi

### **Langkah Integrasi di Frontend**

1. **Buat API Service Layer**
   - Buat file `app/services/api.ts` untuk handle semua API calls
   - Setup base URL dengan environment variable

2. **Replace Dummy Data**
   - Ganti import dari `data.ts` dengan API calls
   - Tambahkan `useEffect` untuk fetch data saat component mount

3. **Tambahkan Authentication**
   - Buat login/register page
   - Simpan JWT token di localStorage
   - Protect routes yang membutuhkan authentication

4. **Error Handling**
   - Tambahkan loading states saat fetch data
   - Tampilkan error message jika API call gagal
   - Implement retry logic untuk network errors

---

## 🚀 Cara Menjalankan Proyek

### **Instalasi Dependencies**

```bash
npm install
# atau
yarn install
```

### **Menjalankan Development Server**

```bash
npm run dev
# atau
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat aplikasi.

### **Build untuk Production**

```bash
npm run build
npm start
```

---

## 📁 Struktur Project

```
wellness-tracker-dashboard/
├── app/
│   ├── page.tsx          # Main dashboard page
│   ├── InputPage.tsx     # Input form component
│   ├── data.ts           # Dummy data (akan diganti dengan API)
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind configuration
└── README.md            # Dokumentasi ini
```

---

## 📝 Next Steps

**Backend:**
- [ ] Setup server dan database
- [ ] Buat API endpoints sesuai spesifikasi di atas
- [ ] Implement authentication dengan JWT
- [ ] Deploy backend ke cloud

**Frontend:**
- [ ] Buat API service layer (`app/services/api.ts`)
- [ ] Replace dummy data dengan API calls
- [ ] Tambahkan authentication flow
- [ ] Testing integrasi dengan backend

---

## 📄 License

Private - All Rights Reserved
