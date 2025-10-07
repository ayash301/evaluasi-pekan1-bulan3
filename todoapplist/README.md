# Aplikasi Todo List - React & Vite

Halo! Ini adalah project aplikasi todo list yang saya buat menggunakan React dan Vite. Aplikasinya cukup sederhana tapi mencakup fitur-fitur penting yang biasa ada di aplikasi todo modern.

## Fitur Utama

- Bisa nambah todo baru (tinggal ketik terus enter)
- Tandain todo yang udah selesai
- Hapus todo yang ga diperluin
- Filter todo berdasarkan status (semua/aktif/selesai)
- Hitung berapa todo yang masih harus dikerjain
- Tampilannya responsive, jadi bisa dibuka di HP atau laptop
- UI-nya minimalis tapi clean

## Teknologi yang Dipake

Untuk bikin aplikasi ini, saya pake beberapa teknologi:

- **React 18** - buat bikin komponen UI
- **Vite** - tooling yang jauh lebih cepet dari CRA
- **Tailwind CSS** - buat styling, jadi ga perlu nulis CSS banyak-banyak
- **Lucide React** - icon library yang ringan
- **ESLint** - biar kodenya rapi dan konsisten

## Cara Install di Komputer Lo

### Yang Harus Ada Dulu
- Node.js minimal versi 14 (saya pake v18)
- npm atau yarn (terserah mana yang lo suka)

### Langkah-Langkahnya

1. **Bikin project baru pake Vite:**
```bash
npm create vite@latest react-todo-app -- --template react
cd react-todo-app
```

2. **Install library yang dibutuhin:**
```bash
npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
```

3. **Setup Tailwind:**
```bash
npx tailwindcss init -p
```

4. **Copy semua kode dari file yang udah saya siapin**

5. **Jalanin servernya:**
```bash
npm run dev
```

6. **Buka browser dan akses:**
   - http://localhost:3000

Harusnya langsung jalan deh!

## Struktur Foldernya

```
react-todo-app/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx      -> form buat input todo baru
│   │   ├── TodoList.jsx      -> nampung semua todo
│   │   ├── TodoItem.jsx      -> satu item todo aja
│   │   └── TodoFilter.jsx    -> tombol-tombol filter
│   ├── App.jsx               -> komponen utama
│   ├── App.css               -> CSS tambahan
│   ├── main.jsx              -> entry point
│   └── index.css             -> global CSS
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

Saya pisah-pisahin komponennya biar lebih gampang nge-maintain dan kalo mau update tinggal edit file yang relevan aja.

## Penjelasan Komponen

### TodoForm
Ini komponen buat input todo baru. Disini ada:
- Input text field
- Tombol "Add"
- Logic buat nambah todo ke list
- Auto clear input abis submit
- Bisa pake tombol Enter juga buat submit

### TodoItem
Nah ini komponen buat satu item todo. Fiturnya:
- Ada checkbox buat tandain kalo udah selesai
- Kalo di-check, text-nya bakal coret otomatis
- Ada tombol delete (icon sampah merah)
- Kalo di-hover ada efek shadow dikit

### TodoList
Komponen ini sebenernya wrapper aja buat TodoItem. Fungsinya:
- Loop semua todo yang ada
- Kalo ga ada todo, muncul text "No todos to display"
- Passing props ke TodoItem

### TodoFilter
Ini yang buat filter todo. Ada 3 tombol:
- All - nampilun semua
- Active - yang belom selesai
- Completed - yang udah selesai
- Setiap tombol nunjukin jumlahnya juga

### App
Ini komponen parent yang handle semua logic:
- Manage state semua todo
- Handle add/delete/toggle todo
- Logic filternya
- Passing semua function ke child component lewat props

## Command yang Bisa Dipake

```bash
npm run dev      # jalanin development server
npm run build    # build buat production
npm run preview  # preview hasil build
npm run lint     # cek error kode
```

## Kenapa Pake Vite?

Sebenernya awalnya saya mau pake Create React App, tapi setelah coba Vite, bedanya lumayan kerasa:

- Dev servernya super cepet
- Hot reload-nya instant, ga perlu nunggu
- Build production lebih cepet
- Confignya gampang di-customize
- Ukuran bundle lebih kecil

Jadi ya udah, saya pake Vite aja.

## Konsep React yang Saya Pake

Di project ini saya implementasi beberapa konsep React yang penting:

**State Management**
Pake `useState` buat nyimpen data todo dan status filter

**Props**
Buat passing data dan function dari parent ke child component

**Event Handling**
Handle click, submit, sama keyboard event (enter)

**Conditional Rendering**
Render component berdasarkan kondisi tertentu (misalnya empty state)

**List Rendering**
Loop array todo pake `.map()` dan kasih key yang unique

**Component Composition**
Bikin UI dari gabungan komponen-komponen kecil yang reusable

## Responsive Design

Aplikasinya udah responsive kok, jadi bisa dibuka di:
- Desktop / Laptop
- Tablet 
- HP (semua ukuran)

Saya pake Tailwind classes buat handle responsive-nya, jadi ga perlu nulis media query manual.

## Styling

Buat styling saya kombinasi beberapa cara:

1. **Tailwind utility classes** - ini yang paling banyak dipake
2. **CSS biasa di App.css** - buat style custom yang ga ada di Tailwind
3. **Inline style** - cuma buat beberapa case khusus aja

## Catatan

Beberapa hal yang perlu diketahui:

- Data todo ga dipersist, jadi kalo di-refresh balik lagi ke awal
- Ada 3 sample todo yang udah saya masukin buat contoh
- Kodenya udah saya coba pastiin ga ada error atau warning
- Struktur komponennya udah saya bikin se-modular mungkin

## Cara Pakainya

**Nambah Todo:**
Tinggal ketik apa yang mau dikerjain terus pencet Enter atau klik tombol Add

**Tandain Selesai:**
Klik icon bulatan di sebelah kiri todo, nanti bakal berubah jadi centang ijo

**Hapus Todo:**
Klik icon tempat sampah di kanan

**Filter:**
Klik tombol All/Active/Completed sesuai yang mau ditampilin

## Kalo Ada Masalah

**Port 3000 udah dipake program lain**
Vite otomatis pindah ke port lain, biasanya 3001 atau 3002

**Tailwind ga jalan**
Cek lagi file `tailwind.config.js`, pastiin path `content` nya udah bener

**Error module not found**
Jalanin `npm install` lagi, mungkin ada yang belom ke-install

## Pengembangan Kedepan

Kalo ada waktu, saya pengen nambahin:
- LocalStorage biar data ga ilang pas refresh
- Dark mode
- Drag & drop buat urutun todo
- Tambahin due date
- Kategori atau label
- Search/filter by keyword


