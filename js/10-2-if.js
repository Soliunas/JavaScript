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

