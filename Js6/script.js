// //Function Constructure
 
// function KisiES5 (ad, soyad, meslek, dogumYili)
// {
//     this.ad = ad;
//     this.soyad = soyad;
//     this.meslek = meslek;
//     this.dogumYili = dogumYili;
//     this.yasHesapla = function()
//     {
//         let tarih = new Date().getFullYear();
//         return tarih - this.dogumYili;
//     }
 
// }

// let Yusuf = new KisiES5("Yusuf", "Tetik", "Ogrenci", 2001);
// let Halil = new KisiES5("Halil","Çalışkan","Yazılımcı" , 1999);

// console.log(Yusuf);
// console.log(Halil.yasHesapla());

// // Class

// class KisiES6 
// {
//     constructor(ad, soyad, meslek, dogumYili)
//     {
//         this.ad = ad;
//         this.soyad = soyad;
//         this.meslek = meslek;
//         this.dogumYili = dogumYili;
//         console.log("Nesne oluşturuludu");
//     }

//     yasHesapla()
//     {
//         let tarih = new Date().getFullYear();
//         return tarih - this.dogumYili;
//     }
// }

// let kisi1 = new KisiES6("Cansu", "Ardıç", "Oğrenci", 2001);
// let kisi2 = new KisiES6("Bilal","Barışman","Ogrenci",2001);

// console.log(kisi2.meslek);
// console.log(kisi1.ad);
// console.log(kisi2.yasHesapla());


    class Kisi 
    {
        constructor(ad, soyad, meslek, dogumYili)
        {
            this.ad = ad;
            this.soyad = soyad;
            this.meslek = meslek;
            this.dogumYili = dogumYili;
            console.log("Nesne oluşturuludu");
         }

        yasHesapla()
        {
            let tarih = new Date().getFullYear();
            return tarih - this.dogumYili;
        }


        get meslek()
        {
            return this._meslek;
        }
        set meslek(value)
        {
            if (value == "ogrenci")
            {
                console.log("Yaşı en fazla 24 olabilir.");
                console.log("deneme");
            }
            this._meslek = value;
        }
        
        
    }
    
    let kisi1 = new Kisi ("Yusuf", "Tetik", "ogrenci","2001");
    console.log(kisi1.ad);
    console.log(kisi1.meslek);
    console.log(kisi1.dogumYili);