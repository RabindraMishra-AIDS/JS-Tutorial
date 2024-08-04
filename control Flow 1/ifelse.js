const temperature=41
if (temperature <40){
    console.log('Not so Hot');
    
}
else{
    console.log("It's too Hot");
    
}
//=========== Nested If Else =================
const balance=1000
if (balance<500)
{
    console.log("Balance less than 500 ");
    
}
else if(balance <750)
{
    console.log("Balance less than 750");
    
}
else{
    console.log('Balance more than 750');
    
}

//Creating a User login id for an website
const userLoggedIn=true
const debitcard=true 
const loggedInFromGoogle=false
const loggedInFromemail = true
// Both must be true for shopping
if(userLoggedIn && debitcard)  // If any one is false it becomes false 
{
    console.log('user is allowed to do Shopping ');
    
}
if (loggedInFromGoogle || loggedInFromemail){
    console.log("User is LoggedIn");
    
}