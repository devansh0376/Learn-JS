# project related to DOM 

## Project Link 
[click here ](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project 1
```javascript 

const buttons = document.querySelectorAll('.button') //we get node list
const body= document.querySelector('body')
//here we want to change bg color according to click so we need to use event
//click event : we get info of that part which we click

/*
for change color we want the id of that box  
so we travers all button and check which buttton is clicked by evens in JS 

*/
//console.log(buttons)
buttons.forEach
(
  (btn)=>
  {
    console.log(btn)
    btn.addEventListener('click',(e)=>
      {
        //console.log(e) //all buttton
        // console.log(e.target) //we get info of button which we click 
        let click_btn = e.target.id
        if(click_btn=="grey")
        {
          body.style.backgroundColor=click_btn // or "grey"
        }
        if(click_btn=="yellow")
        body.style.backgroundColor=click_btn // or "yellow"

        if(click_btn=="white")
        body.style.backgroundColor=click_btn // or "white"

        if(click_btn=="blue")
        body.style.backgroundColor=click_btn // or "blue"
        // switch(click_btn)
        // {
        //   case 'grey':
        //     body.style.backgroundColor=click_btn // or "grey"
        //     break
        //   case 'white':
        //     body.style.backgroundColor=click_btn // or "white"
        //     break
        // }
      }
    )
  }
)

```

