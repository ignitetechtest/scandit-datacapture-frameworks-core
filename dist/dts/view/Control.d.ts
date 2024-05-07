import { BaseDataCaptureView } from "./DataCaptureView";
import { Anchor, PointWithUnit } from "../common";
export interface Control {
}
export interface PrivateControl {
    view: BaseDataCaptureView | null;
    anchor: Anchor | null;
    offset: PointWithUnit | null;
}
