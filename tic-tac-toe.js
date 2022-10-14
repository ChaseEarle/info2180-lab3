window.addEventListener("load", (event) => {
    let Winapprove = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let squares = document.querySelectorAll("#board > div");
    let buttton = document.querySelector(".btn");
    squares.forEach((sq) => {
        sq.classList.add("square");
        sq.innerHTML = " ";

    });
    let xWin = 0;
    let oWin = 0;
    let x = true;
    let o = false;
    let active;
    squares.forEach((sq) => {
        sq.onclick = (event) => {
            if (x && sq.innerHTML == " ") {
                sq.classList.add("X");
                sq.innerHTML = 'X';
                x = false;
                o = true;
            } else if (o && sq.innerHTML == " ") {
                sq.classList.add("O");
                sq.innerHTML = 'O';
                o = false;
                x = true;
            }

            checkWinner();

        }
    })
});
  
  