//console.log("dd")

document.querySelector("#btn").addEventListener('click',function(e)
{
    const number=document.querySelector("#num").value
    //console.log(number)
   // console.log("dev")
   //console.log(number)
   if(number % 2==0)
    document.querySelector("#txt").innerHTML="Even"
   else 
   document.querySelector("#txt").innerHTML="Odd"
}
)

