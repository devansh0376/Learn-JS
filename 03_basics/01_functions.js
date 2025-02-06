// function sum(n1,n2)
// {
//     console.log(n1+n2)
// }
function sum(n1,n2)
{
    // const res=n1+n2
    // return res
    return n1+n2
}
//sum(5,4)

const a=sum(5,4)
//const a=sum(5,"4")
//console.log(a) //gives undefined for old fun

function loginmsg(username)
{
    if(!username)
    {
        console.log("please pass username")
    }
    else
    {
        return `${username} just logged in`
    }
}
console.log(loginmsg("dev"))


//when we don't know the numbet of parameter so we use rest/spread(...) operator in argument 

function cal_num(...num)
{
    return num //return as array
}
console.log(cal_num(1,2,3))


//pass object in function
const user={
    username:"dev",
    age:21
}
function handeleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)
}
handeleObject(user)

//pass array in function
const arr=[1,2,3]

function handelArray(arr)
{
    return arr[2]
}
console.log(handelArray(arr))