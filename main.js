/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --typical-radius: 0.5em; \r\n    --light-grey: rgb(240,240,240); \r\n    --main-color: rgb(200,180,100);\r\n    --width: 36rem;\r\n}\r\n\r\n* {\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 14px; \r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nheader {\r\n    width: 100%; \r\n}\r\n\r\nnav {\r\n    height: 2.5rem; \r\n    background-color: var(--light-grey); \r\n    display: flex; \r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer; \r\n    height: 2.5rem;\r\n    width: calc(var(--width)/3);\r\n    border: none;\r\n    color: gray;\r\n    letter-spacing: 0.1em;\r\n}\r\n\r\nbutton:hover {\r\n    border-bottom: solid 2px var(--main-color);\r\n}\r\n\r\n.active {\r\n    background-color: white;\r\n    color: var(--main-color);\r\n    border-bottom: solid 2px var(--main-color);\r\n}\r\n\r\n.content {\r\n    width: var(--width);\r\n    display: flex; \r\n    flex-direction: column; \r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.home-title, \r\n.contact-title, \r\n.type {\r\n    color: var(--main-color);\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.home-title, \r\n.home-text, \r\n.type {\r\n    text-align: center;\r\n}\r\n\r\n.contact-title {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.type {\r\n    width: 100%; \r\n    margin-bottom: 2rem;\r\n    border-bottom: solid 2px;\r\n}\r\n\r\n.home-text, \r\n.contact-text {\r\n    color: gray;\r\n    font-size: 16px; \r\n    line-height: 1.25em;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    height: auto; \r\n    max-height: 100%;\r\n}\r\n\r\nimg.img-home {\r\n    margin-left: -1.25rem;\r\n}\r\n\r\nimg.img-me {\r\n    margin-top: 0.25rem;\r\n    margin-left: 0.5rem;\r\n    width: 50%;\r\n    height: auto;\r\n}\r\n\r\nimg.img-dish {\r\n  width: 100%;\r\n  aspect-ratio: 16 / 9;\r\n  object-fit: cover;\r\n}\r\n\r\n.card {\r\n    margin-bottom: 1.5rem; \r\n    width: 100%;\r\n    display: grid; \r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1.25rem; \r\n}\r\n\r\n.top {\r\n    display: flex; \r\n    flex-direction: row;\r\n    justify-content: flex-start; \r\n    align-items: center;\r\n\r\n    gap: 1rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.flag {\r\n    height: 1.25em; \r\n    width: auto;\r\n}\r\n\r\n.dish, \r\n.price {\r\n    font-size: 16px; \r\n}\r\n\r\n.dish {\r\n    color: var(--main-color); \r\n    text-align: center;\r\n}\r\n\r\n.price {\r\n    justify-self: flex-end;\r\n    color: gray;\r\n    margin-left: auto;\r\n}\r\n\r\n.description,\r\n.about-me {\r\n    font-size: 14px;\r\n    color: gray;\r\n    line-height: 1.25em;\r\n}\r\n\r\n.about-me {\r\n    margin-top: 2rem;\r\n    text-align: center;\r\n    max-width: 50%;\r\n    justify-self: center;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-restaurant/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-restaurant/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/images/alien.jpg"
/*!******************************!*\
  !*** ./src/images/alien.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"df0568fce30fb8d85e7d.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/alien.jpg?\n}");

/***/ },

/***/ "./src/images/bobotie.jpg"
/*!********************************!*\
  !*** ./src/images/bobotie.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"d051ea8edfd8f1c74e11.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/bobotie.jpg?\n}");

/***/ },

/***/ "./src/images/borscht.jpg"
/*!********************************!*\
  !*** ./src/images/borscht.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"89a935fe4163f854b540.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/borscht.jpg?\n}");

/***/ },

/***/ "./src/images/china.jpg"
/*!******************************!*\
  !*** ./src/images/china.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"97d552964b8f9acfa36f.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/china.jpg?\n}");

/***/ },

/***/ "./src/images/earth.jpg"
/*!******************************!*\
  !*** ./src/images/earth.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3355026bbc0d85e37be8.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/earth.jpg?\n}");

/***/ },

/***/ "./src/images/france.jpg"
/*!*******************************!*\
  !*** ./src/images/france.jpg ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"72920ef03e50000ad5d5.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/france.jpg?\n}");

/***/ },

/***/ "./src/images/gazpacho.jpg"
/*!*********************************!*\
  !*** ./src/images/gazpacho.jpg ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4b60d417f50717ffefaf.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/gazpacho.jpg?\n}");

/***/ },

