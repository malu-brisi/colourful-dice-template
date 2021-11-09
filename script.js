// Rolls 6 sided die

var display6 = document.getElementById("display6");
var randomizer6  = document.getElementById("randomizer6")
randomizer6.addEventListener("click",function(){ rollDice6() } );

function rollDice6() {
  document.getElementById("display6").innerText = 1+Math.floor(Math.random()*6);
  document.getElementById("display6").style.color = "black";
}

// Rolls 20 sided die

var display20 = document.getElementById("display20");
var randomizer20  = document.getElementById("randomizer20")
randomizer20.addEventListener("click",function(){ rollDice20() } );

function rollDice20() {
  document.getElementById("display20").innerText = 1+Math.floor(Math.random()*20);
  document.getElementById("display20").style.color = "black";
}

// Use this template to create an N sided die
// NOTICE: uncomment before use.

// var displayN = document.getElementById("displayN");
// var randomizerN  = document.getElementById("randomizerN")
// randomizerN.addEventListener("click",function(){ rollDiceN() } );

// function rollDiceN() {
//   document.getElementById("displayN").innerText = 1+Math.floor(Math.random()*N);
//   document.getElementById("displayN").style.color = "black";
// }
