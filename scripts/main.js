/* main.js - lógica de interação
   Carregue data.js antes deste arquivo (index.html já está configurado assim).
*/

(function () {
  // segurança: verifica se storyData existe
  if (typeof storyData === "undefined") {
    console.error("Erro: storyData não encontrado. Verifique se data.js foi carregado.");
    alert("Erro interno: conteúdo da história não foi carregado. Verifique os arquivos.");
    return;
  }

  // elementos
  const textEl = document.getElementById("scene-text");
  const imageEl = document.getElementById("scene-image");
  const buttons = document.querySelectorAll(".choice-btn");

  // função para atualizar a cena, com tratamento de erros e fallback
  function setView(viewKey) {
    const scene = storyData[viewKey];
    if (!scene) {
      console.warn("Ponto de vista não encontrado:", viewKey);
      textEl.textContent = "Esta visão não está disponível.";
      if (fallbackImage) imageEl.src = fallbackImage;
      else imageEl.removeAttribute("src");
      return;
    }

    // atualiza texto
    textEl.textContent = scene.text || "";

    // atualiza imagem com fallback se não carregar
    if (scene.image) {
      imageEl.style.opacity = 0;
      // pequena espera para criar efeito de transição
      setTimeout(() => {
        imageEl.src = scene.image;
        imageEl.alt = scene.alt || "Imagem da cena";
      }, 60);
    } else {
      if (fallbackImage) imageEl.src = fallbackImage;
      else imageEl.removeAttribute("src");
    }
  }

  // quando imagem carrega, fade-in
  imageEl.addEventListener("load", () => {
    imageEl.style.opacity = 1;
  });

  // se imagem falhar (404, CORS, etc), tenta fallback
  imageEl.addEventListener("error", () => {
    console.warn("Falha ao carregar imagem:", imageEl.src);
    if (fallbackImage && imageEl.src !== fallbackImage) {
      imageEl.src = fallbackImage;
    } else {
      // remove a imagem e mantem só o texto
      imageEl.style.opacity = 0;
      imageEl.removeAttribute("src");
      imageEl.alt = "Imagem indisponível";
    }
  });

  // adiciona eventos aos botões
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const view = btn.getAttribute("data-view");
      setView(view);
    });
  });

  // visão inicial
  setView("cristo");
})();
