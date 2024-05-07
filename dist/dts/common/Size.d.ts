import { DefaultSerializeable } from "../serializable";
export interface SizeJSON {
    width: number;
    height: number;
}
export interface PrivateSize {
    fromJSON(json: SizeJSON): Size;
}
export declare class Size extends DefaultSerializeable {
    private _width;
    private _height;
    get width(): number;
    get height(): number;
    private static fromJSON;
    constructor(width: number, height: number);
}
