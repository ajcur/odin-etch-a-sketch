function createGrid(gridNumber) {
    let container = document.querySelector("#container");
    for (let i = 0; i < gridNumber; i++) {
        let gridRow = document.createElement("div");
        for (let j = 0; j < gridNumber; j++) {
            let gridSquare = document.createElement("div");
            if (window.innerWidth < window.innerHeight) {
                squareWidth = (window.innerWidth / gridNumber) * 0.95;
            } else {
                squareWidth = (window.innerHeight / gridNumber) * 0.95;
            }
            gridSquare.style.boxSizing = "border-box";
            gridSquare.style.width = squareWidth + "px";
            gridSquare.style.height = squareWidth + "px";
            gridSquare.style.border = "1px solid black";
            gridRow.appendChild(gridSquare);
        }
        container.appendChild(gridRow);
    }
}

createGrid(30);