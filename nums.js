const score=400 // here js will automatically detects the that score would be number 
console.log(score);


// We can also expliitly define the variable
const balance = new Number(100)
console.log(balance);  //yaha par specially cast hoga ki balance Number hai | Number mai functions kam hai 

// Converting balance variable to string using Function 
console.log(balance.toString().length)

// toFixed() can be used to decide the decimal for a number especially used in e commerece website.
console.log(balance.toFixed(2));

// Understanding toPrecision() gives priority to first N values
const othernumber=23.456
console.log(othernumber.toPrecision(3))

//Understanding locale string {It introduces ',' in numbers by default US Standard but can also be set to indian standards }
const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'));

// Finding MAX and Min Value for Number (Competitve Programming)
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);