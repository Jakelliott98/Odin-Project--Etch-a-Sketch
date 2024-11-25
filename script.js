const gridContainer = document.getElementById('container');
const resetButton = document.getElementById('resetButton');
let number = 0;

function createGrid(number){
    for (let i = 0; i < number; i++){
        let item = document.createElement('div');
        item.className = 'item';
        gridContainer.appendChild(item);
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = randomColor();
        })
    }
};

function randomColor(){
    let red = Math.floor(Math.random()*250);
    let blue = Math.floor(Math.random()*250);
    let green = Math.floor(Math.random()*250);
    return `rgb(${red}, ${green}, ${blue})`;
};


resetButton.addEventListener('click', () => {
    number = prompt('Give me a number!');
    console.log(number);
});

createGrid(number);
