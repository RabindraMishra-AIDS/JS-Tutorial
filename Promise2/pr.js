//======================================== Promise (Part 2)=========================================
const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
let error=false
if(!error){
    resolve({name:"Rabindra",friend:"Shaktiwell"})
}
else{
    reject("JS went wrong somewhere.")
}
    },1000)
})

//using async instead of then 
async function consumepromise5(){
    const rep =await promise5
    try{                                       //Using try and catch block for safety 
    console.log(rep.friend);
}catch(err){
    console.log(err);
    
}

}
consumepromise5()  //Calling the function 

//========================== Method 2 ====================================
async function getAllusers(){
    try{
const response=await fetch('https://jsonplaceholder.typicode.com/users')  //we can use async without await
const data= await response.json()
console.log(data);

    }
    catch (error){
console.log(error);

    }
}
getAllusers()