console.clear();

// Math.floor(Math.random() * (max - min + 1) + min);

// pvz.
// let a = Math.floor(Math.random() * (5 - 1 + 1) + 1);
// console.log(a);

// 1 uzd. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai)

let pinigine = [];
let pinigineLength = Math.floor(Math.random() * (30 -10 + 1) +10);

for (i = 0; i < pinigineLength; i ++) {
    pinigine.push(Math.floor(Math.random() * (10 -0 + 1) +0));
}

console.log(pinigine);

// 2 uzd. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

let sum = 0;

for (let i = 0; i < pinigineLength; i ++) {
    sum += pinigine[i];
}

console.log(sum);

// 3 uzd. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

let sum2 = 0;

for (let i = 0; i < pinigineLength; i ++) {
    if (pinigine [i] > 2) {
    sum2 += pinigine[i];
    };
}

console.log(sum2);

// 4 uzd. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

for (let i = 0; i < pinigineLength; i ++) {
    if (pinigine [i] <= 2) {
    sum2 += pinigine[i];
    };
}

console.log(pinigine);

// 5 uzd. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

let biggestCoin = 0;
let biggestCoinCount = 0;

for (let i = 0; i < pinigineLength; i++) {
    if (pinigine[i] > biggestCoin)
    biggestCoin = pinigine[i] 
}
for (let i = 0; i < pinigineLength; i++) {
    if (pinigine[i] === biggestCoin)
    biggestCoinCount ++; 
}

console.log(biggestCoin, biggestCoinCount);

// 6 uzd. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

for (let i = 0; i < pinigineLength; i++) {
    if (pinigine[i] === 0)
    pinigine[i] = i + 1;
}

console.log(pinigine);