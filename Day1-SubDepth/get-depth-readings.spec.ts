import { getDepthReadings } from "./get-depth-readings";
import fs from 'fs';

const mockFile = "123\n124\n122\n123\n";

describe(getDepthReadings, () => {
    const fsSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(mockFile);

    it('calls readfileSync and return contents as an array of numbers', () => {
        // Given
        // When
        const result = getDepthReadings();

        // Then
        expect(fsSpy).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual([123, 124, 122, 123]);
    });

    it('return contents as an array of numbers from memory', () => {
        // Given
        // When
        const result = getDepthReadings();

        // Then
        expect(fsSpy).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual([123, 124, 122, 123]);
    });
});