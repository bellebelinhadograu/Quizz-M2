const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

cosnt perguntas =[
    {
     enunciado: "Qual desses dois jogos você prefere", 
   alternativas:[
    "Minecraft", 
    "Fortinite"
]
   },
   {
     enunciado: "Qual desses dois jogos você prefere", 
   alternativas:[
    "Roblox", 
    "Among us"
]
    },
    {
     enunciado: "Qual desses dois jogos você prefere", 
   alternativas:[
    "Call of Duty", 
    "Free Fire"
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere", 
   alternativas:[
    "Legue Of Legends", 
    "Mobile Legends"
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere", 
   alternativas:[
    "Crash Bandicoot", 
    "Cuphead"
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere", 
   alternativas:[
    "Candy Crush Saga", 
    "The Sims"
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere", 
   alternativas:[
    "Mortal Combat", 
    "Street Fighter"
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere", 
   alternativas:[
    "Super Mario Bros", 
    "Sonic the Hedgehog"
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere", 
   alternativas:[
    "Forza Horizongit", 
    "Grad Theft Auto V"
]
    },
    {
      enunciado: "Qual desses dois jogos você prefere", 
   alternativas:[
    "FIFA/EA Sports FC", 
    "Valorant"
]
     }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();