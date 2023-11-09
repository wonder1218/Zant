(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("vue"));
	else
		root["index"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZwButton: function() { return /* reexport */ packages_button_src; },
  ZwButtonGroup: function() { return /* reexport */ packages_button_group; },
  ZwCheckBox: function() { return /* reexport */ packages_checkbox_src; },
  ZwCheckboxButton: function() { return /* reexport */ packages_checkbox_button; },
  ZwCheckboxGroup: function() { return /* reexport */ packages_checkbox_group; },
  ZwInput: function() { return /* reexport */ packages_input_src; },
  install: function() { return /* reexport */ install; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/checkbox/src/index.vue?vue&type=template&id=31951c94
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('label',{staticClass:"zw-checkbox",class:[
    _vm.border && _vm.checkboxSize ? 'zw-checkbox--' + _vm.checkboxSize : '',
    { 'is-disabled': _vm.isDisabled },
    { 'is-bordered': _vm.border },
    { 'is-checked': _vm.isChecked }
  ],attrs:{"id":_vm.id}},[_c('span',{staticClass:"zw-checkbox__input",class:{
      'is-disabled': _vm.isDisabled,
      'is-checked': _vm.isChecked,
      'is-indeterminate': _vm.indeterminate,
      'is-focus': _vm.focus
    },attrs:{"tabindex":_vm.indeterminate ? 0 : false,"role":_vm.indeterminate ? 'checkbox' : false,"aria-checked":_vm.indeterminate ? 'mixed' : false}},[_c('span',{staticClass:"zw-checkbox__inner"}),(_vm.trueLabel || _vm.falseLabel)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"zw-checkbox__original",attrs:{"type":"checkbox","aria-hidden":_vm.indeterminate ? 'true' : 'false',"name":_vm.name,"disabled":_vm.isDisabled,"true-value":_vm.trueLabel,"false-value":_vm.falseLabel},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:_vm._q(_vm.model,_vm.trueLabel)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(_vm.trueLabel):(_vm.falseLabel);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"zw-checkbox__original",attrs:{"type":"checkbox","aria-hidden":_vm.indeterminate ? 'true' : 'false',"disabled":_vm.isDisabled,"name":_vm.name},domProps:{"value":_vm.label,"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,_vm.label)>-1:(_vm.model)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.label,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}})]),(_vm.$slots.default || _vm.label)?_c('span',{staticClass:"zw-checkbox__label"},[_vm._t("default"),(!_vm.$slots.default)?[_vm._v(_vm._s(_vm.label))]:_vm._e()],2):_vm._e()])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/mixins/emitter.js
function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
      var name = child.$options.componentName;
  
      if (name === componentName) {
        child.$emit.apply(child, [eventName].concat(params));
      } else {
        broadcast.apply(child, [componentName, eventName].concat([params]));
      }
    });
  }
  /* harmony default export */ var emitter = ({
    methods: {
      dispatch(componentName, eventName, params) {
        var parent = this.$parent || this.$root;
        var name = parent.$options.componentName;
  
        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;
  
          if (parent) {
            name = parent.$options.componentName;
          }
        }
        if (parent) {
          parent.$emit.apply(parent, [eventName].concat(params));
        }
      },
      broadcast(componentName, eventName, params) {
        broadcast.call(this, componentName, eventName, params);
      }
    }
  });
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/checkbox/src/index.vue?vue&type=script&lang=js

  

  /* harmony default export */ var srcvue_type_script_lang_js = ({
    name: 'ZwCheckbox',

    mixins: [emitter],

    inject: {
      zwForm: {
        default: ''
      },
      zwFormItem: {
        default: ''
      }
    },

    componentName: 'ZwCheckbox',

    data() {
      return {
        selfModel: false,
        focus: false,
        isLimitExceeded: false
      };
    },

    computed: {
      model: {
        get() {
          return this.isGroup
            ? this.store : this.value !== undefined
              ? this.value : this.selfModel;
        },

        set(val) {
          if (this.isGroup) {
            this.isLimitExceeded = false;
            (this._checkboxGroup.min !== undefined &&
              val.length < this._checkboxGroup.min &&
              (this.isLimitExceeded = true));

            (this._checkboxGroup.max !== undefined &&
              val.length > this._checkboxGroup.max &&
              (this.isLimitExceeded = true));

            this.isLimitExceeded === false &&
            this.dispatch('ZwCheckboxGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
            this.selfModel = val;
          }
        }
      },

      isChecked() {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model;
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.label) > -1;
        } else if (this.model !== null && this.model !== undefined) {
          return this.model === this.trueLabel;
        }
      },

      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ZwCheckboxGroup') {
            parent = parent.$parent;
          } else {
            this._checkboxGroup = parent;
            return true;
          }
        }
        return false;
      },

      store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value;
      },

      /* used to make the isDisabled judgment under max/min props */
      isLimitDisabled() {
        const { max, min } = this._checkboxGroup;
        return !!(max || min) &&
          (this.model.length >= max && !this.isChecked) ||
          (this.model.length <= min && this.isChecked);
      },

      isDisabled() {
        return this.isGroup
          ? this._checkboxGroup.disabled || this.disabled || (this.zwForm || {}).disabled || this.isLimitDisabled
          : this.disabled || (this.zwForm || {}).disabled;
      },

      _zwFormItemSize() {
        return (this.zwFormItem || {}).zwFormItemSize;
      },

      checkboxSize() {
        const temCheckboxSize = this.size || this._zwFormItemSize || (this.$ELEMENT || {}).size;
        return this.isGroup
          ? this._checkboxGroup.checkboxGroupSize || temCheckboxSize
          : temCheckboxSize;
      }
    },

    props: {
      value: {},
      label: {},
      indeterminate: Boolean,
      disabled: Boolean,
      checked: Boolean,
      name: String,
      trueLabel: [String, Number],
      falseLabel: [String, Number],
      id: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
      controls: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
      border: Boolean,
      size: String
    },

    methods: {
      addToStore() {
        if (
          Array.isArray(this.model) &&
          this.model.indexOf(this.label) === -1
        ) {
          this.model.push(this.label);
        } else {
          this.model = this.trueLabel || true;
        }
      },
      handleChange(ev) {
        if (this.isLimitExceeded) return;
        let value;
        if (ev.target.checked) {
          value = this.trueLabel === undefined ? true : this.trueLabel;
        } else {
          value = this.falseLabel === undefined ? false : this.falseLabel;
        }
        this.$emit('change', value, ev);
        this.$nextTick(() => {
          if (this.isGroup) {
            this.dispatch('ZwCheckboxGroup', 'change', [this._checkboxGroup.value]);
          }
        });
      }
    },

    created() {
      this.checked && this.addToStore();
    },
    mounted() { // 为indeterminate元素 添加aria-controls 属性
      if (this.indeterminate) {
        this.$el.setAttribute('aria-controls', this.controls);
      }
    },

    watch: {
      value(value) {
        this.dispatch('ZwFormItem', 'zw.form.change', value);
      }
    }
  });

