<template>
  <div id="app">
    <zw-button type="success">成功按钮</zw-button>
    <zw-checkbox v-model="checked">复选框</zw-checkbox>
    <zw-input v-model="inputValue" placeholder="请输入内容"></zw-input>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      checked: false,
      inputValue: ''
    }
  },
  components: {
    
  }
}
</script>

<style lang="less">
</style>
