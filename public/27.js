(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Tooltips.vue":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Tooltips.vue ***!
  \*************************************************************************************************************************************************************/
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
  name: 'tooltips',

  data() {
    return {
      show: true,
      disabled: false
    };
  },

  methods: {
    onOpen() {
      this.$refs.tooltip.$emit('open');
    },

    onClose() {
      this.$refs.tooltip.$emit('close');
    },

    disableByRef() {
      if (this.disabled) {
        this.$refs.tooltip2.$emit('enable');
      } else {
        this.$refs.tooltip2.$emit('disable');
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54d89856\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Tooltips.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-54d89856","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Tooltips.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
              _c("strong", [_vm._v(" Bootstrap Tooltips ")]),
              _c("small", [
                _c("code", [_vm._v("v-b-tooltip")]),
                _vm._v(" directive")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href:
                        "https://bootstrap-vue.js.org/docs/components/tooltip",
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
              "b-row",
              [
                _c("b-col", { attrs: { cols: "6" } }, [
                  _c(
                    "div",
                    { staticClass: "text-center my-3" },
                    [
                      _c(
                        "b-btn",
                        {
                          directives: [
                            {
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover",
                              modifiers: { hover: true }
                            }
                          ],
                          attrs: { title: "I am a tooltip!" }
                        },
                        [_vm._v("Hover Me")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("b-col", { attrs: { cols: "6" } }, [
                  _c(
                    "div",
                    { staticClass: "text-center my-3" },
                    [
                      _c(
                        "b-btn",
                        {
                          attrs: { id: "tooltipButton-2", variant: "primary" }
                        },
                        [_vm._v("Button")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tooltip",
                        { attrs: { show: "", target: "tooltipButton-2" } },
                        [_vm._v("\n              I start open\n            ")]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Tooltips ")]),
              _c("small", [
                _c("code", [_vm._v("b-tooltip")]),
                _vm._v(" component")
              ])
            ]),
            _vm._v(" "),
            _c(
              "b-row",
              [
                _c(
                  "b-col",
                  { staticClass: "py-4 text-center", attrs: { md: "6" } },
                  [
                    _c(
                      "b-btn",
                      {
                        attrs: { id: "exButton1", variant: "outline-success" }
                      },
                      [_vm._v("Live chat")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { staticClass: "py-4 text-center", attrs: { md: "6" } },
                  [
                    _c(
                      "b-btn",
                      {
                        attrs: { id: "exButton2", variant: "outline-success" }
                      },
                      [_vm._v("Html chat")]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("b-tooltip", {
              attrs: { target: "exButton1", title: "Online!" }
            }),
            _vm._v(" "),
            _c(
              "b-tooltip",
              { attrs: { target: "exButton2", placement: "bottom" } },
              [_vm._v("\n        Hello "), _c("strong", [_vm._v("World!")])]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Tooltips ")]),
              _c("small", [_c("code", [_vm._v("show")]), _vm._v(" prop")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _c(
                  "b-btn",
                  { attrs: { id: "tooltipButton-1", variant: "primary" } },
                  [_vm._v("I have a tooltip")]
                ),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c(
                  "b-btn",
                  {
                    on: {
                      click: function($event) {
                        _vm.show = !_vm.show
                      }
                    }
                  },
                  [_vm._v("Toggle Tooltip")]
                ),
                _vm._v(" "),
                _c(
                  "b-tooltip",
                  {
                    attrs: {
                      show: _vm.show,
                      target: "tooltipButton-1",
                      placement: "top"
                    },
                    on: {
                      "update:show": function($event) {
                        _vm.show = $event
                      }
                    }
                  },
                  [
                    _vm._v("\n          Hello "),
                    _c("strong", [_vm._v("World!")])
                  ]
                )
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
              _c("strong", [_vm._v(" Tooltips ")]),
              _c("small", [
                _c("code", [_vm._v("open close")]),
                _vm._v(" events")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex flex-column text-md-center" },
              [
                _c(
                  "div",
                  { staticClass: "p-2" },
                  [
                    _c(
                      "b-btn",
                      {
                        attrs: {
                          id: "tooltipButton-showEvent",
                          variant: "primary"
                        }
                      },
                      [_vm._v("I have a tooltip")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "p-2" },
                  [
                    _c(
                      "b-btn",
                      { staticClass: "px-1 mr-1", on: { click: _vm.onOpen } },
                      [_vm._v("Open")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      { staticClass: "px-1", on: { click: _vm.onClose } },
                      [_vm._v("Close")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-tooltip",
                  {
                    ref: "tooltip",
                    attrs: { target: "tooltipButton-showEvent" }
                  },
                  [
                    _vm._v("\n          Hello "),
                    _c("strong", [_vm._v("World!")])
                  ]
                )
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
              _c("strong", [_vm._v(" Tooltips ")]),
              _c("small", [
                _c("code", [_vm._v("enable disable")]),
                _vm._v(" events")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-column text-md-center" }, [
              _c(
                "div",
                { staticClass: "p-2" },
                [
                  _c(
                    "b-btn",
                    {
                      attrs: { id: "tooltipButton-disable", variant: "primary" }
                    },
                    [_vm._v("I have a tooltip")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "p-2" },
                [
                  _c(
                    "b-btn",
                    {
                      staticClass: "mr-1",
                      on: {
                        click: function($event) {
                          _vm.disabled = !_vm.disabled
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.disabled ? "Enable" : "Disable") +
                          " Tooltip by prop\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("b-btn", { on: { click: _vm.disableByRef } }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.disabled ? "Enable" : "Disable") +
                        " Tooltip by $ref event\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-tooltip",
                    {
                      ref: "tooltip2",
                      attrs: {
                        disabled: _vm.disabled,
                        target: "tooltipButton-disable"
                      },
                      on: {
                        "update:disabled": function($event) {
                          _vm.disabled = $event
                        }
                      }
                    },
                    [
                      _vm._v("\n            Hello "),
                      _c("strong", [_vm._v("World!")])
                    ]
                  )
                ],
                1
              )
            ])
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

/***/ "./resources/assets/admin/coreui/views/base/Tooltips.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/admin/coreui/views/base/Tooltips.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltips_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Tooltips.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Tooltips.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_54d89856_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tooltips_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-54d89856","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Tooltips.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54d89856\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Tooltips.vue");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltips_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_54d89856_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tooltips_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_54d89856_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tooltips_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\views\\base\\Tooltips.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);