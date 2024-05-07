import { DataCaptureContext } from "../DataCaptureContext";
import { DataCaptureMode } from "../DataCaptureMode";
export interface DataCaptureContextProxy {
    get framework(): string;
    get frameworkVersion(): string;
    contextFromJSON(context: DataCaptureContext): Promise<void>;
    updateContextFromJSON(context: DataCaptureContext): Promise<void>;
    dispose(): void;
    registerListenerForDataCaptureContext(): void;
    unregisterListenerForDataCaptureContext(): Promise<void>;
    subscribeDidChangeStatus?(): void;
    subscribeDidStartObservingContext?(): void;
    addModeToContext(modeJson: string): Promise<void>;
    removeModeFromContext(modeJson: string): Promise<void>;
    removeAllModesFromContext(): Promise<void>;
}
export declare enum DataCaptureContextEvents {
    didChangeStatus = "DataCaptureContextListener.onStatusChanged",
    didStartObservingContext = "DataCaptureContextListener.onObservationStarted"
}
export declare class DataCaptureContextController {
    private _proxy;
    private context;
    private eventEmitter;
    get framework(): string;
    get frameworkVersion(): string;
    private get privateContext();
    static forDataCaptureContext(context: DataCaptureContext): DataCaptureContextController;
    private constructor();
    updateContextFromJSON(): Promise<void>;
    addModeToContext(mode: DataCaptureMode): Promise<void>;
    removeModeFromContext(mode: DataCaptureMode): Promise<void>;
    removeAllModesFromContext(): Promise<void>;
    dispose(): void;
    private unsubscribeListener;
    private initialize;
    private initializeContextFromJSON;
    private subscribeListener;
    private notifyListenersOfDeserializationError;
    private notifyListenersOfDidChangeStatus;
}
