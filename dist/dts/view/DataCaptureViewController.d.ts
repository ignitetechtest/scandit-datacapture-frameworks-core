import { Point, Quadrilateral } from "../common";
import { BaseDataCaptureView } from "./DataCaptureView";
import { BaseController } from "../BaseController";
import { DataCaptureOverlay } from "./DataCaptureOverlay";
export interface DataCaptureViewProxy {
    viewPointForFramePoint(pointJson: string): Promise<string>;
    viewQuadrilateralForFrameQuadrilateral(quadrilateralJson: string): Promise<string>;
    registerListenerForViewEvents(): void;
    unregisterListenerForViewEvents(): void;
    subscribeDidChangeSize?(): void;
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    createView(viewJson: string): Promise<void>;
    updateView(viewJson: string): Promise<void>;
    addOverlay(overlayJson: string): Promise<void>;
    removeOverlay(overlayJson: string): Promise<void>;
    removeAllOverlays(): Promise<void>;
}
export declare enum DataCaptureViewEvents {
    didChangeSize = "DataCaptureViewListener.onSizeChanged"
}
export declare class DataCaptureViewController extends BaseController<DataCaptureViewProxy> {
    private view;
    static forDataCaptureView(view: BaseDataCaptureView): DataCaptureViewController;
    private constructor();
    viewPointForFramePoint(point: Point): Promise<Point>;
    viewQuadrilateralForFrameQuadrilateral(quadrilateral: Quadrilateral): Promise<Quadrilateral>;
    setPositionAndSize(top: number, left: number, width: number, height: number, shouldBeUnderWebView: boolean): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    private createView;
    updateView(): Promise<void>;
    dispose(): void;
    addOverlay(overlay: DataCaptureOverlay): Promise<void>;
    removeOverlay(overlay: DataCaptureOverlay): Promise<void>;
    removeAllOverlays(): Promise<void>;
    subscribeListener(): void;
    unsubscribeListener(): void;
}
