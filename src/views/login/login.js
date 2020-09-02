import { __decorate } from "tslib";
/*
 * @Descripttion:
 * @Author: Thea
 * @Date: 2020-09-02 09:48:45
 * @LastEditTime: 2020-09-02 09:56:43
 */
import { Component, Vue } from "vue-property-decorator";
import { Test } from "@/components"; // 组件
let About = class About extends Vue {
    constructor() {
        // Getter
        // @Getter login.author
        super(...arguments);
        // Action
        // @Action GET_DATA_ASYN
        // data
        this.data = {
            pageName: "login"
        };
    }
    created() {
        //
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
About = __decorate([
    Component({
        components: {
            Test
        }
    })
], About);
export default About;
//# sourceMappingURL=login.js.map