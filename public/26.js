(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Tabs.vue":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Tabs.vue ***!
  \*********************************************************************************************************************************************************/
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
  name: 'tabs',

  data() {
    return {
      tabIndex: [0, 0],
      tabs: ['Calculator', 'Shopping cart', 'Charts']
    };
  }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d90423fa\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Tabs.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d90423fa","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Tabs.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "animated fadeIn" },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { xs: "12", lg: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Tabs\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    [
                      _c("b-tab", { attrs: { title: "Home", active: "" } }, [
                        _c("br"),
                        _vm._v(
                          " 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Profile" } }, [
                        _c("br"),
                        _vm._v(
                          "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Disabled", disabled: "" } },
                        [
                          _c("br"),
                          _vm._v(
                            "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", lg: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Tabs with icons\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    [
                      _c(
                        "b-tab",
                        { attrs: { active: "" } },
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-calculator" })
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            " 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-basket-loaded" })
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-pie-chart" })
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
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
            "b-col",
            { attrs: { xs: "12", lg: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Tabs with icons\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    {
                      model: {
                        value: _vm.tabIndex[0],
                        callback: function($$v) {
                          _vm.$set(_vm.tabIndex, 0, $$v)
                        },
                        expression: "tabIndex[0]"
                      }
                    },
                    [
                      _c(
                        "b-tab",
                        { attrs: { active: "" } },
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-calculator" }),
                            _vm._v(" " + _vm._s(_vm.tabs[0]) + "\n            ")
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            " 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-basket-loaded" }),
                            _vm._v(" " + _vm._s(_vm.tabs[1]) + "\n            ")
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-pie-chart" }),
                            _vm._v(" " + _vm._s(_vm.tabs[2]) + "\n            ")
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
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
            "b-col",
            { attrs: { xs: "12", lg: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Tabs vertical\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-card",
                    { attrs: { "no-body": "" } },
                    [
                      _c(
                        "b-tabs",
                        {
                          attrs: {
                            card: "",
                            pills: "",
                            vertical: "",
                            "nav-wrapper-class": "w-40"
                          },
                          model: {
                            value: _vm.tabIndex[1],
                            callback: function($$v) {
                              _vm.$set(_vm.tabIndex, 1, $$v)
                            },
                            expression: "tabIndex[1]"
                          }
                        },
                        [
                          _c(
                            "b-tab",
                            { attrs: { active: "" } },
                            [
                              _c("template", { slot: "title" }, [
                                _c("i", { staticClass: "icon-calculator" }),
                                _vm._v(
                                  " " + _vm._s(_vm.tabs[0]) + "\n            "
                                )
                              ]),
                              _vm._v(
                                "\n            1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                              )
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            [
                              _c("template", { slot: "title" }, [
                                _c("i", { staticClass: "icon-basket-loaded" }),
                                _vm._v(
                                  " " + _vm._s(_vm.tabs[1]) + "\n            "
                                )
                              ]),
                              _vm._v(
                                "\n            2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                              )
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            [
                              _c("template", { slot: "title" }, [
                                _c("i", { staticClass: "icon-pie-chart" }),
                                _vm._v(
                                  " " + _vm._s(_vm.tabs[2]) + "\n            "
                                )
                              ]),
                              _vm._v(
                                "\n            3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
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
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./resources/assets/admin/coreui/views/base/Tabs.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/admin/coreui/views/base/Tabs.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Tabs.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Tabs.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d90423fa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tabs_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-d90423fa","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Tabs.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d90423fa\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Tabs.vue");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d90423fa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tabs_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d90423fa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tabs_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\views\\base\\Tabs.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);