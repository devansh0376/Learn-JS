//object using constructer (singleton)
let o1=new Object() //both are empty object
const o2={}
//console.log(o1)

o2.id=5
o2.name="op"
o2.islogged=false
//console.log(o2)
//nested object
o1={
    id:12,
    fullname: {
        name:{
            fname:"devansh",
            lname:"shrimali"
        }
    }
}
//console.log(o1.fullname.name.lname)
//mearge two object 
// const o3={o1,o2} //object in object 
// console.log(o3)
const o3=Object.assign({},o1,o2)
const o4={...o1,...o2} //spread method
//console.log(o4)
// console.log(Object.keys(o4))
// console.log(Object.values(o4))
// console.log(o4.hasOwnProperty('5'))

const {fname :firstname} = o4.fullname.name;
console.log(firstname)