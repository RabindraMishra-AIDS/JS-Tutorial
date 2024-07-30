//======================== Objects as Singleton or declaring as Constructor ========================================

// const tinderUser = new Object()   singleton

const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name="Rabindra"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{                       //Object ke andar object
             userfullName:{
                firstname:"Rabindra",
                lastname:"Mishra"
             }
    }
}

//Trying to access objects ke andar objects
console.log(regularUser.fullname); // this will display fullname ak pura object

console.log(regularUser.fullname.userfullName) // One level less nesting

//if we dont know about objectsnesting we can use ? symbol for safety eg:
//console.log(regularUser.fullname?.userfullName);


//--------------------------- Objects Combining-----------------------------------------

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3={obj1,obj2}   //Same array jaise problem hoga objects ke andar objects
console.log(obj3);


//================================ Objects Assign (Static Objects) =================================
const obj4= Object.assign({},obj1,obj2)       // {}:defines that this would be the target of our output ie. inside a curly parenthesis.
// obj1,obj2 woul be combined into target of parenthesis {} 
console.log(obj4); {}     //{} is target, obj1 & obj2 are source.If {} is not given then obj1 will act as a target.

//Spread operator in Object as well 
const obj5={...obj1,...obj2} // It wil spread these obj1,obj2 in obj5
console.log(obj5);

//########################################################## Arrays of Objects #################################################################
const users= [
    {
        email:"Rabindra@34",
        id:2
    },
    {
        email:"Krishna@Amazon.com",
        id:3
    }
]

//Accesing Second Object ka email
console.log(users[1].email);

console.log(tinderUser);

//Sabse Imp hai to get all the keys of an objects  keys object

console.log(Object.keys(tinderUser));      //Return all the keys in arrays.
console.log(Object.values(tinderUser));   //Return all the values as arrays.
console.log(Object.entries(tinderUser)); // Returns all the entries as arrays 

//Chech whether the object has certain attribute or not
console.log(tinderUser.hasOwnProperty('name'));   //here tinderUser Object has name property.

