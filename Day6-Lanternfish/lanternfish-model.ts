import { LanternFish } from "./lantern-fish";

export interface ILanternFishModel {
    updateModelByDays(numberOfDays: number): void;
}

export class LanternFishModel implements ILanternFishModel {
    private _lanternFishPopulation: LanternFish[] = [];

    constructor(rawFishPopulation: number[] = []) {
        this._lanternFishPopulation = rawFishPopulation.map(fish => new LanternFish(fish));
    }

    updateModelByDays(numberOfDays: number): number {
        for(let i = 0; i < numberOfDays; i++) {
            let newFish: LanternFish[] = [];
            this._lanternFishPopulation.forEach(lanternFish => {
                const spawned = lanternFish.nextDay();
                if (spawned) {
                    newFish.push(new LanternFish());
                }
            });
            this._lanternFishPopulation = [...this._lanternFishPopulation, ...newFish];
        }
        return this._lanternFishPopulation.length;
    }
}