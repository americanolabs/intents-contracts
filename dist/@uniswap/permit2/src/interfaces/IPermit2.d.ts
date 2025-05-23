import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common.js";
export declare namespace IAllowanceTransfer {
    type TokenSpenderPairStruct = {
        token: string;
        spender: string;
    };
    type TokenSpenderPairStructOutput = [string, string] & {
        token: string;
        spender: string;
    };
    type PermitDetailsStruct = {
        token: string;
        amount: BigNumberish;
        expiration: BigNumberish;
        nonce: BigNumberish;
    };
    type PermitDetailsStructOutput = [
        string,
        BigNumber,
        number,
        number
    ] & {
        token: string;
        amount: BigNumber;
        expiration: number;
        nonce: number;
    };
    type PermitBatchStruct = {
        details: IAllowanceTransfer.PermitDetailsStruct[];
        spender: string;
        sigDeadline: BigNumberish;
    };
    type PermitBatchStructOutput = [
        IAllowanceTransfer.PermitDetailsStructOutput[],
        string,
        BigNumber
    ] & {
        details: IAllowanceTransfer.PermitDetailsStructOutput[];
        spender: string;
        sigDeadline: BigNumber;
    };
    type PermitSingleStruct = {
        details: IAllowanceTransfer.PermitDetailsStruct;
        spender: string;
        sigDeadline: BigNumberish;
    };
    type PermitSingleStructOutput = [
        IAllowanceTransfer.PermitDetailsStructOutput,
        string,
        BigNumber
    ] & {
        details: IAllowanceTransfer.PermitDetailsStructOutput;
        spender: string;
        sigDeadline: BigNumber;
    };
    type AllowanceTransferDetailsStruct = {
        from: string;
        to: string;
        amount: BigNumberish;
        token: string;
    };
    type AllowanceTransferDetailsStructOutput = [
        string,
        string,
        BigNumber,
        string
    ] & {
        from: string;
        to: string;
        amount: BigNumber;
        token: string;
    };
}
export declare namespace ISignatureTransfer {
    type TokenPermissionsStruct = {
        token: string;
        amount: BigNumberish;
    };
    type TokenPermissionsStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
    type PermitTransferFromStruct = {
        permitted: ISignatureTransfer.TokenPermissionsStruct;
        nonce: BigNumberish;
        deadline: BigNumberish;
    };
    type PermitTransferFromStructOutput = [
        ISignatureTransfer.TokenPermissionsStructOutput,
        BigNumber,
        BigNumber
    ] & {
        permitted: ISignatureTransfer.TokenPermissionsStructOutput;
        nonce: BigNumber;
        deadline: BigNumber;
    };
    type SignatureTransferDetailsStruct = {
        to: string;
        requestedAmount: BigNumberish;
    };
    type SignatureTransferDetailsStructOutput = [string, BigNumber] & {
        to: string;
        requestedAmount: BigNumber;
    };
    type PermitBatchTransferFromStruct = {
        permitted: ISignatureTransfer.TokenPermissionsStruct[];
        nonce: BigNumberish;
        deadline: BigNumberish;
    };
    type PermitBatchTransferFromStructOutput = [
        ISignatureTransfer.TokenPermissionsStructOutput[],
        BigNumber,
        BigNumber
    ] & {
        permitted: ISignatureTransfer.TokenPermissionsStructOutput[];
        nonce: BigNumber;
        deadline: BigNumber;
    };
}
export interface IPermit2Interface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "allowance(address,address,address)": FunctionFragment;
        "approve(address,address,uint160,uint48)": FunctionFragment;
        "invalidateNonces(address,address,uint48)": FunctionFragment;
        "invalidateUnorderedNonces(uint256,uint256)": FunctionFragment;
        "lockdown((address,address)[])": FunctionFragment;
        "nonceBitmap(address,uint256)": FunctionFragment;
        "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)": FunctionFragment;
        "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)": FunctionFragment;
        "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)": FunctionFragment;
        "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)": FunctionFragment;
        "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)": FunctionFragment;
        "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)": FunctionFragment;
        "transferFrom((address,address,uint160,address)[])": FunctionFragment;
        "transferFrom(address,address,uint160,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR" | "DOMAIN_SEPARATOR()" | "allowance" | "allowance(address,address,address)" | "approve" | "approve(address,address,uint160,uint48)" | "invalidateNonces" | "invalidateNonces(address,address,uint48)" | "invalidateUnorderedNonces" | "invalidateUnorderedNonces(uint256,uint256)" | "lockdown" | "lockdown((address,address)[])" | "nonceBitmap" | "nonceBitmap(address,uint256)" | "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)" | "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)" | "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)" | "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)" | "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)" | "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)" | "transferFrom((address,address,uint160,address)[])" | "transferFrom(address,address,uint160,address)"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR()", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "allowance(address,address,address)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approve(address,address,uint160,uint48)", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "invalidateNonces", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "invalidateNonces(address,address,uint48)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "invalidateUnorderedNonces", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "invalidateUnorderedNonces(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockdown", values: [IAllowanceTransfer.TokenSpenderPairStruct[]]): string;
    encodeFunctionData(functionFragment: "lockdown((address,address)[])", values: [IAllowanceTransfer.TokenSpenderPairStruct[]]): string;
    encodeFunctionData(functionFragment: "nonceBitmap", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "nonceBitmap(address,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)", values: [string, IAllowanceTransfer.PermitBatchStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)", values: [string, IAllowanceTransfer.PermitSingleStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)", values: [
        ISignatureTransfer.PermitTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct,
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)", values: [
        ISignatureTransfer.PermitBatchTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct[],
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)", values: [
        ISignatureTransfer.PermitTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct,
        string,
        BytesLike,
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)", values: [
        ISignatureTransfer.PermitBatchTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct[],
        string,
        BytesLike,
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "transferFrom((address,address,uint160,address)[])", values: [IAllowanceTransfer.AllowanceTransferDetailsStruct[]]): string;
    encodeFunctionData(functionFragment: "transferFrom(address,address,uint160,address)", values: [string, string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve(address,address,uint160,uint48)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invalidateNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invalidateNonces(address,address,uint48)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invalidateUnorderedNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invalidateUnorderedNonces(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockdown((address,address)[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonceBitmap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonceBitmap(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom((address,address,uint160,address)[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom(address,address,uint160,address)", data: BytesLike): Result;
    events: {
        "Approval(address,address,address,uint160,uint48)": EventFragment;
        "Lockdown(address,address,address)": EventFragment;
        "NonceInvalidation(address,address,address,uint48,uint48)": EventFragment;
        "Permit(address,address,address,uint160,uint48,uint48)": EventFragment;
        "UnorderedNonceInvalidation(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval(address,address,address,uint160,uint48)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Lockdown"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Lockdown(address,address,address)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NonceInvalidation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NonceInvalidation(address,address,address,uint48,uint48)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Permit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Permit(address,address,address,uint160,uint48,uint48)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnorderedNonceInvalidation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnorderedNonceInvalidation(address,uint256,uint256)"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    token: string;
    spender: string;
    amount: BigNumber;
    expiration: number;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface LockdownEventObject {
    owner: string;
    token: string;
    spender: string;
}
export type LockdownEvent = TypedEvent<[
    string,
    string,
    string
], LockdownEventObject>;
export type LockdownEventFilter = TypedEventFilter<LockdownEvent>;
export interface NonceInvalidationEventObject {
    owner: string;
    token: string;
    spender: string;
    newNonce: number;
    oldNonce: number;
}
export type NonceInvalidationEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    number
], NonceInvalidationEventObject>;
export type NonceInvalidationEventFilter = TypedEventFilter<NonceInvalidationEvent>;
export interface PermitEventObject {
    owner: string;
    token: string;
    spender: string;
    amount: BigNumber;
    expiration: number;
    nonce: number;
}
export type PermitEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number,
    number
], PermitEventObject>;
export type PermitEventFilter = TypedEventFilter<PermitEvent>;
export interface UnorderedNonceInvalidationEventObject {
    owner: string;
    word: BigNumber;
    mask: BigNumber;
}
export type UnorderedNonceInvalidationEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], UnorderedNonceInvalidationEventObject>;
export type UnorderedNonceInvalidationEventFilter = TypedEventFilter<UnorderedNonceInvalidationEvent>;
export interface IPermit2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPermit2Interface;
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
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<[string]>;
        allowance(user: string, token: string, spender: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number
        ] & {
            amount: BigNumber;
            expiration: number;
            nonce: number;
        }>;
        "allowance(address,address,address)"(user: string, token: string, spender: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number
        ] & {
            amount: BigNumber;
            expiration: number;
            nonce: number;
        }>;
        approve(token: string, spender: string, amount: BigNumberish, expiration: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "approve(address,address,uint160,uint48)"(token: string, spender: string, amount: BigNumberish, expiration: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        invalidateNonces(token: string, spender: string, newNonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "invalidateNonces(address,address,uint48)"(token: string, spender: string, newNonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        invalidateUnorderedNonces(wordPos: BigNumberish, mask: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "invalidateUnorderedNonces(uint256,uint256)"(wordPos: BigNumberish, mask: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "lockdown((address,address)[])"(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        nonceBitmap(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "nonceBitmap(address,uint256)"(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)"(owner: string, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(owner: string, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "transferFrom((address,address,uint160,address)[])"(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "transferFrom(address,address,uint160,address)"(from: string, to: string, amount: BigNumberish, token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<string>;
    allowance(user: string, token: string, spender: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        number
    ] & {
        amount: BigNumber;
        expiration: number;
        nonce: number;
    }>;
    "allowance(address,address,address)"(user: string, token: string, spender: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        number
    ] & {
        amount: BigNumber;
        expiration: number;
        nonce: number;
    }>;
    approve(token: string, spender: string, amount: BigNumberish, expiration: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "approve(address,address,uint160,uint48)"(token: string, spender: string, amount: BigNumberish, expiration: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    invalidateNonces(token: string, spender: string, newNonce: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "invalidateNonces(address,address,uint48)"(token: string, spender: string, newNonce: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    invalidateUnorderedNonces(wordPos: BigNumberish, mask: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "invalidateUnorderedNonces(uint256,uint256)"(wordPos: BigNumberish, mask: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "lockdown((address,address)[])"(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    nonceBitmap(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "nonceBitmap(address,uint256)"(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)"(owner: string, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(owner: string, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: string, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: string, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "transferFrom((address,address,uint160,address)[])"(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "transferFrom(address,address,uint160,address)"(from: string, to: string, amount: BigNumberish, token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<string>;
        allowance(user: string, token: string, spender: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number
        ] & {
            amount: BigNumber;
            expiration: number;
            nonce: number;
        }>;
        "allowance(address,address,address)"(user: string, token: string, spender: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number
        ] & {
            amount: BigNumber;
            expiration: number;
            nonce: number;
        }>;
        approve(token: string, spender: string, amount: BigNumberish, expiration: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "approve(address,address,uint160,uint48)"(token: string, spender: string, amount: BigNumberish, expiration: BigNumberish, overrides?: CallOverrides): Promise<void>;
        invalidateNonces(token: string, spender: string, newNonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "invalidateNonces(address,address,uint48)"(token: string, spender: string, newNonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        invalidateUnorderedNonces(wordPos: BigNumberish, mask: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "invalidateUnorderedNonces(uint256,uint256)"(wordPos: BigNumberish, mask: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: CallOverrides): Promise<void>;
        "lockdown((address,address)[])"(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: CallOverrides): Promise<void>;
        nonceBitmap(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "nonceBitmap(address,uint256)"(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)"(owner: string, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(owner: string, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: string, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: string, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        "transferFrom((address,address,uint160,address)[])"(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: CallOverrides): Promise<void>;
        "transferFrom(address,address,uint160,address)"(from: string, to: string, amount: BigNumberish, token: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,address,uint160,uint48)"(owner?: string | null, token?: string | null, spender?: string | null, amount?: null, expiration?: null): ApprovalEventFilter;
        Approval(owner?: string | null, token?: string | null, spender?: string | null, amount?: null, expiration?: null): ApprovalEventFilter;
        "Lockdown(address,address,address)"(owner?: string | null, token?: null, spender?: null): LockdownEventFilter;
        Lockdown(owner?: string | null, token?: null, spender?: null): LockdownEventFilter;
        "NonceInvalidation(address,address,address,uint48,uint48)"(owner?: string | null, token?: string | null, spender?: string | null, newNonce?: null, oldNonce?: null): NonceInvalidationEventFilter;
        NonceInvalidation(owner?: string | null, token?: string | null, spender?: string | null, newNonce?: null, oldNonce?: null): NonceInvalidationEventFilter;
        "Permit(address,address,address,uint160,uint48,uint48)"(owner?: string | null, token?: string | null, spender?: string | null, amount?: null, expiration?: null, nonce?: null): PermitEventFilter;
        Permit(owner?: string | null, token?: string | null, spender?: string | null, amount?: null, expiration?: null, nonce?: null): PermitEventFilter;
        "UnorderedNonceInvalidation(address,uint256,uint256)"(owner?: string | null, word?: null, mask?: null): UnorderedNonceInvalidationEventFilter;
        UnorderedNonceInvalidation(owner?: string | null, word?: null, mask?: null): UnorderedNonceInvalidationEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(user: string, token: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        "allowance(address,address,address)"(user: string, token: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(token: string, spender: string, amount: BigNumberish, expiration: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "approve(address,address,uint160,uint48)"(token: string, spender: string, amount: BigNumberish, expiration: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        invalidateNonces(token: string, spender: string, newNonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "invalidateNonces(address,address,uint48)"(token: string, spender: string, newNonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        invalidateUnorderedNonces(wordPos: BigNumberish, mask: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "invalidateUnorderedNonces(uint256,uint256)"(wordPos: BigNumberish, mask: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "lockdown((address,address)[])"(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        nonceBitmap(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "nonceBitmap(address,uint256)"(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)"(owner: string, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(owner: string, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "transferFrom((address,address,uint160,address)[])"(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "transferFrom(address,address,uint160,address)"(from: string, to: string, amount: BigNumberish, token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(user: string, token: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "allowance(address,address,address)"(user: string, token: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(token: string, spender: string, amount: BigNumberish, expiration: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "approve(address,address,uint160,uint48)"(token: string, spender: string, amount: BigNumberish, expiration: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        invalidateNonces(token: string, spender: string, newNonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "invalidateNonces(address,address,uint48)"(token: string, spender: string, newNonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        invalidateUnorderedNonces(wordPos: BigNumberish, mask: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "invalidateUnorderedNonces(uint256,uint256)"(wordPos: BigNumberish, mask: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "lockdown((address,address)[])"(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        nonceBitmap(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "nonceBitmap(address,uint256)"(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)"(owner: string, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(owner: string, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "transferFrom((address,address,uint160,address)[])"(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "transferFrom(address,address,uint160,address)"(from: string, to: string, amount: BigNumberish, token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IPermit2.d.ts.map