/* -------------------------------------------  Data Types Summary ------------------------------------------------------------ */
// There are two types of Datatypes:   1) Primitive    2) Non Primitive.
// These datatypes are classified based on the the memory and the way they are accessed.


// Primitive Datatypes are accessed using call by value while Non primitive is used as call by reference.


// Primitive : string,number, BigInt, boolean , null, undefined, symbol 
// Non Primitve : Arrays , objects , functions

let name="Rabindra";
let age=23;
const surname="Mishra";
let email; //undefined
let score=null;
const id=Symbol('123')  // Always used along with ID's we use this in react.
const anotherid=Symbol('123') // Although input is same but return value will be diffrent ie. object
console.log(id === anotherid)
console.table([age,email,score,id,name])

