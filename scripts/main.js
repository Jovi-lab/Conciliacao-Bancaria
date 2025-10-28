let currentStep = 0;
let totalImpact = 0;

const img = document.getElementById("patient-img");
const dialogueBox = document.getElementById("dialogue-box");
const choicesDiv = document.getElementById("choices");
const outcomeDiv = document.getElementById("outcome");
const restartBtn = document.getElementById("restart");

function startGame() {
  currentStep = 0;
  totalImpact = 0;
  outcomeDiv.classList.add("hidden");
  restartBtn.classList.add("hidden");
  choicesDiv.innerHTML = "";
  choicesDiv.classList.add("hidden");

  img.src = patient.image;
  dialogueBox.innerHTML = "";
  typeText(patient.dialogueSequence[currentStep].text, () => showChoices());
}

function typeText(text, callback) {
  let i = 0;
  dialogueBox.textContent = "";
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
  choicesDiv.innerHTML = "";
  choicesDiv.classList.remove("hidden");
  const choices = patient.dialogueSequence[currentStep].choices;
  choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => handleChoice(choice.impact);
    choicesDiv.appendChild(btn);
  });
}

function handleChoice(impact) {
  totalImpact += impact;
  currentStep++;
  choicesDiv.classList.add("hidden");

  if (currentStep < patient.dialogueSequence.length) {
    typeText(patient.dialogueSequence[currentStep].text, () => showChoices());
  } else {
    showOutcome();
  }
}

function showOutcome() {
  let result = "";
  if (totalImpact >= 5) {
    result = "O paciente encontrou sentido, reconstruiu sua vida e formou conexões profundas.";
  } else if (totalImpact >= 2) {
    result = "O paciente segue em frente com cicatrizes, mas com esperança.";
  } else {
    result = "O paciente se isolou, vive em silêncio e não encontrou desfecho feliz.";
  }
  outcomeDiv.textContent = result;
  outcomeDiv.classList.remove("hidden");
  restartBtn.classList.remove("hidden");
}

restartBtn.onclick = startGame;

startGame();
