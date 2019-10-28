(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Collapses.vue":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Collapses.vue ***!
  \**************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'collapses',

  data() {
    return {
      showCollapse: true,
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    };
  }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-afe0919e\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Collapses.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-afe0919e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Collapses.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
          "b-row",
          [
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _c("strong", [_vm._v(" Bootstrap Collapse ")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/collapse",
                              rel: "noreferrer noopener",
                              target: "_blank"
                            }
                          },
                          [
                            _c("small", { staticClass: "text-muted" }, [
                              _vm._v("docs")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-btn",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle.collapse1",
                                modifiers: { collapse1: true }
                              }
                            ],
                            attrs: { variant: "primary" }
                          },
                          [_vm._v("Toggle Collapse")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          { staticClass: "mt-2", attrs: { id: "collapse1" } },
                          [
                            _c(
                              "b-card",
                              [
                                _c("p", { staticClass: "card-text" }, [
                                  _vm._v("Collapse contents Here")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.collapse1_inner",
                                        modifiers: { collapse1_inner: true }
                                      }
                                    ],
                                    attrs: { size: "sm" }
                                  },
                                  [_vm._v("Toggle Inner Collapse")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-collapse",
                                  {
                                    staticClass: "mt-2",
                                    attrs: { id: "collapse1_inner" }
                                  },
                                  [_c("b-card", [_vm._v("Hello!")])],
                                  1
                                )
                              ],
                              1
                            )
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
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _c("strong", [_vm._v(" Collapse ")]),
                      _vm._v(" "),
                      _c("small", [
                        _vm._v("with "),
                        _c("code", [_vm._v("v-b-toggle")]),
                        _vm._v(" directive")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-btn",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle.collapse2",
                                modifiers: { collapse2: true }
                              }
                            ],
                            staticClass: "m-1"
                          },
                          [_vm._v("Toggle Collapse")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-btn",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle",
                                value: "collapse2",
                                expression: "'collapse2'"
                              }
                            ],
                            staticClass: "m-1"
                          },
                          [_vm._v("Toggle Collapse")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          { attrs: { id: "collapse2" } },
                          [
                            _c("b-card", [
                              _vm._v(
                                "\n                I am collapsible content!\n              "
                              )
                            ])
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
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-row",
          [
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _c("strong", [_vm._v(" Collapse ")]),
                      _vm._v(" "),
                      _c("small", [
                        _vm._v("with "),
                        _c("code", [_vm._v("visibility")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-btn",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle.collapse3",
                                modifiers: { collapse3: true }
                              }
                            ],
                            staticClass: "m-1"
                          },
                          [_vm._v("Toggle Collapse")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          { attrs: { visible: "", id: "collapse3" } },
                          [
                            _c("b-card", [
                              _vm._v(
                                "\n                I should start open!\n              "
                              )
                            ])
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
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _c("strong", [_vm._v(" Collapse ")]),
                      _vm._v(" "),
                      _c("small", [
                        _vm._v("with "),
                        _c("code", [_vm._v("v-model")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-btn",
                          {
                            class: _vm.showCollapse ? "collapsed" : null,
                            attrs: {
                              "aria-controls": "collapse4",
                              "aria-expanded": _vm.showCollapse
                                ? "true"
                                : "false"
                            },
                            on: {
                              click: function($event) {
                                _vm.showCollapse = !_vm.showCollapse
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n              Toggle Collapse\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          {
                            staticClass: "mt-2",
                            attrs: { id: "collapse4" },
                            model: {
                              value: _vm.showCollapse,
                              callback: function($$v) {
                                _vm.showCollapse = $$v
                              },
                              expression: "showCollapse"
                            }
                          },
                          [
                            _c("b-card", [
                              _vm._v(
                                "\n                I should start open!\n              "
                              )
                            ])
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
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-row",
          [
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _c("strong", [_vm._v(" Collapse ")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("multiple elements")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-btn",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle.collapseA.collapseB",
                                modifiers: { collapseA: true, collapseB: true }
                              }
                            ]
                          },
                          [_vm._v("Toggle Both Collapse A and B")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          { staticClass: "mt-2", attrs: { id: "collapseA" } },
                          [
                            _c("b-card", [
                              _vm._v(
                                "\n                I am collapsable content A!\n              "
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          { staticClass: "mt-2", attrs: { id: "collapseB" } },
                          [
                            _c("b-card", [
                              _vm._v(
                                "\n                I am collapsable content B!\n              "
                              )
                            ])
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
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _c("strong", [_vm._v(" Collapse ")]),
                      _vm._v(" "),
                      _c("small", [
                        _c("code", [_vm._v("accordion")]),
                        _vm._v(" support")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { role: "tablist" } },
                      [
                        _c(
                          "b-card",
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" }
                              },
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.accordion1",
                                        modifiers: { accordion1: true }
                                      }
                                    ],
                                    attrs: {
                                      block: "",
                                      href: "#",
                                      variant: "info"
                                    }
                                  },
                                  [_vm._v("Accordion 1")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion1",
                                  visible: "",
                                  accordion: "my-accordion",
                                  role: "tabpanel"
                                }
                              },
                              [
                                _c("b-card-body", [
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v(
                                      "\n                    I start opened because "
                                    ),
                                    _c("code", [_vm._v("visible")]),
                                    _vm._v(" is "),
                                    _c("code", [_vm._v("true")])
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.text) +
                                        "\n                  "
                                    )
                                  ])
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
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" }
                              },
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.accordion2",
                                        modifiers: { accordion2: true }
                                      }
                                    ],
                                    attrs: {
                                      block: "",
                                      href: "#",
                                      variant: "info"
                                    }
                                  },
                                  [_vm._v("Accordion 2")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion2",
                                  accordion: "my-accordion",
                                  role: "tabpanel"
                                }
                              },
                              [
                                _c("b-card-body", [
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.text) +
                                        "\n                  "
                                    )
                                  ])
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
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" }
                              },
                              [
                                _c(
                                  "b-btn",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.accordion3",
                                        modifiers: { accordion3: true }
                                      }
                                    ],
                                    attrs: {
                                      block: "",
                                      href: "#",
                                      variant: "info"
                                    }
                                  },
                                  [_vm._v("Accordion 3")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion3",
                                  accordion: "my-accordion",
                                  role: "tabpanel"
                                }
                              },
                              [
                                _c("b-card-body", [
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.text) +
                                        "\n                  "
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
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
          ],
          1
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

/***/ "./resources/assets/admin/coreui/views/base/Collapses.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/admin/coreui/views/base/Collapses.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Collapses_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Collapses.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Collapses.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_afe0919e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Collapses_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-afe0919e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Collapses.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-afe0919e\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Collapses.vue");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Collapses_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_afe0919e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Collapses_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_afe0919e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Collapses_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\views\\base\\Collapses.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);