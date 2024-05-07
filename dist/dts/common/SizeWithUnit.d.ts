import { DefaultSerializeable } from "../serializable";
import { NumberWithUnit } from "./NumberWithUnit";
export declare class SizeWithUnit extends DefaultSerializeable {
    private _width;
    private _height;
    get width(): NumberWithUnit;
    get height(): NumberWithUnit;
    constructor(width: NumberWithUnit, height: NumberWithUnit);
}
