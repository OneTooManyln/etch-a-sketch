

function createGrid(x) {

    for (let i = 0; i < x; i ++) {
    const container = document.querySelector('div');

        let div = document.createElement('div');
        div.classList.add('grids');
        container.appendChild(div);
    }
} createGrid(256);

//function that when user hovers over div grid with mouse, the color changes, leaving behind a trail

const div = document.querySelectorAll('.grids');
div.forEach ((div) => {
    div.addEventListener('mouseover', () => {
        div.style['background'] = 'white';
    })
})