const name="Rabindra"
const repoCount=50;
//console.log(name + repoCount + " Value")  However this is not recommended 
// String Interpolation 

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

//Method2 o fdeclaring a string 
const gamename=new String('RabindraM')    // Here it will create object
console.log(gamename)
console.log(gamename[0]);
console.log(gamename.__proto__);  // Gives an Object

// important Methods of String
console.log(gamename.length)
console.log(gamename.toUpperCase()); // It is a Function but it will not change original value 

// Finding characters based on Index 
console.log(gamename.charAt(2));   // It will tell which character is at index 2 
SSS
// Finding index based on character 
console.log(gamename.indexOf('a'))

// Please do a String documentation from mdn after running it from console

const newString=gamename.substring(0,4)  // zero se 3 tak ke characters return hoga , Always starts with zero if neagtive input given
console.log(newString);

const anotherString=gamename.slice(0,4)  //Can also give give negative index in slixe function 


const newStringOne="  Rabindra " //in this case this extraspaces are unnecessary 
console.log(newStringOne.trim()); // Browser Compatibility 



// Replace Function 
const url= "https://en.wikipedia.org/wiki/  Twitter"  // There ar echances that your url may contain spaces hence browser does not understand this spaces and replace them with numbers and thus creates problems. eg "https://en.wikipedia.org/wiki/%24Twitter"
console.log(url.replace(' ','-'));

// Finding certain key word exist or not in a string
console.log(url.includes('Twitter'))

// Converting our string object into array using split function 
const arr=url.split('-')
console.log(arr);