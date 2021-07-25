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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: \\\"Courier New\\\", Courier, monospace;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: darkgray;\\r\\n}\\r\\n\\r\\n.flex-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.flex-list-item {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.full-width-container {\\r\\n  background-color: bisque;\\r\\n  width: 20%;\\r\\n  box-shadow:\\r\\n    0.15rem 0.15rem 0.4rem lightgray,\\r\\n    -0.15rem 0.15rem 0.4rem lightgray;\\r\\n}\\r\\n\\r\\n.full-width {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.input-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 0 1rem;\\r\\n  outline: 0.05rem solid lightgray;\\r\\n}\\r\\n\\r\\n.add-input {\\r\\n  background-color: transparent;\\r\\n  flex-grow: 2;\\r\\n  border: none;\\r\\n  padding: 1rem 0;\\r\\n}\\r\\n\\r\\n.edit-input {\\r\\n  flex-grow: 2;\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.edit-input:focus,\\r\\n.add-input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  border: #ddd solid;\\r\\n  border-width: 0.1rem 0;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.item-completed {\\r\\n  margin-right: 1rem;\\r\\n}\\r\\n\\r\\n.item-description {\\r\\n  flex-grow: 2;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n.drag-button {\\r\\n  padding: 0 0.5rem;\\r\\n  cursor: move;\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.drag-icon {\\r\\n  align-self: center;\\r\\n  pointer-events: none;\\r\\n  user-select: none;\\r\\n  height: 1rem;\\r\\n}\\r\\n\\r\\n.trash-button {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.trash-icon,\\r\\n.enter-icon {\\r\\n  pointer-events: none;\\r\\n  height: 1rem;\\r\\n  opacity: 0.5;\\r\\n}\\r\\n\\r\\n.clear-all-button {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  padding: 1rem 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.visible {\\r\\n  visibility: visible;\\r\\n}\\r\\n\\r\\n.enabled {\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n.disabled {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.complete {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.app-header {\\r\\n  font-size: 1.5rem;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .full-width-container {\\r\\n    width: 95%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (min-width: 769px) and (max-width: 1200px) {\\r\\n  .full-width-container {\\r\\n    width: 50%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (min-width: 1201px) and (max-width: 1600px) {\\r\\n  .full-width-container {\\r\\n    width: 30%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpackproject/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpackproject/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpackproject/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/completed.js":
/*!**************************!*\
  !*** ./src/completed.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CompletedTask)\n/* harmony export */ });\nclass CompletedTask {\n  static updateCompleted(taskList, index) {\n    const idx = parseInt(index, 10);\n    taskList.forEach((element) => {\n      if (element.index === idx) {\n        if (element.completed === true) {\n          element.completed = false;\n        } else if (element.completed === false) {\n          element.completed = true;\n        }\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack://webpackproject/./src/completed.js?");

/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Crud)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\n\nclass Crud {\n  static add(taskList, inputText, index) {\n    const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__.default(inputText, false, index);\n    taskList.push(newTask);\n  }\n\n  static delete(taskList, index) {\n    const idx = parseInt(index, 10);\n\n    taskList.splice(idx, 1);\n\n    for (let i = 0; i < taskList.length; i += 1) {\n      taskList[i].index = i;\n    }\n  }\n\n  static update(taskList, index, newDescription) {\n    const idx = parseInt(index, 10);\n\n    taskList[idx].description = newDescription;\n  }\n}\n\n//# sourceURL=webpack://webpackproject/./src/crud.js?");

/***/ }),

/***/ "./src/drag-drop.js":
/*!**************************!*\
  !*** ./src/drag-drop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DragDropTask)\n/* harmony export */ });\nclass DragDropTask {\n  static updateArray(taskList, srcIdx, trgtIdx) {\n    const source = parseInt(srcIdx, 10);\n    const target = parseInt(trgtIdx, 10);\n\n    const temp = taskList[target].index;\n\n    if (source < target) {\n      for (let i = source + 1; i <= target; i += 1) {\n        taskList[i].index -= 1;\n      }\n      taskList[source].index = temp;\n    }\n    if (source > target) {\n      for (let i = target; i < source; i += 1) {\n        taskList[i].index += 1;\n      }\n      taskList[source].index = temp;\n    }\n  }\n}\n\n//# sourceURL=webpack://webpackproject/./src/drag-drop.js?");

