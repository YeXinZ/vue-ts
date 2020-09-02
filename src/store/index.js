/*
 * @Descripttion:
 * @Author: Thea
 * @Date: 2020-09-01 11:23:39
 * @LastEditTime: 2020-09-01 17:55:28
 */
import Vue from 'vue';
import Vuex from 'vuex';
import Login from './module/login';
import Index from './module/index';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        Login,
        Index
    },
});
//# sourceMappingURL=index.js.map