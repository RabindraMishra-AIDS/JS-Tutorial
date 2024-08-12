//Array.String -----------> Object ------------------------>Null
//This is called as protoypal behaviour of js
const hero=['Shaktiman','Krishh','Spiderman']
const heropower={
    shaktiman:'laser',
    krishh:'Speed',
    Spiderman:'Sling'
}
Object.prototype.rabindra=function(){
    console.log('Rabindra is present in all objects'); //Method injection
    
}
hero.rabindra()   //Excuted===injected successfully
heropower.rabindra() //Executed===injected successfully