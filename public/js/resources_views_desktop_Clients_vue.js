"use strict";
(self["webpackChunklittle_brothers"] = self["webpackChunklittle_brothers"] || []).push([["resources_views_desktop_Clients_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/busforms/ClientForm.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/busforms/ClientForm.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: {
    editMode: {
      type: Boolean,
      required: false,
      "default": false
    },
    activeBack: {
      type: String,
      required: false,
      "default": "flex"
    },
    redirect: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      editing: this.editMode,
      clientName: "",
      title: "",
      driverName: "",
      appDate: "",
      pickupAddress: "",
      dropoffAddress: "",
      clientNotes: ""
    };
  },
  mounted: function mounted() {
    this.getClients();
  },
  methods: {
    getClients: function getClients() {
      this.$axios.get('/api/clients').then(function (clientsdata) {
        console.log(clientsdata); // this.clients = clientsdata.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/desktop/Clients.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/desktop/Clients.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_busforms_ClientForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/busforms/ClientForm.vue */ "./resources/components/busforms/ClientForm.vue");
// @ is an alias to /src - TODO, fix that..
// TODO - build the form, remove this comment when it is done

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ClientForm: _components_busforms_ClientForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/busforms/ClientForm.vue?vue&type=template&id=8cb0fc24&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/busforms/ClientForm.vue?vue&type=template&id=8cb0fc24&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-8cb0fc24"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "client"
};
var _hoisted_2 = {
  "class": "container-fluid"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Clients", -1
  /* HOISTED */
  );
});

var _hoisted_4 = {
  "class": "button-container mb-3"
};
var _hoisted_5 = ["to"];

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary px-3",
    id: "clientEdit",
    "data-bs-toggle": "modal",
    "data-bs-target": "#editModal"
  }, "Edit", -1
  /* HOISTED */
  );
});

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"card text-start border-dark mx-auto w-50\" data-v-8cb0fc24><div class=\"card-header text-center fw-bold\" data-v-8cb0fc24>Name: TMP Carl Wheezer </div><div class=\"card-body\" data-v-8cb0fc24><div class=\"row\" data-v-8cb0fc24><div class=\"col-4\" data-v-8cb0fc24><p class=\"card-text fw-bold\" data-v-8cb0fc24>Address: </p><p class=\"card-text fw-bold\" data-v-8cb0fc24>Phone number:</p><p class=\"card-text fw-bold\" data-v-8cb0fc24>Mobility:</p><p class=\"card-text fw-bold\" data-v-8cb0fc24>Number of cancels:</p><p class=\"card-text fw-bold\" data-v-8cb0fc24>Additional notes:</p></div><div class=\"col\" data-v-8cb0fc24><p class=\"card-text\" data-v-8cb0fc24>TMP 713 Road St Apt 2 </p><p class=\"card-text\" data-v-8cb0fc24>TMP (906) 333-1542</p><p class=\"card-text\" data-v-8cb0fc24>TMP Wheelchair</p><p class=\"card-text\" data-v-8cb0fc24>TMP 2</p><p class=\"card-text\" data-v-8cb0fc24>TMP Is partially deaf</p></div></div></div></div><div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" aria-labelledby=\"editModalLabel\" aria-hidden=\"true\" data-v-8cb0fc24><div class=\"modal-dialog\" data-v-8cb0fc24><div class=\"modal-content\" data-v-8cb0fc24><div class=\"modal-header text-center\" data-v-8cb0fc24><h5 class=\"modal-title\" id=\"editModalLabel\" data-v-8cb0fc24>Edit Client Information</h5><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" data-v-8cb0fc24></button></div><div class=\"modal-body\" data-v-8cb0fc24><!-- TODO Update these to be poulated with data from the backend --><div class=\"form-group\" data-v-8cb0fc24><label for=\"name\" data-v-8cb0fc24>Name</label><input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" data-v-8cb0fc24></div><div class=\"form-group\" data-v-8cb0fc24><label for=\"exampleInputEmail1\" data-v-8cb0fc24>Password</label><input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" data-v-8cb0fc24></div><!--\r\n                &lt;div class=&quot;mb-3 row&quot;&gt;\r\n                  &lt;label for=&quot;name&quot; class=&quot;col-sm-2 col-form-label&quot;&gt;Name:&lt;/label&gt;\r\n                  &lt;div class=&quot;col-sm-10&quot;&gt;\r\n                    &lt;input type=&quot;text&quot; class=&quot;form-control-plaintext border rounded&quot; id=&quot;name&quot; value=&quot; TMP Carl Wheezer&quot;&gt;\r\n                  &lt;/div&gt;\r\n                &lt;/div&gt;\r\n                --><div class=\"mb-3 row\" data-v-8cb0fc24><label for=\"address\" class=\"col-sm-2 col-form-label\" data-v-8cb0fc24>Address:</label><div class=\"col-sm-10\" data-v-8cb0fc24><input type=\"text\" class=\"form-control-plaintext border rounded\" id=\"address\" value=\" TMP 713 Road St Apt 2 \" data-v-8cb0fc24></div></div><div class=\"mb-3 row\" data-v-8cb0fc24><label for=\"phoneNumber\" class=\"col-sm-2 col-form-label\" data-v-8cb0fc24>Phone:</label><div class=\"col-sm-10\" data-v-8cb0fc24><input type=\"text\" class=\"form-control-plaintext border rounded\" id=\"phoneNumber\" value=\" TMP (906) 333-1542\" data-v-8cb0fc24></div></div><div class=\"mb-3 row\" data-v-8cb0fc24><label for=\"mobility\" class=\"col-sm-2 col-form-label\" data-v-8cb0fc24>Mobility:</label><div class=\"col-sm-10\" data-v-8cb0fc24><input type=\"text\" class=\"form-control-plaintext border rounded\" id=\"mobility\" value=\" TMP Wheelchair\" data-v-8cb0fc24></div></div><div class=\"mb-3 row\" data-v-8cb0fc24><label for=\"numberOfCancels\" class=\"col-sm-5 col-form-label text-start\" data-v-8cb0fc24>Number of Cancels:</label><div class=\"col-sm-5\" data-v-8cb0fc24><input type=\"number\" class=\"border rounded mt-2\" id=\"numberOfCancels\" min=\"0\" data-v-8cb0fc24></div></div><div class=\"mb-3\" data-v-8cb0fc24><label for=\"additionalNotes\" class=\"form-label\" data-v-8cb0fc24>Additional Notes:</label><textarea class=\"form-control border rounded\" id=\"exampleFormControlTextarea1\" rows=\"3\" data-v-8cb0fc24>* TMP Is partially deaf</textarea></div></div><div class=\"modal-footer\" data-v-8cb0fc24><button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\" data-v-8cb0fc24>Close</button><button type=\"button\" class=\"btn btn-primary\" data-v-8cb0fc24>Save changes</button></div></div></div></div>", 2);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TODO Is there a better way to make this back button work? Or one consistent with other pages?"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    to: $props.redirect,
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      display: $props.activeBack
    }),
    onclick: "history.back()",
    "class": "btn btn-primary px-3"
  }, "Back", 12
  /* STYLE, PROPS */
  , _hoisted_5), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TODO Update this so that it can be populated with data from the backend"), _hoisted_7])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/desktop/Clients.vue?vue&type=template&id=485e4268":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/desktop/Clients.vue?vue&type=template&id=485e4268 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "clients"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ClientForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ClientForm");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ClientForm)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/busforms/ClientForm.vue?vue&type=style&index=0&id=8cb0fc24&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/busforms/ClientForm.vue?vue&type=style&index=0&id=8cb0fc24&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button-container[data-v-8cb0fc24] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/busforms/ClientForm.vue?vue&type=style&index=0&id=8cb0fc24&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/busforms/ClientForm.vue?vue&type=style&index=0&id=8cb0fc24&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientForm_vue_vue_type_style_index_0_id_8cb0fc24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientForm.vue?vue&type=style&index=0&id=8cb0fc24&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/busforms/ClientForm.vue?vue&type=style&index=0&id=8cb0fc24&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientForm_vue_vue_type_style_index_0_id_8cb0fc24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientForm_vue_vue_type_style_index_0_id_8cb0fc24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/components/busforms/ClientForm.vue":
