//Every Object has a new instances & Properties 
//To share information among objects we can use inheritance 
const name={
    username:"Rabindra"
}
const age={
    userage:23
}
const status={
    loggedin:true,
    __proto__:age  //Inheriting age obkject 
}
console.log(status.userage);  //Thus accessing the information 

//Modern Syntax
Object.setPrototypeOf(age, name)  //age ke andar name 
console.log(age.username);


