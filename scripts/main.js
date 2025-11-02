document.addEventListener("DOMContentLoaded", () => {
  const textEl = document.getElementById("scene-text");
  const imageEl = document.getElementById("scene-image");
  const buttons = document.querySelectorAll(".choice-btn");

  // Mostra visão inicial (Cristo)
  const setView = (view) => {
    const scene = storyData[view];
    textEl.textContent = scene.text;
    imageEl.src = scene.image;
  };

  setView("cristo");

  // Muda o ponto de vista ao clicar
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.getAttribute("data-view");
      setView(view);
    });
  });
});
