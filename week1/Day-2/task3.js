let nilai = [10, 6, 4];
let maximal = Math.max.apply(Math, nilai);
let minimal = Math.min.apply(Math, nilai);

let median = Math.floor(nilai.length / 2);
nilai = [...nilai].sort((a, b) => a - b);
if (nilai.length % 2 !== 0) {
  console.log("Nilai Tengah : ", nilai[median]);
} else {
  console.log(
    "Nilai Tengah : ",
    parseFloat((nilai[median - 1] + nilai[median]) / 2)
  );
}

let num = 0;
let jmlNum = nilai.length;
for (let i = 0; i < nilai.length; i++) {
  num += nilai[i];
}

console.log("Max : ", maximal);
console.log("Min : ", minimal);
console.log("Median : ", num / jmlNum);
