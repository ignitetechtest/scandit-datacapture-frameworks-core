import { DefaultSerializeable } from "../serializable";
import { Sound, SoundJSON } from "./Sound";
import { Vibration, VibrationJSON } from "./Vibration";
export interface FeedbackJSON {
    vibration: VibrationJSON | null;
    sound: SoundJSON | null;
}
export interface PrivateFeedback {
    fromJSON(json: FeedbackJSON): Feedback;
}
export declare class Feedback extends DefaultSerializeable {
    static get defaultFeedback(): Feedback;
    private _vibration;
    private _sound;
    private controller;
    get vibration(): Vibration | null;
    get sound(): Sound | null;
    private static fromJSON;
    constructor(vibration: Vibration | null, sound: Sound | null);
    emit(): void;
    toJSON(): object;
}
