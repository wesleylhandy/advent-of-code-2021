export interface CoordinateData {
    rawCoordinates: number[][];
    fieldSize: {
        max: {
            x: number;
            y: number;
        },
        min: {
            x: number;
            y: number;
        }
    }
}
