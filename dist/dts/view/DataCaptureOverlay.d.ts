import { Serializeable } from "../serializable";
import { BaseDataCaptureView } from "./DataCaptureView";
export interface DataCaptureOverlay extends Serializeable {
}
export interface PrivateDataCaptureOverlay {
    view: BaseDataCaptureView | null;
}
