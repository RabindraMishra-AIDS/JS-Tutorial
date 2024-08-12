//===================== Objects (Behind the scenes) ================================
//Q.? acn we change the value of Math.PI and why?
//Ans :NO,because writable,enumerable,configurable is set to false for all of these.

console.log(Math.PI);  //3.14159....
Math.PI=7              //It cannot be overwwritten 
console.log(Math.PI);  // 3.14159.........
//Why?
console.log(Object.getOwnPropertyDescriptor(Math,'PI'));  //Math is module name while PI is property name 
//eg: simply writing Math will show undefined because we are here asking for property descriptor and not Module

//We can also define our own properties for an object 
const Friend={
    name:'Shreyas Singh',
    age:22,
    isLoggedIn:true
}
Object.defineProperty(Friend,'age',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(Friend,'age'));


//Concept of Looping Now, here age property we have defined enumerable=false thus during iteration on  friend Object age property will not be displayed

for (let [key,value] of Object.entries(Friend)){
    if (typeof value!== 'function'){        //Discuss this security check 
    console.log(`Key :${key}  Value:${value}`);
    }
}