/*!******************************************************!*\
  !*** ./resources/components/busforms/ClientForm.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClientForm_vue_vue_type_template_id_8cb0fc24_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientForm.vue?vue&type=template&id=8cb0fc24&scoped=true */ "./resources/components/busforms/ClientForm.vue?vue&type=template&id=8cb0fc24&scoped=true");
/* harmony import */ var _ClientForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientForm.vue?vue&type=script&lang=js */ "./resources/components/busforms/ClientForm.vue?vue&type=script&lang=js");
/* harmony import */ var _ClientForm_vue_vue_type_style_index_0_id_8cb0fc24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientForm.vue?vue&type=style&index=0&id=8cb0fc24&lang=scss&scoped=true */ "./resources/components/busforms/ClientForm.vue?vue&type=style&index=0&id=8cb0fc24&lang=scss&scoped=true");
/* harmony import */ var C_Work_Git_little_brothers_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Work_Git_little_brothers_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ClientForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ClientForm_vue_vue_type_template_id_8cb0fc24_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-8cb0fc24"],['__file',"resources/components/busforms/ClientForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/views/desktop/Clients.vue":
/*!*********************************************!*\
  !*** ./resources/views/desktop/Clients.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Clients_vue_vue_type_template_id_485e4268__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clients.vue?vue&type=template&id=485e4268 */ "./resources/views/desktop/Clients.vue?vue&type=template&id=485e4268");
