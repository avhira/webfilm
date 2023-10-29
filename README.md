# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Cara penggunaan github
Cara penggunaan github untuk berkolaborasi mengelola pekerjaan

## Untuk Kontributor
### 1. git clone

Perintah "**git clone**" digunakan untuk mengunduh code yang ada pada repository.

### 2. git pull
Perintah git pull ini akan sering kali digunakan apabila kita dalam bekerja membuat suatu aplikasi atau mengembangkan aplikasi secara tim.

berikutnya kita akan update folder dan file yang sudah di buat tadi ke repository yang di clone di awal tadi dengan cara kita kembali ke folder awal yang di clone tadi dengan perintah berikut:

### 3. git add
Dengan menggunakan perintah ini, maka artinya sama aja kita menyuruh agar di git untuk melakukan penambahan (add) pada semua file dalam folder

perintah selanjutnya

```bash

$ git commit -m "<isi pesan>"

```

### 4. git push
 **git push** adalah memasukkan file-file atau direktori hasil kerjaan kita yang dilakukan setelah melakukan commit ke tempat penyimpanan projeknya (misal dalam kasus ini adalah github).

terakhir kita akan menjalankan perintah **git push**

```bash
$ git push origin main
```


# Step by Step Pengerjaan Projek

### Langkah 1: Persiapan Awal
### - Membuat projek baru menggunakan vite.

```bash
npx create-vite nama-proyek --template react
cd nama-proyek
```

### - Instalasi Dependencies

```bash
npm install react-feather react-router-dom
```

### Langkah 2: Pengaturan Icon dengan react-feather
### - Import Icon
Dalam komponen Anda, impor icon dari react-feather dan gunakan sesuai kebutuhan:

```bash
import { IconName } from 'react-feather';
```

### - Gunakan Ikon
Gunakan icon tersebut di dalam JSX Anda:

```bash
<IconName />
```

### Langkah 3: Menggunakan react-router-dom untuk Navigasi
### - konfigurasi Router
Dalam src folder, buat file AppRouter.js untuk mengatur konfigurasi rute aplikasi:

```bash
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Mendatang from './components/Mendatang';
import Tayang from './components/Tayang';
import Terpopuler from './components/Terpopuler';
import Home from './components/Home';
import Detail from './components/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pencarian from './components/Pencarian';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tayang/detail/:id" element={<Detail />} />
          <Route path="/terpopuler/detail/:id" element={<Detail />} />
          <Route path="/mendatang/detail/:id" element={<Detail />} />
          <Route path="/mendatang" element={<Mendatang />} />
          <Route path="/tayang" element={<Tayang />} />
          <Route path="/terpopuler" element={<Terpopuler />} />
          <Route path="/pencarian" element={<Pencarian />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
```

### - Buat Halaman
Buat komponen-komponen untuk halaman masing-masing.

### Langkah 4: Menjalankan Aplikasi
### - Jalankan Aplikasi

```bash
npm run dev
```
