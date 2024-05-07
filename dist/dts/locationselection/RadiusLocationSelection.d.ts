import { DefaultSerializeable } from "../serializable";
import { LocationSelection } from "./LocationSelection";
import { NumberWithUnit, NumberWithUnitJSON } from "../common";
export interface RadiusLocationSelectionJSON {
    radius: NumberWithUnitJSON;
}
export interface PrivateRadiusLocationSelection {
    fromJSON(JSON: RadiusLocationSelectionJSON): RadiusLocationSelection;
}
export declare class RadiusLocationSelection extends DefaultSerializeable implements LocationSelection {
    private type;
    private _radius;
    get radius(): NumberWithUnit;
    static fromJSON(locationSelectionJson: RadiusLocationSelectionJSON): RadiusLocationSelection;
    constructor(radius: NumberWithUnit);
}
