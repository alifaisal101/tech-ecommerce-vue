import appConfig from '@/config';
import { jsonPostReq } from '@/util/constants/requests';

export default {
  state: { user: {} },
  getters: {
    isLoggedIn(state) {
      if (state.user?._id && state.user?.token?.value) {
        return true;
      }
      return false;
    },
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },

    unSetUser(state) {
      state.user = {};
    },
  },
  actions: {
    async register(context, payload) {
      const body = {
        isCompany: payload.isCompany,
        fname: payload.fname,
        lname: payload.lname,
        companyName: payload.companyName,
        email: payload.email,
        password: payload.password,
        cPassword: payload.cPassword,
      };

      if (body.isCompany) {
        delete body.fname, body.lname;
      } else {
        delete body.companyName;
      }

      try {
        const res = await fetch(`${appConfig.api}/auth/register`, {
          ...jsonPostReq,
          body: JSON.stringify(body),
        });

        const resBody = await res.json();
        context.commit('setUser', resBody);
      } catch (err) {
        console.log(err);
      }
    },

    async login(context, payload) {
      const body = {
        email: payload.email,
        password: payload.password,
      };

      try {
        const res = await fetch(`${appConfig.api}/auth/login`, {
          ...jsonPostReq,
          body: JSON.stringify(body),
        });
        const resBody = await res.json();
        context.commit('setUser', resBody);
      } catch (err) {
        console.log(err);
      }
    },

    async logout(context) {
      return context.commit('unSetUser');
    },
  },
};
