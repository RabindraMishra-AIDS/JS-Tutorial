//============================== Javascript follows prototypal behaviour ===========================
//In javascript each and everything is almost an object 
// Array ---------------> Object --------------------------> Null
function multiply5(num){
    return num*5
}
//We can use function as an object due to its prototypal behaviour eg:
multiply5.power=3
console.log(multiply5(6));
console.log(multiply5.power);
console.log(multiply5.prototype);


