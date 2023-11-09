import ZwCheckBox from './checkbox/src'
import ZwButton from './button/src'
import ZwInput from './input/src'
import ZwButtonGroup from './button-group'
import ZwCheckboxButton from './checkbox-button'
import ZwCheckboxGroup from './checkbox-group'
// 存放组件的数组
const components = [
    ZwButton,
    ZwCheckBox,
    ZwInput,
    ZwButtonGroup,
    ZwCheckboxButton,
    ZwCheckboxGroup
]

// 定义 install 方法，接收 Vue 作为参数。
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历 components 数组，来进行全局注册
    components.map(component => {
        Vue.component(component.name, component)
    })
}

export default {
    ...components,
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install
}