;// CONCATENATED MODULE: ./packages/checkbox/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var checkbox_srcvue_type_script_lang_js = (srcvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/checkbox/src/index.vue?vue&type=style&index=0&id=31951c94&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/checkbox/src/index.vue?vue&type=style&index=0&id=31951c94&prod&lang=scss

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/checkbox/src/index.vue



;


/* normalize component */

var component = normalizeComponent(
  checkbox_srcvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkbox_src = (component.exports);
;// CONCATENATED MODULE: ./packages/checkbox/src/index.js


checkbox_src.install = function (Vue){
    Vue.component(checkbox_src.name, checkbox_src);
}

/* harmony default export */ var packages_checkbox_src = (checkbox_src);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/index.vue?vue&type=template&id=f594020c
var srcvue_type_template_id_f594020c_render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',{staticClass:"zw-button",class:[
    _vm.type ? 'zw-button--' + _vm.type : '',
    _vm.buttonSize ? 'zw-button--' + _vm.buttonSize : '',
    {
      'is-disabled': _vm.buttonDisabled,
      'is-loading': _vm.loading,
      'is-plain': _vm.plain,
      'is-round': _vm.round,
      'is-circle': _vm.circle
    }
  ],attrs:{"disabled":_vm.buttonDisabled || _vm.loading,"autofocus":_vm.autofocus,"type":_vm.nativeType},on:{"click":_vm.handleClick}},[(_vm.loading)?_c('i',{staticClass:"zw-icon-loading"}):_vm._e(),(_vm.icon && !_vm.loading)?_c('i',{class:_vm.icon}):_vm._e(),(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()])
}
var srcvue_type_template_id_f594020c_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/index.vue?vue&type=script&lang=js

  /* harmony default export */ var button_srcvue_type_script_lang_js = ({
    name: 'ZwButton',

    inject: {
      zwForm: {
        default: ''
      },
      zwFormItem: {
        default: ''
      }
    },

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },

    computed: {
      _zwFormItemSize() {
        return (this.zwFormItem || {}).zwFormItemSize;
      },
      buttonSize() {
        return this.size || this._zwFormItemSize || (this.$ELEMENT || {}).size;
      },
      buttonDisabled() {
        return this.$options.propsData.hasOwnProperty('disabled') ? this.disabled : (this.zwForm || {}).disabled;
      }
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  });

