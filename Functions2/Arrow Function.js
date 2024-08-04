//======================= Understanding this keyword ================================
//It is used to define the current context 
const user={
    username:"Rabindra",
    id:34,
    Message:function()
    {
        console.log(`${this.username} Welcome to our website`);
        console.log(this);
        
        
    }
}
user.Message()
user.username="Rahul"
user.Message()
// We cannot use This keyword inside the function 
const fun=function rabindra(){
    username="Utkarsh";
    console.log(this)
    console.log(`${this.username} is a good boy`);
    
    
}
fun()
//Arrow Function 
const fun2= (username) =>{
    console.log(`${this.username}`);
    
}
fun2('Rahul')  //Now it will come undefined.

//Implicit Return
add2 =(n1,n2)=>(n1+n1)
console.log(add2(11,34));
