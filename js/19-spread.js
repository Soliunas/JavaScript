console.clear();

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const marksCopy = marks.map(m => m); //kopija
console.log(marksCopy);

marks[0] = 100;
console.log(marks);
console.log(marksCopy);

const marksCopySpread = [...marks]; //irgi kaip uzrasyt kopija
console.log(marksCopySpread);

marks[0] = 1000;
console.log(marks);
console.log(marksCopy);
console.log(marksCopySpread);

const user = {
    name: 'Petras',
    age: 99,
    isMarried: true,
};

const userCopy = user;

console.log(user);
console.log (userCopy);

user.name = 'Maryte';

console.log(user);
console.log (userCopy);

const user2 = {};

for (const key in user) {
    user2[key] = user[key];
}
console.log('----------');
console.log(user);
console.log (userCopy);
console.log(user2);
console.log('-----------');

user.name = 'Petras';
console.log('----------');
console.log(user);
console.log (userCopy);
console.log(user2);
console.log('-----------');

const user3 = {...user};

console.log(user);
console.log(user3);
console.log('------------');

user.name = 'Maryte';
console.log(user);
console.log(user2);

const arr = []; //tie patys sliaukstai turi but arr [] obj {}
const arrCopy = [...arr];

const obj = {};
const objCopy = {...obj};

console.clear();

const  words = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau', 'siandien'];

const first = words[0]; //kaip paimti zodzius is const kuriu nori
const second = words[1];
const third = words[2];
const rest = [words[3], words[4], words[5]];

console.log(first, second, third, rest);

const [pirmas, antras, trecias, ...like] = words; //taip irgi gali paimti zodzius is masyvo const (cia spread skaitosi).
                                                  //pirmam zodziui 0 reiksme, antram pirma ir t.t.

console.log('---------------');
console.log(pirmas, antras, trecias, like);

console.log('----------------');

const numbers = [10, 20, 30, 40];
//const n1 = numbers[0];
//const n2 = numbers[1];
//const n3 = numbers[2];
//const n4 = numbers[3];
 
const [n1, n2, n3, n4, ...likeN] = numbers; //...likeN grazina tuscia, kadangi daugiau reiksmiu neduota
console.log(n1, n2, n3, n4, likeN);

console.log('------------');

const car = {
    model: 'Audine',
    color: 'red',
    driver: 'Chuck',
    coPilot: 'gezas',
    price: 100,
};

//const model = car.model; //istrauki is masyvo car masinos modeli, spalva, ka nori
//const color = car.color;
//const price = car.price;

const {model, color, price} = car; //su spread metodu taip istrauki is car reikalingas reiksmes

console.log(model, color, price);

console.clear();

const student1 = {
    name: 'Petras',
    marks: [10, 2, 8],
};

const student2 = {...student1}; //nukopini student 1 duomenis

console.log(student1);
console.log(student2);

student1.marks.push(4); //ispaudi nauja pazymiu reiksme i Petro pazymius

console.log(student1);
console.log(student2);

