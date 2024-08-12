// Static keyword is used to prevent theh acces of a property,method within a class
//eg:
class user{
    constructor(username,age){
        this.username=username
        this.age=age+5
    }
    logme(){
        console.log(`Name of user is ${this.username}`);
    }
    static id(){
        return 'Id is 123'
    }
}
const Jha=new user('Abhinav',40)
//console.log(Jha.id());  //We dont have access of id method due to static keyword 

//Evenchild class cannot acess it
class child extends user{
    constructor(username,email,age){
        super(username,age)
        this.email=email
    }
}
const newuser=new child('Joel Pothen','Joel@gmail.com',40)
console.log(child.id()); //this will return the id beacuse directly acessing it from class
console.log(child.name);
console.log(newuser.age);

console.log(newuser.id());



