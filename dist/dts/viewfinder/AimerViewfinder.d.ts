import { Color } from "../common";
import { DefaultSerializeable } from "../serializable";
import { Viewfinder } from "./Viewfinder";
export declare class AimerViewfinder extends DefaultSerializeable implements Viewfinder {
    private type;
    frameColor: Color;
    dotColor: Color;
    private get coreDefaults();
    constructor();
}
