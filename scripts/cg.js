let header = document.querySelector('header');
let pColor = document.createElement('p');
let squares = document.getElementById('squares');
let squares2 = document.querySelector('.squares')

pColor.id = 'rgb-color';

header.appendChild(pColor);

for(let count = 1;count <= 6;count += 1){
    let square = document.createElement('div');
    square.className = 'square';
    squares2.appendChild(square);
} 

let square = document.querySelectorAll('.square');

function criarQuadrados(){
    for(let index = 0; index < square.length; index += 1){
    square[index].style.backgroundColor = 'rgb' + '(' + Math.floor(Math.random() * 255 + 1) + ', ' + Math.floor(Math.random() * 255 + 1) + ', ' + Math.floor(Math.random() * 255 + 1) + ')';
    
    square[index].addEventListener('click', function(){
        if(square[index].style.backgroundColor === pColor.innerText){
            text.innerText = 'Acertou!';
            text.style.color = 'lightgreen';
        }else{
            text.innerText = 'Errou! Tente novamente!'
            text.style.color = 'red';
        }
    })
} 

}

criarQuadrados();

pColor.innerText = square[Math.floor(Math.random() * 6)].style.backgroundColor

let text = document.createElement('p');
text.innerText = 'Escolha uma cor';
text.id = 'answer';
squares.appendChild(text)




let buttons = document.getElementById('buttons');
let button = document.createElement('button');
button.id = 'reset-game';
button.innerText = 'Resetar jogo / cores';
buttons.appendChild(button);

button.addEventListener('click', function(){
    location.reload()
})