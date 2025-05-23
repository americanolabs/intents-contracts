import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common.js";
export interface RouterInterface extends utils.Interface {
    functions: {
        "PACKAGE_VERSION()": FunctionFragment;
        "domains()": FunctionFragment;
        "enrollRemoteRouter(uint32,bytes32)": FunctionFragment;
        "enrollRemoteRouters(uint32[],bytes32[])": FunctionFragment;
        "handle(uint32,bytes32,bytes)": FunctionFragment;
        "hook()": FunctionFragment;
        "interchainSecurityModule()": FunctionFragment;
        "localDomain()": FunctionFragment;
        "mailbox()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "routers(uint32)": FunctionFragment;
        "setHook(address)": FunctionFragment;
        "setInterchainSecurityModule(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unenrollRemoteRouter(uint32)": FunctionFragment;
        "unenrollRemoteRouters(uint32[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PACKAGE_VERSION" | "PACKAGE_VERSION()" | "domains" | "domains()" | "enrollRemoteRouter" | "enrollRemoteRouter(uint32,bytes32)" | "enrollRemoteRouters" | "enrollRemoteRouters(uint32[],bytes32[])" | "handle" | "handle(uint32,bytes32,bytes)" | "hook" | "hook()" | "interchainSecurityModule" | "interchainSecurityModule()" | "localDomain" | "localDomain()" | "mailbox" | "mailbox()" | "owner" | "owner()" | "renounceOwnership" | "renounceOwnership()" | "routers" | "routers(uint32)" | "setHook" | "setHook(address)" | "setInterchainSecurityModule" | "setInterchainSecurityModule(address)" | "transferOwnership" | "transferOwnership(address)" | "unenrollRemoteRouter" | "unenrollRemoteRouter(uint32)" | "unenrollRemoteRouters" | "unenrollRemoteRouters(uint32[])"): FunctionFragment;
    encodeFunctionData(functionFragment: "PACKAGE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "PACKAGE_VERSION()", values?: undefined): string;
    encodeFunctionData(functionFragment: "domains", values?: undefined): string;
    encodeFunctionData(functionFragment: "domains()", values?: undefined): string;
    encodeFunctionData(functionFragment: "enrollRemoteRouter", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "enrollRemoteRouter(uint32,bytes32)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "enrollRemoteRouters", values: [BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "enrollRemoteRouters(uint32[],bytes32[])", values: [BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "handle", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "handle(uint32,bytes32,bytes)", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "hook", values?: undefined): string;
    encodeFunctionData(functionFragment: "hook()", values?: undefined): string;
    encodeFunctionData(functionFragment: "interchainSecurityModule", values?: undefined): string;
    encodeFunctionData(functionFragment: "interchainSecurityModule()", values?: undefined): string;
    encodeFunctionData(functionFragment: "localDomain", values?: undefined): string;
    encodeFunctionData(functionFragment: "localDomain()", values?: undefined): string;
    encodeFunctionData(functionFragment: "mailbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "mailbox()", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership()", values?: undefined): string;
    encodeFunctionData(functionFragment: "routers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "routers(uint32)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setHook", values: [string]): string;
    encodeFunctionData(functionFragment: "setHook(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "setInterchainSecurityModule", values: [string]): string;
    encodeFunctionData(functionFragment: "setInterchainSecurityModule(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "transferOwnership(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "unenrollRemoteRouter", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unenrollRemoteRouter(uint32)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unenrollRemoteRouters", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "unenrollRemoteRouters(uint32[])", values: [BigNumberish[]]): string;
    decodeFunctionResult(functionFragment: "PACKAGE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PACKAGE_VERSION()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domains()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrollRemoteRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrollRemoteRouter(uint32,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrollRemoteRouters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrollRemoteRouters(uint32[],bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle(uint32,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hook()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interchainSecurityModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interchainSecurityModule()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localDomain()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mailbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mailbox()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routers(uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHook(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterchainSecurityModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterchainSecurityModule(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unenrollRemoteRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unenrollRemoteRouter(uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unenrollRemoteRouters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unenrollRemoteRouters(uint32[])", data: BytesLike): Result;
    events: {
        "HookSet(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "IsmSet(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "HookSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "HookSet(address)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized(uint8)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IsmSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IsmSet(address)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"): EventFragment;
}
export interface HookSetEventObject {
    _hook: string;
}
export type HookSetEvent = TypedEvent<[string], HookSetEventObject>;
export type HookSetEventFilter = TypedEventFilter<HookSetEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface IsmSetEventObject {
    _ism: string;
}
export type IsmSetEvent = TypedEvent<[string], IsmSetEventObject>;
export type IsmSetEventFilter = TypedEventFilter<IsmSetEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface Router extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RouterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<[string]>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<[string]>;
        domains(overrides?: CallOverrides): Promise<[number[]]>;
        "domains()"(overrides?: CallOverrides): Promise<[number[]]>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "enrollRemoteRouter(uint32,bytes32)"(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        enrollRemoteRouters(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "enrollRemoteRouters(uint32[],bytes32[])"(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        hook(overrides?: CallOverrides): Promise<[string]>;
        "hook()"(overrides?: CallOverrides): Promise<[string]>;
        interchainSecurityModule(overrides?: CallOverrides): Promise<[string]>;
        "interchainSecurityModule()"(overrides?: CallOverrides): Promise<[string]>;
        localDomain(overrides?: CallOverrides): Promise<[number]>;
        "localDomain()"(overrides?: CallOverrides): Promise<[number]>;
        mailbox(overrides?: CallOverrides): Promise<[string]>;
        "mailbox()"(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        "owner()"(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "renounceOwnership()"(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        routers(_domain: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "routers(uint32)"(_domain: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        setHook(_hook: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "setHook(address)"(_hook: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setInterchainSecurityModule(_module: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "setInterchainSecurityModule(address)"(_module: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "transferOwnership(address)"(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unenrollRemoteRouter(_domain: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "unenrollRemoteRouter(uint32)"(_domain: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unenrollRemoteRouters(_domains: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "unenrollRemoteRouters(uint32[])"(_domains: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    PACKAGE_VERSION(overrides?: CallOverrides): Promise<string>;
    "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<string>;
    domains(overrides?: CallOverrides): Promise<number[]>;
    "domains()"(overrides?: CallOverrides): Promise<number[]>;
    enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "enrollRemoteRouter(uint32,bytes32)"(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    enrollRemoteRouters(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "enrollRemoteRouters(uint32[],bytes32[])"(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    hook(overrides?: CallOverrides): Promise<string>;
    "hook()"(overrides?: CallOverrides): Promise<string>;
    interchainSecurityModule(overrides?: CallOverrides): Promise<string>;
    "interchainSecurityModule()"(overrides?: CallOverrides): Promise<string>;
    localDomain(overrides?: CallOverrides): Promise<number>;
    "localDomain()"(overrides?: CallOverrides): Promise<number>;
    mailbox(overrides?: CallOverrides): Promise<string>;
    "mailbox()"(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    "owner()"(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "renounceOwnership()"(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    routers(_domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "routers(uint32)"(_domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
    setHook(_hook: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "setHook(address)"(_hook: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setInterchainSecurityModule(_module: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "setInterchainSecurityModule(address)"(_module: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "transferOwnership(address)"(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unenrollRemoteRouter(_domain: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "unenrollRemoteRouter(uint32)"(_domain: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unenrollRemoteRouters(_domains: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "unenrollRemoteRouters(uint32[])"(_domains: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<string>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<string>;
        domains(overrides?: CallOverrides): Promise<number[]>;
        "domains()"(overrides?: CallOverrides): Promise<number[]>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: CallOverrides): Promise<void>;
        "enrollRemoteRouter(uint32,bytes32)"(_domain: BigNumberish, _router: BytesLike, overrides?: CallOverrides): Promise<void>;
        enrollRemoteRouters(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: CallOverrides): Promise<void>;
        "enrollRemoteRouters(uint32[],bytes32[])"(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: CallOverrides): Promise<void>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: CallOverrides): Promise<void>;
        "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: CallOverrides): Promise<void>;
        hook(overrides?: CallOverrides): Promise<string>;
        "hook()"(overrides?: CallOverrides): Promise<string>;
        interchainSecurityModule(overrides?: CallOverrides): Promise<string>;
        "interchainSecurityModule()"(overrides?: CallOverrides): Promise<string>;
        localDomain(overrides?: CallOverrides): Promise<number>;
        "localDomain()"(overrides?: CallOverrides): Promise<number>;
        mailbox(overrides?: CallOverrides): Promise<string>;
        "mailbox()"(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        "owner()"(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;
        routers(_domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "routers(uint32)"(_domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setHook(_hook: string, overrides?: CallOverrides): Promise<void>;
        "setHook(address)"(_hook: string, overrides?: CallOverrides): Promise<void>;
        setInterchainSecurityModule(_module: string, overrides?: CallOverrides): Promise<void>;
        "setInterchainSecurityModule(address)"(_module: string, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        "transferOwnership(address)"(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unenrollRemoteRouter(_domain: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "unenrollRemoteRouter(uint32)"(_domain: BigNumberish, overrides?: CallOverrides): Promise<void>;
        unenrollRemoteRouters(_domains: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        "unenrollRemoteRouters(uint32[])"(_domains: BigNumberish[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "HookSet(address)"(_hook?: null): HookSetEventFilter;
        HookSet(_hook?: null): HookSetEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "IsmSet(address)"(_ism?: null): IsmSetEventFilter;
        IsmSet(_ism?: null): IsmSetEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<BigNumber>;
        domains(overrides?: CallOverrides): Promise<BigNumber>;
        "domains()"(overrides?: CallOverrides): Promise<BigNumber>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "enrollRemoteRouter(uint32,bytes32)"(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        enrollRemoteRouters(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "enrollRemoteRouters(uint32[],bytes32[])"(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        hook(overrides?: CallOverrides): Promise<BigNumber>;
        "hook()"(overrides?: CallOverrides): Promise<BigNumber>;
        interchainSecurityModule(overrides?: CallOverrides): Promise<BigNumber>;
        "interchainSecurityModule()"(overrides?: CallOverrides): Promise<BigNumber>;
        localDomain(overrides?: CallOverrides): Promise<BigNumber>;
        "localDomain()"(overrides?: CallOverrides): Promise<BigNumber>;
        mailbox(overrides?: CallOverrides): Promise<BigNumber>;
        "mailbox()"(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        "owner()"(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "renounceOwnership()"(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        routers(_domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "routers(uint32)"(_domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setHook(_hook: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "setHook(address)"(_hook: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setInterchainSecurityModule(_module: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "setInterchainSecurityModule(address)"(_module: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "transferOwnership(address)"(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unenrollRemoteRouter(_domain: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "unenrollRemoteRouter(uint32)"(_domain: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unenrollRemoteRouters(_domains: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "unenrollRemoteRouters(uint32[])"(_domains: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        domains(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "domains()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "enrollRemoteRouter(uint32,bytes32)"(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        enrollRemoteRouters(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "enrollRemoteRouters(uint32[],bytes32[])"(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        hook(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "hook()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        interchainSecurityModule(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "interchainSecurityModule()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "localDomain()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mailbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "mailbox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "renounceOwnership()"(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        routers(_domain: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "routers(uint32)"(_domain: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setHook(_hook: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "setHook(address)"(_hook: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setInterchainSecurityModule(_module: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "setInterchainSecurityModule(address)"(_module: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "transferOwnership(address)"(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unenrollRemoteRouter(_domain: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "unenrollRemoteRouter(uint32)"(_domain: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unenrollRemoteRouters(_domains: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "unenrollRemoteRouters(uint32[])"(_domains: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Router.d.ts.map