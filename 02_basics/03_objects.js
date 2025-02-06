//two type of create object : literals and constructor 
//if we make object by constructor so it is Singleton(an object which can only be instantiated one time.) key value type shitt

//object literals

const mysym=Symbol("k1")
const jsuser={
    name:"dev",
    age:18,
    [mysym]:25,
    email:"dev@gmail.com",
    "hobby":5,
}
// console.log(jsuser.email) //not good pratice to access values
// console.log(jsuser["email"]) //it always taling key as string

// console.log(jsuser.hobby)
jsuser[mysym]=42
//Object.freeze(jsuser) //after this we can't modify our object
jsuser[mysym]=25
// console.log( jsuser[mysym]) //don't use dot use brackate
// console.log(jsuser)

jsuser.greeting =function()
{
    //console.log("hii",jsuser.age );
    console.log(`hii ${this.age}`);
}
console.log(jsuser.greeting())