// // ***********pin generate code start
// function getPin() {
//   const pin = Math.round(Math.random() * 10000);
//   const pinString = pin + "";
//   if (pinString.length == 4) {
//     return pin;
//   } else {
//     // console.log('got 3 digit and calling again', pin);
//     return getPin();
//   }
// }
// function generatePin() {
//   const pin = getPin();
//   document.getElementById("display-pin").value = pin;
// }
// // ***********pin generate code end

// // ***********calculator code start
// //using event bubble
// document.getElementById("key-pad").addEventListener("click", function (event) {
//   // console.log(event.target.innerText);
//   const calcInput = document.getElementById("typed-numbers");
//   const number = event.target.innerText;
//   const successMessage = document.getElementById("notify-success");
//   const failError = document.getElementById("notify-fail");
//   if (isNaN(number)) {
//     if (number == "C") {
//       calcInput.value = "";
//       failError.style.display = "none";
//       successMessage.style.display = "none";
//     }
//   } else {
//     const previousNumber = calcInput.value;
//     const newCalc = previousNumber + number;
//     calcInput.value = newCalc;
//   }
// });

// function verifyPin() {
//   const pin = document.getElementById("display-pin").value;
//   const typedNumbers = document.getElementById("typed-numbers").value;
//   const successMessage = document.getElementById("notify-success");
//   const failError = document.getElementById("notify-fail");
//   if (pin == typedNumbers) {
//     successMessage.style.display = "block";
//     failError.style.display = "none";
//   } else {
//     failError.style.display = "block";
//     successMessage.style.display = "none";
//   }
// }

 const m = Math.floor(Math.random()*90000) + 10000;
console.log(m);
// ***********calculator code end
