//============================= Objects in Javascript ====================================================
//can be defined in two ways 1)Literals 2)Constructors
//Singleton (apne tareka ek hi object hai )
//constructor se hamesha  singleton banta hai but not in case of literals 
// Object.create (this one way of creating objects and called as constructors)

const empty={}  // Empty object an dis literal

//we have a unique datatype of symbol
const mySym=Symbol("key1")


const JsUser={      // Here we can define any key unlike arrays always starts with 0,1,2,3,4,...
    name:"Rabindra",  
    "full name":"Rabindra Mishra", 
    age:21,
    [mySym]:"myKey1",
    Location:"Jaipur",
    email:"Rabindra.amazon.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//Accessing our objects 
console.log(JsUser.email);
//Method2 for accessing
console.log(JsUser["email"]); // Accessing this way  we need to specify " "quotes becasue email "


//Q.) Why do we need to consider method 2 of accessng ? Ans : Because "full name" cannot be accessed using dor method
console.log(JsUser["full name"]);

//Similarly we can acess symbol inside a object using squared parenthesis. [ ]
console.log(JsUser[mySym]);

//Overwriting our object Values
JsUser.email="Rabindra@google.com"

//We can also freeze an object so that no one should oupdat ethe values 

//Object.freeze(JsUser)

//No updating it will not throw any error but updation will not get propogated
JsUser.email="UtkarshRoy@"

//In javascript you can also treat functions as variables 
JsUser.greeting = function(){
    console.log("hello Js User");
}
console.log(JsUser.greeting); //It will return a Function
console.log(JsUser.greeting()); // Here it will print hello Js User

//String se backticks mai convert karna hai. This is called as String Interpolation 
JsUser.Two=function(){
    console.log(`Hello Motto ${this.name}`)                      //Refrencing same object we use $this
}
console.log(JsUser.Two())