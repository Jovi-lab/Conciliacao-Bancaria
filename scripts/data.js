const storyData = [
  {
    id: "intro",
    title: "A Missão de Jonas",
    text: "Deus pediu a Jonas que fosse até a cidade de Nínive para avisar o povo que seus atos estavam errados. Mas Jonas ficou com medo...",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jonah_Preaching_to_the_Ninevites.jpg/800px-Jonah_Preaching_to_the_Ninevites.jpg",
    choices: [
      {
        text: "Obedecer e ir para Nínive",
        nextId: "ninive",
        lesson: "Obedecer a Deus pode ser difícil, mas Ele sempre tem um plano maior."
      },
      {
        text: "Fugir para Társis",
        nextId: "fuga",
        lesson: "Fugir de responsabilidades pode trazer consequências inesperadas."
      },
      {
        text: "Ficar parado e pensar",
        nextId: "reflexao",
        lesson: "Refletir é bom, mas a indecisão também pode ser perigosa."
      }
    ]
  },
  {
    id: "fuga",
    title: "A Fuga de Jonas",
    text: "Jonas embarca num navio rumo a Társis. Mas uma grande tempestade começa!",
    image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/storm-1867279_1280.jpg",
    choices: [
      {
        text: "Dormir no porão",
        nextId: "sono",
        lesson: "Ignorar os problemas não os faz desaparecer."
      },
      {
        text: "Orar a Deus",
        nextId: "oracao",
        lesson: "Buscar a Deus em meio à tempestade é sempre o melhor caminho."
      },
      {
        text: "Confessar aos marinheiros",
        nextId: "confissao",
        lesson: "A verdade liberta, mesmo quando é difícil."
      }
    ]
  },
  {
    id: "confissao",
    title: "Jonas é lançado ao mar",
    text: "Jonas confessa que está fugindo de Deus. Os marinheiros o lançam ao mar e... um grande peixe o engole!",
    image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/whale-1992716_1280.jpg",
    choices: [
      {
        text: "Orar dentro do peixe",
        nextId: "arrependimento",
        lesson: "Mesmo no fundo do mar, Deus ouve nossas orações."
      },
      {
        text: "Tentar escapar sozinho",
        nextId: "tentativa",
        lesson: "Confiar em si mesmo pode ser perigoso quando estamos em apuros."
      },
      {
        text: "Aceitar o castigo",
        nextId: "aceitacao",
        lesson: "Aceitar as consequências é parte do crescimento."
      }
    ]
  },
  {
    id: "arrependimento",
    title: "Oração e Libertação",
    text: "Jonas ora sinceramente. Deus ouve e o peixe o vomita na praia.",
    image: "https://cdn.pixabay.com/photo/2016/11/18/15/07/beach-1836335_1280.jpg",
    choices: [
      {
        text: "Ir para Nínive",
        nextId: "ninive",
        lesson: "Deus dá novas chances para cumprir nossa missão."
      },
      {
        text: "Voltar para casa",
        nextId: "volta",
        lesson: "Às vezes queremos conforto, mas a missão ainda nos espera."
      },
      {
        text: "Ficar na praia descansando",
        nextId: "descanso",
        lesson: "Descansar é bom, mas não podemos esquecer o propósito."
      }
    ]
  },
  {
    id: "ninive",
    title: "A Mensagem em Nínive",
    text: "Jonas finalmente chega a Nínive e prega. O povo se arrepende e Deus os perdoa!",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Jonah_and_the_Whale.jpg/800px-Jonah_and_the_Whale.jpg",
    choices: [],
    lesson: "A obediência traz frutos maravilhosos. Deus é misericordioso!"
  }
];
