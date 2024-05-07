import { DefaultSerializeable } from "./serializable";
import { Expiration } from "./Expiration";
export declare class LicenseInfo extends DefaultSerializeable {
    private _expiration;
    get expiration(): Expiration;
}
