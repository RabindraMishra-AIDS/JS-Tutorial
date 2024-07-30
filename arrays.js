//**************************************** Arrays *************************************************

const myArr1 = [0,4,56,33,'Rabindra ']  //Collection of multiple items in a single variable

// Arrays in Js are resizeable unlike c++
console.log(myArr1)
console.log(myArr1[2]);

//Arrays create a shallow copies 

//Method2 to declare a Array

const myArr2=new Array(1,2,3,4)

//Length of an array
console.log(myArr1.length);

// Push() in my array
myArr2.push(6)     //Adds at the last 
console.log(myArr2);

//pop() removes the latest element in the array 
myArr2.pop()
console.log(myArr2);


//Unshift() adds  element  at the first of the array and shifts remaining element thus time consuming operation
myArr2.unshift(5)
console.log(myArr2);

//Similarly we have shift operation ie.Remove the first element 
myArr2.shift()  // No argument required 
console.log(myArr2);

// Finding index & whether the element is presetn in the array or not 
console.log(myArr1.includes(4));
console.log(myArr1.indexOf(2));  // Since two is not present iska output index will be -1


//======== Join () ==============================
const newarr=myArr1.join()  // Combines and joins all elements of a array but returns a string Datatypes
console.log(newarr);



//------------------ Slice & Splice -----------------------------------------

console.log("A",myArr1);
const myn1=myArr1.slice(1,3)  // It will include index 1,2 3 excluded 
console.log("B",myArr1, myn1);


//Splice()
//Manipulates original array ie. removes the the spliced elements from original element and in this range is included 
const Splice=[0,34,5,6,4,2]
newsplice=Splice.splice(1,3)
console.log(Splice);