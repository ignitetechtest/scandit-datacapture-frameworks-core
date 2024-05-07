import { DefaultSerializeable } from "../serializable";
import { PointWithUnit } from "./PointWithUnit";
import { SizeWithUnit } from "./SizeWithUnit";
export declare class RectWithUnit extends DefaultSerializeable {
    private _origin;
    private _size;
    get origin(): PointWithUnit;
    get size(): SizeWithUnit;
    constructor(origin: PointWithUnit, size: SizeWithUnit);
}
