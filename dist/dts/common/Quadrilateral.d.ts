import { DefaultSerializeable } from "../serializable";
import { Point, PointJSON } from "./Point";
export interface QuadrilateralJSON {
    topLeft: PointJSON;
    topRight: PointJSON;
    bottomRight: PointJSON;
    bottomLeft: PointJSON;
}
export interface PrivateQuadrilateral {
    fromJSON(json: QuadrilateralJSON): Quadrilateral;
}
export declare class Quadrilateral extends DefaultSerializeable {
    private _topLeft;
    private _topRight;
    private _bottomRight;
    private _bottomLeft;
    get topLeft(): Point;
    get topRight(): Point;
    get bottomRight(): Point;
    get bottomLeft(): Point;
    private static fromJSON;
    constructor(topLeft: Point, topRight: Point, bottomRight: Point, bottomLeft: Point);
}
