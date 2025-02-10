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
## project 2
```javascript 

//here we have to calculate BMI for that we need to fetch height and weight for that we use events then we have to make one function for calculate BMI and we need to display that
//fetch calculate display

//all things done in form so we select form first
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //stop defaul action
  //we need height and weight
  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  const res = document.querySelector('#results');

  if (h < 0 || isNaN(h)) 
  res.innerHTML = `Please enter a valid height`;
  else if(w<0 || isNaN(w))
  res.innerHTML = `Please enter a valid weight`;
  else
  {
    const bmi= ( w/((h*h)/10000) ).toFixed(2);
    //show result
    res.innerHTML =`<span> ${bmi} </span>`
  }
  
  //res.innerHTML= `${h}`
});

```

## project 3
```javascript
const clock=document.getElementById('clock')

// let date=new Date();

// console.log(date.toLocaleTimeString()); //gives time
//but here we need to update this time every second so we need to know JS method name setInterval 

//time will update in every 1 sec
setInterval(function(){
  let date=new Date();
  //console.log(date.toLocaleTimeString()); //gives time
  clock.innerHTML=date.toLocaleTimeString()
}, 1000) // 1000 mili second=1 second
```

## project 4 
```javascript

//we have to generate number between 1 to 100
let RandomNo=parseInt(Math.random()*100 +1)
console.log(RandomNo)
//we have to get the number 
let guess = document.querySelector('#guessField');
let submit=document.querySelector('#subt');
//we have to post(print) msg
let prevGuess = document.querySelector('.guesses')
let remGuess= document.querySelector('.lastResult')
let message = document.querySelector('.msg')
let startnew =document.querySelector('.resultParas')


//this is empty paragraph we will add text in this by JS post
const p = document.createElement('p');
//varible for tract the remaining attempt
let cntGuess=1
//flag for check we can play or not 
let playgame=true 


//check if we can play or not , if yes then we do all operations
if(playgame)
{
  //check if submit press so we call event 
  submit.addEventListener('click', function(e)
    {
      e.preventDefault(); // stop all operation 
      const guessNo=parseInt(guess.value)
      console.log(guessNo)
      validateNo(guessNo)
    }
  )
}
//create methods 
//check the number is bewteen 1 to 100
function validateNo(guessNo)
{
  if(isNaN(guessNo))
  alert('PLease enter a valid number'); //pop msg
  else if(guessNo<1)
  alert('PLease enter a number more than 1');
  else if(guessNo>100)
  alert('PLease enter a  number less than 100');
  else
  {
    if(cntGuess>10)
    {
      update(guessNo)
      displayMessage(`Game Over. Random number was ${RandomNo}`);
      endGame();
    }
    else
    {
      update(guessNo)
      checkNo(guessNo)
    }
  }

}
function checkNo(guessNo)
{
  if(guessNo > RandomNo)
  displayMessage(`Number is TOOO High`);
  else if(guessNo < RandomNo)
  displayMessage(`Number is TOOO low`);
  else
  {
    displayMessage(`You guessed it right`);
    endGame();
  }
}

function update(guessNo)
{
  guess.value=''
  prevGuess.innerHTML +=`${guessNo}, `;
  cntGuess++
  remGuess.innerHTML= `${11 - cntGuess} `;
}

function displayMessage(msg)
{
  message.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() 
{
  guess.value = ''; //refresh game
  guess.setAttribute('disabled', '');
  //we add button and text in empty paragraph (post)
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startnew.appendChild(p);
  playgame = false;
  newGame();
}


function newGame()
{
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e)
  {
    //reset all value
    RandomNo=parseInt(Math.random()*100 +1)
    prevGuess.innerHTML=''
    cntGuess=1
    remGuess.innerHTML= `${11 - cntGuess} `;
    guess.removeAttribute('disabled')
    startnew.removeChild(p);
    playgame=true
  }
  )
}
```
## project5
```javascript 

// //we want to change color to white when start is pressed
// document.querySelector("#start").addEventListener('click', function(){
//   document.querySelector('body').style.backgroundColor = "#ffffff";
// }) 
// //we want to change bg color to grey when stop is pressed
// document.querySelector("#stop").addEventListener('click', function(){
//   document.querySelector('body').style.backgroundColor = "#212121";
// }) 

//here we want that when we presss start background color should change every second and when i press stop it should stop
const randomColor=function()
 {
   let color="#"
   const hex='0123456789ABCDEF'
   for(let i=0;i<6;i++)
   {
     color+=hex[Math.floor(Math.random()*16)]
   }
   return color
 }
const myColor=function changeColor()
{
  let RC=randomColor()
  document.querySelector('body').style.backgroundColor=RC
}

let intervalID;

//start color change
 document.querySelector("#start").addEventListener('click',function()
 {
   if(!intervalID)
   intervalID=setInterval(myColor,1500)
 }
 )

 //stop color change
 document.querySelector("#stop").addEventListener('click',function()
 {
   clearInterval(intervalID)
   document.querySelector('body').style.backgroundColor = "#212121"; // Grey
   intervalID=null
 } 
 )


```
## project 6
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr> 
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```
