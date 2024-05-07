import { Serializeable } from "../serializable";
import { SizeWithUnit } from "./SizeWithUnit";
import { SizeWithAspect } from "./SizeWithAspect";
import { SizingMode } from "./SizingMode";
import { NumberWithUnitJSON } from "./NumberWithUnit";
export interface SizeWithUnitAndAspectJSON {
    width?: NumberWithUnitJSON;
    height?: NumberWithUnitJSON;
    shorterDimension?: NumberWithUnitJSON;
    aspect?: number;
}
export interface PrivateSizeWithUnitAndAspect {
    fromJSON(json: SizeWithUnitAndAspectJSON): SizeWithUnitAndAspect;
}
export declare class SizeWithUnitAndAspect implements Serializeable {
    private _widthAndHeight;
    private _widthAndAspectRatio;
    private _heightAndAspectRatio;
    private _shorterDimensionAndAspectRatio;
    get widthAndHeight(): SizeWithUnit | null;
    get widthAndAspectRatio(): SizeWithAspect | null;
    get heightAndAspectRatio(): SizeWithAspect | null;
    get shorterDimensionAndAspectRatio(): SizeWithAspect | null;
    get sizingMode(): SizingMode;
    private static sizeWithWidthAndHeight;
    private static sizeWithWidthAndAspectRatio;
    private static sizeWithHeightAndAspectRatio;
    private static sizeWithShorterDimensionAndAspectRatio;
    private static fromJSON;
    toJSON(): object;
}
