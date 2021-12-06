import { CoordinateData } from "./coordinate-data";

export interface IFieldOfVents {
    numberOfOverlappingVents: number;
}

export class FieldOfVents implements IFieldOfVents {
    private _ventField: number[][] = [];

    constructor(
        data: CoordinateData,
    ) {
        this.initializeField(data.fieldSize);
        this.addVents(data.rawCoordinates);
    }

    private initializeField(fieldSize: CoordinateData['fieldSize']) {
        for (let x = 0; x <= fieldSize.max.x; x++) {
            this._ventField.push([]);
            for (let y = 0; y <= fieldSize.max.y; y++) {
                this._ventField[x].push(0);
            }
        }
    }

    private addVents(rawCoordinates: CoordinateData['rawCoordinates']) {
        rawCoordinates.forEach(rawCoordinate => {
            const [x1, y1, x2, y2] = rawCoordinate;
            const minY = Math.min(y1, y2);
            const maxY = Math.max(y1, y2);
            const minX = Math.min(x1, x2);
            const maxX = Math.max(x1, x2);
            if (x1 === x2) {
                for (let i = minY; i <= maxY; i++) {
                    this.addVent(x1, i);
                }
            } else if (y1 === y2) {
                for (let i = minX; i <= maxX; i++) {
                    this.addVent(i, y1);
                }
            } else {
                // At 45 degrees, rise === run
                const length = maxX - minX + 1;
                const xDirection = x2 > x1 ? "right" : "left";
                const yDirection = y2 > y1 ? 'up' : "down";
                for (let i = 0; i < length; i++) {
                    if (xDirection === "right") {
                        if (yDirection === "up") {
                            this.addVent(x1 + i, y1 + i);
                        } else {
                            this.addVent(x1 + i, y1 - i);
                        }
                    } else {
                        if (yDirection === "up") {
                            this.addVent(x1 - i, y1 + i);
                        } else {
                            this.addVent(x1 - i, y1 - i);
                        }
                    }
                }
            }
        });
    }

    private addVent(x: number, y: number): void {
        this._ventField[x][y]++;
    }

    get numberOfOverlappingVents(): number {
        return this._ventField.reduce<number>(
            (count, row) => count + row.filter(cellValue => cellValue > 1).length,
            0,
        );
    }
}