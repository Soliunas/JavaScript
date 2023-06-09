console.clear();

const marks = [10, 2, 12, 8, -4, 4, -7.5, 3.14, 0, 6];
console.log(marks);

const validMarks = [];

for (const mark of marks) {
    if (mark >= 1 && mark <= 10 && mark % 1 === 0) {
        validMarks.push(mark);
    }
}

for (const mark of marks) {
    if (mark < 1 || mark > 10 || mark % 1 !== 0) {
        continue;
    }
    validMarks.push(mark);
}
console.log(validMarks);

const filteredMarks = marks
.filter(m => m >= 1)
.filter(m => m <= 10)
//.filter(m => m % 1 === 0)
.filter(m => Number.isInteger(m));

console.log(filteredMarks);

console.log('-------------');

const names = ['Petras', 'donatas', 'sANDRA', 'lAuRyNaS', 'SiMoNa', 'Maryte', 'Jonas', 'Ona'];
const longNames = names
    .filter(n => n.length > 5)
    .filter(n => n[0] === n[0].toUpperCase ())
    .filter(n => n.slice(1) === n.slice(1).toLowerCase());
console.log(names);
console.log(longNames);
