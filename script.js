// Create a grid of 16x16 squares using the flexbox technique and javascript.
// How to create the grid?
    // Create a container,
        // add 16 rows to the container,
        // add 16 columns to each row.
// Pseudocode
    // Select the grid, a div element created by hand in index.html.
    // Create a row, which is a div element.
    // Create a column, which is a div element.
    // Loop to repeatedly add the column 16 times to the row.
    // Loop to repeatedly add the row 16 times to the grid.
    // Change the squares background color when passing the mouse over them.
    // Select the button, a button element created by hand in index.html.
    // Whenever the button is clicked:
        // Promt to ask user inputting the size of the grid, i.e. number of squares.
        // Clear the existing grid.
        // Create the new grid.
        // Limit the grid size to 100 max.

function createDiv(elementClass) {
    const element = document.createElement('div');
    element.className = elementClass;
    return element;
}

function addChildNode(parentNode, childNode, gridSize) {
    for (let i = 0; i < gridSize; i++) {
        parentNode.appendChild(childNode.cloneNode(true));
    }
    return parentNode;
}

let theGrid = document.querySelector('#grid');
const theButton = document.querySelector('button');

theButton.addEventListener('click', () => {
    
    theGrid.innerHTML = '';

    let gridSize = parseInt(prompt('Squares per side?', '16'));
    gridSize = gridSize > 100 ? 100 : gridSize;

    let row = createDiv('row container');
    const column = createDiv('column');

    row = addChildNode(row, column, gridSize);
    theGrid = addChildNode(theGrid, row, gridSize);
})

theGrid.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('column')) {
        event.target.style.backgroundColor = 'black';
    }
})