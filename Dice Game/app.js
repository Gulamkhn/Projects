window.onload = function () {
  let dice = document.getElementById("dice");
  let number = document.getElementById("number");
  let audio = document.getElementById("dice-audio");
  function rolling() {
    dice.classList.add("roll-dice");
    audio.play();
    number.innerText = " ";
    let random = Math.floor(Math.random() * 7);
    dice.addEventListener("animationend", () => {
      dice.classList.remove("roll-dice");
      number.innerText = random;
    });
  }
  document.querySelector(".btn").addEventListener("click", rolling);
};

// OR another Method

// let dice = document.getElementById("dice");
// let number = document.getElementById("number");
// let audio = document.getElementById("dice-audio")
// function rolling() {
//   dice.classList.add("roll-dice");
//   audio.play();
//   number.innerText = " ";
//   setTimeout(() => {
//     let random = Math.floor(Math.random()*7);
//     dice.classList.remove("roll-dice");
//     number.innerText = random;
//   }, 1200);
// }
