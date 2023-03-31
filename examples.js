const rollDice = (sides, resultElementId) => {
  const resultElement = document.getElementById(resultElementId); 
  resultElement.textContent = Math.floor(Math.random() * sides + 1); 
}; 

const sneakAttack = () => { 
  const resultElement = document.getElementById("result3d6"); 
  let total = 0; 
  for (let i = 0; i < 3; i++) { 
    total += Math.floor(Math.random() * 6 + 1); 
  } 
  resultElement.textContent = total; 
};

document.getElementById("d20").addEventListener("click", () => rollDice(20, "d20result")); 
document.getElementById("d100").addEventListener("click", () => rollDice(100, "d100result"));
document.getElementById("d12").addEventListener("click", () => rollDice(12, "d12result")); 
document.getElementById("d10").addEventListener("click", () => rollDice(10, "d10result")); 
document.getElementById("d8").addEventListener("click", () => rollDice(8, "d8result")); 
document.getElementById("d6").addEventListener("click", () => rollDice(6, "d6result")); 
document.getElementById("d4").addEventListener("click", () => rollDice(4, "d4result")); 
document.getElementById("sneak").addEventListener("click", sneakAttack);