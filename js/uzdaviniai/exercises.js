console.clear();

//Kintamuju inicijavimas:
//Sukurti 3 kintamuosius su skaiciaus tipo reiksmemis:

console.log(10, 20, 30)
console.log(11, 22, 33, 44);
console.log(101, 202, 303, 404, 505);

//Sukurti 3 kintamuosius su teksto tipo reiksmemis:

console.log('hola');
console.log('hola amygo');
console.log('hola amygo que tal?');

//Sukurti 3 saraso tipo kintamuosius su penkiomis skaiciu tipo reiksmemis:

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const moreNumbers = [6, 7, 8, 9, 10];
console.log(moreNumbers);
const aLotOfNumbers = [11, 12, 13, 14, 15];
console.log(aLotOfNumbers);

//Sukurti 3 saraso tipo kintamuosius su penkiomis teksto tipo reiksmemis:

const text = ['masina', 'dviratis', 'opelis', 'stalas', 'maniezas'];
console.log(text);
const moreText = ['kompas', 'kede', 'puodelis', 'tusinis', 'pakrovejas'];
console.log(moreText);
const evenMoreText = ['gele', 'namas', 'bonka', 'kamuolys', 'kepure'];
console.log(evenMoreText);

console.clear();

//Veiksmai su kintamaisiais
//Susumuoti visus skaiciaus tipo kintamuosius:

const nr1 = 10;
const nr2 = 9;
const nr3 = 8;
const nr4 = 7;
const nr5 = 6;
const nr6 = 5;
const nr7 = 4;
const nr8 = 3;
const nr9 = 2;
const nr10 = 1;

console.log(nr1+nr2+nr3+nr4+nr5+nr6+nr7+nr8+nr9+nr10);

//Sujungti visus teksto tipo kintamuosius taip, jog tarp ju butu sudarytas tarpas:

const tekst = 'labai';
const tekst2 = 'grazi';
const tekst3 = 'bet';
const tekst4 = 'vejuota';
const tekst5 = 'diena';

console.log(tekst + ' ' + tekst2 + ' ' + tekst3 + ' ' + tekst4 + ' ' + tekst5);

//Apskaiciuoti verte is sarasu kuriu verciu tipas yra skaiciai, pagal pateikta logika (1-2+3-4+5):

const smallNumber = [20];
const normalNumber = [90];
const averageNumber = [150];
const bigNumber = [300];
const massiveNumber = [750];

const value = smallNumber - normalNumber + averageNumber - bigNumber + massiveNumber;
console.log(value);

//Sujungti sarasu vertes, kuriu tipas yra tekstai, nuo saraso galo iki pradzios taip, jog tarp ju butu kablelis ir tarpas:

const pirmas = 'vienas';
const antras = 'du';
const trecias = 'trys';
const ketvirtas = 'keturi';

const Words = ketvirtas + ', ' + trecias + ', ' + antras + ', ' + pirmas; 

console.log(Words);

//Kintamuju palyginimas
//Lyginant, jei rezultatas tenkina palyginimo salyga, tai i console isvesti zodi "Pomidoras", o jei salyga nera tenkinama, isvesti sakini "Bandykite kita karta".
//Tarpusavyje palyginti skaiciaus tipo kintamuosius:

//a.:

const a = 3;
const b = 7;

if (a>b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

//b.:

if (a<b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

//c.:

if (a===b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

//d.:

if (a!==b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

//e.:

if (a<=b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

//f.:

if (a>=b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

//Isvesti teksto tipo kintamuju ilgius:



//Funkcijos
//Funkcija pavadinimu "tusciaFunkcija":

function tusciaFunkcija() {
    return true;
}
console.log(tusciaFunkcija());

