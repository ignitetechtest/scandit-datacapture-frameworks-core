import { ImageBuffer, ImageBufferJSON } from "./ImageBuffer";
export interface FrameData {
    readonly imageBuffers: ImageBuffer[];
    readonly orientation: number;
}
export interface FrameDataJSON {
    imageBuffers: ImageBufferJSON[];
    orientation: number;
}
export declare class PrivateFrameData implements FrameData {
    private _imageBuffers;
    private _orientation;
    get imageBuffers(): ImageBuffer[];
    get orientation(): number;
    static fromJSON(json: FrameDataJSON): FrameData;
}