/* harmony import */ var _Clients_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clients.vue?vue&type=script&lang=js */ "./resources/views/desktop/Clients.vue?vue&type=script&lang=js");
/* harmony import */ var C_Work_Git_little_brothers_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Work_Git_little_brothers_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Clients_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Clients_vue_vue_type_template_id_485e4268__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/views/desktop/Clients.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/components/busforms/ClientForm.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/components/busforms/ClientForm.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/busforms/ClientForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/views/desktop/Clients.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/views/desktop/Clients.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Clients_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Clients_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Clients.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/desktop/Clients.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/busforms/ClientForm.vue?vue&type=template&id=8cb0fc24&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/components/busforms/ClientForm.vue?vue&type=template&id=8cb0fc24&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientForm_vue_vue_type_template_id_8cb0fc24_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientForm_vue_vue_type_template_id_8cb0fc24_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientForm.vue?vue&type=template&id=8cb0fc24&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/busforms/ClientForm.vue?vue&type=template&id=8cb0fc24&scoped=true");


/***/ }),

/***/ "./resources/views/desktop/Clients.vue?vue&type=template&id=485e4268":
/*!***************************************************************************!*\
  !*** ./resources/views/desktop/Clients.vue?vue&type=template&id=485e4268 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Clients_vue_vue_type_template_id_485e4268__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Clients_vue_vue_type_template_id_485e4268__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Clients.vue?vue&type=template&id=485e4268 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/desktop/Clients.vue?vue&type=template&id=485e4268");


/***/ }),

/***/ "./resources/components/busforms/ClientForm.vue?vue&type=style&index=0&id=8cb0fc24&lang=scss&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/components/busforms/ClientForm.vue?vue&type=style&index=0&id=8cb0fc24&lang=scss&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ClientForm_vue_vue_type_style_index_0_id_8cb0fc24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ClientForm.vue?vue&type=style&index=0&id=8cb0fc24&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/busforms/ClientForm.vue?vue&type=style&index=0&id=8cb0fc24&lang=scss&scoped=true");


/***/ })

}]);