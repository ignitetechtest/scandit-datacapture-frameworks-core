import { DefaultSerializeable } from "../serializable";
import { VibrationType } from "./VibrationType";
export interface VibrationJSON {
    type: string;
    timings: number[] | null;
    amplitudes: number[] | null;
}
export interface PrivateVibration {
    fromJSON(json: VibrationJSON): Vibration;
}
export declare class Vibration extends DefaultSerializeable {
    private type;
    static get defaultVibration(): Vibration;
    static get selectionHapticFeedback(): Vibration;
    static get successHapticFeedback(): Vibration;
    static get impactHapticFeedback(): Vibration;
    private static fromJSON;
    protected constructor(type: VibrationType);
}
export declare class WaveFormVibration extends Vibration {
    private _timings;
    get timings(): number[];
    private _amplitudes;
    get amplitudes(): number[] | null;
    constructor(timings: number[], amplitudes?: number[] | null);
}
