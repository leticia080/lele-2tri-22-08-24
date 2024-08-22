const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como um torcedor pode afetar uma estação de trem inteira por causa de uma aposta errada?",

        alternativas: [" Fazer com que o ambiente seja mais perigoso e violento, podendo resultar em feridos e até óbitos.",
            "Pode quebrar uma coisa ou outra da estação, mas logo pode ser contido e preso pela polícia."
        ]
    },

    {
        enunciado: "Que medidas de segurança devem ser tomadas contra brigas de torcedores em relação a população que utiliza  os transportes públicos?",
        alternativas: ["No ingresso deve ser cobrado uma taxa adicional referente a um frete de ônibus, assim após o final da partida os torcedores serão direcionados aos seus respectivos transportes, evitando conflitos.",
            "Outra medida de combater a violência é que um agente de segurança acompanhem os torcedores nos transportes públicos/privados para que a deslocação seja feita de forma pacífica."
        ]
    },
    {
        enunciado: "Como as apostas esportivas podem influenciar na taxa de violência urbana em transportes públicos?",
        alternativas: ["Influência de Grupos de Aposta",
            "Aumento da Tensão em Áreas de Jogo"
        ]
    },
    {
        enunciado: "Pergunta2",
        alternativas: ["Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta2",
        alternativas: ["Alternativa 1",
            "Alternativa 2"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;

}

mostraPergunta();
