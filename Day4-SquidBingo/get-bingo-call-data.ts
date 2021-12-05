import { getBingoData } from "./get-bingo-data";

export function getBingoCallData(): number[] {
    const data = getBingoData();
    if (data.length > 0) {
        return data[0].split(',').filter(Boolean).map(datum => Number.parseInt(datum, 10));
    }
    return [];
}
