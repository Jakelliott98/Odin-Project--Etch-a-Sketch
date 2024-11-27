const gridContainer = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

function createGrid(number, length){
    let itemDimensions = `${650 / length}px`;
    // Calculating item width & height to be equal a square. 
    for (let i = 0; i < number; i++){
        let item = document.createElement('div');
        gridContainer.appendChild(item);
        item.style.width = itemDimensions;
        item.style.height = itemDimensions;
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = randomColor();
        });
    };
};

function randomColor(){
    let red = Math.floor(Math.random()*250);
    let blue = Math.floor(Math.random()*250);
    let green = Math.floor(Math.random()*250);
    return `rgb(${red}, ${green}, ${blue})`;
};

resetButton.addEventListener('click', () => {
    gridContainer.textContent = '';
    let number = prompt('Give me a number!');
    let rowNumber = number * number;
    createGrid(rowNumber, number);
});

window.addEventListener('load', createGrid(256, 16));
// Initial call to load 16 x 16 grid.