import Vue from 'vue'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Button)

const requireComponents = require.context('./', true, /\.vue$/)

const install = function (Vue) {
  if (install.installed) return
  requireComponents.keys().forEach((fileName) => {
    const config = requireComponents(fileName) // 当前组件
    const componentName = config.default.name // 获取组件名，即vue文件中的name
    Vue.component(componentName, config.default) // 注册组件
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue) // window中有Vue时去install()
}
export default {
  install,
}
