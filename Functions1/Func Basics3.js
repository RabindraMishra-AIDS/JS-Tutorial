//=========================== Javascript Functions ====================================================
 function loginUserMessage(username)
 {
    return `${username} just logged in`
 }
 loginUserMessage("Rabindra") // Now in this function will execute but it has only returned the value.Didn't Print it
 const result=loginUserMessage("Rabindra")
 console.log(result);  //output: Rabindra Just Loggedin.


 // If no argument is given in function it will show undefined just Loggedin
 //Thus we need to use it with if else ladder 

 function loggin(username){
    if(username== undefined){  // we can also write it as if(!username)
        console.log(`Please Enter Username`);
    }
    return `${username} just loggedin.`
 }

 //We can also define bydefault argument thus no need to write if () statements eg:
 function logginnew(username="rabindra") //Bydefault
 {
return`${username} just loggedin.`
 }