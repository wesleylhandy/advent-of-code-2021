import { LifeSupportBinary, LifeSupportInteger } from "./life-support";
import { PowerConsumptionBinary, PowerConsumptionInteger } from "./power-consumption";

export function integerFromBinary(binary: string): number {
    return Number.parseInt(binary, 2);
}

export function isAboveAverage(average: number): boolean {
    return average >= 0.5;
}

export function isAverage(average: number): boolean {
    return average === 0.5;
}

export function isBelowAverage(average: number): boolean {
    return average < 0.5;
}

export function parseBinaryValues(object: PowerConsumptionBinary): PowerConsumptionInteger;

export function parseBinaryValues(object: LifeSupportBinary): LifeSupportInteger;

export function parseBinaryValues<BinaryType = PowerConsumptionBinary | LifeSupportBinary>(object: BinaryType): PowerConsumptionInteger | LifeSupportInteger {
    return Object.entries(object).reduce<PowerConsumptionInteger | LifeSupportInteger>((parsedObject, entry) => ({ 
        ...parsedObject,
        [entry[0]]: integerFromBinary(entry[1].toString()),
    }), {} as unknown as PowerConsumptionInteger | LifeSupportInteger);
}