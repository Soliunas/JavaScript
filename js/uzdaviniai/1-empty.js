console.clear();

function tusciaFunkcija () {
    return false;
}

console.log(tusciaFunkcija());
console.log(tusciaFunkcija(1));
console.log(tusciaFunkcija('asdas'));
console.log(tusciaFunkcija(true));

//funkcija pavadinimu daugyba

function multiply(a, b) {
    const errors = [];

    if (typeof a !== 'number') {
        errors.push 'ERROR: pirmas parametras ne skaicius';
    }

    if (typeof b !== 'number') {
        errors.push 'ERROR: antras parametras ne skaicius';
    }
    
    if (typeof c !== 'number') {
        errors.push 'ERROR: antras parametras ne skaicius';
    }
    const result = a * b;

    return result;
}

console.log(multiply(7, 5));
console.log(multiply(-7, 5));
console.log(multiply(-7, -5));
console.log(multiply(7, -5));

console.log(multiply('labas', 5));
console.log(multiply(5, 'labas'));
console.log(multiply('labas', 'rytas'));


function miltyple(a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras ne skaicius';
    }
    if (a === Infinity || a === - Infinity) {
        return 'ERROR: pirmas parametras negali buti Infinity';
    }
    if ('' + a === 'NaN') {
        return 'ERROR: pirmas parametras negali buti NaN';
    }
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras ne skaicius';
    }
    if (b === Infinity || b === -Infinity) {
        return 'ERROR: antras parametras negali buti Infinity'
    }
    if ('' + b === 'NaN') {
        return 'ERROR: antras parametras negali buti NaN';
    }

    const result = a * b;
    return result;
}
console.log(multiply(Infinity, 5));

console.clear();
