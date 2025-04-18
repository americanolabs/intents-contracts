import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common.js";
export interface StandardHookMetadataInterface extends utils.Interface {
    functions: {
        "VARIANT()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "VARIANT" | "VARIANT()"): FunctionFragment;
    encodeFunctionData(functionFragment: "VARIANT", values?: undefined): string;
    encodeFunctionData(functionFragment: "VARIANT()", values?: undefined): string;
    decodeFunctionResult(functionFragment: "VARIANT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VARIANT()", data: BytesLike): Result;
    events: {};
}
export interface StandardHookMetadata extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StandardHookMetadataInterface;
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
        VARIANT(overrides?: CallOverrides): Promise<[number]>;
        "VARIANT()"(overrides?: CallOverrides): Promise<[number]>;
    };
    VARIANT(overrides?: CallOverrides): Promise<number>;
    "VARIANT()"(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        VARIANT(overrides?: CallOverrides): Promise<number>;
        "VARIANT()"(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        VARIANT(overrides?: CallOverrides): Promise<BigNumber>;
        "VARIANT()"(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        VARIANT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "VARIANT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=StandardHookMetadata.d.ts.map