export function timesDepthIncreased(readings: number[] = []): number {
    const readingsLength = readings.length;
    let depthIncreaseCounter = 0;
    if (readingsLength < 2) {
        return depthIncreaseCounter;
    }
    
    for (let i = 1; i < readingsLength; i++) {
        if (readings[i] > readings[i - 1]) {
            depthIncreaseCounter += 1;
        }
    }

    return depthIncreaseCounter;
}