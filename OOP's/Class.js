//ES6 Ke baad se classes can be accessed in JS
//Note: It is just an syntactical sugar 
//Can contain properties and Methods 
//Syntax: Class user{ constructor();  }    //Contructor apne app ban jaata hai in class eg:-

class user{
    constructor(name,age,friend){
        this.name=name
        this.age=age,
        this.friend=friend
    }
    Password(){
        console.log(`Encrypted Password is: ${this.age + this.name}`);
        
    }
}
const Rabindra = new user('Mishra',23,'Himanshu_Jha')
console.log(Rabindra,Rabindra.Password());

//Behind the scene


// function user(name,age,friend){
// this.name=name,
// this.age=age,
// this.friend=friend
// }
// //Injecting the Method
// user.prototype.Password= function(){
//     console.log(`Encrypted Password is: ${this.age + this.name}`);
// }