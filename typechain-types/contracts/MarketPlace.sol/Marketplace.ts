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

export declare namespace Marketplace {
  export type ArtStruct = {
    name: PromiseOrValue<string>;
    originalOwner: PromiseOrValue<string>;
    genre: PromiseOrValue<string>;
    description: PromiseOrValue<string>;
    isBeingSold: PromiseOrValue<boolean>;
    currentSellers: PromiseOrValue<string>[];
    prices: PromiseOrValue<BigNumberish>[];
  };

  export type ArtStructOutput = [
    string,
    string,
    string,
    string,
    boolean,
    string[],
    BigNumber[]
  ] & {
    name: string;
    originalOwner: string;
    genre: string;
    description: string;
    isBeingSold: boolean;
    currentSellers: string[];
    prices: BigNumber[];
  };
}

export interface MarketplaceInterface extends utils.Interface {
  functions: {
    "addArtToSell(uint256,uint256)": FunctionFragment;
    "addNewArt(string,string,string,uint256,uint256,bool)": FunctionFragment;
    "addressSearchArray(address[],address)": FunctionFragment;
    "buyArt(uint256,address,uint256)": FunctionFragment;
    "checkStatus(uint256,address)": FunctionFragment;
    "deliverAck(uint256,address)": FunctionFragment;
    "getArts()": FunctionFragment;
    "getArtsByGenre(string)": FunctionFragment;
    "getArtsByName(string)": FunctionFragment;
    "getArtsByPriceRange(uint256,uint256)": FunctionFragment;
    "isAddressInArray(address[],address)": FunctionFragment;
    "registerBuyer()": FunctionFragment;
    "registerSupplier()": FunctionFragment;
    "updateArtQuantity(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addArtToSell"
      | "addNewArt"
      | "addressSearchArray"
      | "buyArt"
      | "checkStatus"
      | "deliverAck"
      | "getArts"
      | "getArtsByGenre"
      | "getArtsByName"
      | "getArtsByPriceRange"
      | "isAddressInArray"
      | "registerBuyer"
      | "registerSupplier"
      | "updateArtQuantity"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addArtToSell",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addNewArt",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addressSearchArray",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "buyArt",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "checkStatus",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "deliverAck",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "getArts", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getArtsByGenre",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getArtsByName",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getArtsByPriceRange",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isAddressInArray",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerBuyer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerSupplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateArtQuantity",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addArtToSell",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addNewArt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addressSearchArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyArt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deliverAck", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getArts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getArtsByGenre",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArtsByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArtsByPriceRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAddressInArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerBuyer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerSupplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateArtQuantity",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Marketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceInterface;

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
    addArtToSell(
      artID: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addNewArt(
      _name: PromiseOrValue<string>,
      _genre: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      isBeingSold: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addressSearchArray(
      addresses: PromiseOrValue<string>[],
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    buyArt(
      artID: PromiseOrValue<BigNumberish>,
      _seller: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checkStatus(
      artID: PromiseOrValue<BigNumberish>,
      seller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    deliverAck(
      artID: PromiseOrValue<BigNumberish>,
      _seller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getArts(
      overrides?: CallOverrides
    ): Promise<[Marketplace.ArtStructOutput[]]>;

    getArtsByGenre(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Marketplace.ArtStructOutput[]]>;

    getArtsByName(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Marketplace.ArtStructOutput[]]>;

    getArtsByPriceRange(
      minrange: PromiseOrValue<BigNumberish>,
      maxrange: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Marketplace.ArtStructOutput[]]>;

    isAddressInArray(
      addresses: PromiseOrValue<string>[],
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    registerBuyer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerSupplier(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateArtQuantity(
      artID: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addArtToSell(
    artID: PromiseOrValue<BigNumberish>,
    price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addNewArt(
    _name: PromiseOrValue<string>,
    _genre: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _quantity: PromiseOrValue<BigNumberish>,
    isBeingSold: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addressSearchArray(
    addresses: PromiseOrValue<string>[],
    target: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  buyArt(
    artID: PromiseOrValue<BigNumberish>,
    _seller: PromiseOrValue<string>,
    price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checkStatus(
    artID: PromiseOrValue<BigNumberish>,
    seller: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  deliverAck(
    artID: PromiseOrValue<BigNumberish>,
    _seller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getArts(overrides?: CallOverrides): Promise<Marketplace.ArtStructOutput[]>;

  getArtsByGenre(
    name: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Marketplace.ArtStructOutput[]>;

  getArtsByName(
    name: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Marketplace.ArtStructOutput[]>;

  getArtsByPriceRange(
    minrange: PromiseOrValue<BigNumberish>,
    maxrange: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Marketplace.ArtStructOutput[]>;

  isAddressInArray(
    addresses: PromiseOrValue<string>[],
    target: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  registerBuyer(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerSupplier(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateArtQuantity(
    artID: PromiseOrValue<BigNumberish>,
    quantity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addArtToSell(
      artID: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addNewArt(
      _name: PromiseOrValue<string>,
      _genre: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      isBeingSold: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    addressSearchArray(
      addresses: PromiseOrValue<string>[],
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buyArt(
      artID: PromiseOrValue<BigNumberish>,
      _seller: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    checkStatus(
      artID: PromiseOrValue<BigNumberish>,
      seller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    deliverAck(
      artID: PromiseOrValue<BigNumberish>,
      _seller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getArts(overrides?: CallOverrides): Promise<Marketplace.ArtStructOutput[]>;

    getArtsByGenre(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Marketplace.ArtStructOutput[]>;

    getArtsByName(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Marketplace.ArtStructOutput[]>;

    getArtsByPriceRange(
      minrange: PromiseOrValue<BigNumberish>,
      maxrange: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Marketplace.ArtStructOutput[]>;

    isAddressInArray(
      addresses: PromiseOrValue<string>[],
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerBuyer(overrides?: CallOverrides): Promise<void>;

    registerSupplier(overrides?: CallOverrides): Promise<void>;

    updateArtQuantity(
      artID: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addArtToSell(
      artID: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addNewArt(
      _name: PromiseOrValue<string>,
      _genre: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      isBeingSold: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addressSearchArray(
      addresses: PromiseOrValue<string>[],
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buyArt(
      artID: PromiseOrValue<BigNumberish>,
      _seller: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checkStatus(
      artID: PromiseOrValue<BigNumberish>,
      seller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deliverAck(
      artID: PromiseOrValue<BigNumberish>,
      _seller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getArts(overrides?: CallOverrides): Promise<BigNumber>;

    getArtsByGenre(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getArtsByName(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getArtsByPriceRange(
      minrange: PromiseOrValue<BigNumberish>,
      maxrange: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAddressInArray(
      addresses: PromiseOrValue<string>[],
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerBuyer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerSupplier(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateArtQuantity(
      artID: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addArtToSell(
      artID: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addNewArt(
      _name: PromiseOrValue<string>,
      _genre: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      isBeingSold: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addressSearchArray(
      addresses: PromiseOrValue<string>[],
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyArt(
      artID: PromiseOrValue<BigNumberish>,
      _seller: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checkStatus(
      artID: PromiseOrValue<BigNumberish>,
      seller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deliverAck(
      artID: PromiseOrValue<BigNumberish>,
      _seller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getArts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getArtsByGenre(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getArtsByName(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getArtsByPriceRange(
      minrange: PromiseOrValue<BigNumberish>,
      maxrange: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAddressInArray(
      addresses: PromiseOrValue<string>[],
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerBuyer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerSupplier(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateArtQuantity(
      artID: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
