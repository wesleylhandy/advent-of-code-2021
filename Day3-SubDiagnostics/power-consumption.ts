import { isAboveAverage } from "./helpers";
import { invertDiagnostics } from "./invert-diagnostics";

interface PowerConsumptionBase {
    gamma: string | number;
    epsilon: string | number;
}

export interface PowerConsumptionBinary extends PowerConsumptionBase {
    gamma: string;
    epsilon: string
}

export interface PowerConsumptionInteger extends PowerConsumptionBase {
    gamma: number;
    epsilon: number;
}

export function powerConsumptionFromDiagnostics(diagnostics: string[]): PowerConsumptionBinary {
    if (diagnostics.length === 0) {
        return {
            gamma: '0',
            epsilon: '0',
        }
    }

    return powerConsumptionFromInvertedDiagnostics(invertDiagnostics(diagnostics), diagnostics.length);
}

function powerConsumptionFromInvertedDiagnostics(invertedDiagnostics: number[], diagnosticsLength: number): PowerConsumptionBinary {
    return invertedDiagnostics.reduce<PowerConsumptionBinary>((consumption, diagnostic) => {
        const average: number = diagnostic / diagnosticsLength;
        return {
            gamma: consumption.gamma + gammaFromAverage(isAboveAverage(average)),
            epsilon: consumption.epsilon + epsilonFromAverage(isAboveAverage(average)),
        }
    }, { gamma: '', epsilon: ''});
}


function gammaFromAverage(isAboveAverage: boolean): string {
    return isAboveAverage ? '1' : '0';
}

function epsilonFromAverage(isAboveAverage: boolean): string {
    return isAboveAverage ? '0' : '1';
}
