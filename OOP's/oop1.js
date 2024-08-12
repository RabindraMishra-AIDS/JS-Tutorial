//============================== Object Oriented Programming==================================
//It is collection of properties and methods
//Object Literal
// Keyword :- a)classes b)constructor c)Prototypes d)Instances 

const user={
    name:'Rabindra',
    age:55,
    SignedIn:true,
    getDetails: function(){
        console.log('Details found');
    }
}
//name,age,SignedIn are properties while getDetails is a method.
console.log(user);
//eg:2
const anotheruser={
    name:'Vignesh Iyer',
    age:33,
    getuserDetail: ()=> {console.log(this) }   //It will print all context of this object
}
console.log(anotheruser);

//Constructors are used to create new instances of same objects
//eg: const promise= new Promise()

function User1(name,age,gender,signedin){
    this.name=name;
    this.age;
    this.gender=gender;
    this.signedin=signedin;
    return this                 //Without return also th efunction will return it 
}
const rabindra= new User1('Rabindra',21,'Male',true)
const Kanishk =  new User1('Kanishk Mandrelia',19,'Male',false)
const Utkarsh = new User1('Utkarsh',45,'Male',false)
const riya= new User1('Riya',10,'Female',true)
console.log('Rabindra:',rabindra);
console.log('Kanishk :',Kanishk);
console.log('Utkarsh :',Utkarsh);
console.log('Riya :',riya);
//new keyword is impoertant to create different instance otherwise it will overwrite the other instances 
//Constructor Keyword
console.log(rabindra.constructor);




