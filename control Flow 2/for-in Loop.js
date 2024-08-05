// for in loop can be used to iterate over a object 
const user={
    name:"Rabindra",
    age:23
}
for (i in user){  //It will only print the keys of the object
    console.log(i);
    
}
//For printing the values
for (i in user){
    console.log(user[i]);
}

//It can also be applied on array
let arr=['Rabindra','Ayush Pandey','Himanshu Jha']
for (i in arr){
    console.log(arr[i]);
}
// Cannot be applied on map 
const map=new Map()
map.set("1",'India')
map.set("1","Russia")
map.set("3","China")
 for (i in map){
    console.log(i);
    
 }