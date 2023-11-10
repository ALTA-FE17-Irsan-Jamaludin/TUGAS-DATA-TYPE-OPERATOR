// Problem 4 - Menghitung Luas Segitiga
// Andi menggambar sebuah segitiga yang alasnya berukuran alas cm
//  dan tingginya berukuran tinggi cm. Ia ingin menghitung luas dari segitiga tersebut,
//  bantulah Andi untuk menghitung luas segitiga!

const luasSegitiga = (a: number, t: number): number | string => (1 / 2) * a * t + "cm";
console.log(luasSegitiga(5, 7));
