if (true)
{
    let username = 'Rabindra'
    if (username == 'Rabindra')
    {
       const website="TCTE";
       console.log(username + " " + website);
       
    }
    //console.log(website); //Will throw the error because website out of scope.
    
}
//========================= Mini Hoisting =====================================================
const add= function(n1,n2)  // this is mini hoisting 
{
return n1+n2
}
m=add(4,5)
console.log(m);
