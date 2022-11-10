// case 2 : Jika umur ayah adalah 4x umur anaknya. dam jumlah umur keduanya saat itu adalah 80 tahun, berapakah umur si anak?

let totalAge = 80;
let pFather = 4;
let pSon = 1;

let total = pFather + pSon;
pSon = totalAge / total;

// console.log(pSon);

// CASE 3
// tampilkanlah tanggal bulan dan tahun hari ini, besok dan kemarin

let today = new Date();
let todayDate = today.getDate() + 1 + "/" + today.getMonth() + "/" + today.getFullYear();

let tomorrow = new Date();
let tomorrowDate = tomorrow.setDate(today.getDate() + 1);

let yesterday = new Date();
let yesterdayDate = yesterday.setDate(today.getDate() - 1);

console.log(yesterday);

// CASE 5
// Buatlah algoritma untuk menghitung jumlah karakter tertentu dalam string

const name = "Andre Ivan Permana";

const charCount = name.length;

// console.log(charCount);
