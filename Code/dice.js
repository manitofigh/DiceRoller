const diceButton = document.getElementsByClassName("refresh-button")[0];
const diceAudio = new Audio("../Sounds/gamemisc_dice-roll-on-wood_jaku5-37414-[AudioTrimmer.com].mp3"); // Dice sound
// const diceAudio = new Audio("../Sounds/android2.mp3"); // Android sound

diceButton.addEventListener("click", function() {
  var randomDice1 = Math.floor(Math.random() * 6) + 1;
  var diceImage1 = "round" + randomDice1 + ".svg";
  var randomDice2 = Math.floor(Math.random() * 6) + 1;
  var diceImage2 = "round" + randomDice2 + ".svg";
  diceAudio.play();
  document.getElementsByTagName("img")[0].setAttribute("src", "../Images/" + diceImage1);
  document.getElementsByTagName("img")[1].setAttribute("src", "../Images/" + diceImage2);
//   location.reload();
});