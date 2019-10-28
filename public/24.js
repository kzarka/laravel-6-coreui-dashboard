(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/ProgressBars.vue":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/ProgressBars.vue ***!
  \*****************************************************************************************************************************************************************/
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
  name: 'progress-bars',

  data() {
    return {
      counter: 45,
      max: 100,
      max2: 50,
      value: 33.333333333,
      value3: 75,
      bars: [{
        variant: 'success',
        value: 75
      }, {
        variant: 'info',
        value: 75
      }, {
        variant: 'warning',
        value: 75
      }, {
        variant: 'danger',
        value: 75
      }, {
        variant: 'primary',
        value: 75
      }, {
        variant: 'secondary',
        value: 75
      }, {
        variant: 'dark',
        value: 75
      }],
      timer: null,
      striped: true,
      animate: true,
      max3: 100,
      values: [15, 30, 20]
    };
  },

  methods: {
    clicked() {
      this.counter = Math.random() * this.max;
      console.log('Change progress to ' + Math.round(this.counter * 100) / 100);
    },

    setClock() {
      this.timer = setInterval(() => {
        this.bars.forEach(bar => {
          bar.value = 25 + Math.random() * 75;
        });
      }, 2000);
    }

  },

  mounted() {
    this.setClock();
  },

  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-556086dc\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/ProgressBars.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-556086dc","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/ProgressBars.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
              _c("strong", [_vm._v(" Bootstrap Progress")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href:
                        "https://bootstrap-vue.js.org/docs/components/progress",
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
                _c("b-progress", {
                  attrs: {
                    value: _vm.counter,
                    max: _vm.max,
                    "show-progress": "",
                    animated: ""
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-progress",
                  {
                    staticClass: "mt-1",
                    attrs: { max: _vm.max, "show-value": "" }
                  },
                  [
                    _c("b-progress-bar", {
                      attrs: {
                        value: _vm.counter * (6 / 10),
                        variant: "success"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: {
                        value: _vm.counter * (2.5 / 10),
                        variant: "warning"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: {
                        value: _vm.counter * (1.5 / 10),
                        variant: "danger"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-btn",
                  { staticClass: "mt-4", on: { click: _vm.clicked } },
                  [_vm._v("Click me")]
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
              _vm._v(" "),
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("labels")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h6", [_vm._v("No label")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: { value: _vm.value, max: _vm.max2 }
                }),
                _vm._v(" "),
                _c("h6", [_vm._v("Value label")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: { value: _vm.value, max: _vm.max2, "show-value": "" }
                }),
                _vm._v(" "),
                _c("h6", [_vm._v("Progress label")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: {
                    value: _vm.value,
                    max: _vm.max2,
                    "show-progress": ""
                  }
                }),
                _vm._v(" "),
                _c("h6", [_vm._v("Value label with precision")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: {
                    value: _vm.value,
                    max: _vm.max2,
                    precision: 2,
                    "show-value": ""
                  }
                }),
                _vm._v(" "),
                _c("h6", [_vm._v("Progress label with precision")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: {
                    value: _vm.value,
                    max: _vm.max2,
                    precision: 2,
                    "show-progress": ""
                  }
                })
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
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("width")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h6", [_vm._v("Default width")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: { value: _vm.value3 }
                }),
                _vm._v(" "),
                _c("h6", [_vm._v("Custom widths")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "w-75 mb-2",
                  attrs: { value: _vm.value3 }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "w-50 mb-2",
                  attrs: { value: _vm.value3 }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "w-25",
                  attrs: { value: _vm.value3 }
                })
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
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("height")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h6", [_vm._v("Default height")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: { value: _vm.value3, "show-progress": "" }
                }),
                _vm._v(" "),
                _c("h6", [_vm._v("Custom heights")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: {
                    height: "2rem",
                    value: _vm.value3,
                    "show-progress": ""
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: {
                    height: "20px",
                    value: _vm.value3,
                    "show-progress": ""
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  attrs: { height: "2px", value: _vm.value3 }
                })
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
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("variants")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              _vm._l(_vm.bars, function(bar, index) {
                return _c("div", { key: index, staticClass: "row mb-1" }, [
                  _c("div", { staticClass: "col-sm-2" }, [
                    _vm._v(_vm._s(bar.variant) + ":")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-10 pt-1" },
                    [
                      _c("b-progress", {
                        key: bar.variant,
                        attrs: { value: bar.value, variant: bar.variant }
                      })
                    ],
                    1
                  )
                ])
              }),
              0
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
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("striped")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: { value: 25, variant: "success", striped: _vm.striped }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: { value: 50, variant: "info", striped: _vm.striped }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: { value: 75, variant: "warning", striped: _vm.striped }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: { value: 100, variant: "danger", striped: _vm.striped }
                }),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { variant: "secondary" },
                    on: {
                      click: function($event) {
                        _vm.striped = !_vm.striped
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.striped ? "Remove" : "Add") +
                        " Striped\n        "
                    )
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
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("animated")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: {
                    value: 25,
                    variant: "success",
                    striped: "",
                    animated: _vm.animate
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: {
                    value: 50,
                    variant: "info",
                    striped: "",
                    animated: _vm.animate
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: {
                    value: 75,
                    variant: "warning",
                    striped: "",
                    animated: _vm.animate
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: {
                    value: 100,
                    variant: "danger",
                    animated: _vm.animate
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { variant: "secondary" },
                    on: {
                      click: function($event) {
                        _vm.animate = !_vm.animate
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.animate ? "Stop" : "Start") +
                        " Animation\n        "
                    )
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
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("multiple bars")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-progress",
                  { staticClass: "mb-3", attrs: { max: _vm.max3 } },
                  [
                    _c("b-progress-bar", {
                      attrs: { variant: "primary", value: _vm.values[0] }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: { variant: "success", value: _vm.values[1] }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: { variant: "info", value: _vm.values[2] }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-progress",
                  {
                    staticClass: "mb-3",
                    attrs: { "show-progress": "", max: _vm.max3 }
                  },
                  [
                    _c("b-progress-bar", {
                      attrs: { variant: "primary", value: _vm.values[0] }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: { variant: "success", value: _vm.values[1] }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: { variant: "info", value: _vm.values[2] }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-progress",
                  {
                    staticClass: "mb-3",
                    attrs: { "show-value": "", striped: "", max: _vm.max3 }
                  },
                  [
                    _c("b-progress-bar", {
                      attrs: { variant: "primary", value: _vm.values[0] }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: { variant: "success", value: _vm.values[1] }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: { variant: "info", value: _vm.values[2] }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-progress",
                  { staticClass: "mb-3", attrs: { max: _vm.max3 } },
                  [
                    _c("b-progress-bar", {
                      attrs: {
                        variant: "primary",
                        value: _vm.values[0],
                        "show-progress": ""
                      }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: {
                        variant: "success",
                        value: _vm.values[1],
                        animated: "",
                        "show-progress": ""
                      }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: {
                        variant: "info",
                        value: _vm.values[2],
                        striped: "",
                        "show-progress": ""
                      }
                    })
                  ],
                  1
                )
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

/***/ "./resources/assets/admin/coreui/views/base/ProgressBars.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/admin/coreui/views/base/ProgressBars.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressBars_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./ProgressBars.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/ProgressBars.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_556086dc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProgressBars_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-556086dc","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ProgressBars.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-556086dc\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/ProgressBars.vue");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressBars_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_556086dc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProgressBars_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_556086dc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProgressBars_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\views\\base\\ProgressBars.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);