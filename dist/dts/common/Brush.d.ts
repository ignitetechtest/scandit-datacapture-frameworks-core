import { DefaultSerializeable } from "../serializable";
import { Color } from "./Color";
export interface PrivateBrush {
    readonly copy: Brush;
    defaults: any;
    toJSON(): BrushJSON;
}
export interface BrushJSON {
    fill: {
        color: Color;
    };
    stroke: {
        color: Color;
        width: number;
    };
}
export declare class Brush extends DefaultSerializeable {
    private static defaults;
    private fill;
    private stroke;
    static get transparent(): Brush;
    get fillColor(): Color;
    get strokeColor(): Color;
    get strokeWidth(): number;
    private get copy();
    constructor();
    constructor(fillColor: Color, strokeColor: Color, strokeWidth: number);
}
