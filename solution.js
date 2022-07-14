
//1. Multiply - Function Declaration


function multiple (a,b){
    console.log(a * b);
    }
multiple(2,5)
multiple(1,2)



function multiple1 (number1, number2){
    return number1 * number2
}
console.log(multiple1(3,5));

let example = 5 * multiple1(2,2)
console.log(example);


//2. Multiply - Function Declarations as Values
 const multiple3 = function(a,b){return a * b}
console.log(multiple3(13,16));


//3. Multiply - Arrow Function

const multiple2 = (a, b) => {return a *b}
console.log(multiple2(2,8));


//4. Declarations
function division (a,b){
    return a % b
}
console.log(division(4,2));

const division1 = function(a,b){return a % b}
console.log(division1(7,2));

const division2 = (a,b) =>{return a % b}
console.log(division2 (15,3));
