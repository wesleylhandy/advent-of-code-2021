import { BingoBoard } from "./bingo-board";

interface IBingo {
    allBoardsAreWinning: boolean;
    hasCallsRemaining: boolean;
    incrementLastCall(): void;
    markBoards(): void;
    lastCall: number;
    lastWinningBoard: number;
    toString(showOnlyWinners?: boolean): void;
    winningBoards: BingoBoard[];
}

export class Bingo implements IBingo {
    private _calls: number[] = [];
    private _boards: BingoBoard[] = [];
    private _callIndex: number = 0;
    private _lastCall: number  = -1;
    private _lastWinningBoard: number = -1;

    constructor(calls: number[], boards: number[][][]) {
        if(!(this instanceof Bingo)) {
            return new Bingo(calls, boards);
        }

        this._calls = calls;
        this._boards = boards.map((board, index) => new BingoBoard(board, index));
    }

    get lastCall(): number {
        return this._lastCall;
    }

    get lastWinningBoard(): number {
        return this._lastWinningBoard;
    }

    get winningBoards() {
        return this._boards.filter(board => board.isWinningBoard);
    }

    get hasCallsRemaining(): boolean {
        return this._callIndex < this._calls.length;
    }

    get allBoardsAreWinning() {
        return this._boards.every(board => board.isWinningBoard);
    }

    private nextCall(): number {
        this._lastCall = this._calls[this._callIndex];
        return this._lastCall;
    }

    incrementLastCall(): void {
        if (this.hasCallsRemaining) {
            this._callIndex++;
        }
    }

    markBoards(): void {
        this._boards.filter(board => !board.isWinningBoard)
            .forEach(board => {
                board.markBoard(this.nextCall())
                if (board.isWinningBoard) {
                    this._lastWinningBoard = board.index;
                }
            });
    }

    toString(showOnlyWinners: boolean = false) {
        this._boards.forEach(board => {
            if (showOnlyWinners) {
                if (board.isWinningBoard) {
                    console.log(board.toString());
                }
            } else {
                console.log(board.toString())
            }
        });
    }
}