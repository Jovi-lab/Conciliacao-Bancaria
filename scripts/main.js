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
      const btn = document.createElement("button");
      btn.textContent = choice.text;
      btn.onclick = () => {
        if (choice.correct) {
          renderScene(choice.next);
        } else {
          renderScene(choice.next);
          setTimeout(() => {
            const lesson = storyData[choice.next].lesson;
            if (lesson) {
              const div = document.createElement("div");
              div.className = "lesson";
              div.textContent = "💡 " + lesson;
              container.appendChild(div);
            }
          }, 500);
        }
      };
      container.appendChild(btn);
   
