const storyData = {
  intro: {
    title: "A Missão de Jonas",
    text: "Deus pediu a Jonas que fosse até Nínive para alertar o povo. Mas Jonas ficou com medo...",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // oceano realista
    choices: [
      { text: "Obedecer e ir para Nínive", next: "ninive", correct: true },
      { text: "Fugir para Társis", next: "fuga", correct: false },
      { text: "Ficar parado pensando", next: "reflexao", correct: false }
    ]
  },
  fuga: {
    title: "Jonas tenta fugir",
    text: "Jonas embarca num navio, mas uma tempestade terrível começa!",
    image: "https://images.unsplash.com/photo-1509817316-6e3d5d9c1f4c", // tempestade realista
    choices: [
      { text: "Confessar aos marinheiros", next: "confissao", correct: true },
      { text: "Se esconder no porão", next: "porao", correct: false },
      { text: "Cantar para acalmar", next: "cantar", correct: false }
    ]
  },
  confissao: {
    title: "Jonas é lançado ao mar",
    text: "Jonas confessa e é lançado ao mar. Um grande peixe o engole!",
    image: "https://images.unsplash.com/photo-1601758123927-1961c6e5f7c8", // baleia realista
    choices: [
      { text: "Orar dentro do peixe", next: "arrependimento", correct: true },
      { text: "Tentar escapar sozinho", next: "tentativa", correct: false },
      { text: "Fazer amizade com o peixe", next: "amizade", correct: false }
    ]
  },
  arrependimento: {
    title: "Jonas ora e é libertado",
    text: "Jonas ora sinceramente. Deus o liberta e ele vai para Nínive.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // praia realista
    choices: [
      { text: "Pregar em Nínive", next: "ninive", correct: true },
      { text: "Voltar para casa", next: "volta", correct: false },
      { text: "Ficar na praia descansando", next: "descanso", correct: false }
    ]
  },
  ninive: {
    title: "Missão Cumprida",
    text: "Jonas prega em Nínive. O povo se arrepende e Deus os perdoa!",
    image: "https://images.unsplash.com/photo-1581091870620-1e7e8f3f9b6b", // cidade realista
    choices: []
  },

  // Cenas alternativas com observações engraçadas
  reflexao: {
    title: "Jonas pensou demais...",
    text: "Enquanto Jonas refletia, o tempo passou... e ele perdeu o navio!",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // oceano calmo
    lesson: "Às vezes pensar demais nos faz perder oportunidades."
  },
  porao: {
    title: "Jonas se escondeu",
    text: "Jonas dormiu no porão... e quase virou sushi!",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90", // porão escuro
    lesson: "Fugir dos problemas só os deixa mais assustadores."
  },
  cantar: {
    title: "Jonas cantou",
    text: "Jonas cantou tão alto que os peixes fugiram... menos um!",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438", // peixe curioso
    lesson: "Nem toda solução criativa resolve tempestades."
  },
  tentativa: {
    title: "Jonas tentou escapar",
    text: "Jonas tentou sair pela guelra... mas era só uma ideia furada.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90", // interior do peixe
    lesson: "Nem toda saída é uma solução."
  },
  amizade: {
    title: "Jonas fez amizade",
    text: "Jonas chamou o peixe de 'Peixoto' e jogaram conversa fora por 3 dias.",
    image: "https://images.unsplash.com/photo-1601758123927-1961c6e5f7c8", // peixe realista
    lesson: "Até amizades improváveis podem ensinar algo... mas não substituem a missão."
  },
  volta: {
    title: "Jonas voltou pra casa",
    text: "Jonas voltou... mas a missão ainda o esperava.",
    image: "https://images.unsplash.com/photo-1606788075761-6c0f7f3f7f3f", // casa simples
    lesson: "O conforto não deve nos afastar do propósito."
  },
  descanso: {
    title: "Jonas descansou demais",
    text: "Jonas dormiu tanto que quase virou areia!",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // praia realista
    lesson: "Descansar é bom, mas não podemos esquecer nossa missão."
  }
};
