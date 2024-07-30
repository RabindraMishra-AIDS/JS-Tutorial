//======================= Functions ==========================================================
//To understand Functions we need to learn about Memory Management in Javascript
// Function keyword

function sayMyname()
{
    console.log('M');
    console.log('I');
    console.log('S');
    console.log('h');
    console.log('R');
    console.log('A');
}
// sayMyname()      Function Call

function addtwoNumbers(number1,number2)  //Parameters
{
    console.log(number1+number2);
}
addtwoNumbers(5,6);
addtwoNumbers(3,"4"); //Concatenates "3"+"4"
addtwoNumbers(8,null); //Arguments
