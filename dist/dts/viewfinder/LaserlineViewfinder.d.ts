import { NumberWithUnit, Color } from "../common";
import { DefaultSerializeable } from "../serializable";
import { Viewfinder } from "./Viewfinder";
import { LaserlineViewfinderStyle } from "./LaserlineViewfinderStyle";
export declare class LaserlineViewfinder extends DefaultSerializeable implements Viewfinder {
    private type;
    private readonly _style;
    width: NumberWithUnit;
    enabledColor: Color;
    disabledColor: Color;
    private get coreDefaults();
    constructor();
    constructor(style: LaserlineViewfinderStyle);
    get style(): LaserlineViewfinderStyle;
}
