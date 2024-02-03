// External Script
// console.log("Jerry Johnson");
// alert("Hello World");
// let js = 'amazing';
// if(js === 'amazing') alert("Javascript is fun")

// Introduction dari Javascript
// Word Wrap = Alt + Z
// Javascript itu -> high level object-oriented, multiparadigm programming language
// High level -> gaperlu worry memory management
// Object oriented -> bergantung kepada object
// Multiparadigm -> kita bisa menggunakan style coding yang berbeda
// Kalau di JS -> kita bisa pakai 2 style: contohnya style imperative programming dan declarative programming
// Programming language itu -> instruct computer to do things.

// Data type in Javascript
// ada 2 jenis:
// 1. Primitif
// 2. Object

// Primitif data type ada 7: Number, String, Boolean, Undefined, null, Symbol, BigInt.

// let jerry;
// console.log(jerry); // outputnya: Undefined

// null -> empty value 

// 3 variable initiation in javascript
// let, const, var
// var -> sudah ditinggalkan
// let -> masih dipakai, ini untuk mutable value
// const -> masih dipakai, ini untuk immutable value

// Kapan kita pakai const daripada let?
// Kalau valuenya sudah tetap pakai const. Tapi, kalau masih bisa berubah, pakai let.

// let Jonas; outputnya : Undefined
// console.log(Jonas); outputnya: undefined
// Jonas = "JonasJohnson"; berikan kotak dengan label Jonas isi "JonasJohnson"
// console.log(Jonas); -> outputnya: JonasJohnson

// const Jerry = 'JerryJohnson';
// console.log(Jerry);
// Jerry = 'JohnsonJerry';
// console.log(Jerry);

// Variable itu must be descriptive -> Variable itu wajib pemberian namanya, itu harus memberikan informasi
// Ruby
// const first_name = "Jerry"; // camelCase -> penulisan variabel dengan sedikit style, firstName, workingPlaceAddress
// const lastName = "Johnson";
// let address = "Medan";
// console.log(firstName, lastName, address);

// address = "Jakarta";
// console.log(firstName, lastName, address);

// Operators in Javascript
// + - * /

// Number + Number => number
// Number + Char/string => string
// console.log(typeof(angka+huruf));

// TypeOf => buat ngetahuin, ini itu tipe datanya apa?
// Number + Number => Number
// console.log(angkaPertama + angkaKedua);

// console.log(angkaKedua - angkaPertama);

// Ketika pengurangan antara string dengan integer, itu hasilnya integer, walaupun dia string dan integer
// console.log(typeof(angkaKedua - huruf));

// Perkalian
// console.log(angkaPertama * angkaKedua); // -> outputnya:5
// Perkalian antara huruf dengan angka => number
// console.log(angkaKedua * huruf, typeof(angkaKedua * huruf));

// console.log(40+8+'23'-10, typeof(40+8+'23'-10));
// jalanin dari 40 + 8 = 48 number
// jalanin dari 48 + '23' = '4823' string
// jalanin lagi dari '4823' - 10 = 4813 number

// Pembagian
// console.log(huruf/angkaPertama)

// NULL
// console.log(typeof(null));

// Ctrl + / -> Commenting

//INI BELUM SELESAI -> Commented code itu, tidak akan dijalankan
// let testDoang;
// console.log(testDoang);

// Pangkat

// const angkaPertama = 2; //number
// const angkaKedua = 5; //number
// const huruf = '5'; //char atau string

// console.log(angkaKedua ** angkaPertama); // ini sama dengan 5 dipangkat 2 => outpunya berapa? 25

// Modulo -> sisa bagi dari pembagian
// console.log(angkaKedua % angkaPertama);

// Operator Precedences => basicly kalau kubilang, itu urutan pengerjaan dari mathematic di Javascript

// () * / + - **
// console.log((100+20)/24 - 100);
// Pertama kali, dia bakal ngerjain 100 + 20 = 120
// Keduanya (120/24 - 100), ngerjain 120/24 = 5;
// Terakhir (5 - 100) = -95
// Expected Output kita: 95

// Concentenate two/more strings; 
// Penjumlahan string
// Javascript -> string kalau misalkan dijumlah, itu dia bakal jadi concentenate

// console.log("Jerry" + " " + "Johnson" + " " + "Anak" + " " + "Mikroskil");

// String and Template Literals

// const Jakarta = "Jakarta Barat";
// const umur = 21;
// const alamat = Jakarta;
// const makananKesukaan = "apa aja, asal bisa dimakan";
// const jurusan = "Teknik Informatika";
// const semester = 7;

