(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZwButton: function() { return /* reexport */ packages_button_src; },
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

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/index.vue?vue&type=template&id=0634ea22&scoped=true
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',{staticClass:"sweet-button",class:[
          `sweet-button--${_vm.type}`,
          `sweet-button--${_vm.size}`,
          {
            'is-disabled': _vm.disabled,
            'is-round': _vm.round,
            'is-circle': _vm.circle
          }
        ],attrs:{"type":_vm.type,"disabled":_vm.disabled},on:{"click":_vm.handleClick}},[(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/index.vue?vue&type=script&lang=js

  /* harmony default export */ var srcvue_type_script_lang_js = ({
    name: "zwButton",
    inject: {},
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size:{
        size: String,
        default: 'default'
      },
      disabled: Boolean,
      round: Boolean,
      circle: Boolean
    },
    methods:{
      handleClick(evt){
        this.$emit('click', evt);
      }
    }
  });
  
;// CONCATENATED MODULE: ./packages/button/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var button_srcvue_type_script_lang_js = (srcvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-74.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-74.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-74.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-74.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/index.vue?vue&type=style&index=0&id=0634ea22&prod&scoped=true&lang=less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/button/src/index.vue?vue&type=style&index=0&id=0634ea22&prod&scoped=true&lang=less

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

;// CONCATENATED MODULE: ./packages/button/src/index.vue



;


/* normalize component */

var component = normalizeComponent(
  button_srcvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "0634ea22",
  null
  
)

/* harmony default export */ var button_src = (component.exports);
;// CONCATENATED MODULE: ./packages/button/src/index.js


button_src.install = function (Vue){
    Vue.component(button_src.name, button_src);
}

/* harmony default export */ var packages_button_src = (button_src);

;// CONCATENATED MODULE: ./packages/index.js

// 存放组件的数组
const components = [
    packages_button_src
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



/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.umd.js.map