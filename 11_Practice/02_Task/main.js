let arr=[]
// const size=document.querySelector("#size_btn").addEventListener('click',function(){
//     const size=document.querySelector("#size").value
//     console.log(size)
// })
// let 
document.querySelector("#btn").addEventListener('click',function(e)
{
    //  let num=null;
    // console.log(e.key);
 
    const num=document.querySelector("#element").value
    arr.push(Number(num))
    console.log(arr);
    document.querySelector("#element").value="";
    
  
})



document.querySelector("#finish").addEventListener('click',function()
{
    console.log(arr)
    let mx=Math.min(...arr),mn=Math.max(...arr);
    
    // for(let i in arr)
    // {
    //     if(mx<arr[i])
    //         mx=arr[i]

    //     if(mn>arr[i])
    //         mn=arr[i]
    // }
    // console.log(` max elemtns ${mx}`)
    // console.log(` min elemtns ${mn}`)
    // document.querySelector("#res").innerHTML= `Your array is: ${arr} <br> Minimum element is: ${mn} <br>
    // Maximum element is: ${mx}`
    const para=document.createElement("p");
    para.id="yup"
    para.innerHTML=`Your array is: ${arr} <br> Minimum element is: ${mn} <br>
    Maximum element is: ${mx}`

    document.body.appendChild(para)
    arr=[]
})


