// 비밀

for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board.length - 1; j++) {
        if (board[i][j] === 0 && board[i + 1][j] === 0 && board[i][j + 1] === 0) {
            board[i][j] = 1;
            board[i + 1][j] = 1;
            board[i][j + 1] = 1;
            for (let k = 0; k < board.length; k++) {
                if (!board[k].includes(0)) cleared += 1;
            }
            board[i][j] = 0;
            board[i + 1][j] = 0;
            board[i][j + 1] = 0;
            (cleared > maxClear) ? (maxClear = cleared) : '';
            cleared = 0;
        }
    }
}