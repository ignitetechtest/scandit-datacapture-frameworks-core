import { Feedback } from "./Feedback";
export interface FeedbackProxy {
    emitFeedback(feedback: Feedback): Promise<void>;
}
export declare class FeedbackController {
    private feedback;
    private _proxy;
    private constructor();
    static forFeedback(feedback: Feedback): FeedbackController;
    emit(): void;
}
