import { getDiagnosticReport } from "./get-diagnostic-report";
import fs from 'fs';

const mockFile: string = "01001\n11000\n11111\n00000\n";

describe(getDiagnosticReport, () => {
    const fsSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(mockFile);

    it('calls readfileSync and return contents tuple of directions and value', () => {
        // Given
        // When
        const result = getDiagnosticReport();

        // Then
        expect(fsSpy).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual(['01001', '11000', '11111', '00000']);
    });

    it('return contents as an array of numbers from memory', () => {
        // Given
        // When
        const result = getDiagnosticReport();

        // Then
        expect(fsSpy).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual(['01001', '11000', '11111', '00000']);
    });
});