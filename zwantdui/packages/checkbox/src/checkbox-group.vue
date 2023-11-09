<script>
  import Emitter from '../../../src/mixins/emitter';

  export default {
    name: 'ZwCheckboxGroup',

    componentName: 'ZwCheckboxGroup',

    mixins: [Emitter],

    inject: {
      zwFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _zwFormItemSize() {
        return (this.zwFormItem || {}).zwFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._zwFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('ZwFormItem', 'zw.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="zw-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
<style lang="scss">

</style>