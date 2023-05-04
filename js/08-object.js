console.clear();

/*
Object - objektas
*/

const petras = ['Petras', 99, true];
const maryte = ['Maryte', 88, false];

//Sveiki, mano vardas VARDAS ir man KAZKIEK metai.
const s1 = `Sveiki, mano vardas ${petras[0]} ir man ${petras[1]} metai.`;
console.log(s1);

const s2 = `Sveiki, mano vardas ${maryte[0]} ir man ${maryte[1]} metai.`;
console.log(s2);

const jonas = {
    name: 'Jonas',
    age: 77,
    isMarried: false,
};

console.log(jonas);

console.log(jonas['age']);
console.log(jonas['name']);
console.log(jonas['isMarried']);

const random = {
    tekstas: 'Tekstas',
    skaicius: 777,
    arTiesa: true,
    kitasVariantas: 'mhm',
};

console.log(random ['tekstas']);
console.log(random ['skaicius']);
console.log(random ['arTiesa']);
console.log(random ['kitasVariantas']);

console.clear();

const student = {
    name: 'Chuck Norris',
    age: Infinity,
    movies: [
        {
            title: 'Walker: Texas ranger',
            year: 1990,
            actors: [
                'Chuck Norris 1',
                'Chuck Norris 2',
            ]
        },
        {
            title: 'Before me',
            year: -3000,
            actors: [
                'Chuck Norris 3',
                'Chuck Norris 4',
            ]
        },
        {
            title: 'Hell rises',
            year: 2000,
            actors: [
                'Chuck Norris 5',
                'Chuck Norris 6',
            ]
        }
    ]
};

console.log(student['movies']);
console.log(student['name']);
console.log(student['age']);

console.log(student.movies);
console.log(student.name);
console.log(student.age);

console.log(student.movies.length);

console.clear();

const auto = {
    marke: 'Audi',
};
console.log(auto);

auto.marke = 'Audine';
console.log(auto);

auto.kaina = 1000;
console.log(auto);
console.log(auto.kaina);

auto.color = 'red';
console.log(auto);
console.log(auto.color);

auto.color = 'blue';
console.log(auto);
console.log(auto.color);

delete auto.color;
console.log(auto);

delete auto.kaina;
console.log(auto);

auto.savininkai = [];
console.log(auto);

