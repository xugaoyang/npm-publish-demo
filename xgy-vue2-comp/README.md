# step

1. 初始化一个 vue 项目`vue create`
2. `pnpm install element-ui`
3. 创建自定义组件：在 Vue 项目中的 src 文件夹中创建你的自定义组件。例如，创建一个 HelloWorld.vue 文件作为示例组件
4. 编写自定义组件代码：在 HelloWorld.vue 文件中，编写你的自定义组件代码。可以使用 Element UI 的组件和样式，也可以添加自己的逻辑和样式

```js
<template>
  <div>
    <el-button type="primary" @click="handleClick">点击我</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('按钮被点击了');
    }
  }
}
</script>

<style>
/* 添加一些自定义的样式 */
</style>
```

5. 创建入口文件：在项目根目录中创建一个 index.js 文件作为该 npm 包的入口文件

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from './src/components/HelloWorld.vue'

Vue.use(ElementUI)

const install = function (Vue) {
  Vue.component(HelloWorld.name, HelloWorld)
}

export default {
  install,
}
```

6. 配置 package.json：在 package.json 文件中添加必要的字段，例如"name"、“version”、“description"等。确保在"main"字段中指定入口文件路径为 index.js。还可以添加"keywords”、"license"等字段
7. 构建：如果你的配置需要构建步骤（例如使用 Webpack 进行打包），在终端中运行构建命令来生成最终的 npm 包
8. npm login
9. npm publish
10. 在其他项目中使用：在其他 Vue 项目中，通过运行 npm install your-package-name 命令来安装你刚刚发布的包。然后可以在项目中引入你的组件并使用它

```js
<template>
  <div>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from 'your-package-name';

export default {
  components: {
    HelloWorld
  }
}
</script>
```
