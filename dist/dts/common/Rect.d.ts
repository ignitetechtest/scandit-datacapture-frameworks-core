import { DefaultSerializeable } from "../serializable";
import { Point } from "./Point";
import { Size } from "./Size";
export declare class Rect extends DefaultSerializeable {
    private _origin;
    private _size;
    get origin(): Point;
    get size(): Size;
    constructor(origin: Point, size: Size);
}
