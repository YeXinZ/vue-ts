import * as LoginApi from '@/api/login';
const state = {
    login: {
        author: undefined
    }
};
// 强制使用getter获取state
const getters = {
    author: (state) => state.login.author
};
// 更改state
const mutations = {
    // 更新state都用该方法
    UPDATE_STATE(state, data) {
        for (const key in data) {
            if (!data.hasOwnProperty(key)) {
                return;
            }
            state[key] = data[key];
        }
    }
};
const actions = {
    UPDATE_STATE_ASYN({ commit, state: LoginState }, data) {
        commit('UPDATE_STATE', data);
    },
    GET_DATA_ASYN({ commit, state: LoginState }) {
        LoginApi.getData();
    }
};
export default {
    state,
    getters,
    mutations,
    actions
};
//# sourceMappingURL=login.js.map