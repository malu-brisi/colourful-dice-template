var display6 = document.getElementById("display6");
var randomizer6  = document.getElementById("randomizer6")
randomizer6.addEventListener("click",function(){ rollDice6() } );

var display20 = document.getElementById("display20");
var randomizer20  = document.getElementById("randomizer20")
randomizer20.addEventListener("click",function(){ rollDice20() } );

function rollDice6() {
  document.getElementById("display6").innerText = 1+Math.floor(Math.random()*6);
  document.getElementById("display6").style.color = "black";
}

function rollDice20() {
  document.getElementById("display20").innerText = 1+Math.floor(Math.random()*20);
  document.getElementById("display20").style.color = "black";
}
