 arr=[23,'rabindra',45,56]

for ( const num of arr ){
    console.log(num)
}
//Applying this on string
const greet="Good Morning, Utkarsh"
for (let i of greet){
    console.log(i);
    
}
for (let i in  greet){        //For in will giv ethe index
    console.log(greet[i]);
    
}
// Objects are not iterable using for of loop 
const map = new Map()
map.set("Roy",1)
map.set("Jha",2)
map.set("Mishra",3)
map.set("Singh",4)
map.set("Yadav",5)
console.log(map);
//Applying Iteration on map
for (let [key,value] of map){   //This is called as destructuring of map 
    console.log(`Key: ${key} ->${value}`);
    
}

//Destructuring of map is required otherwise it will give output in the form of arrays eg.
for(const i of map){
    console.log(i,typeof i);
    
}
