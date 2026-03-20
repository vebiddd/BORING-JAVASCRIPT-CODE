const myButton = document.getElementById("myButton")
const myLabel1 = document.getElementById("myLabel1")
const myLabel2 = document.getElementById("myLabel2")
const myLabel3 = document.getElementById("myLabel3")
const min = 1;
const max = 10;
let RandomNum1;
let RandomNum2;
let RandomNum3

myButton.onclick = function(){
  RandomNum1 =  Math.floor(Math.random() *max) + min;
  RandomNum2 =  Math.floor(Math.random() *max) + min;
  RandomNum3 =  Math.floor(Math.random() *max) + min;  
  myLabel1.textContent = RandomNum1
  myLabel2.textContent = RandomNum2
  myLabel3.textContent = RandomNum3
}



