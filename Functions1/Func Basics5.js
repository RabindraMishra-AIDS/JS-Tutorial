//----------------------------  CaseStudy ----------------------------------------------------------
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));
//Ye case mai array banega [500,2000] becasue val1 will get 200,val2 will get 400

const user={
    username:"Rabindra",
    price:999
}
function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user) //Giving user as an argument which is an object



//============================================  Understanding the Problem =========================================
//suppose user object has a property called prices and you hav ewriitten in your function anyObject.price 
//Probably you won't be knowing the property name of the passed object
//eg:
const new_user={
    username:"Rabindra",
    prices:199
}
handleObject(new_user); // here price will come undefined because name given is prices 
//Thus we require type safety for handling such cases 


handleObject({
    username:"Mishra",
    price:399
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));     //Both ways we can pass the aurgument 
console.log(returnSecondValue([200,400,500,1000]))
