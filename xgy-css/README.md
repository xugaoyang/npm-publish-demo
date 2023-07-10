# step

1. `yarn init`
2. `src`创建样式文件`index.scss`，如果用到`sass`或者打包工具，需要进行构建操作

```bash
yarn add sass -D
```

```json
{
  "scripts": {
    "build": "sass src/index.scss dist/index.css"
  }
}
```

3. 入口配置

```json
{
  "main": "dist/index.css"
}
```

4. `yarn build`

5. npm login
6. npm publish
7. 项目调用

```bash
yarn add <package-name>
```

```js
// 引入
import `<packagename>/dist/index.css`
```
