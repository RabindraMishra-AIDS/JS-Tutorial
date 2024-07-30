//===========================  Function ================================================
// Beginners Mistake
function addTwoNumbers(number1,number2)
{
    console.log(number1+number2);
}

const result = addTwoNumbers(3,5)
console.log(`Result is ${result}`); //But result showing is undefined.
//Return apne aap mai concept hai and addTwoNumber is  not returning anything.

function add(n1,n2){
    let result=n1+n2;
    return result
    //Return ke baad koi function kaam nhi karega thus no code after return keyword.
}
const new_result= add(9,11);
console.log(new_result);  // now add function is returning the value.
