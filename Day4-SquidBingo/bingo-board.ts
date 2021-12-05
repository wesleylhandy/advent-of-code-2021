import { BoardRow } from "./board-row";

interface IBingoBoard {
    index: number;
    isWinningBoard: boolean;
    unmarkedValue: number;
    markBoard(calledNumber: number): void;
    toString(): string;
}

export class BingoBoard implements IBingoBoard {
    private _index: number = -1;
    private _unmarkedValue: number = 0;
    private _rows: BoardRow[] = [];
    private _columns: BoardRow[] = [];
    private _isWinningBoard: boolean = false;

    constructor(
        grid: number[][],
        index: number,
    ){
        if(!(this instanceof BingoBoard)) {
            return new BingoBoard(grid, index);
        }

        this._index = index;

        const columns: number[][] = [];

        for (let i = 0; i < grid.length; i++) {
            this._rows.push(new BoardRow(grid[i]));
            this._unmarkedValue += grid[i].reduce((sum, cell) => sum + cell, 0);
            columns.push([]);
            // each array in columns should have the value at position i set to the position j of grid
            for (let j = 0; j < grid[i].length; j++) {
                columns[i].push(grid[j][i]);
            }
        }

        this._columns = columns.map(column => new BoardRow(column));
    }

    get index() {
        return this._index;
    }

    get isWinningBoard() {
        return this._isWinningBoard;
    }

    get unmarkedValue() {
        return this._unmarkedValue;
    }

    markBoard(calledNumber: number): void {
        if (this._isWinningBoard) {
            return;
        }

        const isMarked = this._rows.reduce<boolean>((isMarked, row) => row.markCell(calledNumber) ? true : isMarked, false);
        this._columns.forEach(row => {
            row.markCell(calledNumber)
        });
        
        if (isMarked) {
            this.reduceUnmarkedValueBy(calledNumber);
            this.setWinningState();
        }
    }

    private reduceUnmarkedValueBy(aNumber: number) {
        this._unmarkedValue = this._unmarkedValue - aNumber;
    }

    private hasWinningRow(): boolean {
        return this._rows.some(row => row.isWinningRow);
    }

    private hasWinningColumn(): boolean {
        return this._columns.some(row => row.isWinningRow);
    }

    private setWinningState(): void {
        this._isWinningBoard = this.hasWinningColumn() || this.hasWinningRow();
    }

    toString() {
        return this._rows.reduce<string>((stringified, row) => stringified + `${row.toString()}\n`, '');
    }
}
