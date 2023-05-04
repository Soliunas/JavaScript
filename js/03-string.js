console.clear();
/*
STRING-tekstas
*/
const username='Vardenis';
console.log(username);
const empty='';
console.log(empty);

const kabute1='kabute"';
console.log(kabute1);
const kabute2="kabute'";
console.log(kabute2);
const kabute12_1='kabute\' ir kabute"';
const kabute12_2="kabute' ir kabute\"";
console.log(kabute12_1);
console.log(kabute12_2);

const backslash1='\\';
const backslash2="\\";
console.log(backslash1);
console.log(backslash2);

//Sveiki, <vardas>!
const user1='Petras';
const user2='Maryte';
const user3='Jonas';
const user4='Ona';

const hi1='Sveiki, '+user1+'!';
console.log(hi1);
const hi2='Sveiki, '+user2+'!';
console.log(hi2);

const personName='Vardenis';
const personLastname='Pavardenis';
// Hi, I am Vardenis Pavardenis and I like you!
const personHi='Hi, I am '+personName+' '+personLastname+' and I like you!';
console.log(personHi);

const color=`red`;
console.log(color);
// naudoti backtick `` tada, kai reikia teksta parasyti per kelias eilutes

const vardas='vardas';
const pavarde='pavarde';
const personHi2=`hi i am ${vardas} ${pavarde}`;
console.log(personHi2);

const labas='labas rytas\rtau';
console.log(labas);
const labas2='labas rytas\ntau';
console.log(labas2);
const labas3='labas rytas\r\ntau';
console.log(labas3);

