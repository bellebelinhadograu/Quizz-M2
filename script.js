const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
    {
     enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
   
    {
      texto:  "Minecraft",
      afirmacao: "afirmacao"
    },
    { 
      texto: "Fortnite", 
      afirmacao: "afirmacao"
    }
]
   },
   {
     enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     {texto:  "Roblox",
      afirmacao: "afirmacao"
      },
      { 
      texto: "Among us", 
      afirmacao: "afirmacao"
    }
]
    },
    {
     enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      texto: "Call Of Dutty", 
      afirmacao: "afirmacao"
    },
    { 
      texto: "Free Fire", 
      afirmacao: "afirmacao"
    }
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
    { 
      texto: "Legue Of Legends", 
      afirmacao: "afirmacao"
    },
     { 
      texto: "Mobile Legends", 
      afirmacao: "afirmacao"
    }
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      texto: "Crash Bandicoot", 
      afirmacao: "afirmacao"
    },
    { 
      texto: "Cuphead", 
      afirmacao: "afirmacao"
    }
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      texto: "Candy Crush Saga", 
      afirmacao: "afirmacao"
    }, 
     { 
      texto: "The Sims", 
      afirmacao: "afirmacao"
    }
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      texto: "Mortal Combat", 
      afirmacao: "afirmacao"
    },
     { 
      texto: "Street Fighter", 
      afirmacao: "afirmacao"
    }
  ]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      texto: "Super Mario Bros", 
      afirmacao: "afirmacao"
    },
     { 
      texto: "Sonic The Hedgehog", 
      afirmacao: "afirmacao"
    }
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      texto: "Forza Horizon", 
      afirmacao: "afirmacao"
    },
     { 
      texto: "Grad Theft Auto V/GTA", 
      afirmacao: "afirmacao"
    }
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      texto: "FIFA/EA Sports FC", 
      afirmacao: "afirmacao"
    },
    { 
      texto: "Valorant", 
      afirmacao: "afirmacao"
        },
       ]
     },
   ];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
  if(atual >= perguntas.length){
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas(){
  for(const alternativa of perguntaAtual.alternativas){
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botaoAlternativas);
  }
}
function respostaSelecionada(opcaoSelecionada){
      const afirmacoes = opcaoSelecionada.afirmacoes;
      historiaFinal += afirmacoes + " ";
      atual++;
      mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "Fim do jogo!Espero que você tenha se divertido e relembrado grandes momentos do mundo dos jogos durante este quiz.Obrigado por jogar até aqui, você foi um verdadeira gamer!Até a próxima partida...e continue sempre no modo diversão!"
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();