console.clear();

function sum(first, second) {
    console.log('>', first, second)
    return first+second;

}
const s1=sum(2, 2);
console.log(s1);

const s2=sum(7, 5);
console.log(s2);

const s3=sum(1);
console.log(s3);

const s4=sum();
console.log(s4);

function hi(name) {
    console.log(name);
    return `hi, my name is ${name}`;

}
//hi, my name is petras
//hi, my name is maryte

console.log(hi('petras'));
console.log(hi('maryte'));

//sveiki, as petras ir man 16 metu
//sveiki, as maryte ir man 160 metu

function prisistatymas(name, age) {
    return `sveiki, as ${name} ir man ${age} metu`
}

console.log(prisistatymas('petras', 16));
console.log(prisistatymas('maryte', 160));

