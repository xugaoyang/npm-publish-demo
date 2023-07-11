
import CustomButton from './CustomButton'


const comps = [CustomButton]

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
  install
}