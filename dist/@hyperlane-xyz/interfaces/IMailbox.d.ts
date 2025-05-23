import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common.js";
export interface IMailboxInterface extends utils.Interface {
    functions: {
        "defaultHook()": FunctionFragment;
        "defaultIsm()": FunctionFragment;
        "delivered(bytes32)": FunctionFragment;
        "dispatch(uint32,bytes32,bytes,bytes,address)": FunctionFragment;
        "dispatch(uint32,bytes32,bytes,bytes)": FunctionFragment;
        "dispatch(uint32,bytes32,bytes)": FunctionFragment;
        "latestDispatchedId()": FunctionFragment;
        "localDomain()": FunctionFragment;
        "process(bytes,bytes)": FunctionFragment;
        "quoteDispatch(uint32,bytes32,bytes,bytes,address)": FunctionFragment;
        "quoteDispatch(uint32,bytes32,bytes)": FunctionFragment;
        "quoteDispatch(uint32,bytes32,bytes,bytes)": FunctionFragment;
        "recipientIsm(address)": FunctionFragment;
        "requiredHook()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "defaultHook" | "defaultHook()" | "defaultIsm" | "defaultIsm()" | "delivered" | "delivered(bytes32)" | "dispatch(uint32,bytes32,bytes,bytes,address)" | "dispatch(uint32,bytes32,bytes,bytes)" | "dispatch(uint32,bytes32,bytes)" | "latestDispatchedId" | "latestDispatchedId()" | "localDomain" | "localDomain()" | "process" | "process(bytes,bytes)" | "quoteDispatch(uint32,bytes32,bytes,bytes,address)" | "quoteDispatch(uint32,bytes32,bytes)" | "quoteDispatch(uint32,bytes32,bytes,bytes)" | "recipientIsm" | "recipientIsm(address)" | "requiredHook" | "requiredHook()"): FunctionFragment;
    encodeFunctionData(functionFragment: "defaultHook", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultHook()", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultIsm", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultIsm()", values?: undefined): string;
    encodeFunctionData(functionFragment: "delivered", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "delivered(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "dispatch(uint32,bytes32,bytes,bytes,address)", values: [BigNumberish, BytesLike, BytesLike, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "dispatch(uint32,bytes32,bytes,bytes)", values: [BigNumberish, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "dispatch(uint32,bytes32,bytes)", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "latestDispatchedId", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestDispatchedId()", values?: undefined): string;
    encodeFunctionData(functionFragment: "localDomain", values?: undefined): string;
    encodeFunctionData(functionFragment: "localDomain()", values?: undefined): string;
    encodeFunctionData(functionFragment: "process", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "process(bytes,bytes)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "quoteDispatch(uint32,bytes32,bytes,bytes,address)", values: [BigNumberish, BytesLike, BytesLike, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "quoteDispatch(uint32,bytes32,bytes)", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "quoteDispatch(uint32,bytes32,bytes,bytes)", values: [BigNumberish, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "recipientIsm", values: [string]): string;
    encodeFunctionData(functionFragment: "recipientIsm(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "requiredHook", values?: undefined): string;
    encodeFunctionData(functionFragment: "requiredHook()", values?: undefined): string;
    decodeFunctionResult(functionFragment: "defaultHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultHook()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultIsm", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultIsm()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delivered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delivered(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dispatch(uint32,bytes32,bytes,bytes,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dispatch(uint32,bytes32,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dispatch(uint32,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestDispatchedId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestDispatchedId()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localDomain()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "process", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "process(bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteDispatch(uint32,bytes32,bytes,bytes,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteDispatch(uint32,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteDispatch(uint32,bytes32,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recipientIsm", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recipientIsm(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requiredHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requiredHook()", data: BytesLike): Result;
    events: {
        "Dispatch(address,uint32,bytes32,bytes)": EventFragment;
        "DispatchId(bytes32)": EventFragment;
        "Process(uint32,bytes32,address)": EventFragment;
        "ProcessId(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Dispatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Dispatch(address,uint32,bytes32,bytes)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DispatchId"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DispatchId(bytes32)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Process"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Process(uint32,bytes32,address)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProcessId"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProcessId(bytes32)"): EventFragment;
}
export interface DispatchEventObject {
    sender: string;
    destination: number;
    recipient: string;
    message: string;
}
export type DispatchEvent = TypedEvent<[
    string,
    number,
    string,
    string
], DispatchEventObject>;
export type DispatchEventFilter = TypedEventFilter<DispatchEvent>;
export interface DispatchIdEventObject {
    messageId: string;
}
export type DispatchIdEvent = TypedEvent<[string], DispatchIdEventObject>;
export type DispatchIdEventFilter = TypedEventFilter<DispatchIdEvent>;
export interface ProcessEventObject {
    origin: number;
    sender: string;
    recipient: string;
}
export type ProcessEvent = TypedEvent<[
    number,
    string,
    string
], ProcessEventObject>;
export type ProcessEventFilter = TypedEventFilter<ProcessEvent>;
export interface ProcessIdEventObject {
    messageId: string;
}
export type ProcessIdEvent = TypedEvent<[string], ProcessIdEventObject>;
export type ProcessIdEventFilter = TypedEventFilter<ProcessIdEvent>;
export interface IMailbox extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMailboxInterface;
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
        defaultHook(overrides?: CallOverrides): Promise<[string]>;
        "defaultHook()"(overrides?: CallOverrides): Promise<[string]>;
        defaultIsm(overrides?: CallOverrides): Promise<[string]>;
        "defaultIsm()"(overrides?: CallOverrides): Promise<[string]>;
        delivered(messageId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        "delivered(bytes32)"(messageId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        "dispatch(uint32,bytes32,bytes,bytes,address)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, body: BytesLike, customHookMetadata: BytesLike, customHook: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "dispatch(uint32,bytes32,bytes,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, body: BytesLike, defaultHookMetadata: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "dispatch(uint32,bytes32,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        latestDispatchedId(overrides?: CallOverrides): Promise<[string]>;
        "latestDispatchedId()"(overrides?: CallOverrides): Promise<[string]>;
        localDomain(overrides?: CallOverrides): Promise<[number]>;
        "localDomain()"(overrides?: CallOverrides): Promise<[number]>;
        process(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "process(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "quoteDispatch(uint32,bytes32,bytes,bytes,address)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, customHookMetadata: BytesLike, customHook: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            fee: BigNumber;
        }>;
        "quoteDispatch(uint32,bytes32,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            fee: BigNumber;
        }>;
        "quoteDispatch(uint32,bytes32,bytes,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, defaultHookMetadata: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            fee: BigNumber;
        }>;
        recipientIsm(recipient: string, overrides?: CallOverrides): Promise<[string] & {
            module: string;
        }>;
        "recipientIsm(address)"(recipient: string, overrides?: CallOverrides): Promise<[string] & {
            module: string;
        }>;
        requiredHook(overrides?: CallOverrides): Promise<[string]>;
        "requiredHook()"(overrides?: CallOverrides): Promise<[string]>;
    };
    defaultHook(overrides?: CallOverrides): Promise<string>;
    "defaultHook()"(overrides?: CallOverrides): Promise<string>;
    defaultIsm(overrides?: CallOverrides): Promise<string>;
    "defaultIsm()"(overrides?: CallOverrides): Promise<string>;
    delivered(messageId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    "delivered(bytes32)"(messageId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    "dispatch(uint32,bytes32,bytes,bytes,address)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, body: BytesLike, customHookMetadata: BytesLike, customHook: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "dispatch(uint32,bytes32,bytes,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, body: BytesLike, defaultHookMetadata: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "dispatch(uint32,bytes32,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    latestDispatchedId(overrides?: CallOverrides): Promise<string>;
    "latestDispatchedId()"(overrides?: CallOverrides): Promise<string>;
    localDomain(overrides?: CallOverrides): Promise<number>;
    "localDomain()"(overrides?: CallOverrides): Promise<number>;
    process(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "process(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "quoteDispatch(uint32,bytes32,bytes,bytes,address)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, customHookMetadata: BytesLike, customHook: string, overrides?: CallOverrides): Promise<BigNumber>;
    "quoteDispatch(uint32,bytes32,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    "quoteDispatch(uint32,bytes32,bytes,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, defaultHookMetadata: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    recipientIsm(recipient: string, overrides?: CallOverrides): Promise<string>;
    "recipientIsm(address)"(recipient: string, overrides?: CallOverrides): Promise<string>;
    requiredHook(overrides?: CallOverrides): Promise<string>;
    "requiredHook()"(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        defaultHook(overrides?: CallOverrides): Promise<string>;
        "defaultHook()"(overrides?: CallOverrides): Promise<string>;
        defaultIsm(overrides?: CallOverrides): Promise<string>;
        "defaultIsm()"(overrides?: CallOverrides): Promise<string>;
        delivered(messageId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        "delivered(bytes32)"(messageId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        "dispatch(uint32,bytes32,bytes,bytes,address)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, body: BytesLike, customHookMetadata: BytesLike, customHook: string, overrides?: CallOverrides): Promise<string>;
        "dispatch(uint32,bytes32,bytes,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, body: BytesLike, defaultHookMetadata: BytesLike, overrides?: CallOverrides): Promise<string>;
        "dispatch(uint32,bytes32,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, overrides?: CallOverrides): Promise<string>;
        latestDispatchedId(overrides?: CallOverrides): Promise<string>;
        "latestDispatchedId()"(overrides?: CallOverrides): Promise<string>;
        localDomain(overrides?: CallOverrides): Promise<number>;
        "localDomain()"(overrides?: CallOverrides): Promise<number>;
        process(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        "process(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        "quoteDispatch(uint32,bytes32,bytes,bytes,address)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, customHookMetadata: BytesLike, customHook: string, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteDispatch(uint32,bytes32,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteDispatch(uint32,bytes32,bytes,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, defaultHookMetadata: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        recipientIsm(recipient: string, overrides?: CallOverrides): Promise<string>;
        "recipientIsm(address)"(recipient: string, overrides?: CallOverrides): Promise<string>;
        requiredHook(overrides?: CallOverrides): Promise<string>;
        "requiredHook()"(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Dispatch(address,uint32,bytes32,bytes)"(sender?: string | null, destination?: BigNumberish | null, recipient?: BytesLike | null, message?: null): DispatchEventFilter;
        Dispatch(sender?: string | null, destination?: BigNumberish | null, recipient?: BytesLike | null, message?: null): DispatchEventFilter;
        "DispatchId(bytes32)"(messageId?: BytesLike | null): DispatchIdEventFilter;
        DispatchId(messageId?: BytesLike | null): DispatchIdEventFilter;
        "Process(uint32,bytes32,address)"(origin?: BigNumberish | null, sender?: BytesLike | null, recipient?: string | null): ProcessEventFilter;
        Process(origin?: BigNumberish | null, sender?: BytesLike | null, recipient?: string | null): ProcessEventFilter;
        "ProcessId(bytes32)"(messageId?: BytesLike | null): ProcessIdEventFilter;
        ProcessId(messageId?: BytesLike | null): ProcessIdEventFilter;
    };
    estimateGas: {
        defaultHook(overrides?: CallOverrides): Promise<BigNumber>;
        "defaultHook()"(overrides?: CallOverrides): Promise<BigNumber>;
        defaultIsm(overrides?: CallOverrides): Promise<BigNumber>;
        "defaultIsm()"(overrides?: CallOverrides): Promise<BigNumber>;
        delivered(messageId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "delivered(bytes32)"(messageId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "dispatch(uint32,bytes32,bytes,bytes,address)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, body: BytesLike, customHookMetadata: BytesLike, customHook: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "dispatch(uint32,bytes32,bytes,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, body: BytesLike, defaultHookMetadata: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "dispatch(uint32,bytes32,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        latestDispatchedId(overrides?: CallOverrides): Promise<BigNumber>;
        "latestDispatchedId()"(overrides?: CallOverrides): Promise<BigNumber>;
        localDomain(overrides?: CallOverrides): Promise<BigNumber>;
        "localDomain()"(overrides?: CallOverrides): Promise<BigNumber>;
        process(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "process(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "quoteDispatch(uint32,bytes32,bytes,bytes,address)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, customHookMetadata: BytesLike, customHook: string, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteDispatch(uint32,bytes32,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteDispatch(uint32,bytes32,bytes,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, defaultHookMetadata: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        recipientIsm(recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        "recipientIsm(address)"(recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        requiredHook(overrides?: CallOverrides): Promise<BigNumber>;
        "requiredHook()"(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        defaultHook(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "defaultHook()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultIsm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "defaultIsm()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delivered(messageId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "delivered(bytes32)"(messageId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "dispatch(uint32,bytes32,bytes,bytes,address)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, body: BytesLike, customHookMetadata: BytesLike, customHook: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "dispatch(uint32,bytes32,bytes,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, body: BytesLike, defaultHookMetadata: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "dispatch(uint32,bytes32,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        latestDispatchedId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "latestDispatchedId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "localDomain()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        process(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "process(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "quoteDispatch(uint32,bytes32,bytes,bytes,address)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, customHookMetadata: BytesLike, customHook: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "quoteDispatch(uint32,bytes32,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "quoteDispatch(uint32,bytes32,bytes,bytes)"(destinationDomain: BigNumberish, recipientAddress: BytesLike, messageBody: BytesLike, defaultHookMetadata: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recipientIsm(recipient: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "recipientIsm(address)"(recipient: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requiredHook(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "requiredHook()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IMailbox.d.ts.map