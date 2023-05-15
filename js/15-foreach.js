console.clear();

const marks = [10, 2, 8, 4, 6];
const words = ['labas', 'rytas', 'lietuva'];

//for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
//}

function pavadinimas(item, index, list) {
    console.log(`reiksme ${item} yra ${index} is ${list.length}`);
}

marks.forEach(pavadinimas);
words.forEach(pavadinimas);
//    console.log(item, index, originalList, d);
//}); 


