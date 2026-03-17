export class TicTacToe {
    constructor() {
        this.currentPlayer = "X";
        this.board = ["", "", "", "", "", "", "", "", ""];
        this.gameActive = true;
        this.winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ];
        
        this.cells = document.querySelectorAll(".cell");
        this.statusText = document.getElementById("status");
        this.restartBtn = document.getElementById("restart");
    }
    
    init() {

        this.cells.forEach((cell) => {
            cell.addEventListener("click", (event) => this.handleCellClick(event));
        });

        this.restartBtn.addEventListener("click", () => this.restartGame());
    }
    
    handleCellClick(event) {
        const cell = event.target;
        const index = cell.getAttribute("data-index");
        
        if (this.board[index] !== "" || !this.gameActive) {
            return;
        }

        this.board[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer;

        this.checkResult();
    }

    checkResult() {
        let roundWon = false;
        
        for (let i = 0; i < this.winConditions.length; i++) {
            const [a, b, c] = this.winConditions[i];
            if (this.board[a] && 
                this.board[a] === this.board[b] && 
                this.board[a] === this.board[c]) {
                roundWon = true;
                break;
            }
        }
        
        if (roundWon) {
            this.statusText.textContent = `Игрок ${this.currentPlayer} победил!`;
            this.gameActive = false;
            return;
        }
        
        if (!this.board.includes("")) {
            this.statusText.textContent = "Ничья!";
            this.gameActive = false;
            return;
        }
        
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        this.statusText.textContent = `Ход игрока: ${this.currentPlayer}`;
    }

    restartGame() {
        this.currentPlayer = "X";
        this.board = ["", "", "", "", "", "", "", "", ""];
        this.gameActive = true;
        this.statusText.textContent = "Ход игрока: X";

        this.cells.forEach((cell) => {
            cell.textContent = "";
        });
    }
}