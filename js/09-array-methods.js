console.clear();

const marks = [];
console.log(marks);

marks.push(10);
marks.push(2);
marks.push(8);
console.log(marks);

marks.unshift(9);
marks.unshift(8);

marks.shift();
console.log(marks);

marks.pop();
console.log(marks);

console.log(marks[0]);
console.log(marks.at(0));

console.log(marks);
console.log(marks.includes(1));
console.log(marks.includes(2));
console.log(marks.includes(5));
console.log(marks.includes(9));

console.log(marks);
console.log(marks.indexOf(8));
console.log(marks.indexOf(9));
console.log(marks.indexOf(10));
console.log(marks.indexOf(2));


console.log(marks);
console.log(marks.join);

const visiPazymiai = marks.join();

console.log(visiPazymiai);
console.log(typeof visiPazymiai);

const visiPazymiai2 = marks.join();
console.log(visiPazymiai2);


const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(skaiciai);

console.log(skaiciai.reverse());

const zodziai = ['simas', 'petras'];
console.log(zodziai);

console.log(zodziai.reverse());


console.log(skaiciai);
console.log(skaiciai.slice(0));
console.log(skaiciai.slice(1));
console.log(skaiciai.slice(4));
console.log(skaiciai.slice(-4));
console.log(skaiciai.slice(2, 4));


console.log(skaiciai);
console.log(skaiciai.splice(2, 0, 'x'));
console.log(skaiciai);
console.log(skaiciai.splice(3, 1, 'x'));
console.log(skaiciai);
console.log(skaiciai.splice(-2, 2));
console.log(skaiciai);
console.log(skaiciai.splice(0, 1, 100));
console.log(skaiciai);
skaiciai[0] = 10;
console.log(skaiciai);

console.clear();
