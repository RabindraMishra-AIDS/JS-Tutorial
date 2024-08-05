//==================== for each it is an callback function =======================================
//It does not returns anything  (V.V IMP)
const coding =['js','python','swift']
coding.forEach( function(val){
    val+=" Wow"
    console.log(val);
    
})

//Using Array Function 
coding.forEach( (num)=>{
    console.log(num +1)
})
//forEach also gives us multiple things ie.item,index,arrlist
const mynum=[23,45,56,78]
mynum.forEach( (num,index,a)=>{
    console.log(num,index,a);
    
})

// Arrays ke andar objects 
const arr=[
    {
        name:"Rahul",
        gender:"Male"
    },
    {   name:"Priyanka",
        gender:"Female"

    }
]
arr.forEach( function (item){
    console.log(item.name);
    
})



//Map() callback function similiar to foreach but returns the value (Preferable by my sir)
const number=[1,2,3]
newnum=number.map( (n)=>{
    return n+10
})
console.log(newnum);
