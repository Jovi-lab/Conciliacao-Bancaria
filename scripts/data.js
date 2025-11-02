const storyData = {
  intro: {
    title: "A Missão de Jonas",
    text: "Deus pediu a Jonas que fosse até Nínive para alertar o povo. Mas Jonas ficou com medo...",
    image: "https://www.freebibleimages.org/img/illustrations/jonah_001.jpg",
    choices: [
      { text: "Obedecer e ir para Nínive", next: "ninive", correct: true },
      { text: "Fugir para Társis", next: "fuga", correct: false },
      { text: "Ficar pensando", next: "reflexao", correct: false }
    ]
  },
  fuga: {
    title: "A Fuga",
    text: "Jonas embarca num navio, mas uma tempestade terrível começa!",
    image: "https://www.freebibleimages.org/img/illustrations/jonah_002.jpg",
    choices: [
      { text: "Confessar aos marinheiros", next: "confissao", correct: true },
      { text: "Se esconder no porão", next: "porao", correct: false },
      { text: "Cantar para acalmar", next: "cantar", correct: false }
    ]
  },
  confissao: {
    title: "O Mar e o Peixe",
    text: "Jonas confessa e é lançado ao mar. Um grande peixe o engole!",
    image: "https://www.freebibleimages.org/img/illustrations/jonah_004.jpg",
    choices: [
      { text: "Orar dentro do peixe", next: "arrependimento", correct: true },
      { text: "Tentar escapar", next: "tentativa", correct: false },
      { text: "Fazer amizade com o peixe", next: "amizade", correct: false }
    ]
  },
  arrependimento: {
    title: "Libertação",
    text: "Jonas ora sinceramente. Deus o liberta e ele vai para Nínive.",
    image: "https://www.freebibleimages.org/img/illustrations/jonah_006.jpg",
    choices: [
      { text: "Pregar em Nínive", next: "ninive", correct: true },
      { text: "Voltar para casa", next: "volta", correct: false },
      { text: "Ficar na praia", next: "descanso", correct: false }
    ]
  },
  ninive: {
    title: "Missão Cumprida",
    text: "Jonas prega em Nínive. O povo se arrepende e Deus os perdoa!",
    image: "https://www.freebibleimages.org/img/illustrations/jonah_008.jpg",
    choices: []
  },

  // Alternativas reflexivas
  reflexao: {
    title: "Pensando demais...",
    text: "Jonas pensou tanto que perdeu o navio.",
    image: "https://www.freebibleimages.org/img/illustrations/jonah_001.jpg",
    lesson: "Pensar é bom, mas agir é essencial."
  },
  porao: {
    title: "Escondido",
    text: "Jonas se escondeu e quase virou sushi.",
    image: "https://www.freebibleimages.org/img/illustrations/jonah_003.jpg",
    lesson: "Fugir dos problemas não os resolve."
  },
  cantar: {
    title: "Cantoria inútil",
    text: "Jonas cantou, mas a tempestade só piorou.",
    image: "https://www.freebibleimages.org/img/illustrations/jonah_003.jpg",
    lesson: "Criatividade sem direção não acalma tempestades."
  },
  tentativa: {
    title: "Tentativa frustrada",
    text: "Jonas tentou sair pela guelra... sem sucesso.",
    image: "https://www.freebibleimages.org/img/illustrations/jonah_005.jpg",
    lesson: "Nem toda saída é solução."
  },
  amizade: {
    title: "Peixoto, o amigo",
    text: "Jonas fez amizade com o peixe. Conversaram por dias.",
    image: "https://www.freebibleimages.org/img/illustrations/jonah_005.jpg",
    lesson: "Amizades improváveis ensinam, mas não substituem a missão."
  },
  volta: {
    title: "Conforto",
    text: "Jonas voltou para casa, mas a missão o esperava.",
    image: "https://www.freebibleimages.org/img/illustrations/jonah_007.jpg",
    lesson: "O conforto não deve nos afastar do propósito."
  },
  descanso: {
    title: "Descanso eterno?",
    text: "Jonas deitou na praia... e esqueceu da missão.",
    image: "https://www.freebibleimages.org/img/illustrations/jonah_007.jpg",
    lesson: "Descansar é necessário, mas não podemos esquecer o propósito."
  }
};
