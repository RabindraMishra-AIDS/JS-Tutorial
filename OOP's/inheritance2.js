// ========================= Inheritance in Class =============================
class parent{
    greet(){
        console.log(`Hello Bacho, Kaise ho aap Sabhi`);
        
    }
}
class child extends parent{
    fun(){
        super.greet()
    }
}
const maze= new child()
maze.fun()
