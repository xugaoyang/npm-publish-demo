import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(ElementUI)
const comps = [HelloWorld]

const install = function (Vue) {
  if (install.installed) return
  comps.forEach((comp) => {
    Vue.component(comp.name, comp)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue) // window中有Vue时去install()
}
export default {
  install,
}
