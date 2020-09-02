import * as IndexApi from '@/api/index';
const state = {
    index: {
        author: undefined
    }
};
// 强制使用getter获取state
const getters = {
    author: (state) => state.index.author
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
    UPDATE_STATE_ASYN({ commit, state: IndexState }, data) {
        commit('UPDATE_STATE', data);
    },
    GET_DATA_ASYN({ commit, state: LoginState }) {
        IndexApi.getData();
    }
};
export default {
    state,
    getters,
    mutations,
    actions
};
//# sourceMappingURL=index.js.map