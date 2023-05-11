console.clear();

//FUNKCIJA ISRINKT RAIDES

function fillterLetters (tekstas, raide) {
    if (typeof tekstas !== 'string') {
        return "pirmasis kintamasis netinkamo tipo";
    }
    if (tekstas.length > 100 || tekstas.length === 0) {
         return "pirmojo kintamojo reiksme yra netinkamo dydzio"; ;       
    }
    if (typeof raide !== 'number' && raide > 0) {
        return "antrasis kintamasis yra netinkamo tipo";
    }
    if (raide <= 0) {
        return "antras kintamasis turi but didesnis uz nuli";
    }
    if (tekstas.length < raide) {
        return "antras kintamasis turi buti ne didesnis uz pateikto teksto ilgi";
    }
    let atsakymas = '';
    //for (let i = raide - 1; i < tekstas.length; i = i + raide) {
    for (let i = raide -1; i < tekstas.length; i = i += raide) {
        atsakymas += tekstas[i];
        //const raides = tekstas[i];
    console.log(atsakymas);
    }
    return `${tekstas} ${raide}`;
}

console.log(fillterLetters('abcdefg', 2));
console.log(fillterLetters('abcdefghijkl', 3));
console.log(fillterLetters('abc', 0));
console.log(fillterLetters('abc', 4));
console.log(fillterLetters(1561, 2));


console.log('-------------------------');

//nd uzduotis

function calc(n1, operation, n2) {
    if (operation === '+'){
    return n1+n2;}
    if (operation === '-'){
    return n1-n2;}
    if (operation === '*'){
    return n1*n2;}
    if (operation === '/'){
    return n1/n2;}
    if (operation === '**'){
        return n1**n2;}
}

console.log(`7 + 5 = ${calc(7, '+', 5)}`);
console.log(`7 - 5 = ${calc(7, '-', 5)}`);
console.log(`7 * 5 = ${calc(7, '*', 5)}`);
console.log(`7 / 5 = ${calc(7, '/', 5)}`);
console.log(`7 ** 5 = ${calc(7, '**', 5)}`);