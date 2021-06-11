/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/Index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/Index.jsx":
/*!****************************************!*\
  !*** ./app/javascript/packs/Index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/app/javascript/packs/Index.jsx: Support for the experimental syntax 'jsx' isn't currently enabled (12:5):\n\n  10 | document.addEventListener('DOMContentLoaded', () => {\n  11 |   ReactDOM.render(\n> 12 |     <App/>,\n     |     ^\n  13 |     document.body.appendChild(document.createElement('div')),\n  14 |   )\n  15 | })\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:816:17)\n    at Parser.raiseWithData (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:809:17)\n    at Parser.expectOnePlugin (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:9911:18)\n    at Parser.parseExprAtom (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:11291:22)\n    at Parser.parseExprSubscripts (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10869:23)\n    at Parser.parseUpdate (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10849:21)\n    at Parser.parseMaybeUnary (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10827:23)\n    at Parser.parseExprOps (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10684:23)\n    at Parser.parseMaybeConditional (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10658:23)\n    at Parser.parseMaybeAssign (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10621:21)\n    at /mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10589:39\n    at Parser.allowInAnd (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:12336:12)\n    at Parser.parseMaybeAssignAllowIn (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10589:17)\n    at Parser.parseExprListItem (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:12070:18)\n    at Parser.parseCallExpressionArguments (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:11073:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10980:29)\n    at Parser.parseSubscript (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10913:19)\n    at Parser.parseSubscripts (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10886:19)\n    at Parser.parseExprSubscripts (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10875:17)\n    at Parser.parseUpdate (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10849:21)\n    at Parser.parseMaybeUnary (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10827:23)\n    at Parser.parseExprOps (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10684:23)\n    at Parser.parseMaybeConditional (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10658:23)\n    at Parser.parseMaybeAssign (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10621:21)\n    at Parser.parseExpressionBase (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10567:23)\n    at /mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10561:39\n    at Parser.allowInAnd (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:12336:12)\n    at Parser.parseExpression (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:10561:17)\n    at Parser.parseStatementContent (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:12667:23)\n    at Parser.parseStatement (/mnt/c/Users/USER/Desktop/ICTQuery_GIT/ictquery/node_modules/@babel/parser/lib/index.js:12536:17)");

/***/ })

/******/ });
//# sourceMappingURL=Index-4f94a5ea20f8679e1a06.js.map