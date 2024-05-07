import { DataCaptureContext } from "./DataCaptureContext";
export interface DataCaptureComponent {
    readonly id: string;
}
export interface PrivateDataCaptureComponent {
    _context: DataCaptureContext;
}
