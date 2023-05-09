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

console.clear();

console.log('5', parseInt('5'));
console.log(typeof '5', typeof parseInt('5'));

console.log('3.14', parseInt('3.14'));
console.log('3.14', parseFloat('3.14'));
console.log('777', parseFloat('777'));

console.log('labas', parseInt('labas'));
console.log('labas', parseFloat('labas'));

console.log('Infinity', parseFloat('Infinity'));
console.log('-Infinity', parseFloat('-Infinity'));

console.log('--------------------------------');

console.log('5', + '5');
console.log('3.14', + '3.14');
console.log('labas', + 'labas');
console.log('Infinity', + 'Infinity');
console.log('NaN', + 'NaN');

console.log('5', parseInt('5'), parseFloat('5'), + '5');
console.log('3.14', parseInt('3.14'), parseFloat('3.14'), + '3.14');
console.log('1/3', parseInt('1/3'), parseFloat('1/3'), + '1/3');
console.log('123abc', parseInt('123abc'), parseFloat('123abc'), + '123abc');
console.log('abc123', parseInt('abc123'), parseFloat('abc123'), + 'abc123');

console.log('-----------------------------');

for (let i = 0; i < 3; i += 0.1) {
    let suapvalintas = +i.toFixed(3);
    suapvalintas += 1
    console.log(suapvalintas, '-', i);
}

console.log('2eur', parseFloat('2eur'), + '2eur');
console.log('5$', parseFloat('5$'), + + '5$');

console.clear();


const text = 'labas!';

for (let i = 0; i < text.length; i ++ ) {
    console.log(i, '-', text[i]);
}

for (let i = text.length - 1; i >= 0; -- i) {
    console.log(i, '-', text[i]);

}

//text.length = 6

for (let i = 0; i < text.length; i ++) {
    const index = text.length - i - 1;
    console.log(i, '-', text[index]);
}

