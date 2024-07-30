//=================== Destructuring the Objects & Arrays =======================================
const course = {
    coursename:"js in hindi",
    price:100,
    instructor:"Rabindra"
}
//course.instructor
//since writing this way multiple times may look little messy hence we can use different ways 
//Syntactical Sugar
const {instructor}=course 
console.log(instructor); // we can directly acess it 

//Suppose instructor is very long to write we can make it small. eg:
const {instructor:ins}=course    //instructor=>ins
console.log(ins);               // This is called as destructure 
  //eg: In React we use destructuring this way 
//   const navbar = ({}) =>{

//   }
//   navbar(company="Rabindra")



//=========================================================== API =================================================
//In short Apna kaam dusre ke sar par daalna e: waiter ko vada pav lane bola
//Backend values aati hai JSON pehle XML mai aati thi which used to be very complex.


//JSON Structure (Keys also as string and values also as a string except Numbers)
// {
//     'name':"Rabindra",
//     'course':"This is JS"
// }
[             //Sometimes you can also get array of Objects as a JSON File.
    {},
    {},
    {}
]
//We can use various tools like JS Formatter to beautify long JSON Format file.