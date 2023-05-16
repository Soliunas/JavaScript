console.clear();

const x = 7;
const y = 5; 

//function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${x} + ${y} = ${sum(x, y)}`);

//anonimous function
const diff = function(a, b) {
    return a - b;
}
console.log(`${x} - ${y} = ${diff(x, y)}`);

//arrow function
const multi = (a, b) => {
    return a * b;
}
console.log(`${x} * ${y} = ${multi(x, y)}`);

//arrow function
//jeigu yra tik viena procedura, tai galima nerasyti {return}
const div = (a, b) => a / b;
console.log(`${x} / ${y} = ${div(x, y)}`);

//arrow function
//jeigu yra tik vienas parametras, tai galima nerasyti ()
const sqr = a => a * a;
console.log(`${x}^2 = ${sqr(x)}`);

console.log('-------------------------------');

function firstLetter(str) {
    return str[0];
}
console.log('labas', '->', firstLetter('labas'));

console.log('---------------------------------');

const firstLetter = function (str) {
    return str[0];
}
console.log('labas', '->', firstLetter('labas'));

console.log('-----------------------------------');

const firstLetter = str => str[0];
console.log('labas', '->', firstLetter('labas'));

console.log('------------------------------------------');

function isOld(age) {
    if (age >= 18) {
       return 'old';
    }
    return 'young';     
}
console.log(50, '->', isOld(50));
console.log(50, '->', isOld(50));

console.log('----------------------------------------');

function shouldIPush(list, number) {
    if (number % 2 === 0) {
        list.push(number);
    }
    return list;
}
console.log([], 4, '->', shouldIPush([], 4));
console.log([4], 3, '->', shouldIPush([4], 3));
console.log([10, 20], 14, '->', shouldIPush([10, 20], 14));

console.log('----------------------------------------');


function calc(n1, operation, n2) {
    const funcs = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '**': (a, b) => a ** b,
    }
    
    return funcs[operation](n1, n2);
}
    /*
    if (operation === '+') {
        return n1 + n2;
    }
    if (operation === '-') {
        return n1 - n2;
    }
    if (operation === '*') {
        return n1 * n2;
    }
    if (operation === '/') {
        return n1 / n2;
    }
    if (operation === '**') {
        return n1 **n2;
    }
    */

console.log(`7 + 5 = ${calc(7, '+', 5)}`);
console.log(`7 - 5 = ${calc(7, '-', 5)}`);
console.log(`7 * 5 = ${calc(7, '*', 5)}`);
console.log(`7 / 5 = ${calc(7, '/', 5)}`);
console.log(`7 ** 5 = ${calc(7, '**', 5)}`);