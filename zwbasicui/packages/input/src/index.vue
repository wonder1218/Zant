<template>
  <div :class="[
    type === 'textarea' ? 'zw-textarea' : 'zw-input',
    inputSize ? 'zw-input--' + inputSize : '',
    {
      'is-disabled': inputDisabled,
      'is-exceed': inputExceed,
      'zw-input-group': $slots.prepend || $slots.append,
      'zw-input-group--append': $slots.append,
      'zw-input-group--prepend': $slots.prepend,
      'zw-input--prefix': $slots.prefix || prefixIcon,
      'zw-input--suffix': $slots.suffix || suffixIcon || clearable || showPassword
    }
    ]"
    @mouseenter="hovering = true"
    @mouszweave="hovering = false"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="zw-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :tabindex="tabindex"
        v-if="type !== 'textarea'"
        class="zw-input__inner"
        v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autoComplete || autocomplete"
        ref="input"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        :aria-labzw="labzw"
      >
      <!-- 前置内容 -->
      <span class="zw-input__prefix" v-if="$slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <i class="zw-input__icon"
           v-if="prefixIcon"
           :class="prefixIcon">
        </i>
      </span>
      <!-- 后置内容 -->
      <span
        class="zw-input__suffix"
        v-if="getSuffixVisible()">
        <span class="zw-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix"></slot>
            <i class="zw-input__icon"
              v-if="suffixIcon"
              :class="suffixIcon">
            </i>
          </template>
          <i v-if="showClear"
            class="zw-input__icon zw-icon-circle-close zw-input__clear"
            @mousedown.prevent
            @click="clear"
          ></i>
          <i v-if="showPwdVisible"
            class="zw-input__icon zw-icon-view zw-input__clear"
            @click="handlePasswordVisible"
          ></i>
          <span v-if="isWordLimitVisible" class="zw-input__count">
            <span class="zw-input__count-inner">
              {{ textLength }}/{{ upperLimit }}
            </span>
          </span>
        </span>
        <i class="zw-input__icon"
          v-if="validateState"
          :class="['zw-input__validateIcon', validateIcon]">
        </i>
      </span>
      <!-- 后置元素 -->
      <div class="zw-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea
      v-else
      :tabindex="tabindex"
      class="zw-textarea__inner"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      ref="textarea"
      v-bind="$attrs"
      :disabled="inputDisabled"
      :readonly="readonly"
      :autocomplete="autoComplete || autocomplete"
      :style="textareaStyle"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :aria-label="label"
    >
    </textarea>
    <span v-if="isWordLimitVisible && type === 'textarea'" class="zw-input__count">{{ textLength }}/{{ upperLimit }}</span>
  </div>
