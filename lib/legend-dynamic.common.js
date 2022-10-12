/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 240:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACzklEQVRYw+2ZS2gTURSG/7mTPpOUNtGkSVob6UNqqVFTogitInVhVnUjGgRRQVzoSpcFQXDvorgXISAuDEKNBV1UqUqMyviogTaWVGqbapJJ00cyJqmLScJYNBNn2maEfst7D/d83DvnLM5QWINtwG0A0AOgA4AOAI2NJQMgAmACgJ/xuOaFm5RAjAbgBHBAuL7JrAJ4DWCY8bjSBcGc3FkArWUSW0sQwB3G48qQ3IJTQXLIuTgBgLINuI0ALgMgso5cf7IAhgj4glCaHHJOPQRAe7lNitBOwLcSpaIj2Pg+Jwdaid/eb6hKCaquoklXm17DBH4k0pnsan69w1qvNuprq6Qmj7BJbjwYXZQteP+W81hzo0b3+Uvs2+mrj0fz61fO2Dp77WbJRfbm03zowuDTF8ViRJ9Yq65UNRk1OgCwmrV6qTJSEb3BxBKXfvAk+P7QXtOOkbHpoHAvnuBSsYXUotgZfyOe4JJiMZRtwH1zs2/lX1B8FW8JyqWkNmPvMtQdcVhM3mehGWHfOtHfatrdpmuQmnwyxMbveSdmZAlWVhAyNHi4v6ZaVXW8t6Wt/7xnOL939GCTRW4fFBMUfWJCKNA0oQFARZOSbnw9EU2YTGWy14dejfbZLaaRsdBX4d7Ld7Nzyyvpn1KTB6ZirFjMVh/cEiw3JVXlpVPdO/vs5mbv89DU3YeBQqFcO7d/l2OP0Sw1+ceJSPjGbd+4LEF1TQV98WSXg1AUabFotwkFWyxabYe1vlGqYGKJS4nFiD7xSjKdicVTywAQYZMJqTJSKanNGPQ1lY5uY8PY29lobCFV6Hv7OrfXNZu0tVKTz31fSvo+hFnZguVE8VVMwM/nlApHAETLbVEEloCfbCqVSQLAD37UpTSyAPyE8bjCAHzltvkDPsbjCuer+BH4satSCOac/pMhupDcSFj4G2KjeyUHgAUwCf43RFi4+QvUFeCwUFU8NQAAAABJRU5ErkJggg==";

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
  "default": function() { return /* binding */ entry_lib; }
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

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/LegendDynamic.vue?vue&type=template&id=2e9b573a&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"legend-container"},[(_vm.legendAbbr)?_c('img',{staticClass:"legend-abbr",attrs:{"src":_vm.imgAbbr,"alt":""},on:{"click":_vm.legendAbbrClick}}):_vm._e(),(_vm.legendList.length && !_vm.legendAbbr)?_c('div',{class:_vm.legendBorder ? 'legend-border' : '',style:(`width:${_vm.legendWidth}px;`)},[(_vm.legendTool)?_c('div',{staticClass:"legend-title"},[_c('h3',[_vm._v(_vm._s(_vm.legendTitle))]),(_vm.closeBtn)?_c('div',{on:{"click":_vm.closeLegend}},[_vm._v("X")]):_vm._e()]):_vm._e(),_vm._t("content"),_c('ul',_vm._l((_vm.legendList),function(item,index){return _c('li',{key:index,style:(`width:${_vm.liWidth}px;`),on:{"click":function($event){return _vm.liClick(item)}}},[(item?.src)?_c('img',{staticClass:"legend-item-img",attrs:{"src":item?.unchecked ? item.uncheckedSrc  :item.src,"alt":"加载失败"}}):_vm._e(),(item?.color)?_c('div',{staticClass:"legend-item-block",style:({ background: item.color })}):_vm._e(),_c('span',{staticClass:"legend-item-text"},[_vm._v(_vm._s(item?.value ? item.value : "——"))])])}),0)],2):(!_vm.legendList.length && !_vm.legendAbbr)?_c('div',[_vm._v("暂 无 图 例")]):_vm._e(),_vm._t("left")],2)
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/LegendDynamic.vue?vue&type=script&lang=js&

/* harmony default export */ var LegendDynamicvue_type_script_lang_js_ = ({
  name: "LegendDynamic",
  props: {
    legendTool: {
      type: Boolean,
      default: true,
    },
    legendBorder: {
      type: Boolean,
      default: true,
    },
    legendAbbr: {
      type: Boolean,
      default: true,
    },
    imgAbbr: {
      type: String,
      default: __webpack_require__(240),
    },
    closeBtn: {
      type: Boolean,
      default: true,
    },
    legendList: {
      type: Array,
      default: () => [],
    },
    legendWidth: {
      type: Number,
      default: 240,
    },
    legendTitle: {
      type: String,
      default: "图例",
    },
    liWidth: {
      type: Number,
      default: 60,
    },
  },
  methods: {
    legendAbbrClick() {
      this.$emit("legendAbbrClick", true);
    },
    closeLegend() {
      this.$emit("closeLegend", true);
    },
    liClick(data) {
      this.$emit("liClick", data);
    },
  },
});

;// CONCATENATED MODULE: ./src/components/LegendDynamic.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LegendDynamicvue_type_script_lang_js_ = (LegendDynamicvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-32.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-32.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-32.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-32.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/LegendDynamic.vue?vue&type=style&index=0&id=2e9b573a&prod&scoped=true&lang=less&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/LegendDynamic.vue?vue&type=style&index=0&id=2e9b573a&prod&scoped=true&lang=less&

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

;// CONCATENATED MODULE: ./src/components/LegendDynamic.vue



;


/* normalize component */

var component = normalizeComponent(
  components_LegendDynamicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2e9b573a",
  null
  
)

/* harmony default export */ var LegendDynamic = (component.exports);
;// CONCATENATED MODULE: ./src/index.js

const components = {
    LegendDynamic: LegendDynamic
}
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
/* harmony default export */ var src_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=legend-dynamic.common.js.map