import { Color } from "../common/Color";
import { NumberWithUnit } from "../common/NumberWithUnit";
import { SizeWithUnit } from "../common/SizeWithUnit";
import { SizeWithUnitAndAspect } from "../common/SizeWithUnitAndAspect";
import { DefaultSerializeable } from "../serializable";
import { Viewfinder } from "./Viewfinder";
export declare class SpotlightViewfinder extends DefaultSerializeable implements Viewfinder {
    private type;
    private _sizeWithUnitAndAspect;
    enabledBorderColor: Color;
    disabledBorderColor: Color;
    backgroundColor: Color;
    get sizeWithUnitAndAspect(): SizeWithUnitAndAspect;
    private get coreDefaults();
    constructor();
    setSize(size: SizeWithUnit): void;
    setWidthAndAspectRatio(width: NumberWithUnit, heightToWidthAspectRatio: number): void;
    setHeightAndAspectRatio(height: NumberWithUnit, widthToHeightAspectRatio: number): void;
}
