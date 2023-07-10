<template>
  <div>
    <el-button type="primary" @click="handleClick">点击我</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    handleClick() {
      console.log('按钮被点击了')
    },
  },
}
</script>
