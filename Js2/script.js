// //Nesne çalışması

// console.log("Kullanıcı Bilgilerine Erişme Arayüzü ");


// let Kullanıcı1 = {

//     "Ad" : "Yusuf",
//     "Soyad" : "Tetik",
//     "Yaş" : "23",
   
//     "Adres" : {
//         "Şehir" : "Bursa",
//         "İlçe" : "İnegöl",
//     },
//     "Hobiler" : ["Seyahat","Luck ile oynamak","Spor"]

// };

// let Kullanıcı2 = {

//     "Ad" : "Halil",
//     "Soyad" : "Çalışkan",
//     "Yaş" : "25",
//     "Adres" : {
//         "Şehir" : "İstanbul",
//         "İlçe" : "Validebağ",
//     },
//     "Hobiler" : ["Seyahat","Luck ile oynamak","Spor"]

// };



// console.log("İsim : " + Kullanıcı1.Ad);
// console.log("Soyisim : "+Kullanıcı1.Soyad);
// console.log("Yaş" + Kullanıcı1.Yaş);
// console.log("Şehir : " + Kullanıcı1.Adres.Şehir);
// console.log("İlçe : "+ Kullanıcı1.Adres.İlçe);
// console.log("En sevdiğin hobin: " +Kullanıcı1.Hobiler[1]);

// console.log("---------------------");

// console.log("İsim : " + Kullanıcı2.Ad);
// console.log("Soyisim : "+Kullanıcı2.Soyad);
// console.log("Yaş" + Kullanıcı2.Yaş);
// console.log("Şehir : " + Kullanıcı2.Adres.Şehir);
// console.log("İlçe : "+ Kullanıcı2.Adres.İlçe);
// console.log("En sevdiğin hobin: " +Kullanıcı2.Hobiler[1]);


// Uygulama: Nesneler (Objects)

/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %20)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2025
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 16 Pro
        ürün url: http://abc.com/iphone-16-pro
        ürün fiyatı: 75000

        ürün id: 6
        ürün başlığı: IPhone 16 Pro Max
        ürün url: http://abc.com/iphone-16-pro-max
        ürün fiyatı: 85000

    müşteri:
        müşteri id: 12


    sipariş id: 102
    sipariş tarihi: 30.11.2025
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 16 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 85000

    müşteri:
        müşteri id: 12    

*/

let siparis1 = {

    "id" : 11 ,
    "tarih" : "31.12.2025",
    "odeme_sekli" : "kredi kartı",
    "müsteri_id" : 12,
    "kargo_adresi" : {
        "mahalle" : "Yahya kaptan mah",
        "şehir" : "Kocaeli",
        "ilçe" : "İzmit",
    },
    "ürüler" : [
        {

        "urun_id": 5,
        "urun_adi": "IPhone 15 Pro",
        "urun_url": "http://abc.com/iphone-16-pro",
        "fiyat": 75000,
        
        },
        {

        "urun_id": 6,
        "urun_adi": "IPhone 16 Pro Max",
            "urun_url": "http://abc.com/iphone-16-pro-max",
            "fiyat": 85000
        }

    ]
}

let siparis2 = {

    "id" : 11 ,
    "tarih" : "31.12.2025",
    "odeme_sekli" : "kredi kartı",
    "müsteri_id" : 12,
    "kargo_adresi" : {
        "mahalle" : "Yahya kaptan mah",
        "şehir" : "Kocaeli",
        "ilçe" : "İzmit",
    },
    "ürüler" : [
        {

        "urun_id": 5,
        "urun_adi": "IPhone 16 Pro",
        "urun_url": "http://abc.com/iphone-16-pro",
        "fiyat": 75000,
        
        }
    ]
}

let siparis1_sepettutarı = (siparis1.ürüler[0].fiyat + siparis1.ürüler[1].fiyat)*1.2;   //Sepet 1 tutarını hesaplama
console.log("Sepet = " + siparis1_sepettutarı + " tl");

let siparis2_sepettutarı = (siparis2.ürüler[0].fiyat)*1.2;  //Sepet 2 tutarını hesaplama
console.log("Sepet = " + siparis2_sepettutarı + " tl");

let toplam_alisveris = (siparis1_sepettutarı+siparis2_sepettutarı);
console.log(`idsi 12 olan kişinin toplam alışveriş tutarı ${toplam_alisveris} tl'dir.)`);





