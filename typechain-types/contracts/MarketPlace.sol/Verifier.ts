/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface VerifierInterface extends utils.Interface {
  functions: {
    "issueVerifying(uint256,address)": FunctionFragment;
    "verifyCertificate(uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "issueVerifying" | "verifyCertificate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "issueVerifying",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyCertificate",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "issueVerifying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyCertificate",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Verifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VerifierInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    issueVerifying(
      artId: PromiseOrValue<BigNumberish>,
      ownerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifyCertificate(
      idNo: PromiseOrValue<BigNumberish>,
      ownerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  issueVerifying(
    artId: PromiseOrValue<BigNumberish>,
    ownerAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifyCertificate(
    idNo: PromiseOrValue<BigNumberish>,
    ownerAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    issueVerifying(
      artId: PromiseOrValue<BigNumberish>,
      ownerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyCertificate(
      idNo: PromiseOrValue<BigNumberish>,
      ownerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    issueVerifying(
      artId: PromiseOrValue<BigNumberish>,
      ownerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifyCertificate(
      idNo: PromiseOrValue<BigNumberish>,
      ownerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    issueVerifying(
      artId: PromiseOrValue<BigNumberish>,
      ownerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifyCertificate(
      idNo: PromiseOrValue<BigNumberish>,
      ownerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
