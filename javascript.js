const gridContainer = document.querySelector('.grid-container');
const gridSize = 16;
const totalSquares = gridSize * gridSize;

for (let i = 0; i < totalSquares; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);
}

const gridSquares = document.querySelectorAll('.grid-square');
gridSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
});

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
document.body.insertBefore(buttonContainer, gridContainer);

var button = document.createElement("button");
button.innerHTML = "Clear Grid";
button.classList.add('clear-button');
buttonContainer.appendChild(button);

button.addEventListener('click', () => {
    gridSquares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});