// Să se scrie cu cifre arabe un număr cu cifre romane
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Input: s = "MCMXCIV"
// Output: 1994

function checkValue(roman){
    switch (roman) {
        case "I":  return 1;
        case "V":  return 5;
        case "X":  return 10;
        case "L":  return 50;
        case "C":  return 100;
        case "D":  return 500;
        case "M":  return 1000;
    }
}

function transformToArab(s){
    let number = 0;
    let newArr = s.split("");
    
    newArr.forEach((element,index,currentArray) => {    
        let currentNumber = checkValue(element) ,
            nextNumber    = checkValue(currentArray[index+1]);

        currentNumber < nextNumber ? number += (-1) * currentNumber : number += currentNumber;
    });
    return number;
}

console.log(transformToArab("MCMXCIV"));
console.log(transformToArab("CMXCIX"));
console.log(transformToArab("IX"));
console.log(transformToArab("IV"));
console.log(transformToArab("I"));