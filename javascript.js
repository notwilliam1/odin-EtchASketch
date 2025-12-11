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