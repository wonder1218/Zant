<template>
  <div id="app">
    <div class="first">
      <zw-button>主要按钮</zw-button>
      <zw-button type="primary">主要按钮</zw-button>
      <zw-button type="success">成功按钮</zw-button>
      <zw-button type="info">信息按钮</zw-button>
      <zw-button type="warning">警告按钮</zw-button>
      <zw-button type="danger">危险按钮</zw-button>
    </div>
    <div class="second">
      <zw-button round>主要按钮</zw-button>
      <zw-button type="primary" round>主要按钮</zw-button>
      <zw-button type="primary" round>主要按钮</zw-button>
      <zw-button type="success" round>成功按钮</zw-button>
      <zw-button type="info" round>信息按钮</zw-button>
      <zw-button type="warning" round>警告按钮</zw-button>
      <zw-button type="danger" round>危险按钮</zw-button>
    </div>
    <div class="third">
      <zw-button disabled>主要按钮</zw-button>
      <zw-button type="primary" disabled>主要按钮</zw-button>
      <zw-button type="primary" disabled>主要按钮</zw-button>
      <zw-button type="success" disabled>成功按钮</zw-button>
      <zw-button type="info" disabled>信息按钮</zw-button>
      <zw-button type="warning" disabled>警告按钮</zw-button>
      <zw-button type="danger" disabled>危险按钮</zw-button>
    </div>
    <div class="fourth">
      <zw-button>主要按钮</zw-button>
      <zw-button type="primary" size="medium">主要按钮</zw-button>
      <zw-button type="primary" size="small">主要按钮</zw-button>
      <zw-button type="success" size="mini">成功按钮</zw-button>
      <zw-button type="info" size="mini">信息按钮</zw-button>
      <zw-button type="warning" size="small">警告按钮</zw-button>
      <zw-button type="danger" size="medium">危险按钮</zw-button>
    </div>

    <p>------------checkbox------------</p>
    <zw-checkbox v-model="checked" type="square">男</zw-checkbox>
    <zw-checkbox v-model="pickChecked" disabled>男</zw-checkbox>
    <zw-checkbox v-model="pickChecked" disabled>女</zw-checkbox>
    <p>------------input------------</p>
    <zw-input v-model="input" placeholder="请输入内容"></zw-input>
    <zw-input  placeholder="请输入内容" disabled></zw-input>
    <zw-input  placeholder="请输入内容" readonly></zw-input>
    <zw-input  placeholder="请输入内容" disabled readonly></zw-input>
    <p>------------select------------</p>

  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      checked: true,
      pickChecked: false,
      input: '',
    }
  },
  methods:{
  }
}
</script>
<style lang="less">
div{
  margin: 10px;
}
</style>
