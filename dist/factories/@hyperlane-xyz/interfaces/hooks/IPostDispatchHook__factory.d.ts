import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPostDispatchHook, IPostDispatchHookInterface } from "../../../../@hyperlane-xyz/interfaces/hooks/IPostDispatchHook.js";
export declare class IPostDispatchHook__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "hookType";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "metadata";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "postDispatch";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "metadata";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "quoteDispatch";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "metadata";
            readonly type: "bytes";
        }];
        readonly name: "supportsMetadata";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IPostDispatchHookInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPostDispatchHook;
}
//# sourceMappingURL=IPostDispatchHook__factory.d.ts.map