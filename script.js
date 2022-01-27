const grid = document.querySelector('.container');
const resetButton = document.querySelector(".reset");
const range = document.querySelector('.range');
const square = document.querySelector("div");
const rangeInput = document.getElementById("range")

//Function creates the initial Grid
function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
}

//Function updates the Grid size
function updateGrid(n) {
    grid.innerHTML = '';
    for (let i = 0; i < n*n; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
}

//Code to paint the squares as the user mouseover them.
square.addEventListener('mouseover', function (event) {
    event.target.classList.replace('square', 'color');
})

//Reset button clears the Grid and restores its original value.
resetButton.addEventListener('click', function (event) {
    grid.innerHTML = '';
    for (let i = 0; i < rangeInput.value * rangeInput.value; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
        grid.setAttribute('style', `grid-template-columns: repeat(${rangeInput.value}, 2fr); grid-template-rows: repeat(${rangeInput.value}, 2fr);`);
        
    }
})

rangeInput.addEventListener('input', function () {
    grid.innerHTML = ''
    for (let i = 0; i < rangeInput.value * rangeInput.value; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
        grid.setAttribute('style', `grid-template-columns: repeat(${rangeInput.value}, 2fr); grid-template-rows: repeat(${rangeInput.value}, 2fr);`);
        
    }
});

createGrid();
