import { DefaultSerializeable } from "../serializable";
import { Control } from "../view";
export declare class TorchSwitchControl extends DefaultSerializeable implements Control {
    private type;
    private icon;
    private view;
    private anchor;
    private offset;
    get torchOffImage(): string | null;
    set torchOffImage(torchOffImage: string | null);
    get torchOffPressedImage(): string | null;
    set torchOffPressedImage(torchOffPressedImage: string | null);
    get torchOnImage(): string | null;
    set torchOnImage(torchOnImage: string | null);
    get torchOnPressedImage(): string | null;
    setTorchOffImage(resource: string): void;
    setTorchOffPressedImage(resource: string): void;
    setTorchOnImage(resource: string): void;
    setTorchOnPressedImage(resource: string): void;
    setImageResource(resource: string): void;
    set torchOnPressedImage(torchOnPressedImage: string | null);
}
