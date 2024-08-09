
var ogr1_isim = "Yusuf";
var ogr1_soyisim = "Tetik";
var ogr1_dt = 2001;
var ogr1_vize = 68;
var ogr1_final = 80;
var ogr1_ort= (ogr1_final*60)/100 + (ogr1_vize*40)/100;
var dersigeçtimi = (ogr1_ort >= 60);

console.log(ogr1_isim + " " +ogr1_soyisim);
console.log(2024 - ogr1_dt );
console.log(parseInt(ogr1_ort));
console.log(dersigeçtimi);


var mesaj = `Burada ${ogr1_isim} adlı öğrencinin ${ogr1_ort} ile dersi geçip geçemediğini görürüz.`;

console.log(mesaj);

console.log("--------------------------String Metodları-------------------------------");

var linkedln = "https://www.linkedin.com/in/yusuftetik/";
var github = "https://github.com/Yusuf-Tetik";
var edu = "Javascript eğitimi alıyorum gün 1";

//Kaç karakterden oluşuyor ?
var sonuc = edu.length;
console.log(`Karakter sayısı = ${sonuc}`);

// Kelimeleri ayır ve kaç kelime olduğunu yazdır.
sonuc = edu.split(' ');
console.log(sonuc);
console.log(sonuc.length);

//https ile mi başıyor ?
sonuc = linkedln.startsWith("https");
console.log(sonuc);

//İki değişkeni birleştirip string bilgi oluşturun.

edu = edu.replaceAll(' ','-');
linkedln2 = linkedln.replace('yusuftetik','halilecaliskan')
console.log(linkedln);
console.log(linkedln2);
edu = edu.toLowerCase();
console.log(`${github}/${edu}`);

console.log("--------------------------Number Metodları-------------------------------");

var sayı = 23.5694831;

sonuc = sayı.toPrecision(5); // Total kaç basamak gelsin (yuvarlama yapar!)
console.log(sonuc);
sonuc = sayı.toFixed(2); // Ondalıklı sayı kaç basamak gelsin ?
console.log(sonuc);

console.log("--------------------------  Diziler  -------------------------------");

// Diziler

// let urun1 = "IPhone 15";
// let urun2 = "IPhone 16";
// let urun3 = "IPhone 17";

let urunler = ["IPhone 15", "IPhone 16", "IPhone 17"];
let fiyatlar = [50000, 60000, 70000];
let renkler = ["gold","black","silver"];



//sonuc = `${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}`;
//sonuc = `${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]}`;
//sonuc = `${urunler[2]} - ${fiyatlar[2]} - ${renkler[2]}`;

let urun1 = [
    "IPhone 15", 
    50000, 
    ["gold","black","silver"]
];

let urun2 = ["IPhone 16", 60000, "black"];
let urun3 = ["IPhone 17", 70000, "silver"];

// güncelleme

urun1[0] = "IPhone 15 Pro";

sonuc = `${urun1[0]} ${urun1[1]} ${urun1[2][0]}`;

console.log(sonuc);


// Dizi Metotları

// let ogrenciler = ["Çınar","Yiğit","Ada"];

// let sonuc;

// sonuc = ogrenciler.length;
// sonuc = ogrenciler.toString();
// sonuc = ogrenciler.join(' ');

// eleman silme
// sonuc = ogrenciler.pop(); // ilk elemanı silme
// sonuc = ogrenciler.shift(); // son elemanı silme

// eleman ekleme
// sonuc = ogrenciler.push("Sena"); // listenin sonuna ekler
// sonuc = ogrenciler.unshift("Sena"); // listenin başına ekler

//eleman arama
// sonuc = ogrenciler.indexOf('Yiğit'); // Bulduğu ilk yiğit verisinin indexsini getirir
// sonuc = ogrenciler.lastIndexOf('Yiğit'); // son yiğit indexini getirir
// sonuc = ogrenciler.includes('Yiğit'); //yiğit listede var mı ?

// silme, ekleme

// sonuc = ogrenciler.splice(0,1,"Ali","Canan");

// console.log(sonuc);
// console.log(ogrenciler);



// 1- "Kiraz,Karpuz,Kavun,Erik" elemanlarına sahip bir dizi oluşturunuz.
let meyveler = ["Kiraz","Karpuz","Kavun","Erik","Üzüm"];

// 2- Dizi kaç elemanlıdır?


sonuc = meyveler.length;

// 3- Dizinin ilk ve son elemanlarını yazdırınız.
sonuc = meyveler[0];
sonuc = meyveler[meyveler.length - 1];

// 4- Kavun dizinin bir elemanımıdır?
sonuc = meyveler.indexOf("Kavun");
sonuc = meyveler.includes("Kavun"); //Listenin bir elemanı mıdır ?

// 5- Çilek elemanını dizinin sonuna ekleyiniz.
// meyveler.push("Çilek");
// meyveler[meyveler.length] = "Çilek";


// 6- Dizinin son 2 elemanını siliniz.
// meyveler.pop();
// meyveler.pop();
// meyveler.splice(meyveler.length - 2, 2);
// console.log(meyveler);

// 7- Aşağıdaki bilgileri bir dizide saklayınız ve 
//    her öğrencinin yaşını ve not ortalamasını hesaplayınız.

/*
    Öğrenci 1: Yiğit Bilgi 2010 [60,90,80]
    Öğrenci 2: Ada Bilgi 2012 [70,80,80]
    Öğrenci 3: Çınar Turan 2017 [60,50,80]
*/

let ogrenci1 = [
    "Yiğit",
    "Bilgi",
    2010, 
    [60,90,80]
]

let ogrenci2 = [
    "Ada",
    "Bilgi",
    2012, 
    [50,80,80]
]

let ogrenci3 = [
    "Çınar",
    "Turan",
    2017, 
    [60,50,80]
]

let ogrenciler = [ogrenci1, ogrenci2, ogrenci3];

// yaşlar
console.log(2025 - ogrenci1[2]);
console.log(2025 - ogrenci2[2]);
console.log(2025 - ogrenci3[2]);

// notlar
let yigit_not = (ogrenci1[3][0] + ogrenci1[3][1]  + ogrenci1[3][2]) / 3; 
let ada_not = (ogrenci2[3][0] + ogrenci2[3][1]  + ogrenci2[3][2]) / 3; 
let cinar_not = (ogrenci3[3][0] + ogrenci3[3][1]  + ogrenci3[3][2]) / 3; 

console.log(yigit_not, ada_not, cinar_not);