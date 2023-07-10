# step

1. `yarn init`
2. 创建入口文件`index.js`
```js
// 导出
export const a = 1
export const plus = (x,y) => x+y
export const minus = (x,y) => x-y
```

```json
// 入口配置
{
  "main": "index.js"
}
```

3. npm login
4. npm publish
5. 项目调用

```bash
yarn add <package-name>
```

```js
// 引入
import {fnName} from `<packagename>`
```
