import { isNull } from "@perfective/common";

export function leadingZero(aNumber: number): string {
    return ('0' + aNumber.toString()).slice(-2);
}

export function mergeValueIntoArray<T>(array: T[] | null, value: T): T[] {
    if (isNull(array)) {
        return [value];
    }
    return [...array, value];
}
