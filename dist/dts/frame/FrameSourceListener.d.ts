import { FrameSourceState } from "./FrameSourceState";
import { FrameSource } from "./FrameSource";
export interface FrameSourceListener {
    didChangeState?(frameSource: FrameSource, newState: FrameSourceState): void;
}
