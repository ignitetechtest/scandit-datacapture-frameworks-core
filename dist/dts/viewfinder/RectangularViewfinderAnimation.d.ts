import { DefaultSerializeable } from "../serializable";
export interface RectangularViewfinderAnimationJSON {
    readonly looping: boolean;
}
export interface PrivateRectangularViewfinderAnimation {
    fromJSON(json: RectangularViewfinderAnimationJSON): RectangularViewfinderAnimation;
}
export declare class RectangularViewfinderAnimation extends DefaultSerializeable {
    private readonly _isLooping;
    private static fromJSON;
    get isLooping(): boolean;
    constructor(isLooping: boolean);
}
