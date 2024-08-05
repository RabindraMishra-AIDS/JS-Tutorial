//Filter method will also return the values
const arr=[23,1,4,7,8,10]
m=arr.filter( (n)=> n>6)
console.log(m);

//Understanding the chaining concept
console.log(arr);
k=arr.map((n)=> n+2).map((n)=> n*2)
console.log(k);

//ek chain ka result will be passed on to another chain.chaining can be of any length