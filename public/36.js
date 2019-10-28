(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/notifications/Modals.vue":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/notifications/Modals.vue ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'modals',

  data() {
    return {
      myModal: false,
      largeModal: false,
      smallModal: false,
      primaryModal: false,
      successModal: false,
      warningModal: false,
      dangerModal: false,
      infoModal: false
    };
  }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3abfeb30\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/notifications/Modals.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3abfeb30","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/notifications/Modals.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "wrapper" },
    [
      _c(
        "div",
        { staticClass: "animated fadeIn" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-card",
                    [
                      _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                        _c("i", { staticClass: "fa fa-align-justify" }),
                        _vm._v(" Bootstrap Modals")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.myModal = true
                            }
                          }
                        },
                        [_vm._v("Launch demo modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.largeModal = true
                            }
                          }
                        },
                        [_vm._v("Launch large modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.smallModal = true
                            }
                          }
                        },
                        [_vm._v("Launch small modal")]
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "primary" },
                          on: {
                            click: function($event) {
                              _vm.primaryModal = true
                            }
                          }
                        },
                        [_vm._v("Launch primary modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "success" },
                          on: {
                            click: function($event) {
                              _vm.successModal = true
                            }
                          }
                        },
                        [_vm._v("Launch success modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "warning" },
                          on: {
                            click: function($event) {
                              _vm.warningModal = true
                            }
                          }
                        },
                        [_vm._v("Launch warning modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "danger" },
                          on: {
                            click: function($event) {
                              _vm.dangerModal = true
                            }
                          }
                        },
                        [_vm._v("Launch danger modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { type: "button", variant: "info" },
                          on: {
                            click: function($event) {
                              _vm.infoModal = true
                            }
                          }
                        },
                        [_vm._v("Launch info modal")]
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
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Modal title" },
          on: {
            ok: function($event) {
              _vm.myModal = false
            }
          },
          model: {
            value: _vm.myModal,
            callback: function($$v) {
              _vm.myModal = $$v
            },
            expression: "myModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Modal title", size: "lg" },
          on: {
            ok: function($event) {
              _vm.largeModal = false
            }
          },
          model: {
            value: _vm.largeModal,
            callback: function($$v) {
              _vm.largeModal = $$v
            },
            expression: "largeModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Modal title", size: "sm" },
          on: {
            ok: function($event) {
              _vm.smallModal = false
            }
          },
          model: {
            value: _vm.smallModal,
            callback: function($$v) {
              _vm.smallModal = $$v
            },
            expression: "smallModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            title: "Modal title",
            variant: "primary",
            "header-bg-variant": "primary",
            "content-class": "border-primary"
          },
          on: {
            ok: function($event) {
              _vm.primaryModal = false
            }
          },
          model: {
            value: _vm.primaryModal,
            callback: function($$v) {
              _vm.primaryModal = $$v
            },
            expression: "primaryModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            title: "Modal title",
            variant: "success",
            "header-bg-variant": "success",
            "content-class": "border-success",
            "ok-variant": "success"
          },
          on: {
            ok: function($event) {
              _vm.successModal = false
            }
          },
          model: {
            value: _vm.successModal,
            callback: function($$v) {
              _vm.successModal = $$v
            },
            expression: "successModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            title: "Modal title",
            variant: "warning",
            "header-bg-variant": "warning",
            "content-class": "border-warning",
            "ok-variant": "warning"
          },
          on: {
            ok: function($event) {
              _vm.warningModal = false
            }
          },
          model: {
            value: _vm.warningModal,
            callback: function($$v) {
              _vm.warningModal = $$v
            },
            expression: "warningModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            title: "Modal title",
            variant: "danger",
            "header-bg-variant": "danger",
            "content-class": "border-danger",
            "ok-variant": "danger"
          },
          on: {
            ok: function($event) {
              _vm.dangerModal = false
            }
          },
          model: {
            value: _vm.dangerModal,
            callback: function($$v) {
              _vm.dangerModal = $$v
            },
            expression: "dangerModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            title: "Modal title",
            variant: "info",
            "header-bg-variant": "info",
            "content-class": "border-info",
            "ok-variant": "info"
          },
          on: {
            ok: function($event) {
              _vm.infoModal = false
            }
          },
          model: {
            value: _vm.infoModal,
            callback: function($$v) {
              _vm.infoModal = $$v
            },
            expression: "infoModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./resources/assets/admin/coreui/views/notifications/Modals.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/admin/coreui/views/notifications/Modals.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modals_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Modals.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/notifications/Modals.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3abfeb30_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modals_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-3abfeb30","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Modals.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3abfeb30\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/notifications/Modals.vue");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modals_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3abfeb30_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modals_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3abfeb30_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modals_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\views\\notifications\\Modals.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);