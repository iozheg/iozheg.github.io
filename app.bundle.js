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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/highlight.js/styles/github.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/highlight.js/styles/github.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-subst {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-literal,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag .hljs-attr {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-doctag {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-section,\n.hljs-selector-id {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-type,\n.hljs-class .hljs-title {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-name,\n.hljs-attribute {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-regexp,\n.hljs-link {\n  color: #009926;\n}\n\n.hljs-symbol,\n.hljs-bullet {\n  color: #990073;\n}\n\n.hljs-built_in,\n.hljs-builtin-name {\n  color: #0086b3;\n}\n\n.hljs-meta {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  margin: 0;\n}\nhtml, body {\n  height: 100%;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: [left] 1fr [right] 1fr;\n  grid-template-rows: 85px 40px 450px auto auto;\n  grid-template-areas:\n    \"header header\"\n    \"left-title right-title\"\n    \"left right\"\n    \"left-control right-control\"\n    \"bottom bottom\";\n  grid-gap: 5px;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n}\n.textarea-container {\n  height: 450px;\n  overflow: auto;\n  padding: 5px 3px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.header {\n  grid-area: header;\n  height: 60px;\n  background-color: #286090;\n  color: white;\n  text-align: center;\n  padding-top: 10px;\n  margin-bottom: 25px;\n}\n\n.left-title {\n  grid-area: left-title;\n}\n.right-title {\n  grid-area: right-title;\n}\n.title {\n  align-self: flex-end;\n  font-size: 32px;\n  text-align: center;\n}\n\n.left {\n  grid-area: left;\n}\n.right {\n  grid-area: right;\n}\n\n.left-control {\n  grid-area: left-control;\n  justify-self: end;\n}\n.right-control {\n  grid-area: right-control;\n  justify-self: end;\n}\n#input-textarea {\n  height: 100%;\n}\n#output-textarea {\n  padding: 0.5rem;\n  color: #277f31;\n}\n\n.bottom {\n  grid-area: bottom;\n  align-self: end;\n  justify-self: center;\n  padding: 10px 0 20px 0;\n}\n\n\n#parse-button {\n  background-color: #286090;\n  color: white;\n}\n#clipboard-button {\n  background-color: #5cb85c;\n  color: white;\n}\n.button {\n  height: 40px;\n  min-width: 80px;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n  margin: 0 5px;\n  background-color: white;\n  font-size: 16px;\n}\n.button:hover {\n  cursor: pointer;\n  background-color: #e6e6e6;\n}\n.button:active {\n  background-color: #d4d4d4;\n}\n.next-row {\n  display: flex;\n  justify-content: flex-end;\n  padding: 5px 0;\n  margin: 0 5px;\n}\n.next-row > input {\n  margin: 2px 3px;\n  height: 15px;\n  width: 15px;\n  cursor: pointer;\n}\n.next-row > label {\n  cursor: pointer;\n}\n\n\n/* JSDoc highlighting. */\n.jsdoc-tag {\n  color: #1720fa;\n}\n.jsdoc-type {\n  color: #3086b6;\n}\n/* .jsdoc-prop-name {\n  color: #00187c;\n} */\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/highlight.js/lib/highlight.js":
/*!****************************************************!*\
  !*** ./node_modules/highlight.js/lib/highlight.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function(factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window ||
                     typeof self === 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  if(true) {
    factory(exports);
  } else {}

}(function(hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases   = {};

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  // The object will be assigned by the build tool. It used to synchronize API 
  // of external language files with minified version of the highlight.js library.
  var API_REPLACES;

  var spanEndTag = '</span>';

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };


  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      return getLanguage(match[1]) ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i];

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  function inherit(parent) {  // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent)
      result[key] = parent[key];
    objects.forEach(function(obj) {
      for (key in obj)
        result[key] = obj[key];
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3)
          offset += child.nodeValue.length;
        else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:

      if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;

      ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';}
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function expand_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function(variant) {
        return inherit(mode, {variants: null}, variant);
      });
    }
    return mode.cached_variants || (mode.endsWithParent && [inherit(mode)]) || [mode];
  }

  function restoreLanguageApi(obj) {
    if(API_REPLACES && !obj.langApiRestored) {
      obj.langApiRestored = true;
      for(var key in API_REPLACES)
        obj[key] && (obj[API_REPLACES[key]] = obj[key]);
      (obj.contains || []).concat(obj.variants || []).forEach(restoreLanguageApi);
    }
  }

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    // joinRe logically computes regexps.join(separator), but fixes the
    // backreferences so they continue to match.
    function joinRe(regexps, separator) {
      // backreferenceRe matches an open parenthesis or backreference. To avoid
      // an incorrect parse, it additionally matches the following:
      // - [...] elements, where the meaning of parentheses and escapes change
      // - other escape sequences, so we do not misparse escape sequences as
      //   interesting elements
      // - non-matching or lookahead parentheses, which do not capture. These
      //   follow the '(' with a '?'.
      var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
      var numCaptures = 0;
      var ret = '';
      for (var i = 0; i < regexps.length; i++) {
        var offset = numCaptures;
        var re = reStr(regexps[i]);
        if (i > 0) {
          ret += separator;
        }
        while (re.length > 0) {
          var match = backreferenceRe.exec(re);
          if (match == null) {
            ret += re;
            break;
          }
          ret += re.substring(0, match.index);
          re = re.substring(match.index + match[0].length);
          if (match[0][0] == '\\' && match[1]) {
            // Adjust the backreference.
            ret += '\\' + String(Number(match[1]) + offset);
          } else {
            ret += match[0];
            if (match[0] == '(') {
              numCaptures++;
            }
          }
        }
      }
      return ret;
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords) {
        var compiled_keywords = {};

        var flatten = function(className, str) {
          if (language.case_insensitive) {
            str = str.toLowerCase();
          }
          str.split(' ').forEach(function(kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          });
        };

        if (typeof mode.keywords === 'string') { // string
          flatten('keyword', mode.keywords);
        } else {
          objectKeys(mode.keywords).forEach(function (className) {
            flatten(className, mode.keywords[className]);
          });
        }
        mode.keywords = compiled_keywords;
      }
      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin)
          mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (mode.endSameAsBegin)
          mode.end = mode.begin;
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
        return expand_mode(c === 'self' ? mode : c);
      }));
      mode.contains.forEach(function(c) {compileMode(c, mode);});

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators =
        mode.contains.map(function(c) {
          return c.beginKeywords ? '\\.?(?:' + c.begin + ')\\.?' : c.begin;
        })
        .concat([mode.terminator_end, mode.illegal])
        .map(reStr)
        .filter(Boolean);
      mode.terminators = terminators.length ? langRe(joinRe(terminators, '|'), true) : {exec: function(/*s*/) {return null;}};
    }
    
    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:

  - relevance (int)
  - value (an HTML string with highlighting markup)

  */
  function highlight(name, value, ignore_illegals, continuation) {

    function escapeRe(value) {
      return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
    }

    function subMode(lexeme, mode) {
      var i, length;

      for (i = 0, length = mode.contains.length; i < length; i++) {
        if (testRe(mode.contains[i].beginRe, lexeme)) {
          if (mode.contains[i].endSameAsBegin) {
            mode.contains[i].endRe = escapeRe( mode.contains[i].beginRe.exec(lexeme)[0] );
          }
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function isIllegal(lexeme, mode) {
      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan    = '<span class="' + classPrefix,
          closeSpan   = leaveOpen ? '' : spanEndTag;

      openSpan += classname + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords)
        return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ?
                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className? buildSpan(mode.className, '', true): '';
      top = Object.create(mode, {parent: {value: top}});
    }

    function processLexeme(buffer, lexeme) {

      mode_buffer += buffer;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      var new_mode = subMode(lexeme, top);
      if (new_mode) {
        if (new_mode.skip) {
          mode_buffer += lexeme;
        } else {
          if (new_mode.excludeBegin) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
            mode_buffer = lexeme;
          }
        }
        startNewMode(new_mode, lexeme);
        return new_mode.returnBegin ? 0 : lexeme.length;
      }

      var end_mode = endOfMode(top, lexeme);
      if (end_mode) {
        var origin = top;
        if (origin.skip) {
          mode_buffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            mode_buffer = lexeme;
          }
        }
        do {
          if (top.className) {
            result += spanEndTag;
          }
          if (!top.skip && !top.subLanguage) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== end_mode.parent);
        if (end_mode.starts) {
          if (end_mode.endSameAsBegin) {
            end_mode.starts.endRe = end_mode.endRe;
          }
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }

      if (isIllegal(lexeme, top))
        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexemes should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexeme;
      return lexeme.length || 1;
    }

    var language = getLanguage(name);
    if (!language) {
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '', current;
    for(current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match)
          break;
        count = processLexeme(value.substring(index, match.index), match[0]);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for(current = top; current.parent; current = current.parent) { // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        language: name,
        top: top
      };
    } catch (e) {
      if (e.message && e.message.indexOf('Illegal') !== -1) {
        return {
          relevance: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).filter(autoDetection).forEach(function(name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value) {
    return !(options.tabReplace || options.useBR)
      ? value
      : value.replace(fixMarkupRe, function(match, p1) {
          if (options.useBR && match === '\n') {
            return '<br>';
          } else if (options.tabReplace) {
            return p1.replace(/\t/g, options.tabReplace);
          }
          return '';
      });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result   = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language))
        return;

    if (options.useBR) {
      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded', initHighlighting, false);
    addEventListener('load', initHighlighting, false);
  }

  function registerLanguage(name, language) {
    var lang = languages[name] = language(hljs);
    restoreLanguageApi(lang);
    if (lang.aliases) {
      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  function autoDetection(name) {
    var lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.autoDetection = autoDetection;
  hljs.inherit = inherit;

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit(
      {
        className: 'comment',
        begin: begin, end: end,
        contains: []
      },
      inherits || {}
    );
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' +
      '%|em|ex|ch|rem'  +
      '|vw|vh|vmin|vmax' +
      '|cm|mm|in|pt|pc|px' +
      '|deg|grad|rad|turn' +
      '|s|ms' +
      '|Hz|kHz' +
      '|dpi|dpcm|dppx' +
      ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return hljs;
}));


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/json.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var LITERALS = {literal: 'true false null'};
  var TYPES = [
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE
  ];
  var VALUE_CONTAINER = {
    end: ',', endsWithParent: true, excludeEnd: true,
    contains: TYPES,
    keywords: LITERALS
  };
  var OBJECT = {
    begin: '{', end: '}',
    contains: [
      {
        className: 'attr',
        begin: /"/, end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE],
        illegal: '\\n',
      },
      hljs.inherit(VALUE_CONTAINER, {begin: /:/})
    ],
    illegal: '\\S'
  };
  var ARRAY = {
    begin: '\\[', end: '\\]',
    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
    illegal: '\\S'
  };
  TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);
  return {
    contains: TYPES,
    keywords: LITERALS,
    illegal: '\\S'
  };
};

/***/ }),

/***/ "./node_modules/highlight.js/styles/github.css":
/*!*****************************************************!*\
  !*** ./node_modules/highlight.js/styles/github.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./github.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/highlight.js/styles/github.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/highlight */ "./node_modules/highlight.js/lib/highlight.js");
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/json */ "./node_modules/highlight.js/lib/languages/json.js");
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/styles/github.css */ "./node_modules/highlight.js/styles/github.css");
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _json2JSDocParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json2JSDocParser */ "./src/json2JSDocParser.js");
/* harmony import */ var _mocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mocks */ "./src/mocks.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);









highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('json', highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_1___default.a);
highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.initHighlightingOnLoad();

const inputTextArea = document.getElementById("input-textarea");
const outputArea = document.getElementById("output-textarea");
const typesCheckbox = document.getElementById("split-types");

function highlightJsdoc(jsdocString) {
  const formattedString = jsdocString
    .replace(/(@[\S]+)/g, "<span class='jsdoc-tag'>$1</span>")
    .replace(/({[\S]+})/g, "<span class='jsdoc-type'>$1</span>");
  return `<pre>${formattedString}</pre>`;
}

/**
 * Clears text formatting and prettifies JSON.
 * Div with 'contenteditable' receives formatting with text so we
 * need remove this formatting using div.innerText that returns only text.
 * Than we try prettify input using JSON methods and <pre>.
 * After this call highlight.js to highlight syntax.
 */
function formatInputText(event) {
  if (event && event.inputType !== "insertFromPaste") return;

  let inputText = this.innerText;
  try {
    inputText = JSON.stringify(JSON.parse(inputText), null, 2);
  } catch (e) {}

  this.innerHTML = `<pre>${inputText}</pre>`;
  highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.highlightBlock(inputTextArea);
}

function getParsedInput(inputData) {
  const inputString = inputData || inputTextArea.innerText;

  if (!inputString || inputString.length === 0) {
    throw "Empty JSON!";
  }
  try {
    return JSON.parse(inputString);
  } catch (e) {
    console.log(e);
    throw "Error in JSON!";
  }
}

function parseJson() {
  let result;
  try {
    const inputData = getParsedInput();
    result = Object(_json2JSDocParser__WEBPACK_IMPORTED_MODULE_3__["default"])(inputData, typesCheckbox.checked);
  } catch (e) {
    result = e;
  }

  if (outputArea) {
    outputArea.innerHTML = "";
    outputArea.innerHTML += highlightJsdoc(`${result}\n`);
  } else {
    return result;
  }
}

function CopyToClipboard(containerid) {
  if (document.selection) { 
    const range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy"); 
    range
  } else if (window.getSelection) {
    const range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  }
}

function component() {
  const parseButton = document.getElementById("parse-button");
  parseButton.onclick = parseJson;

  const clearButton = document.getElementById("clear-button");
  clearButton.onclick = () => {
    inputTextArea.innerText = "";
    outputArea.innerHTML = "";
  };

  const sampleButton = document.getElementById("sample-button");
  sampleButton.onclick = () => {
    inputTextArea.innerText = JSON.stringify(_mocks__WEBPACK_IMPORTED_MODULE_4__["objComplex"]);
    formatInputText.call(inputTextArea);
  }

  const clipboardButton = document.getElementById("clipboard-button");
  clipboardButton.onclick = () => {
    CopyToClipboard(outputArea.id);
  }

  inputTextArea.addEventListener("input", formatInputText);
  highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.highlightBlock(inputTextArea);
}
component();

/***/ }),

/***/ "./src/json2JSDocParser.js":
/*!*********************************!*\
  !*** ./src/json2JSDocParser.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return json2jsdoc; });
/**
 * @typedef {Object} TYPEOBJECT
 * @property {String} name
 * @property {String} type
 * @property {TYPEOBJECT[]} children
 * @property {Boolean} isArray
 */

/**
 * Returns new JSDoc type if property has children.
 *
 * @param {TYPEOBJECT} property
 * @returns {String} JSDoc string.
 */
function getPropertyNewType(property) {
  if (property.children.length > 0) {
    return typeObjectToJsdoc(property);
  }
}

/**
 * Converts children properties to JSDoc.
 * If property has children than handle it as an object.
 * Else if there is parenName than add it to prop name.
 *
 * @param {TYPEOBJECT} typeObject
 * @param {String} parentName
 * @returns {String} children JSDoc.
 */
function processChildren(typeObject, parentName) {
  let outputStrings = [];
  for (const property of typeObject.children) {
    let newType;
    if (property.children.length > 0) {
      newType = typeObjectToPlainJsdoc(property, parentName);
    } else if (parentName) {
      property.name = `${parentName}.${property.name}`;
    }
    outputStrings.push(createJsdocProperty(property));
    outputStrings.push(newType);
  }
  return outputStrings.join("");
}

/**
 * Changes object's name in accordance to parent object.
 * Returns JSDoc string for children.
 *
 * @param {TYPEOBJECT} typeObject
 * @param {String} parentName
 * @returns {String} children JSDoc.
 */
function typeObjectToPlainJsdoc(typeObject, parentName) {
  typeObject.name = parentName
    ? `${parentName}.${typeObject.name}`
    : typeObject.name;
  typeObject.type = `Object${typeObject.isArray ? "[]" : ""}`;

  return processChildren(typeObject, typeObject.name);
}

/**
 * Creates root typedef for object.
 *
 * @param {TYPEOBJECT} typeObject
 * @returns {String} JSDoc typedef.
 */
function createRootTypedef(typeObject) {
  let brackets = "";
  if (typeObject.isArray) {
    brackets = typeObject.type.substring(typeObject.type.indexOf("["));
  }
  return `/**\n * @typedef {Object${brackets}} ${typeObject.name}\n`;
}

