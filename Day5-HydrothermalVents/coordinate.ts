interface ICoordinate {
    addVent(): void;
    x: number;
    y: number;
    isOverlapping: boolean;
}

export class Coordinate implements ICoordinate {
    private _vents: number;

    constructor(
        private _x: number,
        private _y: number,
    ) {
        this._vents = 0;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get isOverlapping(): boolean {
        return this._vents > 0;
    }

    addVent(): void {
        this._vents++;
    }
}