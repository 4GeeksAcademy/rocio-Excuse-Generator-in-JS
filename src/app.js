/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function randomNum(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}
//Probando en consola
console.log(randomNum(who));

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let excuse = `${randomNum(who)} ${randomNum(action)} ${randomNum(
    what
  )} ${randomNum(when)}`;

  //Otra forma de concatenar
  // let excuse =
  //   randomNum(who) +
  //   " " +
  //   randomNum(action) +
  //   " " +
  //   randomNum(what) +
  //   " " +
  //   randomNum(when);
  document.getElementById("excuse").innerHTML = excuse;
};
