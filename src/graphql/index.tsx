import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export enum Address_Type {
  Shipping = 'SHIPPING',
  Invoicing = 'INVOICING'
}

export type AuthPayload = {
  __typename?: 'AuthPayload';
  user: User;
  token: Scalars['String'];
  tokenExpire: Scalars['DateTime'];
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['Int'];
  netTotal: Scalars['Float'];
  grossProductTotal: Scalars['Float'];
  discountNetAmount: Scalars['Float'];
  discountGrossAmount: Scalars['Float'];
  netSubTotal: Scalars['Float'];
  taxAmount: Scalars['Float'];
  grossSubTotal: Scalars['Float'];
  shippingNetAmount: Scalars['Float'];
  shippingGrossAmount: Scalars['Float'];
  attachedStore?: Maybe<Store>;
  grossTotal: Scalars['Float'];
  deviceId: Scalars['String'];
  cupon?: Maybe<Coupon>;
  user?: Maybe<User>;
  productVariations?: Maybe<Array<RecordedProductVariationState>>;
  shippingMethod?: Maybe<ShippingMethod>;
  paymentMethod?: Maybe<PaymentMethod>;
  shippingAddress?: Maybe<UserAddress>;
  paymentAddress?: Maybe<UserAddress>;
  notice?: Maybe<Scalars['String']>;
  status?: Maybe<Cart_Status>;
  orderDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export enum Cart_Status {
  Incart = 'INCART',
  Ordered = 'ORDERED',
  OrderedSynced = 'ORDERED_SYNCED'
}

export type Country = {
  __typename?: 'Country';
  id: Scalars['Int'];
  name: Scalars['String'];
  code: Scalars['String'];
};

export type Coupon = {
  __typename?: 'Coupon';
  id: Scalars['Int'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isReusable: Scalars['Boolean'];
  productDiscountPercent?: Maybe<Scalars['Int']>;
  finalDiscountPercent?: Maybe<Scalars['Int']>;
  withSipping?: Maybe<Scalars['Boolean']>;
};


export enum Loyalty_Card_Type {
  Normal = 'NORMAL',
  Silver = 'SILVER',
  Gold = 'GOLD',
  Custom_15 = 'CUSTOM_15',
  GiftCard = 'GIFT_CARD'
}

export type MePayload = {
  __typename?: 'MePayload';
  user?: Maybe<User>;
};

export enum Mobile_Os {
  Ios = 'IOS',
  Android = 'ANDROID'
}

export type Mutation = {
  __typename?: 'Mutation';
  signUp: AuthPayload;
  logIn: AuthPayload;
  authWithSocial: AuthPayload;
  updateUserData: Result;
  createUserAddress: Result;
  saveUserFCMToken: UserFcmToken;
  addToFavourite: Result;
  deleteFromFavorite: Result;
  addProductToCart: Result;
  setProductQuantity: Result;
  setShippingMethod: Result;
  setShippingAddress: Result;
  setAttachedStore: Result;
  updateCartNotice: Result;
  takeCart: Result;
  validateCoupon: Result;
  createIssue: Result;
  startTransport: Result;
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLogInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAuthWithSocialArgs = {
  token?: Maybe<Scalars['String']>;
  socialType?: Maybe<Social_Type>;
};


export type MutationUpdateUserDataArgs = {
  data?: Maybe<UpdateUserDataInput>;
};


export type MutationCreateUserAddressArgs = {
  data?: Maybe<UserAddressInput>;
};


export type MutationSaveUserFcmTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationAddToFavouriteArgs = {
  productId: Scalars['Int'];
};


export type MutationDeleteFromFavoriteArgs = {
  productId: Scalars['Int'];
};


export type MutationAddProductToCartArgs = {
  variationId: Scalars['Int'];
  quantity: Scalars['Int'];
};


export type MutationSetProductQuantityArgs = {
  recordedVariationId: Scalars['Int'];
  quantity: Scalars['Int'];
};


export type MutationSetShippingMethodArgs = {
  methodId: Scalars['Int'];
};


export type MutationSetShippingAddressArgs = {
  userAddressId: Scalars['Int'];
};


export type MutationSetAttachedStoreArgs = {
  storeId: Scalars['Int'];
};


export type MutationUpdateCartNoticeArgs = {
  notice: Scalars['String'];
};


export type MutationValidateCouponArgs = {
  code: Scalars['String'];
};


export type MutationCreateIssueArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  message: Scalars['String'];
};


export type MutationStartTransportArgs = {
  name: Scalars['String'];
  key: Scalars['String'];
};

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['Int'];
  title: Scalars['String'];
  message: Scalars['String'];
  publised: Scalars['Boolean'];
  visibleFrom: Scalars['DateTime'];
  type: Notification_Type;
  user?: Maybe<User>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export enum Notification_Type {
  OneUserOnly = 'ONE_USER_ONLY',
  AllUser = 'ALL_USER'
}

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Int'];
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  longName?: Maybe<Scalars['String']>;
  descrtiption?: Maybe<Scalars['String']>;
  productVariations: Array<ProductVariation>;
  categories?: Maybe<Array<ProductCategory>>;
  status: Status;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  id: Scalars['ID'];
  transportId: Scalars['Int'];
  name: Scalars['String'];
  isHomeCategory: Scalars['Boolean'];
  status: Status;
};

export type ProductVariation = {
  __typename?: 'ProductVariation';
  id: Scalars['Int'];
  transportId?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  stock?: Maybe<Array<StoreStock>>;
  price: Array<ProductVariationPrice>;
  isDefaultVariation?: Maybe<Scalars['Boolean']>;
  status: Status;
  product: Product;
  quantityUnit: QuantityUnit;
};

export type ProductVariationPrice = {
  __typename?: 'ProductVariationPrice';
  id: Scalars['Int'];
  isBasePrice?: Maybe<Scalars['Boolean']>;
  fullPrice: Scalars['Float'];
  discountPrice?: Maybe<Scalars['Float']>;
  vat: Vat;
  startAt?: Maybe<Scalars['DateTime']>;
  endAt?: Maybe<Scalars['DateTime']>;
  status: Status;
};

export type QuantityUnit = {
  __typename?: 'QuantityUnit';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<Maybe<User>>>;
  me: MePayload;
  publicSettings?: Maybe<Array<Setting>>;
  publicSettingByKey?: Maybe<Setting>;
  getUserAddress?: Maybe<Array<UserAddress>>;
  getUserActivityTypes: Array<UserActivityType>;
  getChildrenCategories?: Maybe<Array<ProductCategory>>;
  getHomePopularProducts?: Maybe<Array<Product>>;
  getProduct: Product;
  getProductByCategory?: Maybe<Array<Product>>;
  getFavouritedProducts?: Maybe<Array<Product>>;
  searchProduct?: Maybe<Array<Product>>;
  getLatestNotifications?: Maybe<Array<Notification>>;
  getCartItems?: Maybe<Array<RecordedProductVariationState>>;
  getCartDetail: Cart;
  getAvailableShippingMethods: Array<ShippingMethod>;
  getOrders?: Maybe<Array<Cart>>;
  getOrderDetail: Cart;
  getPickUpStores: Array<Store>;
  getStores: Array<Store>;
};


export type QueryPublicSettingByKeyArgs = {
  key: Scalars['String'];
};


export type QueryGetChildrenCategoriesArgs = {
  parentId: Scalars['Int'];
};


export type QueryGetProductArgs = {
  id: Scalars['Int'];
};


export type QueryGetProductByCategoryArgs = {
  categoryId: Scalars['Int'];
};


export type QuerySearchProductArgs = {
  searchValue: Scalars['String'];
};


export type QueryGetOrderDetailArgs = {
  orderId: Scalars['Int'];
};

export type RecordedProductVariationState = {
  __typename?: 'RecordedProductVariationState';
  id: Scalars['Int'];
  fullPrice?: Maybe<Scalars['Float']>;
  discountPrice?: Maybe<Scalars['Float']>;
  taxPercent?: Maybe<Scalars['Boolean']>;
  quantity: Scalars['Int'];
  productVariation: ProductVariation;
  cart: Cart;
};

export type Result = {
  __typename?: 'Result';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type Setting = {
  __typename?: 'Setting';
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  valueType?: Maybe<Scalars['String']>;
  isPublic: Scalars['Boolean'];
};

export enum Shipping_Type {
  Address = 'ADDRESS',
  Store = 'STORE'
}

export type ShippingMethod = {
  __typename?: 'ShippingMethod';
  id: Scalars['Int'];
  name: Scalars['String'];
  amount?: Maybe<Scalars['Float']>;
  amountFrom?: Maybe<Scalars['Float']>;
  vat?: Maybe<Vat>;
  type: Shipping_Type;
  status?: Maybe<Status>;
};

export enum Social_Type {
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE'
}

export enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Deleted = 'DELETED'
}

export type Store = {
  __typename?: 'Store';
  id: Scalars['Int'];
  name: Scalars['String'];
  address: Scalars['String'];
  mapLongitude?: Maybe<Scalars['String']>;
  mapLatitude?: Maybe<Scalars['String']>;
  mapDeltaLongitude?: Maybe<Scalars['String']>;
  mapDeltaLatitude?: Maybe<Scalars['String']>;
  markerLongitude?: Maybe<Scalars['String']>;
  markerLatitude?: Maybe<Scalars['String']>;
  openHourDescription: Scalars['String'];
  pickUpAvailable: Scalars['Boolean'];
};

export type StoreStock = {
  __typename?: 'StoreStock';
  id: Scalars['Int'];
  availableQuantity: Scalars['Int'];
  holdOnQuantity: Scalars['Int'];
  store: Store;
  productVariation: ProductVariation;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newUser: User;
};

export type UpdateUserDataInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['String']>;
  userActivityType?: Maybe<Scalars['Int']>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  socialId?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  userActivityType?: Maybe<UserActivityType>;
  status?: Maybe<Status>;
};

