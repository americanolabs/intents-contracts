import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { PackageVersioned, PackageVersionedInterface } from "../../@hyperlane-xyz/PackageVersioned.js";
export declare class PackageVersioned__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "PACKAGE_VERSION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): PackageVersionedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PackageVersioned;
}
//# sourceMappingURL=PackageVersioned__factory.d.ts.map