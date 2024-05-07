import { DefaultSerializeable } from "../serializable";
import { Control } from "../view";
export declare class ZoomSwitchControl extends DefaultSerializeable implements Control {
    private type;
    private icon;
    private view;
    private anchor;
    private offset;
    get zoomedOutImage(): string | null;
    set zoomedOutImage(zoomedOutImage: string | null);
    get zoomedInImage(): string | null;
    set zoomedInImage(zoomedInImage: string | null);
    get zoomedInPressedImage(): string | null;
    set zoomedInPressedImage(zoomedInPressedImage: string | null);
    get zoomedOutPressedImage(): string | null;
    set zoomedOutPressedImage(zoomedOutPressedImage: string | null);
    setZoomedInImage(resource: string): void;
    setZoomedInPressedImage(resource: string): void;
    setZoomedOutImage(resource: string): void;
    setZoomedOutPressedImage(resource: string): void;
}
