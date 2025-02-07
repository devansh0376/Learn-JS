//Maps : hold key value no dublicate value all unique
// const map={
//     'IN':"india",
//     'AUS':"australia"
// }
// console.log(map)
const map= new Map()
map.set('IN',"india")
map.set('AUS',"australia")
//we can't itterate object by this method
// for (let [key,value] of map)
// {
//     console.log(key , '=>' , value)
// }

const obj={
    'js': "javascript",
    'cpp': "c++",
    "py":"python"
}
for(let key in obj)
{
    // console.log(key , obj[key])
    console.log(`${key} => ${obj[key]}`)
}

const codding=["js","c","c++","python"]

// codding.forEach((val) => {
//     console.log(val)
// });
// codding.forEach(function(val) {
//     console.log(val)
// });

//iterate over array of object

const newobj=[
    {
        name:"dev",
        age:21
    },
    {
        name:"ritik",
        age:21
    },
    {
        name:"dhruv",
        age:22
    }
]

// newobj.forEach(
//     (item)=>{ 
//         console.log(item.name,item.age)
//     }
// )

//foreach( ()=> { })

//filters ( ()=>{return } )

const nums=[1,2,3,4,5,6]
console.log(nums.filter( 
    (val)=> {return val>2} 
))
//foreach as filter
nums.forEach(
    (val) => {
        if(val>2)
        {
            console.log(val)
        }
    }
)


//to add value of array use reduce method
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr,0);
console.log(sum); // Output: 15
