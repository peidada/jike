import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  name: '', //用户姓名
  jobNumber: '', //用户工号
  uuid: '', //唯一标识
  accountNumber: '',//手机号
  commonFlag: false,//Header+Aside控制
  userMenuList: [], //用户路由表
  avatar: '', //用户头像
  userRole: '',
}

const mutations = {

}

const actions = {

}

export default new Vuex.Store({
  state, mutations, actions
})
