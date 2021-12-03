import { navigate } from './navigate';
import fs from 'fs';

const mockFile = "forward 6\ndown 8\nforward 2\nup 3\nforward 3\n";

describe(navigate, () => {
    jest.spyOn(fs, 'readFileSync').mockReturnValue(mockFile);

    it('return the final position after importing directions', () => {
        // Given
        // When
        const result = navigate();

        // Then
        expect(result).toStrictEqual({
            horizontal: 11,
            depth: 31, // 8 * 2 + 5 * 3
            aim: 5,
        });
    })
});