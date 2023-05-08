console.clear();

/*
FOR - loop/ciklas
Kartojame oeracijas tiek, kiek reikia, arba tiek, kiek numatyta kartu.
*/

const marks = [10, 2, 8, 4 ,6];

//0..4
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

let sum = 0;
let i = -1;

sum += marks [++i];
sum += marks [++i];
sum += marks [++i];
sum += marks [++i];
sum += marks [++i];
console.log(sum);

console.clear();
console.log('-----------------');

const pazymiai = [10, 2, 8, 4, 6, 1, 3, 5, 7, 9];
const kasKelintas = [1];

for (let i = 0; i < pazymiai.length; i++) {
    if (i % kasKelintas === kasKelintas - 1) {
        console.log(i, '-', pazymiai[i]);
    }
}