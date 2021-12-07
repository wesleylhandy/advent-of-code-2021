export interface ILanternFish {
    daysUntilSpawn: number;
    nextDay(): boolean;
}

export class LanternFish implements ILanternFish {
    private _daysUntilSpawn: number;

    constructor(
        daysUntilSpawn: number = 8,
    ) {
        this._daysUntilSpawn = daysUntilSpawn;
    }

    get daysUntilSpawn(): number {
        return this._daysUntilSpawn;
    }

    nextDay(): boolean {
        if (this._daysUntilSpawn === 0) {
            this._daysUntilSpawn = 6;
            return true;
        }
        this._daysUntilSpawn--;
        return false;
    }
}