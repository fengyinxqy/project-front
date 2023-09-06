import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import service from './config/axios'
import './utils/element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import Cookie from 'js-cookie'

Vue.config.productionTip = false
Vue.prototype.$axios = service

Vue.directive('permission', {
  inserted (el, binding, vnode) {
    const token = Cookie.get('token')
    const hasPermission = checkPermission(token, binding.value)

    if (!hasPermission) {
      el.style.display = 'none'
    }

    // 如果当前元素已经隐藏，就不需要再进行后续的逻辑处理
    if (el.style.display === 'none') return

    // 获取指令绑定的参数和值
    const { arg, value } = binding

    // 获取当前组件实例的状态值
    const state = vnode.context.$data[arg]

    // 如果当前状态值与指令参数不匹配，则隐藏当前元素
    if (state !== value) {
      el.style.display = 'none'
    }
  }
})

// 验证token对应的权限
function checkPermission (token, permission) {
  // 这里假设有个权限列表，仅供示例
  const permissionList = ['edit', 'delete', 'create', 'isLogin']

  // 判断传入的权限是否在权限列表中
  return permissionList.includes(permission)
}

new Vue({
  router,
  store,
  buttonType: 'join',
  render: h => h(App)
}).$mount('#app')