/**
 * Adds root typedef and root's children.
 *
 * @param {TYPEOBJECT} typeObject
 * @returns {String} whole JSDoc string.
 */
function rootObjectToJsdoc(typeObject) {
  let outputStrings = [];
  outputStrings.push(createRootTypedef(typeObject));
  outputStrings.push(processChildren(typeObject));

  return outputStrings.join("") + " */";
}

/**
 * Starts tree pre-order traversal to build JSDoc string.
 * tree.children[0] - tree root
 * Depending on root element type uses different approaches for primitive
 * types, JS objects and arrays.
 * If root hasn't children than it has primitive type.
 *
 * @param {TYPEOBJECT} tree
 * @returns {String} whole JSDoc string.
 */
function convertToPlainJsdoc(tree) {
  let output = "";
  if (tree.children[0].children.length > 0) {
    output += rootObjectToJsdoc(
      tree.children[0], tree.children[0].isArray
    );
  } else {
    output += `/** @typedef {${tree.children[0].type}} ${
      tree.children[0].name} */`;
  }
  return output;
}

/**
 * Creates JSDoc 'property' string.
 *
 * @param {TYPEOBJECT} property
 * @param {String} parentName parent name that should be added to prop
 * name.
 * @returns JSDoc string.
 */
function createJsdocProperty(property, parentName) {
  return ` * @property {${property.type}} ${
    parentName ? parentName + "." : ""}${property.name}\n`;
}

/**
 * Creates JSDoc 'typedef' string for JS object.
 *
 * @param {String} type
 * @returns JSDoc string.
 */
function createJsdocObjectTypedef(type) {
  const modifiedType = type.replace(/\[\]$/, "") || 'TYPE';
  return ` * @typedef {Object} ${modifiedType}\n`;
}

/**
 * Creates JSDoc 'typedef' string for array. Used only if tree root element
 * is array.
 *
 * @param {String} type
 * @param {String} name
 * @returns JSDoc string.
 */
function createJsdocArrayTypedef(type, name) {
  const modifiedType = type.replace(/TYPE/, "Object") || 'TYPE';
  return ` * @typedef {${modifiedType}} ${name}\n`;
}

/**
 * Returns JSDoc string for tree branch.
 *
 * @param {TYPEOBJECT} typeObject
 * @param {boolean} [rootIsArray=false]
 * @returns {String} JSDoc string.
 */
function typeObjectToJsdoc(typeObject, rootIsArray = false) {
  let outputStrings = [];
  let newTypes = [];
  for (const property of typeObject.children) {
    const newType = getPropertyNewType(property);
    if (newType) newTypes.unshift(newType);
    outputStrings.push(createJsdocProperty(property));
  }

  return `${newTypes.join("")}/**\n${
    rootIsArray
    ? createJsdocArrayTypedef(typeObject.type, typeObject.name)
    : createJsdocObjectTypedef(typeObject.type)
  }${outputStrings.join("")} */\n`;
}

/**
 * Starts tree post-order traversal to build JSDoc string.
 * tree.children[0] - tree root
 * Depending on root element type uses different approaches for primitive
 * types, JS objects and arrays.
 * If root hasn't children than it has primitive type.
 *
 * @param {TYPEOBJECT} tree
 * @returns {String} whole JSDoc string.
 */
function convertToTypedJsdoc(tree) {
  let output = "";
  if (tree.children[0].children.length > 0) {
    output += typeObjectToJsdoc(
      tree.children[0], tree.children[0].isArray
    );
  } else {
    output += `/** @typedef {${tree.children[0].type}} ${
      tree.children[0].name} */`;
  }
  return output;
}


/**
 * Returns value's type.
 *
 * @param {*} value
 * @returns value's type.
 */
function getValueType(value) {
  switch (typeof value) {
    case "string":
      if(value.length > 0 && !isNaN(Number(value))) return "Number";
      return "String";
    case "number":
      return "Number";
    case "boolean":
      return "Boolean";
    case "object":
      if (value === null) return "Null";
      if (Array.isArray(value)) return "Array";
      return "Object";
    case "function":
      return "Function";
    default:
      return undefined;
  }
}

/**
 * Parses array. Array don't become new type itself. Instead used it's
 * first element to determine array type if it exists.
 *
 * @param {Array} array
 * @param {String} name
 * @returns {TYPEOBJECT}
 */
function parseArray(array, name) {
  if (array.length > 0) {
    const result = parseData(array[0], name);
    result.type += "[]";
    result.isArray = true;
    return result;
  }
  return {
    name: name,
    type: "Array",
    children: [],
    isArray: true
  };
}

/**
 * Returns tree node with type object. Parses object's children.
 *
 * @param {*} object
 * @param {String} name
 * @returns {TYPEOBJECT}
 */
function parseObject(object, name) {
  const node = {
    name: name,
    type: "Object",
    children: [],
    isArray: false,
  }

  const keys = Object.keys(object);
  for (const key of keys) {
    node.children.push(parseData(object[key], key));
  }
  
  if (node.children.length > 0) {
    node.type = (node.name && node.name !== "TYPE")
      ? `${node.name.toUpperCase()}_TYPE` : "TYPE";
  }

  return node;
}
/**
 * Determines data type.
 * Parses complex types. Creates tree of types.
 *
 * @param {*} data
 * @param {String} name
 * @returns {TYPEOBJECT}
 */
function parseData(data, name) {
  let type = getValueType(data);
  let newNode = {
    name: name || "TYPE",
    type: type,
    children: [],
    isArray: false,
  };

  if (type === "Array") {
    newNode = parseArray(data, newNode.name);
  } else if (type === "Object") {
    newNode = parseObject(data, newNode.name);
  }

  return newNode;
}

/**
 * Returns JSDoc for whole object.
 *
 * @export
 * @param {*} inputData
 * @param {boolean} [splitToTypes=true] create JSDoc with splitted types
 * or not.
 * @returns
 */
function json2jsdoc(inputData, splitToTypes = true) {
  /** @type {{name: string, type: string, children: array}} */
  const treeOfTypes = {
    name: "root",
    type: null,
    children: []
  }
  treeOfTypes.children.push(parseData(inputData));
  const result = splitToTypes
    ? convertToTypedJsdoc(treeOfTypes)
    : convertToPlainJsdoc(treeOfTypes);
  return result.trim();
}


/***/ }),

/***/ "./src/mocks.js":
/*!**********************!*\
  !*** ./src/mocks.js ***!
  \**********************/
