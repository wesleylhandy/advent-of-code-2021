import { getDepthReadings } from './get-depth-readings';

export function getDepthsInWindowsOfThree(): number[] {
    return getDepthReadings().reduce<number[]>((depths, reading, index, readings) => {
        if (index < readings.length - 2) {
            return [
                ...depths,
                sum(reading, readings[index + 1], readings[index + 2]),
            ];
        }
        return depths;
    }, []);
}

function sum(first: number, second: number, third: number): number {
    return first + second + third;
}