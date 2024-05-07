import { SizeJSON } from "./Size";
export interface DidChangeSizeEventPayload {
    size: SizeJSON;
    orientation: string;
}
export interface DidChangeStatusEventPayload {
    status: string;
}
export interface DidChangeStateEventPayload {
    state: string;
}
