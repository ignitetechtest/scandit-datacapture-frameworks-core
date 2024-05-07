import { DefaultSerializeable } from "../serializable";
import { CameraPosition } from "../camerahelpers";
import { DataCaptureContext } from "../context";
import { FrameSourceListener } from "./FrameSourceListener";
import { FrameSourceState } from "./FrameSourceState";
import { FrameSource } from "./FrameSource";
import { ImageFrameSourceController } from "./ImageFrameSourceController";
export interface ImageFrameSourceJSON {
    image: string;
}
export interface PrivateImageFrameSource {
    context: DataCaptureContext | null;
    _desiredState: FrameSourceState;
    listeners: FrameSourceListener[];
    _controller: ImageFrameSourceController;
    controller: ImageFrameSourceController;
    position: CameraPosition;
    initialize: () => void;
    didChange: () => Promise<void>;
}
export declare class ImageFrameSource extends DefaultSerializeable implements FrameSource {
    private set context(value);
    private get context();
    get desiredState(): FrameSourceState;
    private position;
    private type;
    private image;
    private _id;
    private _desiredState;
    private listeners;
    private _context;
    private controller;
    static create(image: string): ImageFrameSource;
    private static fromJSON;
    private constructor();
    private didChange;
    switchToDesiredState(state: FrameSourceState): Promise<void>;
    addListener(listener: FrameSourceListener | null): void;
    removeListener(listener: FrameSourceListener | null): void;
    getCurrentState(): Promise<FrameSourceState>;
}
