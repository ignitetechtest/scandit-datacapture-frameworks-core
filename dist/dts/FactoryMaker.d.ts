interface FactoryMakerItem {
    instance?: any;
    builder?: () => any;
}
export declare class FactoryMaker {
    static instances: Map<string, FactoryMakerItem>;
    static bindInstance(clsName: string, instance: any): void;
    static bindLazyInstance<T>(clsName: string, builder: () => T): void;
    static bindInstanceIfNotExists(clsName: string, instance: any): void;
    static getInstance<T>(clsName: string): T | undefined;
}
export {};
