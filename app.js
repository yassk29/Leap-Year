var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output-div");
// var readlineSync = require('readline-sync');

function clickHandler() {
  // var year = readlineSync.question("Enter Year : ");

  if ((0 !== txtInput % 100) ? (0 === txtInput % 400) :(0 === txtInput % 4)) {
    outputDiv.innerText = txtInput.value + " is a leap year!";
    // console.log(\n")
  } else {
    outputDiv.innerText = txtInput.value + " is not a leap year!";
    // console.log(year + " is not a leap year!\n");
  }
}

btnTranslate.addEventListener("click", clickHandler);