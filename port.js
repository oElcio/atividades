const gerarsenha = document.getElementById("criarsenha");
const exibirsenha = document.getElementById("exibirsenha");
const enviar = document.getElementById("enviar");
const divsenha = document.getElementById("div-senha");
const nome = {
    2: "posicaocorreta",
    0: "posicaoincorreta",
    1: "naoexiste",
};

let array = [];
let tentativas = 0;

gerarsenha.addEventListener("click", () => {
    divsenha.innerHTML = " ";
    array = [];
    for (let i = 0; i < 4; i++) {
        array[i] = Math.floor(Math.random() * 10);
    }
    console.log(array);
});

exibirsenha.addEventListener("click", () => {
    if (array.length !== 4) {
        alert("Clique no botão criar senha.");
    }
});

enviar.addEventListener("click", () => {
    const numero = document.getElementById("digitar");
    const numerovalor = numero.value.split("");

    let acertos = 0;
    let verificador = [1, 1, 1, 1];

    for (let i = 0; i < 4; i++) {
        if (array[i] == numerovalor[i]) {
            verificador[i] = 2;
            acertos++;
        } else {
            for (let n = 0; n < 4; n++) {
                if (array[n] == numerovalor[i]) {
                    verificador[i] = 0;
                }
            }
        }
    }

    tentativas++;
    verificartentativas(acertos);
    verificarposicao(numerovalor, verificador);
});

function verificartentativas(acertos) {
    if (acertos === 4) {
        alert("Você ganhou");
    } else if (tentativas > 5) {
        alert("Você perdeu");
    }
}

function verificarposicao(numero, verificacao) {
    const guardarNumero = document.createElement("div");
    guardarNumero.classList.add("tentativa");

    numero.forEach((senha, indice) => {
        const texto = document.createElement("h2");
        texto.innerText = senha;
        texto.className = nome[verificacao[indice]];
        guardarNumero.appendChild(texto);
    });

    divsenha.appendChild(guardarNumero);
}
