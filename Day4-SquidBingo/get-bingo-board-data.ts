import { getBingoData } from "./get-bingo-data";

export function getBingoBoardData(): number[][][] {
    let boards: number[][][] = [];
    const data = getBingoData().slice(1);
    if (data.length > 5) {
        for (let i = 0; i < data.length; i += 5) {
            boards.push(data.slice(i, i + 5)
                .map(board => board.split(' ')
                    .filter(Boolean)
                    .map(cell => Number.parseInt(cell, 10))
                ),
            );
        }
    }
    return boards;
}