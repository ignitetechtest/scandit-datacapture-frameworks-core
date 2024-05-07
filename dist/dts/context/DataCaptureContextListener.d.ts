import { ContextStatus } from "./ContextStatus";
import { DataCaptureContext } from "./DataCaptureContext";
export interface DataCaptureContextListener {
    didChangeStatus?(context: DataCaptureContext, contextStatus: ContextStatus): void;
    didStartObservingContext?(context: DataCaptureContext): void;
}