/*! exports provided: objComplex, objComplexJSdoc, objPrimitives, objPrimitivesJSdoc, objList, objListResult, complexArray, complexArrayResult, objComplexJSdocUntyped */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objComplex", function() { return objComplex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objComplexJSdoc", function() { return objComplexJSdoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objPrimitives", function() { return objPrimitives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objPrimitivesJSdoc", function() { return objPrimitivesJSdoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objList", function() { return objList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objListResult", function() { return objListResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complexArray", function() { return complexArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complexArrayResult", function() { return complexArrayResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objComplexJSdocUntyped", function() { return objComplexJSdocUntyped; });
const objComplex = {
  string: "string",
  number: 35,
  boolean: false,
  null: null,
  emptyArray: [],
  numberArray: [0,1,2,3],
  emptyObjectArray: [{}],
  objectArray: [{
    prop1: "prop1",
    prop2: 4,
    prop3: { a: "a"}
  }],
  address: {
    city: "mntview",
    street: "earth",
    number: 4,
    status: {
      good: true
    },
    residents: ["Max", "Alex"]
  },
  complexObject: {
    cmpxObjArray: [{
      innerArray: [4]
    }]
  }
};

const objComplexJSdoc = `/**
 * @typedef {Object} CMPXOBJARRAY_TYPE
 * @property {Number[]} innerArray
 */
/**
 * @typedef {Object} COMPLEXOBJECT_TYPE
 * @property {CMPXOBJARRAY_TYPE[]} cmpxObjArray
 */
/**
 * @typedef {Object} STATUS_TYPE
 * @property {Boolean} good
 */
/**
 * @typedef {Object} ADDRESS_TYPE
 * @property {String} city
 * @property {String} street
 * @property {Number} number
 * @property {STATUS_TYPE} status
 * @property {String[]} residents
 */
/**
 * @typedef {Object} PROP3_TYPE
 * @property {String} a
 */
/**
 * @typedef {Object} OBJECTARRAY_TYPE
 * @property {String} prop1
 * @property {Number} prop2
 * @property {PROP3_TYPE} prop3
 */
/**
 * @typedef {Object} TYPE
 * @property {String} string
 * @property {Number} number
 * @property {Boolean} boolean
 * @property {Null} null
 * @property {Array} emptyArray
 * @property {Number[]} numberArray
 * @property {Object[]} emptyObjectArray
 * @property {OBJECTARRAY_TYPE[]} objectArray
 * @property {ADDRESS_TYPE} address
 * @property {COMPLEXOBJECT_TYPE} complexObject
 */`;

 const objComplexJSdocUntyped = `/**
 * @typedef {Object} TYPE
 * @property {String} string
 * @property {Number} number
 * @property {Boolean} boolean
 * @property {Null} null
 * @property {Array} emptyArray
 * @property {Number[]} numberArray
 * @property {Object[]} emptyObjectArray
 * @property {Object[]} objectArray
 * @property {String} objectArray.prop1
 * @property {Number} objectArray.prop2
 * @property {Object} objectArray.prop3
 * @property {String} objectArray.prop3.a
 * @property {Object} address
 * @property {String} address.city
 * @property {String} address.street
 * @property {Number} address.number
 * @property {Object} address.status
 * @property {Boolean} address.status.good
 * @property {String[]} address.residents
 * @property {Object} complexObject
 * @property {Object[]} complexObject.cmpxObjArray
 * @property {Number[]} complexObject.cmpxObjArray.innerArray
 */`;

 const objPrimitives = {
   string: "string",
   number: 0,
   boolean: true,
   null: null
 }

const objPrimitivesJSdoc = `/**
 * @typedef {Object} TYPE
 * @property {String} string
 * @property {Number} number
 * @property {Boolean} boolean
 * @property {Null} null
 */`;

const objList = [{
  number: 4
}];

const objListResult = `/**
 * @typedef {Object[]} TYPE
 * @property {Number} number
 */`;

const complexArray = [[{
  prop: "string"
}]];

const complexArrayResult = `/**
 * @typedef {Object[][]} TYPE
 * @property {String} prop
 */`;



/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9zdHlsZXMvZ2l0aHViLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvaGlnaGxpZ2h0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qc29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL2dpdGh1Yi5jc3M/MWM5ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzb24ySlNEb2NQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vY2tzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/OGYzNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQiw0QkFBNEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx1QkFBdUI7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGO0FBQzlGLHlDQUF5QztBQUN6QyxnRkFBZ0Ysc0RBQXNEOztBQUV0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFRO0FBQ3RCLGNBQWMsS0FBSztBQUNuQjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjLE9BQU87QUFDckI7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxhQUFhLFdBQVc7QUFDeEIsY0FBYyxPQUFPO0FBQ3JCOzs7Ozs7Ozs7Ozs7OztBQ2pJQSxjQUFjLG1CQUFPLENBQUMsa0hBQXNEOztBQUU1RSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcblxcbmdpdGh1Yi5jb20gc3R5bGUgKGMpIFZhc2lseSBQb2xvdm55b3YgPHZhc3RAd2hpdGVhbnRzLm5ldD5cXG5cXG4qL1xcblxcbi5obGpzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgY29sb3I6ICMzMzM7XFxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbn1cXG5cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlIHtcXG4gIGNvbG9yOiAjOTk4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaGxqcy1rZXl3b3JkLFxcbi5obGpzLXNlbGVjdG9yLXRhZyxcXG4uaGxqcy1zdWJzdCB7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGxqcy1udW1iZXIsXFxuLmhsanMtbGl0ZXJhbCxcXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcXG4uaGxqcy10YWcgLmhsanMtYXR0ciB7XFxuICBjb2xvcjogIzAwODA4MDtcXG59XFxuXFxuLmhsanMtc3RyaW5nLFxcbi5obGpzLWRvY3RhZyB7XFxuICBjb2xvcjogI2QxNDtcXG59XFxuXFxuLmhsanMtdGl0bGUsXFxuLmhsanMtc2VjdGlvbixcXG4uaGxqcy1zZWxlY3Rvci1pZCB7XFxuICBjb2xvcjogIzkwMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGxqcy1zdWJzdCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uaGxqcy10eXBlLFxcbi5obGpzLWNsYXNzIC5obGpzLXRpdGxlIHtcXG4gIGNvbG9yOiAjNDU4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5obGpzLXRhZyxcXG4uaGxqcy1uYW1lLFxcbi5obGpzLWF0dHJpYnV0ZSB7XFxuICBjb2xvcjogIzAwMDA4MDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5obGpzLXJlZ2V4cCxcXG4uaGxqcy1saW5rIHtcXG4gIGNvbG9yOiAjMDA5OTI2O1xcbn1cXG5cXG4uaGxqcy1zeW1ib2wsXFxuLmhsanMtYnVsbGV0IHtcXG4gIGNvbG9yOiAjOTkwMDczO1xcbn1cXG5cXG4uaGxqcy1idWlsdF9pbixcXG4uaGxqcy1idWlsdGluLW5hbWUge1xcbiAgY29sb3I6ICMwMDg2YjM7XFxufVxcblxcbi5obGpzLW1ldGEge1xcbiAgY29sb3I6ICM5OTk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhsanMtZGVsZXRpb24ge1xcbiAgYmFja2dyb3VuZDogI2ZkZDtcXG59XFxuXFxuLmhsanMtYWRkaXRpb24ge1xcbiAgYmFja2dyb3VuZDogI2RmZDtcXG59XFxuXFxuLmhsanMtZW1waGFzaXMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaGxqcy1zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5odG1sLCBib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbbGVmdF0gMWZyIFtyaWdodF0gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NXB4IDQwcHggNDUwcHggYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJsZWZ0LXRpdGxlIHJpZ2h0LXRpdGxlXFxcIlxcbiAgICBcXFwibGVmdCByaWdodFxcXCJcXG4gICAgXFxcImxlZnQtY29udHJvbCByaWdodC1jb250cm9sXFxcIlxcbiAgICBcXFwiYm90dG9tIGJvdHRvbVxcXCI7XFxuICBncmlkLWdhcDogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi50ZXh0YXJlYS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogNXB4IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODYwOTA7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbi5sZWZ0LXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogbGVmdC10aXRsZTtcXG59XFxuLnJpZ2h0LXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogcmlnaHQtdGl0bGU7XFxufVxcbi50aXRsZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxlZnQge1xcbiAgZ3JpZC1hcmVhOiBsZWZ0O1xcbn1cXG4ucmlnaHQge1xcbiAgZ3JpZC1hcmVhOiByaWdodDtcXG59XFxuXFxuLmxlZnQtY29udHJvbCB7XFxuICBncmlkLWFyZWE6IGxlZnQtY29udHJvbDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4ucmlnaHQtY29udHJvbCB7XFxuICBncmlkLWFyZWE6IHJpZ2h0LWNvbnRyb2w7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuI2lucHV0LXRleHRhcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI291dHB1dC10ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjb2xvcjogIzI3N2YzMTtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICBncmlkLWFyZWE6IGJvdHRvbTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcXG59XFxuXFxuXFxuI3BhcnNlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg2MDkwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY2xpcGJvYXJkLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1pbi13aWR0aDogODBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbn1cXG4uYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbn1cXG4ubmV4dC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIG1hcmdpbjogMCA1cHg7XFxufVxcbi5uZXh0LXJvdyA+IGlucHV0IHtcXG4gIG1hcmdpbjogMnB4IDNweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmV4dC1yb3cgPiBsYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIEpTRG9jIGhpZ2hsaWdodGluZy4gKi9cXG4uanNkb2MtdGFnIHtcXG4gIGNvbG9yOiAjMTcyMGZhO1xcbn1cXG4uanNkb2MtdHlwZSB7XFxuICBjb2xvcjogIzMwODZiNjtcXG59XFxuLyogLmpzZG9jLXByb3AtbmFtZSB7XFxuICBjb2xvcjogIzAwMTg3YztcXG59ICovXFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5TeW50YXggaGlnaGxpZ2h0aW5nIHdpdGggbGFuZ3VhZ2UgYXV0b2RldGVjdGlvbi5cbmh0dHBzOi8vaGlnaGxpZ2h0anMub3JnL1xuKi9cblxuKGZ1bmN0aW9uKGZhY3RvcnkpIHtcblxuICAvLyBGaW5kIHRoZSBnbG9iYWwgb2JqZWN0IGZvciBleHBvcnQgdG8gYm90aCB0aGUgYnJvd3NlciBhbmQgd2ViIHdvcmtlcnMuXG4gIHZhciBnbG9iYWxPYmplY3QgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgfHxcbiAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmO1xuXG4gIC8vIFNldHVwIGhpZ2hsaWdodC5qcyBmb3IgZGlmZmVyZW50IGVudmlyb25tZW50cy4gRmlyc3QgaXMgTm9kZS5qcyBvclxuICAvLyBDb21tb25KUy5cbiAgaWYodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZmFjdG9yeShleHBvcnRzKTtcbiAgfSBlbHNlIGlmKGdsb2JhbE9iamVjdCkge1xuICAgIC8vIEV4cG9ydCBobGpzIGdsb2JhbGx5IGV2ZW4gd2hlbiB1c2luZyBBTUQgZm9yIGNhc2VzIHdoZW4gdGhpcyBzY3JpcHRcbiAgICAvLyBpcyBsb2FkZWQgd2l0aCBvdGhlcnMgdGhhdCBtYXkgc3RpbGwgZXhwZWN0IGEgZ2xvYmFsIGhsanMuXG4gICAgZ2xvYmFsT2JqZWN0LmhsanMgPSBmYWN0b3J5KHt9KTtcblxuICAgIC8vIEZpbmFsbHkgcmVnaXN0ZXIgdGhlIGdsb2JhbCBobGpzIHdpdGggQU1ELlxuICAgIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbE9iamVjdC5obGpzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn0oZnVuY3Rpb24oaGxqcykge1xuICAvLyBDb252ZW5pZW5jZSB2YXJpYWJsZXMgZm9yIGJ1aWxkLWluIG9iamVjdHNcbiAgdmFyIEFycmF5UHJvdG8gPSBbXSxcbiAgICAgIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cztcblxuICAvLyBHbG9iYWwgaW50ZXJuYWwgdmFyaWFibGVzIHVzZWQgd2l0aGluIHRoZSBoaWdobGlnaHQuanMgbGlicmFyeS5cbiAgdmFyIGxhbmd1YWdlcyA9IHt9LFxuICAgICAgYWxpYXNlcyAgID0ge307XG5cbiAgLy8gUmVndWxhciBleHByZXNzaW9ucyB1c2VkIHRocm91Z2hvdXQgdGhlIGhpZ2hsaWdodC5qcyBsaWJyYXJ5LlxuICB2YXIgbm9IaWdobGlnaHRSZSAgICA9IC9eKG5vLT9oaWdobGlnaHR8cGxhaW58dGV4dCkkL2ksXG4gICAgICBsYW5ndWFnZVByZWZpeFJlID0gL1xcYmxhbmcoPzp1YWdlKT8tKFtcXHctXSspXFxiL2ksXG4gICAgICBmaXhNYXJrdXBSZSAgICAgID0gLygoXig8W14+XSs+fFxcdHwpK3woPzpcXG4pKSkvZ207XG5cbiAgLy8gVGhlIG9iamVjdCB3aWxsIGJlIGFzc2lnbmVkIGJ5IHRoZSBidWlsZCB0b29sLiBJdCB1c2VkIHRvIHN5bmNocm9uaXplIEFQSSBcbiAgLy8gb2YgZXh0ZXJuYWwgbGFuZ3VhZ2UgZmlsZXMgd2l0aCBtaW5pZmllZCB2ZXJzaW9uIG9mIHRoZSBoaWdobGlnaHQuanMgbGlicmFyeS5cbiAgdmFyIEFQSV9SRVBMQUNFUztcblxuICB2YXIgc3BhbkVuZFRhZyA9ICc8L3NwYW4+JztcblxuICAvLyBHbG9iYWwgb3B0aW9ucyB1c2VkIHdoZW4gd2l0aGluIGV4dGVybmFsIEFQSXMuIFRoaXMgaXMgbW9kaWZpZWQgd2hlblxuICAvLyBjYWxsaW5nIHRoZSBgaGxqcy5jb25maWd1cmVgIGZ1bmN0aW9uLlxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBjbGFzc1ByZWZpeDogJ2hsanMtJyxcbiAgICB0YWJSZXBsYWNlOiBudWxsLFxuICAgIHVzZUJSOiBmYWxzZSxcbiAgICBsYW5ndWFnZXM6IHVuZGVmaW5lZFxuICB9O1xuXG5cbiAgLyogVXRpbGl0eSBmdW5jdGlvbnMgKi9cblxuICBmdW5jdGlvbiBlc2NhcGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGFnKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGVzdFJlKHJlLCBsZXhlbWUpIHtcbiAgICB2YXIgbWF0Y2ggPSByZSAmJiByZS5leGVjKGxleGVtZSk7XG4gICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoLmluZGV4ID09PSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb3RIaWdobGlnaHRlZChsYW5ndWFnZSkge1xuICAgIHJldHVybiBub0hpZ2hsaWdodFJlLnRlc3QobGFuZ3VhZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmxvY2tMYW5ndWFnZShibG9jaykge1xuICAgIHZhciBpLCBtYXRjaCwgbGVuZ3RoLCBfY2xhc3M7XG4gICAgdmFyIGNsYXNzZXMgPSBibG9jay5jbGFzc05hbWUgKyAnICc7XG5cbiAgICBjbGFzc2VzICs9IGJsb2NrLnBhcmVudE5vZGUgPyBibG9jay5wYXJlbnROb2RlLmNsYXNzTmFtZSA6ICcnO1xuXG4gICAgLy8gbGFuZ3VhZ2UtKiB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgbm9uLXByZWZpeGVkIGNsYXNzIG5hbWVzLlxuICAgIG1hdGNoID0gbGFuZ3VhZ2VQcmVmaXhSZS5leGVjKGNsYXNzZXMpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgcmV0dXJuIGdldExhbmd1YWdlKG1hdGNoWzFdKSA/IG1hdGNoWzFdIDogJ25vLWhpZ2hsaWdodCc7XG4gICAgfVxuXG4gICAgY2xhc3NlcyA9IGNsYXNzZXMuc3BsaXQoL1xccysvKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIF9jbGFzcyA9IGNsYXNzZXNbaV07XG5cbiAgICAgIGlmIChpc05vdEhpZ2hsaWdodGVkKF9jbGFzcykgfHwgZ2V0TGFuZ3VhZ2UoX2NsYXNzKSkge1xuICAgICAgICByZXR1cm4gX2NsYXNzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaGVyaXQocGFyZW50KSB7ICAvLyBpbmhlcml0KHBhcmVudCwgb3ZlcnJpZGVfb2JqLCBvdmVycmlkZV9vYmosIC4uLilcbiAgICB2YXIga2V5O1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgb2JqZWN0cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICBmb3IgKGtleSBpbiBwYXJlbnQpXG4gICAgICByZXN1bHRba2V5XSA9IHBhcmVudFtrZXldO1xuICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgIGZvciAoa2V5IGluIG9iailcbiAgICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyogU3RyZWFtIG1lcmdpbmcgKi9cblxuICBmdW5jdGlvbiBub2RlU3RyZWFtKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgKGZ1bmN0aW9uIF9ub2RlU3RyZWFtKG5vZGUsIG9mZnNldCkge1xuICAgICAgZm9yICh2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7IGNoaWxkOyBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMylcbiAgICAgICAgICBvZmZzZXQgKz0gY2hpbGQubm9kZVZhbHVlLmxlbmd0aDtcbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBldmVudDogJ3N0YXJ0JyxcbiAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgbm9kZTogY2hpbGRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvZmZzZXQgPSBfbm9kZVN0cmVhbShjaGlsZCwgb2Zmc2V0KTtcbiAgICAgICAgICAvLyBQcmV2ZW50IHZvaWQgZWxlbWVudHMgZnJvbSBoYXZpbmcgYW4gZW5kIHRhZyB0aGF0IHdvdWxkIGFjdHVhbGx5XG4gICAgICAgICAgLy8gZG91YmxlIHRoZW0gaW4gdGhlIG91dHB1dC4gVGhlcmUgYXJlIG1vcmUgdm9pZCBlbGVtZW50cyBpbiBIVE1MXG4gICAgICAgICAgLy8gYnV0IHdlIGxpc3Qgb25seSB0aG9zZSByZWFsaXN0aWNhbGx5IGV4cGVjdGVkIGluIGNvZGUgZGlzcGxheS5cbiAgICAgICAgICBpZiAoIXRhZyhjaGlsZCkubWF0Y2goL2JyfGhyfGltZ3xpbnB1dC8pKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgIGV2ZW50OiAnc3RvcCcsXG4gICAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgICBub2RlOiBjaGlsZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH0pKG5vZGUsIDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZVN0cmVhbXMob3JpZ2luYWwsIGhpZ2hsaWdodGVkLCB2YWx1ZSkge1xuICAgIHZhciBwcm9jZXNzZWQgPSAwO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgbm9kZVN0YWNrID0gW107XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RTdHJlYW0oKSB7XG4gICAgICBpZiAoIW9yaWdpbmFsLmxlbmd0aCB8fCAhaGlnaGxpZ2h0ZWQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbC5sZW5ndGggPyBvcmlnaW5hbCA6IGhpZ2hsaWdodGVkO1xuICAgICAgfVxuICAgICAgaWYgKG9yaWdpbmFsWzBdLm9mZnNldCAhPT0gaGlnaGxpZ2h0ZWRbMF0ub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAob3JpZ2luYWxbMF0ub2Zmc2V0IDwgaGlnaGxpZ2h0ZWRbMF0ub2Zmc2V0KSA/IG9yaWdpbmFsIDogaGlnaGxpZ2h0ZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICBUbyBhdm9pZCBzdGFydGluZyB0aGUgc3RyZWFtIGp1c3QgYmVmb3JlIGl0IHNob3VsZCBzdG9wIHRoZSBvcmRlciBpc1xuICAgICAgZW5zdXJlZCB0aGF0IG9yaWdpbmFsIGFsd2F5cyBzdGFydHMgZmlyc3QgYW5kIGNsb3NlcyBsYXN0OlxuXG4gICAgICBpZiAoZXZlbnQxID09ICdzdGFydCcgJiYgZXZlbnQyID09ICdzdGFydCcpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbDtcbiAgICAgIGlmIChldmVudDEgPT0gJ3N0YXJ0JyAmJiBldmVudDIgPT0gJ3N0b3AnKVxuICAgICAgICByZXR1cm4gaGlnaGxpZ2h0ZWQ7XG4gICAgICBpZiAoZXZlbnQxID09ICdzdG9wJyAmJiBldmVudDIgPT0gJ3N0YXJ0JylcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsO1xuICAgICAgaWYgKGV2ZW50MSA9PSAnc3RvcCcgJiYgZXZlbnQyID09ICdzdG9wJylcbiAgICAgICAgcmV0dXJuIGhpZ2hsaWdodGVkO1xuXG4gICAgICAuLi4gd2hpY2ggaXMgY29sbGFwc2VkIHRvOlxuICAgICAgKi9cbiAgICAgIHJldHVybiBoaWdobGlnaHRlZFswXS5ldmVudCA9PT0gJ3N0YXJ0JyA/IG9yaWdpbmFsIDogaGlnaGxpZ2h0ZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3Blbihub2RlKSB7XG4gICAgICBmdW5jdGlvbiBhdHRyX3N0cihhKSB7cmV0dXJuICcgJyArIGEubm9kZU5hbWUgKyAnPVwiJyArIGVzY2FwZShhLnZhbHVlKS5yZXBsYWNlKCdcIicsICcmcXVvdDsnKSArICdcIic7fVxuICAgICAgcmVzdWx0ICs9ICc8JyArIHRhZyhub2RlKSArIEFycmF5UHJvdG8ubWFwLmNhbGwobm9kZS5hdHRyaWJ1dGVzLCBhdHRyX3N0cikuam9pbignJykgKyAnPic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2Uobm9kZSkge1xuICAgICAgcmVzdWx0ICs9ICc8LycgKyB0YWcobm9kZSkgKyAnPic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKGV2ZW50KSB7XG4gICAgICAoZXZlbnQuZXZlbnQgPT09ICdzdGFydCcgPyBvcGVuIDogY2xvc2UpKGV2ZW50Lm5vZGUpO1xuICAgIH1cblxuICAgIHdoaWxlIChvcmlnaW5hbC5sZW5ndGggfHwgaGlnaGxpZ2h0ZWQubGVuZ3RoKSB7XG4gICAgICB2YXIgc3RyZWFtID0gc2VsZWN0U3RyZWFtKCk7XG4gICAgICByZXN1bHQgKz0gZXNjYXBlKHZhbHVlLnN1YnN0cmluZyhwcm9jZXNzZWQsIHN0cmVhbVswXS5vZmZzZXQpKTtcbiAgICAgIHByb2Nlc3NlZCA9IHN0cmVhbVswXS5vZmZzZXQ7XG4gICAgICBpZiAoc3RyZWFtID09PSBvcmlnaW5hbCkge1xuICAgICAgICAvKlxuICAgICAgICBPbiBhbnkgb3BlbmluZyBvciBjbG9zaW5nIHRhZyBvZiB0aGUgb3JpZ2luYWwgbWFya3VwIHdlIGZpcnN0IGNsb3NlXG4gICAgICAgIHRoZSBlbnRpcmUgaGlnaGxpZ2h0ZWQgbm9kZSBzdGFjaywgdGhlbiByZW5kZXIgdGhlIG9yaWdpbmFsIHRhZyBhbG9uZ1xuICAgICAgICB3aXRoIGFsbCB0aGUgZm9sbG93aW5nIG9yaWdpbmFsIHRhZ3MgYXQgdGhlIHNhbWUgb2Zmc2V0IGFuZCB0aGVuXG4gICAgICAgIHJlb3BlbiBhbGwgdGhlIHRhZ3Mgb24gdGhlIGhpZ2hsaWdodGVkIHN0YWNrLlxuICAgICAgICAqL1xuICAgICAgICBub2RlU3RhY2sucmV2ZXJzZSgpLmZvckVhY2goY2xvc2UpO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgcmVuZGVyKHN0cmVhbS5zcGxpY2UoMCwgMSlbMF0pO1xuICAgICAgICAgIHN0cmVhbSA9IHNlbGVjdFN0cmVhbSgpO1xuICAgICAgICB9IHdoaWxlIChzdHJlYW0gPT09IG9yaWdpbmFsICYmIHN0cmVhbS5sZW5ndGggJiYgc3RyZWFtWzBdLm9mZnNldCA9PT0gcHJvY2Vzc2VkKTtcbiAgICAgICAgbm9kZVN0YWNrLnJldmVyc2UoKS5mb3JFYWNoKG9wZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0cmVhbVswXS5ldmVudCA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgIG5vZGVTdGFjay5wdXNoKHN0cmVhbVswXS5ub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlU3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKHN0cmVhbS5zcGxpY2UoMCwgMSlbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0ICsgZXNjYXBlKHZhbHVlLnN1YnN0cihwcm9jZXNzZWQpKTtcbiAgfVxuXG4gIC8qIEluaXRpYWxpemF0aW9uICovXG5cbiAgZnVuY3Rpb24gZXhwYW5kX21vZGUobW9kZSkge1xuICAgIGlmIChtb2RlLnZhcmlhbnRzICYmICFtb2RlLmNhY2hlZF92YXJpYW50cykge1xuICAgICAgbW9kZS5jYWNoZWRfdmFyaWFudHMgPSBtb2RlLnZhcmlhbnRzLm1hcChmdW5jdGlvbih2YXJpYW50KSB7XG4gICAgICAgIHJldHVybiBpbmhlcml0KG1vZGUsIHt2YXJpYW50czogbnVsbH0sIHZhcmlhbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtb2RlLmNhY2hlZF92YXJpYW50cyB8fCAobW9kZS5lbmRzV2l0aFBhcmVudCAmJiBbaW5oZXJpdChtb2RlKV0pIHx8IFttb2RlXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVMYW5ndWFnZUFwaShvYmopIHtcbiAgICBpZihBUElfUkVQTEFDRVMgJiYgIW9iai5sYW5nQXBpUmVzdG9yZWQpIHtcbiAgICAgIG9iai5sYW5nQXBpUmVzdG9yZWQgPSB0cnVlO1xuICAgICAgZm9yKHZhciBrZXkgaW4gQVBJX1JFUExBQ0VTKVxuICAgICAgICBvYmpba2V5XSAmJiAob2JqW0FQSV9SRVBMQUNFU1trZXldXSA9IG9ialtrZXldKTtcbiAgICAgIChvYmouY29udGFpbnMgfHwgW10pLmNvbmNhdChvYmoudmFyaWFudHMgfHwgW10pLmZvckVhY2gocmVzdG9yZUxhbmd1YWdlQXBpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb21waWxlTGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcblxuICAgIGZ1bmN0aW9uIHJlU3RyKHJlKSB7XG4gICAgICAgIHJldHVybiAocmUgJiYgcmUuc291cmNlKSB8fCByZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYW5nUmUodmFsdWUsIGdsb2JhbCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAgIHJlU3RyKHZhbHVlKSxcbiAgICAgICAgJ20nICsgKGxhbmd1YWdlLmNhc2VfaW5zZW5zaXRpdmUgPyAnaScgOiAnJykgKyAoZ2xvYmFsID8gJ2cnIDogJycpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGpvaW5SZSBsb2dpY2FsbHkgY29tcHV0ZXMgcmVnZXhwcy5qb2luKHNlcGFyYXRvciksIGJ1dCBmaXhlcyB0aGVcbiAgICAvLyBiYWNrcmVmZXJlbmNlcyBzbyB0aGV5IGNvbnRpbnVlIHRvIG1hdGNoLlxuICAgIGZ1bmN0aW9uIGpvaW5SZShyZWdleHBzLCBzZXBhcmF0b3IpIHtcbiAgICAgIC8vIGJhY2tyZWZlcmVuY2VSZSBtYXRjaGVzIGFuIG9wZW4gcGFyZW50aGVzaXMgb3IgYmFja3JlZmVyZW5jZS4gVG8gYXZvaWRcbiAgICAgIC8vIGFuIGluY29ycmVjdCBwYXJzZSwgaXQgYWRkaXRpb25hbGx5IG1hdGNoZXMgdGhlIGZvbGxvd2luZzpcbiAgICAgIC8vIC0gWy4uLl0gZWxlbWVudHMsIHdoZXJlIHRoZSBtZWFuaW5nIG9mIHBhcmVudGhlc2VzIGFuZCBlc2NhcGVzIGNoYW5nZVxuICAgICAgLy8gLSBvdGhlciBlc2NhcGUgc2VxdWVuY2VzLCBzbyB3ZSBkbyBub3QgbWlzcGFyc2UgZXNjYXBlIHNlcXVlbmNlcyBhc1xuICAgICAgLy8gICBpbnRlcmVzdGluZyBlbGVtZW50c1xuICAgICAgLy8gLSBub24tbWF0Y2hpbmcgb3IgbG9va2FoZWFkIHBhcmVudGhlc2VzLCB3aGljaCBkbyBub3QgY2FwdHVyZS4gVGhlc2VcbiAgICAgIC8vICAgZm9sbG93IHRoZSAnKCcgd2l0aCBhICc/Jy5cbiAgICAgIHZhciBiYWNrcmVmZXJlbmNlUmUgPSAvXFxbKD86W15cXFxcXFxdXXxcXFxcLikqXFxdfFxcKFxcPz98XFxcXChbMS05XVswLTldKil8XFxcXC4vO1xuICAgICAgdmFyIG51bUNhcHR1cmVzID0gMDtcbiAgICAgIHZhciByZXQgPSAnJztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnZXhwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gbnVtQ2FwdHVyZXM7XG4gICAgICAgIHZhciByZSA9IHJlU3RyKHJlZ2V4cHNbaV0pO1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICByZXQgKz0gc2VwYXJhdG9yO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChyZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gYmFja3JlZmVyZW5jZVJlLmV4ZWMocmUpO1xuICAgICAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXQgKz0gcmU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0ICs9IHJlLnN1YnN0cmluZygwLCBtYXRjaC5pbmRleCk7XG4gICAgICAgICAgcmUgPSByZS5zdWJzdHJpbmcobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgIGlmIChtYXRjaFswXVswXSA9PSAnXFxcXCcgJiYgbWF0Y2hbMV0pIHtcbiAgICAgICAgICAgIC8vIEFkanVzdCB0aGUgYmFja3JlZmVyZW5jZS5cbiAgICAgICAgICAgIHJldCArPSAnXFxcXCcgKyBTdHJpbmcoTnVtYmVyKG1hdGNoWzFdKSArIG9mZnNldCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldCArPSBtYXRjaFswXTtcbiAgICAgICAgICAgIGlmIChtYXRjaFswXSA9PSAnKCcpIHtcbiAgICAgICAgICAgICAgbnVtQ2FwdHVyZXMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGlsZU1vZGUobW9kZSwgcGFyZW50KSB7XG4gICAgICBpZiAobW9kZS5jb21waWxlZClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbW9kZS5jb21waWxlZCA9IHRydWU7XG5cbiAgICAgIG1vZGUua2V5d29yZHMgPSBtb2RlLmtleXdvcmRzIHx8IG1vZGUuYmVnaW5LZXl3b3JkcztcbiAgICAgIGlmIChtb2RlLmtleXdvcmRzKSB7XG4gICAgICAgIHZhciBjb21waWxlZF9rZXl3b3JkcyA9IHt9O1xuXG4gICAgICAgIHZhciBmbGF0dGVuID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBzdHIpIHtcbiAgICAgICAgICBpZiAobGFuZ3VhZ2UuY2FzZV9pbnNlbnNpdGl2ZSkge1xuICAgICAgICAgICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0ci5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oa3cpIHtcbiAgICAgICAgICAgIHZhciBwYWlyID0ga3cuc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgIGNvbXBpbGVkX2tleXdvcmRzW3BhaXJbMF1dID0gW2NsYXNzTmFtZSwgcGFpclsxXSA/IE51bWJlcihwYWlyWzFdKSA6IDFdO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgbW9kZS5rZXl3b3JkcyA9PT0gJ3N0cmluZycpIHsgLy8gc3RyaW5nXG4gICAgICAgICAgZmxhdHRlbigna2V5d29yZCcsIG1vZGUua2V5d29yZHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iamVjdEtleXMobW9kZS5rZXl3b3JkcykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBmbGF0dGVuKGNsYXNzTmFtZSwgbW9kZS5rZXl3b3Jkc1tjbGFzc05hbWVdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBtb2RlLmtleXdvcmRzID0gY29tcGlsZWRfa2V5d29yZHM7XG4gICAgICB9XG4gICAgICBtb2RlLmxleGVtZXNSZSA9IGxhbmdSZShtb2RlLmxleGVtZXMgfHwgL1xcdysvLCB0cnVlKTtcblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBpZiAobW9kZS5iZWdpbktleXdvcmRzKSB7XG4gICAgICAgICAgbW9kZS5iZWdpbiA9ICdcXFxcYignICsgbW9kZS5iZWdpbktleXdvcmRzLnNwbGl0KCcgJykuam9pbignfCcpICsgJylcXFxcYic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtb2RlLmJlZ2luKVxuICAgICAgICAgIG1vZGUuYmVnaW4gPSAvXFxCfFxcYi87XG4gICAgICAgIG1vZGUuYmVnaW5SZSA9IGxhbmdSZShtb2RlLmJlZ2luKTtcbiAgICAgICAgaWYgKG1vZGUuZW5kU2FtZUFzQmVnaW4pXG4gICAgICAgICAgbW9kZS5lbmQgPSBtb2RlLmJlZ2luO1xuICAgICAgICBpZiAoIW1vZGUuZW5kICYmICFtb2RlLmVuZHNXaXRoUGFyZW50KVxuICAgICAgICAgIG1vZGUuZW5kID0gL1xcQnxcXGIvO1xuICAgICAgICBpZiAobW9kZS5lbmQpXG4gICAgICAgICAgbW9kZS5lbmRSZSA9IGxhbmdSZShtb2RlLmVuZCk7XG4gICAgICAgIG1vZGUudGVybWluYXRvcl9lbmQgPSByZVN0cihtb2RlLmVuZCkgfHwgJyc7XG4gICAgICAgIGlmIChtb2RlLmVuZHNXaXRoUGFyZW50ICYmIHBhcmVudC50ZXJtaW5hdG9yX2VuZClcbiAgICAgICAgICBtb2RlLnRlcm1pbmF0b3JfZW5kICs9IChtb2RlLmVuZCA/ICd8JyA6ICcnKSArIHBhcmVudC50ZXJtaW5hdG9yX2VuZDtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RlLmlsbGVnYWwpXG4gICAgICAgIG1vZGUuaWxsZWdhbFJlID0gbGFuZ1JlKG1vZGUuaWxsZWdhbCk7XG4gICAgICBpZiAobW9kZS5yZWxldmFuY2UgPT0gbnVsbClcbiAgICAgICAgbW9kZS5yZWxldmFuY2UgPSAxO1xuICAgICAgaWYgKCFtb2RlLmNvbnRhaW5zKSB7XG4gICAgICAgIG1vZGUuY29udGFpbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIG1vZGUuY29udGFpbnMgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBtb2RlLmNvbnRhaW5zLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBleHBhbmRfbW9kZShjID09PSAnc2VsZicgPyBtb2RlIDogYyk7XG4gICAgICB9KSk7XG4gICAgICBtb2RlLmNvbnRhaW5zLmZvckVhY2goZnVuY3Rpb24oYykge2NvbXBpbGVNb2RlKGMsIG1vZGUpO30pO1xuXG4gICAgICBpZiAobW9kZS5zdGFydHMpIHtcbiAgICAgICAgY29tcGlsZU1vZGUobW9kZS5zdGFydHMsIHBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0ZXJtaW5hdG9ycyA9XG4gICAgICAgIG1vZGUuY29udGFpbnMubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICByZXR1cm4gYy5iZWdpbktleXdvcmRzID8gJ1xcXFwuPyg/OicgKyBjLmJlZ2luICsgJylcXFxcLj8nIDogYy5iZWdpbjtcbiAgICAgICAgfSlcbiAgICAgICAgLmNvbmNhdChbbW9kZS50ZXJtaW5hdG9yX2VuZCwgbW9kZS5pbGxlZ2FsXSlcbiAgICAgICAgLm1hcChyZVN0cilcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIG1vZGUudGVybWluYXRvcnMgPSB0ZXJtaW5hdG9ycy5sZW5ndGggPyBsYW5nUmUoam9pblJlKHRlcm1pbmF0b3JzLCAnfCcpLCB0cnVlKSA6IHtleGVjOiBmdW5jdGlvbigvKnMqLykge3JldHVybiBudWxsO319O1xuICAgIH1cbiAgICBcbiAgICBjb21waWxlTW9kZShsYW5ndWFnZSk7XG4gIH1cblxuICAvKlxuICBDb3JlIGhpZ2hsaWdodGluZyBmdW5jdGlvbi4gQWNjZXB0cyBhIGxhbmd1YWdlIG5hbWUsIG9yIGFuIGFsaWFzLCBhbmQgYVxuICBzdHJpbmcgd2l0aCB0aGUgY29kZSB0byBoaWdobGlnaHQuIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZ1xuICBwcm9wZXJ0aWVzOlxuXG4gIC0gcmVsZXZhbmNlIChpbnQpXG4gIC0gdmFsdWUgKGFuIEhUTUwgc3RyaW5nIHdpdGggaGlnaGxpZ2h0aW5nIG1hcmt1cClcblxuICAqL1xuICBmdW5jdGlvbiBoaWdobGlnaHQobmFtZSwgdmFsdWUsIGlnbm9yZV9pbGxlZ2FscywgY29udGludWF0aW9uKSB7XG5cbiAgICBmdW5jdGlvbiBlc2NhcGVSZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodmFsdWUucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyksICdtJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3ViTW9kZShsZXhlbWUsIG1vZGUpIHtcbiAgICAgIHZhciBpLCBsZW5ndGg7XG5cbiAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IG1vZGUuY29udGFpbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRlc3RSZShtb2RlLmNvbnRhaW5zW2ldLmJlZ2luUmUsIGxleGVtZSkpIHtcbiAgICAgICAgICBpZiAobW9kZS5jb250YWluc1tpXS5lbmRTYW1lQXNCZWdpbikge1xuICAgICAgICAgICAgbW9kZS5jb250YWluc1tpXS5lbmRSZSA9IGVzY2FwZVJlKCBtb2RlLmNvbnRhaW5zW2ldLmJlZ2luUmUuZXhlYyhsZXhlbWUpWzBdICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtb2RlLmNvbnRhaW5zW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kT2ZNb2RlKG1vZGUsIGxleGVtZSkge1xuICAgICAgaWYgKHRlc3RSZShtb2RlLmVuZFJlLCBsZXhlbWUpKSB7XG4gICAgICAgIHdoaWxlIChtb2RlLmVuZHNQYXJlbnQgJiYgbW9kZS5wYXJlbnQpIHtcbiAgICAgICAgICBtb2RlID0gbW9kZS5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGU7XG4gICAgICB9XG4gICAgICBpZiAobW9kZS5lbmRzV2l0aFBhcmVudCkge1xuICAgICAgICByZXR1cm4gZW5kT2ZNb2RlKG1vZGUucGFyZW50LCBsZXhlbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzSWxsZWdhbChsZXhlbWUsIG1vZGUpIHtcbiAgICAgIHJldHVybiAhaWdub3JlX2lsbGVnYWxzICYmIHRlc3RSZShtb2RlLmlsbGVnYWxSZSwgbGV4ZW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXl3b3JkTWF0Y2gobW9kZSwgbWF0Y2gpIHtcbiAgICAgIHZhciBtYXRjaF9zdHIgPSBsYW5ndWFnZS5jYXNlX2luc2Vuc2l0aXZlID8gbWF0Y2hbMF0udG9Mb3dlckNhc2UoKSA6IG1hdGNoWzBdO1xuICAgICAgcmV0dXJuIG1vZGUua2V5d29yZHMuaGFzT3duUHJvcGVydHkobWF0Y2hfc3RyKSAmJiBtb2RlLmtleXdvcmRzW21hdGNoX3N0cl07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRTcGFuKGNsYXNzbmFtZSwgaW5zaWRlU3BhbiwgbGVhdmVPcGVuLCBub1ByZWZpeCkge1xuICAgICAgdmFyIGNsYXNzUHJlZml4ID0gbm9QcmVmaXggPyAnJyA6IG9wdGlvbnMuY2xhc3NQcmVmaXgsXG4gICAgICAgICAgb3BlblNwYW4gICAgPSAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NQcmVmaXgsXG4gICAgICAgICAgY2xvc2VTcGFuICAgPSBsZWF2ZU9wZW4gPyAnJyA6IHNwYW5FbmRUYWc7XG5cbiAgICAgIG9wZW5TcGFuICs9IGNsYXNzbmFtZSArICdcIj4nO1xuXG4gICAgICByZXR1cm4gb3BlblNwYW4gKyBpbnNpZGVTcGFuICsgY2xvc2VTcGFuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NLZXl3b3JkcygpIHtcbiAgICAgIHZhciBrZXl3b3JkX21hdGNoLCBsYXN0X2luZGV4LCBtYXRjaCwgcmVzdWx0O1xuXG4gICAgICBpZiAoIXRvcC5rZXl3b3JkcylcbiAgICAgICAgcmV0dXJuIGVzY2FwZShtb2RlX2J1ZmZlcik7XG5cbiAgICAgIHJlc3VsdCA9ICcnO1xuICAgICAgbGFzdF9pbmRleCA9IDA7XG4gICAgICB0b3AubGV4ZW1lc1JlLmxhc3RJbmRleCA9IDA7XG4gICAgICBtYXRjaCA9IHRvcC5sZXhlbWVzUmUuZXhlYyhtb2RlX2J1ZmZlcik7XG5cbiAgICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICByZXN1bHQgKz0gZXNjYXBlKG1vZGVfYnVmZmVyLnN1YnN0cmluZyhsYXN0X2luZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICBrZXl3b3JkX21hdGNoID0ga2V5d29yZE1hdGNoKHRvcCwgbWF0Y2gpO1xuICAgICAgICBpZiAoa2V5d29yZF9tYXRjaCkge1xuICAgICAgICAgIHJlbGV2YW5jZSArPSBrZXl3b3JkX21hdGNoWzFdO1xuICAgICAgICAgIHJlc3VsdCArPSBidWlsZFNwYW4oa2V5d29yZF9tYXRjaFswXSwgZXNjYXBlKG1hdGNoWzBdKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ICs9IGVzY2FwZShtYXRjaFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdF9pbmRleCA9IHRvcC5sZXhlbWVzUmUubGFzdEluZGV4O1xuICAgICAgICBtYXRjaCA9IHRvcC5sZXhlbWVzUmUuZXhlYyhtb2RlX2J1ZmZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0ICsgZXNjYXBlKG1vZGVfYnVmZmVyLnN1YnN0cihsYXN0X2luZGV4KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc1N1Ykxhbmd1YWdlKCkge1xuICAgICAgdmFyIGV4cGxpY2l0ID0gdHlwZW9mIHRvcC5zdWJMYW5ndWFnZSA9PT0gJ3N0cmluZyc7XG4gICAgICBpZiAoZXhwbGljaXQgJiYgIWxhbmd1YWdlc1t0b3Auc3ViTGFuZ3VhZ2VdKSB7XG4gICAgICAgIHJldHVybiBlc2NhcGUobW9kZV9idWZmZXIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzdWx0ID0gZXhwbGljaXQgP1xuICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodCh0b3Auc3ViTGFuZ3VhZ2UsIG1vZGVfYnVmZmVyLCB0cnVlLCBjb250aW51YXRpb25zW3RvcC5zdWJMYW5ndWFnZV0pIDpcbiAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRBdXRvKG1vZGVfYnVmZmVyLCB0b3Auc3ViTGFuZ3VhZ2UubGVuZ3RoID8gdG9wLnN1Ykxhbmd1YWdlIDogdW5kZWZpbmVkKTtcblxuICAgICAgLy8gQ291bnRpbmcgZW1iZWRkZWQgbGFuZ3VhZ2Ugc2NvcmUgdG93YXJkcyB0aGUgaG9zdCBsYW5ndWFnZSBtYXkgYmUgZGlzYWJsZWRcbiAgICAgIC8vIHdpdGggemVyb2luZyB0aGUgY29udGFpbmluZyBtb2RlIHJlbGV2YW5jZS4gVXNlY2FzZSBpbiBwb2ludCBpcyBNYXJrZG93biB0aGF0XG4gICAgICAvLyBhbGxvd3MgWE1MIGV2ZXJ5d2hlcmUgYW5kIG1ha2VzIGV2ZXJ5IFhNTCBzbmlwcGV0IHRvIGhhdmUgYSBtdWNoIGxhcmdlciBNYXJrZG93blxuICAgICAgLy8gc2NvcmUuXG4gICAgICBpZiAodG9wLnJlbGV2YW5jZSA+IDApIHtcbiAgICAgICAgcmVsZXZhbmNlICs9IHJlc3VsdC5yZWxldmFuY2U7XG4gICAgICB9XG4gICAgICBpZiAoZXhwbGljaXQpIHtcbiAgICAgICAgY29udGludWF0aW9uc1t0b3Auc3ViTGFuZ3VhZ2VdID0gcmVzdWx0LnRvcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBidWlsZFNwYW4ocmVzdWx0Lmxhbmd1YWdlLCByZXN1bHQudmFsdWUsIGZhbHNlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQnVmZmVyKCkge1xuICAgICAgcmVzdWx0ICs9ICh0b3Auc3ViTGFuZ3VhZ2UgIT0gbnVsbCA/IHByb2Nlc3NTdWJMYW5ndWFnZSgpIDogcHJvY2Vzc0tleXdvcmRzKCkpO1xuICAgICAgbW9kZV9idWZmZXIgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydE5ld01vZGUobW9kZSkge1xuICAgICAgcmVzdWx0ICs9IG1vZGUuY2xhc3NOYW1lPyBidWlsZFNwYW4obW9kZS5jbGFzc05hbWUsICcnLCB0cnVlKTogJyc7XG4gICAgICB0b3AgPSBPYmplY3QuY3JlYXRlKG1vZGUsIHtwYXJlbnQ6IHt2YWx1ZTogdG9wfX0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NMZXhlbWUoYnVmZmVyLCBsZXhlbWUpIHtcblxuICAgICAgbW9kZV9idWZmZXIgKz0gYnVmZmVyO1xuXG4gICAgICBpZiAobGV4ZW1lID09IG51bGwpIHtcbiAgICAgICAgcHJvY2Vzc0J1ZmZlcigpO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld19tb2RlID0gc3ViTW9kZShsZXhlbWUsIHRvcCk7XG4gICAgICBpZiAobmV3X21vZGUpIHtcbiAgICAgICAgaWYgKG5ld19tb2RlLnNraXApIHtcbiAgICAgICAgICBtb2RlX2J1ZmZlciArPSBsZXhlbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG5ld19tb2RlLmV4Y2x1ZGVCZWdpbikge1xuICAgICAgICAgICAgbW9kZV9idWZmZXIgKz0gbGV4ZW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcm9jZXNzQnVmZmVyKCk7XG4gICAgICAgICAgaWYgKCFuZXdfbW9kZS5yZXR1cm5CZWdpbiAmJiAhbmV3X21vZGUuZXhjbHVkZUJlZ2luKSB7XG4gICAgICAgICAgICBtb2RlX2J1ZmZlciA9IGxleGVtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnROZXdNb2RlKG5ld19tb2RlLCBsZXhlbWUpO1xuICAgICAgICByZXR1cm4gbmV3X21vZGUucmV0dXJuQmVnaW4gPyAwIDogbGV4ZW1lLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgdmFyIGVuZF9tb2RlID0gZW5kT2ZNb2RlKHRvcCwgbGV4ZW1lKTtcbiAgICAgIGlmIChlbmRfbW9kZSkge1xuICAgICAgICB2YXIgb3JpZ2luID0gdG9wO1xuICAgICAgICBpZiAob3JpZ2luLnNraXApIHtcbiAgICAgICAgICBtb2RlX2J1ZmZlciArPSBsZXhlbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCEob3JpZ2luLnJldHVybkVuZCB8fCBvcmlnaW4uZXhjbHVkZUVuZCkpIHtcbiAgICAgICAgICAgIG1vZGVfYnVmZmVyICs9IGxleGVtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJvY2Vzc0J1ZmZlcigpO1xuICAgICAgICAgIGlmIChvcmlnaW4uZXhjbHVkZUVuZCkge1xuICAgICAgICAgICAgbW9kZV9idWZmZXIgPSBsZXhlbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBpZiAodG9wLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHNwYW5FbmRUYWc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdG9wLnNraXAgJiYgIXRvcC5zdWJMYW5ndWFnZSkge1xuICAgICAgICAgICAgcmVsZXZhbmNlICs9IHRvcC5yZWxldmFuY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvcCA9IHRvcC5wYXJlbnQ7XG4gICAgICAgIH0gd2hpbGUgKHRvcCAhPT0gZW5kX21vZGUucGFyZW50KTtcbiAgICAgICAgaWYgKGVuZF9tb2RlLnN0YXJ0cykge1xuICAgICAgICAgIGlmIChlbmRfbW9kZS5lbmRTYW1lQXNCZWdpbikge1xuICAgICAgICAgICAgZW5kX21vZGUuc3RhcnRzLmVuZFJlID0gZW5kX21vZGUuZW5kUmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXJ0TmV3TW9kZShlbmRfbW9kZS5zdGFydHMsICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ2luLnJldHVybkVuZCA/IDAgOiBsZXhlbWUubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNJbGxlZ2FsKGxleGVtZSwgdG9wKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGxleGVtZSBcIicgKyBsZXhlbWUgKyAnXCIgZm9yIG1vZGUgXCInICsgKHRvcC5jbGFzc05hbWUgfHwgJzx1bm5hbWVkPicpICsgJ1wiJyk7XG5cbiAgICAgIC8qXG4gICAgICBQYXJzZXIgc2hvdWxkIG5vdCByZWFjaCB0aGlzIHBvaW50IGFzIGFsbCB0eXBlcyBvZiBsZXhlbWVzIHNob3VsZCBiZSBjYXVnaHRcbiAgICAgIGVhcmxpZXIsIGJ1dCBpZiBpdCBkb2VzIGR1ZSB0byBzb21lIGJ1ZyBtYWtlIHN1cmUgaXQgYWR2YW5jZXMgYXQgbGVhc3Qgb25lXG4gICAgICBjaGFyYWN0ZXIgZm9yd2FyZCB0byBwcmV2ZW50IGluZmluaXRlIGxvb3BpbmcuXG4gICAgICAqL1xuICAgICAgbW9kZV9idWZmZXIgKz0gbGV4ZW1lO1xuICAgICAgcmV0dXJuIGxleGVtZS5sZW5ndGggfHwgMTtcbiAgICB9XG5cbiAgICB2YXIgbGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZShuYW1lKTtcbiAgICBpZiAoIWxhbmd1YWdlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGFuZ3VhZ2U6IFwiJyArIG5hbWUgKyAnXCInKTtcbiAgICB9XG5cbiAgICBjb21waWxlTGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICAgIHZhciB0b3AgPSBjb250aW51YXRpb24gfHwgbGFuZ3VhZ2U7XG4gICAgdmFyIGNvbnRpbnVhdGlvbnMgPSB7fTsgLy8ga2VlcCBjb250aW51YXRpb25zIGZvciBzdWItbGFuZ3VhZ2VzXG4gICAgdmFyIHJlc3VsdCA9ICcnLCBjdXJyZW50O1xuICAgIGZvcihjdXJyZW50ID0gdG9wOyBjdXJyZW50ICE9PSBsYW5ndWFnZTsgY3VycmVudCA9IGN1cnJlbnQucGFyZW50KSB7XG4gICAgICBpZiAoY3VycmVudC5jbGFzc05hbWUpIHtcbiAgICAgICAgcmVzdWx0ID0gYnVpbGRTcGFuKGN1cnJlbnQuY2xhc3NOYW1lLCAnJywgdHJ1ZSkgKyByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBtb2RlX2J1ZmZlciA9ICcnO1xuICAgIHZhciByZWxldmFuY2UgPSAwO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbWF0Y2gsIGNvdW50LCBpbmRleCA9IDA7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB0b3AudGVybWluYXRvcnMubGFzdEluZGV4ID0gaW5kZXg7XG4gICAgICAgIG1hdGNoID0gdG9wLnRlcm1pbmF0b3JzLmV4ZWModmFsdWUpO1xuICAgICAgICBpZiAoIW1hdGNoKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjb3VudCA9IHByb2Nlc3NMZXhlbWUodmFsdWUuc3Vic3RyaW5nKGluZGV4LCBtYXRjaC5pbmRleCksIG1hdGNoWzBdKTtcbiAgICAgICAgaW5kZXggPSBtYXRjaC5pbmRleCArIGNvdW50O1xuICAgICAgfVxuICAgICAgcHJvY2Vzc0xleGVtZSh2YWx1ZS5zdWJzdHIoaW5kZXgpKTtcbiAgICAgIGZvcihjdXJyZW50ID0gdG9wOyBjdXJyZW50LnBhcmVudDsgY3VycmVudCA9IGN1cnJlbnQucGFyZW50KSB7IC8vIGNsb3NlIGRhbmdsaW5nIG1vZGVzXG4gICAgICAgIGlmIChjdXJyZW50LmNsYXNzTmFtZSkge1xuICAgICAgICAgIHJlc3VsdCArPSBzcGFuRW5kVGFnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWxldmFuY2U6IHJlbGV2YW5jZSxcbiAgICAgICAgdmFsdWU6IHJlc3VsdCxcbiAgICAgICAgbGFuZ3VhZ2U6IG5hbWUsXG4gICAgICAgIHRvcDogdG9wXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm1lc3NhZ2UgJiYgZS5tZXNzYWdlLmluZGV4T2YoJ0lsbGVnYWwnKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgdmFsdWU6IGVzY2FwZSh2YWx1ZSlcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgSGlnaGxpZ2h0aW5nIHdpdGggbGFuZ3VhZ2UgZGV0ZWN0aW9uLiBBY2NlcHRzIGEgc3RyaW5nIHdpdGggdGhlIGNvZGUgdG9cbiAgaGlnaGxpZ2h0LiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcblxuICAtIGxhbmd1YWdlIChkZXRlY3RlZCBsYW5ndWFnZSlcbiAgLSByZWxldmFuY2UgKGludClcbiAgLSB2YWx1ZSAoYW4gSFRNTCBzdHJpbmcgd2l0aCBoaWdobGlnaHRpbmcgbWFya3VwKVxuICAtIHNlY29uZF9iZXN0IChvYmplY3Qgd2l0aCB0aGUgc2FtZSBzdHJ1Y3R1cmUgZm9yIHNlY29uZC1iZXN0IGhldXJpc3RpY2FsbHlcbiAgICBkZXRlY3RlZCBsYW5ndWFnZSwgbWF5IGJlIGFic2VudClcblxuICAqL1xuICBmdW5jdGlvbiBoaWdobGlnaHRBdXRvKHRleHQsIGxhbmd1YWdlU3Vic2V0KSB7XG4gICAgbGFuZ3VhZ2VTdWJzZXQgPSBsYW5ndWFnZVN1YnNldCB8fCBvcHRpb25zLmxhbmd1YWdlcyB8fCBvYmplY3RLZXlzKGxhbmd1YWdlcyk7XG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIHZhbHVlOiBlc2NhcGUodGV4dClcbiAgICB9O1xuICAgIHZhciBzZWNvbmRfYmVzdCA9IHJlc3VsdDtcbiAgICBsYW5ndWFnZVN1YnNldC5maWx0ZXIoZ2V0TGFuZ3VhZ2UpLmZpbHRlcihhdXRvRGV0ZWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gaGlnaGxpZ2h0KG5hbWUsIHRleHQsIGZhbHNlKTtcbiAgICAgIGN1cnJlbnQubGFuZ3VhZ2UgPSBuYW1lO1xuICAgICAgaWYgKGN1cnJlbnQucmVsZXZhbmNlID4gc2Vjb25kX2Jlc3QucmVsZXZhbmNlKSB7XG4gICAgICAgIHNlY29uZF9iZXN0ID0gY3VycmVudDtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50LnJlbGV2YW5jZSA+IHJlc3VsdC5yZWxldmFuY2UpIHtcbiAgICAgICAgc2Vjb25kX2Jlc3QgPSByZXN1bHQ7XG4gICAgICAgIHJlc3VsdCA9IGN1cnJlbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHNlY29uZF9iZXN0Lmxhbmd1YWdlKSB7XG4gICAgICByZXN1bHQuc2Vjb25kX2Jlc3QgPSBzZWNvbmRfYmVzdDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qXG4gIFBvc3QtcHJvY2Vzc2luZyBvZiB0aGUgaGlnaGxpZ2h0ZWQgbWFya3VwOlxuXG4gIC0gcmVwbGFjZSBUQUJzIHdpdGggc29tZXRoaW5nIG1vcmUgdXNlZnVsXG4gIC0gcmVwbGFjZSByZWFsIGxpbmUtYnJlYWtzIHdpdGggJzxicj4nIGZvciBub24tcHJlIGNvbnRhaW5lcnNcblxuICAqL1xuICBmdW5jdGlvbiBmaXhNYXJrdXAodmFsdWUpIHtcbiAgICByZXR1cm4gIShvcHRpb25zLnRhYlJlcGxhY2UgfHwgb3B0aW9ucy51c2VCUilcbiAgICAgID8gdmFsdWVcbiAgICAgIDogdmFsdWUucmVwbGFjZShmaXhNYXJrdXBSZSwgZnVuY3Rpb24obWF0Y2gsIHAxKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMudXNlQlIgJiYgbWF0Y2ggPT09ICdcXG4nKSB7XG4gICAgICAgICAgICByZXR1cm4gJzxicj4nO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50YWJSZXBsYWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcDEucmVwbGFjZSgvXFx0L2csIG9wdGlvbnMudGFiUmVwbGFjZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRDbGFzc05hbWUocHJldkNsYXNzTmFtZSwgY3VycmVudExhbmcsIHJlc3VsdExhbmcpIHtcbiAgICB2YXIgbGFuZ3VhZ2UgPSBjdXJyZW50TGFuZyA/IGFsaWFzZXNbY3VycmVudExhbmddIDogcmVzdWx0TGFuZyxcbiAgICAgICAgcmVzdWx0ICAgPSBbcHJldkNsYXNzTmFtZS50cmltKCldO1xuXG4gICAgaWYgKCFwcmV2Q2xhc3NOYW1lLm1hdGNoKC9cXGJobGpzXFxiLykpIHtcbiAgICAgIHJlc3VsdC5wdXNoKCdobGpzJyk7XG4gICAgfVxuXG4gICAgaWYgKHByZXZDbGFzc05hbWUuaW5kZXhPZihsYW5ndWFnZSkgPT09IC0xKSB7XG4gICAgICByZXN1bHQucHVzaChsYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJykudHJpbSgpO1xuICB9XG5cbiAgLypcbiAgQXBwbGllcyBoaWdobGlnaHRpbmcgdG8gYSBET00gbm9kZSBjb250YWluaW5nIGNvZGUuIEFjY2VwdHMgYSBET00gbm9kZSBhbmRcbiAgdHdvIG9wdGlvbmFsIHBhcmFtZXRlcnMgZm9yIGZpeE1hcmt1cC5cbiAgKi9cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0QmxvY2soYmxvY2spIHtcbiAgICB2YXIgbm9kZSwgb3JpZ2luYWxTdHJlYW0sIHJlc3VsdCwgcmVzdWx0Tm9kZSwgdGV4dDtcbiAgICB2YXIgbGFuZ3VhZ2UgPSBibG9ja0xhbmd1YWdlKGJsb2NrKTtcblxuICAgIGlmIChpc05vdEhpZ2hsaWdodGVkKGxhbmd1YWdlKSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgaWYgKG9wdGlvbnMudXNlQlIpIHtcbiAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnLCAnZGl2Jyk7XG4gICAgICBub2RlLmlubmVySFRNTCA9IGJsb2NrLmlubmVySFRNTC5yZXBsYWNlKC9cXG4vZywgJycpLnJlcGxhY2UoLzxiclsgXFwvXSo+L2csICdcXG4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IGJsb2NrO1xuICAgIH1cbiAgICB0ZXh0ID0gbm9kZS50ZXh0Q29udGVudDtcbiAgICByZXN1bHQgPSBsYW5ndWFnZSA/IGhpZ2hsaWdodChsYW5ndWFnZSwgdGV4dCwgdHJ1ZSkgOiBoaWdobGlnaHRBdXRvKHRleHQpO1xuXG4gICAgb3JpZ2luYWxTdHJlYW0gPSBub2RlU3RyZWFtKG5vZGUpO1xuICAgIGlmIChvcmlnaW5hbFN0cmVhbS5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnLCAnZGl2Jyk7XG4gICAgICByZXN1bHROb2RlLmlubmVySFRNTCA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIHJlc3VsdC52YWx1ZSA9IG1lcmdlU3RyZWFtcyhvcmlnaW5hbFN0cmVhbSwgbm9kZVN0cmVhbShyZXN1bHROb2RlKSwgdGV4dCk7XG4gICAgfVxuICAgIHJlc3VsdC52YWx1ZSA9IGZpeE1hcmt1cChyZXN1bHQudmFsdWUpO1xuXG4gICAgYmxvY2suaW5uZXJIVE1MID0gcmVzdWx0LnZhbHVlO1xuICAgIGJsb2NrLmNsYXNzTmFtZSA9IGJ1aWxkQ2xhc3NOYW1lKGJsb2NrLmNsYXNzTmFtZSwgbGFuZ3VhZ2UsIHJlc3VsdC5sYW5ndWFnZSk7XG4gICAgYmxvY2sucmVzdWx0ID0ge1xuICAgICAgbGFuZ3VhZ2U6IHJlc3VsdC5sYW5ndWFnZSxcbiAgICAgIHJlOiByZXN1bHQucmVsZXZhbmNlXG4gICAgfTtcbiAgICBpZiAocmVzdWx0LnNlY29uZF9iZXN0KSB7XG4gICAgICBibG9jay5zZWNvbmRfYmVzdCA9IHtcbiAgICAgICAgbGFuZ3VhZ2U6IHJlc3VsdC5zZWNvbmRfYmVzdC5sYW5ndWFnZSxcbiAgICAgICAgcmU6IHJlc3VsdC5zZWNvbmRfYmVzdC5yZWxldmFuY2VcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLypcbiAgVXBkYXRlcyBoaWdobGlnaHQuanMgZ2xvYmFsIG9wdGlvbnMgd2l0aCB2YWx1ZXMgcGFzc2VkIGluIHRoZSBmb3JtIG9mIGFuIG9iamVjdC5cbiAgKi9cbiAgZnVuY3Rpb24gY29uZmlndXJlKHVzZXJfb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBpbmhlcml0KG9wdGlvbnMsIHVzZXJfb3B0aW9ucyk7XG4gIH1cblxuICAvKlxuICBBcHBsaWVzIGhpZ2hsaWdodGluZyB0byBhbGwgPHByZT48Y29kZT4uLjwvY29kZT48L3ByZT4gYmxvY2tzIG9uIGEgcGFnZS5cbiAgKi9cbiAgZnVuY3Rpb24gaW5pdEhpZ2hsaWdodGluZygpIHtcbiAgICBpZiAoaW5pdEhpZ2hsaWdodGluZy5jYWxsZWQpXG4gICAgICByZXR1cm47XG4gICAgaW5pdEhpZ2hsaWdodGluZy5jYWxsZWQgPSB0cnVlO1xuXG4gICAgdmFyIGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZSBjb2RlJyk7XG4gICAgQXJyYXlQcm90by5mb3JFYWNoLmNhbGwoYmxvY2tzLCBoaWdobGlnaHRCbG9jayk7XG4gIH1cblxuICAvKlxuICBBdHRhY2hlcyBoaWdobGlnaHRpbmcgdG8gdGhlIHBhZ2UgbG9hZCBldmVudC5cbiAgKi9cbiAgZnVuY3Rpb24gaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpIHtcbiAgICBhZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdEhpZ2hsaWdodGluZywgZmFsc2UpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0SGlnaGxpZ2h0aW5nLCBmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3Rlckxhbmd1YWdlKG5hbWUsIGxhbmd1YWdlKSB7XG4gICAgdmFyIGxhbmcgPSBsYW5ndWFnZXNbbmFtZV0gPSBsYW5ndWFnZShobGpzKTtcbiAgICByZXN0b3JlTGFuZ3VhZ2VBcGkobGFuZyk7XG4gICAgaWYgKGxhbmcuYWxpYXNlcykge1xuICAgICAgbGFuZy5hbGlhc2VzLmZvckVhY2goZnVuY3Rpb24oYWxpYXMpIHthbGlhc2VzW2FsaWFzXSA9IG5hbWU7fSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGlzdExhbmd1YWdlcygpIHtcbiAgICByZXR1cm4gb2JqZWN0S2V5cyhsYW5ndWFnZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2UobmFtZSkge1xuICAgIG5hbWUgPSAobmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gbGFuZ3VhZ2VzW25hbWVdIHx8IGxhbmd1YWdlc1thbGlhc2VzW25hbWVdXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF1dG9EZXRlY3Rpb24obmFtZSkge1xuICAgIHZhciBsYW5nID0gZ2V0TGFuZ3VhZ2UobmFtZSk7XG4gICAgcmV0dXJuIGxhbmcgJiYgIWxhbmcuZGlzYWJsZUF1dG9kZXRlY3Q7XG4gIH1cblxuICAvKiBJbnRlcmZhY2UgZGVmaW5pdGlvbiAqL1xuXG4gIGhsanMuaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0O1xuICBobGpzLmhpZ2hsaWdodEF1dG8gPSBoaWdobGlnaHRBdXRvO1xuICBobGpzLmZpeE1hcmt1cCA9IGZpeE1hcmt1cDtcbiAgaGxqcy5oaWdobGlnaHRCbG9jayA9IGhpZ2hsaWdodEJsb2NrO1xuICBobGpzLmNvbmZpZ3VyZSA9IGNvbmZpZ3VyZTtcbiAgaGxqcy5pbml0SGlnaGxpZ2h0aW5nID0gaW5pdEhpZ2hsaWdodGluZztcbiAgaGxqcy5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkID0gaW5pdEhpZ2hsaWdodGluZ09uTG9hZDtcbiAgaGxqcy5yZWdpc3Rlckxhbmd1YWdlID0gcmVnaXN0ZXJMYW5ndWFnZTtcbiAgaGxqcy5saXN0TGFuZ3VhZ2VzID0gbGlzdExhbmd1YWdlcztcbiAgaGxqcy5nZXRMYW5ndWFnZSA9IGdldExhbmd1YWdlO1xuICBobGpzLmF1dG9EZXRlY3Rpb24gPSBhdXRvRGV0ZWN0aW9uO1xuICBobGpzLmluaGVyaXQgPSBpbmhlcml0O1xuXG4gIC8vIENvbW1vbiByZWdleHBzXG4gIGhsanMuSURFTlRfUkUgPSAnW2EtekEtWl1cXFxcdyonO1xuICBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgPSAnW2EtekEtWl9dXFxcXHcqJztcbiAgaGxqcy5OVU1CRVJfUkUgPSAnXFxcXGJcXFxcZCsoXFxcXC5cXFxcZCspPyc7XG4gIGhsanMuQ19OVU1CRVJfUkUgPSAnKC0/KShcXFxcYjBbeFhdW2EtZkEtRjAtOV0rfChcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKik/fFxcXFwuXFxcXGQrKShbZUVdWy0rXT9cXFxcZCspPyknOyAvLyAweC4uLiwgMC4uLiwgZGVjaW1hbCwgZmxvYXRcbiAgaGxqcy5CSU5BUllfTlVNQkVSX1JFID0gJ1xcXFxiKDBiWzAxXSspJzsgLy8gMGIuLi5cbiAgaGxqcy5SRV9TVEFSVEVSU19SRSA9ICchfCE9fCE9PXwlfCU9fCZ8JiZ8Jj18XFxcXCp8XFxcXCo9fFxcXFwrfFxcXFwrPXwsfC18LT18Lz18L3w6fDt8PDx8PDw9fDw9fDx8PT09fD09fD18Pj4+PXw+Pj18Pj18Pj4+fD4+fD58XFxcXD98XFxcXFt8XFxcXHt8XFxcXCh8XFxcXF58XFxcXF49fFxcXFx8fFxcXFx8PXxcXFxcfFxcXFx8fH4nO1xuXG4gIC8vIENvbW1vbiBtb2Rlc1xuICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgPSB7XG4gICAgYmVnaW46ICdcXFxcXFxcXFtcXFxcc1xcXFxTXScsIHJlbGV2YW5jZTogMFxuICB9O1xuICBobGpzLkFQT1NfU1RSSU5HX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1xcJycsIGVuZDogJ1xcJycsXG4gICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgfTtcbiAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIicsXG4gICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgfTtcbiAgaGxqcy5QSFJBU0FMX1dPUkRTX01PREUgPSB7XG4gICAgYmVnaW46IC9cXGIoYXxhbnx0aGV8YXJlfEknbXxpc24ndHxkb24ndHxkb2Vzbid0fHdvbid0fGJ1dHxqdXN0fHNob3VsZHxwcmV0dHl8c2ltcGx5fGVub3VnaHxnb25uYXxnb2luZ3x3dGZ8c298c3VjaHx3aWxsfHlvdXx5b3VyfHRoZXl8bGlrZXxtb3JlKVxcYi9cbiAgfTtcbiAgaGxqcy5DT01NRU5UID0gZnVuY3Rpb24gKGJlZ2luLCBlbmQsIGluaGVyaXRzKSB7XG4gICAgdmFyIG1vZGUgPSBobGpzLmluaGVyaXQoXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgICBiZWdpbjogYmVnaW4sIGVuZDogZW5kLFxuICAgICAgICBjb250YWluczogW11cbiAgICAgIH0sXG4gICAgICBpbmhlcml0cyB8fCB7fVxuICAgICk7XG4gICAgbW9kZS5jb250YWlucy5wdXNoKGhsanMuUEhSQVNBTF9XT1JEU19NT0RFKTtcbiAgICBtb2RlLmNvbnRhaW5zLnB1c2goe1xuICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgIGJlZ2luOiAnKD86VE9ET3xGSVhNRXxOT1RFfEJVR3xYWFgpOicsXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9KTtcbiAgICByZXR1cm4gbW9kZTtcbiAgfTtcbiAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFID0gaGxqcy5DT01NRU5UKCcvLycsICckJyk7XG4gIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUgPSBobGpzLkNPTU1FTlQoJy9cXFxcKicsICdcXFxcKi8nKTtcbiAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSA9IGhsanMuQ09NTUVOVCgnIycsICckJyk7XG4gIGhsanMuTlVNQkVSX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogaGxqcy5OVU1CRVJfUkUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGhsanMuQ19OVU1CRVJfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiBobGpzLkNfTlVNQkVSX1JFLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICBobGpzLkJJTkFSWV9OVU1CRVJfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiBobGpzLkJJTkFSWV9OVU1CRVJfUkUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGhsanMuQ1NTX05VTUJFUl9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46IGhsanMuTlVNQkVSX1JFICsgJygnICtcbiAgICAgICclfGVtfGV4fGNofHJlbScgICtcbiAgICAgICd8dnd8dmh8dm1pbnx2bWF4JyArXG4gICAgICAnfGNtfG1tfGlufHB0fHBjfHB4JyArXG4gICAgICAnfGRlZ3xncmFkfHJhZHx0dXJuJyArXG4gICAgICAnfHN8bXMnICtcbiAgICAgICd8SHp8a0h6JyArXG4gICAgICAnfGRwaXxkcGNtfGRwcHgnICtcbiAgICAgICcpPycsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGhsanMuUkVHRVhQX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAncmVnZXhwJyxcbiAgICBiZWdpbjogL1xcLy8sIGVuZDogL1xcL1tnaW11eV0qLyxcbiAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcWy8sIGVuZDogL1xcXS8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBobGpzLlRJVExFX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgIGJlZ2luOiBobGpzLklERU5UX1JFLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgYmVnaW46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgaGxqcy5NRVRIT0RfR1VBUkQgPSB7XG4gICAgLy8gZXhjbHVkZXMgbWV0aG9kIG5hbWVzIGZyb20ga2V5d29yZCBwcm9jZXNzaW5nXG4gICAgYmVnaW46ICdcXFxcLlxcXFxzKicgKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgcmV0dXJuIGhsanM7XG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIExJVEVSQUxTID0ge2xpdGVyYWw6ICd0cnVlIGZhbHNlIG51bGwnfTtcbiAgdmFyIFRZUEVTID0gW1xuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gIF07XG4gIHZhciBWQUxVRV9DT05UQUlORVIgPSB7XG4gICAgZW5kOiAnLCcsIGVuZHNXaXRoUGFyZW50OiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBUWVBFUyxcbiAgICBrZXl3b3JkczogTElURVJBTFNcbiAgfTtcbiAgdmFyIE9CSkVDVCA9IHtcbiAgICBiZWdpbjogJ3snLCBlbmQ6ICd9JyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgYmVnaW46IC9cIi8sIGVuZDogL1wiLyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgfSxcbiAgICAgIGhsanMuaW5oZXJpdChWQUxVRV9DT05UQUlORVIsIHtiZWdpbjogLzovfSlcbiAgICBdLFxuICAgIGlsbGVnYWw6ICdcXFxcUydcbiAgfTtcbiAgdmFyIEFSUkFZID0ge1xuICAgIGJlZ2luOiAnXFxcXFsnLCBlbmQ6ICdcXFxcXScsXG4gICAgY29udGFpbnM6IFtobGpzLmluaGVyaXQoVkFMVUVfQ09OVEFJTkVSKV0sIC8vIGluaGVyaXQgaXMgYSB3b3JrYXJvdW5kIGZvciBhIGJ1ZyB0aGF0IG1ha2VzIHNoYXJlZCBtb2RlcyB3aXRoIGVuZHNXaXRoUGFyZW50IGNvbXBpbGUgb25seSB0aGUgZW5kaW5nIG9mIG9uZSBvZiB0aGUgcGFyZW50c1xuICAgIGlsbGVnYWw6ICdcXFxcUydcbiAgfTtcbiAgVFlQRVMuc3BsaWNlKFRZUEVTLmxlbmd0aCwgMCwgT0JKRUNULCBBUlJBWSk7XG4gIHJldHVybiB7XG4gICAgY29udGFpbnM6IFRZUEVTLFxuICAgIGtleXdvcmRzOiBMSVRFUkFMUyxcbiAgICBpbGxlZ2FsOiAnXFxcXFMnXG4gIH07XG59OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2l0aHViLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2l0aHViLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9naXRodWIuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9oaWdobGlnaHQnO1xuaW1wb3J0IGpzb24gZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvanNvbic7XG5pbXBvcnQgJ2hpZ2hsaWdodC5qcy9zdHlsZXMvZ2l0aHViLmNzcyc7XG5cbmltcG9ydCBqc29uMmpzZG9jIGZyb20gXCIuL2pzb24ySlNEb2NQYXJzZXJcIjtcbmltcG9ydCB7IG9iakNvbXBsZXggfSBmcm9tIFwiLi9tb2Nrc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ2pzb24nLCBqc29uKTtcbmhsanMuaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpO1xuXG5jb25zdCBpbnB1dFRleHRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10ZXh0YXJlYVwiKTtcbmNvbnN0IG91dHB1dEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dC10ZXh0YXJlYVwiKTtcbmNvbnN0IHR5cGVzQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwbGl0LXR5cGVzXCIpO1xuXG5mdW5jdGlvbiBoaWdobGlnaHRKc2RvYyhqc2RvY1N0cmluZykge1xuICBjb25zdCBmb3JtYXR0ZWRTdHJpbmcgPSBqc2RvY1N0cmluZ1xuICAgIC5yZXBsYWNlKC8oQFtcXFNdKykvZywgXCI8c3BhbiBjbGFzcz0nanNkb2MtdGFnJz4kMTwvc3Bhbj5cIilcbiAgICAucmVwbGFjZSgvKHtbXFxTXSt9KS9nLCBcIjxzcGFuIGNsYXNzPSdqc2RvYy10eXBlJz4kMTwvc3Bhbj5cIik7XG4gIHJldHVybiBgPHByZT4ke2Zvcm1hdHRlZFN0cmluZ308L3ByZT5gO1xufVxuXG4vKipcbiAqIENsZWFycyB0ZXh0IGZvcm1hdHRpbmcgYW5kIHByZXR0aWZpZXMgSlNPTi5cbiAqIERpdiB3aXRoICdjb250ZW50ZWRpdGFibGUnIHJlY2VpdmVzIGZvcm1hdHRpbmcgd2l0aCB0ZXh0IHNvIHdlXG4gKiBuZWVkIHJlbW92ZSB0aGlzIGZvcm1hdHRpbmcgdXNpbmcgZGl2LmlubmVyVGV4dCB0aGF0IHJldHVybnMgb25seSB0ZXh0LlxuICogVGhhbiB3ZSB0cnkgcHJldHRpZnkgaW5wdXQgdXNpbmcgSlNPTiBtZXRob2RzIGFuZCA8cHJlPi5cbiAqIEFmdGVyIHRoaXMgY2FsbCBoaWdobGlnaHQuanMgdG8gaGlnaGxpZ2h0IHN5bnRheC5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0SW5wdXRUZXh0KGV2ZW50KSB7XG4gIGlmIChldmVudCAmJiBldmVudC5pbnB1dFR5cGUgIT09IFwiaW5zZXJ0RnJvbVBhc3RlXCIpIHJldHVybjtcblxuICBsZXQgaW5wdXRUZXh0ID0gdGhpcy5pbm5lclRleHQ7XG4gIHRyeSB7XG4gICAgaW5wdXRUZXh0ID0gSlNPTi5zdHJpbmdpZnkoSlNPTi5wYXJzZShpbnB1dFRleHQpLCBudWxsLCAyKTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB0aGlzLmlubmVySFRNTCA9IGA8cHJlPiR7aW5wdXRUZXh0fTwvcHJlPmA7XG4gIGhsanMuaGlnaGxpZ2h0QmxvY2soaW5wdXRUZXh0QXJlYSk7XG59XG5cbmZ1bmN0aW9uIGdldFBhcnNlZElucHV0KGlucHV0RGF0YSkge1xuICBjb25zdCBpbnB1dFN0cmluZyA9IGlucHV0RGF0YSB8fCBpbnB1dFRleHRBcmVhLmlubmVyVGV4dDtcblxuICBpZiAoIWlucHV0U3RyaW5nIHx8IGlucHV0U3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IFwiRW1wdHkgSlNPTiFcIjtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGlucHV0U3RyaW5nKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHRocm93IFwiRXJyb3IgaW4gSlNPTiFcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUpzb24oKSB7XG4gIGxldCByZXN1bHQ7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5wdXREYXRhID0gZ2V0UGFyc2VkSW5wdXQoKTtcbiAgICByZXN1bHQgPSBqc29uMmpzZG9jKGlucHV0RGF0YSwgdHlwZXNDaGVja2JveC5jaGVja2VkKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlc3VsdCA9IGU7XG4gIH1cblxuICBpZiAob3V0cHV0QXJlYSkge1xuICAgIG91dHB1dEFyZWEuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBvdXRwdXRBcmVhLmlubmVySFRNTCArPSBoaWdobGlnaHRKc2RvYyhgJHtyZXN1bHR9XFxuYCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBDb3B5VG9DbGlwYm9hcmQoY29udGFpbmVyaWQpIHtcbiAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikgeyBcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgcmFuZ2UubW92ZVRvRWxlbWVudFRleHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyaWQpKTtcbiAgICByYW5nZS5zZWxlY3QoKS5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7IFxuICAgIHJhbmdlXG4gIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZWxlY3ROb2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcmlkKSk7XG4gICAgd2luZG93LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKHJhbmdlKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgcGFyc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcnNlLWJ1dHRvblwiKTtcbiAgcGFyc2VCdXR0b24ub25jbGljayA9IHBhcnNlSnNvbjtcblxuICBjb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXItYnV0dG9uXCIpO1xuICBjbGVhckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGlucHV0VGV4dEFyZWEuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBvdXRwdXRBcmVhLmlubmVySFRNTCA9IFwiXCI7XG4gIH07XG5cbiAgY29uc3Qgc2FtcGxlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW1wbGUtYnV0dG9uXCIpO1xuICBzYW1wbGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICBpbnB1dFRleHRBcmVhLmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KG9iakNvbXBsZXgpO1xuICAgIGZvcm1hdElucHV0VGV4dC5jYWxsKGlucHV0VGV4dEFyZWEpO1xuICB9XG5cbiAgY29uc3QgY2xpcGJvYXJkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGlwYm9hcmQtYnV0dG9uXCIpO1xuICBjbGlwYm9hcmRCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICBDb3B5VG9DbGlwYm9hcmQob3V0cHV0QXJlYS5pZCk7XG4gIH1cblxuICBpbnB1dFRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmb3JtYXRJbnB1dFRleHQpO1xuICBobGpzLmhpZ2hsaWdodEJsb2NrKGlucHV0VGV4dEFyZWEpO1xufVxuY29tcG9uZW50KCk7IiwiLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUWVBFT0JKRUNUXG4gKiBAcHJvcGVydHkge1N0cmluZ30gbmFtZVxuICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGVcbiAqIEBwcm9wZXJ0eSB7VFlQRU9CSkVDVFtdfSBjaGlsZHJlblxuICogQHByb3BlcnR5IHtCb29sZWFufSBpc0FycmF5XG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIG5ldyBKU0RvYyB0eXBlIGlmIHByb3BlcnR5IGhhcyBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0ge1RZUEVPQkpFQ1R9IHByb3BlcnR5XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBKU0RvYyBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BlcnR5TmV3VHlwZShwcm9wZXJ0eSkge1xuICBpZiAocHJvcGVydHkuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB0eXBlT2JqZWN0VG9Kc2RvYyhwcm9wZXJ0eSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBjaGlsZHJlbiBwcm9wZXJ0aWVzIHRvIEpTRG9jLlxuICogSWYgcHJvcGVydHkgaGFzIGNoaWxkcmVuIHRoYW4gaGFuZGxlIGl0IGFzIGFuIG9iamVjdC5cbiAqIEVsc2UgaWYgdGhlcmUgaXMgcGFyZW5OYW1lIHRoYW4gYWRkIGl0IHRvIHByb3AgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge1RZUEVPQkpFQ1R9IHR5cGVPYmplY3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBjaGlsZHJlbiBKU0RvYy5cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc0NoaWxkcmVuKHR5cGVPYmplY3QsIHBhcmVudE5hbWUpIHtcbiAgbGV0IG91dHB1dFN0cmluZ3MgPSBbXTtcbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB0eXBlT2JqZWN0LmNoaWxkcmVuKSB7XG4gICAgbGV0IG5ld1R5cGU7XG4gICAgaWYgKHByb3BlcnR5LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIG5ld1R5cGUgPSB0eXBlT2JqZWN0VG9QbGFpbkpzZG9jKHByb3BlcnR5LCBwYXJlbnROYW1lKTtcbiAgICB9IGVsc2UgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIHByb3BlcnR5Lm5hbWUgPSBgJHtwYXJlbnROYW1lfS4ke3Byb3BlcnR5Lm5hbWV9YDtcbiAgICB9XG4gICAgb3V0cHV0U3RyaW5ncy5wdXNoKGNyZWF0ZUpzZG9jUHJvcGVydHkocHJvcGVydHkpKTtcbiAgICBvdXRwdXRTdHJpbmdzLnB1c2gobmV3VHlwZSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dFN0cmluZ3Muam9pbihcIlwiKTtcbn1cblxuLyoqXG4gKiBDaGFuZ2VzIG9iamVjdCdzIG5hbWUgaW4gYWNjb3JkYW5jZSB0byBwYXJlbnQgb2JqZWN0LlxuICogUmV0dXJucyBKU0RvYyBzdHJpbmcgZm9yIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7VFlQRU9CSkVDVH0gdHlwZU9iamVjdFxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmVudE5hbWVcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGNoaWxkcmVuIEpTRG9jLlxuICovXG5mdW5jdGlvbiB0eXBlT2JqZWN0VG9QbGFpbkpzZG9jKHR5cGVPYmplY3QsIHBhcmVudE5hbWUpIHtcbiAgdHlwZU9iamVjdC5uYW1lID0gcGFyZW50TmFtZVxuICAgID8gYCR7cGFyZW50TmFtZX0uJHt0eXBlT2JqZWN0Lm5hbWV9YFxuICAgIDogdHlwZU9iamVjdC5uYW1lO1xuICB0eXBlT2JqZWN0LnR5cGUgPSBgT2JqZWN0JHt0eXBlT2JqZWN0LmlzQXJyYXkgPyBcIltdXCIgOiBcIlwifWA7XG5cbiAgcmV0dXJuIHByb2Nlc3NDaGlsZHJlbih0eXBlT2JqZWN0LCB0eXBlT2JqZWN0Lm5hbWUpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgcm9vdCB0eXBlZGVmIGZvciBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtUWVBFT0JKRUNUfSB0eXBlT2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBKU0RvYyB0eXBlZGVmLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSb290VHlwZWRlZih0eXBlT2JqZWN0KSB7XG4gIGxldCBicmFja2V0cyA9IFwiXCI7XG4gIGlmICh0eXBlT2JqZWN0LmlzQXJyYXkpIHtcbiAgICBicmFja2V0cyA9IHR5cGVPYmplY3QudHlwZS5zdWJzdHJpbmcodHlwZU9iamVjdC50eXBlLmluZGV4T2YoXCJbXCIpKTtcbiAgfVxuICByZXR1cm4gYC8qKlxcbiAqIEB0eXBlZGVmIHtPYmplY3Qke2JyYWNrZXRzfX0gJHt0eXBlT2JqZWN0Lm5hbWV9XFxuYDtcbn1cblxuLyoqXG4gKiBBZGRzIHJvb3QgdHlwZWRlZiBhbmQgcm9vdCdzIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7VFlQRU9CSkVDVH0gdHlwZU9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gd2hvbGUgSlNEb2Mgc3RyaW5nLlxuICovXG5mdW5jdGlvbiByb290T2JqZWN0VG9Kc2RvYyh0eXBlT2JqZWN0KSB7XG4gIGxldCBvdXRwdXRTdHJpbmdzID0gW107XG4gIG91dHB1dFN0cmluZ3MucHVzaChjcmVhdGVSb290VHlwZWRlZih0eXBlT2JqZWN0KSk7XG4gIG91dHB1dFN0cmluZ3MucHVzaChwcm9jZXNzQ2hpbGRyZW4odHlwZU9iamVjdCkpO1xuXG4gIHJldHVybiBvdXRwdXRTdHJpbmdzLmpvaW4oXCJcIikgKyBcIiAqL1wiO1xufVxuXG4vKipcbiAqIFN0YXJ0cyB0cmVlIHByZS1vcmRlciB0cmF2ZXJzYWwgdG8gYnVpbGQgSlNEb2Mgc3RyaW5nLlxuICogdHJlZS5jaGlsZHJlblswXSAtIHRyZWUgcm9vdFxuICogRGVwZW5kaW5nIG9uIHJvb3QgZWxlbWVudCB0eXBlIHVzZXMgZGlmZmVyZW50IGFwcHJvYWNoZXMgZm9yIHByaW1pdGl2ZVxuICogdHlwZXMsIEpTIG9iamVjdHMgYW5kIGFycmF5cy5cbiAqIElmIHJvb3QgaGFzbid0IGNoaWxkcmVuIHRoYW4gaXQgaGFzIHByaW1pdGl2ZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7VFlQRU9CSkVDVH0gdHJlZVxuICogQHJldHVybnMge1N0cmluZ30gd2hvbGUgSlNEb2Mgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBjb252ZXJ0VG9QbGFpbkpzZG9jKHRyZWUpIHtcbiAgbGV0IG91dHB1dCA9IFwiXCI7XG4gIGlmICh0cmVlLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBvdXRwdXQgKz0gcm9vdE9iamVjdFRvSnNkb2MoXG4gICAgICB0cmVlLmNoaWxkcmVuWzBdLCB0cmVlLmNoaWxkcmVuWzBdLmlzQXJyYXlcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCArPSBgLyoqIEB0eXBlZGVmIHske3RyZWUuY2hpbGRyZW5bMF0udHlwZX19ICR7XG4gICAgICB0cmVlLmNoaWxkcmVuWzBdLm5hbWV9ICovYDtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgSlNEb2MgJ3Byb3BlcnR5JyBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtUWVBFT0JKRUNUfSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmVudE5hbWUgcGFyZW50IG5hbWUgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gcHJvcFxuICogbmFtZS5cbiAqIEByZXR1cm5zIEpTRG9jIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSnNkb2NQcm9wZXJ0eShwcm9wZXJ0eSwgcGFyZW50TmFtZSkge1xuICByZXR1cm4gYCAqIEBwcm9wZXJ0eSB7JHtwcm9wZXJ0eS50eXBlfX0gJHtcbiAgICBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArIFwiLlwiIDogXCJcIn0ke3Byb3BlcnR5Lm5hbWV9XFxuYDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIEpTRG9jICd0eXBlZGVmJyBzdHJpbmcgZm9yIEpTIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybnMgSlNEb2Mgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBjcmVhdGVKc2RvY09iamVjdFR5cGVkZWYodHlwZSkge1xuICBjb25zdCBtb2RpZmllZFR5cGUgPSB0eXBlLnJlcGxhY2UoL1xcW1xcXSQvLCBcIlwiKSB8fCAnVFlQRSc7XG4gIHJldHVybiBgICogQHR5cGVkZWYge09iamVjdH0gJHttb2RpZmllZFR5cGV9XFxuYDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIEpTRG9jICd0eXBlZGVmJyBzdHJpbmcgZm9yIGFycmF5LiBVc2VkIG9ubHkgaWYgdHJlZSByb290IGVsZW1lbnRcbiAqIGlzIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybnMgSlNEb2Mgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBjcmVhdGVKc2RvY0FycmF5VHlwZWRlZih0eXBlLCBuYW1lKSB7XG4gIGNvbnN0IG1vZGlmaWVkVHlwZSA9IHR5cGUucmVwbGFjZSgvVFlQRS8sIFwiT2JqZWN0XCIpIHx8ICdUWVBFJztcbiAgcmV0dXJuIGAgKiBAdHlwZWRlZiB7JHttb2RpZmllZFR5cGV9fSAke25hbWV9XFxuYDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIEpTRG9jIHN0cmluZyBmb3IgdHJlZSBicmFuY2guXG4gKlxuICogQHBhcmFtIHtUWVBFT0JKRUNUfSB0eXBlT2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtyb290SXNBcnJheT1mYWxzZV1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IEpTRG9jIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdHlwZU9iamVjdFRvSnNkb2ModHlwZU9iamVjdCwgcm9vdElzQXJyYXkgPSBmYWxzZSkge1xuICBsZXQgb3V0cHV0U3RyaW5ncyA9IFtdO1xuICBsZXQgbmV3VHlwZXMgPSBbXTtcbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB0eXBlT2JqZWN0LmNoaWxkcmVuKSB7XG4gICAgY29uc3QgbmV3VHlwZSA9IGdldFByb3BlcnR5TmV3VHlwZShwcm9wZXJ0eSk7XG4gICAgaWYgKG5ld1R5cGUpIG5ld1R5cGVzLnVuc2hpZnQobmV3VHlwZSk7XG4gICAgb3V0cHV0U3RyaW5ncy5wdXNoKGNyZWF0ZUpzZG9jUHJvcGVydHkocHJvcGVydHkpKTtcbiAgfVxuXG4gIHJldHVybiBgJHtuZXdUeXBlcy5qb2luKFwiXCIpfS8qKlxcbiR7XG4gICAgcm9vdElzQXJyYXlcbiAgICA/IGNyZWF0ZUpzZG9jQXJyYXlUeXBlZGVmKHR5cGVPYmplY3QudHlwZSwgdHlwZU9iamVjdC5uYW1lKVxuICAgIDogY3JlYXRlSnNkb2NPYmplY3RUeXBlZGVmKHR5cGVPYmplY3QudHlwZSlcbiAgfSR7b3V0cHV0U3RyaW5ncy5qb2luKFwiXCIpfSAqL1xcbmA7XG59XG5cbi8qKlxuICogU3RhcnRzIHRyZWUgcG9zdC1vcmRlciB0cmF2ZXJzYWwgdG8gYnVpbGQgSlNEb2Mgc3RyaW5nLlxuICogdHJlZS5jaGlsZHJlblswXSAtIHRyZWUgcm9vdFxuICogRGVwZW5kaW5nIG9uIHJvb3QgZWxlbWVudCB0eXBlIHVzZXMgZGlmZmVyZW50IGFwcHJvYWNoZXMgZm9yIHByaW1pdGl2ZVxuICogdHlwZXMsIEpTIG9iamVjdHMgYW5kIGFycmF5cy5cbiAqIElmIHJvb3QgaGFzbid0IGNoaWxkcmVuIHRoYW4gaXQgaGFzIHByaW1pdGl2ZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7VFlQRU9CSkVDVH0gdHJlZVxuICogQHJldHVybnMge1N0cmluZ30gd2hvbGUgSlNEb2Mgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBjb252ZXJ0VG9UeXBlZEpzZG9jKHRyZWUpIHtcbiAgbGV0IG91dHB1dCA9IFwiXCI7XG4gIGlmICh0cmVlLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBvdXRwdXQgKz0gdHlwZU9iamVjdFRvSnNkb2MoXG4gICAgICB0cmVlLmNoaWxkcmVuWzBdLCB0cmVlLmNoaWxkcmVuWzBdLmlzQXJyYXlcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCArPSBgLyoqIEB0eXBlZGVmIHske3RyZWUuY2hpbGRyZW5bMF0udHlwZX19ICR7XG4gICAgICB0cmVlLmNoaWxkcmVuWzBdLm5hbWV9ICovYDtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbi8qKlxuICogUmV0dXJucyB2YWx1ZSdzIHR5cGUuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgdmFsdWUncyB0eXBlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZVR5cGUodmFsdWUpIHtcbiAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICBpZih2YWx1ZS5sZW5ndGggPiAwICYmICFpc05hTihOdW1iZXIodmFsdWUpKSkgcmV0dXJuIFwiTnVtYmVyXCI7XG4gICAgICByZXR1cm4gXCJTdHJpbmdcIjtcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICByZXR1cm4gXCJOdW1iZXJcIjtcbiAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgcmV0dXJuIFwiQm9vbGVhblwiO1xuICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuIFwiTnVsbFwiO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gXCJBcnJheVwiO1xuICAgICAgcmV0dXJuIFwiT2JqZWN0XCI7XG4gICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICByZXR1cm4gXCJGdW5jdGlvblwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogUGFyc2VzIGFycmF5LiBBcnJheSBkb24ndCBiZWNvbWUgbmV3IHR5cGUgaXRzZWxmLiBJbnN0ZWFkIHVzZWQgaXQnc1xuICogZmlyc3QgZWxlbWVudCB0byBkZXRlcm1pbmUgYXJyYXkgdHlwZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7VFlQRU9CSkVDVH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VBcnJheShhcnJheSwgbmFtZSkge1xuICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlRGF0YShhcnJheVswXSwgbmFtZSk7XG4gICAgcmVzdWx0LnR5cGUgKz0gXCJbXVwiO1xuICAgIHJlc3VsdC5pc0FycmF5ID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICB0eXBlOiBcIkFycmF5XCIsXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGlzQXJyYXk6IHRydWVcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRyZWUgbm9kZSB3aXRoIHR5cGUgb2JqZWN0LiBQYXJzZXMgb2JqZWN0J3MgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHsqfSBvYmplY3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7VFlQRU9CSkVDVH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VPYmplY3Qob2JqZWN0LCBuYW1lKSB7XG4gIGNvbnN0IG5vZGUgPSB7XG4gICAgbmFtZTogbmFtZSxcbiAgICB0eXBlOiBcIk9iamVjdFwiLFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBpc0FycmF5OiBmYWxzZSxcbiAgfVxuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgbm9kZS5jaGlsZHJlbi5wdXNoKHBhcnNlRGF0YShvYmplY3Rba2V5XSwga2V5KSk7XG4gIH1cbiAgXG4gIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBub2RlLnR5cGUgPSAobm9kZS5uYW1lICYmIG5vZGUubmFtZSAhPT0gXCJUWVBFXCIpXG4gICAgICA/IGAke25vZGUubmFtZS50b1VwcGVyQ2FzZSgpfV9UWVBFYCA6IFwiVFlQRVwiO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG4vKipcbiAqIERldGVybWluZXMgZGF0YSB0eXBlLlxuICogUGFyc2VzIGNvbXBsZXggdHlwZXMuIENyZWF0ZXMgdHJlZSBvZiB0eXBlcy5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7VFlQRU9CSkVDVH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VEYXRhKGRhdGEsIG5hbWUpIHtcbiAgbGV0IHR5cGUgPSBnZXRWYWx1ZVR5cGUoZGF0YSk7XG4gIGxldCBuZXdOb2RlID0ge1xuICAgIG5hbWU6IG5hbWUgfHwgXCJUWVBFXCIsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjaGlsZHJlbjogW10sXG4gICAgaXNBcnJheTogZmFsc2UsXG4gIH07XG5cbiAgaWYgKHR5cGUgPT09IFwiQXJyYXlcIikge1xuICAgIG5ld05vZGUgPSBwYXJzZUFycmF5KGRhdGEsIG5ld05vZGUubmFtZSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJPYmplY3RcIikge1xuICAgIG5ld05vZGUgPSBwYXJzZU9iamVjdChkYXRhLCBuZXdOb2RlLm5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG5ld05vZGU7XG59XG5cbi8qKlxuICogUmV0dXJucyBKU0RvYyBmb3Igd2hvbGUgb2JqZWN0LlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7Kn0gaW5wdXREYXRhXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtzcGxpdFRvVHlwZXM9dHJ1ZV0gY3JlYXRlIEpTRG9jIHdpdGggc3BsaXR0ZWQgdHlwZXNcbiAqIG9yIG5vdC5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGpzb24yanNkb2MoaW5wdXREYXRhLCBzcGxpdFRvVHlwZXMgPSB0cnVlKSB7XG4gIC8qKiBAdHlwZSB7e25hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nLCBjaGlsZHJlbjogYXJyYXl9fSAqL1xuICBjb25zdCB0cmVlT2ZUeXBlcyA9IHtcbiAgICBuYW1lOiBcInJvb3RcIixcbiAgICB0eXBlOiBudWxsLFxuICAgIGNoaWxkcmVuOiBbXVxuICB9XG4gIHRyZWVPZlR5cGVzLmNoaWxkcmVuLnB1c2gocGFyc2VEYXRhKGlucHV0RGF0YSkpO1xuICBjb25zdCByZXN1bHQgPSBzcGxpdFRvVHlwZXNcbiAgICA/IGNvbnZlcnRUb1R5cGVkSnNkb2ModHJlZU9mVHlwZXMpXG4gICAgOiBjb252ZXJ0VG9QbGFpbkpzZG9jKHRyZWVPZlR5cGVzKTtcbiAgcmV0dXJuIHJlc3VsdC50cmltKCk7XG59XG4iLCJjb25zdCBvYmpDb21wbGV4ID0ge1xuICBzdHJpbmc6IFwic3RyaW5nXCIsXG4gIG51bWJlcjogMzUsXG4gIGJvb2xlYW46IGZhbHNlLFxuICBudWxsOiBudWxsLFxuICBlbXB0eUFycmF5OiBbXSxcbiAgbnVtYmVyQXJyYXk6IFswLDEsMiwzXSxcbiAgZW1wdHlPYmplY3RBcnJheTogW3t9XSxcbiAgb2JqZWN0QXJyYXk6IFt7XG4gICAgcHJvcDE6IFwicHJvcDFcIixcbiAgICBwcm9wMjogNCxcbiAgICBwcm9wMzogeyBhOiBcImFcIn1cbiAgfV0sXG4gIGFkZHJlc3M6IHtcbiAgICBjaXR5OiBcIm1udHZpZXdcIixcbiAgICBzdHJlZXQ6IFwiZWFydGhcIixcbiAgICBudW1iZXI6IDQsXG4gICAgc3RhdHVzOiB7XG4gICAgICBnb29kOiB0cnVlXG4gICAgfSxcbiAgICByZXNpZGVudHM6IFtcIk1heFwiLCBcIkFsZXhcIl1cbiAgfSxcbiAgY29tcGxleE9iamVjdDoge1xuICAgIGNtcHhPYmpBcnJheTogW3tcbiAgICAgIGlubmVyQXJyYXk6IFs0XVxuICAgIH1dXG4gIH1cbn07XG5cbmNvbnN0IG9iakNvbXBsZXhKU2RvYyA9IGAvKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENNUFhPQkpBUlJBWV9UWVBFXG4gKiBAcHJvcGVydHkge051bWJlcltdfSBpbm5lckFycmF5XG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQ09NUExFWE9CSkVDVF9UWVBFXG4gKiBAcHJvcGVydHkge0NNUFhPQkpBUlJBWV9UWVBFW119IGNtcHhPYmpBcnJheVxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNUQVRVU19UWVBFXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGdvb2RcbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBBRERSRVNTX1RZUEVcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBjaXR5XG4gKiBAcHJvcGVydHkge1N0cmluZ30gc3RyZWV0XG4gKiBAcHJvcGVydHkge051bWJlcn0gbnVtYmVyXG4gKiBAcHJvcGVydHkge1NUQVRVU19UWVBFfSBzdGF0dXNcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nW119IHJlc2lkZW50c1xuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBST1AzX1RZUEVcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBhXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gT0JKRUNUQVJSQVlfVFlQRVxuICogQHByb3BlcnR5IHtTdHJpbmd9IHByb3AxXG4gKiBAcHJvcGVydHkge051bWJlcn0gcHJvcDJcbiAqIEBwcm9wZXJ0eSB7UFJPUDNfVFlQRX0gcHJvcDNcbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUWVBFXG4gKiBAcHJvcGVydHkge1N0cmluZ30gc3RyaW5nXG4gKiBAcHJvcGVydHkge051bWJlcn0gbnVtYmVyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGJvb2xlYW5cbiAqIEBwcm9wZXJ0eSB7TnVsbH0gbnVsbFxuICogQHByb3BlcnR5IHtBcnJheX0gZW1wdHlBcnJheVxuICogQHByb3BlcnR5IHtOdW1iZXJbXX0gbnVtYmVyQXJyYXlcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0W119IGVtcHR5T2JqZWN0QXJyYXlcbiAqIEBwcm9wZXJ0eSB7T0JKRUNUQVJSQVlfVFlQRVtdfSBvYmplY3RBcnJheVxuICogQHByb3BlcnR5IHtBRERSRVNTX1RZUEV9IGFkZHJlc3NcbiAqIEBwcm9wZXJ0eSB7Q09NUExFWE9CSkVDVF9UWVBFfSBjb21wbGV4T2JqZWN0XG4gKi9gO1xuXG4gY29uc3Qgb2JqQ29tcGxleEpTZG9jVW50eXBlZCA9IGAvKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRZUEVcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdHJpbmdcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBudW1iZXJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYm9vbGVhblxuICogQHByb3BlcnR5IHtOdWxsfSBudWxsXG4gKiBAcHJvcGVydHkge0FycmF5fSBlbXB0eUFycmF5XG4gKiBAcHJvcGVydHkge051bWJlcltdfSBudW1iZXJBcnJheVxuICogQHByb3BlcnR5IHtPYmplY3RbXX0gZW1wdHlPYmplY3RBcnJheVxuICogQHByb3BlcnR5IHtPYmplY3RbXX0gb2JqZWN0QXJyYXlcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBvYmplY3RBcnJheS5wcm9wMVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IG9iamVjdEFycmF5LnByb3AyXG4gKiBAcHJvcGVydHkge09iamVjdH0gb2JqZWN0QXJyYXkucHJvcDNcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBvYmplY3RBcnJheS5wcm9wMy5hXG4gKiBAcHJvcGVydHkge09iamVjdH0gYWRkcmVzc1xuICogQHByb3BlcnR5IHtTdHJpbmd9IGFkZHJlc3MuY2l0eVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGFkZHJlc3Muc3RyZWV0XG4gKiBAcHJvcGVydHkge051bWJlcn0gYWRkcmVzcy5udW1iZXJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBhZGRyZXNzLnN0YXR1c1xuICogQHByb3BlcnR5IHtCb29sZWFufSBhZGRyZXNzLnN0YXR1cy5nb29kXG4gKiBAcHJvcGVydHkge1N0cmluZ1tdfSBhZGRyZXNzLnJlc2lkZW50c1xuICogQHByb3BlcnR5IHtPYmplY3R9IGNvbXBsZXhPYmplY3RcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0W119IGNvbXBsZXhPYmplY3QuY21weE9iakFycmF5XG4gKiBAcHJvcGVydHkge051bWJlcltdfSBjb21wbGV4T2JqZWN0LmNtcHhPYmpBcnJheS5pbm5lckFycmF5XG4gKi9gO1xuXG4gY29uc3Qgb2JqUHJpbWl0aXZlcyA9IHtcbiAgIHN0cmluZzogXCJzdHJpbmdcIixcbiAgIG51bWJlcjogMCxcbiAgIGJvb2xlYW46IHRydWUsXG4gICBudWxsOiBudWxsXG4gfVxuXG5jb25zdCBvYmpQcmltaXRpdmVzSlNkb2MgPSBgLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUWVBFXG4gKiBAcHJvcGVydHkge1N0cmluZ30gc3RyaW5nXG4gKiBAcHJvcGVydHkge051bWJlcn0gbnVtYmVyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGJvb2xlYW5cbiAqIEBwcm9wZXJ0eSB7TnVsbH0gbnVsbFxuICovYDtcblxuY29uc3Qgb2JqTGlzdCA9IFt7XG4gIG51bWJlcjogNFxufV07XG5cbmNvbnN0IG9iakxpc3RSZXN1bHQgPSBgLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0W119IFRZUEVcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBudW1iZXJcbiAqL2A7XG5cbmNvbnN0IGNvbXBsZXhBcnJheSA9IFtbe1xuICBwcm9wOiBcInN0cmluZ1wiXG59XV07XG5cbmNvbnN0IGNvbXBsZXhBcnJheVJlc3VsdCA9IGAvKipcbiAqIEB0eXBlZGVmIHtPYmplY3RbXVtdfSBUWVBFXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcHJvcFxuICovYDtcblxuZXhwb3J0IHtcbiAgb2JqQ29tcGxleCwgb2JqQ29tcGxleEpTZG9jLFxuICBvYmpQcmltaXRpdmVzLCBvYmpQcmltaXRpdmVzSlNkb2MsXG4gIG9iakxpc3QsIG9iakxpc3RSZXN1bHQsXG4gIGNvbXBsZXhBcnJheSwgY29tcGxleEFycmF5UmVzdWx0LFxuICBvYmpDb21wbGV4SlNkb2NVbnR5cGVkXG59OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=