/***/ }),

/***/ "./src/drag-icon.svg":
/*!***************************!*\
  !*** ./src/drag-icon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e6a093d27163e2824d1.svg\";\n\n//# sourceURL=webpack://webpackproject/./src/drag-icon.svg?");

/***/ }),

/***/ "./src/enter-icon.png":
/*!****************************!*\
  !*** ./src/enter-icon.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7977b1e50d7fb4388d39.png\";\n\n//# sourceURL=webpack://webpackproject/./src/enter-icon.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _tasklist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasklist.js */ \"./src/tasklist.js\");\n\n\n\ndocument.getElementById('todo-list').appendChild(new _tasklist_js__WEBPACK_IMPORTED_MODULE_1__.default().taskListComponent);\n\n//# sourceURL=webpack://webpackproject/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\n\nclass Storage {\n  static saveToStorage(taskList) {\n    const stringList = JSON.stringify(taskList);\n    window.localStorage.setItem('tasklist', stringList);\n  }\n\n  static loadFromStorage(taskList) {\n    const data = window.localStorage.getItem('tasklist');\n\n    if (data !== null) {\n      const list = JSON.parse(data);\n      list.forEach((li) => {\n        taskList.push(li);\n      });\n    }\n  }\n}\n\n\n//# sourceURL=webpack://webpackproject/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    description = String;\n\n    completed = Boolean;\n\n    index = Number;\n\n    constructor(desc, comp, idx) {\n      this.description = desc;\n      this.completed = comp;\n      this.index = idx;\n    }\n}\n\n//# sourceURL=webpack://webpackproject/./src/task.js?");

/***/ }),

