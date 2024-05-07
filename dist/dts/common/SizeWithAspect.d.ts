import { DefaultSerializeable } from "../serializable";
import { NumberWithUnit } from "./NumberWithUnit";
export declare class SizeWithAspect extends DefaultSerializeable {
    private _size;
    private _aspect;
    get size(): NumberWithUnit;
    get aspect(): number;
    constructor(size: NumberWithUnit, aspect: number);
}
