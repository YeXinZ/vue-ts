/*
 * @Descripttion:
 * @Author: Thea
 * @Date: 2020-09-02 09:48:45
 * @LastEditTime: 2020-09-02 09:56:43
 */
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { LoginData } from "@/types/views/login.interface";
import { Test } from "@/components"; // 组件

@Component({
  components: {
    Test
  }
})
export default class About extends Vue {
  // Getter
  // @Getter login.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: LoginData = {
    pageName: "login"
  };

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
}
