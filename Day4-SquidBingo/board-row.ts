import { leadingZero } from "./helpers";
import { RowCell } from "./row-cell";

export class BoardRow {
    private _row: RowCell[] = [];

    constructor(row: number[]) {
        if(!(this instanceof BoardRow)) {
            return new BoardRow(row);
        }
        this._row = row.map(value => new RowCell(value));
    }

    get isWinningRow(): boolean {
        return this._row.every(cell => cell.isMarked);
    }

    markCell(calledNumber: number): boolean {
        for (const cell of this._row) {
            if (cell.value === calledNumber) {
                cell.isMarked = true;
                return true;
            }
        }
        return false;
    }

    toString() {
        return this._row.reduce((stringified, cell) => stringified + (cell.isMarked ? ` >${leadingZero(cell.value)}< ` : `  ${leadingZero(cell.value)}  `), '');
    }
}
