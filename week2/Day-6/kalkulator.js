const readline = require('readline');

let ab = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Kalkulator");
console.log("===========");
console.log("1. Tambah(+)");
console.log("2. Kurang(-)");
console.log("3. Bagi(/)");
console.log("4. Kali(*)");
console.log("5. Modulus(%)");

ab.question(`Pilihan anda : `, function(pilih) {
    console.log(`Anda Memilih Menu ${pilih}`);
    ab.question(`Masukkan Bilangan Pertama : `, function(bil1) {
        ab.question(`Masukkan Bilangan Kedua : `, function(bil2) {
            console.log("--------------------------------");
            console.log(`Bilangan Pertama Anda ${bil1}`);
            console.log(`Bilangan Kedua Anda ${bil2}`);
            console.log("--------------------------------");
            if (pilih == 1) {
                console.log(`Hasilnya : `, parseInt(bil1) + parseInt(bil2));
            } else if (pilih == 2) {
                console.log(`Hasilnya : `, parseInt(bil1) - parseInt(bil2));
            } else if (pilih == 3) {
                console.log(`Hasilnya : `, parseInt(bil1) / parseInt(bil2));
            } else if (pilih == 4) {
                console.log(`Hasilnya : `, parseInt(bil1) * parseInt(bil2));
            } else if (pilih == 5) {
                console.log(`Hasilnya `, parseInt(bil1) % parseInt(bil2));
            } else {
                console.log(`Pilihan Tidak Tersedia`);
            }

            ab.close();
        });
    });
});