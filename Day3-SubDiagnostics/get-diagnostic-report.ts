import fs from 'fs';
import path from 'path';

let memoizedReadings: string[] = [];

export function getDiagnosticReport(): string[] {
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
                .filter(Boolean),
        ];
        return memoizedReadings;
    } catch(error: unknown) {
        console.error(error);
        throw error;
    }
}