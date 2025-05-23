import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common.js";
export interface MailboxClientInterface extends utils.Interface {
    functions: {
        "PACKAGE_VERSION()": FunctionFragment;
        "hook()": FunctionFragment;
        "interchainSecurityModule()": FunctionFragment;
        "localDomain()": FunctionFragment;
        "mailbox()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setHook(address)": FunctionFragment;
        "setInterchainSecurityModule(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PACKAGE_VERSION" | "PACKAGE_VERSION()" | "hook" | "hook()" | "interchainSecurityModule" | "interchainSecurityModule()" | "localDomain" | "localDomain()" | "mailbox" | "mailbox()" | "owner" | "owner()" | "renounceOwnership" | "renounceOwnership()" | "setHook" | "setHook(address)" | "setInterchainSecurityModule" | "setInterchainSecurityModule(address)" | "transferOwnership" | "transferOwnership(address)"): FunctionFragment;
    encodeFunctionData(functionFragment: "PACKAGE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "PACKAGE_VERSION()", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "setHook", values: [string]): string;
    encodeFunctionData(functionFragment: "setHook(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "setInterchainSecurityModule", values: [string]): string;
    encodeFunctionData(functionFragment: "setInterchainSecurityModule(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "transferOwnership(address)", values: [string]): string;
    decodeFunctionResult(functionFragment: "PACKAGE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PACKAGE_VERSION()", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "setHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHook(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterchainSecurityModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterchainSecurityModule(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership(address)", data: BytesLike): Result;
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
export interface MailboxClient extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MailboxClientInterface;
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
    };
    PACKAGE_VERSION(overrides?: CallOverrides): Promise<string>;
    "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<string>;
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
    callStatic: {
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<string>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<string>;
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
        setHook(_hook: string, overrides?: CallOverrides): Promise<void>;
        "setHook(address)"(_hook: string, overrides?: CallOverrides): Promise<void>;
        setInterchainSecurityModule(_module: string, overrides?: CallOverrides): Promise<void>;
        "setInterchainSecurityModule(address)"(_module: string, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        "transferOwnership(address)"(newOwner: string, overrides?: CallOverrides): Promise<void>;
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
    };
    populateTransaction: {
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
    };
}
//# sourceMappingURL=MailboxClient.d.ts.map