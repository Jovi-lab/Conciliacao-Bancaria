const storyData = {
  intro: {
    title: "A Missão de Jonas",
    text: "Deus pediu a Jonas que fosse até Nínive para alertar o povo. Mas Jonas ficou com medo...",
    image: "https://images.unsplash.com/photo-1601758123927-1961c6e5f7c8?auto=format&fit=crop&w=1920&q=80",
    choices: [
      { text: "Obedecer e ir para Nínive", next: "ninive", correct: true },
      { text: "Fugir para Társis", next: "fuga", correct: false },
      { text: "Ficar pensando", next: "reflexao", correct: false }
    ]
  },
  fuga: {
    title: "A Fuga",
    text: "Jonas embarca num navio, mas uma tempestade terrível começa!",
    image: "https://images.unsplash.com/photo-1509817316-6e3d5d9c1f4c?auto=format&fit=crop&w=1920&q=80",
    choices: [
      { text: "Confessar aos marinheiros", next: "confissao", correct: true },
      { text: "Se esconder no porão", next: "porao", correct: false },
      { text: "Cantar para acalmar", next: "cantar", correct: false }
    ]
  },
  confissao: {
    title: "O Mar e o Peixe",
    text: "Jonas confessa e é lançado ao mar. Um grande peixe o engole!",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1920&q=80",
    choices: [
      { text: "Orar dentro do peixe", next: "arrependimento", correct: true },
      { text: "Tentar escapar", next: "tentativa", correct: false },
      { text: "Fazer amizade com o peixe", next: "amizade", correct: false }
    ]
  },
  arrependimento: {
    title: "Libertação",
    text: "Jonas ora sinceramente. Deus o liberta e ele vai para Nínive.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1920&q=80",
    choices: [
      { text: "Pregar em Nínive", next: "ninive", correct: true },
      { text: "Voltar para casa", next: "volta", correct: false },
      { text: "Ficar na praia", next: "descanso", correct: false }
    ]
  },
  ninive: {
    title: "Missão Cumprida",
    text: "Jonas prega em Nínive. O povo se arrepende e Deus os perdoa!",
    image: "https://images.unsplash.com/photo-1581091870620-1e7e8f3f9b6b?auto=format&fit=crop&w=1920&q=80",
    choices: []
  },

  // Alternativas reflexivas
  reflexao: {
    title: "Pensando demais...",
    text: "Jonas pensou tanto que perdeu o navio.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    lesson: "Pensar é bom, mas agir é essencial."
  },
  porao: {
    title: "Escondido",
    text: "Jonas se escondeu e quase virou sushi.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1920&q=80",
    lesson: "Fugir dos problemas não os resolve."
  },
  cantar: {
    title: "Cantoria inútil",
    text: "Jonas cantou, mas a tempestade só piorou.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80",
    lesson: "Criatividade sem direção não acalma tempestades."
  },
  tentativa: {
    title: "Tentativa frustrada",
    text: "Jonas tentou sair pela guelra... sem sucesso.",
    image: "https://images.unsplash.com/photo-1601758123927-1961c6e5f7c8?auto=format&fit=crop&w=1920&q=80",
    lesson: "Nem toda saída é solução."
  },
  amizade: {
    title: "Peixoto, o amigo",
    text: "Jonas fez amizade com o peixe. Conversaram por dias.",
    image: "https://images.unsplash.com/photo-1601758123927-1961c6e5f7c8?auto=format&fit=crop&w=1920&q=80",
    lesson: "Amizades improváveis ensinam, mas não substituem a missão."
  },
  volta: {
    title: "Conforto",
    text: "Jonas voltou para casa, mas a missão o esperava.",
    image: "https://images.unsplash.com/photo-1601758123927-1961c6e5f7c8?auto=format&fit=crop&w=1920&q=80",
      },
  descanso: {
    title: "Descanso eterno?",
    text: "Jonas deitou na praia... e esqueceu da missão.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1920&q=80",
    lesson: "Descansar é necessário, mas não podemos esquecer o propósito."
  }
};
