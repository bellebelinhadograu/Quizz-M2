const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
    {
     enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
   
    {
      text:  "Minecraft",
      afirmacao: "afirmacao"
    },
    { 
      text: "Fortnite", 
      afirmacao: "afirmacao"
    }
]
   },
   {
     enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     {text:  "Roblox",
      afirmacao: "afirmacao"
      },
      { 
      text: "Among us", 
      afirmacao: "afirmacao"
    }
]
    },
    {
     enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      text: "Call Of Dutty", 
      afirmacao: "afirmacao"
    },
    { 
      text: "Free Fire", 
      afirmacao: "afirmacao"
    }
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
    { 
      text: "Legue Of Legends", 
      afirmacao: "afirmacao"
    },
     { 
      text: "Mobile Legends", 
      afirmacao: "afirmacao"
    }
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      text: "Crash Bandicoot", 
      afirmacao: "afirmacao"
    },
    { 
      text: "Cuphead", 
      afirmacao: "afirmacao"
    }
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      text: "Candy Crush Saga", 
      afirmacao: "afirmacao"
    }, 
     { 
      text: "The Sims", 
      afirmacao: "afirmacao"
    }
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      text: "Mortal Combat", 
      afirmacao: "afirmacao"
    },
     { 
      text: "Street Fighter", 
      afirmacao: "afirmacao"
    }
  ]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      text: "Super Mario Bros", 
      afirmacao: "afirmacao"
    },
     { 
      text: "Sonic The Hedgehog", 
      afirmacao: "afirmacao"
    }
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      text: "Forza Horizon", 
      afirmacao: "afirmacao"
    },
     { 
      text: "Grad Theft Auto V/GTA", 
      afirmacao: "afirmacao"
    }
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere?", 
   alternativas:[
     { 
      text: "FIFA/EA Sports FC", 
      afirmacao: "afirmacao"
    },
     { 
      text: "Valorant", 
      afirmacao: "afirmacao"
    } 
    
]
     }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}
function mostraAlternativas(){
  for(const alternativa of perguntaAtual.alternativas){
      const botaoAlternativa = document.createElement("button");
      botaoAlternativa.textContent = alternativa.textoResultado
      caixaAlternativas.appendChild(botaoAlternativa);
      mostraAlternativas();
  }
}
mostraPergunta();