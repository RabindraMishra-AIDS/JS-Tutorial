//+++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++
// Sabse imp is random()
console.log(Math.random());  // Gives value between 0 to 1
console.log(Math.random()*10); // That's why multiplying it by 10
console.log((Math.random()*10) +1); // +1 will remove zero aane ka possibility

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+ min ));  // To define max and min and get value in a range 