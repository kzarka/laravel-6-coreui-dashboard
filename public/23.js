(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Popovers.vue":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Popovers.vue ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'popovers',

  data() {
    return {
      placements: ['topright', 'top', 'topleft', 'bottomright', 'bottom', 'bottomleft', 'righttop', 'right', 'lefttop', 'rightbottom', 'left', 'leftbottom'],
      show: false
    };
  },

  methods: {
    onOpen() {
      this.$refs.popover1.$emit('open');
    },

    onClose() {
      this.$refs.popover1.$emit('close');
    },

    onEnable() {
      this.$refs.popover2.$emit('enable');
    },

    onDisable() {
      this.$refs.popover2.$emit('disable');
    }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6776fa73\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Popovers.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6776fa73","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Popovers.vue ***!
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
              _c("strong", [_vm._v(" Bootstrap Popovers")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href:
                        "https://bootstrap-vue.js.org/docs/components/popovers",
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
                    { staticClass: "my-3 text-center" },
                    [
                      _c(
                        "b-btn",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover",
                              value: "I am popover content!",
                              expression: "'I am popover content!'",
                              modifiers: { hover: true }
                            }
                          ],
                          attrs: { title: "Popover Title" }
                        },
                        [_vm._v("\n              Hover Me\n            ")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("b-col", { attrs: { cols: "6" } }, [
                  _c(
                    "div",
                    { staticClass: "my-3 text-center" },
                    [
                      _c(
                        "b-btn",
                        {
                          attrs: {
                            id: "popoverButton-open",
                            variant: "primary"
                          }
                        },
                        [_vm._v("Button")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-popover",
                        {
                          attrs: {
                            show: "",
                            target: "popoverButton-open",
                            title: "Popover"
                          }
                        },
                        [
                          _vm._v("\n              I start "),
                          _c("strong", [_vm._v("open")])
                        ]
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
              _c("strong", [_vm._v(" Popovers ")]),
              _vm._v(" "),
              _c("small", [_vm._v("placement")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "my-3" },
              [
                _c(
                  "b-row",
                  _vm._l(_vm.placements, function(placement) {
                    return _c(
                      "b-col",
                      {
                        key: placement,
                        staticClass: "py-4 text-center",
                        attrs: { md: "4" }
                      },
                      [
                        _c(
                          "b-btn",
                          {
                            attrs: {
                              id: "exPopover1-" + placement,
                              variant: "primary"
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(placement) +
                                "\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("b-popover", {
                          attrs: {
                            target: "exPopover1-" + placement,
                            placement: placement,
                            title: "Popover!",
                            triggers: "hover focus",
                            content: "Placement " + placement
                          }
                        })
                      ],
                      1
                    )
                  }),
                  1
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          {
            staticClass: "d-sm-down-none",
            attrs: { "header-tag": "header", "footer-tag": "footer" }
          },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Popovers ")]),
              _vm._v(" "),
              _c("small", [_vm._v("via properties or slots")])
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
                      { attrs: { id: "exPopover2", variant: "primary" } },
                      [_vm._v("Using properties")]
                    ),
                    _vm._v(" "),
                    _c("b-popover", {
                      attrs: {
                        target: "exPopover2",
                        title: "Prop Examples",
                        triggers: "hover focus",
                        content: "Embedding content using properties is easy"
                      }
                    })
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
                      { attrs: { id: "exPopover3", variant: "primary" } },
                      [_vm._v("Using slots")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-popover",
                      {
                        attrs: { target: "exPopover3", triggers: "hover focus" }
                      },
                      [
                        _c("template", { slot: "title" }, [
                          _vm._v("Content via Slots")
                        ]),
                        _vm._v("\n            Embedding content "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v("using slots")
                        ]),
                        _vm._v("\n            affords you "),
                        _c("em", [
                          _vm._v("greater "),
                          _c("strong", [_vm._v("control.")])
                        ]),
                        _vm._v(
                          " and\n            basic HTML support.\n          "
                        )
                      ],
                      2
                    )
                  ],
                  1
                )
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
              _c("strong", [_vm._v(" Popovers ")]),
              _vm._v(" "),
              _c("small", [_vm._v("show")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-column text-md-center" }, [
              _c(
                "div",
                { staticClass: "p-2" },
                [
                  _c(
                    "b-btn",
                    { attrs: { id: "popoverButton-sync", variant: "primary" } },
                    [_vm._v("I have a popover")]
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
                      staticClass: "px-1",
                      on: {
                        click: function($event) {
                          _vm.show = !_vm.show
                        }
                      }
                    },
                    [_vm._v("Toggle Popover")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-popover",
                    {
                      attrs: {
                        show: _vm.show,
                        target: "popoverButton-sync",
                        title: "Popover"
                      },
                      on: {
                        "update:show": function($event) {
                          _vm.show = $event
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
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Popover ")]),
              _vm._v(" "),
              _c("small", [_vm._v("open/close events")])
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
                        attrs: { id: "popoverButton-event", variant: "primary" }
                      },
                      [_vm._v("I have a popover")]
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
                      { staticClass: "px-1", on: { click: _vm.onOpen } },
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
                  "b-popover",
                  {
                    ref: "popover1",
                    attrs: { target: "popoverButton-event", title: "Popover" }
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
              _c("strong", [_vm._v(" Popover ")]),
              _vm._v(" "),
              _c("small", [_vm._v("enable/disable events")])
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
                          id: "popoverButton-disableevent",
                          variant: "primary"
                        }
                      },
                      [_vm._v("I have a popover")]
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
                      { staticClass: "px-1", on: { click: _vm.onEnable } },
                      [_vm._v("Enable")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      { staticClass: "px-1", on: { click: _vm.onDisable } },
                      [_vm._v("Disable")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-popover",
                  {
                    ref: "popover2",
                    attrs: {
                      target: "popoverButton-disableevent",
                      title: "Popover"
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
              _c("strong", [_vm._v(" Popover ")]),
              _c("small", [
                _c("code", [_vm._v("v-b-popover")]),
                _vm._v(" directive")
              ])
            ]),
            _vm._v(" "),
            _c(
              "b-row",
              [
                _c(
                  "b-col",
                  { staticClass: "py-3 text-center", attrs: { md: "3" } },
                  [
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.hover.top",
                            value: "I am Top",
                            expression: "'I am Top'",
                            modifiers: { hover: true, top: true }
                          }
                        ],
                        attrs: { title: "Popover!", variant: "primary" }
                      },
                      [_vm._v("Top")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { staticClass: "py-3 text-center", attrs: { md: "3" } },
                  [
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.hover.left",
                            value: "I am Left",
                            expression: "'I am Left'",
                            modifiers: { hover: true, left: true }
                          }
                        ],
                        attrs: { title: "Popover!", variant: "primary" }
                      },
                      [_vm._v("Left")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { staticClass: "py-3 text-center", attrs: { md: "3" } },
                  [
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.hover.right",
                            value: "I am Right",
                            expression: "'I am Right'",
                            modifiers: { hover: true, right: true }
                          }
                        ],
                        attrs: { title: "Popover!", variant: "primary" }
                      },
                      [_vm._v("Right")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { staticClass: "py-3 text-center", attrs: { md: "3" } },
                  [
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.hover.bottom",
                            value: "I am Bottom",
                            expression: "'I am Bottom'",
                            modifiers: { hover: true, bottom: true }
                          }
                        ],
                        attrs: { title: "Popover!", variant: "primary" }
                      },
                      [_vm._v("Bottom")]
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
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./resources/assets/admin/coreui/views/base/Popovers.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/admin/coreui/views/base/Popovers.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Popovers_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Popovers.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Popovers.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6776fa73_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Popovers_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-6776fa73","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Popovers.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6776fa73\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Popovers.vue");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Popovers_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6776fa73_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Popovers_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6776fa73_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Popovers_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\views\\base\\Popovers.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);