let colors = document.querySelectorAll('.color');
let cores = ['black', 'yellow', 'red', 'blue', 'green', 'pink', 'purple', 'brown', 'orange', 'gray', 'white'];

for(let index = 0; index < colors.length; index += 1){
    for(let index2 = 0;index2 < cores.length;index2 += 1){
        if(colors[index].classList.contains(cores[index2])){
            colors[index].style.backgroundColor = cores[index2];
        }
    }
} 

for(let index = 1;index <= 400 ; index += 1){
    let pixel = document.createElement('div');
    pixel.id = 'pixel-board';
    pixel.className = 'pixel';
    pixel.style.background = 'white';
    pixel.addEventListener('click', function(){
        let selectedColor = document.querySelector('.selected');
        if(selectedColor.className.includes('black')){
            pixel.style.background = 'black';
        }
        if(selectedColor.className.includes('yellow')){
            pixel.style.background = 'yellow';
        }
        if(selectedColor.className.includes('red')){
            pixel.style.background = 'red';
        }
        if(selectedColor.className.includes('blue')){
            pixel.style.background = 'blue';
        }
        if(selectedColor.className.includes('green')){
            pixel.style.background = 'green';
        }
        if(selectedColor.className.includes('pink')){
            pixel.style.background = 'pink';
        }
        if(selectedColor.className.includes('purple')){
            pixel.style.background = 'purple';
        }
        if(selectedColor.className.includes('brown')){
            pixel.style.background = 'brown';
        }
        if(selectedColor.className.includes('orange')){
            pixel.style.background = 'orange';
        }
        if(selectedColor.className.includes('gray')){
            pixel.style.background = 'gray';
        }
        if(selectedColor.className.includes('white')){
            pixel.style.background = 'white';
        }

    })
    document.getElementById('pixels').appendChild(pixel)
}

function selectColor(event){
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected')
    event.target.classList += ' selected';
}

for(let index = 0;index < colors.length;index += 1){
    colors[index].addEventListener('click', selectColor);
}

function paintPixel() {
    pixel.addEventListener('click', function(){
        let selectedColor = document.querySelector('.selected');
        pixel.style.backgroundColor = selectedColor.className[1]
    })
}

let button = document.createElement('button');
button.id = 'clear-board';
button.innerText = 'Limpar';

document.getElementById('button').appendChild(button);

button.addEventListener('click', clear)

function clear(){
    let allPixels = document.querySelectorAll('.pixel');
    for(let index = 0;index < allPixels.length;index += 1){
        allPixels[index].style.backgroundColor = 'white';
    }
}
