console.clear();

function biggest(list) {
    let result = list[0];

    for (let i = 0; i < list.length; i++) {
        if (list[i] > result) {
            result = list[i];
        }
    }

    return result;
}
console.log(biggest([1]), '->', 1);
console.log(biggest([1, 2, 3]), '->', 3);
console.log(biggest([-5, 78, 14, 0, 18]), '->', 78);
console.log(biggest([69, 69, 69, 69, 66]), '->', 69);
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]), '->', 1);


function biggest(list) {
   //tikriname tipa - turi buti array
   if (Array.isArray(list)) {
      //jeigu ne array - return error
      return 'ERROR: duok array';
    }

   //turiu array
   //jeigu tuscias - return error
   if (list.length === 0) {
       return 'ERROR: duok ne tuscia array';
    }

//turiu ne tuscia array
//sakom, jog didziausias skaicius yra -Infinity
let biggest = -Infinity;
//su ciklu einame per array:
for (let i = 0 < list.length; i++) {
    //-tikriname ar array narys yra realus skaicius
    if (typeof list [i] !== 'number' || !isFinite(list[i])) {
        //-jei ne:
        //-tesiam einam prie sekancio
        continue;
    }
    //-jei taip (yra skaiciaus tipas):
    //-lyginam su pries tai zinoma didziausia reiksme
    //-jeigu nauja reiksme didesne - overwrite
    if (list[i] > biggest) {
        biggest = list[i];
    }

}

//-jei taip (yra skaiciaus tipas):
//    -lyginam su pries tai zinoma didziausia reiksme
//    -jeigu nauja reiksme didesne - overwrite

//jeigu didziausias skaicius vis dar liko -Infinity:
//-return error - sarase nera nei vieno normalaus skaiciaus

//graziname didziausia skaiciu
}