//============================= Understanding Truthy Value =============================================
const email="Rabindra@gmail"  //Will automatically be considered as True
if (email){
    console.log("Got User Email");   
}
else{
    console.log("Not got user Email");
    
}
const new_email=""  //Will be considered as false
if (new_email){
    console.log("Got User Email");   
}
else{
    console.log("Not got user Email");
    
}
//===================== Falsy Values ===============================
// false,0,-0,null,undefined,Nan,"",BigInt on    (Rest all truthy Values)

//===================== Interview truthy values =====================
// "False","0","Undefined",[],{}," ", empty function ie. Function() { }

// Checking empty array
const arr=[] 
if(arr.length===0)
{
    console.log("Empty Array");
}
else{
    console.log("Not an Empty Array");
    
}


//Checking for an Empty Object
const empty={}
if (Object.keys(empty).length===0){
    console.log("Given Object is Empty");
    
}
else{
    console.log("Given Object is not Empty");
    
}


//Nullish Coalescing Operator (??)   null??Undefined          [Used for type safety in case of nullor undefined values]
let val1;
val1=5??10   // first non null value get assigned
console.log("Val1",val1);

let val2;
val2=null??50
console.log("Val2",val2);

let val3=undefined??33
console.log("Val3",val3);


//============================= Terniary Operator ==============================
//Syntax: Condition ? true:False
const price=100
price<=100?console.log("Price is less than 100"):console.log("Price is Greater than 100");
;





