/*
 * @Descripttion: 
 * @Author: Thea
 * @Date: 2020-09-02 09:48:49
 * @LastEditTime: 2020-09-02 15:45:06
 */
import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { IndexData } from '@/types/views/index.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter index.author
    
  // Action
  @Action GET_DATA_ASYN

  // data
  data: IndexData = {
    pageName: 'index'
  }

  created() {
    this.GET_DATA_ASYN()
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
