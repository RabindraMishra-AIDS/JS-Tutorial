//========================== Requirement of call==================================
//Problem with 'this' Keyword is function(){ call()}. ie Function inside function.
//In such scenarioes this usually represents global execution adn refers to window object.
//In such scenarios 'this' keyword is unable to fin dthe current conetxt.
//Thus we need to use call to execute inner function and pass context of parent function to inner function 
//eg:-
function Setusername(username){
    this.username=username
    console.log('Executed');
    
}
function user(name,email,friend,age){
    this.email=email,
    this.age=age,
    this.friend=friend,
    Setusername.call(this,name)  //Thi sis used to hold back the value of child function from call stack.
}
const Mishra= new user('Rabindra','google@.com','Dasrath Patel',23)
console.log(Mishra);