// console.log("Jerry" + " " + "Johnson" + " " + "Anak" + " " + "Mikroskil");
// console.log("Jerry Johnson usia " + umur + " adalah anak Mikroskil beralamat di " + alamat + " suka makan " + makananKesukaan + ", adalah jurusan " + jurusan + ", sekarang di semester " + semester);

// Template Literals `` (backtick) => mempunyai kelebihan, engga perlu ada +, kalau mau misalkan panggil sebuah variable, tinggal diawali dengan ${}
// console.log(`Jerry Johnson ${umur} adalah anak Mikroskil beralamat di ${alamat} suka makan ${makananKesukaan}, adalah jurusan ${jurusan} + sekarang di semester ${semester}`)

// di Javascript, itu ada BOOLEAN, boolean itu adalah TRUE and FALSE, umumnya dipergunakan di logical operator

// Data Type Converter

// Automatic Data Type Conversion
// console.log(10 + '5'); 

// console.log(5+Number('10'));
// console.log(Number('a')); // outputnya: NaN => Not A Number
// console.log(String(5120)); 


// 5 Falsy Values = 0 '' undefined null NaN
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// Truthy Value itu apa? Truthy value, itu adalah value yang menghasilkan value TRUE.

// Data type conversion dan data type Coercions
// Kita yang ngubah data type nya -> Data type conversion
// JS yang ngubah data typenya => Data type coercions

// const inputYear = '1991';
// console.log(inputYear + 18, typeof(inputYear + 18))

// Kita yang ngubah, bukan JS
// console.log(5+Number('10'));
// console.log(Number('a')); // outputnya: NaN => Not A Number
// console.log(String(5120));

// Boolean Logic, Logical Operator, Strict/Loose Equality

// AND dan OR => AND, itu dia engga mau tau, pokoknya, kalau ada 1 aja yang FALSE, dia jadi FALSE
// OR => dia itu, pokoknya kalau ada 1 true, dia TRUE

// AND &&
// true and true => true 
// true and false => false
// false and false => false

// OR ||
// true or true => true
// true or false => true
// false or false => false

// console.log(true && true && true);
// console.log(true && false && true);
// console.log(false && false && true);

// console.log(true || true || true);
// console.log(true || false || true);
// console.log(false || false || true);

// Logical Operator
// >= > < <=
// console.log(5>5); // false
// console.log(5>=5); // true

// console.log(4<5); // true
// console.log(4<=3); // true

// Strict vs Loose Operator

// == === | Loose, kurang ketat | Strict, ketat
// Strict, dia ada dua2nya
// Loose, dia cuman ngecek value doang, data typenya engga
// console.log(5 == 5);
// console.log(5 == '5');
// console.log(5 === '5');

// != !== | Loose, kurang ketat | Strict, ketat
// console.log(5 != 4);
// console.log(5 != '4');
// console.log(5 !== '5')

// Statements VS Expression
// Statements => dia engga menghasilkan value
// Expressions => dia menghasilkan value

// contoh expression:
// const angka = 10;
// const angkaPenjumlahan = 10 + 5;

// Ternary Operator -> If else tapi versi expression;
// If else, itu statement;

// const tinggi = 170;

// if(tinggi >= 200){
//   console.log("Anda setinggi pemain basket NBA");
// } else if(tinggi >= 100 && tinggi < 200) { // true && true = true
//   console.log("Tinggi anda, manusia biasa saja");
// } else{
//   console.log("Anda terlalu pendek");
// }

// const inputYear = prompt('Masukkan tahun lahirmu');
// let output = ''

// if(inputYear >= 2010){
//   output = "Anda masuk generasi Zillenial" // expression
// } else if(inputYear >= 2000 && inputYear < 2010){
//   output = "Anda generasi Milenial"
// } else if(inputYear >= 1990 && inputYear < 2000){
//   output = "Anda masuk generasi 90an"
// } else{
//   output = "Anda sembarang memasukkan input atau input tidak terdeteksi"
// }

// Ternary Operator -> sebuah operator, if else gitu, tapi dia bentuknya expression

// Boolean ? (Condition when True) : (Condition When False)
// const benar = true;

// let hasilDecision = benar ? "Aku adalah kondisi benar" : "aku adalah kondisi salah"

// console.log(`Halo namaku adalah Jerry Johnson ${benar ? "Aku adalah kondisi benar" : "aku adalah kondisi salah"}`)

let massMark, heightMark, massJohn, heightJohn;
console.log(massMark, heightMark, massJohn, heightJohn)
massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;
console.log(massMark, heightMark, massJohn, heightJohn);
let BMIMark = massMark / (heightMark**2);
let BMIJohn = massJohn / (heightJohn**2);
console.log(`BMI dari Mark adalah: ${BMIMark}
BMI dari John adalah ${BMIJohn}`)

