import { isUndefined } from "@perfective/common";
import { Coordinate } from "./coordinate";
import { Range } from "./range";

export interface ILineOfVents {
    isHorizontal: boolean;
    isVertical: boolean;
    range: {
        x: Range;
        y: Range;
    }
}

export class LineOfVents implements ILineOfVents {
    private _coordinates: Coordinate[] = [];
    private _isHorizontal: boolean = false;
    private _isVertical: boolean = false;

    constructor(
        coordinates: Coordinate[],
        isVertical: boolean,
        isHorizontal: boolean,
    ) {
        this._isHorizontal = isHorizontal;
        this._isVertical = isVertical;      
        this._coordinates = coordinates;
    }

    get isHorizontal(): boolean {
        return this._isHorizontal;
    }

    get isVertical(): boolean {
        return this._isVertical;
    }

    get range(): ILineOfVents['range'] {
        return {
            x: [this._coordinates[0].x, this._coordinates[this._coordinates.length - 1].x],
            y: [this._coordinates[0].y, this._coordinates[this._coordinates.length - 1].y],
        }
    }

    addIntersection(intersectingCoordinate: Coordinate): void {
        const found = this._coordinates.find(coordinate => coordinate.x === intersectingCoordinate.x 
            && coordinate.y === intersectingCoordinate.y
        );
        if (isUndefined(found)) {
            return;
        }
        found.addVent();
    }
}