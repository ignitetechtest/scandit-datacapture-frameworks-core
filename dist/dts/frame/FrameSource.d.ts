import { Serializeable } from "../serializable";
import { FrameSourceState } from "./FrameSourceState";
import { FrameSourceListener } from "./FrameSourceListener";
import { DataCaptureContext } from "../context/DataCaptureContext";
export interface PrivateFrameSource {
    context: DataCaptureContext | null;
}
export interface FrameSource extends Serializeable {
    readonly desiredState: FrameSourceState;
    switchToDesiredState(desiredState: FrameSourceState): Promise<void>;
    getCurrentState(): Promise<FrameSourceState>;
    addListener(listener: FrameSourceListener): void;
    removeListener(listener: FrameSourceListener): void;
}
