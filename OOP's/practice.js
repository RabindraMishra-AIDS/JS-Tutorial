class hello{
    constructor(name){
        this.name=name
    };
    fun(){
        console.log(this);
        
    }

}
let n= new hello('Rabindra')
n.fun()         //Getting the current context of class