import fs from 'fs';
import path from 'path';

let memoizedData: string[] = [];

export function getBingoData(): string[] {
    try {
        if (memoizedData.length > 0) {
            return memoizedData;
        }
        memoizedData = [
            ...fs.readFileSync(
                path.resolve(__dirname, 'data', 'input.txt'),
                    { encoding: 'utf-8'},
                )
                .split('\n')
                .filter(Boolean),
        ];
        return memoizedData;
    } catch(error: unknown) {
        console.error(error);
        throw error;
    }
}