/***/ "./src/images/jambalaya.jpg"
/*!**********************************!*\
  !*** ./src/images/jambalaya.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"9386e9dba9ff83d12f15.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/jambalaya.jpg?\n}");

/***/ },

/***/ "./src/images/mapo tofu.jpg"
/*!**********************************!*\
  !*** ./src/images/mapo tofu.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"541a81fbbe5658da101c.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/mapo_tofu.jpg?\n}");

/***/ },

/***/ "./src/images/nicoise.jpg"
/*!********************************!*\
  !*** ./src/images/nicoise.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ac4ada34a75851242a60.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/nicoise.jpg?\n}");

/***/ },

/***/ "./src/images/south-africa.png"
/*!*************************************!*\
  !*** ./src/images/south-africa.png ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a90c84bf6f23dcad03a3.png\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/south-africa.png?\n}");

/***/ },

/***/ "./src/images/spain.jpg"
/*!******************************!*\
  !*** ./src/images/spain.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3303c850c12f6aeffb02.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/spain.jpg?\n}");

/***/ },

/***/ "./src/images/sri lanka.jpg"
/*!**********************************!*\
  !*** ./src/images/sri lanka.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4a20f4a0a0b9686fbe89.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/sri_lanka.jpg?\n}");

/***/ },

/***/ "./src/images/ukraine.jpg"
/*!********************************!*\
  !*** ./src/images/ukraine.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4804114bcab922d2ef87.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/ukraine.jpg?\n}");

/***/ },

/***/ "./src/images/usa.jpg"
/*!****************************!*\
  !*** ./src/images/usa.jpg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"98d8975eb18f64671ebc.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/usa.jpg?\n}");

/***/ },

/***/ "./src/images/watalappan.jpeg"
/*!************************************!*\
  !*** ./src/images/watalappan.jpeg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6feb3e3dbd971ad3c08f.jpeg\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/watalappan.jpeg?\n}");

/***/ },

/***/ "./src/aboutPage.js"
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPage: () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _images_alien_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/alien.jpg */ \"./src/images/alien.jpg\");\n \n\nconst aboutPage = function() {\n    const content = document.querySelector(\".content\"); \n\n    // append title \n    const title = document.createElement(\"div\"); \n    title.classList.add(\"home-title\");\n    title.textContent = \"ABOUT ME\";\n\n    // append text \n    const description = document.createElement(\"div\"); \n    description.classList.add(\"about-me\"); \n    description.textContent = \"Hi, I am Grok! I am an avid traveller and blogger who fell in love with all of Earth's foods. You guys are totally incredible!\";\n\n    // append image\n    const grokImg = document.createElement(\"img\"); \n    grokImg.classList.add(\"img-me\"); \n    grokImg.src = _images_alien_jpg__WEBPACK_IMPORTED_MODULE_0__; \n    \n    content.append(title, description, grokImg);\n}\n\n\n\n//# sourceURL=webpack://project-restaurant/./src/aboutPage.js?\n}");

/***/ },

/***/ "./src/clearPage.js"
/*!**************************!*\
  !*** ./src/clearPage.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearPage: () => (/* binding */ clearPage)\n/* harmony export */ });\nconst clearPage = function() { \n    const content = document.querySelector(\".content\"); \n    while (content.firstChild) {\n        content.removeChild(content.lastChild);\n    }\n}\n\n \n\n//# sourceURL=webpack://project-restaurant/./src/clearPage.js?\n}");

/***/ },

