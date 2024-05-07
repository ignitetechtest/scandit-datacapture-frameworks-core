import { DefaultSerializeable } from "../serializable";
export declare class ControlImage extends DefaultSerializeable {
    private type;
    private _data;
    private _name;
    private constructor();
    static fromBase64EncodedImage(data: string | null): ControlImage | null;
    static fromResourceName(resource: string): ControlImage;
    isBase64EncodedImage(): boolean;
    get data(): string | null;
}
