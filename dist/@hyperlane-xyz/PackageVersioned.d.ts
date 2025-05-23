import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common.js";
export interface PackageVersionedInterface extends utils.Interface {
    functions: {
        "PACKAGE_VERSION()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PACKAGE_VERSION" | "PACKAGE_VERSION()"): FunctionFragment;
    encodeFunctionData(functionFragment: "PACKAGE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "PACKAGE_VERSION()", values?: undefined): string;
    decodeFunctionResult(functionFragment: "PACKAGE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PACKAGE_VERSION()", data: BytesLike): Result;
    events: {};
}
export interface PackageVersioned extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PackageVersionedInterface;
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
    };
    PACKAGE_VERSION(overrides?: CallOverrides): Promise<string>;
    "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<string>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=PackageVersioned.d.ts.map