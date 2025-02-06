//this keyword use to refer current contex 
const user=
{
    username:"dev",
    age:21,
    welcomMessage: function()
    {
        console.log(`${this.username} , Welcome`)
        //console.log(this)//refer to user object
    }
}
// user.welcomMessage()
user.username="ved"
//user.welcomMessage()
//console.log(this) //refer to empty object

//normal function
// function chai()
// {
//     let name="fr"
//     console.log(name)
// }
// chai()
// const chai=function()
// {
//     let name="fr"
//     console.log(name)
// }
// chai()
//Arrow Function
// const chai= () =>
// {
//     let name="fr"
//     console.log(this)
// }
//chai()

const sum=(n1,n2) =>
{
    return n1+n2
}
const mul=(n1,n2) => n1*n2 //here we don't need to write return 
console.log(sum(4,7))
console.log(mul(4,7))