<template>
  <label class="checkbox">
    <input type="checkbox" 
    v-model="checked" 
    @change="handleChange" 
    :disabled="disabled"
    :class="[
              `zw-check-box--${type}`,
              `zw-check-box--${size}`,
              {
                'is-disabled': disabled,
                'is-round': round,
                'is-circle': circle
              }
            ]"
    />
    <span class="checkbox__icon"></span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'ZwCheckBox',
  props:{
    type: {
      type: String,
      default: 'round'
    },
    size:{
      size: String,
      default: 'small'
    },
    disabled: Boolean,
    round: Boolean,
    circle: Boolean
  },
  data() {
    return {
      checked: false
    };
  },
  methods: {
    handleChange(event) {
      this.checked = event.target.checked;
      this.$emit('change', this.checked);
    }
  }
};
</script>

<style scoped>

.zw-check-box {
    padding: 8px 15px;
    border: none;
    color: white;
    font-size: 14px;
    border-radius: 4px;
    outline: none;
    transition: .1s;
    margin-left: 10px;
    cursor: pointer;
  }
  
  .zw-check-box--round {
    color: #606266;
    background-color: white;
    border: 1px solid #dcdfe6;
  }
  
  .zw-check-box--round:hover, .zw-check-box--round:focus{
    color: #669fff;
    background-color: #ecf5ff;
    border: 1px solid #c9e3ff;
  }
  
  .zw-check-box--round.is-disabled {
    color: #c0c4cc;
    background-color: #fff;
    border-color: #ebeef5;
    cursor: not-allowed;
  }
  
  .zw-check-box--medium{
    font-size: 14px;
    padding: 6px 15px;
  }
  
  .zw-check-box--small{
    font-size: 12px;
    padding: 6px 15px;
  }
  
  .zw-check-box--mini{
    font-size: 12px;
    padding: 4px 13px;
  }
  
  .zw-check-box--square {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  
  .zw-check-box--square:hover,.zw-check-box--square:focus {
    color: white;
    background-color: rgba(32, 160, 255, 0.7);
  }
  
  .zw-check-box--square.is-disabled {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
    cursor: not-allowed;
  }
  
  .zw-check-box--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
  
  .zw-check-box--success:hover,.zw-check-box--success:focus {
    color: white;
    background-color: rgba(103, 194, 54, 0.7);
  }
  
  .zw-check-box--success.is-disabled {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
    cursor: not-allowed;
  }
  
  .zw-check-box--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }
  
  .zw-check-box--info:hover, .zw-check-box--info:focus{
    color: white;
    background-color: rgba(144, 147, 153, 0.7);
  }
  
  .zw-check-box--info.is-disabled {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
    cursor: not-allowed;
  }
  
  .zw-check-box--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
  
  .zw-check-box--warning:hover, .zw-check-box--warning:focus{
    color: white;
    background-color: rgba(230, 162, 60, 0.7);
  }
  
  .zw-check-box--warning.is-disabled {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
    cursor: not-allowed;
  }
  
  .zw-check-box--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
  
  .zw-check-box--danger:hover, .zw-check-box--danger:focus {
    color: white;
    background-color: rgba(245, 108, 108, 0.7);
  }
  
  .zw-check-box--danger.is-disabled {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
    cursor: not-allowed;
  }
  
  .is-round{
    border-radius: 20px;
  }
</style>