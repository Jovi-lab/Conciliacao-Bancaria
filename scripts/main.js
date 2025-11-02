document.addEventListener("DOMContentLoaded", () => {
  const textEl = document.getElementById("scene-text");
  const imageEl = document.getElementById("scene-image");
  const buttons = document.querySelectorAll(".choice-btn");

  // função para atualizar cena
  const setView = (view) => {
    const scene = storyData[view];
    if (scene) {
      textEl.textContent = scene.text;
      imageEl.src = scene.image;
    } else {
      textEl.textContent = "Erro: ponto de vista não encontrado.";
      imageEl.src = "";
    }
  };

  // visão inicial
  setView("cristo");

  // adicionar eventos aos botões
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.getAttribute("data-view");
      setView(view);
    });
  });
});
