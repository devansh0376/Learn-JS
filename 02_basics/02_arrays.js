//whenever we try to push anything in array it takes as new element of another datatype. so when i try to push one array in to another one so there are array of array

// [1,2] , [3,4] : [1,2,[3,4]] a1.push(a2)
//const a3=a1.concat(a2) : [1,2,3,4]
//const a4=[...a1 ,...a2] : [1,2,3,4] //better

//if we have more than one array in one array and want to have one single array so we use flat

const a1=[1,2,[3,[4,5]]]
const a2=a1.flat(Infinity) // here we have to give depth 
console.log(a2)

//convert anything into array use from 
// console.log(Array.isArray("dev")) //check it is array ?
// console.log(Array.from("dev")) //convert "dev" into array

console.log(Array.from({name:"dev"})) //gives empty array we have to tell key array or value array 

let a=1,b=2,c=3;
console.log(Array.of(a,b,c)); //semicolon is imp
