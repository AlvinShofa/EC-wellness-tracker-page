# WELLNESS TRACKER DASHBOARD
**EmergencyyCall - Mental Health Companion**

---

## INFORMASI PROJECT

**Link Deployment:** [MASUKKAN LINK DEPLOY DI SINI]  
**Framework:** Next.js 16 + React 19 + TypeScript  
**Waktu Pengerjaan:** 1 Hari  
**Repository:** [Link GitHub jika ada]

---

## 1. DESKRIPSI PROJECT

Wellness Tracker Dashboard adalah halaman baru EmergencyyCall yang memungkinkan pengguna memantau aktivitas kesehatan mental mereka, termasuk frekuensi konseling, perubahan mood, dan pesan motivasi dari sistem.

**Screenshot Dashboard Utama:**
![Dashboard](gambar/dashboard.png)
*[GAMBAR 1: Screenshot halaman utama menampilkan 3 cards statistik dan mood chart]*

---

## 2. FITUR UTAMA (3 Komponen Wajib)

### 2.1 Ringkasan Sesi Konseling
Menampilkan:
- **Total Sesi Konseling** - Jumlah sesi yang telah dilakukan
- **Durasi Rata-rata** - Rata-rata durasi per sesi (dalam menit)
- **Mood Terkini** - Nilai mood terakhir (skala 0-10)

**Screenshot:**
![Statistik Cards](gambar/stats-cards.png)
*[GAMBAR 2: 3 cards dengan icon dan data statistik]*

---

### 2.2 Grafik Perubahan Mood
Line chart interaktif menampilkan tracking mood 7 hari terakhir dengan:
- Skala 0-10
- Tooltip saat hover
- Data dinamis dari dummy data
- Responsive di semua device

**Screenshot:**
![Mood Chart](gambar/mood-chart.png)
*[GAMBAR 3: Line chart dengan 7 hari data mood]*

---

### 2.3 Pesan Motivasi Harian
Card pesan motivasi yang:
- Muncul secara random dari 7 pesan berbeda
- Dapat di-refresh dengan tombol
- Desain gradient yang menenangkan
- Animasi smooth transition

**Contoh Pesan:**
- "Setiap langkah kecil adalah kemajuan yang berarti 🖤"
- "Kamu lebih kuat dari yang kamu kira"
- "Take it one day at a time, you're doing great"

**Screenshot:**
![Pesan Motivasi](gambar/motivasi.png)
*[GAMBAR 4: Card pesan motivasi dengan background gradient]*

---

## 3. TEKNOLOGI & ALASAN PEMILIHAN

### Framework & Tools
| Teknologi | Alasan Pemilihan |
|-----------|------------------|
| **Next.js 16** | SSR untuk performa cepat, App Router untuk struktur clean, built-in optimization |
| **React 19** | Component-based untuk reusability, hooks untuk state management yang simple |
| **TypeScript** | Type safety mengurangi bugs, kode lebih maintainable |
| **Tailwind CSS 4** | Utility-first untuk development cepat, design system konsisten, ringan di production |
| **Recharts** | Library chart React yang ringan, interactive, mudah di-customize |
| **Lucide React** | Icon modern dan customizable, tree-shakeable untuk bundle kecil |

### Alasan Desain & Struktur

**1. Pemilihan Next.js:**
- Ringan dan cepat diakses (SSR + Static Generation)
- Mobile-first responsive
- Siap untuk integrasi backend di tahap selanjutnya
- Deployment mudah ke Vercel

**2. Struktur Komponen Modular:**
- `page.tsx` - Dashboard utama
- `InputPage.tsx` - Form input data
- `data.ts` - Dummy data terpisah (mudah diganti dengan API)
- Komponen kecil dan reusable

**3. State Management Sederhana:**
- React Hooks untuk local state
- Tidak butuh Redux/Zustand untuk skala saat ini
- Mudah scale up jika diperlukan

---

## 4. PENDEKATAN UX & DESIGN

