//==================================== Promises ========================================
//3 states of promises in Javascript    [Note: Promise is an object]
//a)Pending b)fulfilled c) Reject
//Promise has 2 parts resolve and rejection


const promise1=new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async task 1");
    resolve()
},1000)  //Dekay is been introduced.
    
})
//Now to link then with promise we need to include resolve()
promise1.then( function(){
    console.log("Task1 consumed");
})

//Method 2
//We can also write it as one component eg:
const promise2=new Promise(function (resolve,reject){
    setTimeout(function(){
console.log("Async Task2");
resolve()
    },1000)
}).then(()=> console.log("Task2 consumed"))

//Method 3 
//we can also pass teh data from resolve 
const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"Rabindra",Age:21})  //we can pass any of the data like object,arrays, etc
    },1000)
}).then((user)=> {
    console.log(user);  //Data is received and is been given the name user and printing the user ie.Object
    
})

//Chaining is done to return the data ie. we cannot return the data directly from then() method
//Method 4
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
          let error=false   //error is set to false 
          if(!error){
            resolve({name:"Mishra",friend:"Sagar Naidu(carmel)"})
          }
          else{
            reject("Oops! Something went wrong.")
          }
    },1000)

}).then((user)=>{
    console.log(user);
    return user.friend  //this return will be passed onto next chain and thus cannot be accessed directly and requires chaining.
    
})
.then((username)=>{            //Chaining
    console.log(username);
    
})
.finally(()=> console.log("Executed Finally"))   //By default {jo hoga woh print /execute kardenge }