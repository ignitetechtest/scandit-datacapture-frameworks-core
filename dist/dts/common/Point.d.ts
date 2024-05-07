import { DefaultSerializeable } from "../serializable";
export interface PointJSON {
    x: number;
    y: number;
}
export interface PrivatePoint {
    fromJSON(json: PointJSON): Point;
}
export declare class Point extends DefaultSerializeable {
    private _x;
    private _y;
    get x(): number;
    get y(): number;
    private static fromJSON;
    constructor(x: number, y: number);
}
