(self["webpackChunktdd_battleship"] = self["webpackChunktdd_battleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/Anta-Regular.ttf */ "./src/fonts/Anta-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/aircraft-carrier.png */ "./src/images/aircraft-carrier.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/battleship.png */ "./src/images/battleship.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/destroyer.png */ "./src/images/destroyer.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/submarine.png */ "./src/images/submarine.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/patrol-boat.png */ "./src/images/patrol-boat.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: anta;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
    background-image: linear-gradient(#1d628a, #0e0445);
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    margin: 0px;
    font-family: anta;
    text-shadow: 0px 0px 6px rgba(0,0,0,0.6);
}

a {
    color: white;
    text-decoration: inherit;
}

a:hover {
    text-decoration: underline;
}

.header {
    width: 100vw;
    text-align: center;
    padding-top: 20px;
    font-size: 3rem;
}

.footer {
    width: 100vw;
    text-align: center;
    padding-bottom: 10px;
    font-size: 1rem;
}

.game-area {
    padding-top: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
}

.frame {
    width: 30rem;
    height: 45rem;
    border-radius: 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.464);
}

.friendly-frame {
    margin-right: 20px;
}

.frame.highlight-frame {
    background-image: linear-gradient(to top right, #1e21217b, #4a4a6056);
}

.board-title {
    text-align: center;
    padding-top: 10px;
    font-size: 1.5rem;
}

.grid {
    box-sizing: border-box;
    border: 2px solid rgb(255, 255, 255);
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.464);
    height: 28rem;
    width: 28rem;
    margin-top: 10px;
    border-radius: 5px;
    padding-bottom: 2px;
}

.grid-row {
    width: 100%;
    height: 10%;
    display: flex;
}

.cell {
    height: 100%;
    width: 10%;
    border: 0.5px solid grey;
    border-radius: 5px;
}

.controls-dialogue {
    display: flex;
    height: 2rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: bold;
    vertical-align: bottom;
}

.placement-options-container {
    height: 10%;
    width: calc(28rem + 4px); /* account for grid border width */
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.placement-button {
    width: 30%;
    height: 60%;
    font-weight: 500;
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid #02c554;
    color: #02c554;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.placement-button:hover {
    background-color: #02c554;
    color: #fff;
  }

.status-container {
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 6.5rem;
    align-items: center;
}

.ship-status {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 20%;
    height: 80%;
}

.red-filter {
    filter: brightness(0) saturate(100%) invert(11%) sepia(99%) saturate(4723%) hue-rotate(334deg) brightness(105%) contrast(108%);
}

    .flashing-icon {
        animation: flashing 1s infinite;
    }
    
    @keyframes flashing {
        0% {
          filter: opacity(0%);
        }
        50% {
          filter: opacity(50%);
        }
        100% {
          filter: opacity(100%);
        }
    }

.carrier-status {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-size: contain;
}

.battleship-status {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-repeat: no-repeat;
    background-size: contain;
}

.destroyer-status {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-repeat: no-repeat;
    background-size: 5rem 5rem;
}

.submarine-status {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-repeat: no-repeat;
    background-size: 5rem 5rem;
}

.patrol-boat-status {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-repeat: no-repeat;
    background-size: contain;
}

.enemy-cell:hover {
    background-color: grey;
    cursor: pointer;
}

.miss {
    background-image: linear-gradient(#238cc8, #3561cf);
}

.enemy-hit {
    background-image: linear-gradient(to bottom right, #e37e3b, #e01e1e);
}

.ship {
    background-image: linear-gradient(rgb(44, 213, 32), #65a739)
}
/* Maintain friendly-hit's priority over .ship styles */
.friendly-hit {
    background-image: linear-gradient(to bottom right, #e37e3b, #e01e1e);
}

.hover-placement {
    background-image: linear-gradient(rgba(39, 172, 29, 0.46), #65a73974);
}

.game-over-screen {
    position: absolute;
    display: none;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.459);
    justify-content: center;
    align-items: center;
}

.game-over-dialogue {
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.788);
    border-radius: 1.1rem;;
    font-size: 18px;
    font-weight: 700;
    width: 30rem;
    height: 20rem;
}

.reset-game {
    width: 10rem;
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    background: #4aad08cb;
    color: #FFFFFF;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
    padding: 14px 24px 16px;
    line-height: 1;
    transition: transform 200ms;

}

.reset-game:hover{
    transform: translateY(-3px);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: anta;\n    src: url(../src/fonts/Anta-Regular.ttf);\n}\n\nbody {\n    background-image: linear-gradient(#1d628a, #0e0445);\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    justify-content: space-between;\n    margin: 0px;\n    font-family: anta;\n    text-shadow: 0px 0px 6px rgba(0,0,0,0.6);\n}\n\na {\n    color: white;\n    text-decoration: inherit;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n.header {\n    width: 100vw;\n    text-align: center;\n    padding-top: 20px;\n    font-size: 3rem;\n}\n\n.footer {\n    width: 100vw;\n    text-align: center;\n    padding-bottom: 10px;\n    font-size: 1rem;\n}\n\n.game-area {\n    padding-top: 60px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.frame {\n    width: 30rem;\n    height: 45rem;\n    border-radius: 1.1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.464);\n}\n\n.friendly-frame {\n    margin-right: 20px;\n}\n\n.frame.highlight-frame {\n    background-image: linear-gradient(to top right, #1e21217b, #4a4a6056);\n}\n\n.board-title {\n    text-align: center;\n    padding-top: 10px;\n    font-size: 1.5rem;\n}\n\n.grid {\n    box-sizing: border-box;\n    border: 2px solid rgb(255, 255, 255);\n    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.464);\n    height: 28rem;\n    width: 28rem;\n    margin-top: 10px;\n    border-radius: 5px;\n    padding-bottom: 2px;\n}\n\n.grid-row {\n    width: 100%;\n    height: 10%;\n    display: flex;\n}\n\n.cell {\n    height: 100%;\n    width: 10%;\n    border: 0.5px solid grey;\n    border-radius: 5px;\n}\n\n.controls-dialogue {\n    display: flex;\n    height: 2rem;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.25rem;\n    font-weight: bold;\n    vertical-align: bottom;\n}\n\n.placement-options-container {\n    height: 10%;\n    width: calc(28rem + 4px); /* account for grid border width */\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.placement-button {\n    width: 30%;\n    height: 60%;\n    font-weight: 500;\n    display: inline-block;\n    padding: 10px 20px;\n    font-size: 16px;\n    text-align: center;\n    text-decoration: none;\n    cursor: pointer;\n    border: 2px solid #02c554;\n    color: #02c554;\n    border-radius: 5px;\n    transition: background-color 0.3s ease;\n}\n\n.placement-button:hover {\n    background-color: #02c554;\n    color: #fff;\n  }\n\n.status-container {\n    display: flex;\n    flex-direction: row;\n    width: 90%;\n    height: 6.5rem;\n    align-items: center;\n}\n\n.ship-status {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    width: 20%;\n    height: 80%;\n}\n\n.red-filter {\n    filter: brightness(0) saturate(100%) invert(11%) sepia(99%) saturate(4723%) hue-rotate(334deg) brightness(105%) contrast(108%);\n}\n\n    .flashing-icon {\n        animation: flashing 1s infinite;\n    }\n    \n    @keyframes flashing {\n        0% {\n          filter: opacity(0%);\n        }\n        50% {\n          filter: opacity(50%);\n        }\n        100% {\n          filter: opacity(100%);\n        }\n    }\n\n.carrier-status {\n    background-image: url(./images/aircraft-carrier.png);\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n.battleship-status {\n    background-image: url(./images/battleship.png);\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n.destroyer-status {\n    background-image: url(./images/destroyer.png);\n    background-repeat: no-repeat;\n    background-size: 5rem 5rem;\n}\n\n.submarine-status {\n    background-image: url(./images/submarine.png);\n    background-repeat: no-repeat;\n    background-size: 5rem 5rem;\n}\n\n.patrol-boat-status {\n    background-image: url(./images/patrol-boat.png);\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n.enemy-cell:hover {\n    background-color: grey;\n    cursor: pointer;\n}\n\n.miss {\n    background-image: linear-gradient(#238cc8, #3561cf);\n}\n\n.enemy-hit {\n    background-image: linear-gradient(to bottom right, #e37e3b, #e01e1e);\n}\n\n.ship {\n    background-image: linear-gradient(rgb(44, 213, 32), #65a739)\n}\n/* Maintain friendly-hit's priority over .ship styles */\n.friendly-hit {\n    background-image: linear-gradient(to bottom right, #e37e3b, #e01e1e);\n}\n\n.hover-placement {\n    background-image: linear-gradient(rgba(39, 172, 29, 0.46), #65a73974);\n}\n\n.game-over-screen {\n    position: absolute;\n    display: none;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.459);\n    justify-content: center;\n    align-items: center;\n}\n\n.game-over-dialogue {\n    display: flex; \n    justify-content: space-evenly;\n    align-items: center;\n    text-align: center;\n    flex-direction: column;\n    background-color: rgba(0, 0, 0, 0.788);\n    border-radius: 1.1rem;;\n    font-size: 18px;\n    font-weight: 700;\n    width: 30rem;\n    height: 20rem;\n}\n\n.reset-game {\n    width: 10rem;\n    display: inline-block;\n    outline: 0;\n    border: 0;\n    cursor: pointer;\n    background: #4aad08cb;\n    color: #FFFFFF;\n    border-radius: 8px;\n    font-size: 18px;\n    font-weight: 700;\n    padding: 14px 24px 16px;\n    line-height: 1;\n    transition: transform 200ms;\n\n}\n\n.reset-game:hover{\n    transform: translateY(-3px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/template.html":
/*!***************************!*\
  !*** ./src/template.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/index.js */ "./src/index.js?dfde"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Battleship!</title>\n</head>\n<body>\n    <div class=\"header\">\n        <div class=\"page-title\">BATTLESHIP</div>\n    </div>\n    <div class=\"game-area\">\n        <div class=\"frame friendly-frame\">\n            <div class=\"board-title friendly-title\">FRIENDLY SEAS</div>\n            <div class=\"grid friendly-grid\"></div>\n            <div class=\"status-container\">\n                <div class=\"ship-status friendly-carrier carrier-status\"></div>\n                <div class=\"ship-status friendly-battleship battleship-status\"></div>\n                <div class=\"ship-status friendly-destroyer destroyer-status\"></div>\n                <div class=\"ship-status friendly-submarine submarine-status\"></div>\n                <div class=\"ship-status friendly-patrol patrol-boat-status\"></div>\n            </div>\n            <div class=\"controls-dialogue\"></div>\n            <div class=\"placement-options-container friendly-placement\">\n                <button class=\"placement-button randomize-placement\">RANDOMIZE</button>\n                <button class=\"placement-button reset-placement\">RESET</button>\n                <button class=\"placement-button confirm-placement\">CONFIRM</button>\n            </div>\n        </div>\n        <div class=\"frame enemy-frame highlight-frame\">\n            <div class=\"board-title enemy-title\">ENEMY SEAS</div>\n            <div class=\"grid enemy-grid\"></div>\n            <div class=\"status-container\">\n                <div class=\"ship-status enemy-carrier carrier-status\"></div>\n                <div class=\"ship-status enemy-battleship battleship-status\"></div>\n                <div class=\"ship-status enemy-destroyer destroyer-status\"></div>\n                <div class=\"ship-status enemy-submarine submarine-status\"></div>\n                <div class=\"ship-status enemy-patrol patrol-boat-status\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"game-over-screen\">\n        <div class=\"game-over-dialogue\">\n            <div class=\"game-over-title\">Game Over</div>\n            <div class=\"game-over-text\"></div>\n            <button class=\"reset-game\">Reset Game</button>\n        </div>\n    </div>\n    <a href=\"https://github.com/Frobii/tdd-battleship\" class=\"footer\">source code</a>\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"><" + "/script>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__(/*! ../src/ship.js */ "./src/ship.js");

const gameboard = () => {
    let misses = [];
    let hits = [];
    let ships = [];

    const playArea = () => {
        let playArea = new Array(10);
        for (let i = 0; i < 10; i += 1) {
            playArea[i] = new Array(10)
        };
        return playArea;
    };

    const placeShip = (ship, playArea, startPos, orientation) => {
        [x,y] = startPos;
        shipLength = ship.length;

        let errorMessage = null; 

        if (orientation === 'h') {
            if (x + shipLength > 10) {
                return "Ship placement out of bounds!"
            };
            for (i = 0; i < shipLength; i += 1) {
                if (playArea[x + i][y] != undefined) { // check chosen positions for other ships
                    errorMessage =  'Cannot place ships over others!'
                };
            };
            if (errorMessage) {
                return errorMessage;
            };
            for (i = 0; i < shipLength; i += 1) {
                playArea[x + i][y] = ship  // Placing the ship horizontally
            };
        } else if (orientation === 'v')  { 
            if (y + shipLength > 10) {
                return  "Ship placement out of bounds!"
            };
            for (i = 0; i < shipLength; i += 1) {
                if (playArea[x][y + i] != undefined) {
                    errorMessage =  'Cannot place ships over others!'
                };
            };
            if (errorMessage) {
                return errorMessage;
            };
            for (i = 0; i < shipLength; i += 1) {
                playArea[x][y + i] = ship // Placing the ship vertically
            };
        };
        ships.push(ship);
    };
    
    const placeShipsAtRandom = (playArea, gameboard) => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        };
        
        const getRandomOrientation = () => {
            let randomDecimal = Math.random();
            let randomNumber = Math.round(randomDecimal);
            if (randomNumber === 1) {
                return 'h'
            } else {
                return 'v'
            };
        };
    
        const getRandomCoords = (placedCoords, ship, orientation) => {
            let x = getRandomInt(10);
            let y = getRandomInt(10);
            let coordinates = [x,y];
            let shipLength = ship.length;

            // Get the coordinates the ship will take up if placed
            // i.e. a battleship has a length of 4 so it has 4 placement coordinates
            const getPlacementCoordinates = (coordinates, shipLength, orientation) => {
                let shipPlacementCoords = [];
                for (let i = 0; i < shipLength; i += 1) {
                    let newCoordinates = coordinates.slice();
                    if (orientation === 'h') {
                        newCoordinates[0] += i
                    } else if (orientation === 'v') {
                        newCoordinates[1] += i
                    };
                    shipPlacementCoords.push(newCoordinates);
                };
                return shipPlacementCoords;
            };
            
            // Check the potential placement coordinates against the ones which are already placed
            const arraysContainCommonCoordinates = (array1, array2) => {
                for (let i = 0; i < array1.length; i++) {
                    for (let j = 0; j < array2.length; j++) {
                        if (array1[i][0] === array2[j][0] && array1[i][1] === array2[j][1]) {
                            return true;
                        };
                    };
                };
                return false;
            };
        
            const placementOutOfBounds = (coordinates, orientation, shipLength) => {
                let xReach = coordinates[0] + shipLength - 1;
                let yReach = coordinates[1] + shipLength - 1;
                if (orientation === 'h' && xReach > 9 ) {
                    return true;
                } else if (orientation === 'v' && yReach > 9) {
                    return true;
                };
                return false;
            };

            // Get the first set of placement coordinates for validation
            let shipPlacementCoords = getPlacementCoordinates(coordinates, shipLength, orientation);

            // Randomize coordinates to find a placement which hasn't been made and is within bounds
            while (
                arraysContainCommonCoordinates(shipPlacementCoords, placedCoords) ||
                placementOutOfBounds(coordinates, orientation, shipLength)
            ) {
                let x = getRandomInt(10);
                let y = getRandomInt(10);
                coordinates = [x,y];
                shipPlacementCoords = getPlacementCoordinates(coordinates, shipLength, orientation);
            };

            // Store the coordinates this ship is taking up so future ships can't be placed there
            shipPlacementCoords.forEach((coordinates) => {
                placedCoords.push(coordinates);
            });

            return coordinates
        };

        let carrier = ship(5, 'carrier');
        let battleship = ship(4, 'battleship');
        let destroyer = ship(3,'destroyer');
        let submarine = ship(3, 'submarine');
        let patrolBoat = ship(2, 'patrol-boat');
        let ships = [carrier, battleship, destroyer, submarine, patrolBoat];
        let placedCoords = [];

        ships.forEach((ship) => {
            let orientation =  getRandomOrientation();
            let startPos = getRandomCoords(placedCoords, ship, orientation);
            gameboard.placeShip(ship, playArea, startPos, orientation);
        });
    };

    const receiveAttack = (coordinates, playArea) => {
        [x,y] = coordinates;

        for (const miss of misses) { // check the misses for a duplicate shot
            if (miss.every((val, index) => val === coordinates[index])) {
                return false; 
            };
        };

        for (const hit of hits) { // check the hits for a duplicate shot
            if (hit.every((val, index) => val === coordinates[index])) {
                return false; 
            };
        };

        if (playArea[x][y] != undefined) {
            hits.push(coordinates);
            playArea[x][y].hit();
            return 'hit';
        } else {
            misses.push(coordinates);
            return 'miss';
        };
    };

    const allSunk = () => {
        const lastIndex = ships.length - 1;

        for (const ship of ships) {
            if (!ship.isSunk()) {
                return false;
            };
            if (ship === ships[lastIndex] && ship.isSunk()) {
                return true;
            };
        };
    };

    return {
        playArea,
        placeShip,
        placeShipsAtRandom,
        receiveAttack,
        allSunk,
        misses,
        hits,
        ships,
    }
};

module.exports = gameboard;

/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameboard = __webpack_require__(/*! ../src/gameboard.js */ "./src/gameboard.js");
const player = __webpack_require__(/*! ../src/player.js */ "./src/player.js");
const paintBoard = __webpack_require__(/*! ../src/paintBoard.js */ "./src/paintBoard.js");
const ship = __webpack_require__(/*! ../src/ship.js */ "./src/ship.js");

const gameloop = () => {
    const p1 = player();
    let p1Board = gameboard();
    let p1PlayArea = p1Board.playArea();

    const cpu = player();
    let cpuBoard = gameboard();
    let cpuPlayArea = cpuBoard.playArea();

    const paintDOM = paintBoard();

    const gameOverScreen = document.querySelector('.game-over-screen');
    const gameOverText = document.querySelector('.game-over-text');
    const randomizeButton = document.querySelector('.randomize-placement');
    const resetPlacementButton = document.querySelector('.reset-placement');
    const confirmButton = document.querySelector('.confirm-placement');
    const resetGameButton = document.querySelector('.reset-game');
    const bothFrames = document.querySelectorAll('.frame');
    const enemyFrame = document.querySelector('.enemy-frame');
    const controlsDialogue = document.querySelector('.controls-dialogue');
    const placementOptions = document.querySelector('.placement-options-container');

    const carrierIcon = document.querySelector('.friendly-carrier');
    const battleshipIcon = document.querySelector('.friendly-battleship');
    const destroyerIcon = document.querySelector('.friendly-destroyer');
    const submarineIcon = document.querySelector('.friendly-submarine');
    const patrolIcon = document.querySelector('.friendly-patrol');
    const friendlyIcons = [carrierIcon, battleshipIcon, destroyerIcon, submarineIcon, patrolIcon];

    const enemyCarrierIcon = document.querySelector('.enemy-carrier')
    const enemyBattleshipIcon = document.querySelector('.enemy-battleship');
    const enemyDestroyerIcon = document.querySelector('.enemy-destroyer');
    const enemySubmarineIcon = document.querySelector('.enemy-submarine');
    const enemyPatrolIcon = document.querySelector('.enemy-patrol');
    const enemyIcons = [enemyCarrierIcon, enemyBattleshipIcon, enemyDestroyerIcon, enemySubmarineIcon, enemyPatrolIcon];

    let orientation = 'h'

    const clearHighlight = () => {
        let friendlyCells = document.querySelectorAll('.friendly-cell')
        friendlyCells.forEach((cell) => {
            cell.classList.remove('hover-placement')
        })
    }
    
    const orientationEvent = (() => {
        changeOrientation = (event) => {
            if (event.key.toUpperCase() === 'R') {
                if (orientation == 'h') {
                    orientation = 'v'
                } else {
                    orientation = 'h'
                }
                clearHighlight();
                paintDOM.paintFriendly(p1Board, p1PlayArea);
                hoverPreview();
            }
        }
        document.addEventListener('keydown', changeOrientation)
    })();
 
    const hoverPreview = () => {
        let friendlyCells = document.querySelectorAll('.friendly-cell')
        friendlyCells.forEach((cell, index) => {
            cell.addEventListener('mouseover', () => {
                // these orientations are incorrect but it works
                // TO DO: Correct orientations throughout the project
                let addNum = 0
                if (orientation === 'v') { 
                    addNum = 1;
                } else if (orientation === 'h') {
                    addNum = 10;
                }
                switch (p1Board.ships.length) {
                    case 0:
                        carrierIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 59) {break}
                        if (orientation === 'v' && (index % 10) > 5) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 3)].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 4)].classList.add('hover-placement')
                        break;
                    case 1:
                        carrierIcon.classList.remove('flashing-icon')
                        battleshipIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 69) {break}
                        if (orientation === 'v' && (index % 10) > 6) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 3)].classList.add('hover-placement')
                        break;
                    case 2:
                        battleshipIcon.classList.remove('flashing-icon')
                        destroyerIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 79) {break}
                        if (orientation === 'v' && (index % 10) > 7) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.add('hover-placement')
                        break;
                    case 3:
                        destroyerIcon.classList.remove('flashing-icon')
                        submarineIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 79) {break}
                        if (orientation === 'v' && (index % 10) > 7) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.add('hover-placement')
                        break;
                    case 4:
                        submarineIcon.classList.remove('flashing-icon')
                        patrolIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 89) {break}
                        if (orientation === 'v' && (index % 10) > 8) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        break;
                    case 5:
                        patrolIcon.classList.remove('flashing-icon');
                        break;

                };
            });
            cell.addEventListener('mouseout', () => {
                let addNum = 0
                if (orientation === 'v') {
                    addNum = 1;
                } else if (orientation === 'h') {
                    addNum = 10;
                }
                switch (p1Board.ships.length) {
                    case 0:
                        if (orientation === 'h' && index > 59) {break}
                        if (orientation === 'v' && (index % 10) > 5) {break}
                        cell.classList.remove('hover-placement')
                        friendlyCells[index + addNum].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 3)].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 4)].classList.remove('hover-placement')
                        break;
                    case 1:
                        if (orientation === 'h' && index > 69) {break}
                        if (orientation === 'v' && (index % 10) > 6) {break}
                        cell.classList.remove('hover-placement')
                        friendlyCells[index + addNum].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 3)].classList.remove('hover-placement')
                        break;
                    case 2:
                    case 3:
                        if (orientation === 'h' && index > 79) {break}
                        if (orientation === 'v' && (index % 10) > 7) {break}
                        cell.classList.remove('hover-placement')
                        friendlyCells[index + addNum].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.remove('hover-placement')
                        break;
                    case 4:
                        if (orientation === 'h' && index > 89) {break}
                        if (orientation === 'v' && (index % 10) > 8) {break}
                        cell.classList.remove('hover-placement')
                        friendlyCells[index + addNum].classList.remove('hover-placement')
                        break;
                };
            });
        }) ;
    };

    const shipPlacementEvent = () => {
        const gridFrame = document.querySelector('.friendly-grid');

        hoverPreview();
        const placeShips = (coordinates) => {
            switch (p1Board.ships.length) {
                case 0:
                    let carrier = ship(5, 'carrier');
                    p1Board.placeShip(carrier, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
                case 1:
                    let battleship = ship(4, 'battleship');
                    p1Board.placeShip(battleship, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
                case 2:
                    let destroyer = ship(3,'destroyer');
                    p1Board.placeShip(destroyer, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
                case 3:
                    let submarine = ship(3, 'submarine');
                    p1Board.placeShip(submarine, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
                case 4:
                    let patrolBoat = ship(2, 'patrol-boat');
                    p1Board.placeShip(patrolBoat, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
            }
        }
        function getCoordinates(cell) {
            let friendlyCells = document.querySelectorAll('.friendly-cell')
            let cellNumber = Array.from(friendlyCells).indexOf(cell);
            let y = cellNumber % 10;
            let x = Math.floor(cellNumber / 10);
            return [x,y];
        }
        gridFrame.addEventListener('click', (event) => {
            if (event.target.classList.contains('friendly-cell')) {
                let coordinates = getCoordinates(event.target);
                placeShips(coordinates)
            }
        })
    };

    const centerFriendly = () => {
        enemyFrame.style.display = 'none';
        controlsDialogue.textContent = 'Press "R" to rotate your ship!';
    }

    const setRandomizeButton = () => {
        randomizeButton.addEventListener('click', () => {
            p1Board.ships.length = 0;
            p1PlayArea = p1Board.playArea();
            p1Board.placeShipsAtRandom(p1PlayArea, p1Board);
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            friendlyIcons.forEach((icon) => {
                icon.classList.remove('flashing-icon')
            })
        });
    };
    
    const setResetPlacementButton = () => {
        resetPlacementButton.addEventListener('click', () => {
            p1Board.ships.length = 0;
            p1PlayArea = p1Board.playArea();
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            friendlyIcons.forEach((icon) => {
                icon.classList.remove('flashing-icon')
            })
            hoverPreview();
        });
    }
    
    const setConfirmPlacementButton = () => {
        confirmButton.addEventListener('click', () => {
            if (p1Board.ships.length === 5) {
                randomizeButton.style.display = 'none'
                resetPlacementButton.style.display = 'none'
                confirmButton.style.display = 'none'
                enemyFrame.style.display = 'flex';
                controlsDialogue.textContent = '';
                controlsDialogue.style.height = '0px';
                placementOptions.style.height = '0px';
                bothFrames.forEach((frame) => {
                    frame.style.height = '38rem';
                })
                vsCPU();
            }
        });
    };
    
    const setResetGameButton = () => {
        resetGameButton.addEventListener('click', () => {
            gameOverScreen.style.display = 'none';
            p1Board = gameboard();
            p1PlayArea = p1Board.playArea();
            cpuBoard = gameboard();
            cpuPlayArea = cpuBoard.playArea();
            friendlyIcons.forEach((icon) => {
                icon.classList.remove('red-filter');
            })
            enemyIcons.forEach((icon) => {
                icon.classList.remove('red-filter');
            })
            controlsDialogue.style.height = '2rem';
            placementOptions.style.height = '10%';
            bothFrames.forEach((frame) => {
                frame.style.height = '45rem';
            })
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            centerFriendly();
            paintDOM.highlightFriendly();
            hoverPreview();
            randomizeButton.style.display = 'inline'
            resetPlacementButton.style.display = 'inline'
            confirmButton.style.display = 'inline'
        });
    };

    const checkShipsDown = (board, player) => {
        board.ships.forEach((ship) => {
            if (ship.hits === 5 && ship.name === 'carrier') {
                if (player === 'enemy') {
                    enemyCarrierIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    carrierIcon.classList.add('red-filter');
                }
            } 
            if (ship.hits === 4 && ship.name === 'battleship') {
                if (player === 'enemy') {
                    enemyBattleshipIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    battleshipIcon.classList.add('red-filter');
                }
            }
            if (ship.hits === 3 && ship.name === 'destroyer') {
                if (player === 'enemy') {
                    enemyDestroyerIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    destroyerIcon.classList.add('red-filter');
                }
            }
            if (ship.hits === 3 && ship.name === 'submarine') {
                if (player === 'enemy') {
                    enemySubmarineIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    submarineIcon.classList.add('red-filter');
                }
            }
            if (ship.hits === 2 && ship.name === 'patrol-boat') {
                if (player === 'enemy') {
                    enemyPatrolIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    patrolIcon.classList.add('red-filter');
                }
            }
        })
    }

    const checkForP1Win = () => {
        if (cpuBoard.allSunk()) {
            gameOverScreen.style.display = 'flex';
            gameOverText.innerHTML = 'You Won! <br> Would you like to play again?'
            paintDOM.toggleEnemyClickable();
            return 'win'
        };
    };

    const checkForCPUWin = () => {
        if (p1Board.allSunk()) {
            gameOverScreen.style.display = 'flex';
            gameOverText.innerHTML = 'The CPU Won! <br> Would you like to play again?'
            return 'win'
        };
    };

    async function vsCPU() {
        cpuBoard.placeShipsAtRandom(cpuPlayArea, cpuBoard);

        paintDOM.paintFriendly(p1Board, p1PlayArea);
        let currentCPUHitsLength = cpuBoard.hits.length;
        let currentP1HitsLength = p1Board.hits.length;
        while (!p1Board.allSunk() && !cpuBoard.allSunk()) {
            // Highlight & paint the enemy board
            paintDOM.paintEnemy(cpuBoard, cpuPlayArea);
            // Enable clicks on the enemy board so the player can take a turn
            paintDOM.toggleEnemyClickable();

            do { // Wait for the player's turn
                currentCPUHitsLength = cpuBoard.hits.length
                await p1.waitForPlayerTurn();

                checkShipsDown(cpuBoard, 'enemy');
                paintDOM.paintEnemy(cpuBoard, cpuPlayArea);

                if (checkForP1Win() === 'win') {
                    return
                }; // Check if the player made a winning move
            // Give the player an extra turn if they land a shot
            } while (cpuBoard.hits.length > currentCPUHitsLength)

            // Delay the time between turn swaps
            await new Promise(resolve => setTimeout(resolve, 30)); 
            // Disable clicks on the enemy board during the CPU's turn
            paintDOM.toggleEnemyClickable();
            // Highligh the friendly board
            paintDOM.highlightFriendly();

            do { // Execute CPU's turn
                await new Promise(resolve => setTimeout(resolve, 900)); // Delay the CPU's turn
                currentP1HitsLength = p1Board.hits.length
                cpu.cpuTurn(p1PlayArea, p1Board);
                checkShipsDown(p1Board, 'friendly'); // Update the ships down graphics
                paintDOM.paintFriendly(p1Board, p1PlayArea);
                checkForCPUWin(); // Check if the CPU made a winning move
            } while (p1Board.hits.length > currentP1HitsLength)

            // Paint the player's board
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            // Delay the time between turn swaps
            await new Promise(resolve => setTimeout(resolve, 30));
        };
    };

    const establishGameVsCPU = () => {
        centerFriendly();
        paintDOM.paintFriendly(p1Board, p1PlayArea);
        paintDOM.highlightFriendly();
        shipPlacementEvent();
        setRandomizeButton();
        setResetPlacementButton();
        setConfirmPlacementButton();
        setResetGameButton();
    };

    return {
        establishGameVsCPU,
    }
};

module.exports = gameloop;

/***/ }),

/***/ "./src/index.js?b635":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.html */ "./src/template.html");


const gameloop = __webpack_require__(/*! ../src/gameloop.js */ "./src/gameloop.js");

gameloop().establishGameVsCPU();

/***/ }),

