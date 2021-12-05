interface IRowCell {
    value: number;
    isMarked: boolean;
}

export class RowCell implements IRowCell {
    private _value: number = -1;
    private _isMarked: boolean = false;

    constructor(
        value: number,
    ) {
        if (!(this instanceof RowCell)) {
            return new RowCell(value);
        }
        this._value = value;
    }

    get isMarked(): boolean {
        return this._isMarked;
    }

    get value(): number {
        return this._value;
    }

    set isMarked(isMarked: boolean) {
        this._isMarked = isMarked;
    }

}