console.clear();

/*
If - palyginimas

Palyginimo operatoriai:
visi: >, <, >=, <=, ==, ===, !=, !==
naudotini: >, <, >=, <=, ===, !=
nenaudotini: ==, !==

Kodo sablonai:
if () {}
if () {} else {}
*/

if (4>2) {
    console.log('taip');
}

//Jeigu if netenkinamas tai tada spausdina antra varianta 'else'

if (7>10) {
    console.log('asd');
} else {
    console.log('dsa');
}

const userAge = 10;
const ageLimit = 18;

if (userAge >= ageLimit) {
    console.log('uzeik');
} else {
    console.log(`dar palauk ${ageLimit - userAge} metu`);
}

const diena = 1;

if (diena === 1) {
    console.log('pirmadienis');
} else {
    console.log('antradienis');
}

if (diena === 4) {
    console.log('pirmadienis');
} else {
    console.log('antradienis');
}


// Kodo nestinimas

const arSvieciaSaule = true;
const arLyja = false;

let kaDaryti = 'nezinau';

if (arSvieciaSaule) {
    kaDaryti = 'eisim i kiema';
} else {
    kaDaryti = 'kodinsim';
}

console.log(kaDaryti);

if (arLyja) {
    kaDaryti = 'eisim i kiema';
} else {
    kaDaryti = 'kodinsim';
}

console.log(kaDaryti);

console.log('---------------');


const day = 2;

if (day === 1) {
    console.log('pirm');
} else {
    if (day === 2 ) {
        console.log('ant');
    } else {
        if (day === 3) {
           console.log('trec');
        }      
        console.log('nieko');
    }
}

console.log('------------------------');

const dd = 2;
let kokiaDiena = 'nezinau';

if (dd === 1) {
    kokiaDiena = 'pirmadienis';
}
if (dd === 2) {
    kokiaDiena = 'antradienis';
}
if (dd === 3) {
    kokiaDiena = 'treciadienis';
}
console.log(kokiaDiena);

function kokiaSavaitesDiena(dienosNr) {
    const dienuPavadinimai = [
        'pirmadienis',
        'antradienis',
        'treciadienis',
        'ketvirtadienis',
        'penktadienis',
        'sestadienis',
        'sekmadienis',
    ];
    const savaitesDiena = dienuPavadinimai[dienosNr -1];

    if (savaitesDiena === undefined) {
        return 'tokios dienos nera';
    } else {
        return savaitesDiena;
    }
}

console.log(kokiaSavaitesDiena(1));


const siandien = 4;
const dienuPavadinimai = [
    'pirmadienis',
    'antradienis',
    'treciadienis',
    'ketvirtadienis',
    'penktadienis',
    'sestadienis',
    'sekmadienis',
];

const savaitesDiena = dienuPavadinimai[siandien -1];
console.log(kokiaSavaitesDiena(siandien));


console.clear();

if ('Labas' == 'labas') {
    console.log('taip');
} else {
    console.log('ne');
}


if ('888' == 888) {
    console.log('taip');
} else {
    console.log('ne');
}
if ('888' === 888) {
    console.log('taip');
} else {
    console.log('ne');
}

// kai yra dviguba lygybe jis numeta kabutes ir viduje mato toki pati teksta o su triguba lygybe lygina ir kabutes

// loginiai operatoriai: && (and), || (or), ! (not)

if (4 > 2 && 8 < 20) {
    console.log('and');
}

if (4 > 2) {
    if (8 < 20) {
        console.log('and');
    }
}

if (1 < 0 || 2 < 4) {
    console.log('suo');
}

if (1 === 1 && 2 === 3 || 4 === 4) {
    console.log('mix');
}


const a = true;

if (!a) {
    console.log('taip');
} else {
    console.log('ne');
}



const error = true;

if (error) {
    console.log('ERROR');
} else {
    console.log('all good');
}

if (!error) {
    console.log('ERROR');
} else {
    console.log('all good');
}

//visi skaiciai yra true isskyrus 0 ir NaN (not a number)
//visi stringai (raides) true isskyrus tuscia
//visos function yra true
//visi array yra true
//visi object yra true
//null - false, undefined - false
if (8) {
    console.log('true');
} else {
    console.log('false');
}

if (0) {
    console.log('true');
} else {
    console.log('false');
}



const nameInputValue = 'asdasds';

if (!nameInputValue) {
    console.log('true');
} else {
    console.log('false');
}
const negative = !!nameInputValue;
console.log(negative);



console.log('--------------------------');
