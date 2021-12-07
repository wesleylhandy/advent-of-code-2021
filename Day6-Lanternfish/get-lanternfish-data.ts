import fs from 'fs';
import path from 'path';

let memoizedData: number[] = [];

export function getLanternFishData(): number[] {
    try {
        if (memoizedData.length > 0) {
            return memoizedData;
        }
        memoizedData = [
            ...fs.readFileSync(
                path.resolve(__dirname, 'data', 'input.txt'),
                    { encoding: 'utf-8'},
                )
                .split(',')
                .filter(Boolean)
                .map(datum => Number.parseInt(datum.replace('\n', ''), 10)),
        ];
        return memoizedData;
    } catch(error: unknown) {
        console.error(error);
        throw error;
    }
}
