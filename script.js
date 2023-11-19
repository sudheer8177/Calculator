let Button=document.querySelectorAll('.btn');
let display=document.querySelector('.Display');
let Equal= document.querySelector('.btn-equal');
let clear = document.querySelector('.btn-clear');
let BackSpace = document.querySelector('.btn-bsc');

Button.forEach(function(Button){
  Button.addEventListener('click',() =>{
    display.innerHTML+=Button.innerHTML;
  })
});

Equal.addEventListener('click',()=>{
  if(display.innerHTML === " ")
  {
    display.innerHTML=" ";
  }
  else
  {
    let ans=eval(display.innerText);
    display.innerHTML =  ans;

  }
})

clear.addEventListener('click',()=> {
  display.innerHTML =" ";
})

BackSpace.addEventListener('click',()=>{
  display.innerText=display.innerText.slice(0,-1);
})
