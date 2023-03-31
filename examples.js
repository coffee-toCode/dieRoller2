/*The code defines a function, rollDice, that takes a number of sides as a parameter and returns a random number between 1 and that number inclusive.


It also defines another function, sneakAttackRoll, which calls rollDice three times with 6-sided dice, adds up the results, and returns the total.


Then an event listener is added to the "rollButton" element. When clicked, it retrieves the value of the "diceSelect" dropdown menu and the "result" element, and assigns them to diceSelect and resultElement respectively. If the selected value is "3d6", it calls sneakAttackRoll and displays the result on the page. Otherwise, it calls rollDice with the selected number of sides and displays the result on the page. */
const rollDice = (sides) => {
  return Math.floor(Math.random() * sides + 1);
};

const sneakAttackRoll = () => {
  let total = 0;
  for (let i = 0; i < 3; i++) {
    total += rollDice(6);
  }
  return total;
};

document.getElementById("rollButton").addEventListener("click", () => {
  const diceSelect = document.getElementById("diceSelect");
  const resultElement = document.getElementById("result");
  const selectedDie = diceSelect.value;

  if (selectedDie === "3d6") {
    resultElement.textContent = sneakAttackRoll();
  } else {
    resultElement.textContent = rollDice(selectedDie);
  }
});