const totalRows = 10;
const cellsInRow = 10;
const min = 1;
const max = 100;

function generateRandomNumbers(max = 100) {
    return Array(max)
        .fill()
        .map((_, i) => i + 1)
        .sort(() => Math.random() - 0.5);
}

function drawTable() {
    // get the reference for the body
    const randomnum1 = document.querySelector('.random-num');

    // creates a <table> element
    const tbl = document.createElement('table');
    const numbers = generateRandomNumbers();

    // creating rows
    for (let r = 0; r < totalRows; r++) {
        const row = document.createElement('tr');

        // create cells in row
        for (let c = 0; c < cellsInRow; c++) {
            let cell = document.createElement('td');
            cell.innerHTML = numbers[c+r];
            row.appendChild(cell);
        }

        tbl.appendChild(row); // add the row to the end of the table body
    }

    randomnum1.appendChild(tbl); // appends <table> into <div1>
}

drawTable();