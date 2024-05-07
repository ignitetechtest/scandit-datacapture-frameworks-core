import { DefaultSerializeable } from "../serializable";
import { FocusGestureStrategy } from "./FocusGestureStrategy";
import { FocusRange } from "./FocusRange";
import { VideoResolution } from "./VideoResolution";
export interface CameraSettingsJSON {
    preferredResolution: string;
    zoomFactor: number;
    focusRange: string;
    zoomGestureZoomFactor: number;
    focusGestureStrategy: string;
    shouldPreferSmoothAutoFocus: boolean;
    properties: {
        [key: string]: any;
    };
}
export interface PrivateCameraSettings {
    fromJSON(json: CameraSettingsJSON): CameraSettings;
}
export declare class CameraSettings extends DefaultSerializeable {
    private static get coreDefaults();
    private focusHiddenProperties;
    preferredResolution: VideoResolution;
    zoomFactor: number;
    zoomGestureZoomFactor: number;
    private focus;
    get focusRange(): FocusRange;
    set focusRange(newRange: FocusRange);
    get focusGestureStrategy(): FocusGestureStrategy;
    set focusGestureStrategy(newStrategy: FocusGestureStrategy);
    get shouldPreferSmoothAutoFocus(): boolean;
    set shouldPreferSmoothAutoFocus(newShouldPreferSmoothAutoFocus: boolean);
    get maxFrameRate(): number;
    set maxFrameRate(newValue: number);
    private static fromJSON;
    constructor();
    constructor(settings: CameraSettings);
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
}