/***/ "./src/foodPage.js"
/*!*************************!*\
  !*** ./src/foodPage.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   foodPage: () => (/* binding */ foodPage)\n/* harmony export */ });\n/* harmony import */ var _images_china_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/china.jpg */ \"./src/images/china.jpg\");\n/* harmony import */ var _images_france_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/france.jpg */ \"./src/images/france.jpg\");\n/* harmony import */ var _images_south_africa_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/south-africa.png */ \"./src/images/south-africa.png\");\n/* harmony import */ var _images_spain_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/spain.jpg */ \"./src/images/spain.jpg\");\n/* harmony import */ var _images_sri_lanka_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/sri lanka.jpg */ \"./src/images/sri lanka.jpg\");\n/* harmony import */ var _images_ukraine_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/ukraine.jpg */ \"./src/images/ukraine.jpg\");\n/* harmony import */ var _images_usa_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/usa.jpg */ \"./src/images/usa.jpg\");\n/* harmony import */ var _images_bobotie_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/bobotie.jpg */ \"./src/images/bobotie.jpg\");\n/* harmony import */ var _images_borscht_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/borscht.jpg */ \"./src/images/borscht.jpg\");\n/* harmony import */ var _images_gazpacho_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/gazpacho.jpg */ \"./src/images/gazpacho.jpg\");\n/* harmony import */ var _images_jambalaya_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/jambalaya.jpg */ \"./src/images/jambalaya.jpg\");\n/* harmony import */ var _images_mapo_tofu_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/mapo tofu.jpg */ \"./src/images/mapo tofu.jpg\");\n/* harmony import */ var _images_nicoise_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/nicoise.jpg */ \"./src/images/nicoise.jpg\");\n/* harmony import */ var _images_watalappan_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/watalappan.jpeg */ \"./src/images/watalappan.jpeg\");\n// import { allCourses as courses} from \"./courses.js\";\n \n \n \n \n \n \n \n\n\n\n\n\n\n\n \n\n\nlet allCourses = []; \nclass Course {\n    constructor(course, description, price, flag, photo, type) {\n        this.course = course.toUpperCase(); \n        this.description = description; \n        this.price = price; \n        this.flag = flag; \n        this.photo = photo;\n        this.type = type; \n\n        this.addCourse(); \n    }\n\n    addCourse() {\n        allCourses.push(this);\n    }\n\n    createCard() {\n        const courseType = document.querySelector(\".\" + this.type);\n    \n        // append card element \n        const card = document.createElement(\"div\"); \n        card.classList.add(\"card\"); \n        courseType.after(card); \n\n\n        // append left div and right photo \n        const left = document.createElement(\"div\");\n        const photo = document.createElement(\"img\"); \n        photo.classList.add(\"img-dish\"); \n        photo.src = this.photo;                             // course photo\n        card.append(left, photo); \n\n\n        // append header and description  \n        const top = document.createElement(\"div\"); \n        top.classList.add(\"top\");\n        const description = document.createElement(\"div\");\n        description.classList.add(\"description\"); \n        description.textContent = this.description;         // course description \n        left.append(top, description); \n\n\n        // append flag, dish and price to header \n        const country = document.createElement(\"img\"); \n        country.classList.add(\"flag\"); \n        country.src = this.flag;                            // course flag  \n        const dish = document.createElement(\"div\"); \n        dish.classList.add(\"dish\"); \n        dish.textContent = this.course;                     // course name \n        const price = document.createElement(\"div\"); \n        price.classList.add(\"price\"); \n        price.textContent = this.price;                     // course price \n        top.append(country, dish, price); \n    }\n}\n\n\nconst mapoTofu = new Course (\n    \"MAPO TOFU\", \n    \"Minced meat and tofu cooked in a spicy blend of chilli peppers, spicy bean paste and Sichuan peppers.\", \n    \"£12\", \n    _images_china_jpg__WEBPACK_IMPORTED_MODULE_0__, \n    _images_mapo_tofu_jpg__WEBPACK_IMPORTED_MODULE_11__, \n    \"main\"\n);\n\nconst nicoise = new Course (\n    \"SALADE nicoise\", \n    \"Salad of tomatoes, cucumber, lettuce, boiled eggs, tuna and a classic vinaigrette.\", \n    \"£6.50\", \n    _images_france_jpg__WEBPACK_IMPORTED_MODULE_1__, \n    _images_nicoise_jpg__WEBPACK_IMPORTED_MODULE_12__, \n    \"starter\"\n); \n\nconst bobotie = new Course (\n    \"BOBOTIE\", \n    \"Minced beef cooked in fragrant masala spices and turmeric, then baked in a milk and egg custard.\", \n    \"£15\", \n    _images_south_africa_png__WEBPACK_IMPORTED_MODULE_2__, \n    _images_bobotie_jpg__WEBPACK_IMPORTED_MODULE_7__, \n    \"main\"\n); \n\nconst gazpacho = new Course (\n    \"GAZPACHO\", \n    \"A refreshing cold tomato soup.\", \n    \"£6\", \n    _images_spain_jpg__WEBPACK_IMPORTED_MODULE_3__, \n    _images_gazpacho_jpg__WEBPACK_IMPORTED_MODULE_9__, \n    \"soup\"\n); \n\nconst watalappan = new Course (\n    \"WATALAPPAN\", \n    \"Fragrant steamed pudding made of coconut milk and winter spices, garnished with syrup and chopped peanuts.\", \n    \"£6.50\", \n    _images_sri_lanka_jpg__WEBPACK_IMPORTED_MODULE_4__, \n    _images_watalappan_jpeg__WEBPACK_IMPORTED_MODULE_13__, \n    \"dessert\"\n); \n\nconst borscht = new Course (\n    \"BORSCHT\", \n    \"Hearty beetroot soup, served with sour cream.\", \n    \"£6.50\", \n    _images_ukraine_jpg__WEBPACK_IMPORTED_MODULE_5__, \n    _images_borscht_jpg__WEBPACK_IMPORTED_MODULE_8__, \n    \"soup\"\n); \n\nconst jambalaya = new Course (\n    \"JAMBALAYA\", \n    \"Classic cajun dish filled with mixed proteins and vegetables stewed in tomato sauce and cajun spices.\", \n    \"£15\", \n    _images_usa_jpg__WEBPACK_IMPORTED_MODULE_6__, \n    _images_jambalaya_jpg__WEBPACK_IMPORTED_MODULE_10__, \n    \"main\"\n); \n\n\n\nconst foodPage = function() {\n    const content = document.querySelector(\".content\"); \n\n    // create type titles \n    const starter = document.createElement('div'); \n    starter.classList.add(\"type\", \"starter\");\n    starter.textContent = \"STARTERS\"; \n\n    const soup = document.createElement('div'); \n    soup.classList.add(\"type\", \"soup\");\n    soup.textContent = \"SOUPS\"; \n\n    const main = document.createElement('div'); \n    main.classList.add(\"type\", \"main\");\n    main.textContent = \"MAINS\"; \n\n    const dessert = document.createElement('div'); \n    dessert.classList.add(\"type\", \"dessert\");\n    dessert.textContent = \"DESSERTS\"; \n\n    content.append(starter, soup, main, dessert);\n\n    // append courses \n    for (let course of allCourses) {\n        course.createCard();\n    }\n}\n\n \n\n//# sourceURL=webpack://project-restaurant/./src/foodPage.js?\n}");