/***/ "./src/paintBoard.js":
/*!***************************!*\
  !*** ./src/paintBoard.js ***!
  \***************************/
/***/ ((module) => {

const paintBoard = () => {
    let enemyClickable = true;

    const toggleEnemyClickable = () => {
        const enemyGrid = document.querySelector('.enemy-grid');
        if (enemyClickable) {
            enemyGrid.style.pointerEvents = 'auto';
            enemyClickable = false;
        } else {
            enemyGrid.style.pointerEvents = 'none';
            enemyClickable = true;
        };
    };
    
    const highlightFriendly = () => {
        const enemyFrame = document.querySelector('.enemy-frame');
        enemyFrame.classList.remove('highlight-frame');
        
        const friendlyFrame = document.querySelector('.friendly-frame');
        friendlyFrame.classList.add('highlight-frame');
    };
    
    const highlightEnemy = () => {
        const friendlyFrame = document.querySelector('.friendly-frame')
        friendlyFrame.classList.remove('highlight-frame');
        
        const enemyFrame = document.querySelector('.enemy-frame');
        enemyFrame.classList.add('highlight-frame');
    };
    
    const containsCoords = (array, coordinates) =>  {
        return array.some(coord => coord.every((value, index) => value === coordinates[index])) 
    };

    const paintFriendly = (gameboard, playArea) => {
        const gridContainer = document.querySelector('.friendly-grid');
        gridContainer.innerHTML = ''; // Clear all of the child nodes from the previous run
        
        let misses = gameboard.misses;
        let hits = gameboard.hits;

        for (let i = 0; i < 10; i++) { // i = y axis
            const row = document.createElement('div');
            row.classList.add('grid-row');
            
            for (let j = 0; j < 10; j++) { // j = x axis
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add('friendly-cell');
                const possibleShip = playArea[i][j];
                
                if (containsCoords(misses, [i,j])) {
                    cell.classList.add('miss')
                } else if (containsCoords(hits, [i,j])) {
                    cell.classList.add('friendly-hit')
                };

                // only friendly ships should ever recieve the ship class
                // enemy ships are never given graphics
                if (possibleShip !== undefined) {
                    let shipName = possibleShip.name
                    cell.classList.add('ship');
                    cell.classList.add(shipName); 
                };
                row.appendChild(cell);
            };
            gridContainer.appendChild(row);
        };
    };

    const paintEnemy = (gameboard, playArea) => {
        highlightEnemy(); // The enemy is always the first to be targeted
        const gridContainer = document.querySelector('.enemy-grid')
        gridContainer.innerHTML = ''; // Clear all of the child nodes from the previous run

        let misses = gameboard.misses;
        let hits = gameboard.hits;
        
        for (let i = 0; i < 10; i++) {
            const row = document.createElement('div');
            row.classList.add('grid-row');
            
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add('enemy-cell');
                cell.addEventListener('click', () => {
                    gameboard.receiveAttack([i,j], playArea)
                    paintEnemy(gameboard, playArea)
                });
                
                if (containsCoords(misses, [i,j])) {
                    cell.classList.add('miss')
                } else if (containsCoords(hits, [i,j])) {
                    cell.classList.add('enemy-hit')
                };
                
                row.appendChild(cell);
            };
            gridContainer.appendChild(row);
        };
    };

    return {
        toggleEnemyClickable,
        highlightFriendly,
        paintFriendly,
        paintEnemy,
    };
};

module.exports = paintBoard;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

const player = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    const cpuTurn = (playArea, gameBoard) => {
        let hitsLength = gameBoard.hits.length;
        let coordinates = [];
        let previousHit = [];
        let previousX = 0;
        let previousY = 0;
        let plusX = 0;
        let plusY = 0;
        let minusX = 0;
        let minusY = 0;
        let i = 0;
        let j = 1;
        // Randomize the first shot until a hit is found
        if (hitsLength === 0 ) {
            let x = getRandomInt(10);
            let y = getRandomInt(10);
            coordinates = [x, y];
        }
        // check every coordinate in a given array against the current to ensure a duplicate shot isn't made
        const containsCoords = (array) => array[0] === coordinates[0] && array[1] === coordinates[1];
        // Prepare the variables used for follow up shots
        if (hitsLength > 0) {
            previousHit = gameBoard.hits[hitsLength - j];
            previousX = previousHit[0]
            previousY = previousHit[1]
            plusX = previousX + 1;
            plusY = previousY + 1;
            minusX = previousX - 1;
            minusY = previousY - 1;
        }
        while ((gameBoard.hits.some(containsCoords) || gameBoard.misses.some(containsCoords)) || coordinates.length === 0) {
            // Target positions next to a previous hit
            if (hitsLength > 0) {
                hitsLength = gameBoard.hits.length;
                i++; // Keep track of how many times the while loop has performed an iteration for the current hit
                if (plusX <= 9 && i === 1) { 
                    coordinates = [plusX, previousY]
                } else if (minusX >= 0 && i === 2) {
                    coordinates = [minusX, previousY]
                } else if (plusY <= 9 && i === 3) {
                    coordinates = [previousX, plusY]
                } else if (minusY >= 0 && i === 4) {
                    coordinates = [previousX, minusY]
                } else if (j < hitsLength) { // Go backwards through the array of hits when the latest hit has no other options
                    j++;
                    i = 0;
                    previousHit = gameBoard.hits[hitsLength - j];
                    previousX = previousHit[0];
                    previousY = previousHit[1];
                    plusX = previousX + 1;
                    plusY = previousY + 1;
                    minusX = previousX - 1;
                    minusY = previousY - 1;
                } else {
                    // Randomize the coordinates when no calculated shots can be made
                    x = getRandomInt(10);
                    y = getRandomInt(10);
                    coordinates = [x,y];        
                }
            } else {
                // Re-randomize duplicates when a hit hasn't been found
                x = getRandomInt(10);
                y = getRandomInt(10);
                coordinates = [x,y];
            }
        }
        gameBoard.receiveAttack(coordinates, playArea);
        return coordinates;
    };

    const waitForPlayerTurn = () => {
        const enemyCells = document.getElementsByClassName('enemy-cell');
        const cellsArray = Array.from(enemyCells);

        return new Promise((resolve) => {
            cellsArray.forEach((cell) => {
                if (cell.classList.contains('miss') || cell.classList.contains('enemy-hit')) {
                    // Prevent click event if the position has been targeted before
                    cell.style.pointerEvents = 'none';
                }
                cell.addEventListener('click', function playerClickListener() {
                    // Remove the event listener to prevent multiple clicks
                    cell.removeEventListener('click', playerClickListener);
                    // Resolve the promise to continue the game loop
                    resolve();
                });
            });
        });
    };

    return {
        cpuTurn,
        waitForPlayerTurn,
    };
};

