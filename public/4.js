(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultAside.vue":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultAside.vue ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DefaultAside',
  components: {
    cSwitch: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["Switch"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultContainer.vue":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultContainer.vue ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_nav */ "./resources/assets/admin/coreui/_nav.js");
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
/* harmony import */ var _DefaultAside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultAside */ "./resources/assets/admin/coreui/containers/DefaultAside.vue");
/* harmony import */ var _DefaultHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultHeaderDropdownAccnt */ "./resources/assets/admin/coreui/containers/DefaultHeaderDropdownAccnt.vue");
/* harmony import */ var _DefaultHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultHeader */ "./resources/assets/admin/coreui/containers/DefaultHeader.vue");
/* harmony import */ var _DefaultFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultFooter */ "./resources/assets/admin/coreui/containers/DefaultFooter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DefaultContainer',
  components: {
    AppSidebar: _coreui_vue__WEBPACK_IMPORTED_MODULE_1__["Sidebar"],
    AppAside: _coreui_vue__WEBPACK_IMPORTED_MODULE_1__["Aside"],
    Breadcrumb: _coreui_vue__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"],
    DefaultAside: _DefaultAside__WEBPACK_IMPORTED_MODULE_2__["default"],
    DefaultHeaderDropdownAccnt: _DefaultHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_3__["default"],
    SidebarForm: _coreui_vue__WEBPACK_IMPORTED_MODULE_1__["SidebarForm"],
    SidebarFooter: _coreui_vue__WEBPACK_IMPORTED_MODULE_1__["SidebarFooter"],
    SidebarHeader: _coreui_vue__WEBPACK_IMPORTED_MODULE_1__["SidebarHeader"],
    SidebarNav: _coreui_vue__WEBPACK_IMPORTED_MODULE_1__["SidebarNav"],
    SidebarMinimizer: _coreui_vue__WEBPACK_IMPORTED_MODULE_1__["SidebarMinimizer"],
    DefaultFooter: _DefaultFooter__WEBPACK_IMPORTED_MODULE_5__["default"],
    DefaultHeader: _DefaultHeader__WEBPACK_IMPORTED_MODULE_4__["default"]
  },

  data() {
    return {
      nav: _nav__WEBPACK_IMPORTED_MODULE_0__["default"].items
    };
  },

  computed: {
    name() {
      return this.$route.name;
    },

    list() {
      return this.$route.matched.filter(route => route.name || route.meta.label);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultFooter.vue":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultFooter.vue ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
//
//
//
//
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
  name: 'DefaultFooter',
  components: {
    TheFooter: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["Footer"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultHeader.vue":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultHeader.vue ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
/* harmony import */ var _DefaultHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultHeaderDropdownAccnt */ "./resources/assets/admin/coreui/containers/DefaultHeaderDropdownAccnt.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DefaultHeader',
  components: {
    AsideToggler: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["AsideToggler"],
    AppHeader: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["Header"],
    DefaultHeaderDropdownAccnt: _DefaultHeaderDropdownAccnt__WEBPACK_IMPORTED_MODULE_1__["default"],
    SidebarToggler: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["SidebarToggler"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultHeaderDropdownAccnt.vue":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultHeaderDropdownAccnt.vue ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["HeaderDropdown"]
  },
  data: () => {
    return {
      itemsCount: 42
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-046ce049\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultAside.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-046ce049","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultAside.vue ***!
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
  return _c(
    "b-tabs",
    [
      _c(
        "b-tab",
        [
          _c("template", { slot: "title" }, [
            _c("i", { staticClass: "icon-list" })
          ]),
          _vm._v(" "),
          _c(
            "b-list-group",
            { staticClass: "list-group-accent" },
            [
              _c(
                "b-list-group-item",
                {
                  staticClass:
                    "list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"
                },
                [_vm._v("\n        Today\n      ")]
              ),
              _vm._v(" "),
              _c(
                "b-list-group-item",
                {
                  staticClass:
                    "list-group-item-accent-warning list-group-item-divider",
                  attrs: { href: "#" }
                },
                [
                  _c("div", { staticClass: "avatar float-right" }, [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/7.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v("Meeting with\n          "),
                    _c("strong", [_vm._v("Lucas")])
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted mr-3" }, [
                    _c("i", { staticClass: "icon-calendar" }),
                    _vm._v("  1 - 3pm\n        ")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _c("i", { staticClass: "icon-location-pin" }),
                    _vm._v("  Palo Alto, CA\n        ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "b-list-group-item",
                {
                  staticClass: "list-group-item-accent-info",
                  attrs: { href: "#" }
                },
                [
                  _c("div", { staticClass: "avatar float-right" }, [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/4.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v("Skype with "),
                    _c("strong", [_vm._v("Megan")])
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted mr-3" }, [
                    _c("i", { staticClass: "icon-calendar" }),
                    _vm._v("  4 - 5pm")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _c("i", { staticClass: "icon-social-skype" }),
                    _vm._v("  On-line")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("hr", { staticClass: "transparent mx-3 my-0" }),
              _vm._v(" "),
              _c(
                "b-list-group-item",
                {
                  staticClass:
                    "list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"
                },
                [_vm._v("\n        Tomorrow\n      ")]
              ),
              _vm._v(" "),
              _c(
                "b-list-group-item",
                {
                  staticClass:
                    "list-group-item-accent-danger list-group-item-divider",
                  attrs: { href: "#" }
                },
                [
                  _c("div", [
                    _vm._v("New UI Project - "),
                    _c("strong", [_vm._v("deadline")])
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted mr-3" }, [
                    _c("i", { staticClass: "icon-calendar" }),
                    _vm._v("  10 - 11pm")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _c("i", { staticClass: "icon-home" }),
                    _vm._v("  creativeLabs HQ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "avatars-stack mt-2" }, [
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/2.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/3.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/4.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/5.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/6.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "b-list-group-item",
                {
                  staticClass:
                    "list-group-item-accent-success list-group-item-divider",
                  attrs: { href: "#" }
                },
                [
                  _c("div", [
                    _c("strong", [_vm._v("#10 Startups.Garden")]),
                    _vm._v(" Meetup")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted mr-3" }, [
                    _c("i", { staticClass: "icon-calendar" }),
                    _vm._v("  1 - 3pm")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _c("i", { staticClass: "icon-location-pin" }),
                    _vm._v("  Palo Alto, CA")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "b-list-group-item",
                {
                  staticClass:
                    "list-group-item-accent-primary list-group-item-divider",
                  attrs: { href: "#" }
                },
                [
                  _c("div", [_c("strong", [_vm._v("Team meeting")])]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted mr-3" }, [
                    _c("i", { staticClass: "icon-calendar" }),
                    _vm._v("  4 - 6pm")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _c("i", { staticClass: "icon-home" }),
                    _vm._v("  creativeLabs HQ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "avatars-stack mt-2" }, [
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/2.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/3.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/4.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/5.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/6.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/7.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar avatar-xs" }, [
                      _c("img", {
                        staticClass: "img-avatar",
                        attrs: {
                          src: "img/avatars/8.jpg",
                          alt: "admin@bootstrapmaster.com"
                        }
                      })
                    ])
                  ])
                ]
              )
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        [
          _c("template", { slot: "title" }, [
            _c("i", { staticClass: "icon-speech" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "p-3" }, [
            _c("div", { staticClass: "message" }, [
              _c("div", { staticClass: "py-3 pb-5 mr-3 float-left" }, [
                _c(
                  "div",
                  { staticClass: "avatar" },
                  [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/7.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-badge", {
                      staticClass: "avatar-status",
                      attrs: { variant: "success" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Lukasz Holeczek")
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted float-right mt-1" }, [
                  _vm._v("1:52 PM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-truncate font-weight-bold" }, [
                _vm._v("Lorem ipsum dolor sit amet")
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                )
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "message" }, [
              _c("div", { staticClass: "py-3 pb-5 mr-3 float-left" }, [
                _c(
                  "div",
                  { staticClass: "avatar" },
                  [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/7.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-badge", {
                      staticClass: "avatar-status",
                      attrs: { variant: "danger" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Lukasz Holeczek")
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted float-right mt-1" }, [
                  _vm._v("1:52 PM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-truncate font-weight-bold" }, [
                _vm._v("Lorem ipsum dolor sit amet")
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                )
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "message" }, [
              _c("div", { staticClass: "py-3 pb-5 mr-3 float-left" }, [
                _c(
                  "div",
                  { staticClass: "avatar" },
                  [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/7.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-badge", {
                      staticClass: "avatar-status",
                      attrs: { variant: "info" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Lukasz Holeczek")
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted float-right mt-1" }, [
                  _vm._v("1:52 PM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-truncate font-weight-bold" }, [
                _vm._v("Lorem ipsum dolor sit amet")
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                )
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "message" }, [
              _c("div", { staticClass: "py-3 pb-5 mr-3 float-left" }, [
                _c(
                  "div",
                  { staticClass: "avatar" },
                  [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/7.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-badge", {
                      staticClass: "avatar-status",
                      attrs: { variant: "warning" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Lukasz Holeczek")
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted float-right mt-1" }, [
                  _vm._v("1:52 PM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-truncate font-weight-bold" }, [
                _vm._v("Lorem ipsum dolor sit amet")
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                )
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "message" }, [
              _c("div", { staticClass: "py-3 pb-5 mr-3 float-left" }, [
                _c(
                  "div",
                  { staticClass: "avatar" },
                  [
                    _c("img", {
                      staticClass: "img-avatar",
                      attrs: {
                        src: "img/avatars/7.jpg",
                        alt: "admin@bootstrapmaster.com"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-badge", {
                      staticClass: "avatar-status",
                      attrs: { variant: "dark" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Lukasz Holeczek")
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted float-right mt-1" }, [
                  _vm._v("1:52 PM")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-truncate font-weight-bold" }, [
                _vm._v("Lorem ipsum dolor sit amet")
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                )
              ])
            ])
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        [
          _c("template", { slot: "title" }, [
            _c("i", { staticClass: "icon-settings" })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "p-3" },
            [
              _c("h6", [_vm._v("Settings")]),
              _vm._v(" "),
              _c("div", { staticClass: "aside-options" }, [
                _c(
                  "div",
                  { staticClass: "clearfix mt-4" },
                  [
                    _c("small", [_c("b", [_vm._v("Option 1")])]),
                    _vm._v(" "),
                    _c("c-switch", {
                      staticClass: "float-right",
                      attrs: {
                        color: "success",
                        label: "",
                        variant: "pill",
                        size: "sm",
                        checked: ""
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "aside-options" }, [
                _c(
                  "div",
                  { staticClass: "clearfix mt-3" },
                  [
                    _c("small", [_c("b", [_vm._v("Option 2")])]),
                    _vm._v(" "),
                    _c("c-switch", {
                      staticClass: "float-right",
                      attrs: {
                        color: "success",
                        label: "",
                        variant: "pill",
                        size: "sm"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "aside-options" }, [
                _c(
                  "div",
                  { staticClass: "clearfix mt-3" },
                  [
                    _c("small", [_c("b", [_vm._v("Option 3")])]),
                    _vm._v(" "),
                    _c("c-switch", {
                      staticClass: "float-right",
                      attrs: {
                        color: "success",
                        label: "",
                        variant: "pill",
                        size: "sm",
                        disabled: "",
                        defaultChecked: ""
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("Disabled option.")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "aside-options" }, [
                _c(
                  "div",
                  { staticClass: "clearfix mt-3" },
                  [
                    _c("small", [_c("b", [_vm._v("Option 4")])]),
                    _vm._v(" "),
                    _c("c-switch", {
                      staticClass: "float-right",
                      attrs: {
                        color: "success",
                        label: "",
                        variant: "pill",
                        size: "sm",
                        checked: ""
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("h6", [_vm._v("System Utilization")]),
              _vm._v(" "),
              _c("div", { staticClass: "text-uppercase mb-1 mt-4" }, [
                _c("small", [_c("b", [_vm._v("CPU Usage")])])
              ]),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs",
                attrs: { height: "{}", variant: "info", value: 25 }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v("348 Processes. 1/4 Cores.")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-uppercase mb-1 mt-2" }, [
                _c("small", [_c("b", [_vm._v("Memory Usage")])])
              ]),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs",
                attrs: { height: "{}", variant: "warning", value: 70 }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v("11444GB/16384MB")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-uppercase mb-1 mt-2" }, [
                _c("small", [_c("b", [_vm._v("SSD 1 Usage")])])
              ]),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs",
                attrs: { height: "{}", variant: "danger", value: 95 }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v("243GB/256GB")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-uppercase mb-1 mt-2" }, [
                _c("small", [_c("b", [_vm._v("SSD 2 Usage")])])
              ]),
              _vm._v(" "),
              _c("b-progress", {
                staticClass: "progress-xs",
                attrs: { height: "{}", variant: "success", value: 10 }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [_vm._v("25GB/256GB")])
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1071b692\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultContainer.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1071b692","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultContainer.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "app" },
    [
      _c("DefaultHeader"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "app-body" },
        [
          _c(
            "AppSidebar",
            { attrs: { fixed: "" } },
            [
              _c("SidebarHeader"),
              _vm._v(" "),
              _c("SidebarForm"),
              _vm._v(" "),
              _c("SidebarNav", { attrs: { navItems: _vm.nav } }),
              _vm._v(" "),
              _c("SidebarFooter"),
              _vm._v(" "),
              _c("SidebarMinimizer")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "main",
            { staticClass: "main" },
            [
              _c("Breadcrumb", { attrs: { list: _vm.list } }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "container-fluid" },
                [_c("router-view")],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("AppAside", { attrs: { fixed: "" } }, [_c("DefaultAside")], 1)
        ],
        1
      ),
      _vm._v(" "),
      _c("DefaultFooter")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3ff15d68\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultHeader.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3ff15d68","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultHeader.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
    "AppHeader",
    { attrs: { fixed: "" } },
    [
      _c("SidebarToggler", {
        staticClass: "d-lg-none",
        attrs: { display: "md", mobile: "" }
      }),
      _vm._v(" "),
      _c("b-link", { staticClass: "navbar-brand", attrs: { to: "#" } }, [
        _c("img", {
          staticClass: "navbar-brand-full",
          attrs: {
            src: "img/brand/logo.svg",
            width: "89",
            height: "25",
            alt: "CoreUI Logo"
          }
        }),
        _vm._v(" "),
        _c("img", {
          staticClass: "navbar-brand-minimized",
          attrs: {
            src: "img/brand/sygnet.svg",
            width: "30",
            height: "30",
            alt: "CoreUI Logo"
          }
        })
      ]),
      _vm._v(" "),
      _c("SidebarToggler", {
        staticClass: "d-md-down-none",
        attrs: { display: "lg", defaultOpen: true }
      }),
      _vm._v(" "),
      _c(
        "b-navbar-nav",
        { staticClass: "d-md-down-none" },
        [
          _c(
            "b-nav-item",
            { staticClass: "px-3", attrs: { to: "/dashboard" } },
            [_vm._v("Dashboard")]
          ),
          _vm._v(" "),
          _c(
            "b-nav-item",
            { staticClass: "px-3", attrs: { to: "/users", exact: "" } },
            [_vm._v("Users")]
          ),
          _vm._v(" "),
          _c("b-nav-item", { staticClass: "px-3" }, [_vm._v("Settings")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-navbar-nav",
        { staticClass: "ml-auto" },
        [
          _c(
            "b-nav-item",
            { staticClass: "d-md-down-none" },
            [
              _c("i", { staticClass: "icon-bell" }),
              _vm._v(" "),
              _c("b-badge", { attrs: { pill: "", variant: "danger" } }, [
                _vm._v("5")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("b-nav-item", { staticClass: "d-md-down-none" }, [
            _c("i", { staticClass: "icon-list" })
          ]),
          _vm._v(" "),
          _c("b-nav-item", { staticClass: "d-md-down-none" }, [
            _c("i", { staticClass: "icon-location-pin" })
          ]),
          _vm._v(" "),
          _c("DefaultHeaderDropdownAccnt")
        ],
        1
      ),
      _vm._v(" "),
      _c("AsideToggler", { staticClass: "d-none d-lg-block" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8256254c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultFooter.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8256254c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultFooter.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("TheFooter", [
    _c("div", [
      _c("a", { attrs: { href: "https://coreui.io" } }, [_vm._v("CoreUI")]),
      _vm._v(" "),
      _c("span", { staticClass: "ml-1" }, [_vm._v("© 2018 creativeLabs.")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "ml-auto" }, [
      _c("span", { staticClass: "mr-1" }, [_vm._v("Powered by")]),
      _vm._v(" "),
      _c("a", { attrs: { href: "https://coreui.io" } }, [
        _vm._v("CoreUI for Vue")
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d120748c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultHeaderDropdownAccnt.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d120748c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultHeaderDropdownAccnt.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
    "AppHeaderDropdown",
    { attrs: { right: "", "no-caret": "" } },
    [
      _c("template", { slot: "header" }, [
        _c("img", {
          staticClass: "img-avatar",
          attrs: { src: "img/avatars/6.jpg", alt: "admin@bootstrapmaster.com" }
        })
      ]),
      _vm._v("\\\n  "),
      _c(
        "template",
        { slot: "dropdown" },
        [
          _c(
            "b-dropdown-header",
            { staticClass: "text-center", attrs: { tag: "div" } },
            [_c("strong", [_vm._v("Account")])]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-bell-o" }),
              _vm._v(" Updates\n      "),
              _c("b-badge", { attrs: { variant: "info" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-envelope-o" }),
              _vm._v(" Messages\n      "),
              _c("b-badge", { attrs: { variant: "success" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-tasks" }),
              _vm._v(" Tasks\n      "),
              _c("b-badge", { attrs: { variant: "danger" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-comments" }),
              _vm._v(" Comments\n      "),
              _c("b-badge", { attrs: { variant: "warning" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-header",
            { staticClass: "text-center", attrs: { tag: "div" } },
            [_c("strong", [_vm._v("Settings")])]
          ),
          _vm._v(" "),
          _c("b-dropdown-item", [
            _c("i", { staticClass: "fa fa-user" }),
            _vm._v(" Profile")
          ]),
          _vm._v(" "),
          _c("b-dropdown-item", [
            _c("i", { staticClass: "fa fa-wrench" }),
            _vm._v(" Settings")
          ]),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-usd" }),
              _vm._v(" Payments\n      "),
              _c("b-badge", { attrs: { variant: "secondary" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown-item",
            [
              _c("i", { staticClass: "fa fa-file" }),
              _vm._v(" Projects\n      "),
              _c("b-badge", { attrs: { variant: "primary" } }, [
                _vm._v(_vm._s(_vm.itemsCount))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("b-dropdown-divider"),
          _vm._v(" "),
          _c("b-dropdown-item", [
            _c("i", { staticClass: "fa fa-shield" }),
            _vm._v(" Lock Account")
          ]),
          _vm._v(" "),
          _c("b-dropdown-item", [
            _c("i", { staticClass: "fa fa-lock" }),
            _vm._v(" Logout")
          ])
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./resources/assets/admin/coreui/_nav.js":
/*!***********************************************!*\
  !*** ./resources/assets/admin/coreui/_nav.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  items: [{
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'primary',
      text: 'NEW'
    }
  }, {
    title: true,
    name: 'Theme',
    class: '',
    wrapper: {
      element: '',
      attributes: {}
    }
  }, {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  }, {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  }, {
    title: true,
    name: 'Components',
    class: '',
    wrapper: {
      element: '',
      attributes: {}
    }
  }, {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [{
      name: 'Breadcrumbs',
      url: '/base/breadcrumbs',
      icon: 'icon-puzzle'
    }, {
      name: 'Cards',
      url: '/base/cards',
      icon: 'icon-puzzle'
    }, {
      name: 'Carousels',
      url: '/base/carousels',
      icon: 'icon-puzzle'
    }, {
      name: 'Collapses',
      url: '/base/collapses',
      icon: 'icon-puzzle'
    }, {
      name: 'Forms',
      url: '/base/forms',
      icon: 'icon-puzzle'
    }, {
      name: 'Jumbotrons',
      url: '/base/jumbotrons',
      icon: 'icon-puzzle'
    }, {
      name: 'List Groups',
      url: '/base/list-groups',
      icon: 'icon-puzzle'
    }, {
      name: 'Navs',
      url: '/base/navs',
      icon: 'icon-puzzle'
    }, {
      name: 'Navbars',
      url: '/base/navbars',
      icon: 'icon-puzzle'
    }, {
      name: 'Paginations',
      url: '/base/paginations',
      icon: 'icon-puzzle'
    }, {
      name: 'Popovers',
      url: '/base/popovers',
      icon: 'icon-puzzle'
    }, {
      name: 'Progress Bars',
      url: '/base/progress-bars',
      icon: 'icon-puzzle'
    }, {
      name: 'Switches',
      url: '/base/switches',
      icon: 'icon-puzzle'
    }, {
      name: 'Tables',
      url: '/base/tables',
      icon: 'icon-puzzle'
    }, {
      name: 'Tabs',
      url: '/base/tabs',
      icon: 'icon-puzzle'
    }, {
      name: 'Tooltips',
      url: '/base/tooltips',
      icon: 'icon-puzzle'
    }]
  }, {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [{
      name: 'Buttons',
      url: '/buttons/standard-buttons',
      icon: 'icon-cursor'
    }, {
      name: 'Button Dropdowns',
      url: '/buttons/dropdowns',
      icon: 'icon-cursor'
    }, {
      name: 'Button Groups',
      url: '/buttons/button-groups',
      icon: 'icon-cursor'
    }, {
      name: 'Brand Buttons',
      url: '/buttons/brand-buttons',
      icon: 'icon-cursor'
    }]
  }, {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  }, {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [{
      name: 'CoreUI Icons',
      url: '/icons/coreui-icons',
      icon: 'icon-star',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    }, {
      name: 'Flags',
      url: '/icons/flags',
      icon: 'icon-star'
    }, {
      name: 'Font Awesome',
      url: '/icons/font-awesome',
      icon: 'icon-star',
      badge: {
        variant: 'secondary',
        text: '4.7'
      }
    }, {
      name: 'Simple Line Icons',
      url: '/icons/simple-line-icons',
      icon: 'icon-star'
    }]
  }, {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [{
      name: 'Alerts',
      url: '/notifications/alerts',
      icon: 'icon-bell'
    }, {
      name: 'Badges',
      url: '/notifications/badges',
      icon: 'icon-bell'
    }, {
      name: 'Modals',
      url: '/notifications/modals',
      icon: 'icon-bell'
    }]
  }, {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'primary',
      text: 'NEW'
    }
  }, {
    divider: true
  }, {
    title: true,
    name: 'Extras'
  }, {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [{
      name: 'Login',
      url: '/pages/login',
      icon: 'icon-star'
    }, {
      name: 'Register',
      url: '/pages/register',
      icon: 'icon-star'
    }, {
      name: 'Error 404',
      url: '/pages/404',
      icon: 'icon-star'
    }, {
      name: 'Error 500',
      url: '/pages/500',
      icon: 'icon-star'
    }]
  }, {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: {
      disabled: true
    }
  }, {
    name: 'Download CoreUI',
    url: 'http://coreui.io/vue/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: {
      target: '_blank',
      rel: 'noopener'
    }
  }, {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/vue/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: {
      target: '_blank',
      rel: 'noopener'
    }
  }]
});

/***/ }),

/***/ "./resources/assets/admin/coreui/containers/DefaultAside.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/admin/coreui/containers/DefaultAside.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DefaultAside_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./DefaultAside.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultAside.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_046ce049_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultAside_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-046ce049","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./DefaultAside.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-046ce049\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultAside.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DefaultAside_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_046ce049_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultAside_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_046ce049_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultAside_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\containers\\DefaultAside.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/assets/admin/coreui/containers/DefaultContainer.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/admin/coreui/containers/DefaultContainer.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DefaultContainer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./DefaultContainer.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultContainer.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_1071b692_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultContainer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-1071b692","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./DefaultContainer.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1071b692\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultContainer.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DefaultContainer_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_1071b692_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultContainer_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_1071b692_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultContainer_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\containers\\DefaultContainer.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/assets/admin/coreui/containers/DefaultFooter.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/admin/coreui/containers/DefaultFooter.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DefaultFooter_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./DefaultFooter.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultFooter.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_8256254c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultFooter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-8256254c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./DefaultFooter.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8256254c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultFooter.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DefaultFooter_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_8256254c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultFooter_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_8256254c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultFooter_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\containers\\DefaultFooter.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/assets/admin/coreui/containers/DefaultHeader.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/admin/coreui/containers/DefaultHeader.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DefaultHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./DefaultHeader.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultHeader.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ff15d68_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-3ff15d68","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./DefaultHeader.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3ff15d68\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultHeader.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DefaultHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ff15d68_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultHeader_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ff15d68_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultHeader_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\containers\\DefaultHeader.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/assets/admin/coreui/containers/DefaultHeaderDropdownAccnt.vue":
/*!*********************************************************************************!*\
  !*** ./resources/assets/admin/coreui/containers/DefaultHeaderDropdownAccnt.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DefaultHeaderDropdownAccnt_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./DefaultHeaderDropdownAccnt.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/coreui/containers/DefaultHeaderDropdownAccnt.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d120748c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultHeaderDropdownAccnt_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-d120748c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./DefaultHeaderDropdownAccnt.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d120748c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/coreui/containers/DefaultHeaderDropdownAccnt.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
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
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DefaultHeaderDropdownAccnt_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d120748c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultHeaderDropdownAccnt_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d120748c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DefaultHeaderDropdownAccnt_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\admin\\coreui\\containers\\DefaultHeaderDropdownAccnt.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);