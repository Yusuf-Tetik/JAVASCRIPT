// Uygulama:Fonksiyonlar

// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

// function kelimetekrarı(kelime, adet)
// {
//     for(let i = 0 ; i< adet; i++)
//     {
//         console.log(kelime);
//     }
// }

// kelimetekrarı("js candır",41);
    

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function alancevrehesaplama(uzun,kisa)
{
    let alan = uzun*kisa;
    let cevre = 2*(uzun+kisa);
    console.log(`Dikdörtgenin alanı: ${alan} m3tür. Çevresi ise ${cevre} metredir.`);
}

alancevrehesaplama(8,11);

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.

function yazitura()
{
    let random = Math.random();

    if (random >= 0.5)
    {
        console.log("Yazı kazandı!");
    }
    else
    {
        console.log("Tura kazandı!")
    }
}

yazitura();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function tambolen(sayi)
{
    let bolenler = [];
    for (let i = 2 ; i <sayi; i++)
    {
        if(sayi %i == 0)
        {
            
            bolenler.push(i);

        }
    }
    return bolenler; 
}

console.log(tambolen(80));



// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam() {
    let sonuc = 0;
    for(let i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }
    return sonuc;
}

let sonuc;
sonuc = toplam(10,20);
sonuc = toplam(10,20,30);
sonuc = toplam(10,20,30,40);

console.log(sonuc);