module.exports = player;

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const ship = (length, name = 'default-ship') => {
    let hits = 0;

    const hit = () => {
        if (hits < length) {
            hits++;
        };
    };

    const isSunk = () => {
        return hits == length;
    };

    return {
        name,
        length, 
        get hits() {
            return hits
        },
        set hits(value) {
            if (value <= length && value > 0) {
                hits = value
            }
        },
        hit, 
        isSunk
    };
}

module.exports = ship;

/***/ }),

/***/ "./src/fonts/Anta-Regular.ttf":
/*!************************************!*\
  !*** ./src/fonts/Anta-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0e0da7a3dc95e085b230.ttf";

/***/ }),

/***/ "./src/images/aircraft-carrier.png":
/*!*****************************************!*\
  !*** ./src/images/aircraft-carrier.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "56b6f6449062e1ebe5ec.png";

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a1cc11a71790885ce3e0.png";

/***/ }),

/***/ "./src/images/destroyer.png":
/*!**********************************!*\
  !*** ./src/images/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d3417a8dc424278481f3.png";

/***/ }),

/***/ "./src/images/patrol-boat.png":
/*!************************************!*\
  !*** ./src/images/patrol-boat.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff90600bca57e3fc62a1.png";

/***/ }),

/***/ "./src/images/submarine.png":
/*!**********************************!*\
  !*** ./src/images/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bb49590a39c67c9d300d.png";

/***/ }),

