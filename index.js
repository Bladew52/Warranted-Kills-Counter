let tully = document.getElementById("tullybutton")
let tyler = document.getElementById("tylerbutton")
let riley = document.getElementById("rileybutton")
let random = document.getElementById("randombutton")
let tullyCount = document.getElementById("tullybox")
let tylerCount = document.getElementById("tylerbox")
let rileyCount = document.getElementById("rileybox")
let randomCount = document.getElementById("randombox")
let tullyCounter = 0
let tylerCounter = 0
let rileyCounter = 0
let randomCounter = 0

function alarm() {
    alert("Your squad thanks you for your service. You're not the hero we deserve, but the hero we need.")
}
tully.addEventListener("click", function() {
  tullyCounter ++; 
   tullyCount.textContent = tullyCounter
});
tyler.addEventListener("click", function() {
  tylerCounter ++; 
   tylerCount.textContent = tylerCounter
});
riley.addEventListener("click", function() {
  rileyCounter ++; 
   rileyCount.textContent = rileyCounter
});
random.addEventListener("click", function() {
  randomCounter ++; 
   randomCount.textContent = randomCounter
});
const countersArray = [tullyCounter, tylerCounter, randomCounter];
localStorage.setItem('counts', JSON.stringify(countersArray));
const counterData = JSON.parse(localStorage.getItem('counts'))
console.log(counterData)
alarm()