/***/ },

/***/ "./src/homePage.js"
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _images_earth_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/earth.jpg */ \"./src/images/earth.jpg\");\n \n\nconst homePage = function() {\n    const content = document.querySelector(\".content\"); \n\n    const title = document.createElement(\"div\");\n    title.classList.add(\"home-title\"); \n    title.innerText = \"ICONIC DISHES \\n FROM PLANET EARTH\";\n\n    const imgHome = document.createElement(\"img\"); \n    imgHome.classList.add(\"img-home\");\n    imgHome.src = _images_earth_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    const welcome = document.createElement(\"div\"); \n    welcome.classList.add(\"home-text\"); \n    welcome.textContent = \"Welcome to Benji's restaurant full of food from planet Earth! Here you can find some the most iconic dishes from countries all over the world. Bon appetit!\";\n\n    content.appendChild(title);\n    content.appendChild(imgHome); \n    content.appendChild(welcome); \n}\n\n\n\n//# sourceURL=webpack://project-restaurant/./src/homePage.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _foodPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foodPage.js */ \"./src/foodPage.js\");\n/* harmony import */ var _aboutPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutPage.js */ \"./src/aboutPage.js\");\n/* harmony import */ var _clearPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clearPage.js */ \"./src/clearPage.js\");\n\n \n \n \n\n\n\n// eventlisteners \nconst homeButton = document.querySelector(\".button-home\");\nconst foodButton = document.querySelector(\".button-food\");\nconst contactButton = document.querySelector(\".button-contact\");\n\n\n// button events \nhomeButton.addEventListener(\"click\", () => {\n    homeButton.classList.add(\"active\");\n    foodButton.classList.remove(\"active\");\n    contactButton.classList.remove(\"active\");\n    (0,_clearPage_js__WEBPACK_IMPORTED_MODULE_4__.clearPage)(); \n    (0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__.homePage)();\n});\n\nfoodButton.addEventListener(\"click\", () => {\n    homeButton.classList.remove(\"active\");\n    foodButton.classList.add(\"active\");\n    contactButton.classList.remove(\"active\");\n    (0,_clearPage_js__WEBPACK_IMPORTED_MODULE_4__.clearPage)(); \n    (0,_foodPage_js__WEBPACK_IMPORTED_MODULE_2__.foodPage)();\n});\n\ncontactButton.addEventListener(\"click\", () => {\n    homeButton.classList.remove(\"active\");\n    foodButton.classList.remove(\"active\");\n    contactButton.classList.add(\"active\");\n    (0,_clearPage_js__WEBPACK_IMPORTED_MODULE_4__.clearPage)(); \n    (0,_aboutPage_js__WEBPACK_IMPORTED_MODULE_3__.aboutPage)();\n});\n\n\n// initial load \n(0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__.homePage)();\nhomeButton.classList.add(\"active\");\n\n\n//# sourceURL=webpack://project-restaurant/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;