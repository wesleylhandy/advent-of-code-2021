import { ILanternFishModel } from "./lanternfish-model";

interface FishByNextSpawn {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
}

export class LanternFishLargeModel implements ILanternFishModel {
    private _lanternFishPopulationByTimeTillNextSpawn: FishByNextSpawn = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
    }

    constructor(rawFishPopulation: number[]) {
        rawFishPopulation.forEach(fish => {
            this._lanternFishPopulationByTimeTillNextSpawn[fish as unknown as keyof FishByNextSpawn]++;
        });
    }

    updateModelByDays(numberOfDays: number): number {
        for(let i = 0; i < numberOfDays; i++) {
            let newFish = this._lanternFishPopulationByTimeTillNextSpawn['0'];
            for (let i = 8; i >= 0; i--) {
                newFish = this.replaceAndReturnOldValue(
                    i as unknown as keyof FishByNextSpawn,
                    i !== 6 ? newFish : this._lanternFishPopulationByTimeTillNextSpawn['0'] + newFish);
            }
        }
        return Object.values(this._lanternFishPopulationByTimeTillNextSpawn)
            .reduce<number>((count, countByNextSpawnDate) => count + countByNextSpawnDate, 0);
    }

    private replaceAndReturnOldValue(keyToReplace: keyof FishByNextSpawn, newValue: number): number {
        let oldValue = this._lanternFishPopulationByTimeTillNextSpawn[keyToReplace];
        this._lanternFishPopulationByTimeTillNextSpawn[keyToReplace] = newValue;
        return oldValue
    }
}