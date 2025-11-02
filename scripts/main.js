const container = document.getElementById("story-container");
let currentScene = "intro";

function typeWriter(text, element, i = 0) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(text, element, i + 1), 30);
  }
}

function renderScene(sceneId) {
  const scene = storyData[sceneId];
  container.innerHTML = `
    <h2>${scene.title}</h2>
    <img src="${scene.image}" alt="Cena ilustrativa" class="scene">
    <p id="scene-text"></p>
  `;

  const textElement = document.getElementById("scene-text");
  typeWriter(scene.text, textElement);

  if (scene.choices && scene.choices.length > 0) {
    scene.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.onclick = () => handleChoice(choice);
      container.appendChild(button);
    });
  } else {
    if (scene.lesson) {
      const lessonBox = document.createElement("div");
      lessonBox.className = "lesson";
      lessonBox.textContent = "💡 " + scene.lesson;
      container.appendChild(lessonBox);
    }

    // Se for a cena final, mostra vídeo
    if (sceneId === "ninive") {
      const videoBox = document.createElement("div");
      videoBox.innerHTML = `
        <h3>🎬 Veja a história completa animada</h3>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/A6mqPc_JjkI" 
        title="Jonas e o Grande Peixe" frameborder="0" allowfullscreen></iframe>
      `;
      container.appendChild(videoBox);
    }
  }
}

function handleChoice(choice) {
  const nextScene = storyData[choice.next];
  renderScene(choice.next);
}

window.onload = () => renderScene(currentScene);
