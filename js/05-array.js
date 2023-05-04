console.clear();
/*
ARRAY - arėjus (slangas), sąrašas, listas (slangas), matrica, masyvas.

Masyvas prasideda index=0;

array.length - masyve esanciu reiksmiu kiekis;
*/

const empty = [];
console.log(empty);

const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

//taip, kaip zemiau parodyta, stengtis nenaudoti
const random = [1, 'antras', 3, 4, 3.16, 'asdasdadsg'];
console.log(random);

const vardai = ['Petras', 'Maryte', 'Ona'];
console.log(vardai);

const vardas1 = vardai[1];
console.log(vardas1);

const vardas0 = vardai[0];
console.log(vardas0);

const vardas2 = vardai[2];
console.log(vardas2);

const marks = [10, 2, 8, 4, 6];
console.log(marks [1]);
console.log(marks [0]);
console.log(marks [2]);
console.log(marks [3]);
console.log(marks [4]);
console.log(marks [5]);

console.clear();

const marks1 = [10, 9, 8];
const marks2 = [6, 7, 8];
const marks3 = [5, 5, 5];

function average(marks) {;
    let sum = 0;
    sum += marks[0];
    sum += marks[1];
    sum += marks[2];
    return sum / marks.length;
}

console.log('vidurkis 1:', marks1, '=', average (marks1));
console.log('vidurkis 2:', marks2, '=', average (marks2));
console.log('vidurkis 3:', marks3, '=', average (marks3));

console.clear();

const dict1 = ['pirmas', 'zodis', 'labas'];
const dict2 = ['labas', 'rytas', 'lietuva'];
const dict3 = ['labas', 'rytas', 'suraitytas'];

//zodynas: a, b, c.

function dictionary(wordList) {
    console.log(wordList);
    let result = 'zodynas: ';
    result += wordList[0] + ', ';
    result += wordList[1] + ', ';
    result += wordList[2] + '.';

    return result;

}

console.log(dictionary(dict1));
console.log(dictionary(dict2));
console.log(dictionary(dict3));

console.clear();

console.log(7+5);
console.log(7-5);
console.log(7/5);
console.log(7*5);

console.log('labas' + 777);
console. log('labas' - 777);

console.log(2**3);
console.log(9**2);
console.log(9**0.5);

console.clear();

const text = 'labas';
console.log(text);
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);

console.log(text.length);

console.clear();

