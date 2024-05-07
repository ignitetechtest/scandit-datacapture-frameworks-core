import { EventEmitter } from "./EventEmitter";
export declare class BaseController<PROXY> {
    protected eventEmitter: EventEmitter;
    private proxyName;
    protected get _proxy(): PROXY;
    constructor(proxyName: string);
    emit(event: any, payload: any): void;
}
export declare class BaseNativeProxy {
    protected eventEmitter: EventEmitter;
    constructor();
}
