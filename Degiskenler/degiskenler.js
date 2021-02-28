console.log("let tipi: ");
//let tipi parantezler içinde kendine öz değeri alır.
let a = 2;

if (a == 2) {
    let a = 3;
    console.log(a);
}
console.log(a);
console.log("var tipi: ");
//var tipi önceden tanımlanan değeri ezer.
var sayi = 2;
if (sayi == 2) {
    var sayi = 3;
    console.log(sayi);
}
console.log(sayi);

console.log("const tipi: ");
const s = 2;
//const olarak tanımlanan sayi değeri değişmeyen bir değer olarak tanıtıldı o yüzden değeri değiştirilemez. 
//Ancak let tipiyle bunu parantezler içinde sağlayabiliriz.
if (s == 2) {
    let s = 3;
    console.log(s);
}
console.log(s);
