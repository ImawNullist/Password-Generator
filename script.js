const passwordBox = document.getElementById('password');
const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+=-{}[]|\:<>?/';

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

// function copyPassword(){
//     passwordBox.select();
//     document.execCommand("copy");
//     alert("Password telah disalin!");
// }

function copyPassword(){
    navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
        alert("Password telah disalin!");
    })
    .catch(err => {
        console.error('Gagal menyalin password: ', err);
    });
}


// Kode JavaScript ini berfungsi untuk membuat dan menyalin password secara acak.

// 1. **Deklarasi Variabel:**
//    - passwordBox: Mengambil elemen input HTML untuk menampilkan password.
//    - length: Panjang password yang diinginkan.
//    - upperCase, lowerCase, number, symbol: String yang berisi karakter-karakter yang mungkin digunakan dalam password.
//    - allChars: Gabungan dari semua karakter yang mungkin digunakan untuk memastikan password mencakup berbagai jenis karakter.

// 2. **Fungsi createPassword:**
//    - Membuat string password kosong.
//    - Menambahkan satu karakter dari setiap jenis (huruf besar, huruf kecil, angka, simbol) untuk memastikan keberagaman.
//    - Mengisi sisa karakter password secara acak dari allChars sampai panjangnya mencapai length.
//    - Menetapkan password yang dihasilkan ke value dari passwordBox.

// 3. **Fungsi copyPassword:**
//    - Menyalin nilai dari passwordBox ke clipboard.
//    - Jika berhasil, menampilkan alert "Password telah disalin!".
//    - Jika gagal, mencetak pesan error ke konsol.
