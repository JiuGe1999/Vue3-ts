export interface ModuleState {
  userInfo: {
    userId: number;
    userCode: string;
    userNick: string;
  };
}

export default {
  namespaced: true,
  state: () => ({
    userInfo: {
      userId: 1,
      userCode: '111',
      userNick: '222',
    },
  }),
  mutations: {
    setUser(state: ModuleState, code: string) {
      state.userInfo.userCode = code;
    },
  },
  getters: {
    getUser(state: ModuleState) {
      return state.userInfo;
    },
  },
  actions: {},
};
