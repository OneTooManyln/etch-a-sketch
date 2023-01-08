const container = document.querySelector('.container');


function createGrid(x) {
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            let div = document.createElement('div');
            div.classList.add('grids');
            container.appendChild(div);
            div.style.height = `${960/x}px`;
            div.style.width = `${960/x}px`;

            div.addEventListener('mouseover', () => {
                div.style['background'] = 'white';
            })

        }
    }
    
}createGrid(20);

//function to clear grid
function clearGrid() {
   const div = document.querySelectorAll('.grids'); 
   div.forEach(grids => grids.remove());
}

//function that prompts user for new grid with # of sides. Call clearGrid function
function newGrid() {
    let userInput = prompt("How many squares per side for new grid?");
    clearGrid();
    createGrid(userInput);
}
 
 //eventlistener that when clicked will create new grid with user input
 const btn = document.querySelector('button');
 btn.addEventListener('click', () => {
     newGrid();
 })