;// CONCATENATED MODULE: ./packages/button/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_button_srcvue_type_script_lang_js = (button_srcvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/index.vue?vue&type=style&index=0&id=f594020c&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/button/src/index.vue?vue&type=style&index=0&id=f594020c&prod&lang=scss

;// CONCATENATED MODULE: ./packages/button/src/index.vue



;


/* normalize component */

var src_component = normalizeComponent(
  packages_button_srcvue_type_script_lang_js,
  srcvue_type_template_id_f594020c_render,
  srcvue_type_template_id_f594020c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var button_src = (src_component.exports);
;// CONCATENATED MODULE: ./packages/button/src/index.js


button_src.install = function (Vue){
    Vue.component(button_src.name, button_src);
}

/* harmony default export */ var packages_button_src = (button_src);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/input/src/index.vue?vue&type=template&id=b439409e
var srcvue_type_template_id_b439409e_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{class:[
  _vm.type === 'textarea' ? 'zw-textarea' : 'zw-input',
  _vm.inputSize ? 'zw-input--' + _vm.inputSize : '',
  {
    'is-disabled': _vm.inputDisabled,
    'is-exceed': _vm.inputExceed,
    'zw-input-group': _vm.$slots.prepend || _vm.$slots.append,
    'zw-input-group--append': _vm.$slots.append,
    'zw-input-group--prepend': _vm.$slots.prepend,
    'zw-input--prefix': _vm.$slots.prefix || _vm.prefixIcon,
    'zw-input--suffix': _vm.$slots.suffix || _vm.suffixIcon || _vm.clearable || _vm.showPassword
  }
  ],on:{"mouseenter":function($event){_vm.hovering = true},"mouszweave":function($event){_vm.hovering = false}}},[(_vm.type !== 'textarea')?[(_vm.$slots.prepend)?_c('div',{staticClass:"zw-input-group__prepend"},[_vm._t("prepend")],2):_vm._e(),(_vm.type !== 'textarea')?_c('input',_vm._b({ref:"input",staticClass:"zw-input__inner",attrs:{"tabindex":_vm.tabindex,"type":_vm.showPassword ? (_vm.passwordVisible ? 'text': 'password') : _vm.type,"disabled":_vm.inputDisabled,"readonly":_vm.readonly,"autocomplete":_vm.autoComplete || _vm.autocomplete,"aria-labzw":_vm.labzw},on:{"compositionstart":_vm.handleCompositionStart,"compositionupdate":_vm.handleCompositionUpdate,"compositionend":_vm.handleCompositionEnd,"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":_vm.handleChange}},'input',_vm.$attrs,false)):_vm._e(),(_vm.$slots.prefix || _vm.prefixIcon)?_c('span',{staticClass:"zw-input__prefix"},[_vm._t("prefix"),(_vm.prefixIcon)?_c('i',{staticClass:"zw-input__icon",class:_vm.prefixIcon}):_vm._e()],2):_vm._e(),(_vm.getSuffixVisible())?_c('span',{staticClass:"zw-input__suffix"},[_c('span',{staticClass:"zw-input__suffix-inner"},[(!_vm.showClear || !_vm.showPwdVisible || !_vm.isWordLimitVisible)?[_vm._t("suffix"),(_vm.suffixIcon)?_c('i',{staticClass:"zw-input__icon",class:_vm.suffixIcon}):_vm._e()]:_vm._e(),(_vm.showClear)?_c('i',{staticClass:"zw-input__icon zw-icon-circle-close zw-input__clear",on:{"mousedown":function($event){$event.preventDefault();},"click":_vm.clear}}):_vm._e(),(_vm.showPwdVisible)?_c('i',{staticClass:"zw-input__icon zw-icon-view zw-input__clear",on:{"click":_vm.handlePasswordVisible}}):_vm._e(),(_vm.isWordLimitVisible)?_c('span',{staticClass:"zw-input__count"},[_c('span',{staticClass:"zw-input__count-inner"},[_vm._v(" "+_vm._s(_vm.textLength)+"/"+_vm._s(_vm.upperLimit)+" ")])]):_vm._e()],2),(_vm.validateState)?_c('i',{staticClass:"zw-input__icon",class:['zw-input__validateIcon', _vm.validateIcon]}):_vm._e()]):_vm._e(),(_vm.$slots.append)?_c('div',{staticClass:"zw-input-group__append"},[_vm._t("append")],2):_vm._e()]:_c('textarea',_vm._b({ref:"textarea",staticClass:"zw-textarea__inner",style:(_vm.textareaStyle),attrs:{"tabindex":_vm.tabindex,"disabled":_vm.inputDisabled,"readonly":_vm.readonly,"autocomplete":_vm.autoComplete || _vm.autocomplete,"aria-label":_vm.label},on:{"compositionstart":_vm.handleCompositionStart,"compositionupdate":_vm.handleCompositionUpdate,"compositionend":_vm.handleCompositionEnd,"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":_vm.handleChange}},'textarea',_vm.$attrs,false)),(_vm.isWordLimitVisible && _vm.type === 'textarea')?_c('span',{staticClass:"zw-input__count"},[_vm._v(_vm._s(_vm.textLength)+"/"+_vm._s(_vm.upperLimit))]):_vm._e()],2)
}
var srcvue_type_template_id_b439409e_staticRenderFns = []


// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
;// CONCATENATED MODULE: ./src/utils/types.js


function types_isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

function types_isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

/**
 *  - Inspired:
 *    https://github.com/jashkenas/underscore/blob/master/modules/isFunction.js
 */
let isFunction = (functionToCheck) => {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

if ( true && typeof Int8Array !== 'object' && ((external_commonjs_vue_commonjs2_vue_root_Vue_default()).prototype.$isServer || typeof document.childNodes !== 'function')) {
  isFunction = function(obj) {
    return typeof obj === 'function' || false;
  };
}



const isUndefined = (val)=> {
  return val === void 0;
};

const isDefined = (val) => {
  return val !== undefined && val !== null;
};
;// CONCATENATED MODULE: ./src/utils/util.js



const util_hasOwnProperty = Object.prototype.hasOwnProperty;

function noop() {};

function hasOwn(obj, key) {
  return util_hasOwnProperty.call(obj, key);
};

function extend(to, _from) {
  for (let key in _from) {
    to[key] = _from[key];
  }
  return to;
};

function toObject(arr) {
  var res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
};

const getValueByPath = function(object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  let keyArr = path.split('.');
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    let key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
};

const generateId = function() {
  return Math.floor(Math.random() * 10000);
};

const valueEquals = (a, b) => {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

// TODO: use native Array.find, Array.findIndex when IE support is dropped
const arrayFindIndex = function(arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};

const arrayFind = function(arr, pred) {
  const idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};

// coerce truthy value to array
const coerceTruthyValueToArray = function(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};

const isIE = function() {
  return !Vue.prototype.$isServer && !isNaN(Number(document.documentMode));
};

const isEdge = function() {
  return !Vue.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
};

const isFirefox = function() {
  return !Vue.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
};

const autoprefixer = function(style) {
  if (typeof style !== 'object') return style;
  const rules = ['transform', 'transition', 'animation'];
  const prefixes = ['ms-', 'webkit-'];
  rules.forEach(rule => {
    const value = style[rule];
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};

const kebabCase = function(str) {
  const hyphenateRE = /([^-])([A-Z])/g;
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
};

const capitalize = function(str) {
  if (!isString(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const looseEqual = function(a, b) {
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};

const arrayEquals = function(arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }

  return true;
};

const isEqual = function(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }
  return looseEqual(value1, value2);
};

const isEmpty = function(val) {
  // null or undefined
  if (val == null) return true;

  if (typeof val === 'boolean') return false;

  if (typeof val === 'number') return !val;

  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size;
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length;
    }
  }

  return false;
};

function rafThrottle(fn) {
  let locked = false;
  return function(...args) {
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(_ => {
      fn.apply(this, args);
      locked = false;
    });
  };
}

function objToArray(obj) {
  if (Array.isArray(obj)) {
    return obj;
  }
  return isEmpty(obj) ? [] : [obj];
}

const isMac = function() {
  return !Vue.prototype.$isServer && /macintosh|mac os x/i.test(navigator.userAgent);
};
;// CONCATENATED MODULE: ./src/mixins/migrating.js

/**
 * Show migrating guide in browser console.
 *
 * Usage:
 * import Migrating from 'element-ui/src/mixins/migrating';
 *
 * mixins: [Migrating]
 *
 * add getMigratingConfig method for your component.
 *  getMigratingConfig() {
 *    return {
 *      props: {
 *        'allow-no-selection': 'allow-no-selection is removed.',
 *        'selection-mode': 'selection-mode is removed.'
 *      },
 *      events: {
 *        selectionchange: 'selectionchange is renamed to selection-change.'
 *      }
 *    };
 *  },
 */
/* harmony default export */ var migrating = ({
  mounted() {
    if (true) return;
    if (!this.$vnode) return;
    const { props = {}, events = {} } = this.getMigratingConfig();
    const { data, componentOptions } = this.$vnode;
    const definedProps = data.attrs || {};
    const definedEvents = componentOptions.listeners || {};

    for (let propName in definedProps) {
      propName = kebabCase(propName); // compatible with camel case
      if (props[propName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Attribute]: ${props[propName]}`);
      }
    }

    for (let eventName in definedEvents) {
      eventName = kebabCase(eventName); // compatible with camel case
      if (events[eventName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Event]: ${events[eventName]}`);
      }
    }
  },
  methods: {
    getMigratingConfig() {
      return {
        props: {},
        events: {}
      };
    }
  }
});
;// CONCATENATED MODULE: ./packages/input/src/calcTextareaHeight.js
let hiddenTextarea;

const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`;

const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
];

function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);

  const boxSizing = style.getPropertyValue('box-sizing');

  const paddingSize = (
    parseFloat(style.getPropertyValue('padding-bottom')) +
    parseFloat(style.getPropertyValue('padding-top'))
  );

  const borderSize = (
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))
  );

  const contextStyle = CONTEXT_STYLE
    .map(name => `${name}:${style.getPropertyValue(name)}`)
    .join(';');

  return { contextStyle, paddingSize, borderSize, boxSizing };
}

function calcTextareaHeight(
  targetElement,
  minRows = 1,
  maxRows = null
) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  let {
    paddingSize,
    borderSize,
    boxSizing,
    contextStyle
  } = calculateNodeStyling(targetElement);

  hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';

  let height = hiddenTextarea.scrollHeight;
  const result = {};

  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }

  hiddenTextarea.value = '';
  let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows !== null) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${ minHeight }px`;
  }
  if (maxRows !== null) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${ height }px`;
  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  return result;
};
;// CONCATENATED MODULE: ./src/utils/merge.js
/* harmony default export */ function merge(target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
      let source = arguments[i] || {};
      for (let prop in source) {
        if (source.hasOwnProperty(prop)) {
          let value = source[prop];
          if (value !== undefined) {
            target[prop] = value;
          }
        }
      }
    }
  
    return target;
  };
;// CONCATENATED MODULE: ./src/utils/shared.js
function isDef(val) {
    return val !== undefined && val !== null;
  }
  function isKorean(text) {
    const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
    return reg.test(text);
  }
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/input/src/index.vue?vue&type=script&lang=js

  
  
  
  
  

  /* harmony default export */ var input_srcvue_type_script_lang_js = ({
    name: 'ZwInput',

    componentName: 'ZwInput',

    mixins: [emitter, migrating],

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
           false &&
            0;
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
  });

;// CONCATENATED MODULE: ./packages/input/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_input_srcvue_type_script_lang_js = (input_srcvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/input/src/index.vue?vue&type=style&index=0&id=b439409e&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/input/src/index.vue?vue&type=style&index=0&id=b439409e&prod&lang=scss

;// CONCATENATED MODULE: ./packages/input/src/index.vue



;


/* normalize component */

var input_src_component = normalizeComponent(
  packages_input_srcvue_type_script_lang_js,
  srcvue_type_template_id_b439409e_render,
  srcvue_type_template_id_b439409e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input_src = (input_src_component.exports);
;// CONCATENATED MODULE: ./packages/input/src/index.js


input_src.install = function (Vue){
    Vue.component(input_src.name, input_src);
}

/* harmony default export */ var packages_input_src = (input_src);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/button-group.vue?vue&type=template&id=b86005c4
var button_groupvue_type_template_id_b86005c4_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"zw-button-group"},[_vm._t("default")],2)
}
var button_groupvue_type_template_id_b86005c4_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/button-group.vue?vue&type=script&lang=js

    /* harmony default export */ var button_groupvue_type_script_lang_js = ({
      name: 'ZwButtonGroup'
    });
  
;// CONCATENATED MODULE: ./packages/button/src/button-group.vue?vue&type=script&lang=js
 /* harmony default export */ var src_button_groupvue_type_script_lang_js = (button_groupvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./packages/button/src/button-group.vue





/* normalize component */
;
var button_group_component = normalizeComponent(
  src_button_groupvue_type_script_lang_js,
  button_groupvue_type_template_id_b86005c4_render,
  button_groupvue_type_template_id_b86005c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var button_group = (button_group_component.exports);
;// CONCATENATED MODULE: ./packages/button-group/index.js


/* istanbul ignore next */
button_group.install = function(Vue) {
  Vue.component(button_group.name, button_group);
};

/* harmony default export */ var packages_button_group = (button_group);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/checkbox/src/checkbox-button.vue?vue&type=template&id=541ca713
var checkbox_buttonvue_type_template_id_541ca713_render = function render(){var _vm=this,_c=_vm._self._c;return _c('label',{staticClass:"zw-checkbox-button",class:[
      _vm.size ? 'zw-checkbox-button--' + _vm.size : '',
      { 'is-disabled': _vm.isDisabled },
      { 'is-checked': _vm.isChecked },
      { 'is-focus': _vm.focus },
    ],attrs:{"role":"checkbox","aria-checked":_vm.isChecked,"aria-disabled":_vm.isDisabled}},[(_vm.trueLabel || _vm.falseLabel)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"zw-checkbox-button__original",attrs:{"type":"checkbox","name":_vm.name,"disabled":_vm.isDisabled,"true-value":_vm.trueLabel,"false-value":_vm.falseLabel},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:_vm._q(_vm.model,_vm.trueLabel)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(_vm.trueLabel):(_vm.falseLabel);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"zw-checkbox-button__original",attrs:{"type":"checkbox","name":_vm.name,"disabled":_vm.isDisabled},domProps:{"value":_vm.label,"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,_vm.label)>-1:(_vm.model)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.label,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}),(_vm.$slots.default || _vm.label)?_c('span',{staticClass:"zw-checkbox-button__inner",style:(_vm.isChecked ? _vm.activeStyle : null)},[_vm._t("default",function(){return [_vm._v(_vm._s(_vm.label))]})],2):_vm._e()])
}
var checkbox_buttonvue_type_template_id_541ca713_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/checkbox/src/checkbox-button.vue?vue&type=script&lang=js

    
  
    /* harmony default export */ var checkbox_buttonvue_type_script_lang_js = ({
      name: 'ZwCheckboxButton',
  
      mixins: [emitter],
  
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
          selfModel: false,
          focus: false,
          isLimitExceeded: false
        };
      },
  
      props: {
        value: {},
        label: {},
        disabled: Boolean,
        checked: Boolean,
        name: String,
        trueLabel: [String, Number],
        falseLabel: [String, Number]
      },
      computed: {
        model: {
          get() {
            return this._checkboxGroup
              ? this.store : this.value !== undefined
                ? this.value : this.selfModel;
          },
  
          set(val) {
            if (this._checkboxGroup) {
              this.isLimitExceeded = false;
              (this._checkboxGroup.min !== undefined &&
                val.length < this._checkboxGroup.min &&
                (this.isLimitExceeded = true));
  
              (this._checkboxGroup.max !== undefined &&
                val.length > this._checkboxGroup.max &&
                (this.isLimitExceeded = true));
  
              this.isLimitExceeded === false &&
              this.dispatch('ZwCheckboxGroup', 'input', [val]);
            } else if (this.value !== undefined) {
              this.$emit('input', val);
            } else {
              this.selfModel = val;
            }
          }
        },
  
        isChecked() {
          if ({}.toString.call(this.model) === '[object Boolean]') {
            return this.model;
          } else if (Array.isArray(this.model)) {
            return this.model.indexOf(this.label) > -1;
          } else if (this.model !== null && this.model !== undefined) {
            return this.model === this.trueLabel;
          }
        },
  
        _checkboxGroup() {
          let parent = this.$parent;
          while (parent) {
            if (parent.$options.componentName !== 'ZwCheckboxGroup') {
              parent = parent.$parent;
            } else {
              return parent;
            }
          }
          return false;
        },
  
        store() {
          return this._checkboxGroup ? this._checkboxGroup.value : this.value;
        },
  
        activeStyle() {
          return {
            backgroundColor: this._checkboxGroup.fill || '',
            borderColor: this._checkboxGroup.fill || '',
            color: this._checkboxGroup.textColor || '',
            'box-shadow': '-1px 0 0 0 ' + this._checkboxGroup.fill
  
          };
        },
  
        _zwFormItemSize() {
          return (this.zwFormItem || {}).zwFormItemSize;
        },
  
        size() {
          return this._checkboxGroup.checkboxGroupSize || this._zwFormItemSize || (this.$ELEMENT || {}).size;
        },
  
        /* used to make the isDisabled judgment under max/min props */
        isLimitDisabled() {
          const { max, min } = this._checkboxGroup;
          return !!(max || min) &&
            (this.model.length >= max && !this.isChecked) ||
            (this.model.length <= min && this.isChecked);
        },
  
        isDisabled() {
          return this._checkboxGroup
            ? this._checkboxGroup.disabled || this.disabled || (this.zwForm || {}).disabled || this.isLimitDisabled
            : this.disabled || (this.zwForm || {}).disabled;
        }
      },
      methods: {
        addToStore() {
          if (
            Array.isArray(this.model) &&
            this.model.indexOf(this.label) === -1
          ) {
            this.model.push(this.label);
          } else {
            this.model = this.trueLabel || true;
          }
        },
        handleChange(ev) {
          if (this.isLimitExceeded) return;
          let value;
          if (ev.target.checked) {
            value = this.trueLabel === undefined ? true : this.trueLabel;
          } else {
            value = this.falseLabel === undefined ? false : this.falseLabel;
          }
          this.$emit('change', value, ev);
          this.$nextTick(() => {
            if (this._checkboxGroup) {
              this.dispatch('ZwCheckboxGroup', 'change', [this._checkboxGroup.value]);
            }
          });
        }
      },
  
      created() {
        this.checked && this.addToStore();
      }
    });
  
;// CONCATENATED MODULE: ./packages/checkbox/src/checkbox-button.vue?vue&type=script&lang=js
 /* harmony default export */ var src_checkbox_buttonvue_type_script_lang_js = (checkbox_buttonvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./packages/checkbox/src/checkbox-button.vue





/* normalize component */
;
var checkbox_button_component = normalizeComponent(
  src_checkbox_buttonvue_type_script_lang_js,
  checkbox_buttonvue_type_template_id_541ca713_render,
  checkbox_buttonvue_type_template_id_541ca713_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkbox_button = (checkbox_button_component.exports);
;// CONCATENATED MODULE: ./packages/checkbox-button/index.js


/* istanbul ignore next */
checkbox_button.install = function(Vue) {
  Vue.component(checkbox_button.name, checkbox_button);
};

/* harmony default export */ var packages_checkbox_button = (checkbox_button);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/checkbox/src/checkbox-group.vue?vue&type=template&id=25cc1097
var checkbox_groupvue_type_template_id_25cc1097_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"zw-checkbox-group",attrs:{"role":"group","aria-label":"checkbox-group"}},[_vm._t("default")],2)
}
var checkbox_groupvue_type_template_id_25cc1097_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/checkbox/src/checkbox-group.vue?vue&type=script&lang=js

  

  /* harmony default export */ var checkbox_groupvue_type_script_lang_js = ({
    name: 'ZwCheckboxGroup',

    componentName: 'ZwCheckboxGroup',

    mixins: [emitter],

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
  });

;// CONCATENATED MODULE: ./packages/checkbox/src/checkbox-group.vue?vue&type=script&lang=js
 /* harmony default export */ var src_checkbox_groupvue_type_script_lang_js = (checkbox_groupvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./packages/checkbox/src/checkbox-group.vue





/* normalize component */
;
var checkbox_group_component = normalizeComponent(
  src_checkbox_groupvue_type_script_lang_js,
  checkbox_groupvue_type_template_id_25cc1097_render,
  checkbox_groupvue_type_template_id_25cc1097_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkbox_group = (checkbox_group_component.exports);
;// CONCATENATED MODULE: ./packages/checkbox-group/index.js


/* istanbul ignore next */
checkbox_group.install = function(Vue) {
  Vue.component(checkbox_group.name, checkbox_group);
};

/* harmony default export */ var packages_checkbox_group = (checkbox_group);
;// CONCATENATED MODULE: ./packages/index.js






// 存放组件的数组
const components = [
    packages_button_src,
    packages_checkbox_src,
    packages_input_src,
    packages_button_group,
    packages_checkbox_button,
    packages_checkbox_group
]

// 定义 install 方法，接收 Vue 作为参数。
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历 components 数组，来进行全局注册
    components.map(component => {
        Vue.component(component.name, component)
    })
}



;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.umd.js.map