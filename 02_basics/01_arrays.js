const arr=[0,1,2,true,"dev"]
//console.log(arr[1])
//array copy operation creates shallow copy 
/*
shallow copy is copy whose properties share the same references point and deepcopy is copy whose properties do not share the same references.
*/
arr.push(7) //push_back
arr.pop() //pop_back
arr.unshift(-1) // push_front
arr.shift() //pop_front
//console.log(arr.includes("dev")) //check value exist or not
//console.log(arr.indexOf(2))
const newarr=arr.join() //concate all elements of array and make one string 
//console.log(arr)
//console.log(newarr)

//slice ,spice
console.log("original : ",arr)
//slice : original array remain same : range(a,b) : a to b-1
const arrn1=arr.slice(1,3) // index : 1 to 2
console.log(arrn1)
console.log("after slice :" ,arr)

//splice : original array modifie delete elements that arr on index a to b , range(a,b) : a to b
const arrn2=arr.splice(1,3) //index : 1 to 3
console.log(arrn2)

console.log("after splice :",arr)

