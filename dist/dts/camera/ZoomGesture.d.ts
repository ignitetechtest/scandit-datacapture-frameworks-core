export interface ZoomGesture {
}
export interface ZoomGestureJSON {
    type: string;
}
export declare class PrivateZoomGestureDeserializer {
    static fromJSON(json: ZoomGestureJSON | null): ZoomGesture | null;
}
