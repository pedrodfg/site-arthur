function desvia(t) {
    const btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(20, 80);
    escreverMensagem();
  }
  
  function geraPosicao(min, max) {
    return Math.random() * (max - min) + min + "%";
  }
  
  function iniciarMusica() {
    const audio = new Audio("./imagens/musica.mp3");
    audio.play();
  }
  
  function mostrarImagemDeFundo() {
    document.body.classList.add('mostrar-fundo');
  }
  
  function mostrarConteudo() {
    const conteudo = document.getElementById("conteudo");
    const img = document.getElementById("img");
    const conteudo2 = document.getElementById("conteudo2");
  
    conteudo.style.display = "flex";
    img.style.display = "flex";
    conteudo2.style.display = "none";
  }
  
  function executarFuncoes() {
    iniciarMusica();
    mostrarConteudo();
    mostrarImagemDeFundo();
    const som = document.getElementById("som");
    som.style.display = "none";
  }
  
  function mostrarConteudo2() {
    const conteudo2 = document.getElementById("conteudo2");
    const img = document.getElementById("img");
    const conteudo = document.getElementById("conteudo");
    const mensagens = document.getElementById("mensagens");
  
    conteudo2.style.display = "flex";
    img.style.display = "none";
    conteudo.style.display = "none";
    mensagens.style.display = "none";
  }

var mensagens = [
    "prometo que sou um cara legal. 👍🏽",
    "me dá essa chance por favor 🥺",
    "nunca te pedi nada 🙏",
    "você não vai se arrepender! eu acho 😳",
    "tenho uma ótima playlist 🎶",
    "sei cozinhar muito bem 👨‍🍳",
    "minha mãe fala que eu sou lindo 😎",
    "tenho medo do bicho papão 😬",
    "eu sei matemática básica",
    "tenho dislexia",
    "tenho tdah",
    "o que a gente tava falando mesmo",
    "passei 15 minutos fazendo isso por favor",
    "copiei um cara só pra fazer isso é sério",
    "pra quê tanto não ta me deixando triste 😢",
    "Ei por favor pare está me machucando 😰",
    "o que eu te fiz me diz 😭",
    "estou de joelhos implorando neste instante",
    "é sério vc só n ta vendo",
    "essa é a última mensagem acabou minha criatividade",
    "eu menti, aceita logo",
    "não vou desistir sou brasilieiro",
    "brasileiros não desistem nunca",
    "tenho uma gata de 3 cores",
    "o nome dela é Arya",
    "tenho medo de altura",
    "já quebrei o dedo do meu irmão",
    "ja comi carne de coelho",
    "sei lá caralho não sei mais o que to falando",
    "ACEITA POR FAVOR ESSA É A ÚLTIMA MENSAGEM",
    "TA BOM EU MENTI É ESSA NA VERDADE",
    "TE ENGANEI É ESSA PARA DE TENTAR APERTAR NÃO",
    "PARA COM ISSO POR FAOVR EU TO CHORANDO",
    "TEM CRIANÇA DE COLO CORRENDO CEGO VENDO SURDO OUVINDO",
    "MIMDEPAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI",
];

let indiceMensagemAtual = 0;

function escreverMensagem() {
    const mensagem = mensagens[indiceMensagemAtual];
    const elementoMensagens = document.getElementById("mensagens");
    const novaMensagem = document.createElement("h3");
    novaMensagem.textContent = mensagem;
    novaMensagem.classList.add("texto2");
    novaMensagem.style.position = "absolute";
  
    let left, top;
    let tentativas = 0;
    const maxTentativas = 20;
    const mensagemWidth = 200; // Largura estimada da mensagem em pixels
    const mensagemHeight = 40; // Altura estimada da mensagem em pixels
    let sobreposicao = false;
  
    do {
      left = geraPosicao(10, 85);
      top = geraPosicao(10, 85);
      novaMensagem.style.left = left;
      novaMensagem.style.top = top;
  
      sobreposicao = false;
  
      const mensagensExistentes = elementoMensagens.querySelectorAll("h3");
      for (let i = 0; i < mensagensExistentes.length; i++) {
        const mensagemExistente = mensagensExistentes[i];
        const mensagemExistenteRect = mensagemExistente.getBoundingClientRect();
        const novaMensagemRect = novaMensagem.getBoundingClientRect();
  
        if (
          novaMensagemRect.left < mensagemExistenteRect.right &&
          novaMensagemRect.right > mensagemExistenteRect.left &&
          novaMensagemRect.top < mensagemExistenteRect.bottom &&
          novaMensagemRect.bottom > mensagemExistenteRect.top
        ) {
          sobreposicao = true;
          break;
        }
      }
  
      tentativas++;
    } while (sobreposicao && tentativas < maxTentativas);
  
    if (!sobreposicao) {
      novaMensagem.style.left = left + "px";
      novaMensagem.style.top = top + "px";
      elementoMensagens.appendChild(novaMensagem);
      indiceMensagemAtual = (indiceMensagemAtual + 1) % mensagens.length;
    }
  }
  
  
  
function voltar() {
  window.history.back();
}