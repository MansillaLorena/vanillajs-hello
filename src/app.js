/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let randomNumber = Math.random() * 10;
  document.querySelector("#the-excuse").innerHTML = generatExcuse();
  console.log("Hello Rigo from the console!");
};

let generatExcuse = () => {
  let who = ["A unicorn", "Wonder Woman", "A dancing penguin"];
  let action = [
    "did a somersault",
    "sang opera",
    "dressed up as a dinosaur",
    "told a terrible joke"
  ];
  let what = [
    "in the middle of the office",
    "at the supermarket",
    "during a conference"
  ];
  let when = [
    "yesterday afternoon",
    "Last weekend",
    "five minutes ago",
    "Last Monday"
  ];

  let whoindex = Math.floor(Math.random() * who.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let whatindex = Math.floor(Math.random() * what.length);
  let whenindex = Math.floor(Math.random() * when.length);

  return (
    who[whoindex] +
    " " +
    action[actionindex] +
    " " +
    what[whatindex] +
    " " +
    when[whenindex] +
    ""
  );
};
