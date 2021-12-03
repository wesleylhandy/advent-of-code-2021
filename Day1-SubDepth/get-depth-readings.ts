import fs from 'fs';
import path from 'path';

let memoizedReadings: number[] = [];

export function getDepthReadings(): number[] {
    try {
        if (memoizedReadings.length > 0) {
            return memoizedReadings;
        }
        memoizedReadings = [
            ...fs.readFileSync(
                path.resolve(__dirname, 'data', 'input.txt'),
                    { encoding: 'utf-8'},
                )
                .split('\n')
                .filter(Boolean)
                .map(depth => Number.parseInt(depth, 10)),
        ];
        return memoizedReadings;
    } catch(error: unknown) {
        console.error(error);
        throw error;
    }
}
