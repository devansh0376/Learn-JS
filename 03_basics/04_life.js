//IIFE (immediately invoked function expression)

/*if we don'w want to call */

// function chai()
// {
//     console.log(`DBC`)
// }
// chai()
//IIFE
(function chai()
{
    console.log(`DBC`)
})();

(
    ()=>
        {
            console.log("HII")
        }
)();
//js code excute in two parts : creation phase and excutation phase
//stack : LIFO