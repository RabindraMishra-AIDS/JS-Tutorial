//================================= Reduce() ========================================================
// Reduce it is a reducer callback function.
//Has an accumulator and currentValue along with the InitialValue 
//In first iteration intinalvalue is passed onto accumulator
//Afterwards result of accumulator and currentvalue gets stored in Accumulator
//CurrentValue denotes current iteration ka value while accumulator is a free empty variable eg;
const myNums=[1,23,4]
let result=myNums.reduce( (acc,cv)=>{
    return acc+cv;
}, 0) //Here 0 is an Accumulator.
console.log(result);

//Method2 
const arr=[1,2,3]
initialvalue=0
let m=arr.reduce( (accumulator,currentValue)=>accumulator+currentValue,initialvalue);
console.log(m);

