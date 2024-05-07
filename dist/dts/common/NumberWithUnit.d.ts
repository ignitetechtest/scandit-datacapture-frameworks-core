import { DefaultSerializeable } from "../serializable";
import { MeasureUnit } from "./MeasureUnit";
export interface NumberWithUnitJSON {
    value: number;
    unit: string;
}
export interface PrivateNumberWithUnit {
    fromJSON(json: NumberWithUnitJSON): NumberWithUnit;
}
export declare class NumberWithUnit extends DefaultSerializeable {
    private _value;
    private _unit;
    get value(): number;
    get unit(): MeasureUnit;
    private static fromJSON;
    constructor(value: number, unit: MeasureUnit);
}
