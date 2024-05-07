import { Serializeable } from "../serializable";
import { DataCaptureContext } from "./DataCaptureContext";
export interface DataCaptureMode extends Serializeable {
    isEnabled: boolean;
    readonly context: DataCaptureContext | null;
}
export interface PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
}
