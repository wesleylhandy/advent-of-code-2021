import { getNavigationInstructions } from "./get-navigation-instructions";
import fs from 'fs';

const mockFile = "forward 6\ndown 8\nforward 2\nup 3\n";

describe(getNavigationInstructions, () => {
    const fsSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(mockFile);

    it('calls readfileSync and return contents tuple of directions and value', () => {
        // Given
        // When
        const result = getNavigationInstructions();

        // Then
        expect(fsSpy).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual([['forward', 6], ['down', 8], ['forward', 2], ['up', 3]]);
    });

    it('return contents as an array of numbers from memory', () => {
        // Given
        // When
        const result = getNavigationInstructions();

        // Then
        expect(fsSpy).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual([['forward', 6], ['down', 8], ['forward', 2], ['up', 3]]);
    });
});