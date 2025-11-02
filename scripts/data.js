/* data.js - conteúdo da história e URLs das imagens
   OBS: mantenha este arquivo no mesmo diretório que index.html
*/

const storyData = {
  cristo: {
    text: "Jesus olha para cada um dos discípulos. Há calma e dor ao mesmo tempo — como se cada palavra fosse uma despedida que já escorre pela noite.",
    image: "https://cdn.pixabay.com/photo/2018/03/06/21/45/jesus-3201218_1280.jpg",
    alt: "Ilustração: Jesus na mesa com os discípulos"
  },
  judas: {
    text: "Judas observa com o coração apertado; o gesto de aceitar o pão pesa mais que o próprio alimento. A culpa já começa a fazer sombra sobre seus passos.",
    image: "https://cdn.pixabay.com/photo/2023/07/20/11/10/last-supper-8140755_1280.jpg",
    alt: "Ilustração: Judas pensativo durante a ceia"
  },
  discipulos: {
    text: "Os discípulos trocam olhares e sussurros. A noite tem um tom diferente — ninguém consegue ainda compreender a profundidade do que está por vir.",
    image: "https://cdn.pixabay.com/photo/2021/05/24/07/48/last-supper-6277444_1280.jpg",
    alt: "Ilustração: discípulos durante a Última Ceia"
  }
};

/* Fallback: imagem local ou alternativa (opcional)
   Se quiser adicionar uma imagem local como fallback, coloque o nome do arquivo aqui
   e garanta que o arquivo exista no repositório. Exemplo:
   const fallbackImage = 'fallback.jpg';
*/
const fallbackImage = null; // ou 'fallback.jpg'
