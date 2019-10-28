(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Carousels.vue":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Carousels.vue ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'carousels',

  data() {
    return {
      slide: 0,
      sliding: null
    };
  },

  methods: {
    onSlideStart(slide) {
      console.log('onSlideStart', slide);
      this.sliding = true;
    },

    onSlideEnd(slide) {
      console.log('onSlideEnd', slide);
      this.sliding = false;
    }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ea2fdd44\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Carousels.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ea2fdd44","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Carousels.vue ***!
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
              { attrs: { md: "12", lg: "9" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _c("strong", [_vm._v(" Bootstrap Carousel")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/carousel",
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
                          "b-carousel",
                          {
                            staticStyle: { "text-shadow": "1px 1px 2px #333" },
                            attrs: {
                              id: "carousel1",
                              controls: "",
                              indicators: "",
                              background: "#ababab",
                              interval: 4000,
                              "img-width": "1024",
                              "img-height": "480"
                            },
                            on: {
                              "sliding-start": _vm.onSlideStart,
                              "sliding-end": _vm.onSlideEnd
                            },
                            model: {
                              value: _vm.slide,
                              callback: function($$v) {
                                _vm.slide = $$v
                              },
                              expression: "slide"
                            }
                          },
                          [
                            _c("b-carousel-slide", {
                              attrs: {
                                caption: "First slide",
                                text:
                                  "Nulla vitae elit libero, a pharetra augue mollis interdum.",
                                "img-src":
                                  "https://lorempixel.com/1024/480/technics/2/"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "b-carousel-slide",
                              {
                                attrs: {
                                  "img-src":
                                    "https://lorempixel.com/1024/480/technics/4/"
                                }
                              },
                              [_c("h1", [_vm._v("Hello world!")])]
                            ),
                            _vm._v(" "),
                            _c("b-carousel-slide", {
                              attrs: {
                                "img-src":
                                  "https://lorempixel.com/1024/480/technics/8/"
                              }
                            }),
                            _vm._v(" "),
                            _c("b-carousel-slide", [
                              _c("img", {
                                staticClass: "d-block img-fluid w-100",
                                attrs: {
                                  slot: "img",
                                  width: "1024",
                                  height: "480",
                                  src:
                                    "https://lorempixel.com/1024/480/technics/5/",
                                  alt: "image slot"
                                },
                                slot: "img"
                              })
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-carousel-slide",
                              {
                                attrs: {
                                  caption: "Blank Image",
                                  "img-blank": "",
                                  "img-alt": "Blank image"
                                }
                              },
                              [
                                _c("p", [
                                  _vm._v(
                                    "\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n                  eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque\n                  ut lacus vel interdum.\n                "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mt-4" }, [
                          _vm._v(
                            "\n              Slide #: " + _vm._s(_vm.slide)
                          ),
                          _c("br"),
                          _vm._v(
                            "\n              Sliding: " +
                              _vm._s(_vm.sliding) +
                              "\n            "
                          )
                        ])
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

/***/ "./resources/assets/admin/coreui/views/base/Carousels.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/admin/coreui/views/base/Carousels.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Carousels_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Carousels.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/views/base/Carousels.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_ea2fdd44_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Carousels_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-ea2fdd44","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Carousels.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ea2fdd44\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/views/base/Carousels.vue");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Carousels_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_ea2fdd44_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Carousels_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_ea2fdd44_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Carousels_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\views\\base\\Carousels.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);