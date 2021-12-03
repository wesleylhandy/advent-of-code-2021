import { getDepthsInWindowsOfThree } from "./get-depths-in-windows-of-three";
import * as MockGetDepths from './get-depth-readings';

describe(getDepthsInWindowsOfThree, () => {
    const getDepthReadingsSpy = jest.spyOn(MockGetDepths, 'getDepthReadings').mockReturnValue([123, 124, 122, 123]);
    it('reduces list of reduced values', () => {
        // Given
        // When
        const result = getDepthsInWindowsOfThree();

        // Then
        expect(result).toStrictEqual([369, 369]);
    });

    it('reduces to an empty list', () => {
        // Given
        getDepthReadingsSpy.mockReturnValue([122, 123]);
        
        // When
        const result = getDepthsInWindowsOfThree();

        // Then
        expect(result).toStrictEqual([]);
    });
});