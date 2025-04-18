import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { GasRouter, GasRouterInterface } from "../../../@hyperlane-xyz/client/GasRouter.js";
export declare class GasRouter__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "domain";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gas";
            readonly type: "uint256";
        }];
        readonly name: "GasSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_hook";
            readonly type: "address";
        }];
        readonly name: "HookSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_ism";
            readonly type: "address";
        }];
        readonly name: "IsmSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "PACKAGE_VERSION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly name: "destinationGas";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "domains";
        readonly outputs: readonly [{
            readonly internalType: "uint32[]";
            readonly name: "";
            readonly type: "uint32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_domain";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_router";
            readonly type: "bytes32";
        }];
        readonly name: "enrollRemoteRouter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32[]";
            readonly name: "_domains";
            readonly type: "uint32[]";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "_addresses";
            readonly type: "bytes32[]";
        }];
        readonly name: "enrollRemoteRouters";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_origin";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_sender";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }];
        readonly name: "handle";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hook";
        readonly outputs: readonly [{
            readonly internalType: "contract IPostDispatchHook";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "interchainSecurityModule";
        readonly outputs: readonly [{
            readonly internalType: "contract IInterchainSecurityModule";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "localDomain";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "mailbox";
        readonly outputs: readonly [{
            readonly internalType: "contract IMailbox";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_destinationDomain";
            readonly type: "uint32";
        }];
        readonly name: "quoteGasPayment";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_domain";
            readonly type: "uint32";
        }];
        readonly name: "routers";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "domain";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "gas";
            readonly type: "uint256";
        }];
        readonly name: "setDestinationGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "domain";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint256";
                readonly name: "gas";
                readonly type: "uint256";
            }];
            readonly internalType: "struct GasRouter.GasRouterConfig[]";
            readonly name: "gasConfigs";
            readonly type: "tuple[]";
        }];
        readonly name: "setDestinationGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_hook";
            readonly type: "address";
        }];
        readonly name: "setHook";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_module";
            readonly type: "address";
        }];
        readonly name: "setInterchainSecurityModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_domain";
            readonly type: "uint32";
        }];
        readonly name: "unenrollRemoteRouter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32[]";
            readonly name: "_domains";
            readonly type: "uint32[]";
        }];
        readonly name: "unenrollRemoteRouters";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): GasRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasRouter;
}
//# sourceMappingURL=GasRouter__factory.d.ts.map