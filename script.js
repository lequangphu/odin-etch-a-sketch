// Create a grid of 16x16 squares using the flexbox technique and javascript.
// How to create the grid?
    // Create a container,
        // add 16 rows to the container,
        // add 16 columns to each row.
// Pseudocode
    // Create a div element by hand in the index.html file, i.e. the grid.
    // Create an array of 16 rows.
    // Create an array of 16 columns.
    // Add 16 columns to each row.
    // Add 16 rows to the grid.

// Function to create the Grid


// Function to create a div element
function createDiv(elementClass) {
    const element = document.createElement('div');
    element.className = elementClass;
    return element;
}

// Function to add a child node 16 times to a parent node
function addChildNode(parentNode, childNode) {
    for (let i = 0; i < 16; i++) {
        parentNode.appendChild(childNode.cloneNode(true));
    }
    return parentNode
}

let grid = document.querySelector('#grid');
let row = createDiv('row container');
const column = createDiv('column');

row = addChildNode(row, column);
grid = addChildNode(grid, row);