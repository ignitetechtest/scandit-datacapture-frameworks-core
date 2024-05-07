import { DefaultSerializeable } from "../serializable";
import { NumberWithUnit, NumberWithUnitJSON } from "./NumberWithUnit";
export interface PointWithUnitJSON {
    x: NumberWithUnitJSON;
    y: NumberWithUnitJSON;
}
export interface PrivatePointWithUnit {
    readonly zero: PointWithUnit;
    fromJSON(json: PointWithUnitJSON): PointWithUnit;
}
export declare class PointWithUnit extends DefaultSerializeable {
    private _x;
    private _y;
    get x(): NumberWithUnit;
    get y(): NumberWithUnit;
    private static fromJSON;
    private static get zero();
    constructor(x: NumberWithUnit, y: NumberWithUnit);
}
