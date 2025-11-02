const container = document.getElementById("story");
let currentScene = "intro";

function renderScene(sceneId) {
  const scene = storyData.find(s => s.id === sceneId);
  container.innerHTML = `
    <h2>${scene.title}</h2>
    <img src="${scene.image}" alt="Cena ilustrativa" class="scene-img">
    <p>${scene.text}</p>
    <div class="choices">
      ${scene.choices.map((choice, index) => `
        <button onclick="choose('${choice.nextId}', '${choice.lesson}')">${choice.text}</button>
      `).join("")}
    </div>
  `;
}

function choose(nextId, lesson) {
  alert("📜 Ensinamento: " + lesson);
  currentScene = nextId;
  renderScene(currentScene);
}

window.onload = () => renderScene(currentScene);
