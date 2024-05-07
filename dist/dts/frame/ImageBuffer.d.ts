export declare class ImageBuffer {
    private _width;
    private _height;
    private _data;
    get width(): number;
    get height(): number;
    get data(): string;
}
export interface PrivateImageBuffer {
    _width: number;
    _height: number;
    _data: string;
}
export interface ImageBufferJSON {
    width: number;
    height: number;
    data: string;
}
