//============================Getter and setters ==============================
//Can be used to prevent the access of properties 
//Getter ke sath setter must be written ony on eis not allowed 
//Property name and get & set Method Name must be same.
class user{
    constructor(email,passwd){
        this.email=email
        this.passwd=passwd
    }
    get passwd(){
        return `Encrypted passwd is ${this._passwd + Math.floor(Math.random()*10)}`
    }
    set passwd(value){  //Some changes if it is not made during set or get maximum call stack error will occur
        this._passwd=value
    }

} 
const game= new user('cricket@.com','abc')
console.log(game.passwd);
