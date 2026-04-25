## 🚀 Tantangan Frontend Pertama: Halaman Login & Register

Selamat datang di perjalanan belajarmu menjadi seorang Frontend Developer! Proyek ini dirancang khusus untuk membantu kamu memahami dasar-dasar pembuatan website secara praktis.

## 🎯 Target Akhir
Kamu akan membuat dua halaman (Login & Register) yang berfungsi untuk menangkap input pengguna dan menampilkannya di **Console Browser**.

---

## 🛠️ Persiapan Tools
Sebelum mulai, pastikan kamu sudah menginstal:
1. **Visual Studio Code (VS Code)**: Editor tempat kita menulis kode.
2. **Browser (Google Chrome/Edge)**: Untuk melihat hasil website kita.
3. **Ekstensi VS Code: Live Server**: Agar setiap perubahan kode otomatis muncul di browser tanpa perlu refresh manual.

---

## 🏗️ Fase 1: Membangun Struktur (HTML)
*Waktu: Membuat kerangka/tulang website.*

Buatlah dua file baru bernama `login.html` dan `register.html`. Di setiap halaman, buatlah sebuah form yang berisi:

**Halaman Login:**
- Input Email/Username.
- Input Password (pastikan teks tidak terlihat saat diketik).
- Tombol "Login".
- Link yang mengarah ke halaman Register.

**Halaman Register:**
- Input Nama Lengkap.
- Input Email.
- Input Nomor Telpon
- Input Password.
- Tombol "Register".
- Link yang mengarah ke halaman Login.

**Petunjuk:** Gunakan tag `<form>`, `<input>`, `<label>`, dan `<button>`.

---

## 🎨 Fase 2: Mempercantik Tampilan (CSS)
*Waktu: Menghias agar website terlihat menarik.*

Buat file bernama `style.css` dan hubungkan ke file HTML kamu menggunakan tag `<link>`.
**Tantangan Kreativitas:**
1. **Centering**: Letakkan kotak form tepat di tengah halaman (Gunakan konsep `Flexbox`).
2. **Styling Input**: Tambahkan `padding`, `border-radius` (agar sudut tumpul), dan `border` yang halus.
3. **Button**: Ubah warna tombol dan berikan efek `hover` (warna berubah saat kursor menyentuh tombol).
4. **Font**: Gunakan font 'Arial' atau 'Poppins' agar lebih modern.

---

## 🧠 Fase 3: Membuat Halaman Berfungsi (JavaScript)
*Waktu: Mengambil data dari form.*

Agar data yang diketik bisa terbaca, kita butuh JavaScript. Tambahkan kode di bagian bawah file HTML (sebelum tag penutup `</body>`):
#### JavaScript Login
```html
<script>
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman ter-refresh
    
    // Mengambil data (Contoh untuk Email dan Password)
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Menampilkan hasil di Console
    console.log("--- Data Form ---");
    console.log("Email: " + email);
    console.log("Password: " + password);
    
    alert('Cek Console Browser (F12) untuk melihat datamu!');
  });
</script>
```
#### JavaScript Register
```html
<script>
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman ter-refresh otomatis
    
    // Mengambil data (Nama, Email, dan Password)
    const nama = document.querySelector('input[type="text"]').value; 
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Menampilkan hasil di Console
    console.log("--- Data Pendaftaran Baru ---");
    console.log("Nama Lengkap: " + nama);
    console.log("Email: " + email);
    console.log("Password: " + password);
    
    alert('Pendaftaran disimulasikan berhasil! Cek Console (F12) untuk melihat datamu.');
  });
</script>
```
### 📤 Alur Pengumpulan Tugas (Git Branching & Push)
Di dunia kerja, kita tidak boleh mengirim kode langsung ke branch utama (main). Kita harus menggunakan Branch (cabang) agar main tetap bersih dari error. Ikuti langkah ini untuk menyimpan dan mengirim project kamu:

#### A. Mengerjakan & Push Halaman Login
Jangan kerja di main! Buat cabang baru khusus untuk fitur login:
```bash
# Membuat dan pindah ke branch baru
git checkout -b dev_login

# Setelah selesai koding halaman login, simpan dan kirim (push)
git add .
git commit -m "feat: menyelesaikan halaman login"
git push origin dev_login
```
#### B. Mengerjakan & Push Halaman Register
Pindah kembali ke dasar sebelum membuat cabang baru untuk register:
```bash
# Kembali ke main dulu
git checkout main

# Buat branch baru untuk register
git checkout -b dev_register

# Setelah selesai koding halaman register, simpan dan kirim (push)
git add .
git commit -m "feat: menyelesaikan halaman register"
git push origin dev_register
```
