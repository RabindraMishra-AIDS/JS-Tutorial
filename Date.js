
//------------------------------------------------------------------------  DATE --------------------------------------------------------------------------

// Date is arbitary compared from Jan 1, 1970 
// It is calculated in millisecond 
let myDate = new Date();                    // creating a instance of myDate
console.log(myDate.toString());

// Har ek method ka apna hi tarika hai we can use multiple methods 
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());

// Date is also a object 
console.log(typeof myDate);

// Creating a an arbitary Date ie, Khud ka date 

let myCreatedDate= new Date(2023,0,23)            //In JS months starts with Zero 
console.log(myCreatedDate.toDateString());

// Creating Date as per Required Format DD-MM-YYYY
let anotherDate=new Date("01-14-2023")
console.log(anotherDate.toLocaleString());

let myTimeStamp = Date.now()  //It will calculate time in millisecond
console.log(myTimeStamp);


// to compare it with previous date 
console.log(myCreatedDate.getTime());


// converting a date into seconds
console.log(Date.now()/1000);

// Used for writing Complex Dates
let newDate = new Date()
console.log(newDate.getMonth()+1);  // displays which month is currently going on 
console.log(newDate.getDay());

// Locale string (best method )
// Locale String ke andar hum object Define karte hai and Bahut saare Parameters de Sakte hai 

newDate.toLocaleString('default',{
    weekday: "long",
})
