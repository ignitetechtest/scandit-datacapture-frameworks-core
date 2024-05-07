import { DefaultSerializeable } from "../serializable";
import { LocationSelection } from "./LocationSelection";
import { NumberWithUnit, SizeWithUnit, SizeWithUnitAndAspect, SizeWithUnitAndAspectJSON } from "../common";
export interface RectangularLocationSelectionJSON {
    aspect: SizeWithUnitAndAspectJSON;
}
export interface PrivateRectangularLocationSelection {
    fromJSON(JSON: RectangularLocationSelectionJSON): RectangularLocationSelection;
}
export declare class RectangularLocationSelection extends DefaultSerializeable implements LocationSelection {
    private type;
    private _sizeWithUnitAndAspect;
    get sizeWithUnitAndAspect(): SizeWithUnitAndAspect;
    static withSize(size: SizeWithUnit): RectangularLocationSelection;
    static withWidthAndAspectRatio(width: NumberWithUnit, heightToWidthAspectRatio: number): RectangularLocationSelection;
    static withHeightAndAspectRatio(height: NumberWithUnit, widthToHeightAspectRatio: number): RectangularLocationSelection;
    static fromJSON(rectangularLocationSelectionJSON: RectangularLocationSelectionJSON): RectangularLocationSelection;
}
