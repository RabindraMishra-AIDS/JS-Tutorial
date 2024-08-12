// Objects 
//Facory Function: On the basis of the Object it will create function and properties
//Factory Function: Object.create() we also have this in an array.

const School={
    _email:"hfchs[holy Family convent High School & Junior College.]",
    _address:'Vasai (East)',
    get address(){
        return `Address of HFCHS is ${this._address}`
    },
    set address(value){
           this._address=value
    }
}
const school= Object.create(School)
console.log(school.address);
//Here set is been treated as property an dnot a method and thus can acess using  {.address} and not [._address]