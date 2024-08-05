// for 
for (let index =0;index<10;index++){
const element=index;
if (element == 5){
    console.log("5 is the best Number");
    
}
console.log(element);
}
//we will not have any acess of the element variable outside the loop

// Loop ke andar loop
for (let i=0;i<3;i++){
    console.log(`Outer loop Value:${i}`);
    for(let j=0;j<3;j++){
        console.log("Value j",j);
        
    }
    
}

let myarray =["Rahul Chauhan","Utkarsh Roy","Himanshu Jha","Ayush pandey","Shiwam Tiwari","Dasrath Patel","Vivek Shah","Shan","Kanishk Mandrelia","Shiwam Mamgain","Aman Gupta","Aman Singh","Sharukh Syyed"]
for (let index = 0; index < myarray.length; index++) {
    const element=myarray[index];
    console.log(element);    
}

// Keywords: Break,continue     these are used to manipulate Break and Continue

//understanding Continue Statement
for (let i=0;i<4;i++){
    if (i=== 2){  // continue ke baad woh iteration ke liye aage run nhi hoga 
        continue;
    }
    console.log(i);
    
}

//understanding Break
for (let i=0;i<4;i++){
    if (i=== 2){  // 0,1 hi print hoga 
        break;
    }
    console.log(i);
    
}