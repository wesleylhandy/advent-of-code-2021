import fs from 'fs';
import path from 'path';
import { CoordinateData } from './coordinate-data';

let memoizedData: CoordinateData = {
    rawCoordinates: [],
    fieldSize: {
        max: {
            x: Number.MIN_SAFE_INTEGER,
            y: Number.MIN_SAFE_INTEGER,
        },
        min: {
            x: Number.MAX_SAFE_INTEGER,
            y: Number.MAX_SAFE_INTEGER,
        }
    }
};

export function getCoordinateData(): CoordinateData {
    try {
        if (memoizedData.rawCoordinates.length > 0) {
            return memoizedData;
        }
        memoizedData.rawCoordinates = [
            ...fs.readFileSync(
                path.resolve(__dirname, 'data', 'input.txt'),
                    { encoding: 'utf-8'},
                )
                .split('\n')
                .filter(Boolean)
                .map(datum => datum.split(" -> ")
                    .filter(Boolean)
                    .map(coordinates => {
                        const values = coordinates.split(',')
                            .filter(Boolean)
                            .map(coordinate => Number.parseInt(coordinate, 10));
                        memoizedData.fieldSize = {
                            max: {
                                x: values[0] > memoizedData.fieldSize.max.x ? values[0] : memoizedData.fieldSize.max.x,
                                y: values[1] > memoizedData.fieldSize.max.y ? values[1] : memoizedData.fieldSize.max.y,
                            },
                            min: {
                                x: values[0] < memoizedData.fieldSize.min.x ? values[0] : memoizedData.fieldSize.min.x,
                                y: values[1] < memoizedData.fieldSize.min.y ? values[1] : memoizedData.fieldSize.min.y,
                            }
                        }
                        return values;
                    })
                    .flat()
                ),
        ];
        return memoizedData;
    } catch(error: unknown) {
        console.error(error);
        throw error;
    }
}