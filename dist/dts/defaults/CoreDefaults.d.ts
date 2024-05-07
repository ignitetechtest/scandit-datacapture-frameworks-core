import { FocusGesture, FocusGestureStrategy, FocusRange, LogoStyle, VideoResolution, ZoomGesture } from "../camera";
import { CameraPosition } from "../camerahelpers";
import { Anchor, Color, MarginsWithUnit, NumberWithUnit, PointWithUnit, SizeWithUnitAndAspect } from "../common";
import { LaserlineViewfinderStyle, RectangularViewfinderAnimation, RectangularViewfinderLineStyle, RectangularViewfinderStyle } from "../viewfinder";
export interface CameraSettingsDefaults {
    preferredResolution: VideoResolution;
    zoomFactor: number;
    focusRange: FocusRange;
    zoomGestureZoomFactor: number;
    focusGestureStrategy: FocusGestureStrategy;
    shouldPreferSmoothAutoFocus: boolean;
    properties: {
        [key: string]: any;
    };
}
export interface CoreDefaults {
    Camera: {
        Settings: CameraSettingsDefaults;
        defaultPosition: CameraPosition | null;
        availablePositions: CameraPosition[];
    };
    DataCaptureView: {
        scanAreaMargins: MarginsWithUnit;
        pointOfInterest: PointWithUnit;
        logoAnchor: Anchor;
        logoOffset: PointWithUnit;
        focusGesture: FocusGesture | null;
        zoomGesture: ZoomGesture | null;
        logoStyle: LogoStyle;
    };
    LaserlineViewfinder: {
        defaultStyle: string;
        styles: {
            [key: string]: {
                style: LaserlineViewfinderStyle;
                width: NumberWithUnit;
                enabledColor: Color;
                disabledColor: Color;
            };
        };
    };
    RectangularViewfinder: {
        defaultStyle: string;
        styles: {
            [key: string]: {
                size: SizeWithUnitAndAspect;
                color: Color;
                style: RectangularViewfinderStyle;
                lineStyle: RectangularViewfinderLineStyle;
                dimming: string;
                disabledDimming: string;
                animation: RectangularViewfinderAnimation | null;
                disabledColor: Color;
            };
        };
    };
    SpotlightViewfinder?: {
        size: SizeWithUnitAndAspect;
        enabledBorderColor: Color;
        disabledBorderColor: Color;
        backgroundColor: Color;
    };
    AimerViewfinder: {
        frameColor: Color;
        dotColor: Color;
    };
    Brush: {
        fillColor: Color;
        strokeColor: Color;
        strokeWidth: number;
    };
    deviceID: string | null;
}
export declare function parseDefaults(jsonDefaults: any): CoreDefaults;
