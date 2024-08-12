// Defining get and set inside properties of a function 
//Before class (ES6) we used to use get & set Like this 
//using Object.defineProperty()

function user(email,password){
    this._email=email
    this._password=password   //Purposefully we are changing the name of the variable.
    Object.defineProperty(this,'email',{  //Ye Method ko  apna ek this dena padega for context.
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email=value
        }
    })
}
const JS=new user('Ronadlo@ai','an45i')
console.log(JS.email);
