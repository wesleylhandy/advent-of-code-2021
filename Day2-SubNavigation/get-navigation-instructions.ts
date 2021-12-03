import fs from 'fs';
import path from 'path';
import { NavigationDirection } from './navigation';

let memoizedInstructions: [NavigationDirection, number][] = [];

export function getNavigationInstructions(): [NavigationDirection, number][] {
    try {
        if (memoizedInstructions.length > 0) {
            return memoizedInstructions;
        }
        memoizedInstructions = fs.readFileSync(
            path.resolve(__dirname, 'data', 'input.txt'),
                { encoding: 'utf-8'},
        )
            .split('\n')
            .filter(Boolean)
            .map(instruction => {
                const [direction, value] = instruction.split(' ')
                    .filter(Boolean)
                return [direction as NavigationDirection, Number.parseInt(value, 10)]
            });
        return memoizedInstructions;
    } catch(error: unknown) {
        console.error(error);
        throw error;
    }
}
