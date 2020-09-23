import { createStore, createTypedHooks } from 'easy-peasy';
import { userStore, UserStore } from './UserStore';

export interface StoreModel {
  user: UserStore;
}

const typedStore: StoreModel = {
  user: userStore,
};

const { useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<StoreModel>();

export { useStoreActions, useStoreDispatch, useStoreState };

const store = createStore(typedStore);

export default store;