/***/ "./src/tasklist.js":
/*!*************************!*\
  !*** ./src/tasklist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskList)\n/* harmony export */ });\n/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completed.js */ \"./src/completed.js\");\n/* harmony import */ var _drag_drop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-drop.js */ \"./src/drag-drop.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud.js */ \"./src/crud.js\");\n/* harmony import */ var _enter_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enter-icon.png */ \"./src/enter-icon.png\");\n/* harmony import */ var _trash_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trash-icon.png */ \"./src/trash-icon.png\");\n/* harmony import */ var _drag_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drag-icon.svg */ \"./src/drag-icon.svg\");\n\n\n\n\n\n\n\n\nclass TaskList {\n    static taskList = [];\n\n    static itemID = Number;\n\n    static taskListContainer;\n\n    static listInput;\n\n    constructor() {\n      TaskList.itemID = 0;\n\n      _storage_js__WEBPACK_IMPORTED_MODULE_2__.default.loadFromStorage(TaskList.taskList);\n\n      document.getElementById('enter-icon').src = _enter_icon_png__WEBPACK_IMPORTED_MODULE_4__;\n\n      TaskList.listInput = document.getElementById('add-todo');\n      TaskList.listInput.addEventListener('keyup', TaskList.addItemToList);\n\n      TaskList.taskListContainer = document.createElement('div');\n\n      TaskList.updateList();\n    }\n\n    static updateTaskComplete(event) {\n      const checkbox = event.currentTarget;\n      const listContainer = checkbox.parentElement;\n\n      if (checkbox.checked === true) {\n        checkbox.nextSibling.classList.add('complete');\n      } else if (checkbox.checked === false) {\n        checkbox.nextSibling.classList.remove('complete');\n      }\n\n      _completed_js__WEBPACK_IMPORTED_MODULE_0__.default.updateCompleted(TaskList.taskList, listContainer.id);\n\n      _storage_js__WEBPACK_IMPORTED_MODULE_2__.default.saveToStorage(TaskList.taskList);\n    }\n\n    static onDragStart(event) {\n      const item = event.currentTarget;\n      item.classList.add('dragged');\n      event.dataTransfer.setData('text/plain', item.id);\n      setTimeout(() => {\n        item.classList.remove('visible');\n        item.classList.add('hidden');\n      }, 0);\n    }\n\n    static onDragOver(event) {\n      event.preventDefault();\n    }\n\n    static onDragEnd(event) {\n      const item = event.currentTarget;\n      item.classList.remove('hidden');\n      item.classList.add('visible');\n    }\n\n    static onDrop(event) {\n      const sourceIndex = event.dataTransfer.getData('text');\n      const targetIndex = event.currentTarget.id;\n\n      _drag_drop_js__WEBPACK_IMPORTED_MODULE_1__.default.updateArray(TaskList.taskList, sourceIndex, targetIndex);\n\n      TaskList.updateList();\n\n      _storage_js__WEBPACK_IMPORTED_MODULE_2__.default.saveToStorage(TaskList.taskList);\n    }\n\n    static changeToDrag(event) {\n      const itemToDrag = event.currentTarget.parentElement;\n\n      itemToDrag.draggable = true;\n\n      itemToDrag.addEventListener('dragstart', TaskList.onDragStart);\n      itemToDrag.addEventListener('dragend', TaskList.onDragEnd);\n    }\n\n    static changeToNoDrag(event) {\n      const itemNoDrag = event.currentTarget.parentElement;\n\n      itemNoDrag.draggable = false;\n\n      itemNoDrag.removeEventListener('dragstart', TaskList.onDragStart);\n      itemNoDrag.removeEventListener('dragend', TaskList.onDragEnd);\n    }\n\n    static addItemToList(event) {\n      if (event.key === 'Enter') {\n        const inputText = event.currentTarget;\n        const textValue = inputText.value;\n\n        _crud_js__WEBPACK_IMPORTED_MODULE_3__.default.add(TaskList.taskList, textValue, TaskList.itemID);\n        TaskList.itemID += 1;\n\n        inputText.value = '';\n\n        _storage_js__WEBPACK_IMPORTED_MODULE_2__.default.saveToStorage(TaskList.taskList);\n\n        TaskList.updateList();\n      }\n    }\n\n    static editItem(event) {\n      const listItemChildren = event.currentTarget.parentElement.children;\n\n      for (let i = 1; i < listItemChildren.length; i += 1) {\n        if (i < 3) {\n          listItemChildren[i].classList.remove('enabled');\n          listItemChildren[i].classList.add('disabled');\n        } else {\n          listItemChildren[i].classList.remove('disabled');\n          listItemChildren[i].classList.add('enabled');\n        }\n      }\n      listItemChildren[3].focus();\n    }\n\n    static cancelEdit(event) {\n      const listItemChildren = event.currentTarget.parentElement.children;\n\n      setTimeout(() => {\n        for (let i = 1; i < listItemChildren.length; i += 1) {\n          if (i < 3) {\n            listItemChildren[i].classList.remove('disabled');\n            listItemChildren[i].classList.add('enabled');\n          } else {\n            listItemChildren[i].classList.remove('enabled');\n            listItemChildren[i].classList.add('disabled');\n          }\n        }\n      }, 100);\n      listItemChildren[3].value = '';\n    }\n\n    static UpdateItem(event) {\n      if (event.key === 'Enter') {\n        const inputEdit = event.currentTarget;\n        const itemLabel = inputEdit.parentElement.children[1];\n        itemLabel.innerText = inputEdit.value;\n        TaskList.cancelEdit(event);\n\n        _crud_js__WEBPACK_IMPORTED_MODULE_3__.default.update(TaskList.taskList, inputEdit.parentElement.id, itemLabel.innerText);\n\n        _storage_js__WEBPACK_IMPORTED_MODULE_2__.default.saveToStorage(TaskList.taskList);\n      }\n    }\n\n    static removeItem(event) {\n      const taskItem = event.currentTarget.parentElement;\n\n      _crud_js__WEBPACK_IMPORTED_MODULE_3__.default.delete(TaskList.taskList, taskItem.id);\n\n      _storage_js__WEBPACK_IMPORTED_MODULE_2__.default.saveToStorage(TaskList.taskList);\n\n      TaskList.updateList();\n      TaskList.itemID -= 1;\n    }\n\n    static clearCompleted() {\n      TaskList.taskList = TaskList.taskList.filter((task) => task.completed === false);\n\n      for (let i = 0; i < TaskList.taskList.length; i += 1) {\n        TaskList.taskList[i].index = i;\n      }\n\n      TaskList.itemID = TaskList.taskList.length;\n\n      _storage_js__WEBPACK_IMPORTED_MODULE_2__.default.saveToStorage(TaskList.taskList);\n      TaskList.updateList();\n    }\n\n    /* eslint-disable */\n    get taskListComponent() {\n      return TaskList.taskListContainer;\n    }\n    /* eslint-enable */\n\n    static updateList() {\n      TaskList.taskList.sort((a, b) => a.index - b.index);\n\n      TaskList.taskListContainer.innerHTML = '';\n\n      TaskList.taskList.forEach((task) => {\n        // List Item Container\n        const listItem = document.createElement('div');\n        listItem.classList.add('list-item');\n        listItem.classList.add('flex-list-item');\n        listItem.id = task.index;\n\n        // Item Completed Checkbox\n        const itemCompleted = document.createElement('input');\n        itemCompleted.type = 'checkbox';\n        itemCompleted.checked = task.completed;\n        itemCompleted.classList.add('item-completed');\n        itemCompleted.addEventListener('change', TaskList.updateTaskComplete);\n\n        // Item Description\n        const itemDescription = document.createElement('label');\n        itemDescription.innerText = task.description;\n        itemDescription.classList.add('item-description');\n        itemDescription.addEventListener('click', TaskList.editItem);\n\n        // Drag Button\n        const dragButton = document.createElement('button');\n        dragButton.type = 'button';\n\n        const itemIcon = document.createElement('img');\n        itemIcon.classList.add('drag-icon');\n        itemIcon.src = _drag_icon_svg__WEBPACK_IMPORTED_MODULE_6__;\n\n        dragButton.appendChild(itemIcon);\n        dragButton.classList.add('drag-button');\n        dragButton.classList.add('flex-list-item');\n\n        dragButton.addEventListener('mouseover', TaskList.changeToDrag);\n        dragButton.addEventListener('mouseleave', TaskList.changeToNoDrag);\n\n        // Edit Input Field\n        const editInput = document.createElement('input');\n        editInput.type = 'text';\n        editInput.classList.add('edit-input');\n        editInput.classList.add('disabled');\n\n        editInput.addEventListener('focusout', TaskList.cancelEdit);\n        editInput.addEventListener('keyup', TaskList.UpdateItem);\n\n        // Delete Button\n        const trashIcon = document.createElement('img');\n        trashIcon.src = _trash_icon_png__WEBPACK_IMPORTED_MODULE_5__;\n        trashIcon.classList.add('trash-icon');\n\n        const trashButton = document.createElement('button');\n        trashButton.classList.add('trash-button');\n        trashButton.appendChild(trashIcon);\n        trashButton.classList.add('disabled');\n        trashButton.type = 'button';\n\n        trashButton.addEventListener('click', TaskList.removeItem);\n\n        // Adding Everything Together\n        listItem.addEventListener('drop', TaskList.onDrop);\n        listItem.addEventListener('dragover', TaskList.onDragOver);\n\n        listItem.appendChild(itemCompleted);\n        listItem.appendChild(itemDescription);\n        listItem.appendChild(dragButton);\n        listItem.appendChild(editInput);\n        listItem.appendChild(trashButton);\n        TaskList.taskListContainer.appendChild(listItem);\n      });\n      const clearAllButton = document.createElement('button');\n      clearAllButton.classList.add('clear-all-button');\n      clearAllButton.innerText = 'Clear all completed';\n      clearAllButton.type = 'button';\n      clearAllButton.addEventListener('click', TaskList.clearCompleted);\n      TaskList.taskListContainer.appendChild(clearAllButton);\n    }\n}\n\n//# sourceURL=webpack://webpackproject/./src/tasklist.js?");

/***/ }),

/***/ "./src/trash-icon.png":
/*!****************************!*\
  !*** ./src/trash-icon.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"01cd387f45bff77baa4f.png\";\n\n//# sourceURL=webpack://webpackproject/./src/trash-icon.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;