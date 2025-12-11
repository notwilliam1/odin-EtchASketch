document.addEventListener('DOMContentLoaded', () => {
    function generateRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    
    function createGrid(newSize) {    
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.innerHTML = '';
        const gridSize = newSize || 16;
        const totalSquares = gridSize * gridSize;
        const squareSize = 640 / gridSize;

        for (let i = 0; i < totalSquares; i++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.width = `${squareSize}px`;
            gridSquare.style.height = `${squareSize}px`;
            gridContainer.appendChild(gridSquare);
        }

        const gridSquares = document.querySelectorAll('.grid-square');
        gridSquares.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black';
            });
        });
    }

    const gridContainer = document.querySelector('.grid-container');
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    document.body.insertBefore(buttonContainer, gridContainer);

    var clear_button = document.createElement("button");
    clear_button.innerHTML = "Clear Grid";
    clear_button.classList.add('clear-button');
    buttonContainer.appendChild(clear_button);

    var size_button = document.createElement("button");
    size_button.innerHTML = "Change Grid Size";
    size_button.classList.add('change-size-button');
    buttonContainer.appendChild(size_button);

    var rainbow_button = document.createElement("button");
    rainbow_button.innerHTML = "Rainbow Mode";
    rainbow_button.classList.add('rainbow-mode-button');
    buttonContainer.appendChild(rainbow_button);

    rainbow_button.addEventListener('click', () => {
        const gridSquares = document.querySelectorAll('.grid-square');
        gridSquares.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = generateRandomColor();
            });
        });
    });

    black_button = document.createElement("button");
    black_button.innerHTML = "Black Mode";
    black_button.classList.add('black-mode-button');
    buttonContainer.appendChild(black_button);

    black_button.addEventListener('click', () => {
        const gridSquares = document.querySelectorAll('.grid-square');
        gridSquares.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black';
            });
        });
    });

    clear_button.addEventListener('click', () => {
        document.querySelectorAll('.grid-square').forEach(square => {
            square.style.backgroundColor = 'white';
        });
    });

    size_button.addEventListener('click', () => {
        let newSize = prompt("Enter new grid size (max 100):");
        newSize = parseInt(newSize);
        if (isNaN(newSize) || newSize < 1 || newSize > 100) {
            alert("Invalid size. Please enter a number between 1 and 100.");
            return;
        } 
        createGrid(newSize);
    });

    createGrid();
});