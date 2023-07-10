import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from './src/HelloWorld.vue'

Vue.use(ElementUI)

const install = function (Vue) {
  Vue.component(HelloWorld.name, HelloWorld)
}

export default {
  install,
}