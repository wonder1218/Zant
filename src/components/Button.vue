<template>
    <button class="zant-button">{{ label }}</button>
  </template>
  
  <script>
  export default {
    name: 'ZantButton',
    props: {
      label: {
        type: String,
        default: 'Button'
      }
    }
  }
  </script>
  
  <style scoped lang="less">
  .zant-button {
    padding: 10px 20px;
    background-color: #409eff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>