</template>
<script>
  import emitter from '../../../src/mixins/emitter';
  import Migrating from '../../../src/mixins/migrating';
  import calcTextareaHeight from './calcTextareaHeight';
  import merge from '../../../src/utils/merge';
  import {isKorean} from '../../../src/utils/shared';

  export default {
    name: 'ZwInput',

    componentName: 'ZwInput',

    mixins: [emitter, Migrating],

    inheritAttrs: false,

    inject: {
      zwForm: {
        default: ''
      },
      zwFormItem: {
        default: ''
      }
    },

    data() {
      return {
        textareaCalcStyle: {},
        hovering: false,
        focused: false,
        isComposing: false,
        passwordVisible: false
      };
    },

    props: {
      value: [String, Number],
      size: String,
      resize: String,
      form: String,
      disabled: Boolean,
      readonly: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      autocomplete: {
        type: String,
        default: 'off'
      },
      /** @Deprecated in next major version */
      autoComplete: {
        type: String,
        validator(val) {
          process.env.NODE_ENV !== 'production' &&
            console.warn('[zwant Warn][Input]\'auto-complete\' property will be deprecated in next major version. please use \'autocomplete\' instead.');
          return true;
        }
      },
      validateEvent: {
        type: Boolean,
        default: true
      },
      suffixIcon: String,
      prefixIcon: String,
      label: String,
      clearable: {
        type: Boolean,
        default: false
      },
      showPassword: {
        type: Boolean,
        default: false
      },
      showWordLimit: {
        type: Boolean,
        default: false
      },
      tabindex: String
    },

    computed: {
      _zwFormItemSize() {
        return (this.zwFormItem || {}).zwFormItemSize;
      },
      validateState() {
        return this.zwFormItem ? this.zwFormItem.validateState : '';
      },
      needStatusIcon() {
        return this.zwForm ? this.zwForm.statusIcon : false;
      },
      validateIcon() {
        return {
          validating: 'zw-icon-loading',
          success: 'zw-icon-circle-check',
          error: 'zw-icon-circle-close'
        }[this.validateState];
      },
      textareaStyle() {
        return merge({}, this.textareaCalcStyle, { resize: this.resize });
      },
      inputSize() {
        return this.size || this._zwFormItemSize || (this.$ELEMENT || {}).size;
      },
      inputDisabled() {
        return this.disabled || (this.zwForm || {}).disabled;
      },
      nativeInputValue() {
        return this.value === null || this.value === undefined ? '' : String(this.value);
      },
      showClear() {
        return this.clearable &&
          !this.inputDisabled &&
          !this.readonly &&
          this.nativeInputValue &&
          (this.focused || this.hovering);
      },
      showPwdVisible() {
        return this.showPassword &&
          !this.inputDisabled &&
          !this.readonly &&
          (!!this.nativeInputValue || this.focused);
      },
      isWordLimitVisible() {
        return this.showWordLimit &&
          this.$attrs.maxlength &&
          (this.type === 'text' || this.type === 'textarea') &&
          !this.inputDisabled &&
          !this.readonly &&
          !this.showPassword;
      },
      upperLimit() {
        return this.$attrs.maxlength;
      },
      textLength() {
        if (typeof this.value === 'number') {
          return String(this.value).length;
        }

        return (this.value || '').length;
      },
      inputExceed() {
        // show exceed style if length of initial value greater then maxlength
        return this.isWordLimitVisible &&
          (this.textLength > this.upperLimit);
      }
    },

    watch: {
      value(val) {
        this.$nextTick(this.resizeTextarea);
        if (this.validateEvent) {
          this.dispatch('zwFormItem', 'zw.form.change', [val]);
        }
      },
      nativeInputValue() {
        this.setNativeInputValue();
      },
      type() {
        this.$nextTick(() => {
          this.setNativeInputValue();
          this.resizeTextarea();
          this.updateIconOffset();
        });
      }
    },

    methods: {
      focus() {
        this.getInput().focus();
      },
      blur() {
        this.getInput().blur();
      },
      getMigratingConfig() {
        return {
          props: {
            'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
            'on-icon-click': 'on-icon-click is removed.'
          },
          events: {
            'click': 'click is removed.'
          }
        };
      },
      handleBlur(event) {
        this.focused = false;
        this.$emit('blur', event);
        if (this.validateEvent) {
          this.dispatch('zwFormItem', 'zw.form.blur', [this.value]);
        }
      },
      select() {
        this.getInput().select();
      },
      resizeTextarea() {
        if (this.$isServer) return;
        const { autosize, type } = this;
        if (type !== 'textarea') return;
        if (!autosize) {
          this.textareaCalcStyle = {
            minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
          };
          return;
        }
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;

        this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      },
      setNativeInputValue() {
        const input = this.getInput();
        if (!input) return;
        if (input.value === this.nativeInputValue) return;
        input.value = this.nativeInputValue;
      },
      handleFocus(event) {
        this.focused = true;
        this.$emit('focus', event);
      },
      handleCompositionStart(event) {
        this.$emit('compositionstart', event);
        this.isComposing = true;
      },
      handleCompositionUpdate(event) {
        this.$emit('compositionupdate', event);
        const text = event.target.value;
        const lastCharacter = text[text.length - 1] || '';
        this.isComposing = !isKorean(lastCharacter);
      },
      handleCompositionEnd(event) {
        this.$emit('compositionend', event);
        if (this.isComposing) {
          this.isComposing = false;
          this.handleInput(event);
        }
      },
      handleInput(event) {
        if (this.isComposing) return;
        if (event.target.value === this.nativeInputValue) return;

        this.$emit('input', event.target.value);
        this.$nextTick(this.setNativeInputValue);
      },
      handleChange(event) {
        this.$emit('change', event.target.value);
      },
      calcIconOffset(place) {
        let zwList = [].slice.call(this.$el.querySelectorAll(`.zw-input__${place}`) || []);
        if (!zwList.length) return;
        let zw = null;
        for (let i = 0; i < zwList.length; i++) {
          if (zwList[i].parentNode === this.$el) {
            zw = zwList[i];
            break;
          }
        }
        if (!zw) return;
        const pendantMap = {
          suffix: 'append',
          prefix: 'prepend'
        };

        const pendant = pendantMap[place];
        if (this.$slots[pendant]) {
          zw.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${this.$el.querySelector(`.zw-input-group__${pendant}`).offsetWidth}px)`;
        } else {
          zw.removeAttribute('style');
        }
      },
      updateIconOffset() {
        this.calcIconOffset('prefix');
        this.calcIconOffset('suffix');
      },
      clear() {
        this.$emit('input', '');
        this.$emit('change', '');
        this.$emit('clear');
      },
      handlePasswordVisible() {
        this.passwordVisible = !this.passwordVisible;
        this.$nextTick(() => {
          this.focus();
        });
      },
      getInput() {
        return this.$refs.input || this.$refs.textarea;
      },
      getSuffixVisible() {
        return this.$slots.suffix ||
          this.suffixIcon ||
          this.showClear ||
          this.showPassword ||
          this.isWordLimitVisible ||
          (this.validateState && this.needStatusIcon);
      }
    },

    created() {
      this.$on('inputSelect', this.select);
    },

    mounted() {
      this.setNativeInputValue();
      this.resizeTextarea();
      this.updateIconOffset();
    },

    updated() {
      this.$nextTick(this.updateIconOffset);
    }
  };
</script>
<style lang="scss">
@import "../../mixins/mixins";
@import "../../common/var";

@include b(textarea) {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: $--font-size-base;

  @include e(inner) {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: $--input-font-color;
    background-color: $--input-background-color;
    background-image: none;
    border: $--input-border;
    border-radius: $--input-border-radius;
    transition: $--border-transition-base;

    &::placeholder {
      color: $--input-placeholder-color;
    }

    &:hover {
      border-color: $--input-hover-border;
    }

    &:focus {
      outline: none;
      border-color: $--input-focus-border;
    }
  }

  & .zw-input__count {
    color: $--color-info;
    background: $--color-white;
    position: absolute;
    font-size: 12px;
    bottom: 5px;
    right: 10px;
  }

  @include when(disabled) {
    .zw-textarea__inner {
      background-color: $--input-disabled-fill;
      border-color: $--input-disabled-border;
      color: $--input-disabled-color;
      cursor: not-allowed;

      &::placeholder {
        color: $--input-disabled-placeholder-color;
      }
    }
  }

  @include when(exceed) {
    .zw-textarea__inner {
      border-color: $--color-danger;
    }

    .zw-input__count {
      color: $--color-danger;
    }
  }
}

@include b(input) {
  position: relative;
  font-size: $--font-size-base;
  display: inline-block;
  width: 100%;
  @include scroll-bar;

  & .zw-input__clear {
    color: $--input-icon-color;
    font-size: $--input-font-size;
    cursor: pointer;
    transition: $--color-transition-base;

    &:hover {
      color: $--input-clear-hover-color;
    }
  }

  & .zw-input__count {
    height: 100%;
    display: inline-flex;
    align-items: center;
    color: $--color-info;
    font-size: 12px;

    .zw-input__count-inner {
      background: $--color-white;
      line-height: initial;
      display: inline-block;
      padding: 0 5px;
    }
  }

  @include e(inner) {
    -webkit-appearance: none;
    background-color: $--input-background-color;
    background-image: none;
    border-radius: $--input-border-radius;
    border: $--input-border;
    box-sizing: border-box;
    color: $--input-font-color;
    display: inline-block;
    font-size: inherit;
    height: $--input-height;
    line-height: $--input-height;
    outline: none;
    padding: 0 15px;
    transition: $--border-transition-base;
    width: 100%;

    &::-ms-reveal {
      display: none;
    }

    &::placeholder {
      color: $--input-placeholder-color;
    }

    &:hover {
      border-color: $--input-hover-border;
    }

    &:focus {
      outline: none;
      border-color: $--input-focus-border;
    }
  }

  @include e(suffix) {
    position: absolute;
    height: 100%;
    right: 5px;
    top: 0;
    text-align: center;
    color: $--input-icon-color;
    transition: all .3s;
    pointer-events: none;
  }

  @include e(suffix-inner) {
    pointer-events: all;
  }

  @include e(prefix) {
    position: absolute;
    height: 100%;
    left: 5px;
    top: 0;
    text-align: center;
    color: $--input-icon-color;
    transition: all .3s;
  }

  @include e(icon) {
    height: 100%;
    width: 25px;
    text-align: center;
    transition: all .3s;
    line-height: $--input-height;

    &:after {
      content: '';
      height: 100%;
      width: 0;
      display: inline-block;
      vertical-align: middle;
    }
  }

  @include e(validateIcon) {
    pointer-events: none;
  }

  @include when(active) {
    .zw-input__inner {
      outline: none;
      border-color: $--input-focus-border;
    }
  }

  @include when(disabled) {
    .zw-input__inner {
      background-color: $--input-disabled-fill;
      border-color: $--input-disabled-border;
      color: $--input-disabled-color;
      cursor: not-allowed;

      &::placeholder {
        color: $--input-disabled-placeholder-color;
      }
    }

    .zw-input__icon {
      cursor: not-allowed;
    }
  }

  @include when(exceed) {
    .zw-input__inner {
      border-color: $--color-danger;
    }

    .zw-input__suffix {
      .zw-input__count {
        color: $--color-danger;
      }
    }
  }

  @include m(suffix) {
    .zw-input__inner {
      padding-right: 30px;
    }
  }

  @include m(prefix) {
    .zw-input__inner {
      padding-left: 30px;
    }
  }

  @include m(medium) {
    font-size: $--input-medium-font-size;

    @include e(inner) {
      height: $--input-medium-height;
      line-height: $--input-medium-height;
    }

    .zw-input__icon {
      line-height: $--input-medium-height;
    }
  }
  @include m(small) {
    font-size: $--input-small-font-size;

    @include e(inner) {
      height: $--input-small-height;
      line-height: $--input-small-height;
    }

    .zw-input__icon {
      line-height: $--input-small-height;
    }
  }
  @include m(mini) {
    font-size: $--input-mini-font-size;

    @include e(inner) {
      height: $--input-mini-height;
      line-height: $--input-mini-height;
    }

    .zw-input__icon {
      line-height: $--input-mini-height;
    }
  }
}

@include b(input-group) {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing:0;

  > .zw-input__inner {
    vertical-align: middle;
    display: table-cell;
  }

  @include e((append, prepend)) {
    background-color: $--background-color-base;
    color: $--color-info;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: $--border-base;
    border-radius: $--input-border-radius;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;

    &:focus {
      outline: none;
    }

    .zw-select,
    .zw-button {
      display: inline-block;
      margin: -10px -20px;
    }

    button.zw-button,
    div.zw-select .zw-input__inner,
    div.zw-select:hover .zw-input__inner {
      border-color: transparent;
      background-color: transparent;
      color: inherit;
      border-top: 0;
      border-bottom: 0;
    }

    .zw-button,
    .zw-input {
      font-size: inherit;
    }
  }

  @include e(prepend) {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  @include e(append) {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  @include m(prepend) {
    .zw-input__inner {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .zw-select .zw-input.is-focus .zw-input__inner {
      border-color: transparent;
    }
  }

  @include m(append) {
    .zw-input__inner {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .zw-select .zw-input.is-focus .zw-input__inner {
      border-color: transparent;
    }
  }
}

/** disalbe default clear on IE */
.zw-input__inner::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
</style>