import { isAboveAverage, isAverage, isBelowAverage } from "./helpers";
import { invertDiagnostics } from "./invert-diagnostics";

interface LifeSupportBase {
    oxygen: string | number;
    co2: string | number;
}

export interface LifeSupportBinary extends LifeSupportBase {
    oxygen: string;
    co2: string
}

export interface LifeSupportInteger extends LifeSupportBase {
    oxygen: number;
    co2: number;
}

interface IAirQualityRating {
    diagnostics: string[];
    index: number;
    pattern: string;
    type: keyof LifeSupportBinary;
}

function airQualityRatingFromDiagnostics({
    diagnostics,
    index,
    pattern,
    type,
}: IAirQualityRating): string | null {
    if (index > pattern.length) {
        return null;
    }
    if (diagnostics.length === 1) {
        return diagnostics[0];
    }
    const filtered = diagnostics.filter(diagnostic => diagnostic[index] === pattern[index]);
    const updatedPattern = lifeSupportRatingFromInvertedDiagnostics(invertDiagnostics(filtered), filtered.length, type);

    return airQualityRatingFromDiagnostics({
        diagnostics: filtered,
        index: index + 1,
        pattern: updatedPattern,
        type
    });
}

export function lifeSupportRatingFromDiagnostics(diagnostics: string[]): LifeSupportBinary {
    if (diagnostics.length === 0) {
        return {
            oxygen: '0',
            co2: '0',
        }
    }

    return {
        oxygen: airQualityRatingFromDiagnostics({
            diagnostics,
            index: 0,
            pattern: lifeSupportRatingFromInvertedDiagnostics(invertDiagnostics(diagnostics), diagnostics.length, 'oxygen'),
            type: 'oxygen',
        }) ?? '0',
        co2: airQualityRatingFromDiagnostics({
            diagnostics,
            index: 0,
            pattern: lifeSupportRatingFromInvertedDiagnostics(invertDiagnostics(diagnostics), diagnostics.length, 'co2'),
            type: 'co2',
        }) ?? '0',
    }
}

function lifeSupportRatingFromInvertedDiagnostics(invertedDiagnostics: number[], diagnosticsLength: number, type: keyof LifeSupportBinary): string {
    return invertedDiagnostics.reduce<string>((value, diagnostic) => {
        const average: number = diagnostic / diagnosticsLength;
        return type === 'co2'
            ? value + co2FromAverage(isAverage(average), isBelowAverage(average))
            : value + oxygenFromAverage(isAboveAverage(average));
    }, '');
}

function oxygenFromAverage(isAboveAverage: boolean): string {
    return isAboveAverage ? '1' : '0';
}

function co2FromAverage(isAverage: boolean, isBelowAverage: boolean): string {
    if (isAverage) {
        return '0';
    }
    return isBelowAverage ? '1' : '0';
}