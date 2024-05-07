import { Camera } from "./Camera";
import { FrameData, FrameSourceState } from "../frame";
import { CameraPosition } from "../camerahelpers";
export interface CameraProxy {
    getLastFrame(): Promise<string>;
    getLastFrameOrNull(): Promise<string | null>;
    getCurrentCameraState(position: CameraPosition): Promise<FrameSourceState>;
    switchCameraToDesiredState(desiredStateJson: string): Promise<void>;
    isTorchAvailable(position: CameraPosition): Promise<boolean>;
    registerListenerForCameraEvents(): void;
    unregisterListenerForCameraEvents(): Promise<void>;
    subscribeDidChangeState?(): void;
}
export declare class CameraController {
    private camera;
    private eventEmitter;
    private static get _proxy();
    static forCamera(camera: Camera): CameraController;
    private constructor();
    private get privateCamera();
    static getLastFrame(): Promise<FrameData>;
    static getLastFrameOrNull(): Promise<FrameData | null>;
    getCurrentState(): Promise<FrameSourceState>;
    getIsTorchAvailable(): Promise<boolean>;
    switchCameraToDesiredState(desiredState: FrameSourceState): Promise<void>;
    subscribeListener(): void;
    unsubscribeListener(): void;
}
