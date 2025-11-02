const container = document.getElementById("story-container");
let currentScene = "intro";

function renderScene(sceneId) {
  const scene = storyData[sceneId];
  container.innerHTML = `
    <h2>${scene.title}</h2>
    <img src="${scene.image}" alt="Cena ilustrativa" class="scene">
    <p>${scene.text}</p>
  `;

  if (scene.choices && scene.choices.length > 0) {
    scene.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.onclick = () => handleChoice(choice);
      container.appendChild(button);
    });
  } else if (scene.lesson) {
    const lessonBox = document.createElement("div");
    lessonBox.className = "lesson";
    lessonBox.textContent = "💡 " + scene.lesson;
    container.appendChild(lessonBox);
  }
}

function handleChoice(choice) {
  const nextScene = storyData[choice.next];
  renderScene(choice.next);

  if (!choice.correct && nextScene.lesson) {
    setTimeout(() => {
      const lessonBox = document.createElement("div");
      lessonBox.className = "lesson";
      lessonBox.textContent = "💡 " + nextScene.lesson;
      container.appendChild(lessonBox);
    }, 500);
  }
}

window.onload = () => renderScene(currentScene);
