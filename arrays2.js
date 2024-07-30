//========================= Arrays Part 2 ==========================================
const marvel_heros=['thor','Ironman','spiderman'] //String can either be written in '' or "" quotes 
const dc_heros=['Superman','flash','batman']


//Puchong a complete string into another string 
marvel_heros.push(dc_heros);
console.log(marvel_heros);
// It will push it as single element of array ['thor','Ironamn','spiderman',['Superman','flash','batman']]
 marvel_heros.pop()


const allheros= marvel_heros.concat(dc_heros)
console.log(allheros);   // Now this concatenates exactly 
//Note concat function does not modifies the existing array only returns a new array


// Spread Operator easier way than concat 
const allnewheros= [...dc_heros,...marvel_heros]  // we mostly used spread operator.
console.log(allnewheros);


// Array's ke andar Arrays
const another_arr=[1,23,4,[4,5,6],[6,7,[4,5]]]

const real_another_array= another_arr.flat(2) //Here we can also give input as Infinity flat will recursively combine array element into 1 and here we need to mention the depth of our recursion here we choose 2 becasue we had array ke andar array 
console.log(real_another_array);

//isArray() checks whether It is an array or not eg:
console.log(Array.isArray('Rabindra'));  // will return true/False 

//Simiarly we can also conver object, strings into array
console.log(Array.from("Rabindra"));


console.log(Array.from({name:"Rabindra"}));  // Giving Object to converted into Array

let score1=100
let score2=200
let score3=300

// of function : Returns a new element from set of elements 
console.log(Array.of(score1,score2,score3));