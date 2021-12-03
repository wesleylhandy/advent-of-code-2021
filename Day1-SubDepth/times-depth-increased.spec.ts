import { timesDepthIncreased } from "./times-depth-increased";

describe(timesDepthIncreased, () => {
    it('returns zero when depths do not increase', () => {
        // Given
        const depths = [3, 2, 1];

        // When
        const result = timesDepthIncreased(depths);

        // Then
        expect(result).toStrictEqual(0);
    });

    it('returns zero when depths count is less than 2', () => {
        // Given
        const depths = [3];

        // When
        const result = timesDepthIncreased(depths);

        // Then
        expect(result).toStrictEqual(0);
    });

    it('returns zero when depths count is 0', () => {
        // Given
        const depths: number[] = [];

        // When
        const result = timesDepthIncreased(depths);

        // Then
        expect(result).toStrictEqual(0);
    });

    it('calculates depth changes with count of 2', () => {
        // Given
        const depths: number[] = [1, 2];

        // When
        const result = timesDepthIncreased(depths);

        // Then
        expect(result).toStrictEqual(1);
    });

    it('calculates depth changes as expected', () => {
        // Given
        const depths: number[] = [1, 2, 0, 34, 36, 30, 40];

        // When
        const result = timesDepthIncreased(depths);

        // Then
        expect(result).toStrictEqual(4);
    });
});