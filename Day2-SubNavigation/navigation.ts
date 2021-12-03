export type NavigationDirection = 'forward' | 'up' | 'down';

export interface NavigationPosition {
    aim: number;
    horizontal: number;
    depth: number;
}

export interface INavigation {
    position: NavigationPosition;
    forward(aNumber: number): void;
    up(aNumber: number): void;
    down(aNumber: number): void;
}

export class Navigation implements INavigation {
    private _position: NavigationPosition;

    constructor() {
        this._position = {
            horizontal: 0,
            depth: 0,
            aim: 0,
        }
    }

    get position() {
        return this._position;
    }

    forward(aMovement: number): void {
        this._position.horizontal += aMovement;
        const changeOfDepth = this.calculateChangeOfDepthBy(aMovement);
        this._position.depth = this._position.depth + changeOfDepth >= 0 ? this._position.depth + changeOfDepth : 0;
    }

    up(aNumber: number): void {
        this._position.aim -= aNumber;
    }

    down(aNumber: number): void {
        this._position.aim += aNumber;
    }

    private calculateChangeOfDepthBy(aforwardMovement: number): number {
        return this._position.aim * aforwardMovement;
    }
}
