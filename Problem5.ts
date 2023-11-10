// Problem 5 - Menghitung Luas Permukaan Tabung
// Luas permukaan tabung dapat dikatakan sebagai luas dari jumlah sisi yang dimiliki tabung.

const luasPermukaanTabung = (r: number, T: number): number | string => 2 * 3.14 * r * (r + T) + "cm";
console.log(luasPermukaanTabung(4, 20));

// 2vr(r + t)
