/*
2 types =>  primitive and non primitive 

1) primitive : 
all this are call by value means when ever we access it create copy and give whatever we change it appear in copy
7 types : string, number , boolean , null ,undefine, symbol(for make unique), BigInt

2)Non primitive(Reference)
-whenever we change the value it appear on real value
array , object , function
 */
const id1 = Symbol('01')
const id2 = Symbol('01')

console.log(id1==id2)
const hero =["a","b"];
let myobj={name:"dev" , age:21};

const myfun = function()
{
    console.log("hii");
}

/*
********memory in javascript********

Stack(primitive) and heap(non primitive) two type of memory 

 */
//stack primitive
let a=5
let b=a
b=7 //a's value doesn't change
// console.log(a)
// console.log(b)

//heap non-primitive
let userone={email : "abc@gmail.com", age:12};

usertwo=userone
usertwo.age=21 //here usertwo pointing to userone by reference so both's age value will change
console.log(userone.age)
console.log(usertwo.age)