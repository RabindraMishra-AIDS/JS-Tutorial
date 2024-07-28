let myyoutube="Rabindra"
let anotheryoutube=myyoutube
myyoutube="Mishra"
console.log(myyoutube)
console.log(anotheryoutube);

/* ---------------------------------------------- Heap Allocation (Non Primitive) ---------------------------------------------------- */
let userone = {
    email:"g@mail",
    age:23

}
let usertwo=userone
usertwo.age=45
userone.email="update@mail"
console.log(userone);
console.log(usertwo);