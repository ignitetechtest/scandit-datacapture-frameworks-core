import { DefaultSerializeable } from "../serializable";
import { NumberWithUnit, NumberWithUnitJSON } from "./NumberWithUnit";
export interface MarginsWithUnitJSON {
    left: NumberWithUnitJSON;
    right: NumberWithUnitJSON;
    top: NumberWithUnitJSON;
    bottom: NumberWithUnitJSON;
}
export interface PrivateMarginsWithUnit {
    readonly zero: MarginsWithUnit;
    fromJSON(json: MarginsWithUnitJSON): MarginsWithUnit;
}
export declare class MarginsWithUnit extends DefaultSerializeable {
    private _left;
    private _right;
    private _top;
    private _bottom;
    get left(): NumberWithUnit;
    get right(): NumberWithUnit;
    get top(): NumberWithUnit;
    get bottom(): NumberWithUnit;
    private static fromJSON;
    private static get zero();
    constructor(left: NumberWithUnit, right: NumberWithUnit, top: NumberWithUnit, bottom: NumberWithUnit);
}