### Warna Lembut & Menenangkan
- **Primary:** Red-900 (#7f1d1d) - Hangat dan fokus
- **Background:** Gradient Gray (50-200) - Lembut dan tidak silau
- **Accent:** Gradient Red-900 to Gray-900 - Modern dan calming

**Screenshot:**
![Color Palette](gambar/colors.png)
*[GAMBAR 5: Palet warna yang digunakan]*

### Navigasi Intuitif
- Toggle sederhana antara Dashboard dan Input Data
- Tombol jelas dengan icon yang recognizable
- Breadcrumb untuk user orientation

### Responsivitas
- Mobile-first approach
- Breakpoints untuk tablet dan desktop
- Touch-friendly button sizes

**Screenshot:**
![Mobile View](gambar/mobile.png)
*[GAMBAR 6: Tampilan responsive di mobile]*

---

## 5. INTERAKSI & ANIMASI

### Hover Effects
- Cards terangkat dengan shadow saat hover
- Button dengan color transition
- Chart tooltip muncul smooth

### Transisi Lembut
- Fade in/out untuk notifications
- Smooth page transitions
- Loading state dengan spin animation

### Notifikasi
- Toast notification saat data berhasil disimpan
- Slide-in animation dari kanan
- Auto-dismiss setelah 3 detik

**Screenshot:**
![Notification](gambar/notification.png)
*[GAMBAR 7: Toast notification sukses]*

---

## 6. CARA PENGGUNAAN

### Akses Dashboard
1. Buka link: **[LINK DEPLOY]**
2. Dashboard langsung menampilkan statistik dan chart
3. Lihat pesan motivasi di bagian bawah

### Input Data Mood/Sesi
1. Klik tombol **"Input Data"** di header
2. Pilih tab "Mood" atau "Sesi Konseling"
3. Isi form dan klik **"Simpan"**
4. Kembali ke dashboard untuk lihat update

### Refresh Pesan Motivasi
1. Klik tombol **"Perbarui"** (icon refresh) di header
2. Pesan akan berganti random

**Screenshot:**
![Input Page](gambar/input-page.png)
*[GAMBAR 8: Halaman input data dengan form]*

---

## 7. RENCANA INTEGRASI BACKEND

### API yang Dibutuhkan
```
Authentication:
- POST /api/auth/login
- GET /api/auth/me

Mood:
- GET /api/moods
- POST /api/moods

Sessions:
- GET /api/sessions  
- POST /api/sessions
```

### Langkah Integrasi
1. **Buat API Service** (`app/services/api.ts`)
2. **Replace Dummy Data** dengan fetch dari API
3. **Tambah Authentication** (JWT token)
4. **Error Handling** untuk API failures

### Data Structure
Dummy data saat ini di `data.ts` sudah match dengan struktur database yang direncanakan, sehingga tinggal replace dengan API calls.

---

## 8. INSTALASI LOKAL

```bash
# Clone & Install
git clone [repo-url]
cd wellness-tracker-dashboard
npm install

# Run Development
npm run dev
# Buka http://localhost:3000

# Build Production
npm run build
npm start
```

---

## 9. CHECKLIST DELIVERABLES

- [x] Prototipe web dashboard sederhana
- [x] 3 komponen utama (ringkasan sesi, grafik mood, pesan motivasi)
- [x] UX mindful dengan warna lembut
- [x] Navigasi intuitif
- [x] Responsive di berbagai ukuran layar
- [x] Hover effects
- [x] Transisi lembut antar elemen
- [x] Notifikasi ketika data diperbarui
- [x] Dokumentasi README
- [x] Framework & tools dijelaskan
- [x] Alasan pemilihan desain
- [x] Rencana integrasi backend
- [ ] Link deploy (isi setelah deploy)
- [ ] Screenshot (lampirkan 8 gambar di atas)

---

## 10. KESIMPULAN

Wellness Tracker Dashboard berhasil memenuhi semua requirement studi kasus:

✅ **Ringan & Cepat** - Next.js dengan SSR dan optimization  
✅ **Data Dinamis** - State management dengan React Hooks  
✅ **Identitas Visual** - Warna hangat (red-900) dan tenang (gray tones)  
✅ **Siap Integrasi** - Struktur modular dengan data layer terpisah  
✅ **UX Mindful** - Desain minimalis, warna lembut, navigasi intuitif  
✅ **Interaktif** - Hover, transisi, notifikasi  

Dashboard ini siap digunakan sebagai prototype dan mudah dikembangkan dengan backend di tahap selanjutnya.

---

## LAMPIRAN: DAFTAR SCREENSHOT

**Desktop View:**
1. Dashboard utama (full page)
2. 3 cards statistik (close-up)
3. Mood chart dengan data
4. Card pesan motivasi
5. Color palette / style guide
6. Mobile responsive view
7. Toast notification
8. Halaman input data

**Tips Screenshot:**
- Resolution: 1920x1080 atau lebih
- Browser: Chrome/Edge dengan zoom 100%
- Ambil dalam kondisi terang (tidak dark mode)
- Crop dengan padding yang cukup

---

**Dibuat oleh:** [Nama Kandidat]  
**Tanggal:** [Tanggal Pengumpulan]  
**Kontak:** [Email]

---

© 2025 EmergencyyCall. All Rights Reserved.
