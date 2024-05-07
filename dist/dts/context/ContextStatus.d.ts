export interface ContextStatusJSON {
    code: number;
    isValid: boolean;
    message: string;
}
export interface PrivateContextStatus {
    fromJSON(json: ContextStatusJSON): ContextStatus;
}
export declare class ContextStatus {
    private _message;
    private _code;
    private _isValid;
    private static fromJSON;
    get message(): string;
    get code(): number;
    get isValid(): boolean;
}