export type UserActivityType = {
  __typename?: 'UserActivityType';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  status: Status;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  id: Scalars['Int'];
  addressType: Address_Type;
  Country?: Maybe<Country>;
  state?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  zip: Scalars['String'];
  street: Scalars['String'];
  streetType: Scalars['String'];
  homeNumber: Scalars['String'];
  addressName: Scalars['String'];
  companyName?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  status: Status;
};

export type UserAddressInput = {
  addressType: Address_Type;
  country: Scalars['Int'];
  city: Scalars['String'];
  zip: Scalars['String'];
  street: Scalars['String'];
  streetType: Scalars['String'];
  homeNumber: Scalars['String'];
  addressName: Scalars['String'];
  companyName?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
};

export type UserFcmToken = {
  __typename?: 'UserFCMToken';
  id: Scalars['Int'];
  token: Scalars['String'];
  user?: Maybe<User>;
};

export type Vat = {
  __typename?: 'Vat';
  id: Scalars['Int'];
  name: Scalars['String'];
  vatCode: Scalars['String'];
  rate: Scalars['Float'];
};

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'email' | 'id'>
);

export type LogInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LogInMutation = (
  { __typename?: 'Mutation' }
  & { logIn: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token' | 'tokenExpire'>
    & { user: (
      { __typename?: 'User' }
      & UserFragmentFragment
    ) }
  ) }
);

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  email
  id
}
    `;
export const LogInDocument = gql`
    mutation logIn($email: String!, $password: String!) {
  logIn(email: $email, password: $password) {
    user {
      ...UserFragment
    }
    token
    tokenExpire
  }
}
    ${UserFragmentFragmentDoc}`;
export type LogInMutationFn = Apollo.MutationFunction<LogInMutation, LogInMutationVariables>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLogInMutation(baseOptions?: Apollo.MutationHookOptions<LogInMutation, LogInMutationVariables>) {
        return Apollo.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument, baseOptions);
      }
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = Apollo.MutationResult<LogInMutation>;
export type LogInMutationOptions = Apollo.BaseMutationOptions<LogInMutation, LogInMutationVariables>;