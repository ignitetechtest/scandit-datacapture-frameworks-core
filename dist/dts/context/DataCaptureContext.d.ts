import { BaseDataCaptureView } from "../view";
import { FrameSource } from "../frame";
import { DefaultSerializeable } from "../serializable";
import { DataCaptureComponent } from "./DataCaptureComponent";
import { DataCaptureContextController } from "./controller/DataCaptureContextController";
import { DataCaptureContextCreationOptions } from "./DataCaptureContextCreationOptions";
import { DataCaptureContextListener } from "./DataCaptureContextListener";
import { DataCaptureContextSettings } from "./DataCaptureContextSettings";
import { DataCaptureMode } from "./DataCaptureMode";
export declare class DataCaptureContext extends DefaultSerializeable {
    private licenseKey;
    private deviceName;
    private get framework();
    private get frameworkVersion();
    private settings;
    private _frameSource;
    private view;
    private modes;
    private controller;
    private listeners;
    private static get coreDefaults();
    get frameSource(): FrameSource | null;
    static get deviceID(): string | null;
    /**
     * @deprecated
     */
    get deviceID(): string | null;
    static forLicenseKey(licenseKey: string): DataCaptureContext;
    static forLicenseKeyWithSettings(licenseKey: string, settings: DataCaptureContextSettings | null): DataCaptureContext;
    static forLicenseKeyWithOptions(licenseKey: string, options: DataCaptureContextCreationOptions | null): DataCaptureContext;
    private constructor();
    setFrameSource(frameSource: FrameSource | null): Promise<void>;
    addListener(listener: DataCaptureContextListener): void;
    removeListener(listener: DataCaptureContextListener): void;
    addMode(mode: DataCaptureMode): void;
    removeMode(mode: DataCaptureMode): void;
    removeAllModes(): void;
    dispose(): void;
    applySettings(settings: DataCaptureContextSettings): Promise<void>;
    private initialize;
    private update;
}
export interface PrivateDataCaptureContext {
    controller: DataCaptureContextController;
    modes: [DataCaptureMode];
    components: [DataCaptureComponent];
    listeners: DataCaptureContextListener[];
    view: BaseDataCaptureView;
    update: () => Promise<void>;
    initialize(): void;
}
