const grid = document.querySelector('.container');
const resetButton = document.querySelector(".reset");
const range = document.querySelector('.range')

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
}

function updateGrid(n) {
    grid.innerHTML = "";
    for (let i = 0; i < n; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
}

const square = document.querySelector("div")
square.addEventListener('mouseover', function (event) {
    event.target.classList.replace('square', 'color')
})

resetButton.addEventListener('click', function (event) {
    grid.innerHTML = "";
    createGrid();
})



createGrid();
