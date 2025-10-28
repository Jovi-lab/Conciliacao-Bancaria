const patients = [
  {
    name: "Paciente 1",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    dialogue: "Eu não sei mais quem eu sou. Tudo parece vazio.",
    choices: [
      { text: "Você não está sozinho", impact: +2 },
      { text: "Isso é só uma fase", impact: 0 },
      { text: "Talvez você precise de ajuda", impact: +1 },
      { text: "Todos se sentem assim, supere", impact: -2 }
    ]
  },
  {
    name: "Paciente 2",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    dialogue: "Sinto que ninguém se importa comigo.",
    choices: [
      { text: "Eu me importo", impact: +2 },
      { text: "Você já tentou conversar com alguém?", impact: +1 },
      { text: "Isso é drama", impact: -2 },
      { text: "Talvez você esteja exagerando", impact: -1 }
    ]
  }
];
