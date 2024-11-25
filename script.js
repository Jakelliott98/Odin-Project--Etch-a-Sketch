const gridContainer = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

function createGrid(number){
    for (let i = 0; i < number; i++){
        let item = document.createElement('div');
        item.className = 'item';
        gridContainer.appendChild(item);
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = randomColor();
        })
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
    createGrid(rowNumber);
});


