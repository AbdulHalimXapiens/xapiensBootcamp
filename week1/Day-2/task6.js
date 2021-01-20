let full = [
  1,
  2,
  33,
  44,
  55,
  33,
  44,
  22,
  44,
  33,
  2,
  77,
  66,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  89,
  3,
  3,
  8,
  9,
  75,
  4,
  3,
  2,
  2,
  1,
  3,
];

let kel1 = full.splice(0, 11);
let kel2 = full.splice(0, 11);
let kel3 = full.splice(0, 10);

kel1.sort(function (a, b) {
  return b - a;
});

kel2.sort(function (a, b) {
  return b - a;
});

kel3.sort(function (a, b) {
  return b - a;
});

console.log(kel1);
console.log(kel2);
console.log(kel3);
