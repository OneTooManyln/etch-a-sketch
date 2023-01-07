const container = document.querySelector('.container');

function createGrid(x) {
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            const div = document.createElement('div');
            div.classList.add('grids');
            container.appendChild(div);
            div.style.height = `${960/x}px`;
            div.style.width = `${960/x}px`;
        }
    }
    
}createGrid(16);


//function that when user hovers over div grid with mouse, the color changes, leaving behind a trail

const div = document.querySelectorAll('.grids');
div.forEach ((div) => {
    div.addEventListener('mouseover', () => {
        div.style['background'] = 'white';
    })
})

//function to clear grid
function clearGrid() {
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
}