/***/ "./src/index.js?dfde":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ec527156834fe8b49d99.js";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js?b635"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLHdCQUF3QixXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxh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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL3RlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL3NyYy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL3NyYy9wYWludEJvYXJkLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvQW50YS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2FpcmNyYWZ0LWNhcnJpZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9kZXN0cm95ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc3VibWFyaW5lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3BhdHJvbC1ib2F0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogYW50YTtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMxZDYyOGEsICMwZTA0NDUpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBhbnRhO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsMCwwLDAuNik7XG59XG5cbmEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5nYW1lLWFyZWEge1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZnJhbWUge1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBoZWlnaHQ6IDQ1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40NjQpO1xufVxuXG4uZnJpZW5kbHktZnJhbWUge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmZyYW1lLmhpZ2hsaWdodC1mcmFtZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzFlMjEyMTdiLCAjNGE0YTYwNTYpO1xufVxuXG4uYm9hcmQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmdyaWQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQ2NCk7XG4gICAgaGVpZ2h0OiAyOHJlbTtcbiAgICB3aWR0aDogMjhyZW07XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLmdyaWQtcm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2VsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMCU7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbnRyb2xzLWRpYWxvZ3VlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4ucGxhY2VtZW50LW9wdGlvbnMtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICB3aWR0aDogY2FsYygyOHJlbSArIDRweCk7IC8qIGFjY291bnQgZm9yIGdyaWQgYm9yZGVyIHdpZHRoICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ucGxhY2VtZW50LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMmM1NTQ7XG4gICAgY29sb3I6ICMwMmM1NTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuXG4ucGxhY2VtZW50LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyYzU1NDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4uc3RhdHVzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA2LjVyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNoaXAtc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG5cbi5yZWQtZmlsdGVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDExJSkgc2VwaWEoOTklKSBzYXR1cmF0ZSg0NzIzJSkgaHVlLXJvdGF0ZSgzMzRkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoMTA4JSk7XG59XG5cbiAgICAuZmxhc2hpbmctaWNvbiB7XG4gICAgICAgIGFuaW1hdGlvbjogZmxhc2hpbmcgMXMgaW5maW5pdGU7XG4gICAgfVxuICAgIFxuICAgIEBrZXlmcmFtZXMgZmxhc2hpbmcge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDAlKTtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgIGZpbHRlcjogb3BhY2l0eSg1MCUpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIGZpbHRlcjogb3BhY2l0eSgxMDAlKTtcbiAgICAgICAgfVxuICAgIH1cblxuLmNhcnJpZXItc3RhdHVzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5iYXR0bGVzaGlwLXN0YXR1cyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uZGVzdHJveWVyLXN0YXR1cyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1cmVtIDVyZW07XG59XG5cbi5zdWJtYXJpbmUtc3RhdHVzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDVyZW0gNXJlbTtcbn1cblxuLnBhdHJvbC1ib2F0LXN0YXR1cyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uZW5lbXktY2VsbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzIzOGNjOCwgIzM1NjFjZik7XG59XG5cbi5lbmVteS1oaXQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNlMzdlM2IsICNlMDFlMWUpO1xufVxuXG4uc2hpcCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig0NCwgMjEzLCAzMiksICM2NWE3MzkpXG59XG4vKiBNYWludGFpbiBmcmllbmRseS1oaXQncyBwcmlvcml0eSBvdmVyIC5zaGlwIHN0eWxlcyAqL1xuLmZyaWVuZGx5LWhpdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2UzN2UzYiwgI2UwMWUxZSk7XG59XG5cbi5ob3Zlci1wbGFjZW1lbnQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDM5LCAxNzIsIDI5LCAwLjQ2KSwgIzY1YTczOTc0KTtcbn1cblxuLmdhbWUtb3Zlci1zY3JlZW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NTkpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lLW92ZXItZGlhbG9ndWUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc4OCk7XG4gICAgYm9yZGVyLXJhZGl1czogMS4xcmVtOztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMzByZW07XG4gICAgaGVpZ2h0OiAyMHJlbTtcbn1cblxuLnJlc2V0LWdhbWUge1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICM0YWFkMDhjYjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZzogMTRweCAyNHB4IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zO1xuXG59XG5cbi5yZXNldC1nYW1lOmhvdmVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsNENBQXVDO0FBQzNDOztBQUVBO0lBQ0ksbURBQW1EO0lBQ25ELDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFFQUFxRTtBQUN6RTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxpREFBaUQ7SUFDakQsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCLEVBQUUsa0NBQWtDO0lBQzVELGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7QUFFRjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksOEhBQThIO0FBQ2xJOztJQUVJO1FBQ0ksK0JBQStCO0lBQ25DOztJQUVBO1FBQ0k7VUFDRSxtQkFBbUI7UUFDckI7UUFDQTtVQUNFLG9CQUFvQjtRQUN0QjtRQUNBO1VBQ0UscUJBQXFCO1FBQ3ZCO0lBQ0o7O0FBRUo7SUFDSSx5REFBb0Q7SUFDcEQsNEJBQTRCO0lBQzVCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlEQUE4QztJQUM5Qyw0QkFBNEI7SUFDNUIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseURBQTZDO0lBQzdDLDRCQUE0QjtJQUM1QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5REFBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlEQUErQztJQUMvQyw0QkFBNEI7SUFDNUIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxvRUFBb0U7QUFDeEU7O0FBRUE7SUFDSTtBQUNKO0FBQ0EsdURBQXVEO0FBQ3ZEO0lBQ0ksb0VBQW9FO0FBQ3hFOztBQUVBO0lBQ0kscUVBQXFFO0FBQ3pFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCwyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYW50YTtcXG4gICAgc3JjOiB1cmwoLi4vc3JjL2ZvbnRzL0FudGEtUmVndWxhci50dGYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMxZDYyOGEsICMwZTA0NDUpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBhbnRhO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLDAsMCwwLjYpO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5nYW1lLWFyZWEge1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZyYW1lIHtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBoZWlnaHQ6IDQ1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQ2NCk7XFxufVxcblxcbi5mcmllbmRseS1mcmFtZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLmZyYW1lLmhpZ2hsaWdodC1mcmFtZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMxZTIxMjE3YiwgIzRhNGE2MDU2KTtcXG59XFxuXFxuLmJvYXJkLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5ncmlkIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC40NjQpO1xcbiAgICBoZWlnaHQ6IDI4cmVtO1xcbiAgICB3aWR0aDogMjhyZW07XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXG59XFxuXFxuLmdyaWQtcm93IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb250cm9scy1kaWFsb2d1ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG5cXG4ucGxhY2VtZW50LW9wdGlvbnMtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHdpZHRoOiBjYWxjKDI4cmVtICsgNHB4KTsgLyogYWNjb3VudCBmb3IgZ3JpZCBib3JkZXIgd2lkdGggKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5wbGFjZW1lbnQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMmM1NTQ7XFxuICAgIGNvbG9yOiAjMDJjNTU0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4ucGxhY2VtZW50LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMmM1NTQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcblxcbi5zdGF0dXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA2LjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwLXN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5yZWQtZmlsdGVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgxMSUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoNDcyMyUpIGh1ZS1yb3RhdGUoMzM0ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwOCUpO1xcbn1cXG5cXG4gICAgLmZsYXNoaW5nLWljb24ge1xcbiAgICAgICAgYW5pbWF0aW9uOiBmbGFzaGluZyAxcyBpbmZpbml0ZTtcXG4gICAgfVxcbiAgICBcXG4gICAgQGtleWZyYW1lcyBmbGFzaGluZyB7XFxuICAgICAgICAwJSB7XFxuICAgICAgICAgIGZpbHRlcjogb3BhY2l0eSgwJSk7XFxuICAgICAgICB9XFxuICAgICAgICA1MCUge1xcbiAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoNTAlKTtcXG4gICAgICAgIH1cXG4gICAgICAgIDEwMCUge1xcbiAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMTAwJSk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4uY2Fycmllci1zdGF0dXMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvYWlyY3JhZnQtY2Fycmllci5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi5iYXR0bGVzaGlwLXN0YXR1cyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9iYXR0bGVzaGlwLnBuZyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuLmRlc3Ryb3llci1zdGF0dXMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvZGVzdHJveWVyLnBuZyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNXJlbSA1cmVtO1xcbn1cXG5cXG4uc3VibWFyaW5lLXN0YXR1cyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9zdWJtYXJpbmUucG5nKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1cmVtIDVyZW07XFxufVxcblxcbi5wYXRyb2wtYm9hdC1zdGF0dXMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvcGF0cm9sLWJvYXQucG5nKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4uZW5lbXktY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzIzOGNjOCwgIzM1NjFjZik7XFxufVxcblxcbi5lbmVteS1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZTM3ZTNiLCAjZTAxZTFlKTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDQ0LCAyMTMsIDMyKSwgIzY1YTczOSlcXG59XFxuLyogTWFpbnRhaW4gZnJpZW5kbHktaGl0J3MgcHJpb3JpdHkgb3ZlciAuc2hpcCBzdHlsZXMgKi9cXG4uZnJpZW5kbHktaGl0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2UzN2UzYiwgI2UwMWUxZSk7XFxufVxcblxcbi5ob3Zlci1wbGFjZW1lbnQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgzOSwgMTcyLCAyOSwgMC40NiksICM2NWE3Mzk3NCk7XFxufVxcblxcbi5nYW1lLW92ZXItc2NyZWVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NTkpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtb3Zlci1kaWFsb2d1ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzg4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS4xcmVtOztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogMjByZW07XFxufVxcblxcbi5yZXNldC1nYW1lIHtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjNGFhZDA4Y2I7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZzogMTRweCAyNHB4IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XFxuXFxufVxcblxcbi5yZXNldC1nYW1lOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbmRleC5qc1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG48aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICAgIDx0aXRsZT5CYXR0bGVzaGlwITwvdGl0bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFnZS10aXRsZVxcXCI+QkFUVExFU0hJUDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1hcmVhXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZyYW1lIGZyaWVuZGx5LWZyYW1lXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZC10aXRsZSBmcmllbmRseS10aXRsZVxcXCI+RlJJRU5ETFkgU0VBUzwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdyaWQgZnJpZW5kbHktZ3JpZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNoaXAtc3RhdHVzIGZyaWVuZGx5LWNhcnJpZXIgY2Fycmllci1zdGF0dXNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaGlwLXN0YXR1cyBmcmllbmRseS1iYXR0bGVzaGlwIGJhdHRsZXNoaXAtc3RhdHVzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hpcC1zdGF0dXMgZnJpZW5kbHktZGVzdHJveWVyIGRlc3Ryb3llci1zdGF0dXNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaGlwLXN0YXR1cyBmcmllbmRseS1zdWJtYXJpbmUgc3VibWFyaW5lLXN0YXR1c1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNoaXAtc3RhdHVzIGZyaWVuZGx5LXBhdHJvbCBwYXRyb2wtYm9hdC1zdGF0dXNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xzLWRpYWxvZ3VlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwbGFjZW1lbnQtb3B0aW9ucy1jb250YWluZXIgZnJpZW5kbHktcGxhY2VtZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicGxhY2VtZW50LWJ1dHRvbiByYW5kb21pemUtcGxhY2VtZW50XFxcIj5SQU5ET01JWkU8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicGxhY2VtZW50LWJ1dHRvbiByZXNldC1wbGFjZW1lbnRcXFwiPlJFU0VUPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInBsYWNlbWVudC1idXR0b24gY29uZmlybS1wbGFjZW1lbnRcXFwiPkNPTkZJUk08L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZnJhbWUgZW5lbXktZnJhbWUgaGlnaGxpZ2h0LWZyYW1lXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZC10aXRsZSBlbmVteS10aXRsZVxcXCI+RU5FTVkgU0VBUzwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdyaWQgZW5lbXktZ3JpZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNoaXAtc3RhdHVzIGVuZW15LWNhcnJpZXIgY2Fycmllci1zdGF0dXNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaGlwLXN0YXR1cyBlbmVteS1iYXR0bGVzaGlwIGJhdHRsZXNoaXAtc3RhdHVzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hpcC1zdGF0dXMgZW5lbXktZGVzdHJveWVyIGRlc3Ryb3llci1zdGF0dXNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaGlwLXN0YXR1cyBlbmVteS1zdWJtYXJpbmUgc3VibWFyaW5lLXN0YXR1c1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNoaXAtc3RhdHVzIGVuZW15LXBhdHJvbCBwYXRyb2wtYm9hdC1zdGF0dXNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLW92ZXItc2NyZWVuXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWUtb3Zlci1kaWFsb2d1ZVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1vdmVyLXRpdGxlXFxcIj5HYW1lIE92ZXI8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLW92ZXItdGV4dFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicmVzZXQtZ2FtZVxcXCI+UmVzZXQgR2FtZTwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vRnJvYmlpL3RkZC1iYXR0bGVzaGlwXFxcIiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5zb3VyY2UgY29kZTwvYT5cXG4gICAgPFwiICsgXCJzY3JpcHQgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+PFwiICsgXCIvc2NyaXB0PlxcbjwvYm9keT5cXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzaGlwID0gcmVxdWlyZSgnLi4vc3JjL3NoaXAuanMnKTtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGxldCBtaXNzZXMgPSBbXTtcbiAgICBsZXQgaGl0cyA9IFtdO1xuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgY29uc3QgcGxheUFyZWEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwbGF5QXJlYSA9IG5ldyBBcnJheSgxMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgcGxheUFyZWFbaV0gPSBuZXcgQXJyYXkoMTApXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBwbGF5QXJlYTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHBsYXlBcmVhLCBzdGFydFBvcywgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgW3gseV0gPSBzdGFydFBvcztcbiAgICAgICAgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoO1xuXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBudWxsOyBcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgaWYgKHggKyBzaGlwTGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaGlwIHBsYWNlbWVudCBvdXQgb2YgYm91bmRzIVwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5QXJlYVt4ICsgaV1beV0gIT0gdW5kZWZpbmVkKSB7IC8vIGNoZWNrIGNob3NlbiBwb3NpdGlvbnMgZm9yIG90aGVyIHNoaXBzXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICAnQ2Fubm90IHBsYWNlIHNoaXBzIG92ZXIgb3RoZXJzISdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBwbGF5QXJlYVt4ICsgaV1beV0gPSBzaGlwICAvLyBQbGFjaW5nIHRoZSBzaGlwIGhvcml6b250YWxseVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSAgeyBcbiAgICAgICAgICAgIGlmICh5ICsgc2hpcExlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICBcIlNoaXAgcGxhY2VtZW50IG91dCBvZiBib3VuZHMhXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXlBcmVhW3hdW3kgKyBpXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gICdDYW5ub3QgcGxhY2Ugc2hpcHMgb3ZlciBvdGhlcnMhJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHBsYXlBcmVhW3hdW3kgKyBpXSA9IHNoaXAgLy8gUGxhY2luZyB0aGUgc2hpcCB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgcGxhY2VTaGlwc0F0UmFuZG9tID0gKHBsYXlBcmVhLCBnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBnZXRSYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCByYW5kb21EZWNpbWFsID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLnJvdW5kKHJhbmRvbURlY2ltYWwpO1xuICAgICAgICAgICAgaWYgKHJhbmRvbU51bWJlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaCdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd2J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgY29uc3QgZ2V0UmFuZG9tQ29vcmRzID0gKHBsYWNlZENvb3Jkcywgc2hpcCwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCB4ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgICAgIGxldCB5ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IFt4LHldO1xuICAgICAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aDtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb29yZGluYXRlcyB0aGUgc2hpcCB3aWxsIHRha2UgdXAgaWYgcGxhY2VkXG4gICAgICAgICAgICAvLyBpLmUuIGEgYmF0dGxlc2hpcCBoYXMgYSBsZW5ndGggb2YgNCBzbyBpdCBoYXMgNCBwbGFjZW1lbnQgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGNvbnN0IGdldFBsYWNlbWVudENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwUGxhY2VtZW50Q29vcmRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzWzBdICs9IGlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlc1sxXSArPSBpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRDb29yZHMucHVzaChuZXdDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcFBsYWNlbWVudENvb3JkcztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSBwb3RlbnRpYWwgcGxhY2VtZW50IGNvb3JkaW5hdGVzIGFnYWluc3QgdGhlIG9uZXMgd2hpY2ggYXJlIGFscmVhZHkgcGxhY2VkXG4gICAgICAgICAgICBjb25zdCBhcnJheXNDb250YWluQ29tbW9uQ29vcmRpbmF0ZXMgPSAoYXJyYXkxLCBhcnJheTIpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5MS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycmF5Mi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5MVtpXVswXSA9PT0gYXJyYXkyW2pdWzBdICYmIGFycmF5MVtpXVsxXSA9PT0gYXJyYXkyW2pdWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnRPdXRPZkJvdW5kcyA9IChjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgeFJlYWNoID0gY29vcmRpbmF0ZXNbMF0gKyBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgeVJlYWNoID0gY29vcmRpbmF0ZXNbMV0gKyBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiB4UmVhY2ggPiA5ICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndicgJiYgeVJlYWNoID4gOSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmlyc3Qgc2V0IG9mIHBsYWNlbWVudCBjb29yZGluYXRlcyBmb3IgdmFsaWRhdGlvblxuICAgICAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnRDb29yZHMgPSBnZXRQbGFjZW1lbnRDb29yZGluYXRlcyhjb29yZGluYXRlcywgc2hpcExlbmd0aCwgb3JpZW50YXRpb24pO1xuXG4gICAgICAgICAgICAvLyBSYW5kb21pemUgY29vcmRpbmF0ZXMgdG8gZmluZCBhIHBsYWNlbWVudCB3aGljaCBoYXNuJ3QgYmVlbiBtYWRlIGFuZCBpcyB3aXRoaW4gYm91bmRzXG4gICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgICAgYXJyYXlzQ29udGFpbkNvbW1vbkNvb3JkaW5hdGVzKHNoaXBQbGFjZW1lbnRDb29yZHMsIHBsYWNlZENvb3JkcykgfHxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRPdXRPZkJvdW5kcyhjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gW3gseV07XG4gICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudENvb3JkcyA9IGdldFBsYWNlbWVudENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgY29vcmRpbmF0ZXMgdGhpcyBzaGlwIGlzIHRha2luZyB1cCBzbyBmdXR1cmUgc2hpcHMgY2FuJ3QgYmUgcGxhY2VkIHRoZXJlXG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50Q29vcmRzLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgcGxhY2VkQ29vcmRzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjb29yZGluYXRlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjYXJyaWVyID0gc2hpcCg1LCAnY2FycmllcicpO1xuICAgICAgICBsZXQgYmF0dGxlc2hpcCA9IHNoaXAoNCwgJ2JhdHRsZXNoaXAnKTtcbiAgICAgICAgbGV0IGRlc3Ryb3llciA9IHNoaXAoMywnZGVzdHJveWVyJyk7XG4gICAgICAgIGxldCBzdWJtYXJpbmUgPSBzaGlwKDMsICdzdWJtYXJpbmUnKTtcbiAgICAgICAgbGV0IHBhdHJvbEJvYXQgPSBzaGlwKDIsICdwYXRyb2wtYm9hdCcpO1xuICAgICAgICBsZXQgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xuICAgICAgICBsZXQgcGxhY2VkQ29vcmRzID0gW107XG5cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gIGdldFJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBnZXRSYW5kb21Db29yZHMocGxhY2VkQ29vcmRzLCBzaGlwLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHBsYXlBcmVhLCBzdGFydFBvcywgb3JpZW50YXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcywgcGxheUFyZWEpID0+IHtcbiAgICAgICAgW3gseV0gPSBjb29yZGluYXRlcztcblxuICAgICAgICBmb3IgKGNvbnN0IG1pc3Mgb2YgbWlzc2VzKSB7IC8vIGNoZWNrIHRoZSBtaXNzZXMgZm9yIGEgZHVwbGljYXRlIHNob3RcbiAgICAgICAgICAgIGlmIChtaXNzLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGNvb3JkaW5hdGVzW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGhpdCBvZiBoaXRzKSB7IC8vIGNoZWNrIHRoZSBoaXRzIGZvciBhIGR1cGxpY2F0ZSBzaG90XG4gICAgICAgICAgICBpZiAoaGl0LmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGNvb3JkaW5hdGVzW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocGxheUFyZWFbeF1beV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoaXRzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgcGxheUFyZWFbeF1beV0uaGl0KCk7XG4gICAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXNzZXMucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gJ21pc3MnO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzaGlwcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChzaGlwID09PSBzaGlwc1tsYXN0SW5kZXhdICYmIHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXlBcmVhLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHBsYWNlU2hpcHNBdFJhbmRvbSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU3VuayxcbiAgICAgICAgbWlzc2VzLFxuICAgICAgICBoaXRzLFxuICAgICAgICBzaGlwcyxcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVib2FyZDsiLCJjb25zdCBnYW1lYm9hcmQgPSByZXF1aXJlKCcuLi9zcmMvZ2FtZWJvYXJkLmpzJyk7XG5jb25zdCBwbGF5ZXIgPSByZXF1aXJlKCcuLi9zcmMvcGxheWVyLmpzJyk7XG5jb25zdCBwYWludEJvYXJkID0gcmVxdWlyZSgnLi4vc3JjL3BhaW50Qm9hcmQuanMnKTtcbmNvbnN0IHNoaXAgPSByZXF1aXJlKCcuLi9zcmMvc2hpcC5qcycpO1xuXG5jb25zdCBnYW1lbG9vcCA9ICgpID0+IHtcbiAgICBjb25zdCBwMSA9IHBsYXllcigpO1xuICAgIGxldCBwMUJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gICAgbGV0IHAxUGxheUFyZWEgPSBwMUJvYXJkLnBsYXlBcmVhKCk7XG5cbiAgICBjb25zdCBjcHUgPSBwbGF5ZXIoKTtcbiAgICBsZXQgY3B1Qm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgICBsZXQgY3B1UGxheUFyZWEgPSBjcHVCb2FyZC5wbGF5QXJlYSgpO1xuXG4gICAgY29uc3QgcGFpbnRET00gPSBwYWludEJvYXJkKCk7XG5cbiAgICBjb25zdCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXItc2NyZWVuJyk7XG4gICAgY29uc3QgZ2FtZU92ZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlci10ZXh0Jyk7XG4gICAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbWl6ZS1wbGFjZW1lbnQnKTtcbiAgICBjb25zdCByZXNldFBsYWNlbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1wbGFjZW1lbnQnKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm0tcGxhY2VtZW50Jyk7XG4gICAgY29uc3QgcmVzZXRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWdhbWUnKTtcbiAgICBjb25zdCBib3RoRnJhbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyYW1lJyk7XG4gICAgY29uc3QgZW5lbXlGcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1mcmFtZScpO1xuICAgIGNvbnN0IGNvbnRyb2xzRGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMtZGlhbG9ndWUnKTtcbiAgICBjb25zdCBwbGFjZW1lbnRPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlbWVudC1vcHRpb25zLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY2Fycmllckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJpZW5kbHktY2FycmllcicpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyaWVuZGx5LWJhdHRsZXNoaXAnKTtcbiAgICBjb25zdCBkZXN0cm95ZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyaWVuZGx5LWRlc3Ryb3llcicpO1xuICAgIGNvbnN0IHN1Ym1hcmluZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJpZW5kbHktc3VibWFyaW5lJyk7XG4gICAgY29uc3QgcGF0cm9sSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcmllbmRseS1wYXRyb2wnKTtcbiAgICBjb25zdCBmcmllbmRseUljb25zID0gW2NhcnJpZXJJY29uLCBiYXR0bGVzaGlwSWNvbiwgZGVzdHJveWVySWNvbiwgc3VibWFyaW5lSWNvbiwgcGF0cm9sSWNvbl07XG5cbiAgICBjb25zdCBlbmVteUNhcnJpZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWNhcnJpZXInKVxuICAgIGNvbnN0IGVuZW15QmF0dGxlc2hpcEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktYmF0dGxlc2hpcCcpO1xuICAgIGNvbnN0IGVuZW15RGVzdHJveWVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1kZXN0cm95ZXInKTtcbiAgICBjb25zdCBlbmVteVN1Ym1hcmluZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktc3VibWFyaW5lJyk7XG4gICAgY29uc3QgZW5lbXlQYXRyb2xJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LXBhdHJvbCcpO1xuICAgIGNvbnN0IGVuZW15SWNvbnMgPSBbZW5lbXlDYXJyaWVySWNvbiwgZW5lbXlCYXR0bGVzaGlwSWNvbiwgZW5lbXlEZXN0cm95ZXJJY29uLCBlbmVteVN1Ym1hcmluZUljb24sIGVuZW15UGF0cm9sSWNvbl07XG5cbiAgICBsZXQgb3JpZW50YXRpb24gPSAnaCdcblxuICAgIGNvbnN0IGNsZWFySGlnaGxpZ2h0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgZnJpZW5kbHlDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmllbmRseS1jZWxsJylcbiAgICAgICAgZnJpZW5kbHlDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG9yaWVudGF0aW9uRXZlbnQgPSAoKCkgPT4ge1xuICAgICAgICBjaGFuZ2VPcmllbnRhdGlvbiA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnUicpIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ3YnXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnaCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xlYXJIaWdobGlnaHQoKTtcbiAgICAgICAgICAgICAgICBwYWludERPTS5wYWludEZyaWVuZGx5KHAxQm9hcmQsIHAxUGxheUFyZWEpO1xuICAgICAgICAgICAgICAgIGhvdmVyUHJldmlldygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGFuZ2VPcmllbnRhdGlvbilcbiAgICB9KSgpO1xuIFxuICAgIGNvbnN0IGhvdmVyUHJldmlldyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGZyaWVuZGx5Q2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJpZW5kbHktY2VsbCcpXG4gICAgICAgIGZyaWVuZGx5Q2VsbHMuZm9yRWFjaCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoZXNlIG9yaWVudGF0aW9ucyBhcmUgaW5jb3JyZWN0IGJ1dCBpdCB3b3Jrc1xuICAgICAgICAgICAgICAgIC8vIFRPIERPOiBDb3JyZWN0IG9yaWVudGF0aW9ucyB0aHJvdWdob3V0IHRoZSBwcm9qZWN0XG4gICAgICAgICAgICAgICAgbGV0IGFkZE51bSA9IDBcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2JykgeyBcbiAgICAgICAgICAgICAgICAgICAgYWRkTnVtID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkTnVtID0gMTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAocDFCb2FyZC5zaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2Fycmllckljb24uY2xhc3NMaXN0LmFkZCgnZmxhc2hpbmctaWNvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiBpbmRleCA+IDU5KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2JyAmJiAoaW5kZXggJSAxMCkgPiA1KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgYWRkTnVtXS5jbGFzc0xpc3QuYWRkKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIChhZGROdW0gKiAyKV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyAoYWRkTnVtICogMyldLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgKGFkZE51bSAqIDQpXS5jbGFzc0xpc3QuYWRkKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJpZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsYXNoaW5nLWljb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgYmF0dGxlc2hpcEljb24uY2xhc3NMaXN0LmFkZCgnZmxhc2hpbmctaWNvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiBpbmRleCA+IDY5KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2JyAmJiAoaW5kZXggJSAxMCkgPiA2KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgYWRkTnVtXS5jbGFzc0xpc3QuYWRkKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIChhZGROdW0gKiAyKV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyAoYWRkTnVtICogMyldLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgYmF0dGxlc2hpcEljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmxhc2hpbmctaWNvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0cm95ZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoaW5nLWljb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcgJiYgaW5kZXggPiA3OSkge2JyZWFrfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndicgJiYgKGluZGV4ICUgMTApID4gNykge2JyZWFrfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIGFkZE51bV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyAoYWRkTnVtICogMildLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdHJveWVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmbGFzaGluZy1pY29uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1hcmluZUljb24uY2xhc3NMaXN0LmFkZCgnZmxhc2hpbmctaWNvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiBpbmRleCA+IDc5KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2JyAmJiAoaW5kZXggJSAxMCkgPiA3KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgYWRkTnVtXS5jbGFzc0xpc3QuYWRkKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIChhZGROdW0gKiAyKV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtYXJpbmVJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsYXNoaW5nLWljb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0cm9sSWNvbi5jbGFzc0xpc3QuYWRkKCdmbGFzaGluZy1pY29uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnICYmIGluZGV4ID4gODkpIHticmVha31cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnICYmIChpbmRleCAlIDEwKSA+IDgpIHticmVha31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyBhZGROdW1dLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0cm9sSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmbGFzaGluZy1pY29uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFkZE51bSA9IDBcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICAgICAgICAgICAgICBhZGROdW0gPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgICAgICAgICBhZGROdW0gPSAxMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwMUJvYXJkLnNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiBpbmRleCA+IDU5KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2JyAmJiAoaW5kZXggJSAxMCkgPiA1KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgYWRkTnVtXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIChhZGROdW0gKiAyKV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyAoYWRkTnVtICogMyldLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgKGFkZE51bSAqIDQpXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnICYmIGluZGV4ID4gNjkpIHticmVha31cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnICYmIChpbmRleCAlIDEwKSA+IDYpIHticmVha31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyBhZGROdW1dLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgKGFkZE51bSAqIDIpXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIChhZGROdW0gKiAzKV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnICYmIGluZGV4ID4gNzkpIHticmVha31cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnICYmIChpbmRleCAlIDEwKSA+IDcpIHticmVha31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyBhZGROdW1dLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgKGFkZE51bSAqIDIpXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnICYmIGluZGV4ID4gODkpIHticmVha31cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnICYmIChpbmRleCAlIDEwKSA+IDgpIHticmVha31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyBhZGROdW1dLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pIDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hpcFBsYWNlbWVudEV2ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkRnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJpZW5kbHktZ3JpZCcpO1xuXG4gICAgICAgIGhvdmVyUHJldmlldygpO1xuICAgICAgICBjb25zdCBwbGFjZVNoaXBzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHAxQm9hcmQuc2hpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FycmllciA9IHNoaXAoNSwgJ2NhcnJpZXInKTtcbiAgICAgICAgICAgICAgICAgICAgcDFCb2FyZC5wbGFjZVNoaXAoY2FycmllciwgcDFQbGF5QXJlYSwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGFpbnRET00ucGFpbnRGcmllbmRseShwMUJvYXJkLCBwMVBsYXlBcmVhKTtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJQcmV2aWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhdHRsZXNoaXAgPSBzaGlwKDQsICdiYXR0bGVzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgIHAxQm9hcmQucGxhY2VTaGlwKGJhdHRsZXNoaXAsIHAxUGxheUFyZWEsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBhaW50RE9NLnBhaW50RnJpZW5kbHkocDFCb2FyZCwgcDFQbGF5QXJlYSk7XG4gICAgICAgICAgICAgICAgICAgIGhvdmVyUHJldmlldygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXN0cm95ZXIgPSBzaGlwKDMsJ2Rlc3Ryb3llcicpO1xuICAgICAgICAgICAgICAgICAgICBwMUJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIsIHAxUGxheUFyZWEsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBhaW50RE9NLnBhaW50RnJpZW5kbHkocDFCb2FyZCwgcDFQbGF5QXJlYSk7XG4gICAgICAgICAgICAgICAgICAgIGhvdmVyUHJldmlldygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJtYXJpbmUgPSBzaGlwKDMsICdzdWJtYXJpbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgcDFCb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLCBwMVBsYXlBcmVhLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwYWludERPTS5wYWludEZyaWVuZGx5KHAxQm9hcmQsIHAxUGxheUFyZWEpO1xuICAgICAgICAgICAgICAgICAgICBob3ZlclByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBsZXQgcGF0cm9sQm9hdCA9IHNoaXAoMiwgJ3BhdHJvbC1ib2F0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHAxQm9hcmQucGxhY2VTaGlwKHBhdHJvbEJvYXQsIHAxUGxheUFyZWEsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBhaW50RE9NLnBhaW50RnJpZW5kbHkocDFCb2FyZCwgcDFQbGF5QXJlYSk7XG4gICAgICAgICAgICAgICAgICAgIGhvdmVyUHJldmlldygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhjZWxsKSB7XG4gICAgICAgICAgICBsZXQgZnJpZW5kbHlDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmllbmRseS1jZWxsJylcbiAgICAgICAgICAgIGxldCBjZWxsTnVtYmVyID0gQXJyYXkuZnJvbShmcmllbmRseUNlbGxzKS5pbmRleE9mKGNlbGwpO1xuICAgICAgICAgICAgbGV0IHkgPSBjZWxsTnVtYmVyICUgMTA7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoY2VsbE51bWJlciAvIDEwKTtcbiAgICAgICAgICAgIHJldHVybiBbeCx5XTtcbiAgICAgICAgfVxuICAgICAgICBncmlkRnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmllbmRseS1jZWxsJykpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBnZXRDb29yZGluYXRlcyhldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcHMoY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbnN0IGNlbnRlckZyaWVuZGx5ID0gKCkgPT4ge1xuICAgICAgICBlbmVteUZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNvbnRyb2xzRGlhbG9ndWUudGV4dENvbnRlbnQgPSAnUHJlc3MgXCJSXCIgdG8gcm90YXRlIHlvdXIgc2hpcCEnO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFJhbmRvbWl6ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgcmFuZG9taXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcDFCb2FyZC5zaGlwcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcDFQbGF5QXJlYSA9IHAxQm9hcmQucGxheUFyZWEoKTtcbiAgICAgICAgICAgIHAxQm9hcmQucGxhY2VTaGlwc0F0UmFuZG9tKHAxUGxheUFyZWEsIHAxQm9hcmQpO1xuICAgICAgICAgICAgcGFpbnRET00ucGFpbnRGcmllbmRseShwMUJvYXJkLCBwMVBsYXlBcmVhKTtcbiAgICAgICAgICAgIGZyaWVuZGx5SWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmxhc2hpbmctaWNvbicpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHNldFJlc2V0UGxhY2VtZW50QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICByZXNldFBsYWNlbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHAxQm9hcmQuc2hpcHMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHAxUGxheUFyZWEgPSBwMUJvYXJkLnBsYXlBcmVhKCk7XG4gICAgICAgICAgICBwYWludERPTS5wYWludEZyaWVuZGx5KHAxQm9hcmQsIHAxUGxheUFyZWEpO1xuICAgICAgICAgICAgZnJpZW5kbHlJY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmbGFzaGluZy1pY29uJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBob3ZlclByZXZpZXcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHNldENvbmZpcm1QbGFjZW1lbnRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocDFCb2FyZC5zaGlwcy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgICAgICByYW5kb21pemVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgICAgIHJlc2V0UGxhY2VtZW50QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICBlbmVteUZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgY29udHJvbHNEaWFsb2d1ZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzRGlhbG9ndWUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50T3B0aW9ucy5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgICAgICBib3RoRnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnN0eWxlLmhlaWdodCA9ICczOHJlbSc7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB2c0NQVSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHNldFJlc2V0R2FtZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgcmVzZXRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZU92ZXJTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHAxQm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgICAgICAgICAgIHAxUGxheUFyZWEgPSBwMUJvYXJkLnBsYXlBcmVhKCk7XG4gICAgICAgICAgICBjcHVCb2FyZCA9IGdhbWVib2FyZCgpO1xuICAgICAgICAgICAgY3B1UGxheUFyZWEgPSBjcHVCb2FyZC5wbGF5QXJlYSgpO1xuICAgICAgICAgICAgZnJpZW5kbHlJY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtZmlsdGVyJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZW5lbXlJY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtZmlsdGVyJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29udHJvbHNEaWFsb2d1ZS5zdHlsZS5oZWlnaHQgPSAnMnJlbSc7XG4gICAgICAgICAgICBwbGFjZW1lbnRPcHRpb25zLnN0eWxlLmhlaWdodCA9ICcxMCUnO1xuICAgICAgICAgICAgYm90aEZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGZyYW1lLnN0eWxlLmhlaWdodCA9ICc0NXJlbSc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcGFpbnRET00ucGFpbnRGcmllbmRseShwMUJvYXJkLCBwMVBsYXlBcmVhKTtcbiAgICAgICAgICAgIGNlbnRlckZyaWVuZGx5KCk7XG4gICAgICAgICAgICBwYWludERPTS5oaWdobGlnaHRGcmllbmRseSgpO1xuICAgICAgICAgICAgaG92ZXJQcmV2aWV3KCk7XG4gICAgICAgICAgICByYW5kb21pemVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnXG4gICAgICAgICAgICByZXNldFBsYWNlbWVudEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja1NoaXBzRG93biA9IChib2FyZCwgcGxheWVyKSA9PiB7XG4gICAgICAgIGJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHMgPT09IDUgJiYgc2hpcC5uYW1lID09PSAnY2FycmllcicpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09PSAnZW5lbXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15Q2Fycmllckljb24uY2xhc3NMaXN0LmFkZCgncmVkLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnZnJpZW5kbHknKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcnJpZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3JlZC1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYgKHNoaXAuaGl0cyA9PT0gNCAmJiBzaGlwLm5hbWUgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT09ICdlbmVteScpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlCYXR0bGVzaGlwSWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQtZmlsdGVyJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdmcmllbmRseScpIHtcbiAgICAgICAgICAgICAgICAgICAgYmF0dGxlc2hpcEljb24uY2xhc3NMaXN0LmFkZCgncmVkLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHMgPT09IDMgJiYgc2hpcC5uYW1lID09PSAnZGVzdHJveWVyJykge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT09ICdlbmVteScpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlEZXN0cm95ZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3JlZC1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllciA9PT0gJ2ZyaWVuZGx5Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXN0cm95ZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3JlZC1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hpcC5oaXRzID09PSAzICYmIHNoaXAubmFtZSA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09PSAnZW5lbXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15U3VibWFyaW5lSWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQtZmlsdGVyJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdmcmllbmRseScpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWFyaW5lSWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQtZmlsdGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNoaXAuaGl0cyA9PT0gMiAmJiBzaGlwLm5hbWUgPT09ICdwYXRyb2wtYm9hdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09PSAnZW5lbXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15UGF0cm9sSWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQtZmlsdGVyJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdmcmllbmRseScpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0cm9sSWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQtZmlsdGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRm9yUDFXaW4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChjcHVCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBnYW1lT3ZlclRleHQuaW5uZXJIVE1MID0gJ1lvdSBXb24hIDxicj4gV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj8nXG4gICAgICAgICAgICBwYWludERPTS50b2dnbGVFbmVteUNsaWNrYWJsZSgpO1xuICAgICAgICAgICAgcmV0dXJuICd3aW4nXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrRm9yQ1BVV2luID0gKCkgPT4ge1xuICAgICAgICBpZiAocDFCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBnYW1lT3ZlclRleHQuaW5uZXJIVE1MID0gJ1RoZSBDUFUgV29uISA8YnI+IFdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgYWdhaW4/J1xuICAgICAgICAgICAgcmV0dXJuICd3aW4nXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHZzQ1BVKCkge1xuICAgICAgICBjcHVCb2FyZC5wbGFjZVNoaXBzQXRSYW5kb20oY3B1UGxheUFyZWEsIGNwdUJvYXJkKTtcblxuICAgICAgICBwYWludERPTS5wYWludEZyaWVuZGx5KHAxQm9hcmQsIHAxUGxheUFyZWEpO1xuICAgICAgICBsZXQgY3VycmVudENQVUhpdHNMZW5ndGggPSBjcHVCb2FyZC5oaXRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGN1cnJlbnRQMUhpdHNMZW5ndGggPSBwMUJvYXJkLmhpdHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIXAxQm9hcmQuYWxsU3VuaygpICYmICFjcHVCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIC8vIEhpZ2hsaWdodCAmIHBhaW50IHRoZSBlbmVteSBib2FyZFxuICAgICAgICAgICAgcGFpbnRET00ucGFpbnRFbmVteShjcHVCb2FyZCwgY3B1UGxheUFyZWEpO1xuICAgICAgICAgICAgLy8gRW5hYmxlIGNsaWNrcyBvbiB0aGUgZW5lbXkgYm9hcmQgc28gdGhlIHBsYXllciBjYW4gdGFrZSBhIHR1cm5cbiAgICAgICAgICAgIHBhaW50RE9NLnRvZ2dsZUVuZW15Q2xpY2thYmxlKCk7XG5cbiAgICAgICAgICAgIGRvIHsgLy8gV2FpdCBmb3IgdGhlIHBsYXllcidzIHR1cm5cbiAgICAgICAgICAgICAgICBjdXJyZW50Q1BVSGl0c0xlbmd0aCA9IGNwdUJvYXJkLmhpdHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgYXdhaXQgcDEud2FpdEZvclBsYXllclR1cm4oKTtcblxuICAgICAgICAgICAgICAgIGNoZWNrU2hpcHNEb3duKGNwdUJvYXJkLCAnZW5lbXknKTtcbiAgICAgICAgICAgICAgICBwYWludERPTS5wYWludEVuZW15KGNwdUJvYXJkLCBjcHVQbGF5QXJlYSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tGb3JQMVdpbigpID09PSAnd2luJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9OyAvLyBDaGVjayBpZiB0aGUgcGxheWVyIG1hZGUgYSB3aW5uaW5nIG1vdmVcbiAgICAgICAgICAgIC8vIEdpdmUgdGhlIHBsYXllciBhbiBleHRyYSB0dXJuIGlmIHRoZXkgbGFuZCBhIHNob3RcbiAgICAgICAgICAgIH0gd2hpbGUgKGNwdUJvYXJkLmhpdHMubGVuZ3RoID4gY3VycmVudENQVUhpdHNMZW5ndGgpXG5cbiAgICAgICAgICAgIC8vIERlbGF5IHRoZSB0aW1lIGJldHdlZW4gdHVybiBzd2Fwc1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwKSk7IFxuICAgICAgICAgICAgLy8gRGlzYWJsZSBjbGlja3Mgb24gdGhlIGVuZW15IGJvYXJkIGR1cmluZyB0aGUgQ1BVJ3MgdHVyblxuICAgICAgICAgICAgcGFpbnRET00udG9nZ2xlRW5lbXlDbGlja2FibGUoKTtcbiAgICAgICAgICAgIC8vIEhpZ2hsaWdoIHRoZSBmcmllbmRseSBib2FyZFxuICAgICAgICAgICAgcGFpbnRET00uaGlnaGxpZ2h0RnJpZW5kbHkoKTtcblxuICAgICAgICAgICAgZG8geyAvLyBFeGVjdXRlIENQVSdzIHR1cm5cbiAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgOTAwKSk7IC8vIERlbGF5IHRoZSBDUFUncyB0dXJuXG4gICAgICAgICAgICAgICAgY3VycmVudFAxSGl0c0xlbmd0aCA9IHAxQm9hcmQuaGl0cy5sZW5ndGhcbiAgICAgICAgICAgICAgICBjcHUuY3B1VHVybihwMVBsYXlBcmVhLCBwMUJvYXJkKTtcbiAgICAgICAgICAgICAgICBjaGVja1NoaXBzRG93bihwMUJvYXJkLCAnZnJpZW5kbHknKTsgLy8gVXBkYXRlIHRoZSBzaGlwcyBkb3duIGdyYXBoaWNzXG4gICAgICAgICAgICAgICAgcGFpbnRET00ucGFpbnRGcmllbmRseShwMUJvYXJkLCBwMVBsYXlBcmVhKTtcbiAgICAgICAgICAgICAgICBjaGVja0ZvckNQVVdpbigpOyAvLyBDaGVjayBpZiB0aGUgQ1BVIG1hZGUgYSB3aW5uaW5nIG1vdmVcbiAgICAgICAgICAgIH0gd2hpbGUgKHAxQm9hcmQuaGl0cy5sZW5ndGggPiBjdXJyZW50UDFIaXRzTGVuZ3RoKVxuXG4gICAgICAgICAgICAvLyBQYWludCB0aGUgcGxheWVyJ3MgYm9hcmRcbiAgICAgICAgICAgIHBhaW50RE9NLnBhaW50RnJpZW5kbHkocDFCb2FyZCwgcDFQbGF5QXJlYSk7XG4gICAgICAgICAgICAvLyBEZWxheSB0aGUgdGltZSBiZXR3ZWVuIHR1cm4gc3dhcHNcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMCkpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBlc3RhYmxpc2hHYW1lVnNDUFUgPSAoKSA9PiB7XG4gICAgICAgIGNlbnRlckZyaWVuZGx5KCk7XG4gICAgICAgIHBhaW50RE9NLnBhaW50RnJpZW5kbHkocDFCb2FyZCwgcDFQbGF5QXJlYSk7XG4gICAgICAgIHBhaW50RE9NLmhpZ2hsaWdodEZyaWVuZGx5KCk7XG4gICAgICAgIHNoaXBQbGFjZW1lbnRFdmVudCgpO1xuICAgICAgICBzZXRSYW5kb21pemVCdXR0b24oKTtcbiAgICAgICAgc2V0UmVzZXRQbGFjZW1lbnRCdXR0b24oKTtcbiAgICAgICAgc2V0Q29uZmlybVBsYWNlbWVudEJ1dHRvbigpO1xuICAgICAgICBzZXRSZXNldEdhbWVCdXR0b24oKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXN0YWJsaXNoR2FtZVZzQ1BVLFxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWxvb3A7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vdGVtcGxhdGUuaHRtbCc7XG5jb25zdCBnYW1lbG9vcCA9IHJlcXVpcmUoJy4uL3NyYy9nYW1lbG9vcC5qcycpO1xuXG5nYW1lbG9vcCgpLmVzdGFibGlzaEdhbWVWc0NQVSgpOyIsImNvbnN0IHBhaW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IGVuZW15Q2xpY2thYmxlID0gdHJ1ZTtcblxuICAgIGNvbnN0IHRvZ2dsZUVuZW15Q2xpY2thYmxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbmVteUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktZ3JpZCcpO1xuICAgICAgICBpZiAoZW5lbXlDbGlja2FibGUpIHtcbiAgICAgICAgICAgIGVuZW15R3JpZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICAgICAgZW5lbXlDbGlja2FibGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuZW15R3JpZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgZW5lbXlDbGlja2FibGUgPSB0cnVlO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgaGlnaGxpZ2h0RnJpZW5kbHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVuZW15RnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktZnJhbWUnKTtcbiAgICAgICAgZW5lbXlGcmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQtZnJhbWUnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZyaWVuZGx5RnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJpZW5kbHktZnJhbWUnKTtcbiAgICAgICAgZnJpZW5kbHlGcmFtZS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQtZnJhbWUnKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGhpZ2hsaWdodEVuZW15ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmcmllbmRseUZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyaWVuZGx5LWZyYW1lJylcbiAgICAgICAgZnJpZW5kbHlGcmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQtZnJhbWUnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVuZW15RnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktZnJhbWUnKTtcbiAgICAgICAgZW5lbXlGcmFtZS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQtZnJhbWUnKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5zQ29vcmRzID0gKGFycmF5LCBjb29yZGluYXRlcykgPT4gIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LnNvbWUoY29vcmQgPT4gY29vcmQuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IGNvb3JkaW5hdGVzW2luZGV4XSkpIFxuICAgIH07XG5cbiAgICBjb25zdCBwYWludEZyaWVuZGx5ID0gKGdhbWVib2FyZCwgcGxheUFyZWEpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcmllbmRseS1ncmlkJyk7XG4gICAgICAgIGdyaWRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIGFsbCBvZiB0aGUgY2hpbGQgbm9kZXMgZnJvbSB0aGUgcHJldmlvdXMgcnVuXG4gICAgICAgIFxuICAgICAgICBsZXQgbWlzc2VzID0gZ2FtZWJvYXJkLm1pc3NlcztcbiAgICAgICAgbGV0IGhpdHMgPSBnYW1lYm9hcmQuaGl0cztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8gaSA9IHkgYXhpc1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgnZ3JpZC1yb3cnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7IC8vIGogPSB4IGF4aXNcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdmcmllbmRseS1jZWxsJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zc2libGVTaGlwID0gcGxheUFyZWFbaV1bal07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zQ29vcmRzKG1pc3NlcywgW2ksal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250YWluc0Nvb3JkcyhoaXRzLCBbaSxqXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdmcmllbmRseS1oaXQnKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBvbmx5IGZyaWVuZGx5IHNoaXBzIHNob3VsZCBldmVyIHJlY2lldmUgdGhlIHNoaXAgY2xhc3NcbiAgICAgICAgICAgICAgICAvLyBlbmVteSBzaGlwcyBhcmUgbmV2ZXIgZ2l2ZW4gZ3JhcGhpY3NcbiAgICAgICAgICAgICAgICBpZiAocG9zc2libGVTaGlwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBOYW1lID0gcG9zc2libGVTaGlwLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChzaGlwTmFtZSk7IFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGFpbnRFbmVteSA9IChnYW1lYm9hcmQsIHBsYXlBcmVhKSA9PiB7XG4gICAgICAgIGhpZ2hsaWdodEVuZW15KCk7IC8vIFRoZSBlbmVteSBpcyBhbHdheXMgdGhlIGZpcnN0IHRvIGJlIHRhcmdldGVkXG4gICAgICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktZ3JpZCcpXG4gICAgICAgIGdyaWRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIGFsbCBvZiB0aGUgY2hpbGQgbm9kZXMgZnJvbSB0aGUgcHJldmlvdXMgcnVuXG5cbiAgICAgICAgbGV0IG1pc3NlcyA9IGdhbWVib2FyZC5taXNzZXM7XG4gICAgICAgIGxldCBoaXRzID0gZ2FtZWJvYXJkLmhpdHM7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ2dyaWQtcm93Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2VuZW15LWNlbGwnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbaSxqXSwgcGxheUFyZWEpXG4gICAgICAgICAgICAgICAgICAgIHBhaW50RW5lbXkoZ2FtZWJvYXJkLCBwbGF5QXJlYSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbnNDb29yZHMobWlzc2VzLCBbaSxqXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5zQ29vcmRzKGhpdHMsIFtpLGpdKSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2VuZW15LWhpdCcpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2dnbGVFbmVteUNsaWNrYWJsZSxcbiAgICAgICAgaGlnaGxpZ2h0RnJpZW5kbHksXG4gICAgICAgIHBhaW50RnJpZW5kbHksXG4gICAgICAgIHBhaW50RW5lbXksXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGFpbnRCb2FyZDtcbiIsImNvbnN0IHBsYXllciA9ICgpID0+IHtcbiAgICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcHVUdXJuID0gKHBsYXlBcmVhLCBnYW1lQm9hcmQpID0+IHtcbiAgICAgICAgbGV0IGhpdHNMZW5ndGggPSBnYW1lQm9hcmQuaGl0cy5sZW5ndGg7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBsZXQgcHJldmlvdXNIaXQgPSBbXTtcbiAgICAgICAgbGV0IHByZXZpb3VzWCA9IDA7XG4gICAgICAgIGxldCBwcmV2aW91c1kgPSAwO1xuICAgICAgICBsZXQgcGx1c1ggPSAwO1xuICAgICAgICBsZXQgcGx1c1kgPSAwO1xuICAgICAgICBsZXQgbWludXNYID0gMDtcbiAgICAgICAgbGV0IG1pbnVzWSA9IDA7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGogPSAxO1xuICAgICAgICAvLyBSYW5kb21pemUgdGhlIGZpcnN0IHNob3QgdW50aWwgYSBoaXQgaXMgZm91bmRcbiAgICAgICAgaWYgKGhpdHNMZW5ndGggPT09IDAgKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgICAgICAgICBsZXQgeSA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgICAgICAgICBjb29yZGluYXRlcyA9IFt4LCB5XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBldmVyeSBjb29yZGluYXRlIGluIGEgZ2l2ZW4gYXJyYXkgYWdhaW5zdCB0aGUgY3VycmVudCB0byBlbnN1cmUgYSBkdXBsaWNhdGUgc2hvdCBpc24ndCBtYWRlXG4gICAgICAgIGNvbnN0IGNvbnRhaW5zQ29vcmRzID0gKGFycmF5KSA9PiBhcnJheVswXSA9PT0gY29vcmRpbmF0ZXNbMF0gJiYgYXJyYXlbMV0gPT09IGNvb3JkaW5hdGVzWzFdO1xuICAgICAgICAvLyBQcmVwYXJlIHRoZSB2YXJpYWJsZXMgdXNlZCBmb3IgZm9sbG93IHVwIHNob3RzXG4gICAgICAgIGlmIChoaXRzTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJldmlvdXNIaXQgPSBnYW1lQm9hcmQuaGl0c1toaXRzTGVuZ3RoIC0gal07XG4gICAgICAgICAgICBwcmV2aW91c1ggPSBwcmV2aW91c0hpdFswXVxuICAgICAgICAgICAgcHJldmlvdXNZID0gcHJldmlvdXNIaXRbMV1cbiAgICAgICAgICAgIHBsdXNYID0gcHJldmlvdXNYICsgMTtcbiAgICAgICAgICAgIHBsdXNZID0gcHJldmlvdXNZICsgMTtcbiAgICAgICAgICAgIG1pbnVzWCA9IHByZXZpb3VzWCAtIDE7XG4gICAgICAgICAgICBtaW51c1kgPSBwcmV2aW91c1kgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICgoZ2FtZUJvYXJkLmhpdHMuc29tZShjb250YWluc0Nvb3JkcykgfHwgZ2FtZUJvYXJkLm1pc3Nlcy5zb21lKGNvbnRhaW5zQ29vcmRzKSkgfHwgY29vcmRpbmF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBUYXJnZXQgcG9zaXRpb25zIG5leHQgdG8gYSBwcmV2aW91cyBoaXRcbiAgICAgICAgICAgIGlmIChoaXRzTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGhpdHNMZW5ndGggPSBnYW1lQm9hcmQuaGl0cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaSsrOyAvLyBLZWVwIHRyYWNrIG9mIGhvdyBtYW55IHRpbWVzIHRoZSB3aGlsZSBsb29wIGhhcyBwZXJmb3JtZWQgYW4gaXRlcmF0aW9uIGZvciB0aGUgY3VycmVudCBoaXRcbiAgICAgICAgICAgICAgICBpZiAocGx1c1ggPD0gOSAmJiBpID09PSAxKSB7IFxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFtwbHVzWCwgcHJldmlvdXNZXVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWludXNYID49IDAgJiYgaSA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFttaW51c1gsIHByZXZpb3VzWV1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsdXNZIDw9IDkgJiYgaSA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFtwcmV2aW91c1gsIHBsdXNZXVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWludXNZID49IDAgJiYgaSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFtwcmV2aW91c1gsIG1pbnVzWV1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGogPCBoaXRzTGVuZ3RoKSB7IC8vIEdvIGJhY2t3YXJkcyB0aHJvdWdoIHRoZSBhcnJheSBvZiBoaXRzIHdoZW4gdGhlIGxhdGVzdCBoaXQgaGFzIG5vIG90aGVyIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNIaXQgPSBnYW1lQm9hcmQuaGl0c1toaXRzTGVuZ3RoIC0gal07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHByZXZpb3VzSGl0WzBdO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1kgPSBwcmV2aW91c0hpdFsxXTtcbiAgICAgICAgICAgICAgICAgICAgcGx1c1ggPSBwcmV2aW91c1ggKyAxO1xuICAgICAgICAgICAgICAgICAgICBwbHVzWSA9IHByZXZpb3VzWSArIDE7XG4gICAgICAgICAgICAgICAgICAgIG1pbnVzWCA9IHByZXZpb3VzWCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIG1pbnVzWSA9IHByZXZpb3VzWSAtIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmFuZG9taXplIHRoZSBjb29yZGluYXRlcyB3aGVuIG5vIGNhbGN1bGF0ZWQgc2hvdHMgY2FuIGJlIG1hZGVcbiAgICAgICAgICAgICAgICAgICAgeCA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFt4LHldOyAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1yYW5kb21pemUgZHVwbGljYXRlcyB3aGVuIGEgaGl0IGhhc24ndCBiZWVuIGZvdW5kXG4gICAgICAgICAgICAgICAgeCA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgICAgICAgICAgICAgeSA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbeCx5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcywgcGxheUFyZWEpO1xuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gICAgfTtcblxuICAgIGNvbnN0IHdhaXRGb3JQbGF5ZXJUdXJuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbmVteUNlbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZW5lbXktY2VsbCcpO1xuICAgICAgICBjb25zdCBjZWxsc0FycmF5ID0gQXJyYXkuZnJvbShlbmVteUNlbGxzKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNlbGxzQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpIHx8IGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmVteS1oaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGNsaWNrIGV2ZW50IGlmIHRoZSBwb3NpdGlvbiBoYXMgYmVlbiB0YXJnZXRlZCBiZWZvcmVcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gcGxheWVyQ2xpY2tMaXN0ZW5lcigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciB0byBwcmV2ZW50IG11bHRpcGxlIGNsaWNrc1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVyQ2xpY2tMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgdGhlIHByb21pc2UgdG8gY29udGludWUgdGhlIGdhbWUgbG9vcFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNwdVR1cm4sXG4gICAgICAgIHdhaXRGb3JQbGF5ZXJUdXJuLFxuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllcjsiLCJjb25zdCBzaGlwID0gKGxlbmd0aCwgbmFtZSA9ICdkZWZhdWx0LXNoaXAnKSA9PiB7XG4gICAgbGV0IGhpdHMgPSAwO1xuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoaGl0cyA8IGxlbmd0aCkge1xuICAgICAgICAgICAgaGl0cysrO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXRzID09IGxlbmd0aDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGVuZ3RoLCBcbiAgICAgICAgZ2V0IGhpdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gaGl0c1xuICAgICAgICB9LFxuICAgICAgICBzZXQgaGl0cyh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIDw9IGxlbmd0aCAmJiB2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBoaXRzID0gdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGl0LCBcbiAgICAgICAgaXNTdW5rXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGlwOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==