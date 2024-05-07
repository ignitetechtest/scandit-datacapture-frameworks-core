import { FrameSourceState } from "./FrameSourceState";
import { ImageFrameSource } from "./ImageFrameSource";
import { CameraPosition } from "../camerahelpers";
export interface ImageFrameSourceProxy {
    getCurrentCameraState(position: CameraPosition): Promise<FrameSourceState>;
    switchCameraToDesiredState(desiredStateJson: string): Promise<void>;
    registerListenerForEvents(): void;
    unregisterListenerForEvents(): void;
    subscribeDidChangeState(): void;
}
export declare class ImageFrameSourceController {
    private imageFrameSource;
    private eventEmitter;
    private _proxy;
    static forImage(imageFrameSource: ImageFrameSource): ImageFrameSourceController;
    private constructor();
    getCurrentState(): Promise<FrameSourceState>;
    switchCameraToDesiredState(desiredStateJson: string): Promise<void>;
    subscribeListener(): void;
    unsubscribeListener(): void;
}
