import { __decorate } from "tslib";
/*
 * @Descripttion:
 * @Author: Thea
 * @Date: 2020-09-02 09:48:49
 * @LastEditTime: 2020-09-02 15:45:06
 */
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
// import {  } from "@/components" // 组件
let About = class About extends Vue {
    constructor() {
        // Getter
        // @Getter index.author
        super(...arguments);
        // data
        this.data = {
            pageName: 'index'
        };
    }
    created() {
        this.GET_DATA_ASYN();
    }
    activated() {
        //
    }
    mounted() {
        //
    }
    // 初始化函数
    init() {
        //
    }
};
__decorate([
    Action
], About.prototype, "GET_DATA_ASYN", void 0);
About = __decorate([
    Component({})
], About);
export default About;
//# sourceMappingURL=index.js.map