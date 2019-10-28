(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Paginations.vue":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Paginations.vue ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'paginations',

  data() {
    return {
      currentPage: 3
    };
  },

  methods: {
    linkGen(pageNum) {
      return '#page/' + pageNum + '/foobar';
    }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-65c98ea4\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Paginations.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-65c98ea4","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Paginations.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper" }, [
    _c(
      "div",
      { staticClass: "animated fadeIn" },
      [
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Bootstrap Pagination")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href:
                        "https://bootstrap-vue.js.org/docs/components/pagination",
                      rel: "noreferrer noopener",
                      target: "_blank"
                    }
                  },
                  [_c("small", { staticClass: "text-muted" }, [_vm._v("docs")])]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h6", [_vm._v("Default")]),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: { size: "md", "total-rows": 100, "per-page": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h6", [_vm._v("Small")]),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: { size: "sm", "total-rows": 100, "per-page": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-sm-down-none" },
                  [
                    _c("h6", [_vm._v("Large")]),
                    _vm._v(" "),
                    _c("b-pagination", {
                      attrs: { size: "lg", "total-rows": 100, "per-page": 10 },
                      model: {
                        value: _vm.currentPage,
                        callback: function($$v) {
                          _vm.currentPage = $$v
                        },
                        expression: "currentPage"
                      }
                    }),
                    _vm._v(" "),
                    _c("br")
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [_vm._v("currentPage: " + _vm._s(_vm.currentPage))])
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Pagination ")]),
              _vm._v(" "),
              _c("small", [_vm._v("alignment")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h6", [_vm._v("Left alignment (default)")]),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: { "total-rows": 100, "per-page": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h6", [_vm._v("Center alignment")]),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: { align: "center", "total-rows": 100, "per-page": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h6", [_vm._v("Right (end) alignment")]),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: { align: "right", "total-rows": 100, "per-page": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", [_vm._v("currentPage: " + _vm._s(_vm.currentPage))])
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Pagination ")]),
              _vm._v(" "),
              _c("small", [_vm._v("navigation")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h6", [_vm._v("Default")]),
                _vm._v(" "),
                _c("b-pagination-nav", {
                  attrs: { "base-url": "#", "number-of-pages": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("h6", { staticClass: "mt-4" }, [
                  _vm._v("With link generator function")
                ]),
                _vm._v(" "),
                _c("b-pagination-nav", {
                  attrs: { "link-gen": _vm.linkGen, "number-of-pages": 10 },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "mt-4" }, [
                  _vm._v("currentPage: " + _vm._s(_vm.currentPage))
                ])
              ],
              1
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./resources/assets/admin/coreui/views/base/Paginations.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/admin/coreui/views/base/Paginations.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Paginations_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Paginations.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Paginations.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_65c98ea4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Paginations_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-65c98ea4","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Paginations.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-65c98ea4\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Paginations.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Paginations_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_65c98ea4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Paginations_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_65c98ea4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Paginations_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\views\\base\\Paginations.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);