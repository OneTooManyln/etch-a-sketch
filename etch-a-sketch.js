

function createGrid(x) {

    for (let i = 0; i < x; i ++) {
    const container = document.querySelector('div');

        let div = document.createElement('div');
        div.classList.add('grids');
        container.appendChild(div);
    }
} createGrid(256);