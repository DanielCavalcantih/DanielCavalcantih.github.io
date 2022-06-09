let button = document.getElementById("criar-carta");
let inputText = document.getElementById("carta-texto");
let resultado = document.getElementById("carta-gerada");
let contador = document.createElement("p");
let body = document.querySelector("body");
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const rotaçao = ['rotateleft', 'rotateright'];
const tamanho = ['medium', 'big', 'reallybig'];
const inclinação = ['skewleft', 'skewright'];

contador.innerText = document.querySelectorAll("span").length + " Palavras"
contador.id = "carta-contador";
body.appendChild(contador)

button.addEventListener("click", criarCarta);

function criarCarta(){
    resultado.innerText = "";
    let text = inputText.value;
    const textWords = text.split(" ");
    for(let index = 0;index < textWords.length;index++){
        if(inputText.value === "" || inputText.value === " "){
            resultado.innerText = "Por favor, digite o conteúdo da carta.";
        }
        let span = document.createElement("span");
        span.classList.add(estilo[Math.floor(Math.random() * estilo.length)]);
        span.classList.add(rotaçao[Math.floor(Math.random() * rotaçao.length)]);
        span.classList.add(tamanho[Math.floor(Math.random() * tamanho.length)]);
        span.classList.add(inclinação[Math.floor(Math.random() * inclinação.length)]);
        span.innerText = textWords[index];
        resultado.appendChild(span);
        resultado.addEventListener("click", function(){
            span.classList = ""
            span.classList.add(estilo[Math.floor(Math.random() * estilo.length)]);
            span.classList.add(rotaçao[Math.floor(Math.random() * rotaçao.length)]);
            span.classList.add(tamanho[Math.floor(Math.random() * tamanho.length)]);
            span.classList.add(inclinação[Math.floor(Math.random() * inclinação.length)]);
        })
        resultado.style.cursor = "pointer";
        contador.innerText = document.querySelectorAll("span").length + " Palavras"

    };
}
