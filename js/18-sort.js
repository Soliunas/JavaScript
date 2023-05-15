console.clear();

const abc = ['z', 'haha', 'h', 'j', 'b', 'a'];
abc.sort();

console.log(abc);

const marks = [10, 0, 3, 1, 21, 25, 13, 2, 8, 4, 6];
console.log(marks);

marks.sort((a, b) => a - b);
console.log(marks);

console.log('-----------------');

const students = [
     { name: 'Petras', age: 99 },
     { name: 'Maryte', age: 20 },
     { name: 'Jonas', age: 40 },
     { name: 'Ona', age: 77 },
];
console.log(students);

students.sort((a, b) => a.age - b.age);
console.log(students);

students.sort((a, b) => b.age - a.age);
console.log(students);

students.sort((a, b) => a.name > b.name);
console.log(students);