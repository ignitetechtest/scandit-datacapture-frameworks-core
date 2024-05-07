import { DataCaptureContext } from "../context";
import { FrameSource, FrameSourceListener, FrameSourceState } from "../frame";
import { DefaultSerializeable } from "../serializable";
import { CameraController } from "./CameraController";
import { TorchState } from "./TorchState";
import { CameraPosition } from "../camerahelpers/CameraPosition";
import { CameraSettings } from "./CameraSettings";
export declare class Camera extends DefaultSerializeable implements FrameSource {
    private type;
    private settings;
    private position;
    private _desiredTorchState;
    private _desiredState;
    private listeners;
    private _context;
    private static get coreDefaults();
    private set context(value);
    private get context();
    private controller;
    static get default(): Camera | null;
    static withSettings(settings: CameraSettings): Camera | null;
    static atPosition(cameraPosition: CameraPosition): Camera | null;
    get desiredState(): FrameSourceState;
    set desiredTorchState(desiredTorchState: TorchState);
    get desiredTorchState(): TorchState;
    private constructor();
    switchToDesiredState(state: FrameSourceState): Promise<void>;
    getCurrentState(): Promise<FrameSourceState>;
    getIsTorchAvailable(): Promise<boolean>;
    /**
     * @deprecated
     */
    get isTorchAvailable(): boolean;
    addListener(listener: FrameSourceListener | null): void;
    removeListener(listener: FrameSourceListener | null): void;
    applySettings(settings: CameraSettings): Promise<void>;
    private didChange;
}
export interface PrivateCamera {
    context: DataCaptureContext | null;
    position: CameraPosition;
    _desiredState: FrameSourceState;
    desiredTorchState: TorchState;
    settings: CameraSettings;
    listeners: FrameSourceListener[];
    controller: CameraController;
    initialize: () => void;
    didChange: () => Promise<void>;
}
