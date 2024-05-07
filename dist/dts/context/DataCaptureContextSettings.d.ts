import { DefaultSerializeable } from "../serializable";
export declare class DataCaptureContextSettings extends DefaultSerializeable {
    constructor();
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
}
