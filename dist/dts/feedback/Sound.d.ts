import { DefaultSerializeable } from "../serializable";
export interface SoundJSON {
    resource: string | null;
}
export interface PrivateSound {
    fromJSON(json: SoundJSON): Sound;
}
export declare class Sound extends DefaultSerializeable {
    resource: string | null;
    static get defaultSound(): Sound;
    private static fromJSON;
    constructor(resource: string | null);
}
