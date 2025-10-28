let currentPatient;
let totalImpact = 0;

const img = document.getElementById("patient-img");
const dialogueBox = document.getElementById("dialogue-box");
const choicesDiv = document.getElementById("choices");
const outcomeDiv = document.getElementById("outcome");
const restartBtn = document.getElementById("restart");

function startGame() {
  totalImpact = 0;
  outcomeDiv.classList.add("hidden");
  restartBtn.classList.add("hidden");
  choicesDiv.innerHTML = "";
  choicesDiv.classList.add("hidden");

  currentPatient = patients[Math.floor(Math.random() * patients.length)];
  img.src = currentPatient.image;
  dialogueBox.innerHTML = "";
  typeText(currentPatient.dialogue, () => showChoices());
}

function typeText(text, callback) {
  let i = 0;
  const interval = setInterval(() => {
    dialogueBox.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      callback();
    }
  }, 40);
}

function showChoices() {
  choicesDiv.classList.remove("hidden");
  currentPatient.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => handleChoice(choice.impact);
    choicesDiv.appendChild(btn);
  });
}

function handleChoice(impact) {
  totalImpact += impact;
  choicesDiv.classList.add("hidden");
  showOutcome();
}

function showOutcome() {
  let result = "";
  if (totalImpact >= 2) {
    result = "O paciente superou os desafios, construiu uma família e vive feliz.";
  } else if (totalImpact >= 0) {
    result = "O paciente vive uma vida comum, com altos e baixos.";
  } else {
    result = "O paciente não resistiu à dor, viveu sozinho e acabou tirando a própria vida.";
  }
  outcomeDiv.textContent = result;
  outcomeDiv.classList.remove("hidden");
  restartBtn.classList.remove("hidden");
}

restartBtn.onclick = startGame;

startGame();
