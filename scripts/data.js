const patient = {
  image: "https://i.imgur.com/2ZC6ZtU.png",
  dialogueSequence: [
    {
      text: "Às vezes me pergunto se alguém realmente me vê... ou se sou só mais um vulto no fundo da sala.",
      choices: [
        { text: "Eu estou te vendo agora.", impact: +2 },
        { text: "Talvez você precise se mostrar mais.", impact: 0 },
        { text: "Isso é paranoia.", impact: -2 },
        { text: "Todos se sentem invisíveis às vezes.", impact: +1 }
      ]
    },
    {
      text: "É difícil confiar. Já fui quebrado tantas vezes que não sei mais como juntar os pedaços.",
      choices: [
        { text: "Você não precisa se reconstruir sozinho.", impact: +2 },
        { text: "Talvez seja hora de deixar o passado.", impact: +1 },
        { text: "Você se vitimiza demais.", impact: -2 },
        { text: "E se os pedaços formarem algo novo?", impact: +1 }
      ]
    },
    {
      text: "Hoje pensei em desaparecer. Não por raiva... só por cansaço.",
      choices: [
        { text: "Você merece descanso, não desaparecimento.", impact: +2 },
        { text: "Já pensou em buscar ajuda profissional?", impact: +1 },
        { text: "Isso é drama.", impact: -2 },
        { text: "O que te fez pensar nisso?", impact: +1 }
      ]
    }
  ]
};
