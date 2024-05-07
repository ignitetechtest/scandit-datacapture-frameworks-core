import { FocusGesture } from "./FocusGesture";
export interface FocusGestureJSON {
    type: string;
}
export declare class PrivateFocusGestureDeserializer {
    static fromJSON(json: FocusGestureJSON | null): FocusGesture | null;
}
