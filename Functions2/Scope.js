//============================================== Global , Local Scope===================================================
let a=10
let b=4
function fun(){
    let a=5
}
console.log(a); // Output will come 10 because local value should be leaked outside the function

//****************************** Problem with var ***************************************/
const b1=50
if (true)
{
    var c=67
    console.log(b1)  // It can acess global variable
}
console.log(c);  // Here output will be 67 ie. leakage of scope


