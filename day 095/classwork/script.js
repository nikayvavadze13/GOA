function checkTicTacToeWinner(board) {
    const size = board.length;

    // Check rows and columns
    for (let i = 0; i < size; i++) {
        if (board[i].every(cell => cell === 'X')) return 'X';
        if (board[i].every(cell => cell === 'O')) return 'O';

        let column = board.map(row => row[i]);
        if (column.every(cell => cell === 'X')) return 'X';
        if (column.every(cell => cell === 'O')) return 'O';
    }

    // Check diagonals
    const mainDiagonal = board.map((row, i) => row[i]);
    const antiDiagonal = board.map((row, i) => row[size - 1 - i]);

    if (mainDiagonal.every(cell => cell === 'X')) return 'X';
    if (mainDiagonal.every(cell => cell === 'O')) return 'O';
    if (antiDiagonal.every(cell => cell === 'X')) return 'X';
    if (antiDiagonal.every(cell => cell === 'O')) return 'O';

    // Check if there's an empty cell
    if (board.some(row => row.includes(''))) return 'Pending';

    return 'Draw';
}

// Examples
const board1 = [
    ['X', 'X', 'X'],
    ['O', 'O', ''],
    ['', '', 'O']
];

const board2 = [
    ['X', 'O', 'X'],
    ['O', 'O', 'X'],
    ['X', 'X', 'O']
];

const board3 = [
    ['X', '', 'O'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X']
];
