import { Bingo } from "./bingo";
import { getBingoBoardData } from "./get-bingo-board-data";
import { getBingoCallData } from "./get-bingo-call-data";

async function main() {
    const game = new Bingo(getBingoCallData(), getBingoBoardData());

    while(game.hasCallsRemaining && !game.allBoardsAreWinning) {
        game.markBoards();          
        if (game.allBoardsAreWinning) {
            console.log(
                `\n----------------\nWinner${
                    game.winningBoards.length > 1
                        ? `s (${game.winningBoards.length})`
                        : ''
                }!!\nLastCall: ${
                    game.lastCall
                }\nMultiplier: ${
                    Number(game.lastCall) * Number(game.winningBoards[game.lastWinningBoard].unmarkedValue)
                }\n----------------\n`
            );
            break;
        }
        game.incrementLastCall();
    }
}

main();