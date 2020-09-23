import { action, Action } from 'easy-peasy';

export interface User {
  id: string;
  email: string;
}

export interface FCMTokenUpdatePayload {
  token: string;
}

export interface UserStore {
  data: User;
  update: Action<UserStore, User>;
  reset: Action<UserStore>;
}

export const userStore: UserStore = {
  data: {
    id: '',
    email: '',
  },
  update: action((state, payload) => {
    state.data = payload;
  }),
  reset: action((state) => {
    state.data = {
      id: '',
      email: '',
    };
  }),
};
