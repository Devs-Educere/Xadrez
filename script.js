var board = document.getElementById("board");


for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      var cell = document.createElement("div");
      cell.classList.add("cell");
  
      if ((i + j) % 2 === 0) {
        cell.classList.add("white");
      } else {
        cell.classList.add("black");
      }
  
      // Adiciona as peças do jogo
      if (i === 0 && (j === 0 || j === 7)) {
        cell.innerHTML = "R";
        cell.classList.add("black-piece");
      } else if (i === 0 && (j === 1 || j === 6)) {
        cell.innerHTML = "N";
        cell.classList.add("black-piece");
      } else if (i === 0 && (j === 2 || j === 5)) {
        cell.innerHTML = "B";
        cell.classList.add("black-piece");
      } else if (i === 0 && j === 3) {
        cell.innerHTML = "Q";
        cell.classList.add("black-piece");
      } else if (i === 0 && j === 4) {
        cell.innerHTML = "K";
        cell.classList.add("black-piece");
      } else if (i === 1) {
        cell.innerHTML = "P";
        cell.classList.add("black-piece");
      } else if (i === 7 && (j === 0 || j === 7)) {
        cell.innerHTML = "R";
        cell.classList.add("white-piece");
      } else if (i === 7 && (j === 1 || j === 6)) {
        cell.innerHTML = "N";
        cell.classList.add("white-piece");
      } else if (i === 7 && (j === 2 || j === 5)) {
        cell.innerHTML = "B";
        cell.classList.add("white-piece");
      } else if (i === 7 && j === 3) {
        cell.innerHTML = "Q";
        cell.classList.add("white-piece");
      } else if (i === 7 && j === 4) {
        cell.innerHTML = "K";
        cell.classList.add("white-piece");
      } else if (i === 6) {
        cell.innerHTML = "P";
        cell.classList.add("white-piece");
      }
  
      board.appendChild(cell);
    }
  }
  