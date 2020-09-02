/*
 * @Descripttion:
 * @Author: Thea
 * @Date: 2020-09-01 11:23:39
 * @LastEditTime: 2020-09-01 17:33:38
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "@/assets/scss/common.scss";
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map