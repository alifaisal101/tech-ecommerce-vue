import appConfig from '@/config';
import { jsonReq } from '@/util/constants/requests';

export default {
  state: {
    id: undefined,
    token: { value: undefined, expDate: undefined },
    isCompany: undefined,
  },
  getters: {
    isLoggedIn(state) {
      return state.id || false;
    },
  },

  mutations: {
    logout(state) {
      state.token = undefined;
    },
  },
  actions: {
    async login(context, payload) {
      const body = {
        email: payload.email,
        password: payload.password,
      };

      try {
        const res = await fetch(appConfig.api, { ...jsonReq, body });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
