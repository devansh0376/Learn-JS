// const promiseOne=new Promise(function(resolve,reject)
// {
//     //Do an async task
//     //DB calls
//     setTimeout (function() {console.log("Async task completed")
// resolve()
//     } ,1000)
// }
// )

// promiseOne.then(function(){
//     console.log("promise consumed")
// } )
// new Promise(function(resolve,reject)
// {
//     setTimeout(function(){ console.log("Async task 2"); resolve(),1000 })

// }).then(function() 
// { 
//     console.log("Async 2 resolved")
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function()
//     {
//         resolve({username:"dev",email:"dev@gmail.com"})
//     },1000)
// })
// promiseThree.then(function(obj) {
//     console.log(obj)
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function()
//     {
//         let error=false
//         if(!error)
//         {
//             resolve({username:"dev",email:"dev@gmail.com"})
//         }
//         else
//         {
//             reject('ERROR : something went wrong')
//         }
//     },1000)
// })
// promiseFour.then(function(obj) {
//     console.log(obj)
//     return obj.username
// }).then((username)=> { 
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{ console.log("promise is either resolved or rejected") })



// async function consumePromise() {
//     try {
//         const user = await promiseFour; // Waits for the promise to resolve/reject
//         console.log(user); // Logs the resolved object
//         console.log(user.username); // Logs "hitesh"
//     } catch (error) {
//         console.log(error); // Logs error message if rejected
//     } finally {
//         console.log("The promise is either resolved or rejected");
//     }
// }


// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function()
//     {
//         let error=true
//         if(!error)
//         {
//             resolve({username:"javascript",password:"123"})
//         }
//         else
//         {
//             reject('ERROR : something went wrong')
//         }
//     },1000)
// })
// async function consumePromiseFive(){
//     try 
//     {
//         const response = await promiseFive
//         console.log(response);
//     } 
//     catch (error) 
//     {
//         console.log(error);
//     }
// }

// consumePromiseFive()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
