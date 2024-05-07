import { Orientation, Size } from "../common";
import { DataCaptureView } from "./DataCaptureView";
export interface DataCaptureViewListener {
    didChangeSize?(view: DataCaptureView, size: Size, orientation: Orientation): void;
}
