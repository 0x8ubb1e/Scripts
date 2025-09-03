// ==UserScript==
// @name							Iwara Download Tool
// @description				Download videos from iwara.tv
// @name:ja						Iwara バッチダウンローダー
// @description:ja		Iwara 動画バッチをダウンロード
// @name:zh-CN				Iwara 批量下载工具
// @description:zh-CN	批量下载 Iwara 视频
// @icon							https://www.google.com/s2/favicons?sz=64&domain=iwara.tv
// @namespace					https://github.com/dawn-lc/
// @author						dawn-lc
// @license						Apache-2.0
// @copyright					2025, Dawnlc (https://dawnlc.me/)
// @source						https://github.com/dawn-lc/IwaraDownloadTool
// @supportURL				https://github.com/dawn-lc/IwaraDownloadTool/issues
// @connect						iwara.tv
// @connect						*.iwara.tv
// @connect						mmdfans.net
// @connect						*.mmdfans.net
// @connect						localhost
// @connect						127.0.0.1
// @connect						*
// @match							*://*.iwara.tv/*
// @grant							GM_getValue
// @grant							GM_setValue
// @grant							GM_listValues
// @grant							GM_deleteValue
// @grant							GM_addValueChangeListener
// @grant							GM_addStyle
// @grant							GM_setClipboard
// @grant							GM_download
// @grant							GM_xmlhttpRequest
// @grant							GM_openInTab
// @grant							GM_getTab
// @grant							GM_saveTab
// @grant							GM_getTabs
// @grant							GM_info
// @grant							unsafeWindow
// @grant							window.close
// @run-at						document-start
// @version						3.3.45
// @downloadURL				https://update.sleazyfork.org/scripts/422239/Iwara%20Download%20Tool.user.js
// @updateURL					https://update.sleazyfork.org/scripts/422239/Iwara%20Download%20Tool.meta.js
// ==/UserScript==

"use strict";
(() => {
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __require = ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
		get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
	}) : x)(function (x) {
		if (typeof require !== "undefined") return require.apply(this, arguments);
		throw Error('Dynamic require of "' + x + '" is not supported');
	});
	var __commonJS = (cb, mod) => function __require2 () {
		return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from))
				if (!__hasOwnProp.call(to, key) && key !== except)
					__defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
		isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
		mod
	));
	var require_moment = __commonJS({
		"node_modules/moment/moment.js" (exports, module) {
			"use strict";
			;
			(function (global2, factory) {
				typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.moment = factory();
			})(exports, function () {
				"use strict";
				var hookCallback;
				function hooks () {
					return hookCallback.apply(null, arguments);
				}
				function setHookCallback (callback) {
					hookCallback = callback;
				}
				function isArray3 (input) {
					return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
				}
				function isObject2 (input) {
					return input != null && Object.prototype.toString.call(input) === "[object Object]";
				}
				function hasOwnProp (a, b) {
					return Object.prototype.hasOwnProperty.call(a, b);
				}
				function isObjectEmpty (obj) {
					if (Object.getOwnPropertyNames) {
						return Object.getOwnPropertyNames(obj).length === 0;
					} else {
						var k;
						for (k in obj) {
							if (hasOwnProp(obj, k)) {
								return false;
							}
						}
						return true;
					}
				}
				function isUndefined2 (input) {
					return input === void 0;
				}
				function isNumber2 (input) {
					return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
				}
				function isDate (input) {
					return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
				}
				function map (arr, fn) {
					var res = [], i, arrLen = arr.length;
					for (i = 0; i < arrLen; ++i) {
						res.push(fn(arr[i], i));
					}
					return res;
				}
				function extend2 (a, b) {
					for (var i in b) {
						if (hasOwnProp(b, i)) {
							a[i] = b[i];
						}
					}
					if (hasOwnProp(b, "toString")) {
						a.toString = b.toString;
					}
					if (hasOwnProp(b, "valueOf")) {
						a.valueOf = b.valueOf;
					}
					return a;
				}
				function createUTC (input, format2, locale2, strict) {
					return createLocalOrUTC(input, format2, locale2, strict, true).utc();
				}
				function defaultParsingFlags () {
					return {
						empty: false,
						unusedTokens: [],
						unusedInput: [],
						overflow: -2,
						charsLeftOver: 0,
						nullInput: false,
						invalidEra: null,
						invalidMonth: null,
						invalidFormat: false,
						userInvalidated: false,
						iso: false,
						parsedDateParts: [],
						era: null,
						meridiem: null,
						rfc2822: false,
						weekdayMismatch: false
					};
				}
				function getParsingFlags (m) {
					if (m._pf == null) {
						m._pf = defaultParsingFlags();
					}
					return m._pf;
				}
				var some;
				if (Array.prototype.some) {
					some = Array.prototype.some;
				} else {
					some = function (fun) {
						var t = Object(this), len = t.length >>> 0, i;
						for (i = 0; i < len; i++) {
							if (i in t && fun.call(this, t[i], i, t)) {
								return true;
							}
						}
						return false;
					};
				}
				function isValid (m) {
					var flags = null, parsedParts = false, isNowValid = m._d && !isNaN(m._d.getTime());
					if (isNowValid) {
						flags = getParsingFlags(m);
						parsedParts = some.call(flags.parsedDateParts, function (i) {
							return i != null;
						});
						isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
						if (m._strict) {
							isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
						}
					}
					if (Object.isFrozen == null || !Object.isFrozen(m)) {
						m._isValid = isNowValid;
					} else {
						return isNowValid;
					}
					return m._isValid;
				}
				function createInvalid (flags) {
					var m = createUTC(NaN);
					if (flags != null) {
						extend2(getParsingFlags(m), flags);
					} else {
						getParsingFlags(m).userInvalidated = true;
					}
					return m;
				}
				var momentProperties = hooks.momentProperties = [], updateInProgress = false;
				function copyConfig (to2, from2) {
					var i, prop, val, momentPropertiesLen = momentProperties.length;
					if (!isUndefined2(from2._isAMomentObject)) {
						to2._isAMomentObject = from2._isAMomentObject;
					}
					if (!isUndefined2(from2._i)) {
						to2._i = from2._i;
					}
					if (!isUndefined2(from2._f)) {
						to2._f = from2._f;
					}
					if (!isUndefined2(from2._l)) {
						to2._l = from2._l;
					}
					if (!isUndefined2(from2._strict)) {
						to2._strict = from2._strict;
					}
					if (!isUndefined2(from2._tzm)) {
						to2._tzm = from2._tzm;
					}
					if (!isUndefined2(from2._isUTC)) {
						to2._isUTC = from2._isUTC;
					}
					if (!isUndefined2(from2._offset)) {
						to2._offset = from2._offset;
					}
					if (!isUndefined2(from2._pf)) {
						to2._pf = getParsingFlags(from2);
					}
					if (!isUndefined2(from2._locale)) {
						to2._locale = from2._locale;
					}
					if (momentPropertiesLen > 0) {
						for (i = 0; i < momentPropertiesLen; i++) {
							prop = momentProperties[i];
							val = from2[prop];
							if (!isUndefined2(val)) {
								to2[prop] = val;
							}
						}
					}
					return to2;
				}
				function Moment2 (config2) {
					copyConfig(this, config2);
					this._d = new Date(config2._d != null ? config2._d.getTime() : NaN);
					if (!this.isValid()) {
						this._d = new Date(NaN);
					}
					if (updateInProgress === false) {
						updateInProgress = true;
						hooks.updateOffset(this);
						updateInProgress = false;
					}
				}
				function isMoment (obj) {
					return obj instanceof Moment2 || obj != null && obj._isAMomentObject != null;
				}
				function warn (msg) {
					if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
						console.warn("Deprecation warning: " + msg);
					}
				}
				function deprecate (msg, fn) {
					var firstTime = true;
					return extend2(function () {
						if (hooks.deprecationHandler != null) {
							hooks.deprecationHandler(null, msg);
						}
						if (firstTime) {
							var args = [], arg, i, key, argLen = arguments.length;
							for (i = 0; i < argLen; i++) {
								arg = "";
								if (typeof arguments[i] === "object") {
									arg += "\n[" + i + "] ";
									for (key in arguments[0]) {
										if (hasOwnProp(arguments[0], key)) {
											arg += key + ": " + arguments[0][key] + ", ";
										}
									}
									arg = arg.slice(0, -2);
								} else {
									arg = arguments[i];
								}
								args.push(arg);
							}
							warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack);
							firstTime = false;
						}
						return fn.apply(this, arguments);
					}, fn);
				}
				var deprecations = {};
				function deprecateSimple (name, msg) {
					if (hooks.deprecationHandler != null) {
						hooks.deprecationHandler(name, msg);
					}
					if (!deprecations[name]) {
						warn(msg);
						deprecations[name] = true;
					}
				}
				hooks.suppressDeprecationWarnings = false;
				hooks.deprecationHandler = null;
				function isFunction (input) {
					return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
				}
				function set (config2) {
					var prop, i;
					for (i in config2) {
						if (hasOwnProp(config2, i)) {
							prop = config2[i];
							if (isFunction(prop)) {
								this[i] = prop;
							} else {
								this["_" + i] = prop;
							}
						}
					}
					this._config = config2;
					this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
				}
				function mergeConfigs (parentConfig, childConfig) {
					var res = extend2({}, parentConfig), prop;
					for (prop in childConfig) {
						if (hasOwnProp(childConfig, prop)) {
							if (isObject2(parentConfig[prop]) && isObject2(childConfig[prop])) {
								res[prop] = {};
								extend2(res[prop], parentConfig[prop]);
								extend2(res[prop], childConfig[prop]);
							} else if (childConfig[prop] != null) {
								res[prop] = childConfig[prop];
							} else {
								delete res[prop];
							}
						}
					}
					for (prop in parentConfig) {
						if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject2(parentConfig[prop])) {
							res[prop] = extend2({}, res[prop]);
						}
					}
					return res;
				}
				function Locale (config2) {
					if (config2 != null) {
						this.set(config2);
					}
				}
				var keys2;
				if (Object.keys) {
					keys2 = Object.keys;
				} else {
					keys2 = function (obj) {
						var i, res = [];
						for (i in obj) {
							if (hasOwnProp(obj, i)) {
								res.push(i);
							}
						}
						return res;
					};
				}
				var defaultCalendar = {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L"
				};
				function calendar (key, mom, now2) {
					var output = this._calendar[key] || this._calendar["sameElse"];
					return isFunction(output) ? output.call(mom, now2) : output;
				}
				function zeroFill (number, targetLength, forceSign) {
					var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
					return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
				}
				var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
				function addFormatToken (token2, padded, ordinal2, callback) {
					var func = callback;
					if (typeof callback === "string") {
						func = function () {
							return this[callback]();
						};
					}
					if (token2) {
						formatTokenFunctions[token2] = func;
					}
					if (padded) {
						formatTokenFunctions[padded[0]] = function () {
							return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
						};
					}
					if (ordinal2) {
						formatTokenFunctions[ordinal2] = function () {
							return this.localeData().ordinal(func.apply(this, arguments), token2);
						};
					}
				}
				function removeFormattingTokens (input) {
					if (input.match(/\[[\s\S]/)) {
						return input.replace(/^\[|\]$/g, "");
					}
					return input.replace(/\\/g, "");
				}
				function makeFormatFunction (format2) {
					var array = format2.match(formattingTokens), i, length;
					for (i = 0, length = array.length; i < length; i++) {
						if (formatTokenFunctions[array[i]]) {
							array[i] = formatTokenFunctions[array[i]];
						} else {
							array[i] = removeFormattingTokens(array[i]);
						}
					}
					return function (mom) {
						var output = "", i2;
						for (i2 = 0; i2 < length; i2++) {
							output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
						}
						return output;
					};
				}
				function formatMoment (m, format2) {
					if (!m.isValid()) {
						return m.localeData().invalidDate();
					}
					format2 = expandFormat(format2, m.localeData());
					formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
					return formatFunctions[format2](m);
				}
				function expandFormat (format2, locale2) {
					var i = 5;
					function replaceLongDateFormatTokens (input) {
						return locale2.longDateFormat(input) || input;
					}
					localFormattingTokens.lastIndex = 0;
					while (i >= 0 && localFormattingTokens.test(format2)) {
						format2 = format2.replace(localFormattingTokens, replaceLongDateFormatTokens);
						localFormattingTokens.lastIndex = 0;
						i -= 1;
					}
					return format2;
				}
				var defaultLongDateFormat = {
					LTS: "h:mm:ss A",
					LT: "h:mm A",
					L: "MM/DD/YYYY",
					LL: "MMMM D, YYYY",
					LLL: "MMMM D, YYYY h:mm A",
					LLLL: "dddd, MMMM D, YYYY h:mm A"
				};
				function longDateFormat (key) {
					var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
					if (format2 || !formatUpper) {
						return format2;
					}
					this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function (tok) {
						if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
							return tok.slice(1);
						}
						return tok;
					}).join("");
					return this._longDateFormat[key];
				}
				var defaultInvalidDate = "Invalid date";
				function invalidDate () {
					return this._invalidDate;
				}
				var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
				function ordinal (number) {
					return this._ordinal.replace("%d", number);
				}
				var defaultRelativeTime = {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					w: "a week",
					ww: "%d weeks",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years"
				};
				function relativeTime (number, withoutSuffix, string, isFuture) {
					var output = this._relativeTime[string];
					return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
				}
				function pastFuture (diff2, output) {
					var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
					return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
				}
				var aliases = {
					D: "date",
					dates: "date",
					date: "date",
					d: "day",
					days: "day",
					day: "day",
					e: "weekday",
					weekdays: "weekday",
					weekday: "weekday",
					E: "isoWeekday",
					isoweekdays: "isoWeekday",
					isoweekday: "isoWeekday",
					DDD: "dayOfYear",
					dayofyears: "dayOfYear",
					dayofyear: "dayOfYear",
					h: "hour",
					hours: "hour",
					hour: "hour",
					ms: "millisecond",
					milliseconds: "millisecond",
					millisecond: "millisecond",
					m: "minute",
					minutes: "minute",
					minute: "minute",
					M: "month",
					months: "month",
					month: "month",
					Q: "quarter",
					quarters: "quarter",
					quarter: "quarter",
					s: "second",
					seconds: "second",
					second: "second",
					gg: "weekYear",
					weekyears: "weekYear",
					weekyear: "weekYear",
					GG: "isoWeekYear",
					isoweekyears: "isoWeekYear",
					isoweekyear: "isoWeekYear",
					w: "week",
					weeks: "week",
					week: "week",
					W: "isoWeek",
					isoweeks: "isoWeek",
					isoweek: "isoWeek",
					y: "year",
					years: "year",
					year: "year"
				};
				function normalizeUnits (units) {
					return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
				}
				function normalizeObjectUnits (inputObject) {
					var normalizedInput = {}, normalizedProp, prop;
					for (prop in inputObject) {
						if (hasOwnProp(inputObject, prop)) {
							normalizedProp = normalizeUnits(prop);
							if (normalizedProp) {
								normalizedInput[normalizedProp] = inputObject[prop];
							}
						}
					}
					return normalizedInput;
				}
				var priorities = {
					date: 9,
					day: 11,
					weekday: 11,
					isoWeekday: 11,
					dayOfYear: 4,
					hour: 13,
					millisecond: 16,
					minute: 14,
					month: 8,
					quarter: 7,
					second: 15,
					weekYear: 1,
					isoWeekYear: 1,
					week: 5,
					isoWeek: 5,
					year: 1
				};
				function getPrioritizedUnits (unitsObj) {
					var units = [], u;
					for (u in unitsObj) {
						if (hasOwnProp(unitsObj, u)) {
							units.push({
								unit: u,
								priority: priorities[u]
							});
						}
					}
					units.sort(function (a, b) {
						return a.priority - b.priority;
					});
					return units;
				}
				var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, match1to2NoLeadingZero = /^[1-9]\d?/, match1to2HasZero = /^([1-9]\d|\d)/, regexes;
				regexes = {};
				function addRegexToken (token2, regex, strictRegex) {
					regexes[token2] = isFunction(regex) ? regex : function (isStrict, localeData2) {
						return isStrict && strictRegex ? strictRegex : regex;
					};
				}
				function getParseRegexForToken (token2, config2) {
					if (!hasOwnProp(regexes, token2)) {
						return new RegExp(unescapeFormat(token2));
					}
					return regexes[token2](config2._strict, config2._locale);
				}
				function unescapeFormat (s) {
					return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
						return p1 || p2 || p3 || p4;
					}));
				}
				function regexEscape (s) {
					return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
				}
				function absFloor (number) {
					if (number < 0) {
						return Math.ceil(number) || 0;
					} else {
						return Math.floor(number);
					}
				}
				function toInt (argumentForCoercion) {
					var coercedNumber = +argumentForCoercion, value = 0;
					if (coercedNumber !== 0 && isFinite(coercedNumber)) {
						value = absFloor(coercedNumber);
					}
					return value;
				}
				var tokens = {};
				function addParseToken (token2, callback) {
					var i, func = callback, tokenLen;
					if (typeof token2 === "string") {
						token2 = [token2];
					}
					if (isNumber2(callback)) {
						func = function (input, array) {
							array[callback] = toInt(input);
						};
					}
					tokenLen = token2.length;
					for (i = 0; i < tokenLen; i++) {
						tokens[token2[i]] = func;
					}
				}
				function addWeekParseToken (token2, callback) {
					addParseToken(token2, function (input, array, config2, token3) {
						config2._w = config2._w || {};
						callback(input, config2._w, config2, token3);
					});
				}
				function addTimeToArrayFromToken (token2, input, config2) {
					if (input != null && hasOwnProp(tokens, token2)) {
						tokens[token2](input, config2._a, config2, token2);
					}
				}
				function isLeapYear (year) {
					return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
				}
				var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
				addFormatToken("Y", 0, 0, function () {
					var y = this.year();
					return y <= 9999 ? zeroFill(y, 4) : "+" + y;
				});
				addFormatToken(0, ["YY", 2], 0, function () {
					return this.year() % 100;
				});
				addFormatToken(0, ["YYYY", 4], 0, "year");
				addFormatToken(0, ["YYYYY", 5], 0, "year");
				addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
				addRegexToken("Y", matchSigned);
				addRegexToken("YY", match1to2, match2);
				addRegexToken("YYYY", match1to4, match4);
				addRegexToken("YYYYY", match1to6, match6);
				addRegexToken("YYYYYY", match1to6, match6);
				addParseToken(["YYYYY", "YYYYYY"], YEAR);
				addParseToken("YYYY", function (input, array) {
					array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
				});
				addParseToken("YY", function (input, array) {
					array[YEAR] = hooks.parseTwoDigitYear(input);
				});
				addParseToken("Y", function (input, array) {
					array[YEAR] = parseInt(input, 10);
				});
				function daysInYear (year) {
					return isLeapYear(year) ? 366 : 365;
				}
				hooks.parseTwoDigitYear = function (input) {
					return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
				};
				var getSetYear = makeGetSet("FullYear", true);
				function getIsLeapYear () {
					return isLeapYear(this.year());
				}
				function makeGetSet (unit, keepTime) {
					return function (value) {
						if (value != null) {
							set$1(this, unit, value);
							hooks.updateOffset(this, keepTime);
							return this;
						} else {
							return get(this, unit);
						}
					};
				}
				function get (mom, unit) {
					if (!mom.isValid()) {
						return NaN;
					}
					var d = mom._d, isUTC = mom._isUTC;
					switch (unit) {
						case "Milliseconds":
							return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
						case "Seconds":
							return isUTC ? d.getUTCSeconds() : d.getSeconds();
						case "Minutes":
							return isUTC ? d.getUTCMinutes() : d.getMinutes();
						case "Hours":
							return isUTC ? d.getUTCHours() : d.getHours();
						case "Date":
							return isUTC ? d.getUTCDate() : d.getDate();
						case "Day":
							return isUTC ? d.getUTCDay() : d.getDay();
						case "Month":
							return isUTC ? d.getUTCMonth() : d.getMonth();
						case "FullYear":
							return isUTC ? d.getUTCFullYear() : d.getFullYear();
						default:
							return NaN;
					}
				}
				function set$1 (mom, unit, value) {
					var d, isUTC, year, month, date;
					if (!mom.isValid() || isNaN(value)) {
						return;
					}
					d = mom._d;
					isUTC = mom._isUTC;
					switch (unit) {
						case "Milliseconds":
							return void (isUTC ? d.setUTCMilliseconds(value) : d.setMilliseconds(value));
						case "Seconds":
							return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
						case "Minutes":
							return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
						case "Hours":
							return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
						case "Date":
							return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
						case "FullYear":
							break;
						default:
							return;
					}
					year = value;
					month = mom.month();
					date = mom.date();
					date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
					void (isUTC ? d.setUTCFullYear(year, month, date) : d.setFullYear(year, month, date));
				}
				function stringGet (units) {
					units = normalizeUnits(units);
					if (isFunction(this[units])) {
						return this[units]();
					}
					return this;
				}
				function stringSet (units, value) {
					if (typeof units === "object") {
						units = normalizeObjectUnits(units);
						var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
						for (i = 0; i < prioritizedLen; i++) {
							this[prioritized[i].unit](units[prioritized[i].unit]);
						}
					} else {
						units = normalizeUnits(units);
						if (isFunction(this[units])) {
							return this[units](value);
						}
					}
					return this;
				}
				function mod (n, x) {
					return (n % x + x) % x;
				}
				var indexOf;
				if (Array.prototype.indexOf) {
					indexOf = Array.prototype.indexOf;
				} else {
					indexOf = function (o) {
						var i;
						for (i = 0; i < this.length; ++i) {
							if (this[i] === o) {
								return i;
							}
						}
						return -1;
					};
				}
				function daysInMonth (year, month) {
					if (isNaN(year) || isNaN(month)) {
						return NaN;
					}
					var modMonth = mod(month, 12);
					year += (month - modMonth) / 12;
					return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
				}
				addFormatToken("M", ["MM", 2], "Mo", function () {
					return this.month() + 1;
				});
				addFormatToken("MMM", 0, 0, function (format2) {
					return this.localeData().monthsShort(this, format2);
				});
				addFormatToken("MMMM", 0, 0, function (format2) {
					return this.localeData().months(this, format2);
				});
				addRegexToken("M", match1to2, match1to2NoLeadingZero);
				addRegexToken("MM", match1to2, match2);
				addRegexToken("MMM", function (isStrict, locale2) {
					return locale2.monthsShortRegex(isStrict);
				});
				addRegexToken("MMMM", function (isStrict, locale2) {
					return locale2.monthsRegex(isStrict);
				});
				addParseToken(["M", "MM"], function (input, array) {
					array[MONTH] = toInt(input) - 1;
				});
				addParseToken(["MMM", "MMMM"], function (input, array, config2, token2) {
					var month = config2._locale.monthsParse(input, token2, config2._strict);
					if (month != null) {
						array[MONTH] = month;
					} else {
						getParsingFlags(config2).invalidMonth = input;
					}
				});
				var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
				function localeMonths (m, format2) {
					if (!m) {
						return isArray3(this._months) ? this._months : this._months["standalone"];
					}
					return isArray3(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
				}
				function localeMonthsShort (m, format2) {
					if (!m) {
						return isArray3(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
					}
					return isArray3(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
				}
				function handleStrictParse (monthName, format2, strict) {
					var i, ii, mom, llc = monthName.toLocaleLowerCase();
					if (!this._monthsParse) {
						this._monthsParse = [];
						this._longMonthsParse = [];
						this._shortMonthsParse = [];
						for (i = 0; i < 12; ++i) {
							mom = createUTC([2e3, i]);
							this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
							this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
						}
					}
					if (strict) {
						if (format2 === "MMM") {
							ii = indexOf.call(this._shortMonthsParse, llc);
							return ii !== -1 ? ii : null;
						} else {
							ii = indexOf.call(this._longMonthsParse, llc);
							return ii !== -1 ? ii : null;
						}
					} else {
						if (format2 === "MMM") {
							ii = indexOf.call(this._shortMonthsParse, llc);
							if (ii !== -1) {
								return ii;
							}
							ii = indexOf.call(this._longMonthsParse, llc);
							return ii !== -1 ? ii : null;
						} else {
							ii = indexOf.call(this._longMonthsParse, llc);
							if (ii !== -1) {
								return ii;
							}
							ii = indexOf.call(this._shortMonthsParse, llc);
							return ii !== -1 ? ii : null;
						}
					}
				}
				function localeMonthsParse (monthName, format2, strict) {
					var i, mom, regex;
					if (this._monthsParseExact) {
						return handleStrictParse.call(this, monthName, format2, strict);
					}
					if (!this._monthsParse) {
						this._monthsParse = [];
						this._longMonthsParse = [];
						this._shortMonthsParse = [];
					}
					for (i = 0; i < 12; i++) {
						mom = createUTC([2e3, i]);
						if (strict && !this._longMonthsParse[i]) {
							this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
							this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
						}
						if (!strict && !this._monthsParse[i]) {
							regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
							this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
						}
						if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
							return i;
						} else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
							return i;
						} else if (!strict && this._monthsParse[i].test(monthName)) {
							return i;
						}
					}
				}
				function setMonth (mom, value) {
					if (!mom.isValid()) {
						return mom;
					}
					if (typeof value === "string") {
						if (/^\d+$/.test(value)) {
							value = toInt(value);
						} else {
							value = mom.localeData().monthsParse(value);
							if (!isNumber2(value)) {
								return mom;
							}
						}
					}
					var month = value, date = mom.date();
					date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
					void (mom._isUTC ? mom._d.setUTCMonth(month, date) : mom._d.setMonth(month, date));
					return mom;
				}
				function getSetMonth (value) {
					if (value != null) {
						setMonth(this, value);
						hooks.updateOffset(this, true);
						return this;
					} else {
						return get(this, "Month");
					}
				}
				function getDaysInMonth () {
					return daysInMonth(this.year(), this.month());
				}
				function monthsShortRegex (isStrict) {
					if (this._monthsParseExact) {
						if (!hasOwnProp(this, "_monthsRegex")) {
							computeMonthsParse.call(this);
						}
						if (isStrict) {
							return this._monthsShortStrictRegex;
						} else {
							return this._monthsShortRegex;
						}
					} else {
						if (!hasOwnProp(this, "_monthsShortRegex")) {
							this._monthsShortRegex = defaultMonthsShortRegex;
						}
						return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
					}
				}
				function monthsRegex (isStrict) {
					if (this._monthsParseExact) {
						if (!hasOwnProp(this, "_monthsRegex")) {
							computeMonthsParse.call(this);
						}
						if (isStrict) {
							return this._monthsStrictRegex;
						} else {
							return this._monthsRegex;
						}
					} else {
						if (!hasOwnProp(this, "_monthsRegex")) {
							this._monthsRegex = defaultMonthsRegex;
						}
						return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
					}
				}
				function computeMonthsParse () {
					function cmpLenRev (a, b) {
						return b.length - a.length;
					}
					var shortPieces = [], longPieces = [], mixedPieces = [], i, mom, shortP, longP;
					for (i = 0; i < 12; i++) {
						mom = createUTC([2e3, i]);
						shortP = regexEscape(this.monthsShort(mom, ""));
						longP = regexEscape(this.months(mom, ""));
						shortPieces.push(shortP);
						longPieces.push(longP);
						mixedPieces.push(longP);
						mixedPieces.push(shortP);
					}
					shortPieces.sort(cmpLenRev);
					longPieces.sort(cmpLenRev);
					mixedPieces.sort(cmpLenRev);
					this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
					this._monthsShortRegex = this._monthsRegex;
					this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
					this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
				}
				function createDate (y, m, d, h, M, s, ms) {
					var date;
					if (y < 100 && y >= 0) {
						date = new Date(y + 400, m, d, h, M, s, ms);
						if (isFinite(date.getFullYear())) {
							date.setFullYear(y);
						}
					} else {
						date = new Date(y, m, d, h, M, s, ms);
					}
					return date;
				}
				function createUTCDate (y) {
					var date, args;
					if (y < 100 && y >= 0) {
						args = Array.prototype.slice.call(arguments);
						args[0] = y + 400;
						date = new Date(Date.UTC.apply(null, args));
						if (isFinite(date.getUTCFullYear())) {
							date.setUTCFullYear(y);
						}
					} else {
						date = new Date(Date.UTC.apply(null, arguments));
					}
					return date;
				}
				function firstWeekOffset (year, dow, doy) {
					var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
					return -fwdlw + fwd - 1;
				}
				function dayOfYearFromWeeks (year, week, weekday, dow, doy) {
					var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
					if (dayOfYear <= 0) {
						resYear = year - 1;
						resDayOfYear = daysInYear(resYear) + dayOfYear;
					} else if (dayOfYear > daysInYear(year)) {
						resYear = year + 1;
						resDayOfYear = dayOfYear - daysInYear(year);
					} else {
						resYear = year;
						resDayOfYear = dayOfYear;
					}
					return {
						year: resYear,
						dayOfYear: resDayOfYear
					};
				}
				function weekOfYear (mom, dow, doy) {
					var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
					if (week < 1) {
						resYear = mom.year() - 1;
						resWeek = week + weeksInYear(resYear, dow, doy);
					} else if (week > weeksInYear(mom.year(), dow, doy)) {
						resWeek = week - weeksInYear(mom.year(), dow, doy);
						resYear = mom.year() + 1;
					} else {
						resYear = mom.year();
						resWeek = week;
					}
					return {
						week: resWeek,
						year: resYear
					};
				}
				function weeksInYear (year, dow, doy) {
					var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
					return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
				}
				addFormatToken("w", ["ww", 2], "wo", "week");
				addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
				addRegexToken("w", match1to2, match1to2NoLeadingZero);
				addRegexToken("ww", match1to2, match2);
				addRegexToken("W", match1to2, match1to2NoLeadingZero);
				addRegexToken("WW", match1to2, match2);
				addWeekParseToken(["w", "ww", "W", "WW"], function (input, week, config2, token2) {
					week[token2.substr(0, 1)] = toInt(input);
				});
				function localeWeek (mom) {
					return weekOfYear(mom, this._week.dow, this._week.doy).week;
				}
				var defaultLocaleWeek = {
					dow: 0,
					doy: 6
				};
				function localeFirstDayOfWeek () {
					return this._week.dow;
				}
				function localeFirstDayOfYear () {
					return this._week.doy;
				}
				function getSetWeek (input) {
					var week = this.localeData().week(this);
					return input == null ? week : this.add((input - week) * 7, "d");
				}
				function getSetISOWeek (input) {
					var week = weekOfYear(this, 1, 4).week;
					return input == null ? week : this.add((input - week) * 7, "d");
				}
				addFormatToken("d", 0, "do", "day");
				addFormatToken("dd", 0, 0, function (format2) {
					return this.localeData().weekdaysMin(this, format2);
				});
				addFormatToken("ddd", 0, 0, function (format2) {
					return this.localeData().weekdaysShort(this, format2);
				});
				addFormatToken("dddd", 0, 0, function (format2) {
					return this.localeData().weekdays(this, format2);
				});
				addFormatToken("e", 0, 0, "weekday");
				addFormatToken("E", 0, 0, "isoWeekday");
				addRegexToken("d", match1to2);
				addRegexToken("e", match1to2);
				addRegexToken("E", match1to2);
				addRegexToken("dd", function (isStrict, locale2) {
					return locale2.weekdaysMinRegex(isStrict);
				});
				addRegexToken("ddd", function (isStrict, locale2) {
					return locale2.weekdaysShortRegex(isStrict);
				});
				addRegexToken("dddd", function (isStrict, locale2) {
					return locale2.weekdaysRegex(isStrict);
				});
				addWeekParseToken(["dd", "ddd", "dddd"], function (input, week, config2, token2) {
					var weekday = config2._locale.weekdaysParse(input, token2, config2._strict);
					if (weekday != null) {
						week.d = weekday;
					} else {
						getParsingFlags(config2).invalidWeekday = input;
					}
				});
				addWeekParseToken(["d", "e", "E"], function (input, week, config2, token2) {
					week[token2] = toInt(input);
				});
				function parseWeekday (input, locale2) {
					if (typeof input !== "string") {
						return input;
					}
					if (!isNaN(input)) {
						return parseInt(input, 10);
					}
					input = locale2.weekdaysParse(input);
					if (typeof input === "number") {
						return input;
					}
					return null;
				}
				function parseIsoWeekday (input, locale2) {
					if (typeof input === "string") {
						return locale2.weekdaysParse(input) % 7 || 7;
					}
					return isNaN(input) ? null : input;
				}
				function shiftWeekdays (ws, n) {
					return ws.slice(n, 7).concat(ws.slice(0, n));
				}
				var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
				function localeWeekdays (m, format2) {
					var weekdays = isArray3(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
					return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
				}
				function localeWeekdaysShort (m) {
					return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
				}
				function localeWeekdaysMin (m) {
					return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
				}
				function handleStrictParse$1 (weekdayName, format2, strict) {
					var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
					if (!this._weekdaysParse) {
						this._weekdaysParse = [];
						this._shortWeekdaysParse = [];
						this._minWeekdaysParse = [];
						for (i = 0; i < 7; ++i) {
							mom = createUTC([2e3, 1]).day(i);
							this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
							this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
							this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
						}
					}
					if (strict) {
						if (format2 === "dddd") {
							ii = indexOf.call(this._weekdaysParse, llc);
							return ii !== -1 ? ii : null;
						} else if (format2 === "ddd") {
							ii = indexOf.call(this._shortWeekdaysParse, llc);
							return ii !== -1 ? ii : null;
						} else {
							ii = indexOf.call(this._minWeekdaysParse, llc);
							return ii !== -1 ? ii : null;
						}
					} else {
						if (format2 === "dddd") {
							ii = indexOf.call(this._weekdaysParse, llc);
							if (ii !== -1) {
								return ii;
							}
							ii = indexOf.call(this._shortWeekdaysParse, llc);
							if (ii !== -1) {
								return ii;
							}
							ii = indexOf.call(this._minWeekdaysParse, llc);
							return ii !== -1 ? ii : null;
						} else if (format2 === "ddd") {
							ii = indexOf.call(this._shortWeekdaysParse, llc);
							if (ii !== -1) {
								return ii;
							}
							ii = indexOf.call(this._weekdaysParse, llc);
							if (ii !== -1) {
								return ii;
							}
							ii = indexOf.call(this._minWeekdaysParse, llc);
							return ii !== -1 ? ii : null;
						} else {
							ii = indexOf.call(this._minWeekdaysParse, llc);
							if (ii !== -1) {
								return ii;
							}
							ii = indexOf.call(this._weekdaysParse, llc);
							if (ii !== -1) {
								return ii;
							}
							ii = indexOf.call(this._shortWeekdaysParse, llc);
							return ii !== -1 ? ii : null;
						}
					}
				}
				function localeWeekdaysParse (weekdayName, format2, strict) {
					var i, mom, regex;
					if (this._weekdaysParseExact) {
						return handleStrictParse$1.call(this, weekdayName, format2, strict);
					}
					if (!this._weekdaysParse) {
						this._weekdaysParse = [];
						this._minWeekdaysParse = [];
						this._shortWeekdaysParse = [];
						this._fullWeekdaysParse = [];
					}
					for (i = 0; i < 7; i++) {
						mom = createUTC([2e3, 1]).day(i);
						if (strict && !this._fullWeekdaysParse[i]) {
							this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
							this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
							this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
						}
						if (!this._weekdaysParse[i]) {
							regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
							this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
						}
						if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
							return i;
						} else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
							return i;
						} else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
							return i;
						} else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
							return i;
						}
					}
				}
				function getSetDayOfWeek (input) {
					if (!this.isValid()) {
						return input != null ? this : NaN;
					}
					var day = get(this, "Day");
					if (input != null) {
						input = parseWeekday(input, this.localeData());
						return this.add(input - day, "d");
					} else {
						return day;
					}
				}
				function getSetLocaleDayOfWeek (input) {
					if (!this.isValid()) {
						return input != null ? this : NaN;
					}
					var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
					return input == null ? weekday : this.add(input - weekday, "d");
				}
				function getSetISODayOfWeek (input) {
					if (!this.isValid()) {
						return input != null ? this : NaN;
					}
					if (input != null) {
						var weekday = parseIsoWeekday(input, this.localeData());
						return this.day(this.day() % 7 ? weekday : weekday - 7);
					} else {
						return this.day() || 7;
					}
				}
				function weekdaysRegex (isStrict) {
					if (this._weekdaysParseExact) {
						if (!hasOwnProp(this, "_weekdaysRegex")) {
							computeWeekdaysParse.call(this);
						}
						if (isStrict) {
							return this._weekdaysStrictRegex;
						} else {
							return this._weekdaysRegex;
						}
					} else {
						if (!hasOwnProp(this, "_weekdaysRegex")) {
							this._weekdaysRegex = defaultWeekdaysRegex;
						}
						return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
					}
				}
				function weekdaysShortRegex (isStrict) {
					if (this._weekdaysParseExact) {
						if (!hasOwnProp(this, "_weekdaysRegex")) {
							computeWeekdaysParse.call(this);
						}
						if (isStrict) {
							return this._weekdaysShortStrictRegex;
						} else {
							return this._weekdaysShortRegex;
						}
					} else {
						if (!hasOwnProp(this, "_weekdaysShortRegex")) {
							this._weekdaysShortRegex = defaultWeekdaysShortRegex;
						}
						return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
					}
				}
				function weekdaysMinRegex (isStrict) {
					if (this._weekdaysParseExact) {
						if (!hasOwnProp(this, "_weekdaysRegex")) {
							computeWeekdaysParse.call(this);
						}
						if (isStrict) {
							return this._weekdaysMinStrictRegex;
						} else {
							return this._weekdaysMinRegex;
						}
					} else {
						if (!hasOwnProp(this, "_weekdaysMinRegex")) {
							this._weekdaysMinRegex = defaultWeekdaysMinRegex;
						}
						return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
					}
				}
				function computeWeekdaysParse () {
					function cmpLenRev (a, b) {
						return b.length - a.length;
					}
					var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
					for (i = 0; i < 7; i++) {
						mom = createUTC([2e3, 1]).day(i);
						minp = regexEscape(this.weekdaysMin(mom, ""));
						shortp = regexEscape(this.weekdaysShort(mom, ""));
						longp = regexEscape(this.weekdays(mom, ""));
						minPieces.push(minp);
						shortPieces.push(shortp);
						longPieces.push(longp);
						mixedPieces.push(minp);
						mixedPieces.push(shortp);
						mixedPieces.push(longp);
					}
					minPieces.sort(cmpLenRev);
					shortPieces.sort(cmpLenRev);
					longPieces.sort(cmpLenRev);
					mixedPieces.sort(cmpLenRev);
					this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
					this._weekdaysShortRegex = this._weekdaysRegex;
					this._weekdaysMinRegex = this._weekdaysRegex;
					this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
					this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
					this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
				}
				function hFormat () {
					return this.hours() % 12 || 12;
				}
				function kFormat () {
					return this.hours() || 24;
				}
				addFormatToken("H", ["HH", 2], 0, "hour");
				addFormatToken("h", ["hh", 2], 0, hFormat);
				addFormatToken("k", ["kk", 2], 0, kFormat);
				addFormatToken("hmm", 0, 0, function () {
					return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
				});
				addFormatToken("hmmss", 0, 0, function () {
					return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
				});
				addFormatToken("Hmm", 0, 0, function () {
					return "" + this.hours() + zeroFill(this.minutes(), 2);
				});
				addFormatToken("Hmmss", 0, 0, function () {
					return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
				});
				function meridiem (token2, lowercase) {
					addFormatToken(token2, 0, 0, function () {
						return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
					});
				}
				meridiem("a", true);
				meridiem("A", false);
				function matchMeridiem (isStrict, locale2) {
					return locale2._meridiemParse;
				}
				addRegexToken("a", matchMeridiem);
				addRegexToken("A", matchMeridiem);
				addRegexToken("H", match1to2, match1to2HasZero);
				addRegexToken("h", match1to2, match1to2NoLeadingZero);
				addRegexToken("k", match1to2, match1to2NoLeadingZero);
				addRegexToken("HH", match1to2, match2);
				addRegexToken("hh", match1to2, match2);
				addRegexToken("kk", match1to2, match2);
				addRegexToken("hmm", match3to4);
				addRegexToken("hmmss", match5to6);
				addRegexToken("Hmm", match3to4);
				addRegexToken("Hmmss", match5to6);
				addParseToken(["H", "HH"], HOUR);
				addParseToken(["k", "kk"], function (input, array, config2) {
					var kInput = toInt(input);
					array[HOUR] = kInput === 24 ? 0 : kInput;
				});
				addParseToken(["a", "A"], function (input, array, config2) {
					config2._isPm = config2._locale.isPM(input);
					config2._meridiem = input;
				});
				addParseToken(["h", "hh"], function (input, array, config2) {
					array[HOUR] = toInt(input);
					getParsingFlags(config2).bigHour = true;
				});
				addParseToken("hmm", function (input, array, config2) {
					var pos = input.length - 2;
					array[HOUR] = toInt(input.substr(0, pos));
					array[MINUTE] = toInt(input.substr(pos));
					getParsingFlags(config2).bigHour = true;
				});
				addParseToken("hmmss", function (input, array, config2) {
					var pos1 = input.length - 4, pos2 = input.length - 2;
					array[HOUR] = toInt(input.substr(0, pos1));
					array[MINUTE] = toInt(input.substr(pos1, 2));
					array[SECOND] = toInt(input.substr(pos2));
					getParsingFlags(config2).bigHour = true;
				});
				addParseToken("Hmm", function (input, array, config2) {
					var pos = input.length - 2;
					array[HOUR] = toInt(input.substr(0, pos));
					array[MINUTE] = toInt(input.substr(pos));
				});
				addParseToken("Hmmss", function (input, array, config2) {
					var pos1 = input.length - 4, pos2 = input.length - 2;
					array[HOUR] = toInt(input.substr(0, pos1));
					array[MINUTE] = toInt(input.substr(pos1, 2));
					array[SECOND] = toInt(input.substr(pos2));
				});
				function localeIsPM (input) {
					return (input + "").toLowerCase().charAt(0) === "p";
				}
				var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
				function localeMeridiem (hours2, minutes2, isLower) {
					if (hours2 > 11) {
						return isLower ? "pm" : "PM";
					} else {
						return isLower ? "am" : "AM";
					}
				}
				var baseConfig = {
					calendar: defaultCalendar,
					longDateFormat: defaultLongDateFormat,
					invalidDate: defaultInvalidDate,
					ordinal: defaultOrdinal,
					dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
					relativeTime: defaultRelativeTime,
					months: defaultLocaleMonths,
					monthsShort: defaultLocaleMonthsShort,
					week: defaultLocaleWeek,
					weekdays: defaultLocaleWeekdays,
					weekdaysMin: defaultLocaleWeekdaysMin,
					weekdaysShort: defaultLocaleWeekdaysShort,
					meridiemParse: defaultLocaleMeridiemParse
				};
				var locales = {}, localeFamilies = {}, globalLocale;
				function commonPrefix (arr1, arr2) {
					var i, minl = Math.min(arr1.length, arr2.length);
					for (i = 0; i < minl; i += 1) {
						if (arr1[i] !== arr2[i]) {
							return i;
						}
					}
					return minl;
				}
				function normalizeLocale (key) {
					return key ? key.toLowerCase().replace("_", "-") : key;
				}
				function chooseLocale (names) {
					var i = 0, j, next, locale2, split;
					while (i < names.length) {
						split = normalizeLocale(names[i]).split("-");
						j = split.length;
						next = normalizeLocale(names[i + 1]);
						next = next ? next.split("-") : null;
						while (j > 0) {
							locale2 = loadLocale(split.slice(0, j).join("-"));
							if (locale2) {
								return locale2;
							}
							if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
								break;
							}
							j--;
						}
						i++;
					}
					return globalLocale;
				}
				function isLocaleNameSane (name) {
					return !!(name && name.match("^[^/\\\\]*$"));
				}
				function loadLocale (name) {
					var oldLocale = null, aliasedRequire;
					if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
						try {
							oldLocale = globalLocale._abbr;
							aliasedRequire = __require;
							aliasedRequire("./locale/" + name);
							getSetGlobalLocale(oldLocale);
						} catch (e) {
							locales[name] = null;
						}
					}
					return locales[name];
				}
				function getSetGlobalLocale (key, values) {
					var data;
					if (key) {
						if (isUndefined2(values)) {
							data = getLocale(key);
						} else {
							data = defineLocale(key, values);
						}
						if (data) {
							globalLocale = data;
						} else {
							if (typeof console !== "undefined" && console.warn) {
								console.warn("Locale " + key + " not found. Did you forget to load it?");
							}
						}
					}
					return globalLocale._abbr;
				}
				function defineLocale (name, config2) {
					if (config2 !== null) {
						var locale2, parentConfig = baseConfig;
						config2.abbr = name;
						if (locales[name] != null) {
							deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
							parentConfig = locales[name]._config;
						} else if (config2.parentLocale != null) {
							if (locales[config2.parentLocale] != null) {
								parentConfig = locales[config2.parentLocale]._config;
							} else {
								locale2 = loadLocale(config2.parentLocale);
								if (locale2 != null) {
									parentConfig = locale2._config;
								} else {
									if (!localeFamilies[config2.parentLocale]) {
										localeFamilies[config2.parentLocale] = [];
									}
									localeFamilies[config2.parentLocale].push({
										name,
										config: config2
									});
									return null;
								}
							}
						}
						locales[name] = new Locale(mergeConfigs(parentConfig, config2));
						if (localeFamilies[name]) {
							localeFamilies[name].forEach(function (x) {
								defineLocale(x.name, x.config);
							});
						}
						getSetGlobalLocale(name);
						return locales[name];
					} else {
						delete locales[name];
						return null;
					}
				}
				function updateLocale (name, config2) {
					if (config2 != null) {
						var locale2, tmpLocale, parentConfig = baseConfig;
						if (locales[name] != null && locales[name].parentLocale != null) {
							locales[name].set(mergeConfigs(locales[name]._config, config2));
						} else {
							tmpLocale = loadLocale(name);
							if (tmpLocale != null) {
								parentConfig = tmpLocale._config;
							}
							config2 = mergeConfigs(parentConfig, config2);
							if (tmpLocale == null) {
								config2.abbr = name;
							}
							locale2 = new Locale(config2);
							locale2.parentLocale = locales[name];
							locales[name] = locale2;
						}
						getSetGlobalLocale(name);
					} else {
						if (locales[name] != null) {
							if (locales[name].parentLocale != null) {
								locales[name] = locales[name].parentLocale;
								if (name === getSetGlobalLocale()) {
									getSetGlobalLocale(name);
								}
							} else if (locales[name] != null) {
								delete locales[name];
							}
						}
					}
					return locales[name];
				}
				function getLocale (key) {
					var locale2;
					if (key && key._locale && key._locale._abbr) {
						key = key._locale._abbr;
					}
					if (!key) {
						return globalLocale;
					}
					if (!isArray3(key)) {
						locale2 = loadLocale(key);
						if (locale2) {
							return locale2;
						}
						key = [key];
					}
					return chooseLocale(key);
				}
				function listLocales () {
					return keys2(locales);
				}
				function checkOverflow (m) {
					var overflow, a = m._a;
					if (a && getParsingFlags(m).overflow === -2) {
						overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
						if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
							overflow = DATE;
						}
						if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
							overflow = WEEK;
						}
						if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
							overflow = WEEKDAY;
						}
						getParsingFlags(m).overflow = overflow;
					}
					return m;
				}
				var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, false], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, false], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, false], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, false], ["YYYY", /\d{4}/, false]], isoTimes = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
					UT: 0,
					GMT: 0,
					EDT: -4 * 60,
					EST: -5 * 60,
					CDT: -5 * 60,
					CST: -6 * 60,
					MDT: -6 * 60,
					MST: -7 * 60,
					PDT: -7 * 60,
					PST: -8 * 60
				};
				function configFromISO (config2) {
					var i, l, string = config2._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
					if (match) {
						getParsingFlags(config2).iso = true;
						for (i = 0, l = isoDatesLen; i < l; i++) {
							if (isoDates[i][1].exec(match[1])) {
								dateFormat = isoDates[i][0];
								allowTime = isoDates[i][2] !== false;
								break;
							}
						}
						if (dateFormat == null) {
							config2._isValid = false;
							return;
						}
						if (match[3]) {
							for (i = 0, l = isoTimesLen; i < l; i++) {
								if (isoTimes[i][1].exec(match[3])) {
									timeFormat = (match[2] || " ") + isoTimes[i][0];
									break;
								}
							}
							if (timeFormat == null) {
								config2._isValid = false;
								return;
							}
						}
						if (!allowTime && timeFormat != null) {
							config2._isValid = false;
							return;
						}
						if (match[4]) {
							if (tzRegex.exec(match[4])) {
								tzFormat = "Z";
							} else {
								config2._isValid = false;
								return;
							}
						}
						config2._f = dateFormat + (timeFormat || "") + (tzFormat || "");
						configFromStringAndFormat(config2);
					} else {
						config2._isValid = false;
					}
				}
				function extractFromRFC2822Strings (yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
					var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];
					if (secondStr) {
						result.push(parseInt(secondStr, 10));
					}
					return result;
				}
				function untruncateYear (yearStr) {
					var year = parseInt(yearStr, 10);
					if (year <= 49) {
						return 2e3 + year;
					} else if (year <= 999) {
						return 1900 + year;
					}
					return year;
				}
				function preprocessRFC2822 (s) {
					return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
				}
				function checkWeekday (weekdayStr, parsedInput, config2) {
					if (weekdayStr) {
						var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
						if (weekdayProvided !== weekdayActual) {
							getParsingFlags(config2).weekdayMismatch = true;
							config2._isValid = false;
							return false;
						}
					}
					return true;
				}
				function calculateOffset (obsOffset, militaryOffset, numOffset) {
					if (obsOffset) {
						return obsOffsets[obsOffset];
					} else if (militaryOffset) {
						return 0;
					} else {
						var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
						return h * 60 + m;
					}
				}
				function configFromRFC2822 (config2) {
					var match = rfc2822.exec(preprocessRFC2822(config2._i)), parsedArray;
					if (match) {
						parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
						if (!checkWeekday(match[1], parsedArray, config2)) {
							return;
						}
						config2._a = parsedArray;
						config2._tzm = calculateOffset(match[8], match[9], match[10]);
						config2._d = createUTCDate.apply(null, config2._a);
						config2._d.setUTCMinutes(config2._d.getUTCMinutes() - config2._tzm);
						getParsingFlags(config2).rfc2822 = true;
					} else {
						config2._isValid = false;
					}
				}
				function configFromString (config2) {
					var matched = aspNetJsonRegex.exec(config2._i);
					if (matched !== null) {
						config2._d = new Date(+matched[1]);
						return;
					}
					configFromISO(config2);
					if (config2._isValid === false) {
						delete config2._isValid;
					} else {
						return;
					}
					configFromRFC2822(config2);
					if (config2._isValid === false) {
						delete config2._isValid;
					} else {
						return;
					}
					if (config2._strict) {
						config2._isValid = false;
					} else {
						hooks.createFromInputFallback(config2);
					}
				}
				hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (config2) {
					config2._d = new Date(config2._i + (config2._useUTC ? " UTC" : ""));
				});
				function defaults (a, b, c) {
					if (a != null) {
						return a;
					}
					if (b != null) {
						return b;
					}
					return c;
				}
				function currentDateArray (config2) {
					var nowValue = new Date(hooks.now());
					if (config2._useUTC) {
						return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
					}
					return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
				}
				function configFromArray (config2) {
					var i, date, input = [], currentDate, expectedWeekday, yearToUse;
					if (config2._d) {
						return;
					}
					currentDate = currentDateArray(config2);
					if (config2._w && config2._a[DATE] == null && config2._a[MONTH] == null) {
						dayOfYearFromWeekInfo(config2);
					}
					if (config2._dayOfYear != null) {
						yearToUse = defaults(config2._a[YEAR], currentDate[YEAR]);
						if (config2._dayOfYear > daysInYear(yearToUse) || config2._dayOfYear === 0) {
							getParsingFlags(config2)._overflowDayOfYear = true;
						}
						date = createUTCDate(yearToUse, 0, config2._dayOfYear);
						config2._a[MONTH] = date.getUTCMonth();
						config2._a[DATE] = date.getUTCDate();
					}
					for (i = 0; i < 3 && config2._a[i] == null; ++i) {
						config2._a[i] = input[i] = currentDate[i];
					}
					for (; i < 7; i++) {
						config2._a[i] = input[i] = config2._a[i] == null ? i === 2 ? 1 : 0 : config2._a[i];
					}
					if (config2._a[HOUR] === 24 && config2._a[MINUTE] === 0 && config2._a[SECOND] === 0 && config2._a[MILLISECOND] === 0) {
						config2._nextDay = true;
						config2._a[HOUR] = 0;
					}
					config2._d = (config2._useUTC ? createUTCDate : createDate).apply(null, input);
					expectedWeekday = config2._useUTC ? config2._d.getUTCDay() : config2._d.getDay();
					if (config2._tzm != null) {
						config2._d.setUTCMinutes(config2._d.getUTCMinutes() - config2._tzm);
					}
					if (config2._nextDay) {
						config2._a[HOUR] = 24;
					}
					if (config2._w && typeof config2._w.d !== "undefined" && config2._w.d !== expectedWeekday) {
						getParsingFlags(config2).weekdayMismatch = true;
					}
				}
				function dayOfYearFromWeekInfo (config2) {
					var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
					w = config2._w;
					if (w.GG != null || w.W != null || w.E != null) {
						dow = 1;
						doy = 4;
						weekYear = defaults(w.GG, config2._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
						week = defaults(w.W, 1);
						weekday = defaults(w.E, 1);
						if (weekday < 1 || weekday > 7) {
							weekdayOverflow = true;
						}
					} else {
						dow = config2._locale._week.dow;
						doy = config2._locale._week.doy;
						curWeek = weekOfYear(createLocal(), dow, doy);
						weekYear = defaults(w.gg, config2._a[YEAR], curWeek.year);
						week = defaults(w.w, curWeek.week);
						if (w.d != null) {
							weekday = w.d;
							if (weekday < 0 || weekday > 6) {
								weekdayOverflow = true;
							}
						} else if (w.e != null) {
							weekday = w.e + dow;
							if (w.e < 0 || w.e > 6) {
								weekdayOverflow = true;
							}
						} else {
							weekday = dow;
						}
					}
					if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
						getParsingFlags(config2)._overflowWeeks = true;
					} else if (weekdayOverflow != null) {
						getParsingFlags(config2)._overflowWeekday = true;
					} else {
						temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
						config2._a[YEAR] = temp.year;
						config2._dayOfYear = temp.dayOfYear;
					}
				}
				hooks.ISO_8601 = function () {
				};
				hooks.RFC_2822 = function () {
				};
				function configFromStringAndFormat (config2) {
					if (config2._f === hooks.ISO_8601) {
						configFromISO(config2);
						return;
					}
					if (config2._f === hooks.RFC_2822) {
						configFromRFC2822(config2);
						return;
					}
					config2._a = [];
					getParsingFlags(config2).empty = true;
					var string = "" + config2._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
					tokens2 = expandFormat(config2._f, config2._locale).match(formattingTokens) || [];
					tokenLen = tokens2.length;
					for (i = 0; i < tokenLen; i++) {
						token2 = tokens2[i];
						parsedInput = (string.match(getParseRegexForToken(token2, config2)) || [])[0];
						if (parsedInput) {
							skipped = string.substr(0, string.indexOf(parsedInput));
							if (skipped.length > 0) {
								getParsingFlags(config2).unusedInput.push(skipped);
							}
							string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
							totalParsedInputLength += parsedInput.length;
						}
						if (formatTokenFunctions[token2]) {
							if (parsedInput) {
								getParsingFlags(config2).empty = false;
							} else {
								getParsingFlags(config2).unusedTokens.push(token2);
							}
							addTimeToArrayFromToken(token2, parsedInput, config2);
						} else if (config2._strict && !parsedInput) {
							getParsingFlags(config2).unusedTokens.push(token2);
						}
					}
					getParsingFlags(config2).charsLeftOver = stringLength - totalParsedInputLength;
					if (string.length > 0) {
						getParsingFlags(config2).unusedInput.push(string);
					}
					if (config2._a[HOUR] <= 12 && getParsingFlags(config2).bigHour === true && config2._a[HOUR] > 0) {
						getParsingFlags(config2).bigHour = void 0;
					}
					getParsingFlags(config2).parsedDateParts = config2._a.slice(0);
					getParsingFlags(config2).meridiem = config2._meridiem;
					config2._a[HOUR] = meridiemFixWrap(config2._locale, config2._a[HOUR], config2._meridiem);
					era = getParsingFlags(config2).era;
					if (era !== null) {
						config2._a[YEAR] = config2._locale.erasConvertYear(era, config2._a[YEAR]);
					}
					configFromArray(config2);
					checkOverflow(config2);
				}
				function meridiemFixWrap (locale2, hour, meridiem2) {
					var isPm;
					if (meridiem2 == null) {
						return hour;
					}
					if (locale2.meridiemHour != null) {
						return locale2.meridiemHour(hour, meridiem2);
					} else if (locale2.isPM != null) {
						isPm = locale2.isPM(meridiem2);
						if (isPm && hour < 12) {
							hour += 12;
						}
						if (!isPm && hour === 12) {
							hour = 0;
						}
						return hour;
					} else {
						return hour;
					}
				}
				function configFromStringAndArray (config2) {
					var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config2._f.length;
					if (configfLen === 0) {
						getParsingFlags(config2).invalidFormat = true;
						config2._d = new Date(NaN);
						return;
					}
					for (i = 0; i < configfLen; i++) {
						currentScore = 0;
						validFormatFound = false;
						tempConfig = copyConfig({}, config2);
						if (config2._useUTC != null) {
							tempConfig._useUTC = config2._useUTC;
						}
						tempConfig._f = config2._f[i];
						configFromStringAndFormat(tempConfig);
						if (isValid(tempConfig)) {
							validFormatFound = true;
						}
						currentScore += getParsingFlags(tempConfig).charsLeftOver;
						currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
						getParsingFlags(tempConfig).score = currentScore;
						if (!bestFormatIsValid) {
							if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
								scoreToBeat = currentScore;
								bestMoment = tempConfig;
								if (validFormatFound) {
									bestFormatIsValid = true;
								}
							}
						} else {
							if (currentScore < scoreToBeat) {
								scoreToBeat = currentScore;
								bestMoment = tempConfig;
							}
						}
					}
					extend2(config2, bestMoment || tempConfig);
				}
				function configFromObject (config2) {
					if (config2._d) {
						return;
					}
					var i = normalizeObjectUnits(config2._i), dayOrDate = i.day === void 0 ? i.date : i.day;
					config2._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function (obj) {
						return obj && parseInt(obj, 10);
					});
					configFromArray(config2);
				}
				function createFromConfig (config2) {
					var res = new Moment2(checkOverflow(prepareConfig(config2)));
					if (res._nextDay) {
						res.add(1, "d");
						res._nextDay = void 0;
					}
					return res;
				}
				function prepareConfig (config2) {
					var input = config2._i, format2 = config2._f;
					config2._locale = config2._locale || getLocale(config2._l);
					if (input === null || format2 === void 0 && input === "") {
						return createInvalid({
							nullInput: true
						});
					}
					if (typeof input === "string") {
						config2._i = input = config2._locale.preparse(input);
					}
					if (isMoment(input)) {
						return new Moment2(checkOverflow(input));
					} else if (isDate(input)) {
						config2._d = input;
					} else if (isArray3(format2)) {
						configFromStringAndArray(config2);
					} else if (format2) {
						configFromStringAndFormat(config2);
					} else {
						configFromInput(config2);
					}
					if (!isValid(config2)) {
						config2._d = null;
					}
					return config2;
				}
				function configFromInput (config2) {
					var input = config2._i;
					if (isUndefined2(input)) {
						config2._d = new Date(hooks.now());
					} else if (isDate(input)) {
						config2._d = new Date(input.valueOf());
					} else if (typeof input === "string") {
						configFromString(config2);
					} else if (isArray3(input)) {
						config2._a = map(input.slice(0), function (obj) {
							return parseInt(obj, 10);
						});
						configFromArray(config2);
					} else if (isObject2(input)) {
						configFromObject(config2);
					} else if (isNumber2(input)) {
						config2._d = new Date(input);
					} else {
						hooks.createFromInputFallback(config2);
					}
				}
				function createLocalOrUTC (input, format2, locale2, strict, isUTC) {
					var c = {};
					if (format2 === true || format2 === false) {
						strict = format2;
						format2 = void 0;
					}
					if (locale2 === true || locale2 === false) {
						strict = locale2;
						locale2 = void 0;
					}
					if (isObject2(input) && isObjectEmpty(input) || isArray3(input) && input.length === 0) {
						input = void 0;
					}
					c._isAMomentObject = true;
					c._useUTC = c._isUTC = isUTC;
					c._l = locale2;
					c._i = input;
					c._f = format2;
					c._strict = strict;
					return createFromConfig(c);
				}
				function createLocal (input, format2, locale2, strict) {
					return createLocalOrUTC(input, format2, locale2, strict, false);
				}
				var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
					var other = createLocal.apply(null, arguments);
					if (this.isValid() && other.isValid()) {
						return other < this ? this : other;
					} else {
						return createInvalid();
					}
				}), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
					var other = createLocal.apply(null, arguments);
					if (this.isValid() && other.isValid()) {
						return other > this ? this : other;
					} else {
						return createInvalid();
					}
				});
				function pickBy (fn, moments) {
					var res, i;
					if (moments.length === 1 && isArray3(moments[0])) {
						moments = moments[0];
					}
					if (!moments.length) {
						return createLocal();
					}
					res = moments[0];
					for (i = 1; i < moments.length; ++i) {
						if (!moments[i].isValid() || moments[i][fn](res)) {
							res = moments[i];
						}
					}
					return res;
				}
				function min () {
					var args = [].slice.call(arguments, 0);
					return pickBy("isBefore", args);
				}
				function max () {
					var args = [].slice.call(arguments, 0);
					return pickBy("isAfter", args);
				}
				var now = function () {
					return Date.now ? Date.now() : + new Date();
				};
				var ordering = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
				function isDurationValid (m) {
					var key, unitHasDecimal = false, i, orderLen = ordering.length;
					for (key in m) {
						if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
							return false;
						}
					}
					for (i = 0; i < orderLen; ++i) {
						if (m[ordering[i]]) {
							if (unitHasDecimal) {
								return false;
							}
							if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
								unitHasDecimal = true;
							}
						}
					}
					return true;
				}
				function isValid$1 () {
					return this._isValid;
				}
				function createInvalid$1 () {
					return createDuration(NaN);
				}
				function Duration (duration) {
					var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
					this._isValid = isDurationValid(normalizedInput);
					this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
					this._days = +days2 + weeks2 * 7;
					this._months = +months2 + quarters * 3 + years2 * 12;
					this._data = {};
					this._locale = getLocale();
					this._bubble();
				}
				function isDuration (obj) {
					return obj instanceof Duration;
				}
				function absRound (number) {
					if (number < 0) {
						return Math.round(-1 * number) * -1;
					} else {
						return Math.round(number);
					}
				}
				function compareArrays2 (array1, array2, dontConvert) {
					var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
					for (i = 0; i < len; i++) {
						if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
							diffs++;
						}
					}
					return diffs + lengthDiff;
				}
				function offset (token2, separator) {
					addFormatToken(token2, 0, 0, function () {
						var offset2 = this.utcOffset(), sign2 = "+";
						if (offset2 < 0) {
							offset2 = -offset2;
							sign2 = "-";
						}
						return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
					});
				}
				offset("Z", ":");
				offset("ZZ", "");
				addRegexToken("Z", matchShortOffset);
				addRegexToken("ZZ", matchShortOffset);
				addParseToken(["Z", "ZZ"], function (input, array, config2) {
					config2._useUTC = true;
					config2._tzm = offsetFromString(matchShortOffset, input);
				});
				var chunkOffset = /([\+\-]|\d\d)/gi;
				function offsetFromString (matcher, string) {
					var matches = (string || "").match(matcher), chunk, parts, minutes2;
					if (matches === null) {
						return null;
					}
					chunk = matches[matches.length - 1] || [];
					parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
					minutes2 = +(parts[1] * 60) + toInt(parts[2]);
					return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
				}
				function cloneWithOffset (input, model) {
					var res, diff2;
					if (model._isUTC) {
						res = model.clone();
						diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
						res._d.setTime(res._d.valueOf() + diff2);
						hooks.updateOffset(res, false);
						return res;
					} else {
						return createLocal(input).local();
					}
				}
				function getDateOffset (m) {
					return -Math.round(m._d.getTimezoneOffset());
				}
				hooks.updateOffset = function () {
				};
				function getSetOffset (input, keepLocalTime, keepMinutes) {
					var offset2 = this._offset || 0, localAdjust;
					if (!this.isValid()) {
						return input != null ? this : NaN;
					}
					if (input != null) {
						if (typeof input === "string") {
							input = offsetFromString(matchShortOffset, input);
							if (input === null) {
								return this;
							}
						} else if (Math.abs(input) < 16 && !keepMinutes) {
							input = input * 60;
						}
						if (!this._isUTC && keepLocalTime) {
							localAdjust = getDateOffset(this);
						}
						this._offset = input;
						this._isUTC = true;
						if (localAdjust != null) {
							this.add(localAdjust, "m");
						}
						if (offset2 !== input) {
							if (!keepLocalTime || this._changeInProgress) {
								addSubtract(this, createDuration(input - offset2, "m"), 1, false);
							} else if (!this._changeInProgress) {
								this._changeInProgress = true;
								hooks.updateOffset(this, true);
								this._changeInProgress = null;
							}
						}
						return this;
					} else {
						return this._isUTC ? offset2 : getDateOffset(this);
					}
				}
				function getSetZone (input, keepLocalTime) {
					if (input != null) {
						if (typeof input !== "string") {
							input = -input;
						}
						this.utcOffset(input, keepLocalTime);
						return this;
					} else {
						return -this.utcOffset();
					}
				}
				function setOffsetToUTC (keepLocalTime) {
					return this.utcOffset(0, keepLocalTime);
				}
				function setOffsetToLocal (keepLocalTime) {
					if (this._isUTC) {
						this.utcOffset(0, keepLocalTime);
						this._isUTC = false;
						if (keepLocalTime) {
							this.subtract(getDateOffset(this), "m");
						}
					}
					return this;
				}
				function setOffsetToParsedOffset () {
					if (this._tzm != null) {
						this.utcOffset(this._tzm, false, true);
					} else if (typeof this._i === "string") {
						var tZone = offsetFromString(matchOffset, this._i);
						if (tZone != null) {
							this.utcOffset(tZone);
						} else {
							this.utcOffset(0, true);
						}
					}
					return this;
				}
				function hasAlignedHourOffset (input) {
					if (!this.isValid()) {
						return false;
					}
					input = input ? createLocal(input).utcOffset() : 0;
					return (this.utcOffset() - input) % 60 === 0;
				}
				function isDaylightSavingTime () {
					return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
				}
				function isDaylightSavingTimeShifted () {
					if (!isUndefined2(this._isDSTShifted)) {
						return this._isDSTShifted;
					}
					var c = {}, other;
					copyConfig(c, this);
					c = prepareConfig(c);
					if (c._a) {
						other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
						this._isDSTShifted = this.isValid() && compareArrays2(c._a, other.toArray()) > 0;
					} else {
						this._isDSTShifted = false;
					}
					return this._isDSTShifted;
				}
				function isLocal () {
					return this.isValid() ? !this._isUTC : false;
				}
				function isUtcOffset () {
					return this.isValid() ? this._isUTC : false;
				}
				function isUtc () {
					return this.isValid() ? this._isUTC && this._offset === 0 : false;
				}
				var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
				function createDuration (input, key) {
					var duration = input, match = null, sign2, ret, diffRes;
					if (isDuration(input)) {
						duration = {
							ms: input._milliseconds,
							d: input._days,
							M: input._months
						};
					} else if (isNumber2(input) || !isNaN(+input)) {
						duration = {};
						if (key) {
							duration[key] = +input;
						} else {
							duration.milliseconds = +input;
						}
					} else if (match = aspNetRegex.exec(input)) {
						sign2 = match[1] === "-" ? -1 : 1;
						duration = {
							y: 0,
							d: toInt(match[DATE]) * sign2,
							h: toInt(match[HOUR]) * sign2,
							m: toInt(match[MINUTE]) * sign2,
							s: toInt(match[SECOND]) * sign2,
							ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
						};
					} else if (match = isoRegex.exec(input)) {
						sign2 = match[1] === "-" ? -1 : 1;
						duration = {
							y: parseIso(match[2], sign2),
							M: parseIso(match[3], sign2),
							w: parseIso(match[4], sign2),
							d: parseIso(match[5], sign2),
							h: parseIso(match[6], sign2),
							m: parseIso(match[7], sign2),
							s: parseIso(match[8], sign2)
						};
					} else if (duration == null) {
						duration = {};
					} else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
						diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
						duration = {};
						duration.ms = diffRes.milliseconds;
						duration.M = diffRes.months;
					}
					ret = new Duration(duration);
					if (isDuration(input) && hasOwnProp(input, "_locale")) {
						ret._locale = input._locale;
					}
					if (isDuration(input) && hasOwnProp(input, "_isValid")) {
						ret._isValid = input._isValid;
					}
					return ret;
				}
				createDuration.fn = Duration.prototype;
				createDuration.invalid = createInvalid$1;
				function parseIso (inp, sign2) {
					var res = inp && parseFloat(inp.replace(",", "."));
					return (isNaN(res) ? 0 : res) * sign2;
				}
				function positiveMomentsDifference (base, other) {
					var res = {};
					res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
					if (base.clone().add(res.months, "M").isAfter(other)) {
						--res.months;
					}
					res.milliseconds = +other - +base.clone().add(res.months, "M");
					return res;
				}
				function momentsDifference (base, other) {
					var res;
					if (!(base.isValid() && other.isValid())) {
						return {
							milliseconds: 0,
							months: 0
						};
					}
					other = cloneWithOffset(other, base);
					if (base.isBefore(other)) {
						res = positiveMomentsDifference(base, other);
					} else {
						res = positiveMomentsDifference(other, base);
						res.milliseconds = -res.milliseconds;
						res.months = -res.months;
					}
					return res;
				}
				function createAdder (direction, name) {
					return function (val, period) {
						var dur, tmp;
						if (period !== null && !isNaN(+period)) {
							deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
							tmp = val;
							val = period;
							period = tmp;
						}
						dur = createDuration(val, period);
						addSubtract(this, dur, direction);
						return this;
					};
				}
				function addSubtract (mom, duration, isAdding, updateOffset) {
					var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
					if (!mom.isValid()) {
						return;
					}
					updateOffset = updateOffset == null ? true : updateOffset;
					if (months2) {
						setMonth(mom, get(mom, "Month") + months2 * isAdding);
					}
					if (days2) {
						set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
					}
					if (milliseconds2) {
						mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
					}
					if (updateOffset) {
						hooks.updateOffset(mom, days2 || months2);
					}
				}
				var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
				function isString2 (input) {
					return typeof input === "string" || input instanceof String;
				}
				function isMomentInput (input) {
					return isMoment(input) || isDate(input) || isString2(input) || isNumber2(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
				}
				function isMomentInputObject (input) {
					var objectTest = isObject2(input) && !isObjectEmpty(input), propertyTest = false, properties = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], i, property, propertyLen = properties.length;
					for (i = 0; i < propertyLen; i += 1) {
						property = properties[i];
						propertyTest = propertyTest || hasOwnProp(input, property);
					}
					return objectTest && propertyTest;
				}
				function isNumberOrStringArray (input) {
					var arrayTest = isArray3(input), dataTypeTest = false;
					if (arrayTest) {
						dataTypeTest = input.filter(function (item) {
							return !isNumber2(item) && isString2(input);
						}).length === 0;
					}
					return arrayTest && dataTypeTest;
				}
				function isCalendarSpec (input) {
					var objectTest = isObject2(input) && !isObjectEmpty(input), propertyTest = false, properties = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], i, property;
					for (i = 0; i < properties.length; i += 1) {
						property = properties[i];
						propertyTest = propertyTest || hasOwnProp(input, property);
					}
					return objectTest && propertyTest;
				}
				function getCalendarFormat (myMoment, now2) {
					var diff2 = myMoment.diff(now2, "days", true);
					return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
				}
				function calendar$1 (time, formats) {
					if (arguments.length === 1) {
						if (!arguments[0]) {
							time = void 0;
							formats = void 0;
						} else if (isMomentInput(arguments[0])) {
							time = arguments[0];
							formats = void 0;
						} else if (isCalendarSpec(arguments[0])) {
							formats = arguments[0];
							time = void 0;
						}
					}
					var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
					return this.format(output || this.localeData().calendar(format2, this, createLocal(now2)));
				}
				function clone () {
					return new Moment2(this);
				}
				function isAfter (input, units) {
					var localInput = isMoment(input) ? input : createLocal(input);
					if (!(this.isValid() && localInput.isValid())) {
						return false;
					}
					units = normalizeUnits(units) || "millisecond";
					if (units === "millisecond") {
						return this.valueOf() > localInput.valueOf();
					} else {
						return localInput.valueOf() < this.clone().startOf(units).valueOf();
					}
				}
				function isBefore (input, units) {
					var localInput = isMoment(input) ? input : createLocal(input);
					if (!(this.isValid() && localInput.isValid())) {
						return false;
					}
					units = normalizeUnits(units) || "millisecond";
					if (units === "millisecond") {
						return this.valueOf() < localInput.valueOf();
					} else {
						return this.clone().endOf(units).valueOf() < localInput.valueOf();
					}
				}
				function isBetween (from2, to2, units, inclusivity) {
					var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
					if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
						return false;
					}
					inclusivity = inclusivity || "()";
					return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
				}
				function isSame (input, units) {
					var localInput = isMoment(input) ? input : createLocal(input), inputMs;
					if (!(this.isValid() && localInput.isValid())) {
						return false;
					}
					units = normalizeUnits(units) || "millisecond";
					if (units === "millisecond") {
						return this.valueOf() === localInput.valueOf();
					} else {
						inputMs = localInput.valueOf();
						return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
					}
				}
				function isSameOrAfter (input, units) {
					return this.isSame(input, units) || this.isAfter(input, units);
				}
				function isSameOrBefore (input, units) {
					return this.isSame(input, units) || this.isBefore(input, units);
				}
				function diff (input, units, asFloat) {
					var that, zoneDelta, output;
					if (!this.isValid()) {
						return NaN;
					}
					that = cloneWithOffset(input, this);
					if (!that.isValid()) {
						return NaN;
					}
					zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
					units = normalizeUnits(units);
					switch (units) {
						case "year":
							output = monthDiff(this, that) / 12;
							break;
						case "month":
							output = monthDiff(this, that);
							break;
						case "quarter":
							output = monthDiff(this, that) / 3;
							break;
						case "second":
							output = (this - that) / 1e3;
							break;
						case "minute":
							output = (this - that) / 6e4;
							break;
						case "hour":
							output = (this - that) / 36e5;
							break;
						case "day":
							output = (this - that - zoneDelta) / 864e5;
							break;
						case "week":
							output = (this - that - zoneDelta) / 6048e5;
							break;
						default:
							output = this - that;
					}
					return asFloat ? output : absFloor(output);
				}
				function monthDiff (a, b) {
					if (a.date() < b.date()) {
						return -monthDiff(b, a);
					}
					var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
					if (b - anchor < 0) {
						anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
						adjust = (b - anchor) / (anchor - anchor2);
					} else {
						anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
						adjust = (b - anchor) / (anchor2 - anchor);
					}
					return -(wholeMonthDiff + adjust) || 0;
				}
				hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
				hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
				function toString2 () {
					return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
				}
				function toISOString (keepOffset) {
					if (!this.isValid()) {
						return null;
					}
					var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
					if (m.year() < 0 || m.year() > 9999) {
						return formatMoment(m, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
					}
					if (isFunction(Date.prototype.toISOString)) {
						if (utc) {
							return this.toDate().toISOString();
						} else {
							return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
						}
					}
					return formatMoment(m, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
				}
				function inspect () {
					if (!this.isValid()) {
						return "moment.invalid(/* " + this._i + " */)";
					}
					var func = "moment", zone = "", prefix, year, datetime, suffix;
					if (!this.isLocal()) {
						func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
						zone = "Z";
					}
					prefix = "[" + func + '("]';
					year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
					datetime = "-MM-DD[T]HH:mm:ss.SSS";
					suffix = zone + '[")]';
					return this.format(prefix + year + datetime + suffix);
				}
				function format (inputString) {
					if (!inputString) {
						inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
					}
					var output = formatMoment(this, inputString);
					return this.localeData().postformat(output);
				}
				function from (time, withoutSuffix) {
					if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
						return createDuration({
							to: this,
							from: time
						}).locale(this.locale()).humanize(!withoutSuffix);
					} else {
						return this.localeData().invalidDate();
					}
				}
				function fromNow (withoutSuffix) {
					return this.from(createLocal(), withoutSuffix);
				}
				function to (time, withoutSuffix) {
					if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
						return createDuration({
							from: this,
							to: time
						}).locale(this.locale()).humanize(!withoutSuffix);
					} else {
						return this.localeData().invalidDate();
					}
				}
				function toNow (withoutSuffix) {
					return this.to(createLocal(), withoutSuffix);
				}
				function locale (key) {
					var newLocaleData;
					if (key === void 0) {
						return this._locale._abbr;
					} else {
						newLocaleData = getLocale(key);
						if (newLocaleData != null) {
							this._locale = newLocaleData;
						}
						return this;
					}
				}
				var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (key) {
					if (key === void 0) {
						return this.localeData();
					} else {
						return this.locale(key);
					}
				});
				function localeData () {
					return this._locale;
				}
				var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
				function mod$1 (dividend, divisor) {
					return (dividend % divisor + divisor) % divisor;
				}
				function localStartOfDate (y, m, d) {
					if (y < 100 && y >= 0) {
						return new Date(y + 400, m, d) - MS_PER_400_YEARS;
					} else {
						return new Date(y, m, d).valueOf();
					}
				}
				function utcStartOfDate (y, m, d) {
					if (y < 100 && y >= 0) {
						return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
					} else {
						return Date.UTC(y, m, d);
					}
				}
				function startOf (units) {
					var time, startOfDate;
					units = normalizeUnits(units);
					if (units === void 0 || units === "millisecond" || !this.isValid()) {
						return this;
					}
					startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
					switch (units) {
						case "year":
							time = startOfDate(this.year(), 0, 1);
							break;
						case "quarter":
							time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
							break;
						case "month":
							time = startOfDate(this.year(), this.month(), 1);
							break;
						case "week":
							time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
							break;
						case "isoWeek":
							time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
							break;
						case "day":
						case "date":
							time = startOfDate(this.year(), this.month(), this.date());
							break;
						case "hour":
							time = this._d.valueOf();
							time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
							break;
						case "minute":
							time = this._d.valueOf();
							time -= mod$1(time, MS_PER_MINUTE);
							break;
						case "second":
							time = this._d.valueOf();
							time -= mod$1(time, MS_PER_SECOND);
							break;
					}
					this._d.setTime(time);
					hooks.updateOffset(this, true);
					return this;
				}
				function endOf (units) {
					var time, startOfDate;
					units = normalizeUnits(units);
					if (units === void 0 || units === "millisecond" || !this.isValid()) {
						return this;
					}
					startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
					switch (units) {
						case "year":
							time = startOfDate(this.year() + 1, 0, 1) - 1;
							break;
						case "quarter":
							time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
							break;
						case "month":
							time = startOfDate(this.year(), this.month() + 1, 1) - 1;
							break;
						case "week":
							time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
							break;
						case "isoWeek":
							time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
							break;
						case "day":
						case "date":
							time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
							break;
						case "hour":
							time = this._d.valueOf();
							time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
							break;
						case "minute":
							time = this._d.valueOf();
							time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
							break;
						case "second":
							time = this._d.valueOf();
							time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
							break;
					}
					this._d.setTime(time);
					hooks.updateOffset(this, true);
					return this;
				}
				function valueOf () {
					return this._d.valueOf() - (this._offset || 0) * 6e4;
				}
				function unix () {
					return Math.floor(this.valueOf() / 1e3);
				}
				function toDate () {
					return new Date(this.valueOf());
				}
				function toArray () {
					var m = this;
					return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
				}
				function toObject () {
					var m = this;
					return {
						years: m.year(),
						months: m.month(),
						date: m.date(),
						hours: m.hours(),
						minutes: m.minutes(),
						seconds: m.seconds(),
						milliseconds: m.milliseconds()
					};
				}
				function toJSON () {
					return this.isValid() ? this.toISOString() : null;
				}
				function isValid$2 () {
					return isValid(this);
				}
				function parsingFlags () {
					return extend2({}, getParsingFlags(this));
				}
				function invalidAt () {
					return getParsingFlags(this).overflow;
				}
				function creationData () {
					return {
						input: this._i,
						format: this._f,
						locale: this._locale,
						isUTC: this._isUTC,
						strict: this._strict
					};
				}
				addFormatToken("N", 0, 0, "eraAbbr");
				addFormatToken("NN", 0, 0, "eraAbbr");
				addFormatToken("NNN", 0, 0, "eraAbbr");
				addFormatToken("NNNN", 0, 0, "eraName");
				addFormatToken("NNNNN", 0, 0, "eraNarrow");
				addFormatToken("y", ["y", 1], "yo", "eraYear");
				addFormatToken("y", ["yy", 2], 0, "eraYear");
				addFormatToken("y", ["yyy", 3], 0, "eraYear");
				addFormatToken("y", ["yyyy", 4], 0, "eraYear");
				addRegexToken("N", matchEraAbbr);
				addRegexToken("NN", matchEraAbbr);
				addRegexToken("NNN", matchEraAbbr);
				addRegexToken("NNNN", matchEraName);
				addRegexToken("NNNNN", matchEraNarrow);
				addParseToken(["N", "NN", "NNN", "NNNN", "NNNNN"], function (input, array, config2, token2) {
					var era = config2._locale.erasParse(input, token2, config2._strict);
					if (era) {
						getParsingFlags(config2).era = era;
					} else {
						getParsingFlags(config2).invalidEra = input;
					}
				});
				addRegexToken("y", matchUnsigned);
				addRegexToken("yy", matchUnsigned);
				addRegexToken("yyy", matchUnsigned);
				addRegexToken("yyyy", matchUnsigned);
				addRegexToken("yo", matchEraYearOrdinal);
				addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
				addParseToken(["yo"], function (input, array, config2, token2) {
					var match;
					if (config2._locale._eraYearOrdinalRegex) {
						match = input.match(config2._locale._eraYearOrdinalRegex);
					}
					if (config2._locale.eraYearOrdinalParse) {
						array[YEAR] = config2._locale.eraYearOrdinalParse(input, match);
					} else {
						array[YEAR] = parseInt(input, 10);
					}
				});
				function localeEras (m, format2) {
					var i, l, date, eras = this._eras || getLocale("en")._eras;
					for (i = 0, l = eras.length; i < l; ++i) {
						switch (typeof eras[i].since) {
							case "string":
								date = hooks(eras[i].since).startOf("day");
								eras[i].since = date.valueOf();
								break;
						}
						switch (typeof eras[i].until) {
							case "undefined":
								eras[i].until = Infinity;
								break;
							case "string":
								date = hooks(eras[i].until).startOf("day").valueOf();
								eras[i].until = date.valueOf();
								break;
						}
					}
					return eras;
				}
				function localeErasParse (eraName, format2, strict) {
					var i, l, eras = this.eras(), name, abbr, narrow;
					eraName = eraName.toUpperCase();
					for (i = 0, l = eras.length; i < l; ++i) {
						name = eras[i].name.toUpperCase();
						abbr = eras[i].abbr.toUpperCase();
						narrow = eras[i].narrow.toUpperCase();
						if (strict) {
							switch (format2) {
								case "N":
								case "NN":
								case "NNN":
									if (abbr === eraName) {
										return eras[i];
									}
									break;
								case "NNNN":
									if (name === eraName) {
										return eras[i];
									}
									break;
								case "NNNNN":
									if (narrow === eraName) {
										return eras[i];
									}
									break;
							}
						} else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
							return eras[i];
						}
					}
				}
				function localeErasConvertYear (era, year) {
					var dir = era.since <= era.until ? 1 : -1;
					if (year === void 0) {
						return hooks(era.since).year();
					} else {
						return hooks(era.since).year() + (year - era.offset) * dir;
					}
				}
				function getEraName () {
					var i, l, val, eras = this.localeData().eras();
					for (i = 0, l = eras.length; i < l; ++i) {
						val = this.clone().startOf("day").valueOf();
						if (eras[i].since <= val && val <= eras[i].until) {
							return eras[i].name;
						}
						if (eras[i].until <= val && val <= eras[i].since) {
							return eras[i].name;
						}
					}
					return "";
				}
				function getEraNarrow () {
					var i, l, val, eras = this.localeData().eras();
					for (i = 0, l = eras.length; i < l; ++i) {
						val = this.clone().startOf("day").valueOf();
						if (eras[i].since <= val && val <= eras[i].until) {
							return eras[i].narrow;
						}
						if (eras[i].until <= val && val <= eras[i].since) {
							return eras[i].narrow;
						}
					}
					return "";
				}
				function getEraAbbr () {
					var i, l, val, eras = this.localeData().eras();
					for (i = 0, l = eras.length; i < l; ++i) {
						val = this.clone().startOf("day").valueOf();
						if (eras[i].since <= val && val <= eras[i].until) {
							return eras[i].abbr;
						}
						if (eras[i].until <= val && val <= eras[i].since) {
							return eras[i].abbr;
						}
					}
					return "";
				}
				function getEraYear () {
					var i, l, dir, val, eras = this.localeData().eras();
					for (i = 0, l = eras.length; i < l; ++i) {
						dir = eras[i].since <= eras[i].until ? 1 : -1;
						val = this.clone().startOf("day").valueOf();
						if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
							return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
						}
					}
					return this.year();
				}
				function erasNameRegex (isStrict) {
					if (!hasOwnProp(this, "_erasNameRegex")) {
						computeErasParse.call(this);
					}
					return isStrict ? this._erasNameRegex : this._erasRegex;
				}
				function erasAbbrRegex (isStrict) {
					if (!hasOwnProp(this, "_erasAbbrRegex")) {
						computeErasParse.call(this);
					}
					return isStrict ? this._erasAbbrRegex : this._erasRegex;
				}
				function erasNarrowRegex (isStrict) {
					if (!hasOwnProp(this, "_erasNarrowRegex")) {
						computeErasParse.call(this);
					}
					return isStrict ? this._erasNarrowRegex : this._erasRegex;
				}
				function matchEraAbbr (isStrict, locale2) {
					return locale2.erasAbbrRegex(isStrict);
				}
				function matchEraName (isStrict, locale2) {
					return locale2.erasNameRegex(isStrict);
				}
				function matchEraNarrow (isStrict, locale2) {
					return locale2.erasNarrowRegex(isStrict);
				}
				function matchEraYearOrdinal (isStrict, locale2) {
					return locale2._eraYearOrdinalRegex || matchUnsigned;
				}
				function computeErasParse () {
					var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, erasName, erasAbbr, erasNarrow, eras = this.eras();
					for (i = 0, l = eras.length; i < l; ++i) {
						erasName = regexEscape(eras[i].name);
						erasAbbr = regexEscape(eras[i].abbr);
						erasNarrow = regexEscape(eras[i].narrow);
						namePieces.push(erasName);
						abbrPieces.push(erasAbbr);
						narrowPieces.push(erasNarrow);
						mixedPieces.push(erasName);
						mixedPieces.push(erasAbbr);
						mixedPieces.push(erasNarrow);
					}
					this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
					this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
					this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
					this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
				}
				addFormatToken(0, ["gg", 2], 0, function () {
					return this.weekYear() % 100;
				});
				addFormatToken(0, ["GG", 2], 0, function () {
					return this.isoWeekYear() % 100;
				});
				function addWeekYearFormatToken (token2, getter) {
					addFormatToken(0, [token2, token2.length], 0, getter);
				}
				addWeekYearFormatToken("gggg", "weekYear");
				addWeekYearFormatToken("ggggg", "weekYear");
				addWeekYearFormatToken("GGGG", "isoWeekYear");
				addWeekYearFormatToken("GGGGG", "isoWeekYear");
				addRegexToken("G", matchSigned);
				addRegexToken("g", matchSigned);
				addRegexToken("GG", match1to2, match2);
				addRegexToken("gg", match1to2, match2);
				addRegexToken("GGGG", match1to4, match4);
				addRegexToken("gggg", match1to4, match4);
				addRegexToken("GGGGG", match1to6, match6);
				addRegexToken("ggggg", match1to6, match6);
				addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function (input, week, config2, token2) {
					week[token2.substr(0, 2)] = toInt(input);
				});
				addWeekParseToken(["gg", "GG"], function (input, week, config2, token2) {
					week[token2] = hooks.parseTwoDigitYear(input);
				});
				function getSetWeekYear (input) {
					return getSetWeekYearHelper.call(this, input, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy);
				}
				function getSetISOWeekYear (input) {
					return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
				}
				function getISOWeeksInYear () {
					return weeksInYear(this.year(), 1, 4);
				}
				function getISOWeeksInISOWeekYear () {
					return weeksInYear(this.isoWeekYear(), 1, 4);
				}
				function getWeeksInYear () {
					var weekInfo = this.localeData()._week;
					return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
				}
				function getWeeksInWeekYear () {
					var weekInfo = this.localeData()._week;
					return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
				}
				function getSetWeekYearHelper (input, week, weekday, dow, doy) {
					var weeksTarget;
					if (input == null) {
						return weekOfYear(this, dow, doy).year;
					} else {
						weeksTarget = weeksInYear(input, dow, doy);
						if (week > weeksTarget) {
							week = weeksTarget;
						}
						return setWeekAll.call(this, input, week, weekday, dow, doy);
					}
				}
				function setWeekAll (weekYear, week, weekday, dow, doy) {
					var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
					this.year(date.getUTCFullYear());
					this.month(date.getUTCMonth());
					this.date(date.getUTCDate());
					return this;
				}
				addFormatToken("Q", 0, "Qo", "quarter");
				addRegexToken("Q", match1);
				addParseToken("Q", function (input, array) {
					array[MONTH] = (toInt(input) - 1) * 3;
				});
				function getSetQuarter (input) {
					return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
				}
				addFormatToken("D", ["DD", 2], "Do", "date");
				addRegexToken("D", match1to2, match1to2NoLeadingZero);
				addRegexToken("DD", match1to2, match2);
				addRegexToken("Do", function (isStrict, locale2) {
					return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
				});
				addParseToken(["D", "DD"], DATE);
				addParseToken("Do", function (input, array) {
					array[DATE] = toInt(input.match(match1to2)[0]);
				});
				var getSetDayOfMonth = makeGetSet("Date", true);
				addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
				addRegexToken("DDD", match1to3);
				addRegexToken("DDDD", match3);
				addParseToken(["DDD", "DDDD"], function (input, array, config2) {
					config2._dayOfYear = toInt(input);
				});
				function getSetDayOfYear (input) {
					var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
					return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
				}
				addFormatToken("m", ["mm", 2], 0, "minute");
				addRegexToken("m", match1to2, match1to2HasZero);
				addRegexToken("mm", match1to2, match2);
				addParseToken(["m", "mm"], MINUTE);
				var getSetMinute = makeGetSet("Minutes", false);
				addFormatToken("s", ["ss", 2], 0, "second");
				addRegexToken("s", match1to2, match1to2HasZero);
				addRegexToken("ss", match1to2, match2);
				addParseToken(["s", "ss"], SECOND);
				var getSetSecond = makeGetSet("Seconds", false);
				addFormatToken("S", 0, 0, function () {
					return ~~(this.millisecond() / 100);
				});
				addFormatToken(0, ["SS", 2], 0, function () {
					return ~~(this.millisecond() / 10);
				});
				addFormatToken(0, ["SSS", 3], 0, "millisecond");
				addFormatToken(0, ["SSSS", 4], 0, function () {
					return this.millisecond() * 10;
				});
				addFormatToken(0, ["SSSSS", 5], 0, function () {
					return this.millisecond() * 100;
				});
				addFormatToken(0, ["SSSSSS", 6], 0, function () {
					return this.millisecond() * 1e3;
				});
				addFormatToken(0, ["SSSSSSS", 7], 0, function () {
					return this.millisecond() * 1e4;
				});
				addFormatToken(0, ["SSSSSSSS", 8], 0, function () {
					return this.millisecond() * 1e5;
				});
				addFormatToken(0, ["SSSSSSSSS", 9], 0, function () {
					return this.millisecond() * 1e6;
				});
				addRegexToken("S", match1to3, match1);
				addRegexToken("SS", match1to3, match2);
				addRegexToken("SSS", match1to3, match3);
				var token, getSetMillisecond;
				for (token = "SSSS"; token.length <= 9; token += "S") {
					addRegexToken(token, matchUnsigned);
				}
				function parseMs (input, array) {
					array[MILLISECOND] = toInt(("0." + input) * 1e3);
				}
				for (token = "S"; token.length <= 9; token += "S") {
					addParseToken(token, parseMs);
				}
				getSetMillisecond = makeGetSet("Milliseconds", false);
				addFormatToken("z", 0, 0, "zoneAbbr");
				addFormatToken("zz", 0, 0, "zoneName");
				function getZoneAbbr () {
					return this._isUTC ? "UTC" : "";
				}
				function getZoneName () {
					return this._isUTC ? "Coordinated Universal Time" : "";
				}
				var proto = Moment2.prototype;
				proto.add = add;
				proto.calendar = calendar$1;
				proto.clone = clone;
				proto.diff = diff;
				proto.endOf = endOf;
				proto.format = format;
				proto.from = from;
				proto.fromNow = fromNow;
				proto.to = to;
				proto.toNow = toNow;
				proto.get = stringGet;
				proto.invalidAt = invalidAt;
				proto.isAfter = isAfter;
				proto.isBefore = isBefore;
				proto.isBetween = isBetween;
				proto.isSame = isSame;
				proto.isSameOrAfter = isSameOrAfter;
				proto.isSameOrBefore = isSameOrBefore;
				proto.isValid = isValid$2;
				proto.lang = lang;
				proto.locale = locale;
				proto.localeData = localeData;
				proto.max = prototypeMax;
				proto.min = prototypeMin;
				proto.parsingFlags = parsingFlags;
				proto.set = stringSet;
				proto.startOf = startOf;
				proto.subtract = subtract;
				proto.toArray = toArray;
				proto.toObject = toObject;
				proto.toDate = toDate;
				proto.toISOString = toISOString;
				proto.inspect = inspect;
				if (typeof Symbol !== "undefined" && Symbol.for != null) {
					proto[Symbol.for("nodejs.util.inspect.custom")] = function () {
						return "Moment<" + this.format() + ">";
					};
				}
				proto.toJSON = toJSON;
				proto.toString = toString2;
				proto.unix = unix;
				proto.valueOf = valueOf;
				proto.creationData = creationData;
				proto.eraName = getEraName;
				proto.eraNarrow = getEraNarrow;
				proto.eraAbbr = getEraAbbr;
				proto.eraYear = getEraYear;
				proto.year = getSetYear;
				proto.isLeapYear = getIsLeapYear;
				proto.weekYear = getSetWeekYear;
				proto.isoWeekYear = getSetISOWeekYear;
				proto.quarter = proto.quarters = getSetQuarter;
				proto.month = getSetMonth;
				proto.daysInMonth = getDaysInMonth;
				proto.week = proto.weeks = getSetWeek;
				proto.isoWeek = proto.isoWeeks = getSetISOWeek;
				proto.weeksInYear = getWeeksInYear;
				proto.weeksInWeekYear = getWeeksInWeekYear;
				proto.isoWeeksInYear = getISOWeeksInYear;
				proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
				proto.date = getSetDayOfMonth;
				proto.day = proto.days = getSetDayOfWeek;
				proto.weekday = getSetLocaleDayOfWeek;
				proto.isoWeekday = getSetISODayOfWeek;
				proto.dayOfYear = getSetDayOfYear;
				proto.hour = proto.hours = getSetHour;
				proto.minute = proto.minutes = getSetMinute;
				proto.second = proto.seconds = getSetSecond;
				proto.millisecond = proto.milliseconds = getSetMillisecond;
				proto.utcOffset = getSetOffset;
				proto.utc = setOffsetToUTC;
				proto.local = setOffsetToLocal;
				proto.parseZone = setOffsetToParsedOffset;
				proto.hasAlignedHourOffset = hasAlignedHourOffset;
				proto.isDST = isDaylightSavingTime;
				proto.isLocal = isLocal;
				proto.isUtcOffset = isUtcOffset;
				proto.isUtc = isUtc;
				proto.isUTC = isUtc;
				proto.zoneAbbr = getZoneAbbr;
				proto.zoneName = getZoneName;
				proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
				proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
				proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
				proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
				proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
				function createUnix (input) {
					return createLocal(input * 1e3);
				}
				function createInZone () {
					return createLocal.apply(null, arguments).parseZone();
				}
				function preParsePostFormat (string) {
					return string;
				}
				var proto$1 = Locale.prototype;
				proto$1.calendar = calendar;
				proto$1.longDateFormat = longDateFormat;
				proto$1.invalidDate = invalidDate;
				proto$1.ordinal = ordinal;
				proto$1.preparse = preParsePostFormat;
				proto$1.postformat = preParsePostFormat;
				proto$1.relativeTime = relativeTime;
				proto$1.pastFuture = pastFuture;
				proto$1.set = set;
				proto$1.eras = localeEras;
				proto$1.erasParse = localeErasParse;
				proto$1.erasConvertYear = localeErasConvertYear;
				proto$1.erasAbbrRegex = erasAbbrRegex;
				proto$1.erasNameRegex = erasNameRegex;
				proto$1.erasNarrowRegex = erasNarrowRegex;
				proto$1.months = localeMonths;
				proto$1.monthsShort = localeMonthsShort;
				proto$1.monthsParse = localeMonthsParse;
				proto$1.monthsRegex = monthsRegex;
				proto$1.monthsShortRegex = monthsShortRegex;
				proto$1.week = localeWeek;
				proto$1.firstDayOfYear = localeFirstDayOfYear;
				proto$1.firstDayOfWeek = localeFirstDayOfWeek;
				proto$1.weekdays = localeWeekdays;
				proto$1.weekdaysMin = localeWeekdaysMin;
				proto$1.weekdaysShort = localeWeekdaysShort;
				proto$1.weekdaysParse = localeWeekdaysParse;
				proto$1.weekdaysRegex = weekdaysRegex;
				proto$1.weekdaysShortRegex = weekdaysShortRegex;
				proto$1.weekdaysMinRegex = weekdaysMinRegex;
				proto$1.isPM = localeIsPM;
				proto$1.meridiem = localeMeridiem;
				function get$1 (format2, index, field, setter) {
					var locale2 = getLocale(), utc = createUTC().set(setter, index);
					return locale2[field](utc, format2);
				}
				function listMonthsImpl (format2, index, field) {
					if (isNumber2(format2)) {
						index = format2;
						format2 = void 0;
					}
					format2 = format2 || "";
					if (index != null) {
						return get$1(format2, index, field, "month");
					}
					var i, out = [];
					for (i = 0; i < 12; i++) {
						out[i] = get$1(format2, i, field, "month");
					}
					return out;
				}
				function listWeekdaysImpl (localeSorted, format2, index, field) {
					if (typeof localeSorted === "boolean") {
						if (isNumber2(format2)) {
							index = format2;
							format2 = void 0;
						}
						format2 = format2 || "";
					} else {
						format2 = localeSorted;
						index = format2;
						localeSorted = false;
						if (isNumber2(format2)) {
							index = format2;
							format2 = void 0;
						}
						format2 = format2 || "";
					}
					var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
					if (index != null) {
						return get$1(format2, (index + shift) % 7, field, "day");
					}
					for (i = 0; i < 7; i++) {
						out[i] = get$1(format2, (i + shift) % 7, field, "day");
					}
					return out;
				}
				function listMonths (format2, index) {
					return listMonthsImpl(format2, index, "months");
				}
				function listMonthsShort (format2, index) {
					return listMonthsImpl(format2, index, "monthsShort");
				}
				function listWeekdays (localeSorted, format2, index) {
					return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
				}
				function listWeekdaysShort (localeSorted, format2, index) {
					return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
				}
				function listWeekdaysMin (localeSorted, format2, index) {
					return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
				}
				getSetGlobalLocale("en", {
					eras: [{
						since: "0001-01-01",
						until: Infinity,
						offset: 1,
						name: "Anno Domini",
						narrow: "AD",
						abbr: "AD"
					}, {
						since: "0000-12-31",
						until: -Infinity,
						offset: 1,
						name: "Before Christ",
						narrow: "BC",
						abbr: "BC"
					}],
					dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
					ordinal: function (number) {
						var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
						return number + output;
					}
				});
				hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
				hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
				var mathAbs = Math.abs;
				function abs () {
					var data = this._data;
					this._milliseconds = mathAbs(this._milliseconds);
					this._days = mathAbs(this._days);
					this._months = mathAbs(this._months);
					data.milliseconds = mathAbs(data.milliseconds);
					data.seconds = mathAbs(data.seconds);
					data.minutes = mathAbs(data.minutes);
					data.hours = mathAbs(data.hours);
					data.months = mathAbs(data.months);
					data.years = mathAbs(data.years);
					return this;
				}
				function addSubtract$1 (duration, input, value, direction) {
					var other = createDuration(input, value);
					duration._milliseconds += direction * other._milliseconds;
					duration._days += direction * other._days;
					duration._months += direction * other._months;
					return duration._bubble();
				}
				function add$1 (input, value) {
					return addSubtract$1(this, input, value, 1);
				}
				function subtract$1 (input, value) {
					return addSubtract$1(this, input, value, -1);
				}
				function absCeil (number) {
					if (number < 0) {
						return Math.floor(number);
					} else {
						return Math.ceil(number);
					}
				}
				function bubble () {
					var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
					if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
						milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
						days2 = 0;
						months2 = 0;
					}
					data.milliseconds = milliseconds2 % 1e3;
					seconds2 = absFloor(milliseconds2 / 1e3);
					data.seconds = seconds2 % 60;
					minutes2 = absFloor(seconds2 / 60);
					data.minutes = minutes2 % 60;
					hours2 = absFloor(minutes2 / 60);
					data.hours = hours2 % 24;
					days2 += absFloor(hours2 / 24);
					monthsFromDays = absFloor(daysToMonths(days2));
					months2 += monthsFromDays;
					days2 -= absCeil(monthsToDays(monthsFromDays));
					years2 = absFloor(months2 / 12);
					months2 %= 12;
					data.days = days2;
					data.months = months2;
					data.years = years2;
					return this;
				}
				function daysToMonths (days2) {
					return days2 * 4800 / 146097;
				}
				function monthsToDays (months2) {
					return months2 * 146097 / 4800;
				}
				function as (units) {
					if (!this.isValid()) {
						return NaN;
					}
					var days2, months2, milliseconds2 = this._milliseconds;
					units = normalizeUnits(units);
					if (units === "month" || units === "quarter" || units === "year") {
						days2 = this._days + milliseconds2 / 864e5;
						months2 = this._months + daysToMonths(days2);
						switch (units) {
							case "month":
								return months2;
							case "quarter":
								return months2 / 3;
							case "year":
								return months2 / 12;
						}
					} else {
						days2 = this._days + Math.round(monthsToDays(this._months));
						switch (units) {
							case "week":
								return days2 / 7 + milliseconds2 / 6048e5;
							case "day":
								return days2 + milliseconds2 / 864e5;
							case "hour":
								return days2 * 24 + milliseconds2 / 36e5;
							case "minute":
								return days2 * 1440 + milliseconds2 / 6e4;
							case "second":
								return days2 * 86400 + milliseconds2 / 1e3;
							case "millisecond":
								return Math.floor(days2 * 864e5) + milliseconds2;
							default:
								throw new Error("Unknown unit " + units);
						}
					}
				}
				function makeAs (alias) {
					return function () {
						return this.as(alias);
					};
				}
				var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y"), valueOf$1 = asMilliseconds;
				function clone$1 () {
					return createDuration(this);
				}
				function get$2 (units) {
					units = normalizeUnits(units);
					return this.isValid() ? this[units + "s"]() : NaN;
				}
				function makeGetter (name) {
					return function () {
						return this.isValid() ? this._data[name] : NaN;
					};
				}
				var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
				function weeks () {
					return absFloor(this.days() / 7);
				}
				var round = Math.round, thresholds = {
					ss: 44,
					s: 45,
					m: 45,
					h: 22,
					d: 26,
					w: null,
					M: 11
				};
				function substituteTimeAgo (string, number, withoutSuffix, isFuture, locale2) {
					return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
				}
				function relativeTime$1 (posNegDuration, withoutSuffix, thresholds2, locale2) {
					var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
					if (thresholds2.w != null) {
						a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
					}
					a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
					a[2] = withoutSuffix;
					a[3] = +posNegDuration > 0;
					a[4] = locale2;
					return substituteTimeAgo.apply(null, a);
				}
				function getSetRelativeTimeRounding (roundingFunction) {
					if (roundingFunction === void 0) {
						return round;
					}
					if (typeof roundingFunction === "function") {
						round = roundingFunction;
						return true;
					}
					return false;
				}
				function getSetRelativeTimeThreshold (threshold, limit) {
					if (thresholds[threshold] === void 0) {
						return false;
					}
					if (limit === void 0) {
						return thresholds[threshold];
					}
					thresholds[threshold] = limit;
					if (threshold === "s") {
						thresholds.ss = limit - 1;
					}
					return true;
				}
				function humanize (argWithSuffix, argThresholds) {
					if (!this.isValid()) {
						return this.localeData().invalidDate();
					}
					var withSuffix = false, th = thresholds, locale2, output;
					if (typeof argWithSuffix === "object") {
						argThresholds = argWithSuffix;
						argWithSuffix = false;
					}
					if (typeof argWithSuffix === "boolean") {
						withSuffix = argWithSuffix;
					}
					if (typeof argThresholds === "object") {
						th = Object.assign({}, thresholds, argThresholds);
						if (argThresholds.s != null && argThresholds.ss == null) {
							th.ss = argThresholds.s - 1;
						}
					}
					locale2 = this.localeData();
					output = relativeTime$1(this, !withSuffix, th, locale2);
					if (withSuffix) {
						output = locale2.pastFuture(+this, output);
					}
					return locale2.postformat(output);
				}
				var abs$1 = Math.abs;
				function sign (x) {
					return (x > 0) - (x < 0) || +x;
				}
				function toISOString$1 () {
					if (!this.isValid()) {
						return this.localeData().invalidDate();
					}
					var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
					if (!total) {
						return "P0D";
					}
					minutes2 = absFloor(seconds2 / 60);
					hours2 = absFloor(minutes2 / 60);
					seconds2 %= 60;
					minutes2 %= 60;
					years2 = absFloor(months2 / 12);
					months2 %= 12;
					s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
					totalSign = total < 0 ? "-" : "";
					ymSign = sign(this._months) !== sign(total) ? "-" : "";
					daysSign = sign(this._days) !== sign(total) ? "-" : "";
					hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
					return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
				}
				var proto$2 = Duration.prototype;
				proto$2.isValid = isValid$1;
				proto$2.abs = abs;
				proto$2.add = add$1;
				proto$2.subtract = subtract$1;
				proto$2.as = as;
				proto$2.asMilliseconds = asMilliseconds;
				proto$2.asSeconds = asSeconds;
				proto$2.asMinutes = asMinutes;
				proto$2.asHours = asHours;
				proto$2.asDays = asDays;
				proto$2.asWeeks = asWeeks;
				proto$2.asMonths = asMonths;
				proto$2.asQuarters = asQuarters;
				proto$2.asYears = asYears;
				proto$2.valueOf = valueOf$1;
				proto$2._bubble = bubble;
				proto$2.clone = clone$1;
				proto$2.get = get$2;
				proto$2.milliseconds = milliseconds;
				proto$2.seconds = seconds;
				proto$2.minutes = minutes;
				proto$2.hours = hours;
				proto$2.days = days;
				proto$2.weeks = weeks;
				proto$2.months = months;
				proto$2.years = years;
				proto$2.humanize = humanize;
				proto$2.toISOString = toISOString$1;
				proto$2.toString = toISOString$1;
				proto$2.toJSON = toISOString$1;
				proto$2.locale = locale;
				proto$2.localeData = localeData;
				proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
				proto$2.lang = lang;
				addFormatToken("X", 0, 0, "unix");
				addFormatToken("x", 0, 0, "valueOf");
				addRegexToken("x", matchSigned);
				addRegexToken("X", matchTimestamp);
				addParseToken("X", function (input, array, config2) {
					config2._d = new Date(parseFloat(input) * 1e3);
				});
				addParseToken("x", function (input, array, config2) {
					config2._d = new Date(toInt(input));
				});
				hooks.version = "2.30.1";
				setHookCallback(createLocal);
				hooks.fn = proto;
				hooks.min = min;
				hooks.max = max;
				hooks.now = now;
				hooks.utc = createUTC;
				hooks.unix = createUnix;
				hooks.months = listMonths;
				hooks.isDate = isDate;
				hooks.locale = getSetGlobalLocale;
				hooks.invalid = createInvalid;
				hooks.duration = createDuration;
				hooks.isMoment = isMoment;
				hooks.weekdays = listWeekdays;
				hooks.parseZone = createInZone;
				hooks.localeData = getLocale;
				hooks.isDuration = isDuration;
				hooks.monthsShort = listMonthsShort;
				hooks.weekdaysMin = listWeekdaysMin;
				hooks.defineLocale = defineLocale;
				hooks.updateLocale = updateLocale;
				hooks.locales = listLocales;
				hooks.weekdaysShort = listWeekdaysShort;
				hooks.normalizeUnits = normalizeUnits;
				hooks.relativeTimeRounding = getSetRelativeTimeRounding;
				hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
				hooks.calendarFormat = getCalendarFormat;
				hooks.prototype = proto;
				hooks.HTML5_FMT = {
					DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
					DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
					DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
					DATE: "YYYY-MM-DD",
					TIME: "HH:mm",
					TIME_SECONDS: "HH:mm:ss",
					TIME_MS: "HH:mm:ss.SSS",
					WEEK: "GGGG-[W]WW",
					MONTH: "YYYY-MM"
				};
				return hooks;
			});
		}
	});
	var ConvertibleNumber = Symbol("ConvertibleNumber");
	var PositiveInteger = Symbol("PositiveInteger");
	var NegativeInteger = Symbol("NegativeInteger");
	var PositiveFloat = Symbol("PositiveFloat");
	var NegativeFloat = Symbol("NegativeFloat");
	var emojiSeq = String.raw`(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})`;
	var emojiSTags = String.raw`\u{E0061}-\u{E007A}`;
	var emojiRegex = new RegExp(String.raw`[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[${emojiSTags}]{2}[\u{E0030}-\u{E0039}${emojiSTags}]{1,3}\u{E007F}|${emojiSeq}(?:\u200D${emojiSeq})*`, "gu");
	var isNull = (obj) => obj === null;
	var isUndefined = (obj) => typeof obj === "undefined";
	var isNullOrUndefined = (obj) => isUndefined(obj) || isNull(obj);
	var isObject = (obj) => !isNullOrUndefined(obj) && typeof obj === "object" && !Array.isArray(obj);
	var isString = (obj) => !isNullOrUndefined(obj) && typeof obj === "string";
	var isNumber = (obj) => !isNullOrUndefined(obj) && typeof obj === "number";
	var isArray = (obj) => Array.isArray(obj);
	var isElement = (obj) => !isNullOrUndefined(obj) && obj instanceof Element;
	var isNode = (obj) => !isNullOrUndefined(obj) && obj instanceof Node;
	var isNotEmpty = (obj) => {
		if (isNullOrUndefined(obj)) {
			return false;
		}
		if (Array.isArray(obj)) {
			return obj.some(isNotEmpty);
		}
		if (isString(obj)) {
			return !obj.isEmpty();
		}
		if (isNumber(obj)) {
			return !Number.isNaN(obj);
		}
		if (isElement(obj) || isNode(obj)) {
			return true;
		}
		if (isObject(obj)) {
			return Object.values(obj).some(isNotEmpty);
		}
		return true;
	};
	var isVideoInfo = (obj) => {
		if (obj === null || typeof obj !== "object") return false;
		const info = obj;
		return isInitVideoInfo(info) || isFullVideoInfo(info) || isPartialVideoInfo(info) || isCacheVideoInfo(info) || isFailVideoInfo(info);
	};
	var hasValidID = (info) => isString(info.ID) && isNotEmpty(info.ID);
	var isInitVideoInfo = (info) => !isNullOrUndefined(info) && info.Type === "init" && hasValidID(info);
	var isFullVideoInfo = (info) => !isNullOrUndefined(info) && info.Type === "full" && hasValidID(info) && isNumber(info.UploadTime) && isString(info.Title) && isNotEmpty(info.Title) && isString(info.FileName) && isNotEmpty(info.FileName) && isNumber(info.Size) && isArray(info.Tags) && typeof info.Liked === "boolean" && typeof info.Following === "boolean" && typeof info.Friend === "boolean" && isString(info.Author) && isNotEmpty(info.Author) && isString(info.AuthorID) && isNotEmpty(info.AuthorID) && typeof info.Private === "boolean" && typeof info.Unlisted === "boolean" && isString(info.DownloadQuality) && typeof info.External === "boolean" && isString(info.DownloadUrl) && isNotEmpty(info.DownloadUrl) && isObject(info.RAW);
	var isPartialVideoInfo = (info) => !isNullOrUndefined(info) && info.Type === "partial" && hasValidID(info) && isNumber(info.UploadTime) && isString(info.Title) && isNotEmpty(info.Title) && isArray(info.Tags) && typeof info.Liked === "boolean" && isString(info.Author) && isNotEmpty(info.Author) && isString(info.AuthorID) && isNotEmpty(info.AuthorID) && typeof info.Private === "boolean" && typeof info.Unlisted === "boolean" && typeof info.External === "boolean" && isObject(info.RAW);
	var isCacheVideoInfo = (info) => !isNullOrUndefined(info) && info.Type === "cache" && hasValidID(info) && isObject(info.RAW);
	var isFailVideoInfo = (info) => !isNullOrUndefined(info) && info.Type === "fail" && hasValidID(info);
	var assertVideoInfoType = (info) => {
		switch (info.Type) {
			case "init":
				return info;
			case "full":
				return info;
			case "partial":
				return info;
			case "cache":
				return info;
			case "fail":
				return info;
			default:
				throw new Error(`未知的 VideoInfo 类型: ${info.Type}`);
		}
	};
	function isConvertibleToNumber (obj, includeInfinity = false) {
		if (isNullOrUndefined(obj)) {
			return false;
		}
		if (isString(obj)) {
			return obj.isConvertibleToNumber(includeInfinity);
		}
		if (isNumber(obj)) {
			return isNaN(obj) ? false : includeInfinity ? true : isFinite(obj);
		}
		return false;
	}
	Number.isConvertibleNumber = (value, includeInfinity = false) => {
		if (isNullOrUndefined(value)) {
			return false;
		}
		if (isString(value)) {
			return value.isConvertibleToNumber(includeInfinity);
		}
		if (isNumber(value)) {
			return isNaN(value) ? false : includeInfinity ? true : isFinite(value);
		}
		return false;
	};
	Number.isPositiveInteger = (value) => typeof value === "number" && Number.isInteger(value) && value > 0;
	Number.isNegativeInteger = (value) => typeof value === "number" && Number.isInteger(value) && value < 0;
	Number.isPositiveFloat = (value) => typeof value === "number" && !Number.isInteger(value) && value > 0;
	Number.isNegativeFloat = (value) => typeof value === "number" && !Number.isInteger(value) && value < 0;
	Number.toPositiveInteger = (value) => {
		if (!Number.isPositiveInteger(value)) {
			throw new Error("值必须为正整数");
		}
		return value;
	};
	Number.toNegativeInteger = (value) => {
		if (!Number.isNegativeInteger(value)) {
			throw new Error("值必须为负整数");
		}
		return value;
	};
	Number.toPositiveFloat = (value) => {
		if (!Number.isPositiveFloat(value)) {
			throw new Error("值必须为正浮点数");
		}
		return value;
	};
	Number.toNegativeFloat = (value) => {
		if (!Number.isNegativeFloat(value)) {
			throw new Error("值必须为负浮点数");
		}
		return value;
	};
	Array.prototype.any = function () {
		return this.filter((i) => !isNullOrUndefined(i)).length > 0;
	};
	Array.prototype.unique = function (prop) {
		if (isNullOrUndefined(prop)) {
			const seen = new Set();
			return this.filter((item) => {
				if (seen.has(item)) return false;
				seen.add(item);
				return true;
			});
		} else {
			const seen = new Map();
			const nanSymbol = Symbol();
			return this.filter((item) => {
				const rawKey = item[prop];
				const key = isNumber(rawKey) && Number.isNaN(rawKey) ? nanSymbol : rawKey;
				if (seen.has(key)) return false;
				seen.set(key, true);
				return true;
			});
		}
	};
	Array.prototype.union = function (that, prop) {
		return [...this, ...that].unique(prop);
	};
	Array.prototype.intersect = function (that, prop) {
		return this.filter((item) => that.some((t) => isNullOrUndefined(prop) ? t === item : t[prop] === item[prop])).unique(prop);
	};
	Array.prototype.difference = function (that, prop) {
		return this.filter((item) => !that.some((t) => isNullOrUndefined(prop) ? t === item : t[prop] === item[prop])).unique(prop);
	};
	Array.prototype.complement = function (that, prop) {
		return this.union(that, prop).difference(this.intersect(that, prop), prop);
	};
	String.prototype.isEmpty = function () {
		return !isNullOrUndefined(this) && this.length === 0;
	};
	String.prototype.isConvertibleToNumber = function (includeInfinity = false) {
		const trimmed = this.trim();
		if (trimmed === "") return false;
		return Number.isConvertibleNumber(Number(trimmed), includeInfinity);
	};
	String.prototype.reversed = function () {
		const segmenter = new Intl.Segmenter(navigator.language, {
			granularity: "grapheme"
		});
		return [...segmenter.segment(this.toString())].reverse().join("");
	};
	String.prototype.among = function (start, end, greedy = false, reverse = false) {
		if (this.isEmpty() || start.isEmpty() || end.isEmpty()) return "";
		if (!reverse) {
			const startIndex = this.indexOf(start);
			if (startIndex === -1) return "";
			const adjustedStartIndex = startIndex + start.length;
			const endIndex = greedy ? this.lastIndexOf(end) : this.indexOf(end, adjustedStartIndex);
			if (endIndex === -1 || endIndex < adjustedStartIndex) return "";
			return this.slice(adjustedStartIndex, endIndex);
		} else {
			const endIndex = this.lastIndexOf(end);
			if (endIndex === -1) return "";
			const adjustedEndIndex = endIndex - end.length;
			const startIndex = greedy ? this.indexOf(start) : this.lastIndexOf(start, adjustedEndIndex);
			if (startIndex === -1 || startIndex + start.length > adjustedEndIndex) return "";
			return this.slice(startIndex + start.length, endIndex);
		}
	};
	String.prototype.splitLimit = function (separator, limit) {
		if (this.isEmpty() || isNullOrUndefined(separator)) {
			throw new Error("Empty");
		}
		let body = this.split(separator);
		return limit ? body.slice(0, limit).concat(body.slice(limit).join(separator)) : body;
	};
	String.prototype.truncate = function (maxLength) {
		return this.length > maxLength ? this.substring(0, maxLength) : this.toString();
	};
	String.prototype.trimHead = function (prefix) {
		return this.startsWith(prefix) ? this.slice(prefix.length) : this.toString();
	};
	String.prototype.trimTail = function (suffix) {
		return this.endsWith(suffix) ? this.slice(0, -suffix.length) : this.toString();
	};
	String.prototype.replaceEmojis = function (replace) {
		return this.replaceAll(emojiRegex, replace ?? "");
	};
	String.prototype.toURL = function () {
		let URLString = this;
		if (URLString.split("//")[0].isEmpty()) {
			URLString = `${unsafeWindow.location.protocol}${URLString}`;
		}
		return new URL(URLString.toString());
	};
	Date.prototype.add = function ({
		years = 0,
		months = 0,
		days = 0,
		hours = 0,
		minutes = 0,
		seconds = 0,
		ms = 0
	} = {}) {
		const newDate = new Date(this.getTime());
		if (years) newDate.setFullYear(newDate.getFullYear() + years);
		if (months) newDate.setMonth(newDate.getMonth() + months);
		if (days) newDate.setDate(newDate.getDate() + days);
		if (hours) newDate.setHours(newDate.getHours() + hours);
		if (minutes) newDate.setMinutes(newDate.getMinutes() + minutes);
		if (seconds) newDate.setSeconds(newDate.getSeconds() + seconds);
		if (ms) newDate.setMilliseconds(newDate.getMilliseconds() + ms);
		return newDate;
	};
	Date.prototype.sub = function ({
		years = 0,
		months = 0,
		days = 0,
		hours = 0,
		minutes = 0,
		seconds = 0,
		ms = 0
	} = {}) {
		const newDate = new Date(this.getTime());
		if (years) newDate.setFullYear(newDate.getFullYear() - years);
		if (months) newDate.setMonth(newDate.getMonth() - months);
		if (days) newDate.setDate(newDate.getDate() - days);
		if (hours) newDate.setHours(newDate.getHours() - hours);
		if (minutes) newDate.setMinutes(newDate.getMinutes() - minutes);
		if (seconds) newDate.setSeconds(newDate.getSeconds() - seconds);
		if (ms) newDate.setMilliseconds(newDate.getMilliseconds() - ms);
		return newDate;
	};
	function throttle (fn, delay2, {
		leading = true,
		trailing = true
	} = {}) {
		let lastCall = 0;
		let timer = null;
		const throttled = function (...args) {
			const now = Date.now();
			if (!lastCall && !leading) {
				lastCall = now;
			}
			const remaining = delay2 - (now - lastCall);
			if (remaining <= 0) {
				if (timer) {
					clearTimeout(timer);
					timer = null;
				}
				lastCall = now;
				fn.apply(this, args);
			} else if (trailing && !timer) {
				timer = setTimeout(() => {
					lastCall = leading ? Date.now() : 0;
					timer = null;
					fn.apply(this, args);
				}, remaining);
			}
		};
		throttled.cancel = () => {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			lastCall = 0;
		};
		return throttled;
	}
	function debounce (fn, delay2, {
		immediate = false
	} = {}) {
		let timer = null;
		const debounced = function (...args) {
			const callNow = immediate && !timer;
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				timer = null;
				if (!immediate) {
					fn.apply(this, args);
				}
			}, delay2);
			if (callNow) {
				fn.apply(this, args);
			}
		};
		debounced.cancel = () => {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
		};
		return debounced;
	}
	function delay (time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}
	function hasFunction (obj, method) {
		return isObject(obj) && method in obj && typeof obj[method] === "function";
	}
	;
	function UUID () {
		return isNullOrUndefined(crypto) ? Array.from({
			length: 8
		}, () => ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)).join("") : crypto.randomUUID().replaceAll("-", "");
	}
	function stringify (data) {
		switch (typeof data) {
			case "undefined":
				return "undefined";
			case "boolean":
				return data ? "true" : "false";
			case "number":
				return String(data);
			case "string":
				return data;
			case "symbol":
				return data.toString();
			case "function":
				return data.toString();
			case "object":
				if (isNull(data)) {
					return "null";
				}
				if (data instanceof Error) {
					return data.toString();
				}
				if (data instanceof Date) {
					return data.toISOString();
				}
				return JSON.stringify(data, null, 2);
			default:
				return "unknown";
		}
	}
	function prune (data) {
		if (isElement(data) || isNode(data)) {
			return data;
		}
		if (Array.isArray(data)) {
			return data.map((item) => prune(item)).filter(isNotEmpty);
		}
		if (isObject(data)) {
			const result = Object.fromEntries(Object.entries(data).filter(([, v]) => isNotEmpty(v)).map(([k, v]) => [k, prune(v)]).filter(([, v]) => isNotEmpty(v)));
			return result;
		}
		return data;
	}
	String.prototype.replaceVariable = function (replacements, prefix = "%#", suffix = "#%") {
		function escapeRegex (str) {
			return str.replace(/[\.\*\+\?\^\$\{\}\(\)\|\[\]\\]/g, "\\$&");
		}
		let current = this.toString();
		prefix = escapeRegex(prefix);
		suffix = escapeRegex(suffix);
		const seen = new Set();
		const patterns = Object.keys(replacements).map((key) => {
			const escKey = escapeRegex(key);
			return {
				value: replacements[key],
				placeholderRegex: new RegExp(`${prefix}${escKey}(?=(?::.*?${suffix}|${suffix}))(?::.*?)?${suffix}`, "gs"),
				placeholderFormatRegex: new RegExp(`(?<=${prefix}${escKey}(?=(?::.*?${suffix}|${suffix})):).*?(?=${suffix})`, "gs")
			};
		});
		while (true) {
			if (seen.has(current)) {
				console.warn("检测到循环替换！", `终止于: ${current}`);
				break;
			}
			seen.add(current);
			let next = current;
			for (const {
				value,
				placeholderRegex,
				placeholderFormatRegex
			} of patterns) {
				if (placeholderRegex.test(next)) {
					let format = next.match(placeholderFormatRegex);
					if (!isNullOrUndefined(format) && format.any() && !format[0].isEmpty() && hasFunction(value, "format")) {
						next = next.replace(placeholderRegex, stringify(value.format(escapeRegex(format[0]))));
					} else {
						next = next.replace(placeholderRegex, stringify(value instanceof Date ? value.format("YYYY-MM-DD") : value));
					}
				}
			}
			if (current === next) break;
			current = next;
		}
		return current;
	};
	var DownloadType = function (DownloadType2) {
		DownloadType2[DownloadType2["Aria2"] = 0] = "Aria2";
		DownloadType2[DownloadType2["IwaraDownloader"] = 1] = "IwaraDownloader";
		DownloadType2[DownloadType2["Browser"] = 2] = "Browser";
		DownloadType2[DownloadType2["Others"] = 3] = "Others";
		return DownloadType2;
	}({});
	var PageType = function (PageType2) {
		PageType2["Video"] = "video";
		PageType2["Image"] = "image";
		PageType2["VideoList"] = "videoList";
		PageType2["ImageList"] = "imageList";
		PageType2["Forum"] = "forum";
		PageType2["ForumSection"] = "forumSection";
		PageType2["ForumThread"] = "forumThread";
		PageType2["Page"] = "page";
		PageType2["Home"] = "home";
		PageType2["Profile"] = "profile";
		PageType2["Subscriptions"] = "subscriptions";
		PageType2["Playlist"] = "playlist";
		PageType2["Favorites"] = "favorites";
		PageType2["Search"] = "search";
		PageType2["Account"] = "account";
		return PageType2;
	}({});
	var ToastType = function (ToastType2) {
		ToastType2[ToastType2["Log"] = 0] = "Log";
		ToastType2[ToastType2["Info"] = 1] = "Info";
		ToastType2[ToastType2["Warn"] = 2] = "Warn";
		ToastType2[ToastType2["Error"] = 3] = "Error";
		return ToastType2;
	}({});
	var MessageType = function (MessageType2) {
		MessageType2[MessageType2["Close"] = 0] = "Close";
		MessageType2[MessageType2["Request"] = 1] = "Request";
		MessageType2[MessageType2["Receive"] = 2] = "Receive";
		MessageType2[MessageType2["Set"] = 3] = "Set";
		MessageType2[MessageType2["Del"] = 4] = "Del";
		return MessageType2;
	}({});
	var VersionState = function (VersionState2) {
		VersionState2[VersionState2["Low"] = 0] = "Low";
		VersionState2[VersionState2["Equal"] = 1] = "Equal";
		VersionState2[VersionState2["High"] = 2] = "High";
		return VersionState2;
	}({});
	var originalFetch = unsafeWindow.fetch;
	var originalHistoryPushState = unsafeWindow.history.pushState;
	var originalHistoryReplaceState = unsafeWindow.history.replaceState;
	var originalNodeAppendChild = unsafeWindow.Node.prototype.appendChild;
	var originalNodeRemoveChild = unsafeWindow.Node.prototype.removeChild;
	var originalElementRemove = unsafeWindow.Element.prototype.remove;
	var originalAddEventListener = unsafeWindow.EventTarget.prototype.addEventListener;
	var originalStorageSetItem = unsafeWindow.Storage.prototype.setItem;
	var originalStorageRemoveItem = unsafeWindow.Storage.prototype.removeItem;
	var originalStorageClear = unsafeWindow.Storage.prototype.clear;
	var originalConsole = {
		log: unsafeWindow.console.log.bind(unsafeWindow.console),
		info: unsafeWindow.console.info.bind(unsafeWindow.console),
		warn: unsafeWindow.console.warn.bind(unsafeWindow.console),
		error: unsafeWindow.console.error.bind(unsafeWindow.console),
		debug: unsafeWindow.console.debug.bind(unsafeWindow.console),
		trace: unsafeWindow.console.trace.bind(unsafeWindow.console),
		dir: unsafeWindow.console.dir.bind(unsafeWindow.console),
		table: unsafeWindow.console.table?.bind(unsafeWindow.console)
	};
	var zh_cn_default = {
		appName: "Iwara 批量下载工具",
		language: "语言: ",
		downloadPriority: "下载画质: ",
		downloadPath: "下载到: ",
		downloadProxy: "下载代理: ",
		downloadProxyUsername: "下载代理用户名: ",
		downloadProxyPassword: "下载代理密码: ",
		aria2Path: "Aria2 RPC: ",
		aria2Token: "Aria2 密钥: ",
		iwaraDownloaderPath: "IwaraDownloader RPC: ",
		iwaraDownloaderToken: "IwaraDownloader 密钥: ",
		experimentalFeatures: "实验性功能",
		enableUnsafeMode: "激进模式（风险自行承担）",
		rename: "重命名",
		save: "保存",
		reset: "重置",
		ok: "确定",
		on: "开启",
		off: "关闭",
		delete: "删除",
		deleteSucceed: "删除成功！",
		isDebug: "调试模式",
		downloadType: "下载方式",
		browserDownload: "浏览器下载",
		iwaraDownloaderDownload: "IwaraDownloader下载",
		autoFollow: "自动关注选中的视频作者",
		autoLike: "自动点赞选中的视频",
		addUnlistedAndPrivate: "不公开和私有视频强制显示(需关注作者)",
		checkDownloadLink: "第三方网盘下载地址检查",
		checkPriority: "下载画质检查",
		autoDownloadMetadata: "自动下载视频元数据",
		videoMetadata: "视频元数据",
		autoInjectCheckbox: "自动注入选择框",
		autoCopySaveFileName: "自动复制根据规则生成的文件名",
		configurationIncompatible: "初始化或配置文件不兼容，请重新配置！",
		browserDownloadNotEnabled: "未启用下载功能！",
		browserDownloadNotWhitelisted: "请求的文件扩展名未列入白名单！",
		browserDownloadNotPermitted: "下载功能已启用，但未授予下载权限！",
		browserDownloadNotSupported: "目前浏览器/版本不支持下载功能！",
		browserDownloadNotSucceeded: "下载未开始或失败！",
		browserDownloadUnknownError: "未知错误，有可能是下载时提供的参数存在问题，请检查文件名是否合法！",
		browserDownloadTimeout: "下载超时，请检查网络环境是否正常！",
		variable: "→ 查看可用变量 ←",
		downloadTime: "下载时间 ",
		uploadTime: "发布时间 ",
		example: "示例: ",
		result: "结果: ",
		loadingCompleted: "加载完成",
		settings: "打开设置",
		downloadThis: "下载当前视频",
		manualDownload: "手动下载指定",
		aria2TaskCheck: "Aria2任务重启",
		reverseSelect: "本页反向选中",
		deselectThis: "取消本页选中",
		deselectAll: "取消所有选中",
		selectThis: "本页全部选中",
		parseUnlistedAndPrivate: "解析近期隐藏或私有的视频",
		downloadSelected: "下载所选",
		selected: "已选中",
		downloadingSelected: "正在下载所选，请稍后...",
		injectCheckbox: "开关选择框",
		configError: "脚本配置中存在错误，请修改。",
		alreadyKnowHowToUse: "我已知晓如何使用!!!（此页面仅显示一次）",
		notice: [
			"加载完成",
			{
				nodeType: "br"
			},
			"公告: ",
			{
				nodeType: "br"
			},
			"此版本修复了无限刷新问题。",
			{
				nodeType: "br"
			},
			"优化了脚本样式使其与Iwara主题一致。"
		],
		useHelpForBase: [
			"请认真阅读使用指南！",
			{
				nodeType: "br"
			},
			"点击网页侧边的灰色侧栏展开脚本菜单，根据需求点击菜单中的功能。"
		],
		useHelpForInjectCheckbox: "打开任意存在视频卡片的页面，脚本会在视频卡片上注入复选框，点击复选框或鼠标悬浮在视频卡片上按空格将会勾选此视频。",
		useHelpForCheckDownloadLink: "开启“%#checkDownloadLink#%”功能会在下载视频前会检查视频简介以及评论，如果在其中发现疑似第三方网盘下载链接，将会弹出提示，您可以点击提示打开视频页面。",
		useHelpForManualDownload: [
			"使用手动下载功能需要提供视频ID，如需批量手动下载请提供使用“|”分割的视频ID。",
			{
				nodeType: "br"
			},
			"例如: AeGUIRO2D5vQ6F|qQsUMJa19LcK3L",
			{
				nodeType: "br"
			},
			"或提供符合以下格式对象的数组json字符串",
			{
				nodeType: "br"
			},
			"[ ID: string, { Title?: string, Alias?: string, Author?: string } ] ",
			{
				nodeType: "br"
			},
			"例如: ",
			{
				nodeType: "br"
			},
			'[["AeGUIRO2D5vQ6F", { Title: "237知更鸟", Alias: "骑着牛儿追织女", Author: "user1528210" }],["qQsUMJa19LcK3L", { Title: "Mika Automotive Extradimensional", Alias: "Temptation’s_Symphony", Author: "temptations_symphony" }]]'
		],
		useHelpForBugreport: [
			"反馈遇到的BUG、使用问题等请前往: ",
			{
				nodeType: "a",
				childs: "Github",
				attributes: {
					href: "https://github.com/dawn-lc/IwaraDownloadTool/"
				}
			}
		],
		tryRestartingDownload: "→ 点击此处重新下载 ←",
		tryReparseDownload: "→ 点击此处重新解析 ←",
		cdnCacheFinded: "→ 进入 MMD Fans 缓存页面 ←",
		openVideoLink: "→ 进入视频页面 ←",
		copySucceed: "复制成功！",
		pushTaskSucceed: "推送下载任务成功！",
		exportConfig: "导出配置",
		exportConfigSucceed: "配置已导出至剪切板！",
		connectionTest: "连接测试",
		settingsCheck: "配置检查",
		createTask: "创建任务",
		downloadPathError: "下载路径错误!",
		browserDownloadModeError: "请启用脚本管理器的浏览器API下载模式!",
		downloadQualityError: "未找到指定的画质下载地址!",
		findedDownloadLink: "发现疑似第三方网盘下载地址!",
		allCompleted: "全部解析完成！",
		parsing: "预解析中...",
		following: "已关注",
		parsingProgress: "解析进度: ",
		manualDownloadTips: '单独下载请直接在此处输入视频ID, 批量下载请提供使用“|”分割的视频ID, 例如: AeGUIRO2D5vQ6F|qQsUMJa19LcK3L\r\n或提供符合以下格式对象的数组json字符串\r\n{ key: string, value: { Title?: string, Alias?: string, Author?: string } }\r\n例如: \r\n[{ key: "AeGUIRO2D5vQ6F", value: { Title: "237知更鸟", Alias: "骑着牛儿追织女", Author: "user1528210" } },{ key: "qQsUMJa19LcK3L", value: { Title: "Mika Automotive Extradimensional", Alias: "Temptation’s_Symphony", Author: "temptations_symphony" } }]',
		externalVideo: "非本站视频",
		noAvailableVideoSource: "没有可供下载的视频源",
		videoSourceNotAvailable: "视频源地址不可用",
		getVideoSourceFailed: "获取视频源失败",
		downloadFailed: "下载失败！",
		downloadThisFailed: "未找到可供下载的视频！",
		pushTaskFailed: "推送下载任务失败！",
		parsingFailed: "视频信息解析失败！",
		autoFollowFailed: "自动关注视频作者失败！",
		autoLikeFailed: "自动点赞视频失败！"
	};
	var en_default = {
		appName: "Iwara Download Tool",
		language: "Language: ",
		downloadPriority: "Download Quality: ",
		downloadPath: "Download Path: ",
		downloadProxy: "Download Proxy: ",
		downloadProxyUsername: "Download Proxy Username: ",
		downloadProxyPassword: "Download Proxy Password: ",
		aria2Path: "Aria2 RPC: ",
		aria2Token: "Aria2 Token: ",
		iwaraDownloaderPath: "IwaraDownloader RPC: ",
		iwaraDownloaderToken: "IwaraDownloader Token: ",
		experimentalFeatures: "Experimental Features",
		enableUnsafeMode: "Unsafe Mode (Use at your own risk)",
		rename: "Rename",
		save: "Save",
		reset: "Reset",
		ok: "OK",
		on: "On",
		off: "Off",
		delete: "Delete",
		deleteSucceed: "Deletion successful!",
		isDebug: "Debug Mode",
		downloadType: "Download Type",
		browserDownload: "Browser Download",
		iwaraDownloaderDownload: "IwaraDownloader Download",
		autoFollow: "Automatically follow the selected video author",
		autoLike: "Automatically like the selected videos",
		addUnlistedAndPrivate: "Force display unlisted and private videos (requires following the author)",
		parseUnlistedAndPrivate: "Parse recent unlisted and private videos",
		checkDownloadLink: "Check third-party cloud storage download links",
		checkPriority: "Check download quality",
		autoDownloadMetadata: "Auto-download metadata",
		videoMetadata: "Video Metadata",
		autoInjectCheckbox: "Automatically inject selection box",
		autoCopySaveFileName: "Automatically copy the filename generated by rules",
		configurationIncompatible: "Initialization or configuration file incompatible, please reconfigure!",
		browserDownloadNotEnabled: "Download feature not enabled!",
		browserDownloadNotWhitelisted: "Requested file extension not whitelisted!",
		browserDownloadNotPermitted: "Download feature enabled, but permission not granted!",
		browserDownloadNotSupported: "Current browser/version does not support download functionality!",
		browserDownloadNotSucceeded: "Download did not start or failed!",
		browserDownloadUnknownError: "Unknown error, possibly due to invalid download parameters. Please check if the filename is valid!",
		browserDownloadTimeout: "Download timed out. Please check your network connection!",
		variable: "View available variables",
		downloadTime: "Download Time ",
		uploadTime: "Upload Time ",
		example: "Example: ",
		result: "Result: ",
		loadingCompleted: "Loading completed",
		settings: "Open Settings",
		downloadThis: "Download current video",
		manualDownload: "Manually specify download",
		aria2TaskCheck: "Aria2 Task Restart",
		reverseSelect: "Reverse selection on this page",
		deselectThis: "Deselect on this page",
		deselectAll: "Deselect all",
		selectThis: "Select all on this page",
		selected: "Selected",
		downloadSelected: "Download selected",
		downloadingSelected: "Downloading selected, please wait...",
		injectCheckbox: "Toggle selection box",
		configError: "There is an error in the script configuration. Please modify.",
		alreadyKnowHowToUse: "I already know how to use it!!!",
		notice: [
			"Loading Complete",
			{
				nodeType: "br"
			},
			"Notice: ",
			{
				nodeType: "br"
			},
			"Optimized notification display module, smoother animations (rewrote Toastify JS)"
		],
		useHelpForBase: "Please read the usage guide carefully!",
		useHelpForInjectCheckbox: 'Enable "%#autoInjectCheckbox#%" for a better experience! Or wait for video cards to load, then click [%#injectCheckbox#%] in the sidebar to enable the selection box.',
		useHelpForCheckDownloadLink: 'Enabling "%#checkDownloadLink#%" will check the video description and comments before downloading. If third-party cloud storage links are found, a prompt will appear allowing you to visit the video page.',
		useHelpForManualDownload: [
			'To use manual download, provide the video ID. For batch manual download, use "|" to separate video IDs.',
			{
				nodeType: "br"
			},
			"Example: AeGUIRO2D5vQ6F|qQsUMJa19LcK3L",
			{
				nodeType: "br"
			},
			"Or provide an array of objects in JSON format matching the following structure:",
			{
				nodeType: "br"
			},
			"[ ID: string, { Title?: string, Alias?: string, Author?: string } ]",
			{
				nodeType: "br"
			},
			"Example: ",
			{
				nodeType: "br"
			},
			`[["AeGUIRO2D5vQ6F", { Title: "237 Robin", Alias: "Riding Cow Chasing Weaving Maiden", Author: "user1528210" }],["qQsUMJa19LcK3L", { Title: "Mika Automotive Extradimensional", Alias: "Temptation's Symphony", Author: "temptations_symphony" }]]`
		],
		useHelpForBugreport: [
			"To report bugs or usage issues, please visit: ",
			{
				nodeType: "a",
				childs: "Github",
				attributes: {
					href: "https://github.com/dawn-lc/IwaraDownloadTool/"
				}
			}
		],
		tryRestartingDownload: "→ Click here to restart download ←",
		tryReparseDownload: "→ Click here to reparse ←",
		cdnCacheFinded: "→ Visit MMD Fans Cache Page ←",
		openVideoLink: "→ Visit Video Page ←",
		copySucceed: "Copy succeeded!",
		pushTaskSucceed: "Task pushed successfully!",
		connectionTest: "Connection Test",
		settingsCheck: "Settings Check",
		createTask: "Create Task",
		downloadPathError: "Download path error!",
		browserDownloadModeError: "Please enable the browser API download mode in the script manager!",
		downloadQualityError: "Specified quality download URL not found!",
		findedDownloadLink: "Possible third-party cloud storage link found!",
		allCompleted: "All parsing completed!",
		parsing: "Parsing...",
		following: "Following",
		parsingProgress: "Parsing Progress: ",
		manualDownloadTips: `For individual downloads, input the video ID here. For batch downloads, separate video IDs with "|". Example: AeGUIRO2D5vQ6F|qQsUMJa19LcK3L\r
Or provide an array of objects in JSON format matching the following structure:\r
{ key: string, value: { Title?: string, Alias?: string, Author?: string } }\r
Example: \r
[{ key: "AeGUIRO2D5vQ6F", value: { Title: "237 Robin", Alias: "Riding Cow Chasing Weaving Maiden", Author: "user1528210" } },{ key: "qQsUMJa19LcK3L", value: { Title: "Mika Automotive Extradimensional", Alias: "Temptation's Symphony", Author: "temptations_symphony" } }]`,
		externalVideo: "External Video",
		noAvailableVideoSource: "No available video sources",
		videoSourceNotAvailable: "Video source URL unavailable",
		getVideoSourceFailed: "Failed to get video source",
		downloadFailed: "Download failed!",
		downloadThisFailed: "No downloadable video found!",
		pushTaskFailed: "Failed to push download task!",
		parsingFailed: "Failed to parse video information!",
		autoFollowFailed: "Failed to auto-follow the video author!",
		autoLikeFailed: "Failed to auto-like the video!"
	};
	var i18nList = {
		zh: zh_cn_default,
		en: en_default
	};
	var Path = class {
		constructor(inputPath) {
			if (inputPath === "") {
				throw new Error("路径不能为空");
			}
			if (this.isUNC(inputPath)) {
				throw new Error("不接受UNC路径");
			}
			const detectedType = this.detectPathType(inputPath);
			this.validatePath(inputPath, detectedType);
			const normalized = this.normalizePath(inputPath, detectedType);
			const directory = this.extractDirectory(normalized, detectedType);
			const fileName = this.extractFileName(normalized, detectedType);
			const {
				baseName,
				extension
			} = this.extractBaseAndExtension(fileName);
			this.type = detectedType;
			this.fullPath = normalized;
			this.directory = directory;
			this.fullName = fileName;
			this.baseName = baseName;
			this.extension = extension;
		}
		isUNC (path) {
			return path.startsWith("\\\\");
		}
		detectPathType (path) {
			if (/^[A-Za-z]:[\\/]/.test(path)) {
				return "Windows";
			}
			if (path.startsWith("/")) {
				return "Unix";
			}
			return "Relative";
		}
		validatePath (path, type2) {
			const invalidChars = /[<>:"|?*]/;
			if (type2 === "Windows") {
				if (!/^[A-Za-z]:[\\/]/.test(path)) {
					throw new Error("无效的Windows路径格式");
				}
				const segments = path.split(/[\\/]/);
				for (let i = 1; i < segments.length; i++) {
					let segment = segments[i];
					let variables = [...segment.matchAll(/%#(.*?)#%/g)].map((match) => {
						let variable = match[1].split(":");
						if (variable.length > 1) {
							if (invalidChars.test(variable[1])) {
								throw new Error(`路径变量格式化参数 "${variable[1]}" 含有非法字符`);
							}
						}
						return match[1];
					});
					for (let index = 0; index < variables.length; index++) {
						const variable = variables[index];
						segment = segment.replaceAll(variable, "");
					}
					if (invalidChars.test(segment)) {
						throw new Error(`路径段 "${segments[i]}" 含有非法字符`);
					}
				}
			} else if (type2 === "Unix") {
				if (path.indexOf("\0") !== -1) {
					throw new Error("路径中包含非法空字符");
				}
			} else if (type2 === "Relative") {
				if (path.indexOf("\0") !== -1) {
					throw new Error("路径中包含非法空字符");
				}
				if (invalidChars.test(path)) {
					throw new Error("路径含有非法字符");
				}
			}
		}
		normalizePath (path, type2) {
			const sep = type2 === "Windows" ? "\\" : "/";
			if (type2 === "Windows") {
				path = path.replace(/\//g, "\\");
				path = path.replace(/\\+/g, "\\");
			} else {
				path = path.replace(/\\/g, "/");
				path = path.replace(/\/+/g, "/");
			}
			let segments;
			if (type2 === "Windows") {
				segments = path.split("\\");
			} else {
				segments = path.split("/");
			}
			let isAbsolute = false;
			let prefix = "";
			if (type2 === "Windows") {
				if (/^[A-Za-z]:$/.test(segments[0])) {
					isAbsolute = true;
					prefix = segments[0];
					segments = segments.slice(1);
				}
			} else if (type2 === "Unix") {
				if (path.startsWith("/")) {
					isAbsolute = true;
					if (segments[0] === "") {
						segments = segments.slice(1);
					}
				}
			} else {
				isAbsolute = false;
			}
			const resolvedSegments = this.resolveSegments(segments, isAbsolute);
			let normalized = "";
			if (type2 === "Windows") {
				normalized = prefix ? prefix + sep + resolvedSegments.join(sep) : resolvedSegments.join(sep);
				if (prefix && normalized === prefix) {
					normalized += sep;
				}
			} else if (type2 === "Unix") {
				normalized = (isAbsolute ? sep : "") + resolvedSegments.join(sep);
				if (isAbsolute && normalized === "") {
					normalized = sep;
				}
			} else {
				normalized = resolvedSegments.join(sep);
			}
			return normalized;
		}
		resolveSegments (segments, isAbsolute) {
			const stack = [];
			for (const segment of segments) {
				if (segment === "" || segment === ".") continue;
				if (segment === "..") {
					if (stack.length > 0 && stack[stack.length - 1] !== "..") {
						stack.pop();
					} else {
						if (isAbsolute) {
							throw new Error("绝对路径不能越界");
						} else {
							stack.push("..");
						}
					}
				} else {
					stack.push(segment);
				}
			}
			return stack;
		}
		extractDirectory (path, type2) {
			const sep = type2 === "Windows" ? "\\" : "/";
			if (type2 === "Windows" && /^[A-Za-z]:\\$/.test(path)) {
				return path;
			}
			if (type2 === "Unix" && path === "/") {
				return path;
			}
			const lastIndex = path.lastIndexOf(sep);
			return lastIndex === -1 ? "" : path.substring(0, lastIndex);
		}
		extractFileName (path, type2) {
			const sep = type2 === "Windows" ? "\\" : "/";
			const lastIndex = path.lastIndexOf(sep);
			return lastIndex === -1 ? path : path.substring(lastIndex + 1);
		}
		extractBaseAndExtension (fileName) {
			const lastDot = fileName.lastIndexOf(".");
			if (lastDot <= 0) {
				return {
					baseName: fileName,
					extension: ""
				};
			}
			const baseName = fileName.substring(0, lastDot);
			const extension = fileName.substring(lastDot + 1);
			return {
				baseName,
				extension
			};
		}
	};
	var Version = class _Version {
		constructor(versionString) {
			if (!versionString || typeof versionString !== "string") {
				throw new Error("Invalid version string");
			}
			const [version, preRelease, buildMetadata] = versionString.split(/[-+]/);
			const versionParts = version.split(".").map(Number);
			if (versionParts.some(isNaN)) {
				throw new Error("Version string contains invalid numbers");
			}
			this.major = versionParts[0] || 0;
			this.minor = versionParts.length > 1 ? versionParts[1] : 0;
			this.patch = versionParts.length > 2 ? versionParts[2] : 0;
			this.preRelease = preRelease ? preRelease.split(".") : [];
			this.buildMetadata = buildMetadata || "";
		}
		static compareValues (a, b) {
			if (a < b) return VersionState.Low;
			if (a > b) return VersionState.High;
			return VersionState.Equal;
		}
		compare (other) {
			let state = _Version.compareValues(this.major, other.major);
			if (state !== VersionState.Equal) return state;
			state = _Version.compareValues(this.minor, other.minor);
			if (state !== VersionState.Equal) return state;
			state = _Version.compareValues(this.patch, other.patch);
			if (state !== VersionState.Equal) return state;
			for (let i = 0; i < Math.max(this.preRelease.length, other.preRelease.length); i++) {
				const pre1 = this.preRelease[i] ?? "";
				const pre2 = other.preRelease[i] ?? "";
				state = _Version.compareValues(isNaN(+pre1) ? pre1 : +pre1, isNaN(+pre2) ? pre2 : +pre2);
				if (state !== VersionState.Equal) return state;
			}
			return VersionState.Equal;
		}
		toString () {
			const version = `${this.major}.${this.minor}.${this.patch}`;
			const preRelease = this.preRelease.length ? `-${this.preRelease.join(".")}` : "";
			const buildMetadata = this.buildMetadata ? `+${this.buildMetadata}` : "";
			return `${version}${preRelease}${buildMetadata}`;
		}
	};
	var Dictionary = class extends Map {
		constructor(data = []) {
			super(data);
		}
		toArray () {
			return Array.from(this);
		}
		keysArray () {
			return Array.from(this.keys());
		}
		valuesArray () {
			return Array.from(this.values());
		}
	};
	var SyncDictionary = class extends Dictionary {
		constructor(channelName, initial = []) {
			const hasInitial = prune(initial).any();
			super(hasInitial ? initial : void 0);
			this.timestamp = hasInitial ? Date.now() : 0;
			this.id = UUID();
			this.channel = new BroadcastChannel(channelName);
			this.channel.onmessage = ({
				data: msg
			}) => this.handleMessage(msg);
			this.channel.postMessage({
				type: "sync",
				id: this.id,
				timestamp: this.timestamp
			});
		}
		set (key, value) {
			this.timestamp = Date.now();
			super.set(key, value);
			this.channel.postMessage({
				type: "set",
				key,
				value,
				timestamp: this.timestamp,
				id: this.id
			});
			this.onSet?.(key, value);
			return this;
		}
		delete (key) {
			this.timestamp = Date.now();
			const existed = super.delete(key);
			this.channel.postMessage({
				type: "delete",
				key,
				timestamp: this.timestamp,
				id: this.id
			});
			if (existed) this.onDel?.(key);
			return existed;
		}
		clear () {
			this.timestamp = Date.now();
			super.clear();
			this.channel.postMessage({
				timestamp: this.timestamp,
				id: this.id,
				type: "state",
				state: super.toArray()
			});
			this.onSync?.();
		}
		handleMessage (msg) {
			if (msg.id === this.id) return;
			if (msg.type === "sync") {
				this.channel.postMessage({
					timestamp: this.timestamp,
					id: this.id,
					type: "state",
					state: super.toArray()
				});
				return;
			}
			if (msg.timestamp < this.timestamp) return;
			switch (msg.type) {
				case "state": {
					super.clear();
					for (let index = 0; index < msg.state.length; index++) {
						const [key, value] = msg.state[index];
						super.set(key, value);
					}
					this.onSync?.();
					break;
				}
				case "set": {
					const {
						key,
						value
					} = msg;
					super.set(key, value);
					this.onSet?.(key, value);
					break;
				}
				case "delete": {
					const {
						key
					} = msg;
					if (super.delete(key)) this.onDel?.(key);
					break;
				}
			}
			this.timestamp = Date.now();
		}
	};
	var MultiPage = class {
		constructor() {
			this.pageId = UUID();
			GM_saveTab({
				id: this.pageId
			});
			this.channel = new BroadcastChannel("page-status-channel");
			this.channel.onmessage = (event) => this.handleMessage(event.data);
			this.channel.postMessage({
				type: "join",
				id: this.pageId
			});
			this.beforeUnloadHandler = () => {
				this.channel.postMessage({
					type: "leave",
					id: this.pageId
				});
				originalAddEventListener.call(unsafeWindow.document, "beforeunload", this.beforeUnloadHandler);
			};
			originalAddEventListener.call(unsafeWindow.document, "beforeunload", this.beforeUnloadHandler);
		}
		suicide () {
			this.channel.postMessage({
				type: "suicide",
				id: this.pageId
			});
		}
		handleMessage (message) {
			switch (message.type) {
				case "suicide":
					if (this.pageId !== message.id) unsafeWindow.close();
				case "join":
					this.onPageJoin?.(message.id);
					break;
				case "leave":
					this.onPageLeave?.(message.id);
					GM_getTabs((tabs) => {
						if (Object.keys(tabs).length > 1) return;
						this.onLastPage?.();
					});
					break;
			}
		}
	};
	var DEFAULT_CONFIG = {
		language: "zh_cn",
		autoFollow: false,
		autoLike: false,
		autoCopySaveFileName: false,
		autoDownloadMetadata: false,
		enableUnsafeMode: false,
		experimentalFeatures: false,
		autoInjectCheckbox: true,
		checkDownloadLink: false,
		checkPriority: true,
		addUnlistedAndPrivate: false,
		downloadPriority: "Source",
		downloadType: DownloadType.Others,
		downloadPath: "/Iwara/%#AUTHOR#%/%#TITLE#%[%#ID#%].mp4",
		downloadProxy: "",
		downloadProxyUsername: "",
		downloadProxyPassword: "",
		aria2Path: "http://127.0.0.1:6800/jsonrpc",
		aria2Token: "",
		iwaraDownloaderPath: "http://127.0.0.1:6800/jsonrpc",
		iwaraDownloaderToken: "",
		priority: {
			"Source": 100,
			"540": 99,
			"360": 98,
			"preview": 1
		}
	};
	var Config = class _Config {
		constructor() {
			this.language = DEFAULT_CONFIG.language;
			this.autoFollow = DEFAULT_CONFIG.autoFollow;
			this.autoLike = DEFAULT_CONFIG.autoLike;
			this.autoCopySaveFileName = DEFAULT_CONFIG.autoCopySaveFileName;
			this.experimentalFeatures = DEFAULT_CONFIG.experimentalFeatures;
			this.enableUnsafeMode = DEFAULT_CONFIG.enableUnsafeMode;
			this.autoInjectCheckbox = DEFAULT_CONFIG.autoInjectCheckbox;
			this.checkDownloadLink = DEFAULT_CONFIG.checkDownloadLink;
			this.checkPriority = DEFAULT_CONFIG.checkPriority;
			this.addUnlistedAndPrivate = DEFAULT_CONFIG.addUnlistedAndPrivate;
			this.downloadPriority = DEFAULT_CONFIG.downloadPriority;
			this.downloadType = DEFAULT_CONFIG.downloadType;
			this.downloadPath = DEFAULT_CONFIG.downloadPath;
			this.downloadProxy = DEFAULT_CONFIG.downloadProxy;
			this.downloadProxyUsername = DEFAULT_CONFIG.downloadProxyUsername;
			this.downloadProxyPassword = DEFAULT_CONFIG.downloadProxyPassword;
			this.aria2Path = DEFAULT_CONFIG.aria2Path;
			this.aria2Token = DEFAULT_CONFIG.aria2Token;
			this.iwaraDownloaderPath = DEFAULT_CONFIG.iwaraDownloaderPath;
			this.iwaraDownloaderToken = DEFAULT_CONFIG.iwaraDownloaderToken;
			this.priority = DEFAULT_CONFIG.priority;
			this.autoDownloadMetadata = DEFAULT_CONFIG.autoDownloadMetadata;
			let body = new Proxy(this, {
				get: function (target, property) {
					if (property === "configChange") {
						return target.configChange;
					}
					let value = GM_getValue(property, target[property]);
					if (property === "language") {
						return _Config.getLanguage(value);
					}
					GM_getValue("isDebug") && originalConsole.debug(`[Debug] get: ${property} ${/password/i.test(property) || /token/i.test(property) || /authorization/i.test(property) ? "凭证已隐藏" : stringify(value)}`);
					return value;
				},
				set: function (target, property, value) {
					if (property === "configChange") {
						target.configChange = value;
						return true;
					}
					GM_setValue(property, value);
					GM_getValue("isDebug") && originalConsole.debug(`[Debug] set: ${property} ${/password/i.test(property) || /token/i.test(property) || /authorization/i.test(property) ? "凭证已隐藏" : stringify(value)}`);
					if (!isNullOrUndefined(target.configChange)) target.configChange(property);
					return true;
				}
			});
			GM_listValues().forEach((value) => {
				GM_addValueChangeListener(value, (name, old_value, new_value, remote) => {
					GM_getValue("isDebug") && originalConsole.debug(`[Debug] Config Change Is Remote: ${remote} Change Value: ${name}`);
					if (remote && !isNullOrUndefined(body.configChange)) body.configChange(name);
				});
			});
			return body;
		}
		static getLanguage (value) {
			function formatLanguage (value2) {
				return value2.replace("-", "_").toLowerCase();
			}
			function getMainLanguage (value2) {
				return value2.split("_").shift();
			}
			let custom = formatLanguage(value ?? DEFAULT_CONFIG.language);
			if (!isNullOrUndefined(custom)) {
				if (!isNullOrUndefined(i18nList[custom])) {
					return custom;
				} else {
					let customMain = getMainLanguage(custom);
					if (!isNullOrUndefined(i18nList[customMain])) {
						return customMain;
					}
				}
			}
			let env = formatLanguage(navigator.language ?? navigator.languages[0] ?? DEFAULT_CONFIG.language);
			if (!isNullOrUndefined(i18nList[env])) {
				return env;
			} else {
				let main2 = getMainLanguage(env);
				if (!isNullOrUndefined(i18nList[main2])) {
					return main2;
				}
			}
			return DEFAULT_CONFIG.language;
		}
		static getInstance () {
			if (isNullOrUndefined(_Config.instance)) _Config.instance = new _Config();
			return _Config.instance;
		}
		static destroyInstance () {
			_Config.instance = void 0;
		}
	};
	var config = Config.getInstance();
	var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
	var keys = Object.keys;
	var isArray2 = Array.isArray;
	if (typeof Promise !== "undefined" && !_global.Promise) {
		_global.Promise = Promise;
	}
	function extend (obj, extension) {
		if (typeof extension !== "object")
			return obj;
		keys(extension).forEach(function (key) {
			obj[key] = extension[key];
		});
		return obj;
	}
	var getProto = Object.getPrototypeOf;
	var _hasOwn = {}.hasOwnProperty;
	function hasOwn (obj, prop) {
		return _hasOwn.call(obj, prop);
	}
	function props (proto, extension) {
		if (typeof extension === "function")
			extension = extension(getProto(proto));
		(typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach((key) => {
			setProp(proto, key, extension[key]);
		});
	}
	var defineProperty = Object.defineProperty;
	function setProp (obj, prop, functionOrGetSet, options) {
		defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } : { value: functionOrGetSet, configurable: true, writable: true }, options));
	}
	function derive (Child) {
		return {
			from: function (Parent) {
				Child.prototype = Object.create(Parent.prototype);
				setProp(Child.prototype, "constructor", Child);
				return {
					extend: props.bind(null, Child.prototype)
				};
			}
		};
	}
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	function getPropertyDescriptor (obj, prop) {
		const pd = getOwnPropertyDescriptor(obj, prop);
		let proto;
		return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
	}
	var _slice = [].slice;
	function slice (args, start, end) {
		return _slice.call(args, start, end);
	}
	function override (origFunc, overridedFactory) {
		return overridedFactory(origFunc);
	}
	function assert (b) {
		if (!b)
			throw new Error("Assertion Failed");
	}
	function asap$1 (fn) {
		if (_global.setImmediate)
			setImmediate(fn);
		else
			setTimeout(fn, 0);
	}
	function arrayToObject (array, extractor) {
		return array.reduce((result, item, i) => {
			var nameAndValue = extractor(item, i);
			if (nameAndValue)
				result[nameAndValue[0]] = nameAndValue[1];
			return result;
		}, {});
	}
	function tryCatch (fn, onerror, args) {
		try {
			fn.apply(null, args);
		} catch (ex) {
			onerror && onerror(ex);
		}
	}
	function getByKeyPath (obj, keyPath) {
		if (typeof keyPath === "string" && hasOwn(obj, keyPath))
			return obj[keyPath];
		if (!keyPath)
			return obj;
		if (typeof keyPath !== "string") {
			var rv = [];
			for (var i = 0, l = keyPath.length; i < l; ++i) {
				var val = getByKeyPath(obj, keyPath[i]);
				rv.push(val);
			}
			return rv;
		}
		var period = keyPath.indexOf(".");
		if (period !== -1) {
			var innerObj = obj[keyPath.substr(0, period)];
			return innerObj == null ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
		}
		return void 0;
	}
	function setByKeyPath (obj, keyPath, value) {
		if (!obj || keyPath === void 0)
			return;
		if ("isFrozen" in Object && Object.isFrozen(obj))
			return;
		if (typeof keyPath !== "string" && "length" in keyPath) {
			assert(typeof value !== "string" && "length" in value);
			for (var i = 0, l = keyPath.length; i < l; ++i) {
				setByKeyPath(obj, keyPath[i], value[i]);
			}
		} else {
			var period = keyPath.indexOf(".");
			if (period !== -1) {
				var currentKeyPath = keyPath.substr(0, period);
				var remainingKeyPath = keyPath.substr(period + 1);
				if (remainingKeyPath === "")
					if (value === void 0) {
						if (isArray2(obj) && !isNaN(parseInt(currentKeyPath)))
							obj.splice(currentKeyPath, 1);
						else
							delete obj[currentKeyPath];
					} else
						obj[currentKeyPath] = value;
				else {
					var innerObj = obj[currentKeyPath];
					if (!innerObj || !hasOwn(obj, currentKeyPath))
						innerObj = obj[currentKeyPath] = {};
					setByKeyPath(innerObj, remainingKeyPath, value);
				}
			} else {
				if (value === void 0) {
					if (isArray2(obj) && !isNaN(parseInt(keyPath)))
						obj.splice(keyPath, 1);
					else
						delete obj[keyPath];
				} else
					obj[keyPath] = value;
			}
		}
	}
	function delByKeyPath (obj, keyPath) {
		if (typeof keyPath === "string")
			setByKeyPath(obj, keyPath, void 0);
		else if ("length" in keyPath)
			[].map.call(keyPath, function (kp) {
				setByKeyPath(obj, kp, void 0);
			});
	}
	function shallowClone (obj) {
		var rv = {};
		for (var m in obj) {
			if (hasOwn(obj, m))
				rv[m] = obj[m];
		}
		return rv;
	}
	var concat = [].concat;
	function flatten (a) {
		return concat.apply([], a);
	}
	var intrinsicTypeNames = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map((num) => ["Int", "Uint", "Float"].map((t) => t + num + "Array")))).filter((t) => _global[t]);
	var intrinsicTypes = intrinsicTypeNames.map((t) => _global[t]);
	arrayToObject(intrinsicTypeNames, (x) => [x, true]);
	var circularRefs = null;
	function deepClone (any) {
		circularRefs = typeof WeakMap !== "undefined" && new WeakMap();
		const rv = innerDeepClone(any);
		circularRefs = null;
		return rv;
	}
	function innerDeepClone (any) {
		if (!any || typeof any !== "object")
			return any;
		let rv = circularRefs && circularRefs.get(any);
		if (rv)
			return rv;
		if (isArray2(any)) {
			rv = [];
			circularRefs && circularRefs.set(any, rv);
			for (var i = 0, l = any.length; i < l; ++i) {
				rv.push(innerDeepClone(any[i]));
			}
		} else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
			rv = any;
		} else {
			const proto = getProto(any);
			rv = proto === Object.prototype ? {} : Object.create(proto);
			circularRefs && circularRefs.set(any, rv);
			for (var prop in any) {
				if (hasOwn(any, prop)) {
					rv[prop] = innerDeepClone(any[prop]);
				}
			}
		}
		return rv;
	}
	var { toString } = {};
	function toStringTag (o) {
		return toString.call(o).slice(8, -1);
	}
	var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
	var getIteratorOf = typeof iteratorSymbol === "symbol" ? function (x) {
		var i;
		return x != null && (i = x[iteratorSymbol]) && i.apply(x);
	} : function () {
		return null;
	};
	var NO_CHAR_ARRAY = {};
	function getArrayOf (arrayLike) {
		var i, a, x, it;
		if (arguments.length === 1) {
			if (isArray2(arrayLike))
				return arrayLike.slice();
			if (this === NO_CHAR_ARRAY && typeof arrayLike === "string")
				return [arrayLike];
			if (it = getIteratorOf(arrayLike)) {
				a = [];
				while (x = it.next(), !x.done)
					a.push(x.value);
				return a;
			}
			if (arrayLike == null)
				return [arrayLike];
			i = arrayLike.length;
			if (typeof i === "number") {
				a = new Array(i);
				while (i--)
					a[i] = arrayLike[i];
				return a;
			}
			return [arrayLike];
		}
		i = arguments.length;
		a = new Array(i);
		while (i--)
			a[i] = arguments[i];
		return a;
	}
	var isAsyncFunction = typeof Symbol !== "undefined" ? (fn) => fn[Symbol.toStringTag] === "AsyncFunction" : () => false;
	var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
	function setDebug (value, filter) {
		debug = value;
		libraryFilter = filter;
	}
	var libraryFilter = () => true;
	var NEEDS_THROW_FOR_STACK = !new Error("").stack;
	function getErrorWithStack () {
		if (NEEDS_THROW_FOR_STACK)
			try {
				getErrorWithStack.arguments;
				throw new Error();
			} catch (e) {
				return e;
			}
		return new Error();
	}
	function prettyStack (exception, numIgnoredFrames) {
		var stack = exception.stack;
		if (!stack)
			return "";
		numIgnoredFrames = numIgnoredFrames || 0;
		if (stack.indexOf(exception.name) === 0)
			numIgnoredFrames += (exception.name + exception.message).split("\n").length;
		return stack.split("\n").slice(numIgnoredFrames).filter(libraryFilter).map((frame) => "\n" + frame).join("");
	}
	var dexieErrorNames = [
		"Modify",
		"Bulk",
		"OpenFailed",
		"VersionChange",
		"Schema",
		"Upgrade",
		"InvalidTable",
		"MissingAPI",
		"NoSuchDatabase",
		"InvalidArgument",
		"SubTransaction",
		"Unsupported",
		"Internal",
		"DatabaseClosed",
		"PrematureCommit",
		"ForeignAwait"
	];
	var idbDomErrorNames = [
		"Unknown",
		"Constraint",
		"Data",
		"TransactionInactive",
		"ReadOnly",
		"Version",
		"NotFound",
		"InvalidState",
		"InvalidAccess",
		"Abort",
		"Timeout",
		"QuotaExceeded",
		"Syntax",
		"DataClone"
	];
	var errorList = dexieErrorNames.concat(idbDomErrorNames);
	var defaultTexts = {
		VersionChanged: "Database version changed by other database connection",
		DatabaseClosed: "Database has been closed",
		Abort: "Transaction aborted",
		TransactionInactive: "Transaction has already completed or failed",
		MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
	};
	function DexieError (name, msg) {
		this._e = getErrorWithStack();
		this.name = name;
		this.message = msg;
	}
	derive(DexieError).from(Error).extend({
		stack: {
			get: function () {
				return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
			}
		},
		toString: function () {
			return this.name + ": " + this.message;
		}
	});
	function getMultiErrorMessage (msg, failures) {
		return msg + ". Errors: " + Object.keys(failures).map((key) => failures[key].toString()).filter((v, i, s) => s.indexOf(v) === i).join("\n");
	}
	function ModifyError (msg, failures, successCount, failedKeys) {
		this._e = getErrorWithStack();
		this.failures = failures;
		this.failedKeys = failedKeys;
		this.successCount = successCount;
		this.message = getMultiErrorMessage(msg, failures);
	}
	derive(ModifyError).from(DexieError);
	function BulkError (msg, failures) {
		this._e = getErrorWithStack();
		this.name = "BulkError";
		this.failures = Object.keys(failures).map((pos) => failures[pos]);
		this.failuresByPos = failures;
		this.message = getMultiErrorMessage(msg, failures);
	}
	derive(BulkError).from(DexieError);
	var errnames = errorList.reduce((obj, name) => (obj[name] = name + "Error", obj), {});
	var BaseException = DexieError;
	var exceptions = errorList.reduce((obj, name) => {
		var fullName = name + "Error";
		function DexieError2 (msgOrInner, inner) {
			this._e = getErrorWithStack();
			this.name = fullName;
			if (!msgOrInner) {
				this.message = defaultTexts[name] || fullName;
				this.inner = null;
			} else if (typeof msgOrInner === "string") {
				this.message = `${msgOrInner}${!inner ? "" : "\n " + inner}`;
				this.inner = inner || null;
			} else if (typeof msgOrInner === "object") {
				this.message = `${msgOrInner.name} ${msgOrInner.message}`;
				this.inner = msgOrInner;
			}
		}
		derive(DexieError2).from(BaseException);
		obj[name] = DexieError2;
		return obj;
	}, {});
	exceptions.Syntax = SyntaxError;
	exceptions.Type = TypeError;
	exceptions.Range = RangeError;
	var exceptionMap = idbDomErrorNames.reduce((obj, name) => {
		obj[name + "Error"] = exceptions[name];
		return obj;
	}, {});
	function mapError (domError, message) {
		if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
			return domError;
		var rv = new exceptionMap[domError.name](message || domError.message, domError);
		if ("stack" in domError) {
			setProp(rv, "stack", {
				get: function () {
					return this.inner.stack;
				}
			});
		}
		return rv;
	}
	var fullNameExceptions = errorList.reduce((obj, name) => {
		if (["Syntax", "Type", "Range"].indexOf(name) === -1)
			obj[name + "Error"] = exceptions[name];
		return obj;
	}, {});
	fullNameExceptions.ModifyError = ModifyError;
	fullNameExceptions.DexieError = DexieError;
	fullNameExceptions.BulkError = BulkError;
	function nop () {
	}
	function mirror (val) {
		return val;
	}
	function pureFunctionChain (f1, f2) {
		if (f1 == null || f1 === mirror)
			return f2;
		return function (val) {
			return f2(f1(val));
		};
	}
	function callBoth (on1, on2) {
		return function () {
			on1.apply(this, arguments);
			on2.apply(this, arguments);
		};
	}
	function hookCreatingChain (f1, f2) {
		if (f1 === nop)
			return f2;
		return function () {
			var res = f1.apply(this, arguments);
			if (res !== void 0)
				arguments[0] = res;
			var onsuccess = this.onsuccess, onerror = this.onerror;
			this.onsuccess = null;
			this.onerror = null;
			var res2 = f2.apply(this, arguments);
			if (onsuccess)
				this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
			if (onerror)
				this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
			return res2 !== void 0 ? res2 : res;
		};
	}
	function hookDeletingChain (f1, f2) {
		if (f1 === nop)
			return f2;
		return function () {
			f1.apply(this, arguments);
			var onsuccess = this.onsuccess, onerror = this.onerror;
			this.onsuccess = this.onerror = null;
			f2.apply(this, arguments);
			if (onsuccess)
				this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
			if (onerror)
				this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
		};
	}
	function hookUpdatingChain (f1, f2) {
		if (f1 === nop)
			return f2;
		return function (modifications) {
			var res = f1.apply(this, arguments);
			extend(modifications, res);
			var onsuccess = this.onsuccess, onerror = this.onerror;
			this.onsuccess = null;
			this.onerror = null;
			var res2 = f2.apply(this, arguments);
			if (onsuccess)
				this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
			if (onerror)
				this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
			return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
		};
	}
	function reverseStoppableEventChain (f1, f2) {
		if (f1 === nop)
			return f2;
		return function () {
			if (f2.apply(this, arguments) === false)
				return false;
			return f1.apply(this, arguments);
		};
	}
	function promisableChain (f1, f2) {
		if (f1 === nop)
			return f2;
		return function () {
			var res = f1.apply(this, arguments);
			if (res && typeof res.then === "function") {
				var thiz = this, i = arguments.length, args = new Array(i);
				while (i--)
					args[i] = arguments[i];
				return res.then(function () {
					return f2.apply(thiz, args);
				});
			}
			return f2.apply(this, arguments);
		};
	}
	var INTERNAL = {};
	var LONG_STACKS_CLIP_LIMIT = 100, MAX_LONG_STACKS = 20, ZONE_ECHO_LIMIT = 100, [resolvedNativePromise, nativePromiseProto, resolvedGlobalPromise] = typeof Promise === "undefined" ? [] : (() => {
		let globalP = Promise.resolve();
		if (typeof crypto === "undefined" || !crypto.subtle)
			return [globalP, getProto(globalP), globalP];
		const nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
		return [
			nativeP,
			getProto(nativeP),
			globalP
		];
	})(), nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
	var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
	var patchGlobalPromise = !!resolvedGlobalPromise;
	var stack_being_generated = false;
	var schedulePhysicalTick = resolvedGlobalPromise ? () => {
		resolvedGlobalPromise.then(physicalTick);
	} : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? () => {
		var hiddenDiv = document.createElement("div");
		new MutationObserver(() => {
			physicalTick();
			hiddenDiv = null;
		}).observe(hiddenDiv, { attributes: true });
		hiddenDiv.setAttribute("i", "1");
	} : () => {
		setTimeout(physicalTick, 0);
	};
	var asap = function (callback, args) {
		microtickQueue.push([callback, args]);
		if (needsNewPhysicalTick) {
			schedulePhysicalTick();
			needsNewPhysicalTick = false;
		}
	};
	var isOutsideMicroTick = true, needsNewPhysicalTick = true, unhandledErrors = [], rejectingErrors = [], currentFulfiller = null, rejectionMapper = mirror;
	var globalPSD = {
		id: "global",
		global: true,
		ref: 0,
		unhandleds: [],
		onunhandled: globalError,
		pgp: false,
		env: {},
		finalize: function () {
			this.unhandleds.forEach((uh) => {
				try {
					globalError(uh[0], uh[1]);
				} catch (e) {
				}
			});
		}
	};
	var PSD = globalPSD;
	var microtickQueue = [];
	var numScheduledCalls = 0;
	var tickFinalizers = [];
	function DexiePromise (fn) {
		if (typeof this !== "object")
			throw new TypeError("Promises must be constructed via new");
		this._listeners = [];
		this.onuncatched = nop;
		this._lib = false;
		var psd = this._PSD = PSD;
		if (debug) {
			this._stackHolder = getErrorWithStack();
			this._prev = null;
			this._numPrev = 0;
		}
		if (typeof fn !== "function") {
			if (fn !== INTERNAL)
				throw new TypeError("Not a function");
			this._state = arguments[1];
			this._value = arguments[2];
			if (this._state === false)
				handleRejection(this, this._value);
			return;
		}
		this._state = null;
		this._value = null;
		++psd.ref;
		executePromiseTask(this, fn);
	}
	var thenProp = {
		get: function () {
			var psd = PSD, microTaskId = totalEchoes;
			function then (onFulfilled, onRejected) {
				var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
				const cleanup = possibleAwait && !decrementExpectedAwaits();
				var rv = new DexiePromise((resolve, reject) => {
					propagateToListener(this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
				});
				debug && linkToPreviousPromise(rv, this);
				return rv;
			}
			then.prototype = INTERNAL;
			return then;
		},
		set: function (value) {
			setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
				get: function () {
					return value;
				},
				set: thenProp.set
			});
		}
	};
	props(DexiePromise.prototype, {
		then: thenProp,
		_then: function (onFulfilled, onRejected) {
			propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
		},
		catch: function (onRejected) {
			if (arguments.length === 1)
				return this.then(null, onRejected);
			var type2 = arguments[0], handler = arguments[1];
			return typeof type2 === "function" ? this.then(null, (err) => err instanceof type2 ? handler(err) : PromiseReject(err)) : this.then(null, (err) => err && err.name === type2 ? handler(err) : PromiseReject(err));
		},
		finally: function (onFinally) {
			return this.then((value) => {
				onFinally();
				return value;
			}, (err) => {
				onFinally();
				return PromiseReject(err);
			});
		},
		stack: {
			get: function () {
				if (this._stack)
					return this._stack;
				try {
					stack_being_generated = true;
					var stacks = getStack(this, [], MAX_LONG_STACKS);
					var stack = stacks.join("\nFrom previous: ");
					if (this._state !== null)
						this._stack = stack;
					return stack;
				} finally {
					stack_being_generated = false;
				}
			}
		},
		timeout: function (ms, msg) {
			return ms < Infinity ? new DexiePromise((resolve, reject) => {
				var handle = setTimeout(() => reject(new exceptions.Timeout(msg)), ms);
				this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
			}) : this;
		}
	});
	if (typeof Symbol !== "undefined" && Symbol.toStringTag)
		setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
	globalPSD.env = snapShot();
	function Listener (onFulfilled, onRejected, resolve, reject, zone) {
		this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
		this.onRejected = typeof onRejected === "function" ? onRejected : null;
		this.resolve = resolve;
		this.reject = reject;
		this.psd = zone;
	}
	props(DexiePromise, {
		all: function () {
			var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
			return new DexiePromise(function (resolve, reject) {
				if (values.length === 0)
					resolve([]);
				var remaining = values.length;
				values.forEach((a, i) => DexiePromise.resolve(a).then((x) => {
					values[i] = x;
					if (!--remaining)
						resolve(values);
				}, reject));
			});
		},
		resolve: (value) => {
			if (value instanceof DexiePromise)
				return value;
			if (value && typeof value.then === "function")
				return new DexiePromise((resolve, reject) => {
					value.then(resolve, reject);
				});
			var rv = new DexiePromise(INTERNAL, true, value);
			linkToPreviousPromise(rv, currentFulfiller);
			return rv;
		},
		reject: PromiseReject,
		race: function () {
			var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
			return new DexiePromise((resolve, reject) => {
				values.map((value) => DexiePromise.resolve(value).then(resolve, reject));
			});
		},
		PSD: {
			get: () => PSD,
			set: (value) => PSD = value
		},
		totalEchoes: { get: () => totalEchoes },
		newPSD: newScope,
		usePSD,
		scheduler: {
			get: () => asap,
			set: (value) => {
				asap = value;
			}
		},
		rejectionMapper: {
			get: () => rejectionMapper,
			set: (value) => {
				rejectionMapper = value;
			}
		},
		follow: (fn, zoneProps) => {
			return new DexiePromise((resolve, reject) => {
				return newScope((resolve2, reject2) => {
					var psd = PSD;
					psd.unhandleds = [];
					psd.onunhandled = reject2;
					psd.finalize = callBoth(function () {
						run_at_end_of_this_or_next_physical_tick(() => {
							this.unhandleds.length === 0 ? resolve2() : reject2(this.unhandleds[0]);
						});
					}, psd.finalize);
					fn();
				}, zoneProps, resolve, reject);
			});
		}
	});
	if (NativePromise) {
		if (NativePromise.allSettled)
			setProp(DexiePromise, "allSettled", function () {
				const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
				return new DexiePromise((resolve) => {
					if (possiblePromises.length === 0)
						resolve([]);
					let remaining = possiblePromises.length;
					const results = new Array(remaining);
					possiblePromises.forEach((p, i) => DexiePromise.resolve(p).then((value) => results[i] = { status: "fulfilled", value }, (reason) => results[i] = { status: "rejected", reason }).then(() => --remaining || resolve(results)));
				});
			});
		if (NativePromise.any && typeof AggregateError !== "undefined")
			setProp(DexiePromise, "any", function () {
				const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
				return new DexiePromise((resolve, reject) => {
					if (possiblePromises.length === 0)
						reject(new AggregateError([]));
					let remaining = possiblePromises.length;
					const failures = new Array(remaining);
					possiblePromises.forEach((p, i) => DexiePromise.resolve(p).then((value) => resolve(value), (failure) => {
						failures[i] = failure;
						if (!--remaining)
							reject(new AggregateError(failures));
					}));
				});
			});
	}
	function executePromiseTask (promise, fn) {
		try {
			fn((value) => {
				if (promise._state !== null)
					return;
				if (value === promise)
					throw new TypeError("A promise cannot be resolved with itself.");
				var shouldExecuteTick = promise._lib && beginMicroTickScope();
				if (value && typeof value.then === "function") {
					executePromiseTask(promise, (resolve, reject) => {
						value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
					});
				} else {
					promise._state = true;
					promise._value = value;
					propagateAllListeners(promise);
				}
				if (shouldExecuteTick)
					endMicroTickScope();
			}, handleRejection.bind(null, promise));
		} catch (ex) {
			handleRejection(promise, ex);
		}
	}
	function handleRejection (promise, reason) {
		rejectingErrors.push(reason);
		if (promise._state !== null)
			return;
		var shouldExecuteTick = promise._lib && beginMicroTickScope();
		reason = rejectionMapper(reason);
		promise._state = false;
		promise._value = reason;
		debug && reason !== null && typeof reason === "object" && !reason._promise && tryCatch(() => {
			var origProp = getPropertyDescriptor(reason, "stack");
			reason._promise = promise;
			setProp(reason, "stack", {
				get: () => stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack
			});
		});
		addPossiblyUnhandledError(promise);
		propagateAllListeners(promise);
		if (shouldExecuteTick)
			endMicroTickScope();
	}
	function propagateAllListeners (promise) {
		var listeners = promise._listeners;
		promise._listeners = [];
		for (var i = 0, len = listeners.length; i < len; ++i) {
			propagateToListener(promise, listeners[i]);
		}
		var psd = promise._PSD;
		--psd.ref || psd.finalize();
		if (numScheduledCalls === 0) {
			++numScheduledCalls;
			asap(() => {
				if (--numScheduledCalls === 0)
					finalizePhysicalTick();
			}, []);
		}
	}
	function propagateToListener (promise, listener) {
		if (promise._state === null) {
			promise._listeners.push(listener);
			return;
		}
		var cb = promise._state ? listener.onFulfilled : listener.onRejected;
		if (cb === null) {
			return (promise._state ? listener.resolve : listener.reject)(promise._value);
		}
		++listener.psd.ref;
		++numScheduledCalls;
		asap(callListener, [cb, promise, listener]);
	}
	function callListener (cb, promise, listener) {
		try {
			currentFulfiller = promise;
			var ret, value = promise._value;
			if (promise._state) {
				ret = cb(value);
			} else {
				if (rejectingErrors.length)
					rejectingErrors = [];
				ret = cb(value);
				if (rejectingErrors.indexOf(value) === -1)
					markErrorAsHandled(promise);
			}
			listener.resolve(ret);
		} catch (e) {
			listener.reject(e);
		} finally {
			currentFulfiller = null;
			if (--numScheduledCalls === 0)
				finalizePhysicalTick();
			--listener.psd.ref || listener.psd.finalize();
		}
	}
	function getStack (promise, stacks, limit) {
		if (stacks.length === limit)
			return stacks;
		var stack = "";
		if (promise._state === false) {
			var failure = promise._value, errorName, message;
			if (failure != null) {
				errorName = failure.name || "Error";
				message = failure.message || failure;
				stack = prettyStack(failure, 0);
			} else {
				errorName = failure;
				message = "";
			}
			stacks.push(errorName + (message ? ": " + message : "") + stack);
		}
		if (debug) {
			stack = prettyStack(promise._stackHolder, 2);
			if (stack && stacks.indexOf(stack) === -1)
				stacks.push(stack);
			if (promise._prev)
				getStack(promise._prev, stacks, limit);
		}
		return stacks;
	}
	function linkToPreviousPromise (promise, prev) {
		var numPrev = prev ? prev._numPrev + 1 : 0;
		if (numPrev < LONG_STACKS_CLIP_LIMIT) {
			promise._prev = prev;
			promise._numPrev = numPrev;
		}
	}
	function physicalTick () {
		beginMicroTickScope() && endMicroTickScope();
	}
	function beginMicroTickScope () {
		var wasRootExec = isOutsideMicroTick;
		isOutsideMicroTick = false;
		needsNewPhysicalTick = false;
		return wasRootExec;
	}
	function endMicroTickScope () {
		var callbacks, i, l;
		do {
			while (microtickQueue.length > 0) {
				callbacks = microtickQueue;
				microtickQueue = [];
				l = callbacks.length;
				for (i = 0; i < l; ++i) {
					var item = callbacks[i];
					item[0].apply(null, item[1]);
				}
			}
		} while (microtickQueue.length > 0);
		isOutsideMicroTick = true;
		needsNewPhysicalTick = true;
	}
	function finalizePhysicalTick () {
		var unhandledErrs = unhandledErrors;
		unhandledErrors = [];
		unhandledErrs.forEach((p) => {
			p._PSD.onunhandled.call(null, p._value, p);
		});
		var finalizers = tickFinalizers.slice(0);
		var i = finalizers.length;
		while (i)
			finalizers[--i]();
	}
	function run_at_end_of_this_or_next_physical_tick (fn) {
		function finalizer () {
			fn();
			tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
		}
		tickFinalizers.push(finalizer);
		++numScheduledCalls;
		asap(() => {
			if (--numScheduledCalls === 0)
				finalizePhysicalTick();
		}, []);
	}
	function addPossiblyUnhandledError (promise) {
		if (!unhandledErrors.some((p) => p._value === promise._value))
			unhandledErrors.push(promise);
	}
	function markErrorAsHandled (promise) {
		var i = unhandledErrors.length;
		while (i)
			if (unhandledErrors[--i]._value === promise._value) {
				unhandledErrors.splice(i, 1);
				return;
			}
	}
	function PromiseReject (reason) {
		return new DexiePromise(INTERNAL, false, reason);
	}
	function wrap (fn, errorCatcher) {
		var psd = PSD;
		return function () {
			var wasRootExec = beginMicroTickScope(), outerScope = PSD;
			try {
				switchToZone(psd, true);
				return fn.apply(this, arguments);
			} catch (e) {
				errorCatcher && errorCatcher(e);
			} finally {
				switchToZone(outerScope, false);
				if (wasRootExec)
					endMicroTickScope();
			}
		};
	}
	var task = { awaits: 0, echoes: 0, id: 0 };
	var taskCounter = 0;
	var zoneStack = [];
	var zoneEchoes = 0;
	var totalEchoes = 0;
	var zone_id_counter = 0;
	function newScope (fn, props2, a1, a2) {
		var parent = PSD, psd = Object.create(parent);
		psd.parent = parent;
		psd.ref = 0;
		psd.global = false;
		psd.id = ++zone_id_counter;
		var globalEnv = globalPSD.env;
		psd.env = patchGlobalPromise ? {
			Promise: DexiePromise,
			PromiseProp: { value: DexiePromise, configurable: true, writable: true },
			all: DexiePromise.all,
			race: DexiePromise.race,
			allSettled: DexiePromise.allSettled,
			any: DexiePromise.any,
			resolve: DexiePromise.resolve,
			reject: DexiePromise.reject,
			nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
			gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
		} : {};
		if (props2)
			extend(psd, props2);
		++parent.ref;
		psd.finalize = function () {
			--this.parent.ref || this.parent.finalize();
		};
		var rv = usePSD(psd, fn, a1, a2);
		if (psd.ref === 0)
			psd.finalize();
		return rv;
	}
	function incrementExpectedAwaits () {
		if (!task.id)
			task.id = ++taskCounter;
		++task.awaits;
		task.echoes += ZONE_ECHO_LIMIT;
		return task.id;
	}
	function decrementExpectedAwaits () {
		if (!task.awaits)
			return false;
		if (--task.awaits === 0)
			task.id = 0;
		task.echoes = task.awaits * ZONE_ECHO_LIMIT;
		return true;
	}
	if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
		incrementExpectedAwaits = decrementExpectedAwaits = nop;
	}
	function onPossibleParallellAsync (possiblePromise) {
		if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
			incrementExpectedAwaits();
			return possiblePromise.then((x) => {
				decrementExpectedAwaits();
				return x;
			}, (e) => {
				decrementExpectedAwaits();
				return rejection(e);
			});
		}
		return possiblePromise;
	}
	function zoneEnterEcho (targetZone) {
		++totalEchoes;
		if (!task.echoes || --task.echoes === 0) {
			task.echoes = task.id = 0;
		}
		zoneStack.push(PSD);
		switchToZone(targetZone, true);
	}
	function zoneLeaveEcho () {
		var zone = zoneStack[zoneStack.length - 1];
		zoneStack.pop();
		switchToZone(zone, false);
	}
	function switchToZone (targetZone, bEnteringZone) {
		var currentZone = PSD;
		if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
			enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
		}
		if (targetZone === PSD)
			return;
		PSD = targetZone;
		if (currentZone === globalPSD)
			globalPSD.env = snapShot();
		if (patchGlobalPromise) {
			var GlobalPromise = globalPSD.env.Promise;
			var targetEnv = targetZone.env;
			nativePromiseProto.then = targetEnv.nthen;
			GlobalPromise.prototype.then = targetEnv.gthen;
			if (currentZone.global || targetZone.global) {
				Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
				GlobalPromise.all = targetEnv.all;
				GlobalPromise.race = targetEnv.race;
				GlobalPromise.resolve = targetEnv.resolve;
				GlobalPromise.reject = targetEnv.reject;
				if (targetEnv.allSettled)
					GlobalPromise.allSettled = targetEnv.allSettled;
				if (targetEnv.any)
					GlobalPromise.any = targetEnv.any;
			}
		}
	}
	function snapShot () {
		var GlobalPromise = _global.Promise;
		return patchGlobalPromise ? {
			Promise: GlobalPromise,
			PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
			all: GlobalPromise.all,
			race: GlobalPromise.race,
			allSettled: GlobalPromise.allSettled,
			any: GlobalPromise.any,
			resolve: GlobalPromise.resolve,
			reject: GlobalPromise.reject,
			nthen: nativePromiseProto.then,
			gthen: GlobalPromise.prototype.then
		} : {};
	}
	function usePSD (psd, fn, a1, a2, a3) {
		var outerScope = PSD;
		try {
			switchToZone(psd, true);
			return fn(a1, a2, a3);
		} finally {
			switchToZone(outerScope, false);
		}
	}
	function enqueueNativeMicroTask (job) {
		nativePromiseThen.call(resolvedNativePromise, job);
	}
	function nativeAwaitCompatibleWrap (fn, zone, possibleAwait, cleanup) {
		return typeof fn !== "function" ? fn : function () {
			var outerZone = PSD;
			if (possibleAwait)
				incrementExpectedAwaits();
			switchToZone(zone, true);
			try {
				return fn.apply(this, arguments);
			} finally {
				switchToZone(outerZone, false);
				if (cleanup)
					enqueueNativeMicroTask(decrementExpectedAwaits);
			}
		};
	}
	function getPatchedPromiseThen (origThen, zone) {
		return function (onResolved, onRejected) {
			return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
		};
	}
	var UNHANDLEDREJECTION = "unhandledrejection";
	function globalError (err, promise) {
		var rv;
		try {
			rv = promise.onuncatched(err);
		} catch (e) {
		}
		if (rv !== false)
			try {
				var event, eventData = { promise, reason: err };
				if (_global.document && document.createEvent) {
					event = document.createEvent("Event");
					event.initEvent(UNHANDLEDREJECTION, true, true);
					extend(event, eventData);
				} else if (_global.CustomEvent) {
					event = new CustomEvent(UNHANDLEDREJECTION, { detail: eventData });
					extend(event, eventData);
				}
				if (event && _global.dispatchEvent) {
					dispatchEvent(event);
					if (!_global.PromiseRejectionEvent && _global.onunhandledrejection)
						try {
							_global.onunhandledrejection(event);
						} catch (_) {
						}
				}
				if (debug && event && !event.defaultPrevented) {
					console.warn(`Unhandled rejection: ${err.stack || err}`);
				}
			} catch (e) {
			}
	}
	var rejection = DexiePromise.reject;
	function tempTransaction (db2, mode, storeNames, fn) {
		if (!db2.idbdb || !db2._state.openComplete && (!PSD.letThrough && !db2._vip)) {
			if (db2._state.openComplete) {
				return rejection(new exceptions.DatabaseClosed(db2._state.dbOpenError));
			}
			if (!db2._state.isBeingOpened) {
				if (!db2._options.autoOpen)
					return rejection(new exceptions.DatabaseClosed());
				db2.open().catch(nop);
			}
			return db2._state.dbReadyPromise.then(() => tempTransaction(db2, mode, storeNames, fn));
		} else {
			var trans = db2._createTransaction(mode, storeNames, db2._dbSchema);
			try {
				trans.create();
				db2._state.PR1398_maxLoop = 3;
			} catch (ex) {
				if (ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0) {
					console.warn("Dexie: Need to reopen db");
					db2._close();
					return db2.open().then(() => tempTransaction(db2, mode, storeNames, fn));
				}
				return rejection(ex);
			}
			return trans._promise(mode, (resolve, reject) => {
				return newScope(() => {
					PSD.trans = trans;
					return fn(resolve, reject, trans);
				});
			}).then((result) => {
				return trans._completion.then(() => result);
			});
		}
	}
	var DEXIE_VERSION = "3.2.7";
	var maxString = String.fromCharCode(65535);
	var minKey = -Infinity;
	var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
	var STRING_EXPECTED = "String expected.";
	var connections = [];
	var isIEOrEdge = typeof navigator !== "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
	var hasIEDeleteObjectStoreBug = isIEOrEdge;
	var hangsOnDeleteLargeKeyRange = isIEOrEdge;
	var dexieStackFrameFilter = (frame) => !/(dexie\.js|dexie\.min\.js)/.test(frame);
	var DBNAMES_DB = "__dbnames";
	var READONLY = "readonly";
	var READWRITE = "readwrite";
	function combine (filter1, filter2) {
		return filter1 ? filter2 ? function () {
			return filter1.apply(this, arguments) && filter2.apply(this, arguments);
		} : filter1 : filter2;
	}
	var AnyRange = {
		type: 3,
		lower: -Infinity,
		lowerOpen: false,
		upper: [[]],
		upperOpen: false
	};
	function workaroundForUndefinedPrimKey (keyPath) {
		return typeof keyPath === "string" && !/\./.test(keyPath) ? (obj) => {
			if (obj[keyPath] === void 0 && keyPath in obj) {
				obj = deepClone(obj);
				delete obj[keyPath];
			}
			return obj;
		} : (obj) => obj;
	}
	var Table = class {
		_trans (mode, fn, writeLocked) {
			const trans = this._tx || PSD.trans;
			const tableName = this.name;
			function checkTableInTransaction (resolve, reject, trans2) {
				if (!trans2.schema[tableName])
					throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
				return fn(trans2.idbtrans, trans2);
			}
			const wasRootExec = beginMicroTickScope();
			try {
				return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(() => trans._promise(mode, checkTableInTransaction, writeLocked), { trans, transless: PSD.transless || PSD }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
			} finally {
				if (wasRootExec)
					endMicroTickScope();
			}
		}
		get (keyOrCrit, cb) {
			if (keyOrCrit && keyOrCrit.constructor === Object)
				return this.where(keyOrCrit).first(cb);
			return this._trans("readonly", (trans) => {
				return this.core.get({ trans, key: keyOrCrit }).then((res) => this.hook.reading.fire(res));
			}).then(cb);
		}
		where (indexOrCrit) {
			if (typeof indexOrCrit === "string")
				return new this.db.WhereClause(this, indexOrCrit);
			if (isArray2(indexOrCrit))
				return new this.db.WhereClause(this, `[${indexOrCrit.join("+")}]`);
			const keyPaths = keys(indexOrCrit);
			if (keyPaths.length === 1)
				return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
			const compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter((ix) => {
				if (ix.compound && keyPaths.every((keyPath) => ix.keyPath.indexOf(keyPath) >= 0)) {
					for (let i = 0; i < keyPaths.length; ++i) {
						if (keyPaths.indexOf(ix.keyPath[i]) === -1)
							return false;
					}
					return true;
				}
				return false;
			}).sort((a, b) => a.keyPath.length - b.keyPath.length)[0];
			if (compoundIndex && this.db._maxKey !== maxString) {
				const keyPathsInValidOrder = compoundIndex.keyPath.slice(0, keyPaths.length);
				return this.where(keyPathsInValidOrder).equals(keyPathsInValidOrder.map((kp) => indexOrCrit[kp]));
			}
			if (!compoundIndex && debug)
				console.warn(`The query ${JSON.stringify(indexOrCrit)} on ${this.name} would benefit of a compound index [${keyPaths.join("+")}]`);
			const { idxByName } = this.schema;
			const idb = this.db._deps.indexedDB;
			function equals (a, b) {
				try {
					return idb.cmp(a, b) === 0;
				} catch (e) {
					return false;
				}
			}
			const [idx, filterFunction] = keyPaths.reduce(([prevIndex, prevFilterFn], keyPath) => {
				const index = idxByName[keyPath];
				const value = indexOrCrit[keyPath];
				return [
					prevIndex || index,
					prevIndex || !index ? combine(prevFilterFn, index && index.multi ? (x) => {
						const prop = getByKeyPath(x, keyPath);
						return isArray2(prop) && prop.some((item) => equals(value, item));
					} : (x) => equals(value, getByKeyPath(x, keyPath))) : prevFilterFn
				];
			}, [null, null]);
			return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
		}
		filter (filterFunction) {
			return this.toCollection().and(filterFunction);
		}
		count (thenShortcut) {
			return this.toCollection().count(thenShortcut);
		}
		offset (offset) {
			return this.toCollection().offset(offset);
		}
		limit (numRows) {
			return this.toCollection().limit(numRows);
		}
		each (callback) {
			return this.toCollection().each(callback);
		}
		toArray (thenShortcut) {
			return this.toCollection().toArray(thenShortcut);
		}
		toCollection () {
			return new this.db.Collection(new this.db.WhereClause(this));
		}
		orderBy (index) {
			return new this.db.Collection(new this.db.WhereClause(this, isArray2(index) ? `[${index.join("+")}]` : index));
		}
		reverse () {
			return this.toCollection().reverse();
		}
		mapToClass (constructor) {
			this.schema.mappedClass = constructor;
			const readHook = (obj) => {
				if (!obj)
					return obj;
				const res = Object.create(constructor.prototype);
				for (var m in obj)
					if (hasOwn(obj, m))
						try {
							res[m] = obj[m];
						} catch (_) {
						}
				return res;
			};
			if (this.schema.readHook) {
				this.hook.reading.unsubscribe(this.schema.readHook);
			}
			this.schema.readHook = readHook;
			this.hook("reading", readHook);
			return constructor;
		}
		defineClass () {
			function Class (content) {
				extend(this, content);
			}
			return this.mapToClass(Class);
		}
		add (obj, key) {
			const { auto, keyPath } = this.schema.primKey;
			let objToAdd = obj;
			if (keyPath && auto) {
				objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
			}
			return this._trans("readwrite", (trans) => {
				return this.core.mutate({ trans, type: "add", keys: key != null ? [key] : null, values: [objToAdd] });
			}).then((res) => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then((lastResult) => {
				if (keyPath) {
					try {
						setByKeyPath(obj, keyPath, lastResult);
					} catch (_) {
					}
				}
				return lastResult;
			});
		}
		update (keyOrObject, modifications) {
			if (typeof keyOrObject === "object" && !isArray2(keyOrObject)) {
				const key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
				if (key === void 0)
					return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
				try {
					if (typeof modifications !== "function") {
						keys(modifications).forEach((keyPath) => {
							setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
						});
					} else {
						modifications(keyOrObject, { value: keyOrObject, primKey: key });
					}
				} catch (_a) {
				}
				return this.where(":id").equals(key).modify(modifications);
			} else {
				return this.where(":id").equals(keyOrObject).modify(modifications);
			}
		}
		put (obj, key) {
			const { auto, keyPath } = this.schema.primKey;
			let objToAdd = obj;
			if (keyPath && auto) {
				objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
			}
			return this._trans("readwrite", (trans) => this.core.mutate({ trans, type: "put", values: [objToAdd], keys: key != null ? [key] : null })).then((res) => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then((lastResult) => {
				if (keyPath) {
					try {
						setByKeyPath(obj, keyPath, lastResult);
					} catch (_) {
					}
				}
				return lastResult;
			});
		}
		delete (key) {
			return this._trans("readwrite", (trans) => this.core.mutate({ trans, type: "delete", keys: [key] })).then((res) => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
		}
		clear () {
			return this._trans("readwrite", (trans) => this.core.mutate({ trans, type: "deleteRange", range: AnyRange })).then((res) => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
		}
		bulkGet (keys2) {
			return this._trans("readonly", (trans) => {
				return this.core.getMany({
					keys: keys2,
					trans
				}).then((result) => result.map((res) => this.hook.reading.fire(res)));
			});
		}
		bulkAdd (objects, keysOrOptions, options) {
			const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
			options = options || (keys2 ? void 0 : keysOrOptions);
			const wantResults = options ? options.allKeys : void 0;
			return this._trans("readwrite", (trans) => {
				const { auto, keyPath } = this.schema.primKey;
				if (keyPath && keys2)
					throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (keys2 && keys2.length !== objects.length)
					throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
				const numObjects = objects.length;
				let objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
				return this.core.mutate({ trans, type: "add", keys: keys2, values: objectsToAdd, wantResults }).then(({ numFailures, results, lastResult, failures }) => {
					const result = wantResults ? results : lastResult;
					if (numFailures === 0)
						return result;
					throw new BulkError(`${this.name}.bulkAdd(): ${numFailures} of ${numObjects} operations failed`, failures);
				});
			});
		}
		bulkPut (objects, keysOrOptions, options) {
			const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
			options = options || (keys2 ? void 0 : keysOrOptions);
			const wantResults = options ? options.allKeys : void 0;
			return this._trans("readwrite", (trans) => {
				const { auto, keyPath } = this.schema.primKey;
				if (keyPath && keys2)
					throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (keys2 && keys2.length !== objects.length)
					throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
				const numObjects = objects.length;
				let objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
				return this.core.mutate({ trans, type: "put", keys: keys2, values: objectsToPut, wantResults }).then(({ numFailures, results, lastResult, failures }) => {
					const result = wantResults ? results : lastResult;
					if (numFailures === 0)
						return result;
					throw new BulkError(`${this.name}.bulkPut(): ${numFailures} of ${numObjects} operations failed`, failures);
				});
			});
		}
		bulkDelete (keys2) {
			const numKeys = keys2.length;
			return this._trans("readwrite", (trans) => {
				return this.core.mutate({ trans, type: "delete", keys: keys2 });
			}).then(({ numFailures, lastResult, failures }) => {
				if (numFailures === 0)
					return lastResult;
				throw new BulkError(`${this.name}.bulkDelete(): ${numFailures} of ${numKeys} operations failed`, failures);
			});
		}
	};
	function Events (ctx) {
		var evs = {};
		var rv = function (eventName, subscriber) {
			if (subscriber) {
				var i2 = arguments.length, args = new Array(i2 - 1);
				while (--i2)
					args[i2 - 1] = arguments[i2];
				evs[eventName].subscribe.apply(null, args);
				return ctx;
			} else if (typeof eventName === "string") {
				return evs[eventName];
			}
		};
		rv.addEventType = add;
		for (var i = 1, l = arguments.length; i < l; ++i) {
			add(arguments[i]);
		}
		return rv;
		function add (eventName, chainFunction, defaultFunction) {
			if (typeof eventName === "object")
				return addConfiguredEvents(eventName);
			if (!chainFunction)
				chainFunction = reverseStoppableEventChain;
			if (!defaultFunction)
				defaultFunction = nop;
			var context = {
				subscribers: [],
				fire: defaultFunction,
				subscribe: function (cb) {
					if (context.subscribers.indexOf(cb) === -1) {
						context.subscribers.push(cb);
						context.fire = chainFunction(context.fire, cb);
					}
				},
				unsubscribe: function (cb) {
					context.subscribers = context.subscribers.filter(function (fn) {
						return fn !== cb;
					});
					context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
				}
			};
			evs[eventName] = rv[eventName] = context;
			return context;
		}
		function addConfiguredEvents (cfg) {
			keys(cfg).forEach(function (eventName) {
				var args = cfg[eventName];
				if (isArray2(args)) {
					add(eventName, cfg[eventName][0], cfg[eventName][1]);
				} else if (args === "asap") {
					var context = add(eventName, mirror, function fire () {
						var i2 = arguments.length, args2 = new Array(i2);
						while (i2--)
							args2[i2] = arguments[i2];
						context.subscribers.forEach(function (fn) {
							asap$1(function fireEvent () {
								fn.apply(null, args2);
							});
						});
					});
				} else
					throw new exceptions.InvalidArgument("Invalid event config");
			});
		}
	}
	function makeClassConstructor (prototype, constructor) {
		derive(constructor).from({ prototype });
		return constructor;
	}
	function createTableConstructor (db2) {
		return makeClassConstructor(Table.prototype, function Table2 (name, tableSchema, trans) {
			this.db = db2;
			this._tx = trans;
			this.name = name;
			this.schema = tableSchema;
			this.hook = db2._allTables[name] ? db2._allTables[name].hook : Events(null, {
				"creating": [hookCreatingChain, nop],
				"reading": [pureFunctionChain, mirror],
				"updating": [hookUpdatingChain, nop],
				"deleting": [hookDeletingChain, nop]
			});
		});
	}
	function isPlainKeyRange (ctx, ignoreLimitFilter) {
		return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
	}
	function addFilter (ctx, fn) {
		ctx.filter = combine(ctx.filter, fn);
	}
	function addReplayFilter (ctx, factory, isLimitFilter) {
		var curr = ctx.replayFilter;
		ctx.replayFilter = curr ? () => combine(curr(), factory()) : factory;
		ctx.justLimit = isLimitFilter && !curr;
	}
	function addMatchFilter (ctx, fn) {
		ctx.isMatch = combine(ctx.isMatch, fn);
	}
	function getIndexOrStore (ctx, coreSchema) {
		if (ctx.isPrimKey)
			return coreSchema.primaryKey;
		const index = coreSchema.getIndexByKeyPath(ctx.index);
		if (!index)
			throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
		return index;
	}
	function openCursor (ctx, coreTable, trans) {
		const index = getIndexOrStore(ctx, coreTable.schema);
		return coreTable.openCursor({
			trans,
			values: !ctx.keysOnly,
			reverse: ctx.dir === "prev",
			unique: !!ctx.unique,
			query: {
				index,
				range: ctx.range
			}
		});
	}
	function iter (ctx, fn, coreTrans, coreTable) {
		const filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
		if (!ctx.or) {
			return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
		} else {
			const set = {};
			const union = (item, cursor, advance) => {
				if (!filter || filter(cursor, advance, (result) => cursor.stop(result), (err) => cursor.fail(err))) {
					var primaryKey = cursor.primaryKey;
					var key = "" + primaryKey;
					if (key === "[object ArrayBuffer]")
						key = "" + new Uint8Array(primaryKey);
					if (!hasOwn(set, key)) {
						set[key] = true;
						fn(item, cursor, advance);
					}
				}
			};
			return Promise.all([
				ctx.or._iterate(union, coreTrans),
				iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
			]);
		}
	}
	function iterate (cursorPromise, filter, fn, valueMapper) {
		var mappedFn = valueMapper ? (x, c, a) => fn(valueMapper(x), c, a) : fn;
		var wrappedFn = wrap(mappedFn);
		return cursorPromise.then((cursor) => {
			if (cursor) {
				return cursor.start(() => {
					var c = () => cursor.continue();
					if (!filter || filter(cursor, (advancer) => c = advancer, (val) => {
						cursor.stop(val);
						c = nop;
					}, (e) => {
						cursor.fail(e);
						c = nop;
					}))
						wrappedFn(cursor.value, cursor, (advancer) => c = advancer);
					c();
				});
			}
		});
	}
	function cmp (a, b) {
		try {
			const ta = type(a);
			const tb = type(b);
			if (ta !== tb) {
				if (ta === "Array")
					return 1;
				if (tb === "Array")
					return -1;
				if (ta === "binary")
					return 1;
				if (tb === "binary")
					return -1;
				if (ta === "string")
					return 1;
				if (tb === "string")
					return -1;
				if (ta === "Date")
					return 1;
				if (tb !== "Date")
					return NaN;
				return -1;
			}
			switch (ta) {
				case "number":
				case "Date":
				case "string":
					return a > b ? 1 : a < b ? -1 : 0;
				case "binary": {
					return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
				}
				case "Array":
					return compareArrays(a, b);
			}
		} catch (_a) {
		}
		return NaN;
	}
	function compareArrays (a, b) {
		const al = a.length;
		const bl = b.length;
		const l = al < bl ? al : bl;
		for (let i = 0; i < l; ++i) {
			const res = cmp(a[i], b[i]);
			if (res !== 0)
				return res;
		}
		return al === bl ? 0 : al < bl ? -1 : 1;
	}
	function compareUint8Arrays (a, b) {
		const al = a.length;
		const bl = b.length;
		const l = al < bl ? al : bl;
		for (let i = 0; i < l; ++i) {
			if (a[i] !== b[i])
				return a[i] < b[i] ? -1 : 1;
		}
		return al === bl ? 0 : al < bl ? -1 : 1;
	}
	function type (x) {
		const t = typeof x;
		if (t !== "object")
			return t;
		if (ArrayBuffer.isView(x))
			return "binary";
		const tsTag = toStringTag(x);
		return tsTag === "ArrayBuffer" ? "binary" : tsTag;
	}
	function getUint8Array (a) {
		if (a instanceof Uint8Array)
			return a;
		if (ArrayBuffer.isView(a))
			return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
		return new Uint8Array(a);
	}
	var Collection = class {
		_read (fn, cb) {
			var ctx = this._ctx;
			return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
		}
		_write (fn) {
			var ctx = this._ctx;
			return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
		}
		_addAlgorithm (fn) {
			var ctx = this._ctx;
			ctx.algorithm = combine(ctx.algorithm, fn);
		}
		_iterate (fn, coreTrans) {
			return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
		}
		clone (props2) {
			var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
			if (props2)
				extend(ctx, props2);
			rv._ctx = ctx;
			return rv;
		}
		raw () {
			this._ctx.valueMapper = null;
			return this;
		}
		each (fn) {
			var ctx = this._ctx;
			return this._read((trans) => iter(ctx, fn, trans, ctx.table.core));
		}
		count (cb) {
			return this._read((trans) => {
				const ctx = this._ctx;
				const coreTable = ctx.table.core;
				if (isPlainKeyRange(ctx, true)) {
					return coreTable.count({
						trans,
						query: {
							index: getIndexOrStore(ctx, coreTable.schema),
							range: ctx.range
						}
					}).then((count2) => Math.min(count2, ctx.limit));
				} else {
					var count = 0;
					return iter(ctx, () => {
						++count;
						return false;
					}, trans, coreTable).then(() => count);
				}
			}).then(cb);
		}
		sortBy (keyPath, cb) {
			const parts = keyPath.split(".").reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
			function getval (obj, i) {
				if (i)
					return getval(obj[parts[i]], i - 1);
				return obj[lastPart];
			}
			var order = this._ctx.dir === "next" ? 1 : -1;
			function sorter (a, b) {
				var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
				return aVal < bVal ? -order : aVal > bVal ? order : 0;
			}
			return this.toArray(function (a) {
				return a.sort(sorter);
			}).then(cb);
		}
		toArray (cb) {
			return this._read((trans) => {
				var ctx = this._ctx;
				if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
					const { valueMapper } = ctx;
					const index = getIndexOrStore(ctx, ctx.table.core.schema);
					return ctx.table.core.query({
						trans,
						limit: ctx.limit,
						values: true,
						query: {
							index,
							range: ctx.range
						}
					}).then(({ result }) => valueMapper ? result.map(valueMapper) : result);
				} else {
					const a = [];
					return iter(ctx, (item) => a.push(item), trans, ctx.table.core).then(() => a);
				}
			}, cb);
		}
		offset (offset) {
			var ctx = this._ctx;
			if (offset <= 0)
				return this;
			ctx.offset += offset;
			if (isPlainKeyRange(ctx)) {
				addReplayFilter(ctx, () => {
					var offsetLeft = offset;
					return (cursor, advance) => {
						if (offsetLeft === 0)
							return true;
						if (offsetLeft === 1) {
							--offsetLeft;
							return false;
						}
						advance(() => {
							cursor.advance(offsetLeft);
							offsetLeft = 0;
						});
						return false;
					};
				});
			} else {
				addReplayFilter(ctx, () => {
					var offsetLeft = offset;
					return () => --offsetLeft < 0;
				});
			}
			return this;
		}
		limit (numRows) {
			this._ctx.limit = Math.min(this._ctx.limit, numRows);
			addReplayFilter(this._ctx, () => {
				var rowsLeft = numRows;
				return function (cursor, advance, resolve) {
					if (--rowsLeft <= 0)
						advance(resolve);
					return rowsLeft >= 0;
				};
			}, true);
			return this;
		}
		until (filterFunction, bIncludeStopEntry) {
			addFilter(this._ctx, function (cursor, advance, resolve) {
				if (filterFunction(cursor.value)) {
					advance(resolve);
					return bIncludeStopEntry;
				} else {
					return true;
				}
			});
			return this;
		}
		first (cb) {
			return this.limit(1).toArray(function (a) {
				return a[0];
			}).then(cb);
		}
		last (cb) {
			return this.reverse().first(cb);
		}
		filter (filterFunction) {
			addFilter(this._ctx, function (cursor) {
				return filterFunction(cursor.value);
			});
			addMatchFilter(this._ctx, filterFunction);
			return this;
		}
		and (filter) {
			return this.filter(filter);
		}
		or (indexName) {
			return new this.db.WhereClause(this._ctx.table, indexName, this);
		}
		reverse () {
			this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
			if (this._ondirectionchange)
				this._ondirectionchange(this._ctx.dir);
			return this;
		}
		desc () {
			return this.reverse();
		}
		eachKey (cb) {
			var ctx = this._ctx;
			ctx.keysOnly = !ctx.isMatch;
			return this.each(function (val, cursor) {
				cb(cursor.key, cursor);
			});
		}
		eachUniqueKey (cb) {
			this._ctx.unique = "unique";
			return this.eachKey(cb);
		}
		eachPrimaryKey (cb) {
			var ctx = this._ctx;
			ctx.keysOnly = !ctx.isMatch;
			return this.each(function (val, cursor) {
				cb(cursor.primaryKey, cursor);
			});
		}
		keys (cb) {
			var ctx = this._ctx;
			ctx.keysOnly = !ctx.isMatch;
			var a = [];
			return this.each(function (item, cursor) {
				a.push(cursor.key);
			}).then(function () {
				return a;
			}).then(cb);
		}
		primaryKeys (cb) {
			var ctx = this._ctx;
			if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
				return this._read((trans) => {
					var index = getIndexOrStore(ctx, ctx.table.core.schema);
					return ctx.table.core.query({
						trans,
						values: false,
						limit: ctx.limit,
						query: {
							index,
							range: ctx.range
						}
					});
				}).then(({ result }) => result).then(cb);
			}
			ctx.keysOnly = !ctx.isMatch;
			var a = [];
			return this.each(function (item, cursor) {
				a.push(cursor.primaryKey);
			}).then(function () {
				return a;
			}).then(cb);
		}
		uniqueKeys (cb) {
			this._ctx.unique = "unique";
			return this.keys(cb);
		}
		firstKey (cb) {
			return this.limit(1).keys(function (a) {
				return a[0];
			}).then(cb);
		}
		lastKey (cb) {
			return this.reverse().firstKey(cb);
		}
		distinct () {
			var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
			if (!idx || !idx.multi)
				return this;
			var set = {};
			addFilter(this._ctx, function (cursor) {
				var strKey = cursor.primaryKey.toString();
				var found = hasOwn(set, strKey);
				set[strKey] = true;
				return !found;
			});
			return this;
		}
		modify (changes) {
			var ctx = this._ctx;
			return this._write((trans) => {
				var modifyer;
				if (typeof changes === "function") {
					modifyer = changes;
				} else {
					var keyPaths = keys(changes);
					var numKeys = keyPaths.length;
					modifyer = function (item) {
						var anythingModified = false;
						for (var i = 0; i < numKeys; ++i) {
							var keyPath = keyPaths[i], val = changes[keyPath];
							if (getByKeyPath(item, keyPath) !== val) {
								setByKeyPath(item, keyPath, val);
								anythingModified = true;
							}
						}
						return anythingModified;
					};
				}
				const coreTable = ctx.table.core;
				const { outbound, extractKey } = coreTable.schema.primaryKey;
				const limit = this.db._options.modifyChunkSize || 200;
				const totalFailures = [];
				let successCount = 0;
				const failedKeys = [];
				const applyMutateResult = (expectedCount, res) => {
					const { failures, numFailures } = res;
					successCount += expectedCount - numFailures;
					for (let pos of keys(failures)) {
						totalFailures.push(failures[pos]);
					}
				};
				return this.clone().primaryKeys().then((keys2) => {
					const nextChunk = (offset) => {
						const count = Math.min(limit, keys2.length - offset);
						return coreTable.getMany({
							trans,
							keys: keys2.slice(offset, offset + count),
							cache: "immutable"
						}).then((values) => {
							const addValues = [];
							const putValues = [];
							const putKeys = outbound ? [] : null;
							const deleteKeys = [];
							for (let i = 0; i < count; ++i) {
								const origValue = values[i];
								const ctx2 = {
									value: deepClone(origValue),
									primKey: keys2[offset + i]
								};
								if (modifyer.call(ctx2, ctx2.value, ctx2) !== false) {
									if (ctx2.value == null) {
										deleteKeys.push(keys2[offset + i]);
									} else if (!outbound && cmp(extractKey(origValue), extractKey(ctx2.value)) !== 0) {
										deleteKeys.push(keys2[offset + i]);
										addValues.push(ctx2.value);
									} else {
										putValues.push(ctx2.value);
										if (outbound)
											putKeys.push(keys2[offset + i]);
									}
								}
							}
							const criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || changes === deleteCallback) && {
								index: ctx.index,
								range: ctx.range
							};
							return Promise.resolve(addValues.length > 0 && coreTable.mutate({ trans, type: "add", values: addValues }).then((res) => {
								for (let pos in res.failures) {
									deleteKeys.splice(parseInt(pos), 1);
								}
								applyMutateResult(addValues.length, res);
							})).then(() => (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
								trans,
								type: "put",
								keys: putKeys,
								values: putValues,
								criteria,
								changeSpec: typeof changes !== "function" && changes
							}).then((res) => applyMutateResult(putValues.length, res))).then(() => (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
								trans,
								type: "delete",
								keys: deleteKeys,
								criteria
							}).then((res) => applyMutateResult(deleteKeys.length, res))).then(() => {
								return keys2.length > offset + count && nextChunk(offset + limit);
							});
						});
					};
					return nextChunk(0).then(() => {
						if (totalFailures.length > 0)
							throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
						return keys2.length;
					});
				});
			});
		}
		delete () {
			var ctx = this._ctx, range = ctx.range;
			if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) {
				return this._write((trans) => {
					const { primaryKey } = ctx.table.core.schema;
					const coreRange = range;
					return ctx.table.core.count({ trans, query: { index: primaryKey, range: coreRange } }).then((count) => {
						return ctx.table.core.mutate({ trans, type: "deleteRange", range: coreRange }).then(({ failures, lastResult, results, numFailures }) => {
							if (numFailures)
								throw new ModifyError("Could not delete some values", Object.keys(failures).map((pos) => failures[pos]), count - numFailures);
							return count - numFailures;
						});
					});
				});
			}
			return this.modify(deleteCallback);
		}
	};
	var deleteCallback = (value, ctx) => ctx.value = null;
	function createCollectionConstructor (db2) {
		return makeClassConstructor(Collection.prototype, function Collection2 (whereClause, keyRangeGenerator) {
			this.db = db2;
			let keyRange = AnyRange, error = null;
			if (keyRangeGenerator)
				try {
					keyRange = keyRangeGenerator();
				} catch (ex) {
					error = ex;
				}
			const whereCtx = whereClause._ctx;
			const table = whereCtx.table;
			const readingHook = table.hook.reading.fire;
			this._ctx = {
				table,
				index: whereCtx.index,
				isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
				range: keyRange,
				keysOnly: false,
				dir: "next",
				unique: "",
				algorithm: null,
				filter: null,
				replayFilter: null,
				justLimit: true,
				isMatch: null,
				offset: 0,
				limit: Infinity,
				error,
				or: whereCtx.or,
				valueMapper: readingHook !== mirror ? readingHook : null
			};
		});
	}
	function simpleCompare (a, b) {
		return a < b ? -1 : a === b ? 0 : 1;
	}
	function simpleCompareReverse (a, b) {
		return a > b ? -1 : a === b ? 0 : 1;
	}
	function fail (collectionOrWhereClause, err, T) {
		var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
		collection._ctx.error = T ? new T(err) : new TypeError(err);
		return collection;
	}
	function emptyCollection (whereClause) {
		return new whereClause.Collection(whereClause, () => rangeEqual("")).limit(0);
	}
	function upperFactory (dir) {
		return dir === "next" ? (s) => s.toUpperCase() : (s) => s.toLowerCase();
	}
	function lowerFactory (dir) {
		return dir === "next" ? (s) => s.toLowerCase() : (s) => s.toUpperCase();
	}
	function nextCasing (key, lowerKey, upperNeedle, lowerNeedle, cmp2, dir) {
		var length = Math.min(key.length, lowerNeedle.length);
		var llp = -1;
		for (var i = 0; i < length; ++i) {
			var lwrKeyChar = lowerKey[i];
			if (lwrKeyChar !== lowerNeedle[i]) {
				if (cmp2(key[i], upperNeedle[i]) < 0)
					return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
				if (cmp2(key[i], lowerNeedle[i]) < 0)
					return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
				if (llp >= 0)
					return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
				return null;
			}
			if (cmp2(key[i], lwrKeyChar) < 0)
				llp = i;
		}
		if (length < lowerNeedle.length && dir === "next")
			return key + upperNeedle.substr(key.length);
		if (length < key.length && dir === "prev")
			return key.substr(0, upperNeedle.length);
		return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
	}
	function addIgnoreCaseAlgorithm (whereClause, match, needles, suffix) {
		var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
		if (!needles.every((s) => typeof s === "string")) {
			return fail(whereClause, STRING_EXPECTED);
		}
		function initDirection (dir) {
			upper = upperFactory(dir);
			lower = lowerFactory(dir);
			compare = dir === "next" ? simpleCompare : simpleCompareReverse;
			var needleBounds = needles.map(function (needle) {
				return { lower: lower(needle), upper: upper(needle) };
			}).sort(function (a, b) {
				return compare(a.lower, b.lower);
			});
			upperNeedles = needleBounds.map(function (nb) {
				return nb.upper;
			});
			lowerNeedles = needleBounds.map(function (nb) {
				return nb.lower;
			});
			direction = dir;
			nextKeySuffix = dir === "next" ? "" : suffix;
		}
		initDirection("next");
		var c = new whereClause.Collection(whereClause, () => createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix));
		c._ondirectionchange = function (direction2) {
			initDirection(direction2);
		};
		var firstPossibleNeedle = 0;
		c._addAlgorithm(function (cursor, advance, resolve) {
			var key = cursor.key;
			if (typeof key !== "string")
				return false;
			var lowerKey = lower(key);
			if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
				return true;
			} else {
				var lowestPossibleCasing = null;
				for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
					var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
					if (casing === null && lowestPossibleCasing === null)
						firstPossibleNeedle = i + 1;
					else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
						lowestPossibleCasing = casing;
					}
				}
				if (lowestPossibleCasing !== null) {
					advance(function () {
						cursor.continue(lowestPossibleCasing + nextKeySuffix);
					});
				} else {
					advance(resolve);
				}
				return false;
			}
		});
		return c;
	}
	function createRange (lower, upper, lowerOpen, upperOpen) {
		return {
			type: 2,
			lower,
			upper,
			lowerOpen,
			upperOpen
		};
	}
	function rangeEqual (value) {
		return {
			type: 1,
			lower: value,
			upper: value
		};
	}
	var WhereClause = class {
		get Collection () {
			return this._ctx.table.db.Collection;
		}
		between (lower, upper, includeLower, includeUpper) {
			includeLower = includeLower !== false;
			includeUpper = includeUpper === true;
			try {
				if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper))
					return emptyCollection(this);
				return new this.Collection(this, () => createRange(lower, upper, !includeLower, !includeUpper));
			} catch (e) {
				return fail(this, INVALID_KEY_ARGUMENT);
			}
		}
		equals (value) {
			if (value == null)
				return fail(this, INVALID_KEY_ARGUMENT);
			return new this.Collection(this, () => rangeEqual(value));
		}
		above (value) {
			if (value == null)
				return fail(this, INVALID_KEY_ARGUMENT);
			return new this.Collection(this, () => createRange(value, void 0, true));
		}
		aboveOrEqual (value) {
			if (value == null)
				return fail(this, INVALID_KEY_ARGUMENT);
			return new this.Collection(this, () => createRange(value, void 0, false));
		}
		below (value) {
			if (value == null)
				return fail(this, INVALID_KEY_ARGUMENT);
			return new this.Collection(this, () => createRange(void 0, value, false, true));
		}
		belowOrEqual (value) {
			if (value == null)
				return fail(this, INVALID_KEY_ARGUMENT);
			return new this.Collection(this, () => createRange(void 0, value));
		}
		startsWith (str) {
			if (typeof str !== "string")
				return fail(this, STRING_EXPECTED);
			return this.between(str, str + maxString, true, true);
		}
		startsWithIgnoreCase (str) {
			if (str === "")
				return this.startsWith(str);
			return addIgnoreCaseAlgorithm(this, (x, a) => x.indexOf(a[0]) === 0, [str], maxString);
		}
		equalsIgnoreCase (str) {
			return addIgnoreCaseAlgorithm(this, (x, a) => x === a[0], [str], "");
		}
		anyOfIgnoreCase () {
			var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
			if (set.length === 0)
				return emptyCollection(this);
			return addIgnoreCaseAlgorithm(this, (x, a) => a.indexOf(x) !== -1, set, "");
		}
		startsWithAnyOfIgnoreCase () {
			var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
			if (set.length === 0)
				return emptyCollection(this);
			return addIgnoreCaseAlgorithm(this, (x, a) => a.some((n) => x.indexOf(n) === 0), set, maxString);
		}
		anyOf () {
			const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
			let compare = this._cmp;
			try {
				set.sort(compare);
			} catch (e) {
				return fail(this, INVALID_KEY_ARGUMENT);
			}
			if (set.length === 0)
				return emptyCollection(this);
			const c = new this.Collection(this, () => createRange(set[0], set[set.length - 1]));
			c._ondirectionchange = (direction) => {
				compare = direction === "next" ? this._ascending : this._descending;
				set.sort(compare);
			};
			let i = 0;
			c._addAlgorithm((cursor, advance, resolve) => {
				const key = cursor.key;
				while (compare(key, set[i]) > 0) {
					++i;
					if (i === set.length) {
						advance(resolve);
						return false;
					}
				}
				if (compare(key, set[i]) === 0) {
					return true;
				} else {
					advance(() => {
						cursor.continue(set[i]);
					});
					return false;
				}
			});
			return c;
		}
		notEqual (value) {
			return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], { includeLowers: false, includeUppers: false });
		}
		noneOf () {
			const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
			if (set.length === 0)
				return new this.Collection(this);
			try {
				set.sort(this._ascending);
			} catch (e) {
				return fail(this, INVALID_KEY_ARGUMENT);
			}
			const ranges = set.reduce((res, val) => res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]], null);
			ranges.push([set[set.length - 1], this.db._maxKey]);
			return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
		}
		inAnyRange (ranges, options) {
			const cmp2 = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
			if (ranges.length === 0)
				return emptyCollection(this);
			if (!ranges.every((range) => range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0)) {
				return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
			}
			const includeLowers = !options || options.includeLowers !== false;
			const includeUppers = options && options.includeUppers === true;
			function addRange2 (ranges2, newRange) {
				let i = 0, l = ranges2.length;
				for (; i < l; ++i) {
					const range = ranges2[i];
					if (cmp2(newRange[0], range[1]) < 0 && cmp2(newRange[1], range[0]) > 0) {
						range[0] = min(range[0], newRange[0]);
						range[1] = max(range[1], newRange[1]);
						break;
					}
				}
				if (i === l)
					ranges2.push(newRange);
				return ranges2;
			}
			let sortDirection = ascending;
			function rangeSorter (a, b) {
				return sortDirection(a[0], b[0]);
			}
			let set;
			try {
				set = ranges.reduce(addRange2, []);
				set.sort(rangeSorter);
			} catch (ex) {
				return fail(this, INVALID_KEY_ARGUMENT);
			}
			let rangePos = 0;
			const keyIsBeyondCurrentEntry = includeUppers ? (key) => ascending(key, set[rangePos][1]) > 0 : (key) => ascending(key, set[rangePos][1]) >= 0;
			const keyIsBeforeCurrentEntry = includeLowers ? (key) => descending(key, set[rangePos][0]) > 0 : (key) => descending(key, set[rangePos][0]) >= 0;
			function keyWithinCurrentRange (key) {
				return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
			}
			let checkKey = keyIsBeyondCurrentEntry;
			const c = new this.Collection(this, () => createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers));
			c._ondirectionchange = (direction) => {
				if (direction === "next") {
					checkKey = keyIsBeyondCurrentEntry;
					sortDirection = ascending;
				} else {
					checkKey = keyIsBeforeCurrentEntry;
					sortDirection = descending;
				}
				set.sort(rangeSorter);
			};
			c._addAlgorithm((cursor, advance, resolve) => {
				var key = cursor.key;
				while (checkKey(key)) {
					++rangePos;
					if (rangePos === set.length) {
						advance(resolve);
						return false;
					}
				}
				if (keyWithinCurrentRange(key)) {
					return true;
				} else if (this._cmp(key, set[rangePos][1]) === 0 || this._cmp(key, set[rangePos][0]) === 0) {
					return false;
				} else {
					advance(() => {
						if (sortDirection === ascending)
							cursor.continue(set[rangePos][0]);
						else
							cursor.continue(set[rangePos][1]);
					});
					return false;
				}
			});
			return c;
		}
		startsWithAnyOf () {
			const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
			if (!set.every((s) => typeof s === "string")) {
				return fail(this, "startsWithAnyOf() only works with strings");
			}
			if (set.length === 0)
				return emptyCollection(this);
			return this.inAnyRange(set.map((str) => [str, str + maxString]));
		}
	};
	function createWhereClauseConstructor (db2) {
		return makeClassConstructor(WhereClause.prototype, function WhereClause2 (table, index, orCollection) {
			this.db = db2;
			this._ctx = {
				table,
				index: index === ":id" ? null : index,
				or: orCollection
			};
			const indexedDB2 = db2._deps.indexedDB;
			if (!indexedDB2)
				throw new exceptions.MissingAPI();
			this._cmp = this._ascending = indexedDB2.cmp.bind(indexedDB2);
			this._descending = (a, b) => indexedDB2.cmp(b, a);
			this._max = (a, b) => indexedDB2.cmp(a, b) > 0 ? a : b;
			this._min = (a, b) => indexedDB2.cmp(a, b) < 0 ? a : b;
			this._IDBKeyRange = db2._deps.IDBKeyRange;
		});
	}
	function eventRejectHandler (reject) {
		return wrap(function (event) {
			preventDefault(event);
			reject(event.target.error);
			return false;
		});
	}
	function preventDefault (event) {
		if (event.stopPropagation)
			event.stopPropagation();
		if (event.preventDefault)
			event.preventDefault();
	}
	var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
	var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
	var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
	var Transaction = class {
		_lock () {
			assert(!PSD.global);
			++this._reculock;
			if (this._reculock === 1 && !PSD.global)
				PSD.lockOwnerFor = this;
			return this;
		}
		_unlock () {
			assert(!PSD.global);
			if (--this._reculock === 0) {
				if (!PSD.global)
					PSD.lockOwnerFor = null;
				while (this._blockedFuncs.length > 0 && !this._locked()) {
					var fnAndPSD = this._blockedFuncs.shift();
					try {
						usePSD(fnAndPSD[1], fnAndPSD[0]);
					} catch (e) {
					}
				}
			}
			return this;
		}
		_locked () {
			return this._reculock && PSD.lockOwnerFor !== this;
		}
		create (idbtrans) {
			if (!this.mode)
				return this;
			const idbdb = this.db.idbdb;
			const dbOpenError = this.db._state.dbOpenError;
			assert(!this.idbtrans);
			if (!idbtrans && !idbdb) {
				switch (dbOpenError && dbOpenError.name) {
					case "DatabaseClosedError":
						throw new exceptions.DatabaseClosed(dbOpenError);
					case "MissingAPIError":
						throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
					default:
						throw new exceptions.OpenFailed(dbOpenError);
				}
			}
			if (!this.active)
				throw new exceptions.TransactionInactive();
			assert(this._completion._state === null);
			idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : idbdb.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }));
			idbtrans.onerror = wrap((ev) => {
				preventDefault(ev);
				this._reject(idbtrans.error);
			});
			idbtrans.onabort = wrap((ev) => {
				preventDefault(ev);
				this.active && this._reject(new exceptions.Abort(idbtrans.error));
				this.active = false;
				this.on("abort").fire(ev);
			});
			idbtrans.oncomplete = wrap(() => {
				this.active = false;
				this._resolve();
				if ("mutatedParts" in idbtrans) {
					globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
				}
			});
			return this;
		}
		_promise (mode, fn, bWriteLock) {
			if (mode === "readwrite" && this.mode !== "readwrite")
				return rejection(new exceptions.ReadOnly("Transaction is readonly"));
			if (!this.active)
				return rejection(new exceptions.TransactionInactive());
			if (this._locked()) {
				return new DexiePromise((resolve, reject) => {
					this._blockedFuncs.push([() => {
						this._promise(mode, fn, bWriteLock).then(resolve, reject);
					}, PSD]);
				});
			} else if (bWriteLock) {
				return newScope(() => {
					var p2 = new DexiePromise((resolve, reject) => {
						this._lock();
						const rv = fn(resolve, reject, this);
						if (rv && rv.then)
							rv.then(resolve, reject);
					});
					p2.finally(() => this._unlock());
					p2._lib = true;
					return p2;
				});
			} else {
				var p = new DexiePromise((resolve, reject) => {
					var rv = fn(resolve, reject, this);
					if (rv && rv.then)
						rv.then(resolve, reject);
				});
				p._lib = true;
				return p;
			}
		}
		_root () {
			return this.parent ? this.parent._root() : this;
		}
		waitFor (promiseLike) {
			var root = this._root();
			const promise = DexiePromise.resolve(promiseLike);
			if (root._waitingFor) {
				root._waitingFor = root._waitingFor.then(() => promise);
			} else {
				root._waitingFor = promise;
				root._waitingQueue = [];
				var store = root.idbtrans.objectStore(root.storeNames[0]);
				(function spin () {
					++root._spinCount;
					while (root._waitingQueue.length)
						root._waitingQueue.shift()();
					if (root._waitingFor)
						store.get(-Infinity).onsuccess = spin;
				})();
			}
			var currentWaitPromise = root._waitingFor;
			return new DexiePromise((resolve, reject) => {
				promise.then((res) => root._waitingQueue.push(wrap(resolve.bind(null, res))), (err) => root._waitingQueue.push(wrap(reject.bind(null, err)))).finally(() => {
					if (root._waitingFor === currentWaitPromise) {
						root._waitingFor = null;
					}
				});
			});
		}
		abort () {
			if (this.active) {
				this.active = false;
				if (this.idbtrans)
					this.idbtrans.abort();
				this._reject(new exceptions.Abort());
			}
		}
		table (tableName) {
			const memoizedTables = this._memoizedTables || (this._memoizedTables = {});
			if (hasOwn(memoizedTables, tableName))
				return memoizedTables[tableName];
			const tableSchema = this.schema[tableName];
			if (!tableSchema) {
				throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
			}
			const transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
			transactionBoundTable.core = this.db.core.table(tableName);
			memoizedTables[tableName] = transactionBoundTable;
			return transactionBoundTable;
		}
	};
	function createTransactionConstructor (db2) {
		return makeClassConstructor(Transaction.prototype, function Transaction2 (mode, storeNames, dbschema, chromeTransactionDurability, parent) {
			this.db = db2;
			this.mode = mode;
			this.storeNames = storeNames;
			this.schema = dbschema;
			this.chromeTransactionDurability = chromeTransactionDurability;
			this.idbtrans = null;
			this.on = Events(this, "complete", "error", "abort");
			this.parent = parent || null;
			this.active = true;
			this._reculock = 0;
			this._blockedFuncs = [];
			this._resolve = null;
			this._reject = null;
			this._waitingFor = null;
			this._waitingQueue = null;
			this._spinCount = 0;
			this._completion = new DexiePromise((resolve, reject) => {
				this._resolve = resolve;
				this._reject = reject;
			});
			this._completion.then(() => {
				this.active = false;
				this.on.complete.fire();
			}, (e) => {
				var wasActive = this.active;
				this.active = false;
				this.on.error.fire(e);
				this.parent ? this.parent._reject(e) : wasActive && this.idbtrans && this.idbtrans.abort();
				return rejection(e);
			});
		});
	}
	function createIndexSpec (name, keyPath, unique, multi, auto, compound, isPrimKey) {
		return {
			name,
			keyPath,
			unique,
			multi,
			auto,
			compound,
			src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath)
		};
	}
	function nameFromKeyPath (keyPath) {
		return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
	}
	function createTableSchema (name, primKey, indexes) {
		return {
			name,
			primKey,
			indexes,
			mappedClass: null,
			idxByName: arrayToObject(indexes, (index) => [index.name, index])
		};
	}
	function safariMultiStoreFix (storeNames) {
		return storeNames.length === 1 ? storeNames[0] : storeNames;
	}
	var getMaxKey = (IdbKeyRange) => {
		try {
			IdbKeyRange.only([[]]);
			getMaxKey = () => [[]];
			return [[]];
		} catch (e) {
			getMaxKey = () => maxString;
			return maxString;
		}
	};
	function getKeyExtractor (keyPath) {
		if (keyPath == null) {
			return () => void 0;
		} else if (typeof keyPath === "string") {
			return getSinglePathKeyExtractor(keyPath);
		} else {
			return (obj) => getByKeyPath(obj, keyPath);
		}
	}
	function getSinglePathKeyExtractor (keyPath) {
		const split = keyPath.split(".");
		if (split.length === 1) {
			return (obj) => obj[keyPath];
		} else {
			return (obj) => getByKeyPath(obj, keyPath);
		}
	}
	function arrayify (arrayLike) {
		return [].slice.call(arrayLike);
	}
	var _id_counter = 0;
	function getKeyPathAlias (keyPath) {
		return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : `[${keyPath.join("+")}]`;
	}
	function createDBCore (db2, IdbKeyRange, tmpTrans) {
		function extractSchema (db3, trans) {
			const tables2 = arrayify(db3.objectStoreNames);
			return {
				schema: {
					name: db3.name,
					tables: tables2.map((table) => trans.objectStore(table)).map((store) => {
						const { keyPath, autoIncrement } = store;
						const compound = isArray2(keyPath);
						const outbound = keyPath == null;
						const indexByKeyPath = {};
						const result = {
							name: store.name,
							primaryKey: {
								name: null,
								isPrimaryKey: true,
								outbound,
								compound,
								keyPath,
								autoIncrement,
								unique: true,
								extractKey: getKeyExtractor(keyPath)
							},
							indexes: arrayify(store.indexNames).map((indexName) => store.index(indexName)).map((index) => {
								const { name, unique, multiEntry, keyPath: keyPath2 } = index;
								const compound2 = isArray2(keyPath2);
								const result2 = {
									name,
									compound: compound2,
									keyPath: keyPath2,
									unique,
									multiEntry,
									extractKey: getKeyExtractor(keyPath2)
								};
								indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
								return result2;
							}),
							getIndexByKeyPath: (keyPath2) => indexByKeyPath[getKeyPathAlias(keyPath2)]
						};
						indexByKeyPath[":id"] = result.primaryKey;
						if (keyPath != null) {
							indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
						}
						return result;
					})
				},
				hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
			};
		}
		function makeIDBKeyRange (range) {
			if (range.type === 3)
				return null;
			if (range.type === 4)
				throw new Error("Cannot convert never type to IDBKeyRange");
			const { lower, upper, lowerOpen, upperOpen } = range;
			const idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
			return idbRange;
		}
		function createDbCoreTable (tableSchema) {
			const tableName = tableSchema.name;
			function mutate ({ trans, type: type2, keys: keys2, values, range }) {
				return new Promise((resolve, reject) => {
					resolve = wrap(resolve);
					const store = trans.objectStore(tableName);
					const outbound = store.keyPath == null;
					const isAddOrPut = type2 === "put" || type2 === "add";
					if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange")
						throw new Error("Invalid operation type: " + type2);
					const { length } = keys2 || values || { length: 1 };
					if (keys2 && values && keys2.length !== values.length) {
						throw new Error("Given keys array must have same length as given values array.");
					}
					if (length === 0)
						return resolve({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
					let req;
					const reqs = [];
					const failures = [];
					let numFailures = 0;
					const errorHandler = (event) => {
						++numFailures;
						preventDefault(event);
					};
					if (type2 === "deleteRange") {
						if (range.type === 4)
							return resolve({ numFailures, failures, results: [], lastResult: void 0 });
						if (range.type === 3)
							reqs.push(req = store.clear());
						else
							reqs.push(req = store.delete(makeIDBKeyRange(range)));
					} else {
						const [args1, args2] = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null];
						if (isAddOrPut) {
							for (let i = 0; i < length; ++i) {
								reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
								req.onerror = errorHandler;
							}
						} else {
							for (let i = 0; i < length; ++i) {
								reqs.push(req = store[type2](args1[i]));
								req.onerror = errorHandler;
							}
						}
					}
					const done = (event) => {
						const lastResult = event.target.result;
						reqs.forEach((req2, i) => req2.error != null && (failures[i] = req2.error));
						resolve({
							numFailures,
							failures,
							results: type2 === "delete" ? keys2 : reqs.map((req2) => req2.result),
							lastResult
						});
					};
					req.onerror = (event) => {
						errorHandler(event);
						done(event);
					};
					req.onsuccess = done;
				});
			}
			function openCursor2 ({ trans, values, query: query2, reverse, unique }) {
				return new Promise((resolve, reject) => {
					resolve = wrap(resolve);
					const { index, range } = query2;
					const store = trans.objectStore(tableName);
					const source = index.isPrimaryKey ? store : store.index(index.name);
					const direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
					const req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
					req.onerror = eventRejectHandler(reject);
					req.onsuccess = wrap((ev) => {
						const cursor = req.result;
						if (!cursor) {
							resolve(null);
							return;
						}
						cursor.___id = ++_id_counter;
						cursor.done = false;
						const _cursorContinue = cursor.continue.bind(cursor);
						let _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
						if (_cursorContinuePrimaryKey)
							_cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
						const _cursorAdvance = cursor.advance.bind(cursor);
						const doThrowCursorIsNotStarted = () => {
							throw new Error("Cursor not started");
						};
						const doThrowCursorIsStopped = () => {
							throw new Error("Cursor not stopped");
						};
						cursor.trans = trans;
						cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
						cursor.fail = wrap(reject);
						cursor.next = function () {
							let gotOne = 1;
							return this.start(() => gotOne-- ? this.continue() : this.stop()).then(() => this);
						};
						cursor.start = (callback) => {
							const iterationPromise = new Promise((resolveIteration, rejectIteration) => {
								resolveIteration = wrap(resolveIteration);
								req.onerror = eventRejectHandler(rejectIteration);
								cursor.fail = rejectIteration;
								cursor.stop = (value) => {
									cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
									resolveIteration(value);
								};
							});
							const guardedCallback = () => {
								if (req.result) {
									try {
										callback();
									} catch (err) {
										cursor.fail(err);
									}
								} else {
									cursor.done = true;
									cursor.start = () => {
										throw new Error("Cursor behind last entry");
									};
									cursor.stop();
								}
							};
							req.onsuccess = wrap((ev2) => {
								req.onsuccess = guardedCallback;
								guardedCallback();
							});
							cursor.continue = _cursorContinue;
							cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
							cursor.advance = _cursorAdvance;
							guardedCallback();
							return iterationPromise;
						};
						resolve(cursor);
					}, reject);
				});
			}
			function query (hasGetAll2) {
				return (request) => {
					return new Promise((resolve, reject) => {
						resolve = wrap(resolve);
						const { trans, values, limit, query: query2 } = request;
						const nonInfinitLimit = limit === Infinity ? void 0 : limit;
						const { index, range } = query2;
						const store = trans.objectStore(tableName);
						const source = index.isPrimaryKey ? store : store.index(index.name);
						const idbKeyRange = makeIDBKeyRange(range);
						if (limit === 0)
							return resolve({ result: [] });
						if (hasGetAll2) {
							const req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
							req.onsuccess = (event) => resolve({ result: event.target.result });
							req.onerror = eventRejectHandler(reject);
						} else {
							let count = 0;
							const req = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
							const result = [];
							req.onsuccess = (event) => {
								const cursor = req.result;
								if (!cursor)
									return resolve({ result });
								result.push(values ? cursor.value : cursor.primaryKey);
								if (++count === limit)
									return resolve({ result });
								cursor.continue();
							};
							req.onerror = eventRejectHandler(reject);
						}
					});
				};
			}
			return {
				name: tableName,
				schema: tableSchema,
				mutate,
				getMany ({ trans, keys: keys2 }) {
					return new Promise((resolve, reject) => {
						resolve = wrap(resolve);
						const store = trans.objectStore(tableName);
						const length = keys2.length;
						const result = new Array(length);
						let keyCount = 0;
						let callbackCount = 0;
						let req;
						const successHandler = (event) => {
							const req2 = event.target;
							if ((result[req2._pos] = req2.result) != null)
								;
							if (++callbackCount === keyCount)
								resolve(result);
						};
						const errorHandler = eventRejectHandler(reject);
						for (let i = 0; i < length; ++i) {
							const key = keys2[i];
							if (key != null) {
								req = store.get(keys2[i]);
								req._pos = i;
								req.onsuccess = successHandler;
								req.onerror = errorHandler;
								++keyCount;
							}
						}
						if (keyCount === 0)
							resolve(result);
					});
				},
				get ({ trans, key }) {
					return new Promise((resolve, reject) => {
						resolve = wrap(resolve);
						const store = trans.objectStore(tableName);
						const req = store.get(key);
						req.onsuccess = (event) => resolve(event.target.result);
						req.onerror = eventRejectHandler(reject);
					});
				},
				query: query(hasGetAll),
				openCursor: openCursor2,
				count ({ query: query2, trans }) {
					const { index, range } = query2;
					return new Promise((resolve, reject) => {
						const store = trans.objectStore(tableName);
						const source = index.isPrimaryKey ? store : store.index(index.name);
						const idbKeyRange = makeIDBKeyRange(range);
						const req = idbKeyRange ? source.count(idbKeyRange) : source.count();
						req.onsuccess = wrap((ev) => resolve(ev.target.result));
						req.onerror = eventRejectHandler(reject);
					});
				}
			};
		}
		const { schema, hasGetAll } = extractSchema(db2, tmpTrans);
		const tables = schema.tables.map((tableSchema) => createDbCoreTable(tableSchema));
		const tableMap = {};
		tables.forEach((table) => tableMap[table.name] = table);
		return {
			stack: "dbcore",
			transaction: db2.transaction.bind(db2),
			table (name) {
				const result = tableMap[name];
				if (!result)
					throw new Error(`Table '${name}' not found`);
				return tableMap[name];
			},
			MIN_KEY: -Infinity,
			MAX_KEY: getMaxKey(IdbKeyRange),
			schema
		};
	}
	function createMiddlewareStack (stackImpl, middlewares) {
		return middlewares.reduce((down, { create }) => ({ ...down, ...create(down) }), stackImpl);
	}
	function createMiddlewareStacks (middlewares, idbdb, { IDBKeyRange, indexedDB: indexedDB2 }, tmpTrans) {
		const dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
		return {
			dbcore
		};
	}
	function generateMiddlewareStacks ({ _novip: db2 }, tmpTrans) {
		const idbdb = tmpTrans.db;
		const stacks = createMiddlewareStacks(db2._middlewares, idbdb, db2._deps, tmpTrans);
		db2.core = stacks.dbcore;
		db2.tables.forEach((table) => {
			const tableName = table.name;
			if (db2.core.schema.tables.some((tbl) => tbl.name === tableName)) {
				table.core = db2.core.table(tableName);
				if (db2[tableName] instanceof db2.Table) {
					db2[tableName].core = table.core;
				}
			}
		});
	}
	function setApiOnPlace ({ _novip: db2 }, objs, tableNames, dbschema) {
		tableNames.forEach((tableName) => {
			const schema = dbschema[tableName];
			objs.forEach((obj) => {
				const propDesc = getPropertyDescriptor(obj, tableName);
				if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
					if (obj === db2.Transaction.prototype || obj instanceof db2.Transaction) {
						setProp(obj, tableName, {
							get () {
								return this.table(tableName);
							},
							set (value) {
								defineProperty(this, tableName, { value, writable: true, configurable: true, enumerable: true });
							}
						});
					} else {
						obj[tableName] = new db2.Table(tableName, schema);
					}
				}
			});
		});
	}
	function removeTablesApi ({ _novip: db2 }, objs) {
		objs.forEach((obj) => {
			for (let key in obj) {
				if (obj[key] instanceof db2.Table)
					delete obj[key];
			}
		});
	}
	function lowerVersionFirst (a, b) {
		return a._cfg.version - b._cfg.version;
	}
	function runUpgraders (db2, oldVersion, idbUpgradeTrans, reject) {
		const globalSchema = db2._dbSchema;
		const trans = db2._createTransaction("readwrite", db2._storeNames, globalSchema);
		trans.create(idbUpgradeTrans);
		trans._completion.catch(reject);
		const rejectTransaction = trans._reject.bind(trans);
		const transless = PSD.transless || PSD;
		newScope(() => {
			PSD.trans = trans;
			PSD.transless = transless;
			if (oldVersion === 0) {
				keys(globalSchema).forEach((tableName) => {
					createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
				});
				generateMiddlewareStacks(db2, idbUpgradeTrans);
				DexiePromise.follow(() => db2.on.populate.fire(trans)).catch(rejectTransaction);
			} else
				updateTablesAndIndexes(db2, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
		});
	}
	function updateTablesAndIndexes ({ _novip: db2 }, oldVersion, trans, idbUpgradeTrans) {
		const queue = [];
		const versions = db2._versions;
		let globalSchema = db2._dbSchema = buildGlobalSchema(db2, db2.idbdb, idbUpgradeTrans);
		let anyContentUpgraderHasRun = false;
		const versToRun = versions.filter((v) => v._cfg.version >= oldVersion);
		versToRun.forEach((version) => {
			queue.push(() => {
				const oldSchema = globalSchema;
				const newSchema = version._cfg.dbschema;
				adjustToExistingIndexNames(db2, oldSchema, idbUpgradeTrans);
				adjustToExistingIndexNames(db2, newSchema, idbUpgradeTrans);
				globalSchema = db2._dbSchema = newSchema;
				const diff = getSchemaDiff(oldSchema, newSchema);
				diff.add.forEach((tuple) => {
					createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
				});
				diff.change.forEach((change) => {
					if (change.recreate) {
						throw new exceptions.Upgrade("Not yet support for changing primary key");
					} else {
						const store = idbUpgradeTrans.objectStore(change.name);
						change.add.forEach((idx) => addIndex(store, idx));
						change.change.forEach((idx) => {
							store.deleteIndex(idx.name);
							addIndex(store, idx);
						});
						change.del.forEach((idxName) => store.deleteIndex(idxName));
					}
				});
				const contentUpgrade = version._cfg.contentUpgrade;
				if (contentUpgrade && version._cfg.version > oldVersion) {
					generateMiddlewareStacks(db2, idbUpgradeTrans);
					trans._memoizedTables = {};
					anyContentUpgraderHasRun = true;
					let upgradeSchema = shallowClone(newSchema);
					diff.del.forEach((table) => {
						upgradeSchema[table] = oldSchema[table];
					});
					removeTablesApi(db2, [db2.Transaction.prototype]);
					setApiOnPlace(db2, [db2.Transaction.prototype], keys(upgradeSchema), upgradeSchema);
					trans.schema = upgradeSchema;
					const contentUpgradeIsAsync = isAsyncFunction(contentUpgrade);
					if (contentUpgradeIsAsync) {
						incrementExpectedAwaits();
					}
					let returnValue;
					const promiseFollowed = DexiePromise.follow(() => {
						returnValue = contentUpgrade(trans);
						if (returnValue) {
							if (contentUpgradeIsAsync) {
								var decrementor = decrementExpectedAwaits.bind(null, null);
								returnValue.then(decrementor, decrementor);
							}
						}
					});
					return returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue) : promiseFollowed.then(() => returnValue);
				}
			});
			queue.push((idbtrans) => {
				if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
					const newSchema = version._cfg.dbschema;
					deleteRemovedTables(newSchema, idbtrans);
				}
				removeTablesApi(db2, [db2.Transaction.prototype]);
				setApiOnPlace(db2, [db2.Transaction.prototype], db2._storeNames, db2._dbSchema);
				trans.schema = db2._dbSchema;
			});
		});
		function runQueue () {
			return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
		}
		return runQueue().then(() => {
			createMissingTables(globalSchema, idbUpgradeTrans);
		});
	}
	function getSchemaDiff (oldSchema, newSchema) {
		const diff = {
			del: [],
			add: [],
			change: []
		};
		let table;
		for (table in oldSchema) {
			if (!newSchema[table])
				diff.del.push(table);
		}
		for (table in newSchema) {
			const oldDef = oldSchema[table], newDef = newSchema[table];
			if (!oldDef) {
				diff.add.push([table, newDef]);
			} else {
				const change = {
					name: table,
					def: newDef,
					recreate: false,
					del: [],
					add: [],
					change: []
				};
				if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) {
					change.recreate = true;
					diff.change.push(change);
				} else {
					const oldIndexes = oldDef.idxByName;
					const newIndexes = newDef.idxByName;
					let idxName;
					for (idxName in oldIndexes) {
						if (!newIndexes[idxName])
							change.del.push(idxName);
					}
					for (idxName in newIndexes) {
						const oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
						if (!oldIdx)
							change.add.push(newIdx);
						else if (oldIdx.src !== newIdx.src)
							change.change.push(newIdx);
					}
					if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
						diff.change.push(change);
					}
				}
			}
		}
		return diff;
	}
	function createTable (idbtrans, tableName, primKey, indexes) {
		const store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
		indexes.forEach((idx) => addIndex(store, idx));
		return store;
	}
	function createMissingTables (newSchema, idbtrans) {
		keys(newSchema).forEach((tableName) => {
			if (!idbtrans.db.objectStoreNames.contains(tableName)) {
				createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
			}
		});
	}
	function deleteRemovedTables (newSchema, idbtrans) {
		[].slice.call(idbtrans.db.objectStoreNames).forEach((storeName) => newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName));
	}
	function addIndex (store, idx) {
		store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
	}
	function buildGlobalSchema (db2, idbdb, tmpTrans) {
		const globalSchema = {};
		const dbStoreNames = slice(idbdb.objectStoreNames, 0);
		dbStoreNames.forEach((storeName) => {
			const store = tmpTrans.objectStore(storeName);
			let keyPath = store.keyPath;
			const primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
			const indexes = [];
			for (let j = 0; j < store.indexNames.length; ++j) {
				const idbindex = store.index(store.indexNames[j]);
				keyPath = idbindex.keyPath;
				var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
				indexes.push(index);
			}
			globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
		});
		return globalSchema;
	}
	function readGlobalSchema ({ _novip: db2 }, idbdb, tmpTrans) {
		db2.verno = idbdb.version / 10;
		const globalSchema = db2._dbSchema = buildGlobalSchema(db2, idbdb, tmpTrans);
		db2._storeNames = slice(idbdb.objectStoreNames, 0);
		setApiOnPlace(db2, [db2._allTables], keys(globalSchema), globalSchema);
	}
	function verifyInstalledSchema (db2, tmpTrans) {
		const installedSchema = buildGlobalSchema(db2, db2.idbdb, tmpTrans);
		const diff = getSchemaDiff(installedSchema, db2._dbSchema);
		return !(diff.add.length || diff.change.some((ch) => ch.add.length || ch.change.length));
	}
	function adjustToExistingIndexNames ({ _novip: db2 }, schema, idbtrans) {
		const storeNames = idbtrans.db.objectStoreNames;
		for (let i = 0; i < storeNames.length; ++i) {
			const storeName = storeNames[i];
			const store = idbtrans.objectStore(storeName);
			db2._hasGetAll = "getAll" in store;
			for (let j = 0; j < store.indexNames.length; ++j) {
				const indexName = store.indexNames[j];
				const keyPath = store.index(indexName).keyPath;
				const dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
				if (schema[storeName]) {
					const indexSpec = schema[storeName].idxByName[dexieName];
					if (indexSpec) {
						indexSpec.name = indexName;
						delete schema[storeName].idxByName[dexieName];
						schema[storeName].idxByName[indexName] = indexSpec;
					}
				}
			}
		}
		if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
			db2._hasGetAll = false;
		}
	}
	function parseIndexSyntax (primKeyAndIndexes) {
		return primKeyAndIndexes.split(",").map((index, indexNum) => {
			index = index.trim();
			const name = index.replace(/([&*]|\+\+)/g, "");
			const keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
			return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray2(keyPath), indexNum === 0);
		});
	}
	var Version2 = class {
		_parseStoresSpec (stores, outSchema) {
			keys(stores).forEach((tableName) => {
				if (stores[tableName] !== null) {
					var indexes = parseIndexSyntax(stores[tableName]);
					var primKey = indexes.shift();
					if (primKey.multi)
						throw new exceptions.Schema("Primary key cannot be multi-valued");
					indexes.forEach((idx) => {
						if (idx.auto)
							throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!idx.keyPath)
							throw new exceptions.Schema("Index must have a name and cannot be an empty string");
					});
					outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
				}
			});
		}
		stores (stores) {
			const db2 = this.db;
			this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
			const versions = db2._versions;
			const storesSpec = {};
			let dbschema = {};
			versions.forEach((version) => {
				extend(storesSpec, version._cfg.storesSource);
				dbschema = version._cfg.dbschema = {};
				version._parseStoresSpec(storesSpec, dbschema);
			});
			db2._dbSchema = dbschema;
			removeTablesApi(db2, [db2._allTables, db2, db2.Transaction.prototype]);
			setApiOnPlace(db2, [db2._allTables, db2, db2.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
			db2._storeNames = keys(dbschema);
			return this;
		}
		upgrade (upgradeFunction) {
			this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
			return this;
		}
	};
	function createVersionConstructor (db2) {
		return makeClassConstructor(Version2.prototype, function Version3 (versionNumber) {
			this.db = db2;
			this._cfg = {
				version: versionNumber,
				storesSource: null,
				dbschema: {},
				tables: {},
				contentUpgrade: null
			};
		});
	}
	function getDbNamesTable (indexedDB2, IDBKeyRange) {
		let dbNamesDB = indexedDB2["_dbNamesDB"];
		if (!dbNamesDB) {
			dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
				addons: [],
				indexedDB: indexedDB2,
				IDBKeyRange
			});
			dbNamesDB.version(1).stores({ dbnames: "name" });
		}
		return dbNamesDB.table("dbnames");
	}
	function hasDatabasesNative (indexedDB2) {
		return indexedDB2 && typeof indexedDB2.databases === "function";
	}
	function getDatabaseNames ({ indexedDB: indexedDB2, IDBKeyRange }) {
		return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then((infos) => infos.map((info) => info.name).filter((name) => name !== DBNAMES_DB)) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
	}
	function _onDatabaseCreated ({ indexedDB: indexedDB2, IDBKeyRange }, name) {
		!hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({ name }).catch(nop);
	}
	function _onDatabaseDeleted ({ indexedDB: indexedDB2, IDBKeyRange }, name) {
		!hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
	}
	function vip (fn) {
		return newScope(function () {
			PSD.letThrough = true;
			return fn();
		});
	}
	function idbReady () {
		var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
		if (!isSafari || !indexedDB.databases)
			return Promise.resolve();
		var intervalId;
		return new Promise(function (resolve) {
			var tryIdb = function () {
				return indexedDB.databases().finally(resolve);
			};
			intervalId = setInterval(tryIdb, 100);
			tryIdb();
		}).finally(function () {
			return clearInterval(intervalId);
		});
	}
	function dexieOpen (db2) {
		const state = db2._state;
		const { indexedDB: indexedDB2 } = db2._deps;
		if (state.isBeingOpened || db2.idbdb)
			return state.dbReadyPromise.then(() => state.dbOpenError ? rejection(state.dbOpenError) : db2);
		debug && (state.openCanceller._stackHolder = getErrorWithStack());
		state.isBeingOpened = true;
		state.dbOpenError = null;
		state.openComplete = false;
		const openCanceller = state.openCanceller;
		function throwIfCancelled () {
			if (state.openCanceller !== openCanceller)
				throw new exceptions.DatabaseClosed("db.open() was cancelled");
		}
		let resolveDbReady = state.dbReadyResolve, upgradeTransaction = null, wasCreated = false;
		const tryOpenDB = () => new DexiePromise((resolve, reject) => {
			throwIfCancelled();
			if (!indexedDB2)
				throw new exceptions.MissingAPI();
			const dbName = db2.name;
			const req = state.autoSchema ? indexedDB2.open(dbName) : indexedDB2.open(dbName, Math.round(db2.verno * 10));
			if (!req)
				throw new exceptions.MissingAPI();
			req.onerror = eventRejectHandler(reject);
			req.onblocked = wrap(db2._fireOnBlocked);
			req.onupgradeneeded = wrap((e) => {
				upgradeTransaction = req.transaction;
				if (state.autoSchema && !db2._options.allowEmptyDB) {
					req.onerror = preventDefault;
					upgradeTransaction.abort();
					req.result.close();
					const delreq = indexedDB2.deleteDatabase(dbName);
					delreq.onsuccess = delreq.onerror = wrap(() => {
						reject(new exceptions.NoSuchDatabase(`Database ${dbName} doesnt exist`));
					});
				} else {
					upgradeTransaction.onerror = eventRejectHandler(reject);
					var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
					wasCreated = oldVer < 1;
					db2._novip.idbdb = req.result;
					runUpgraders(db2, oldVer / 10, upgradeTransaction, reject);
				}
			}, reject);
			req.onsuccess = wrap(() => {
				upgradeTransaction = null;
				const idbdb = db2._novip.idbdb = req.result;
				const objectStoreNames = slice(idbdb.objectStoreNames);
				if (objectStoreNames.length > 0)
					try {
						const tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
						if (state.autoSchema)
							readGlobalSchema(db2, idbdb, tmpTrans);
						else {
							adjustToExistingIndexNames(db2, db2._dbSchema, tmpTrans);
							if (!verifyInstalledSchema(db2, tmpTrans)) {
								console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.`);
							}
						}
						generateMiddlewareStacks(db2, tmpTrans);
					} catch (e) {
					}
				connections.push(db2);
				idbdb.onversionchange = wrap((ev) => {
					state.vcFired = true;
					db2.on("versionchange").fire(ev);
				});
				idbdb.onclose = wrap((ev) => {
					db2.on("close").fire(ev);
				});
				if (wasCreated)
					_onDatabaseCreated(db2._deps, dbName);
				resolve();
			}, reject);
		}).catch((err) => {
			if (err && err.name === "UnknownError" && state.PR1398_maxLoop > 0) {
				state.PR1398_maxLoop--;
				console.warn("Dexie: Workaround for Chrome UnknownError on open()");
				return tryOpenDB();
			} else {
				return DexiePromise.reject(err);
			}
		});
		return DexiePromise.race([
			openCanceller,
			(typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(tryOpenDB)
		]).then(() => {
			throwIfCancelled();
			state.onReadyBeingFired = [];
			return DexiePromise.resolve(vip(() => db2.on.ready.fire(db2.vip))).then(function fireRemainders () {
				if (state.onReadyBeingFired.length > 0) {
					let remainders = state.onReadyBeingFired.reduce(promisableChain, nop);
					state.onReadyBeingFired = [];
					return DexiePromise.resolve(vip(() => remainders(db2.vip))).then(fireRemainders);
				}
			});
		}).finally(() => {
			state.onReadyBeingFired = null;
			state.isBeingOpened = false;
		}).then(() => {
			return db2;
		}).catch((err) => {
			state.dbOpenError = err;
			try {
				upgradeTransaction && upgradeTransaction.abort();
			} catch (_a) {
			}
			if (openCanceller === state.openCanceller) {
				db2._close();
			}
			return rejection(err);
		}).finally(() => {
			state.openComplete = true;
			resolveDbReady();
		});
	}
	function awaitIterator (iterator) {
		var callNext = (result) => iterator.next(result), doThrow = (error) => iterator.throw(error), onSuccess = step(callNext), onError = step(doThrow);
		function step (getNext) {
			return (val) => {
				var next = getNext(val), value = next.value;
				return next.done ? value : !value || typeof value.then !== "function" ? isArray2(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
			};
		}
		return step(callNext)();
	}
	function extractTransactionArgs (mode, _tableArgs_, scopeFunc) {
		var i = arguments.length;
		if (i < 2)
			throw new exceptions.InvalidArgument("Too few arguments");
		var args = new Array(i - 1);
		while (--i)
			args[i - 1] = arguments[i];
		scopeFunc = args.pop();
		var tables = flatten(args);
		return [mode, tables, scopeFunc];
	}
	function enterTransactionScope (db2, mode, storeNames, parentTransaction, scopeFunc) {
		return DexiePromise.resolve().then(() => {
			const transless = PSD.transless || PSD;
			const trans = db2._createTransaction(mode, storeNames, db2._dbSchema, parentTransaction);
			const zoneProps = {
				trans,
				transless
			};
			if (parentTransaction) {
				trans.idbtrans = parentTransaction.idbtrans;
			} else {
				try {
					trans.create();
					db2._state.PR1398_maxLoop = 3;
				} catch (ex) {
					if (ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0) {
						console.warn("Dexie: Need to reopen db");
						db2._close();
						return db2.open().then(() => enterTransactionScope(db2, mode, storeNames, null, scopeFunc));
					}
					return rejection(ex);
				}
			}
			const scopeFuncIsAsync = isAsyncFunction(scopeFunc);
			if (scopeFuncIsAsync) {
				incrementExpectedAwaits();
			}
			let returnValue;
			const promiseFollowed = DexiePromise.follow(() => {
				returnValue = scopeFunc.call(trans, trans);
				if (returnValue) {
					if (scopeFuncIsAsync) {
						var decrementor = decrementExpectedAwaits.bind(null, null);
						returnValue.then(decrementor, decrementor);
					} else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
						returnValue = awaitIterator(returnValue);
					}
				}
			}, zoneProps);
			return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then((x) => trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))) : promiseFollowed.then(() => returnValue)).then((x) => {
				if (parentTransaction)
					trans._resolve();
				return trans._completion.then(() => x);
			}).catch((e) => {
				trans._reject(e);
				return rejection(e);
			});
		});
	}
	function pad (a, value, count) {
		const result = isArray2(a) ? a.slice() : [a];
		for (let i = 0; i < count; ++i)
			result.push(value);
		return result;
	}
	function createVirtualIndexMiddleware (down) {
		return {
			...down,
			table (tableName) {
				const table = down.table(tableName);
				const { schema } = table;
				const indexLookup = {};
				const allVirtualIndexes = [];
				function addVirtualIndexes (keyPath, keyTail, lowLevelIndex) {
					const keyPathAlias = getKeyPathAlias(keyPath);
					const indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
					const keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
					const isVirtual = keyTail > 0;
					const virtualIndex = {
						...lowLevelIndex,
						isVirtual,
						keyTail,
						keyLength,
						extractKey: getKeyExtractor(keyPath),
						unique: !isVirtual && lowLevelIndex.unique
					};
					indexList.push(virtualIndex);
					if (!virtualIndex.isPrimaryKey) {
						allVirtualIndexes.push(virtualIndex);
					}
					if (keyLength > 1) {
						const virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
						addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
					}
					indexList.sort((a, b) => a.keyTail - b.keyTail);
					return virtualIndex;
				}
				const primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
				indexLookup[":id"] = [primaryKey];
				for (const index of schema.indexes) {
					addVirtualIndexes(index.keyPath, 0, index);
				}
				function findBestIndex (keyPath) {
					const result2 = indexLookup[getKeyPathAlias(keyPath)];
					return result2 && result2[0];
				}
				function translateRange (range, keyTail) {
					return {
						type: range.type === 1 ? 2 : range.type,
						lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
						lowerOpen: true,
						upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
						upperOpen: true
					};
				}
				function translateRequest (req) {
					const index = req.query.index;
					return index.isVirtual ? {
						...req,
						query: {
							index,
							range: translateRange(req.query.range, index.keyTail)
						}
					} : req;
				}
				const result = {
					...table,
					schema: {
						...schema,
						primaryKey,
						indexes: allVirtualIndexes,
						getIndexByKeyPath: findBestIndex
					},
					count (req) {
						return table.count(translateRequest(req));
					},
					query (req) {
						return table.query(translateRequest(req));
					},
					openCursor (req) {
						const { keyTail, isVirtual, keyLength } = req.query.index;
						if (!isVirtual)
							return table.openCursor(req);
						function createVirtualCursor (cursor) {
							function _continue (key) {
								key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
							}
							const virtualCursor = Object.create(cursor, {
								continue: { value: _continue },
								continuePrimaryKey: {
									value (key, primaryKey2) {
										cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
									}
								},
								primaryKey: {
									get () {
										return cursor.primaryKey;
									}
								},
								key: {
									get () {
										const key = cursor.key;
										return keyLength === 1 ? key[0] : key.slice(0, keyLength);
									}
								},
								value: {
									get () {
										return cursor.value;
									}
								}
							});
							return virtualCursor;
						}
						return table.openCursor(translateRequest(req)).then((cursor) => cursor && createVirtualCursor(cursor));
					}
				};
				return result;
			}
		};
	}
	var virtualIndexMiddleware = {
		stack: "dbcore",
		name: "VirtualIndexMiddleware",
		level: 1,
		create: createVirtualIndexMiddleware
	};
	function getObjectDiff (a, b, rv, prfx) {
		rv = rv || {};
		prfx = prfx || "";
		keys(a).forEach((prop) => {
			if (!hasOwn(b, prop)) {
				rv[prfx + prop] = void 0;
			} else {
				var ap = a[prop], bp = b[prop];
				if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
					const apTypeName = toStringTag(ap);
					const bpTypeName = toStringTag(bp);
					if (apTypeName !== bpTypeName) {
						rv[prfx + prop] = b[prop];
					} else if (apTypeName === "Object") {
						getObjectDiff(ap, bp, rv, prfx + prop + ".");
					} else if (ap !== bp) {
						rv[prfx + prop] = b[prop];
					}
				} else if (ap !== bp)
					rv[prfx + prop] = b[prop];
			}
		});
		keys(b).forEach((prop) => {
			if (!hasOwn(a, prop)) {
				rv[prfx + prop] = b[prop];
			}
		});
		return rv;
	}
	function getEffectiveKeys (primaryKey, req) {
		if (req.type === "delete")
			return req.keys;
		return req.keys || req.values.map(primaryKey.extractKey);
	}
	var hooksMiddleware = {
		stack: "dbcore",
		name: "HooksMiddleware",
		level: 2,
		create: (downCore) => ({
			...downCore,
			table (tableName) {
				const downTable = downCore.table(tableName);
				const { primaryKey } = downTable.schema;
				const tableMiddleware = {
					...downTable,
					mutate (req) {
						const dxTrans = PSD.trans;
						const { deleting, creating, updating } = dxTrans.table(tableName).hook;
						switch (req.type) {
							case "add":
								if (creating.fire === nop)
									break;
								return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
							case "put":
								if (creating.fire === nop && updating.fire === nop)
									break;
								return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
							case "delete":
								if (deleting.fire === nop)
									break;
								return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
							case "deleteRange":
								if (deleting.fire === nop)
									break;
								return dxTrans._promise("readwrite", () => deleteRange(req), true);
						}
						return downTable.mutate(req);
						function addPutOrDelete (req2) {
							const dxTrans2 = PSD.trans;
							const keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
							if (!keys2)
								throw new Error("Keys missing");
							req2 = req2.type === "add" || req2.type === "put" ? { ...req2, keys: keys2 } : { ...req2 };
							if (req2.type !== "delete")
								req2.values = [...req2.values];
							if (req2.keys)
								req2.keys = [...req2.keys];
							return getExistingValues(downTable, req2, keys2).then((existingValues) => {
								const contexts = keys2.map((key, i) => {
									const existingValue = existingValues[i];
									const ctx = { onerror: null, onsuccess: null };
									if (req2.type === "delete") {
										deleting.fire.call(ctx, key, existingValue, dxTrans2);
									} else if (req2.type === "add" || existingValue === void 0) {
										const generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
										if (key == null && generatedPrimaryKey != null) {
											key = generatedPrimaryKey;
											req2.keys[i] = key;
											if (!primaryKey.outbound) {
												setByKeyPath(req2.values[i], primaryKey.keyPath, key);
											}
										}
									} else {
										const objectDiff = getObjectDiff(existingValue, req2.values[i]);
										const additionalChanges = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
										if (additionalChanges) {
											const requestedValue = req2.values[i];
											Object.keys(additionalChanges).forEach((keyPath) => {
												if (hasOwn(requestedValue, keyPath)) {
													requestedValue[keyPath] = additionalChanges[keyPath];
												} else {
													setByKeyPath(requestedValue, keyPath, additionalChanges[keyPath]);
												}
											});
										}
									}
									return ctx;
								});
								return downTable.mutate(req2).then(({ failures, results, numFailures, lastResult }) => {
									for (let i = 0; i < keys2.length; ++i) {
										const primKey = results ? results[i] : keys2[i];
										const ctx = contexts[i];
										if (primKey == null) {
											ctx.onerror && ctx.onerror(failures[i]);
										} else {
											ctx.onsuccess && ctx.onsuccess(
												req2.type === "put" && existingValues[i] ? req2.values[i] : primKey
											);
										}
									}
									return { failures, results, numFailures, lastResult };
								}).catch((error) => {
									contexts.forEach((ctx) => ctx.onerror && ctx.onerror(error));
									return Promise.reject(error);
								});
							});
						}
						function deleteRange (req2) {
							return deleteNextChunk(req2.trans, req2.range, 1e4);
						}
						function deleteNextChunk (trans, range, limit) {
							return downTable.query({ trans, values: false, query: { index: primaryKey, range }, limit }).then(({ result }) => {
								return addPutOrDelete({ type: "delete", keys: result, trans }).then((res) => {
									if (res.numFailures > 0)
										return Promise.reject(res.failures[0]);
									if (result.length < limit) {
										return { failures: [], numFailures: 0, lastResult: void 0 };
									} else {
										return deleteNextChunk(trans, { ...range, lower: result[result.length - 1], lowerOpen: true }, limit);
									}
								});
							});
						}
					}
				};
				return tableMiddleware;
			}
		})
	};
	function getExistingValues (table, req, effectiveKeys) {
		return req.type === "add" ? Promise.resolve([]) : table.getMany({ trans: req.trans, keys: effectiveKeys, cache: "immutable" });
	}
	function getFromTransactionCache (keys2, cache, clone) {
		try {
			if (!cache)
				return null;
			if (cache.keys.length < keys2.length)
				return null;
			const result = [];
			for (let i = 0, j = 0; i < cache.keys.length && j < keys2.length; ++i) {
				if (cmp(cache.keys[i], keys2[j]) !== 0)
					continue;
				result.push(clone ? deepClone(cache.values[i]) : cache.values[i]);
				++j;
			}
			return result.length === keys2.length ? result : null;
		} catch (_a) {
			return null;
		}
	}
	var cacheExistingValuesMiddleware = {
		stack: "dbcore",
		level: -1,
		create: (core) => {
			return {
				table: (tableName) => {
					const table = core.table(tableName);
					return {
						...table,
						getMany: (req) => {
							if (!req.cache) {
								return table.getMany(req);
							}
							const cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
							if (cachedResult) {
								return DexiePromise.resolve(cachedResult);
							}
							return table.getMany(req).then((res) => {
								req.trans["_cache"] = {
									keys: req.keys,
									values: req.cache === "clone" ? deepClone(res) : res
								};
								return res;
							});
						},
						mutate: (req) => {
							if (req.type !== "add")
								req.trans["_cache"] = null;
							return table.mutate(req);
						}
					};
				}
			};
		}
	};
	function isEmptyRange (node) {
		return !("from" in node);
	}
	var RangeSet = function (fromOrTree, to) {
		if (this) {
			extend(this, arguments.length ? { d: 1, from: fromOrTree, to: arguments.length > 1 ? to : fromOrTree } : { d: 0 });
		} else {
			const rv = new RangeSet();
			if (fromOrTree && "d" in fromOrTree) {
				extend(rv, fromOrTree);
			}
			return rv;
		}
	};
	props(RangeSet.prototype, {
		add (rangeSet) {
			mergeRanges(this, rangeSet);
			return this;
		},
		addKey (key) {
			addRange(this, key, key);
			return this;
		},
		addKeys (keys2) {
			keys2.forEach((key) => addRange(this, key, key));
			return this;
		},
		[iteratorSymbol] () {
			return getRangeSetIterator(this);
		}
	});
	function addRange (target, from, to) {
		const diff = cmp(from, to);
		if (isNaN(diff))
			return;
		if (diff > 0)
			throw RangeError();
		if (isEmptyRange(target))
			return extend(target, { from, to, d: 1 });
		const left = target.l;
		const right = target.r;
		if (cmp(to, target.from) < 0) {
			left ? addRange(left, from, to) : target.l = { from, to, d: 1, l: null, r: null };
			return rebalance(target);
		}
		if (cmp(from, target.to) > 0) {
			right ? addRange(right, from, to) : target.r = { from, to, d: 1, l: null, r: null };
			return rebalance(target);
		}
		if (cmp(from, target.from) < 0) {
			target.from = from;
			target.l = null;
			target.d = right ? right.d + 1 : 1;
		}
		if (cmp(to, target.to) > 0) {
			target.to = to;
			target.r = null;
			target.d = target.l ? target.l.d + 1 : 1;
		}
		const rightWasCutOff = !target.r;
		if (left && !target.l) {
			mergeRanges(target, left);
		}
		if (right && rightWasCutOff) {
			mergeRanges(target, right);
		}
	}
	function mergeRanges (target, newSet) {
		function _addRangeSet (target2, { from, to, l, r }) {
			addRange(target2, from, to);
			if (l)
				_addRangeSet(target2, l);
			if (r)
				_addRangeSet(target2, r);
		}
		if (!isEmptyRange(newSet))
			_addRangeSet(target, newSet);
	}
	function rangesOverlap (rangeSet1, rangeSet2) {
		const i1 = getRangeSetIterator(rangeSet2);
		let nextResult1 = i1.next();
		if (nextResult1.done)
			return false;
		let a = nextResult1.value;
		const i2 = getRangeSetIterator(rangeSet1);
		let nextResult2 = i2.next(a.from);
		let b = nextResult2.value;
		while (!nextResult1.done && !nextResult2.done) {
			if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0)
				return true;
			cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
		}
		return false;
	}
	function getRangeSetIterator (node) {
		let state = isEmptyRange(node) ? null : { s: 0, n: node };
		return {
			next (key) {
				const keyProvided = arguments.length > 0;
				while (state) {
					switch (state.s) {
						case 0:
							state.s = 1;
							if (keyProvided) {
								while (state.n.l && cmp(key, state.n.from) < 0)
									state = { up: state, n: state.n.l, s: 1 };
							} else {
								while (state.n.l)
									state = { up: state, n: state.n.l, s: 1 };
							}
						case 1:
							state.s = 2;
							if (!keyProvided || cmp(key, state.n.to) <= 0)
								return { value: state.n, done: false };
						case 2:
							if (state.n.r) {
								state.s = 3;
								state = { up: state, n: state.n.r, s: 0 };
								continue;
							}
						case 3:
							state = state.up;
					}
				}
				return { done: true };
			}
		};
	}
	function rebalance (target) {
		var _a, _b;
		const diff = (((_a = target.r) === null || _a === void 0 ? void 0 : _a.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
		const r = diff > 1 ? "r" : diff < -1 ? "l" : "";
		if (r) {
			const l = r === "r" ? "l" : "r";
			const rootClone = { ...target };
			const oldRootRight = target[r];
			target.from = oldRootRight.from;
			target.to = oldRootRight.to;
			target[r] = oldRootRight[r];
			rootClone[r] = oldRootRight[l];
			target[l] = rootClone;
			rootClone.d = computeDepth(rootClone);
		}
		target.d = computeDepth(target);
	}
	function computeDepth ({ r, l }) {
		return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
	}
	var observabilityMiddleware = {
		stack: "dbcore",
		level: 0,
		create: (core) => {
			const dbName = core.schema.name;
			const FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
			return {
				...core,
				table: (tableName) => {
					const table = core.table(tableName);
					const { schema } = table;
					const { primaryKey } = schema;
					const { extractKey, outbound } = primaryKey;
					const tableClone = {
						...table,
						mutate: (req) => {
							const trans = req.trans;
							const mutatedParts = trans.mutatedParts || (trans.mutatedParts = {});
							const getRangeSet = (indexName) => {
								const part = `idb://${dbName}/${tableName}/${indexName}`;
								return mutatedParts[part] || (mutatedParts[part] = new RangeSet());
							};
							const pkRangeSet = getRangeSet("");
							const delsRangeSet = getRangeSet(":dels");
							const { type: type2 } = req;
							let [keys2, newObjs] = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [[], req.values] : [];
							const oldCache = req.trans["_cache"];
							return table.mutate(req).then((res) => {
								if (isArray2(keys2)) {
									if (type2 !== "delete")
										keys2 = res.results;
									pkRangeSet.addKeys(keys2);
									const oldObjs = getFromTransactionCache(keys2, oldCache);
									if (!oldObjs && type2 !== "add") {
										delsRangeSet.addKeys(keys2);
									}
									if (oldObjs || newObjs) {
										trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
									}
								} else if (keys2) {
									const range = { from: keys2.lower, to: keys2.upper };
									delsRangeSet.add(range);
									pkRangeSet.add(range);
								} else {
									pkRangeSet.add(FULL_RANGE);
									delsRangeSet.add(FULL_RANGE);
									schema.indexes.forEach((idx) => getRangeSet(idx.name).add(FULL_RANGE));
								}
								return res;
							});
						}
					};
					const getRange = ({ query: { index, range } }) => {
						var _a, _b;
						return [
							index,
							new RangeSet((_a = range.lower) !== null && _a !== void 0 ? _a : core.MIN_KEY, (_b = range.upper) !== null && _b !== void 0 ? _b : core.MAX_KEY)
						];
					};
					const readSubscribers = {
						get: (req) => [primaryKey, new RangeSet(req.key)],
						getMany: (req) => [primaryKey, new RangeSet().addKeys(req.keys)],
						count: getRange,
						query: getRange,
						openCursor: getRange
					};
					keys(readSubscribers).forEach((method) => {
						tableClone[method] = function (req) {
							const { subscr } = PSD;
							if (subscr) {
								const getRangeSet = (indexName) => {
									const part = `idb://${dbName}/${tableName}/${indexName}`;
									return subscr[part] || (subscr[part] = new RangeSet());
								};
								const pkRangeSet = getRangeSet("");
								const delsRangeSet = getRangeSet(":dels");
								const [queriedIndex, queriedRanges] = readSubscribers[method](req);
								getRangeSet(queriedIndex.name || "").add(queriedRanges);
								if (!queriedIndex.isPrimaryKey) {
									if (method === "count") {
										delsRangeSet.add(FULL_RANGE);
									} else {
										const keysPromise = method === "query" && outbound && req.values && table.query({
											...req,
											values: false
										});
										return table[method].apply(this, arguments).then((res) => {
											if (method === "query") {
												if (outbound && req.values) {
													return keysPromise.then(({ result: resultingKeys }) => {
														pkRangeSet.addKeys(resultingKeys);
														return res;
													});
												}
												const pKeys = req.values ? res.result.map(extractKey) : res.result;
												if (req.values) {
													pkRangeSet.addKeys(pKeys);
												} else {
													delsRangeSet.addKeys(pKeys);
												}
											} else if (method === "openCursor") {
												const cursor = res;
												const wantValues = req.values;
												return cursor && Object.create(cursor, {
													key: {
														get () {
															delsRangeSet.addKey(cursor.primaryKey);
															return cursor.key;
														}
													},
													primaryKey: {
														get () {
															const pkey = cursor.primaryKey;
															delsRangeSet.addKey(pkey);
															return pkey;
														}
													},
													value: {
														get () {
															wantValues && pkRangeSet.addKey(cursor.primaryKey);
															return cursor.value;
														}
													}
												});
											}
											return res;
										});
									}
								}
							}
							return table[method].apply(this, arguments);
						};
					});
					return tableClone;
				}
			};
		}
	};
	function trackAffectedIndexes (getRangeSet, schema, oldObjs, newObjs) {
		function addAffectedIndex (ix) {
			const rangeSet = getRangeSet(ix.name || "");
			function extractKey (obj) {
				return obj != null ? ix.extractKey(obj) : null;
			}
			const addKeyOrKeys = (key) => ix.multiEntry && isArray2(key) ? key.forEach((key2) => rangeSet.addKey(key2)) : rangeSet.addKey(key);
			(oldObjs || newObjs).forEach((_, i) => {
				const oldKey = oldObjs && extractKey(oldObjs[i]);
				const newKey = newObjs && extractKey(newObjs[i]);
				if (cmp(oldKey, newKey) !== 0) {
					if (oldKey != null)
						addKeyOrKeys(oldKey);
					if (newKey != null)
						addKeyOrKeys(newKey);
				}
			});
		}
		schema.indexes.forEach(addAffectedIndex);
	}
	var Dexie$1 = class _Dexie$1 {
		constructor(name, options) {
			this._middlewares = {};
			this.verno = 0;
			const deps = _Dexie$1.dependencies;
			this._options = options = {
				addons: _Dexie$1.addons,
				autoOpen: true,
				indexedDB: deps.indexedDB,
				IDBKeyRange: deps.IDBKeyRange,
				...options
			};
			this._deps = {
				indexedDB: options.indexedDB,
				IDBKeyRange: options.IDBKeyRange
			};
			const { addons } = options;
			this._dbSchema = {};
			this._versions = [];
			this._storeNames = [];
			this._allTables = {};
			this.idbdb = null;
			this._novip = this;
			const state = {
				dbOpenError: null,
				isBeingOpened: false,
				onReadyBeingFired: null,
				openComplete: false,
				dbReadyResolve: nop,
				dbReadyPromise: null,
				cancelOpen: nop,
				openCanceller: null,
				autoSchema: true,
				PR1398_maxLoop: 3
			};
			state.dbReadyPromise = new DexiePromise((resolve) => {
				state.dbReadyResolve = resolve;
			});
			state.openCanceller = new DexiePromise((_, reject) => {
				state.cancelOpen = reject;
			});
			this._state = state;
			this.name = name;
			this.on = Events(this, "populate", "blocked", "versionchange", "close", { ready: [promisableChain, nop] });
			this.on.ready.subscribe = override(this.on.ready.subscribe, (subscribe) => {
				return (subscriber, bSticky) => {
					_Dexie$1.vip(() => {
						const state2 = this._state;
						if (state2.openComplete) {
							if (!state2.dbOpenError)
								DexiePromise.resolve().then(subscriber);
							if (bSticky)
								subscribe(subscriber);
						} else if (state2.onReadyBeingFired) {
							state2.onReadyBeingFired.push(subscriber);
							if (bSticky)
								subscribe(subscriber);
						} else {
							subscribe(subscriber);
							const db2 = this;
							if (!bSticky)
								subscribe(function unsubscribe () {
									db2.on.ready.unsubscribe(subscriber);
									db2.on.ready.unsubscribe(unsubscribe);
								});
						}
					});
				};
			});
			this.Collection = createCollectionConstructor(this);
			this.Table = createTableConstructor(this);
			this.Transaction = createTransactionConstructor(this);
			this.Version = createVersionConstructor(this);
			this.WhereClause = createWhereClauseConstructor(this);
			this.on("versionchange", (ev) => {
				if (ev.newVersion > 0)
					console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`);
				else
					console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`);
				this.close();
			});
			this.on("blocked", (ev) => {
				if (!ev.newVersion || ev.newVersion < ev.oldVersion)
					console.warn(`Dexie.delete('${this.name}') was blocked`);
				else
					console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${ev.oldVersion / 10}`);
			});
			this._maxKey = getMaxKey(options.IDBKeyRange);
			this._createTransaction = (mode, storeNames, dbschema, parentTransaction) => new this.Transaction(mode, storeNames, dbschema, this._options.chromeTransactionDurability, parentTransaction);
			this._fireOnBlocked = (ev) => {
				this.on("blocked").fire(ev);
				connections.filter((c) => c.name === this.name && c !== this && !c._state.vcFired).map((c) => c.on("versionchange").fire(ev));
			};
			this.use(virtualIndexMiddleware);
			this.use(hooksMiddleware);
			this.use(observabilityMiddleware);
			this.use(cacheExistingValuesMiddleware);
			this.vip = Object.create(this, { _vip: { value: true } });
			addons.forEach((addon) => addon(this));
		}
		version (versionNumber) {
			if (isNaN(versionNumber) || versionNumber < 0.1)
				throw new exceptions.Type(`Given version is not a positive number`);
			versionNumber = Math.round(versionNumber * 10) / 10;
			if (this.idbdb || this._state.isBeingOpened)
				throw new exceptions.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, versionNumber);
			const versions = this._versions;
			var versionInstance = versions.filter((v) => v._cfg.version === versionNumber)[0];
			if (versionInstance)
				return versionInstance;
			versionInstance = new this.Version(versionNumber);
			versions.push(versionInstance);
			versions.sort(lowerVersionFirst);
			versionInstance.stores({});
			this._state.autoSchema = false;
			return versionInstance;
		}
		_whenReady (fn) {
			return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise((resolve, reject) => {
				if (this._state.openComplete) {
					return reject(new exceptions.DatabaseClosed(this._state.dbOpenError));
				}
				if (!this._state.isBeingOpened) {
					if (!this._options.autoOpen) {
						reject(new exceptions.DatabaseClosed());
						return;
					}
					this.open().catch(nop);
				}
				this._state.dbReadyPromise.then(resolve, reject);
			}).then(fn);
		}
		use ({ stack, create, level, name }) {
			if (name)
				this.unuse({ stack, name });
			const middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
			middlewares.push({ stack, create, level: level == null ? 10 : level, name });
			middlewares.sort((a, b) => a.level - b.level);
			return this;
		}
		unuse ({ stack, name, create }) {
			if (stack && this._middlewares[stack]) {
				this._middlewares[stack] = this._middlewares[stack].filter((mw) => create ? mw.create !== create : name ? mw.name !== name : false);
			}
			return this;
		}
		open () {
			return dexieOpen(this);
		}
		_close () {
			const state = this._state;
			const idx = connections.indexOf(this);
			if (idx >= 0)
				connections.splice(idx, 1);
			if (this.idbdb) {
				try {
					this.idbdb.close();
				} catch (e) {
				}
				this._novip.idbdb = null;
			}
			state.dbReadyPromise = new DexiePromise((resolve) => {
				state.dbReadyResolve = resolve;
			});
			state.openCanceller = new DexiePromise((_, reject) => {
				state.cancelOpen = reject;
			});
		}
		close () {
			this._close();
			const state = this._state;
			this._options.autoOpen = false;
			state.dbOpenError = new exceptions.DatabaseClosed();
			if (state.isBeingOpened)
				state.cancelOpen(state.dbOpenError);
		}
		delete () {
			const hasArguments = arguments.length > 0;
			const state = this._state;
			return new DexiePromise((resolve, reject) => {
				const doDelete = () => {
					this.close();
					var req = this._deps.indexedDB.deleteDatabase(this.name);
					req.onsuccess = wrap(() => {
						_onDatabaseDeleted(this._deps, this.name);
						resolve();
					});
					req.onerror = eventRejectHandler(reject);
					req.onblocked = this._fireOnBlocked;
				};
				if (hasArguments)
					throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
				if (state.isBeingOpened) {
					state.dbReadyPromise.then(doDelete);
				} else {
					doDelete();
				}
			});
		}
		backendDB () {
			return this.idbdb;
		}
		isOpen () {
			return this.idbdb !== null;
		}
		hasBeenClosed () {
			const dbOpenError = this._state.dbOpenError;
			return dbOpenError && dbOpenError.name === "DatabaseClosed";
		}
		hasFailed () {
			return this._state.dbOpenError !== null;
		}
		dynamicallyOpened () {
			return this._state.autoSchema;
		}
		get tables () {
			return keys(this._allTables).map((name) => this._allTables[name]);
		}
		transaction () {
			const args = extractTransactionArgs.apply(this, arguments);
			return this._transaction.apply(this, args);
		}
		_transaction (mode, tables, scopeFunc) {
			let parentTransaction = PSD.trans;
			if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1)
				parentTransaction = null;
			const onlyIfCompatible = mode.indexOf("?") !== -1;
			mode = mode.replace("!", "").replace("?", "");
			let idbMode, storeNames;
			try {
				storeNames = tables.map((table) => {
					var storeName = table instanceof this.Table ? table.name : table;
					if (typeof storeName !== "string")
						throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
					return storeName;
				});
				if (mode == "r" || mode === READONLY)
					idbMode = READONLY;
				else if (mode == "rw" || mode == READWRITE)
					idbMode = READWRITE;
				else
					throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
				if (parentTransaction) {
					if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
						if (onlyIfCompatible) {
							parentTransaction = null;
						} else
							throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
					}
					if (parentTransaction) {
						storeNames.forEach((storeName) => {
							if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
								if (onlyIfCompatible) {
									parentTransaction = null;
								} else
									throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
							}
						});
					}
					if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
						parentTransaction = null;
					}
				}
			} catch (e) {
				return parentTransaction ? parentTransaction._promise(null, (_, reject) => {
					reject(e);
				}) : rejection(e);
			}
			const enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
			return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, () => this._whenReady(enterTransaction)) : this._whenReady(enterTransaction);
		}
		table (tableName) {
			if (!hasOwn(this._allTables, tableName)) {
				throw new exceptions.InvalidTable(`Table ${tableName} does not exist`);
			}
			return this._allTables[tableName];
		}
	};
	var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
	var Observable = class {
		constructor(subscribe) {
			this._subscribe = subscribe;
		}
		subscribe (x, error, complete) {
			return this._subscribe(!x || typeof x === "function" ? { next: x, error, complete } : x);
		}
		[symbolObservable] () {
			return this;
		}
	};
	function extendObservabilitySet (target, newSet) {
		keys(newSet).forEach((part) => {
			const rangeSet = target[part] || (target[part] = new RangeSet());
			mergeRanges(rangeSet, newSet[part]);
		});
		return target;
	}
	function liveQuery (querier) {
		let hasValue = false;
		let currentValue = void 0;
		const observable = new Observable((observer) => {
			const scopeFuncIsAsync = isAsyncFunction(querier);
			function execute (subscr) {
				if (scopeFuncIsAsync) {
					incrementExpectedAwaits();
				}
				const exec = () => newScope(querier, { subscr, trans: null });
				const rv = PSD.trans ? usePSD(PSD.transless, exec) : exec();
				if (scopeFuncIsAsync) {
					rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
				}
				return rv;
			}
			let closed = false;
			let accumMuts = {};
			let currentObs = {};
			const subscription = {
				get closed () {
					return closed;
				},
				unsubscribe: () => {
					closed = true;
					globalEvents.storagemutated.unsubscribe(mutationListener);
				}
			};
			observer.start && observer.start(subscription);
			let querying = false, startedListening = false;
			function shouldNotify () {
				return keys(currentObs).some((key) => accumMuts[key] && rangesOverlap(accumMuts[key], currentObs[key]));
			}
			const mutationListener = (parts) => {
				extendObservabilitySet(accumMuts, parts);
				if (shouldNotify()) {
					doQuery();
				}
			};
			const doQuery = () => {
				if (querying || closed)
					return;
				accumMuts = {};
				const subscr = {};
				const ret = execute(subscr);
				if (!startedListening) {
					globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
					startedListening = true;
				}
				querying = true;
				Promise.resolve(ret).then((result) => {
					hasValue = true;
					currentValue = result;
					querying = false;
					if (closed)
						return;
					if (shouldNotify()) {
						doQuery();
					} else {
						accumMuts = {};
						currentObs = subscr;
						observer.next && observer.next(result);
					}
				}, (err) => {
					querying = false;
					hasValue = false;
					observer.error && observer.error(err);
					subscription.unsubscribe();
				});
			};
			doQuery();
			return subscription;
		});
		observable.hasValue = () => hasValue;
		observable.getValue = () => currentValue;
		return observable;
	}
	var domDeps;
	try {
		domDeps = {
			indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
			IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
		};
	} catch (e) {
		domDeps = { indexedDB: null, IDBKeyRange: null };
	}
	var Dexie = Dexie$1;
	props(Dexie, {
		...fullNameExceptions,
		delete (databaseName) {
			const db2 = new Dexie(databaseName, { addons: [] });
			return db2.delete();
		},
		exists (name) {
			return new Dexie(name, { addons: [] }).open().then((db2) => {
				db2.close();
				return true;
			}).catch("NoSuchDatabaseError", () => false);
		},
		getDatabaseNames (cb) {
			try {
				return getDatabaseNames(Dexie.dependencies).then(cb);
			} catch (_a) {
				return rejection(new exceptions.MissingAPI());
			}
		},
		defineClass () {
			function Class (content) {
				extend(this, content);
			}
			return Class;
		},
		ignoreTransaction (scopeFunc) {
			return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
		},
		vip,
		async: function (generatorFn) {
			return function () {
				try {
					var rv = awaitIterator(generatorFn.apply(this, arguments));
					if (!rv || typeof rv.then !== "function")
						return DexiePromise.resolve(rv);
					return rv;
				} catch (e) {
					return rejection(e);
				}
			};
		},
		spawn: function (generatorFn, args, thiz) {
			try {
				var rv = awaitIterator(generatorFn.apply(thiz, args || []));
				if (!rv || typeof rv.then !== "function")
					return DexiePromise.resolve(rv);
				return rv;
			} catch (e) {
				return rejection(e);
			}
		},
		currentTransaction: {
			get: () => PSD.trans || null
		},
		waitFor: function (promiseOrFunction, optionalTimeout) {
			const promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
			return PSD.trans ? PSD.trans.waitFor(promise) : promise;
		},
		Promise: DexiePromise,
		debug: {
			get: () => debug,
			set: (value) => {
				setDebug(value, value === "dexie" ? () => true : dexieStackFrameFilter);
			}
		},
		derive,
		extend,
		props,
		override,
		Events,
		on: globalEvents,
		liveQuery,
		extendObservabilitySet,
		getByKeyPath,
		setByKeyPath,
		delByKeyPath,
		shallowClone,
		deepClone,
		getObjectDiff,
		cmp,
		asap: asap$1,
		minKey,
		addons: [],
		connections,
		errnames,
		dependencies: domDeps,
		semVer: DEXIE_VERSION,
		version: DEXIE_VERSION.split(".").map((n) => parseInt(n)).reduce((p, c, i) => p + c / Math.pow(10, i * 2))
	});
	Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange);
	if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
		globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, (updatedParts) => {
			if (!propagatingLocally) {
				let event;
				if (isIEOrEdge) {
					event = document.createEvent("CustomEvent");
					event.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
				} else {
					event = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
						detail: updatedParts
					});
				}
				propagatingLocally = true;
				dispatchEvent(event);
				propagatingLocally = false;
			}
		});
		addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, ({ detail }) => {
			if (!propagatingLocally) {
				propagateLocally(detail);
			}
		});
	}
	function propagateLocally (updateParts) {
		let wasMe = propagatingLocally;
		try {
			propagatingLocally = true;
			globalEvents.storagemutated.fire(updateParts);
		} finally {
			propagatingLocally = wasMe;
		}
	}
	var propagatingLocally = false;
	if (typeof BroadcastChannel !== "undefined") {
		const bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
		if (typeof bc.unref === "function") {
			bc.unref();
		}
		globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, (changedParts) => {
			if (!propagatingLocally) {
				bc.postMessage(changedParts);
			}
		});
		bc.onmessage = (ev) => {
			if (ev.data)
				propagateLocally(ev.data);
		};
	} else if (typeof self !== "undefined" && typeof navigator !== "undefined") {
		globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, (changedParts) => {
			try {
				if (!propagatingLocally) {
					if (typeof localStorage !== "undefined") {
						localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, JSON.stringify({
							trig: Math.random(),
							changedParts
						}));
					}
					if (typeof self["clients"] === "object") {
						[...self["clients"].matchAll({ includeUncontrolled: true })].forEach((client) => client.postMessage({
							type: STORAGE_MUTATED_DOM_EVENT_NAME,
							changedParts
						}));
					}
				}
			} catch (_a) {
			}
		});
		if (typeof addEventListener !== "undefined") {
			addEventListener("storage", (ev) => {
				if (ev.key === STORAGE_MUTATED_DOM_EVENT_NAME) {
					const data = JSON.parse(ev.newValue);
					if (data)
						propagateLocally(data.changedParts);
				}
			});
		}
		const swContainer = self.document && navigator.serviceWorker;
		if (swContainer) {
			swContainer.addEventListener("message", propagateMessageLocally);
		}
	}
	function propagateMessageLocally ({ data }) {
		if (data && data.type === STORAGE_MUTATED_DOM_EVENT_NAME) {
			propagateLocally(data.changedParts);
		}
	}
	DexiePromise.rejectionMapper = mapError;
	setDebug(debug, dexieStackFrameFilter);
	var import_moment = __toESM(require_moment(), 1);
	var Database = class _Database extends Dexie$1 {
		constructor() {
			super("IwaraDownloadTool");
			this.version(2).stores({
				follows: "id, username, name, friend, following, followedBy",
				friends: "id, username, name, friend, following, followedBy",
				videos: "ID, Type, UploadTime, Private, Unlisted",
				caches: "ID"
			});
			this.follows = this.table("follows");
			this.friends = this.table("friends");
			this.videos = this.table("videos");
			this.caches = this.table("caches");
		}
		async getFilteredVideos (startTime, endTime) {
			if (isNullOrUndefined(startTime) || isNullOrUndefined(endTime)) return [];
			return this.videos.where("UploadTime").between(startTime, endTime, true, true).and((video) => (video.Type === "partial" || video.Type === "full") && (video.Private || video.Unlisted)).and((video) => !isNullOrUndefined(video.RAW)).toArray();
		}
		static getInstance () {
			if (isNullOrUndefined(_Database.instance)) _Database.instance = new _Database();
			return _Database.instance;
		}
		static destroyInstance () {
			_Database.instance = void 0;
		}
	};
	var db = Database.getInstance();
	Date.prototype.format = function (format) {
		return (0, import_moment.default)(this).format(format);
	};
	var unlimitedFetch = async (input, init = {}, options) => {
		const {
			force = false,
			retry = false,
			maxRetries = 3,
			retryDelay = 3e3,
			successStatus = [200, 201],
			failStatuses = [403, 404],
			onFail,
			onRetry
		} = options || {};
		const successStatuses = Array.isArray(successStatus) ? successStatus : [successStatus];
		const failStatusList = Array.isArray(failStatuses) ? failStatuses : [failStatuses];
		const url = typeof input === "string" ? input : input.url;
		const isCrossOrigin = force || new URL(url).hostname !== unsafeWindow.location.hostname;
		const doFetch = async () => {
			if (isCrossOrigin) {
				return new Promise((resolve, reject) => {
					GM_xmlhttpRequest({
						method: init.method,
						url,
						headers: init.headers || {},
						data: init.body || void 0,
						onload: (response) => {
							resolve(new Response(response.responseText, {
								status: response.status,
								statusText: response.statusText
							}));
						},
						onerror: reject
					});
				});
			} else {
				return originalFetch(input, init);
			}
		};
		if (!retry) return doFetch();
		let lastResponse = await doFetch();
		let attempts = 1;
		while (attempts < maxRetries) {
			if (successStatuses.includes(lastResponse.status)) return lastResponse;
			if (failStatusList.includes(lastResponse.status)) break;
			attempts++;
			if (onRetry) await onRetry(lastResponse);
			await delay(retryDelay);
			lastResponse = await doFetch();
		}
		if (onFail) await onFail(lastResponse);
		return lastResponse;
	};
	var findElement = (element, condition) => {
		while (!isNullOrUndefined(element) && !element.matches(condition)) {
			if (isNullOrUndefined(element.parentElement)) return void 0;
			element = element.parentElement;
		}
		return element.querySelectorAll(condition).length > 1 ? void 0 : element;
	};
	var renderNode = (renderCode) => {
		let code = prune(renderCode);
		if (isNullOrUndefined(code)) throw new Error("RenderCode null");
		if (typeof code === "string") {
			return document.createTextNode(code.replaceVariable(i18nList[config.language]));
		}
		if (code instanceof Node) {
			return code;
		}
		if (typeof renderCode !== "object" || !renderCode.nodeType) {
			throw new Error("Invalid arguments");
		}
		const {
			nodeType,
			attributes,
			events,
			className,
			childs
		} = renderCode;
		const node = document.createElement(nodeType);
		if (!isNullOrUndefined(events) && Object.keys(events).length > 0) {
			Object.entries(events).forEach(([eventName, eventHandler]) => originalAddEventListener.call(node, eventName, eventHandler));
		}
		if (!isNullOrUndefined(className) && className.length > 0) {
			node.classList.add(...typeof className === "string" ? [className] : className);
		}
		if (!isNullOrUndefined(childs)) {
			node.append(...(isArray(childs) ? childs : [childs]).filter((child) => !isNullOrUndefined(child)).map(renderNode));
		}
		if (!isNullOrUndefined(attributes) && Object.keys(attributes).length > 0) {
			Object.entries(attributes).forEach(([key, value]) => {
				node[key] = value;
				node.setAttribute(key, value);
			});
		}
		return node;
	};
	var activeToasts = new Dictionary();
	var toastTimeouts = new Map();
	var toastIntervals = new Map();
	var toastContainers = new Map();
	var offscreenContainer = document.createElement("div");
	offscreenContainer.classList.add("offscreen-container");
	var getContainer = (gravity, position) => {
		const containerId = `toast-container-${gravity}-${position}`;
		if (!toastContainers.has(containerId)) {
			const container = document.createElement("div");
			container.id = containerId;
			container.classList.add("toast-container", `toast-${gravity}`, `toast-${position}`);
			document.body.appendChild(container);
			toastContainers.set(containerId, container);
		}
		return toastContainers.get(containerId);
	};
	var addTimeout = (toast, callback) => {
		if (isNullOrUndefined(toast.options.duration)) return;
		delTimeout(toast);
		const duration = toast.options.duration;
		const timeoutId = window.setTimeout(() => {
			callback();
			delTimeout(toast);
		}, duration);
		toastTimeouts.set(toast, timeoutId);
		if (!toast.showProgress) return;
		if (isNullOrUndefined(toast.progress)) return;
		const startTime = Date.now();
		const updateRemainingTime = () => {
			if (isNullOrUndefined(toast.progress)) return;
			const elapsed = Date.now() - startTime;
			const remaining = Math.max(0, duration - elapsed);
			toast.progress.style.setProperty("--toast-progress", `${remaining / duration}`);
		};
		toast.progress.style.setProperty("--toast-progress", `1`);
		const intervalId = window.setInterval(updateRemainingTime, 20);
		toastIntervals.set(toast, intervalId);
	};
	var delTimeout = (toast) => {
		const timeoutId = toastTimeouts.get(toast);
		if (!isNullOrUndefined(timeoutId)) {
			clearTimeout(timeoutId);
			toastTimeouts.delete(toast);
		}
		if (!toast.showProgress) return;
		const intervalId = toastIntervals.get(toast);
		if (!isNullOrUndefined(intervalId)) {
			clearInterval(intervalId);
			toastIntervals.delete(toast);
		}
		if (!isNullOrUndefined(toast.progress)) {
			toast.progress.style.removeProperty("--toast-progress");
		}
	};
	var Toast = class _Toast {
		static defaults = {
			id: UUID(),
			gravity: "top",
			position: "left",
			stopOnFocus: true,
			oldestFirst: true,
			showProgress: false
		};
		constructor(options) {
			this.options = {
				..._Toast.defaults,
				...options
			};
			this.id = this.options.id;
			this.root = getContainer(this.options.gravity, this.options.position);
			this.gravity = this.options.gravity;
			this.position = this.options.position;
			this.stopOnFocus = this.options.stopOnFocus;
			this.oldestFirst = this.options.oldestFirst;
			this.showProgress = this.options.showProgress;
			this.element = document.createElement("div");
			this.applyBaseStyles().addCloseButton().createContent().ensureCloseMethod().bindEvents();
			activeToasts.set(this.id, this);
		}
		applyBaseStyles () {
			this.element.classList.add("toast");
			if (this.options.className) {
				const classes = Array.isArray(this.options.className) ? this.options.className : [this.options.className];
				classes.forEach((cls) => this.element.classList.add(cls));
			}
			return this;
		}
		createContent () {
			this.content = document.createElement("div");
			this.content.classList.add("toast-content");
			if (this.options.text) {
				this.content.textContent = this.options.text;
			}
			if (this.options.node) {
				this.content.appendChild(this.options.node);
			}
			if (this.options.style) {
				this.applyStyles(this.content, this.options.style);
			}
			if (this.options.showProgress) {
				this.progress = document.createElement("div");
				this.progress.classList.add("toast-progress");
				this.content.appendChild(this.progress);
			}
			this.element.appendChild(this.content);
			return this;
		}
		addCloseButton () {
			if (this.options.close) {
				this.closeButton = document.createElement("span");
				this.closeButton.className = "toast-close";
				this.closeButton.textContent = "🗙";
				this.closeButtonHandler = () => this.hide("close-button");
				this.closeButton.addEventListener("click", this.closeButtonHandler);
				this.element.appendChild(this.closeButton);
			}
			return this;
		}
		setToastRect () {
			if (!this.element.classList.contains("show")) offscreenContainer.appendChild(this.element);
			this.element.style.removeProperty("--toast-height");
			this.element.style.removeProperty("--toast-width");
			this.element.style.setProperty("max-height", "none", "important");
			this.element.style.setProperty("max-width", `${this.root.getBoundingClientRect().width}px`, "important");
			const {
				height,
				width
			} = this.element.getBoundingClientRect();
			this.element.style.setProperty("--toast-height", `${height}px`);
			this.element.style.setProperty("--toast-width", `${width}px`);
			this.element.style.removeProperty("max-height");
			this.element.style.removeProperty("max-width");
			if (!this.element.classList.contains("show")) offscreenContainer.removeChild(this.element);
			return this;
		}
		ensureCloseMethod () {
			if (isNullOrUndefined(this.options.duration) && isNullOrUndefined(this.options.close) && isNullOrUndefined(this.options.onClick)) {
				this.options.onClick = () => this.hide("other");
			}
			return this;
		}
		bindEvents () {
			if (this.stopOnFocus && !isNullOrUndefined(this.options.duration) && this.options.duration > 0) {
				this.mouseOverHandler = () => delTimeout(this);
				this.mouseLeaveHandler = () => addTimeout(this, () => this.hide("timeout"));
				this.element.addEventListener("mouseover", this.mouseOverHandler);
				this.element.addEventListener("mouseleave", this.mouseLeaveHandler);
			}
			if (!isNullOrUndefined(this.options.onClick)) {
				this.clickHandler = this.options.onClick.bind(this);
				this.element.addEventListener("click", this.clickHandler);
			}
			return this;
		}
		applyStyles (element, styles) {
			function camelToKebab (str) {
				return str.replace(/([A-Z])/g, "-$1").toLowerCase();
			}
			for (const key in styles) {
				const value = styles[key];
				const property = camelToKebab(key);
				if (isNullOrUndefined(value)) {
					element.style.removeProperty(property);
					continue;
				}
				const important = value.includes("!important");
				const cleanValue = value.replace(/\s*!important\s*/, "").trim();
				element.style.setProperty(property, cleanValue, important ? "important" : "");
			}
		}
		toggleAnimationState (animation) {
			if (!this.element.classList.replace(animation ? "hide" : "show", animation ? "show" : "hide")) {
				this.element.classList.add(animation ? "show" : "hide");
			}
			return this;
		}
		insertToastElement () {
			if (this.oldestFirst) {
				this.root.insertBefore(this.element, this.root.firstChild);
			} else {
				if (this.root.lastChild) {
					this.root.insertBefore(this.element, this.root.lastChild.nextSibling);
				} else {
					this.root.appendChild(this.element);
				}
			}
			return this;
		}
		setupAutoHide () {
			if (!isNullOrUndefined(this.options.duration) && this.options.duration > 0) {
				addTimeout(this, () => this.hide("timeout"));
			}
			return this;
		}
		show () {
			this.setToastRect().insertToastElement().toggleAnimationState(true).setupAutoHide();
			return this;
		}
		showToast () {
			return this.show();
		}
		removeEventListeners () {
			if (this.mouseOverHandler) {
				this.element.removeEventListener("mouseover", this.mouseOverHandler);
			}
			if (this.mouseLeaveHandler) {
				this.element.removeEventListener("mouseleave", this.mouseLeaveHandler);
			}
			if (this.clickHandler) {
				this.element.removeEventListener("click", this.clickHandler);
			}
			if (this.options.close && this.closeButton && this.closeButtonHandler) {
				this.closeButton.removeEventListener("click", this.closeButtonHandler);
			}
			return this;
		}
		hide (reason = "other") {
			if (!this.element) return;
			delTimeout(this);
			activeToasts.delete(this.id);
			this.animationEndHandler = (e) => {
				if (e.animationName.startsWith("toast-out")) {
					this.element.removeEventListener("animationend", this.animationEndHandler);
					this.element.remove();
					this.options.onClose?.call(this, new CustomEvent("toast-close", {
						detail: {
							reason
						}
					}));
				}
			};
			this.element.addEventListener("animationend", this.animationEndHandler);
			this.removeEventListeners().toggleAnimationState(false);
		}
		hideToast () {
			this.hide("other");
		}
	};
	function createToast (options) {
		return new Toast(options);
	}
	globalThis.Toast = createToast;
	globalThis.Toastify = createToast;
	(document.body ?? document.documentElement).appendChild(offscreenContainer);
	window.addEventListener("resize", debounce(() => {
		for (const [_, toast] of activeToasts) {
			toast.setToastRect();
		}
	}, 100));
	async function refreshToken () {
		const {
			authorization
		} = config;
		if (!isLoggedIn()) throw new Error(`Refresh token failed: Not logged in`);
		const refreshToken2 = localStorage.getItem("token") ?? authorization;
		if (isNullOrUndefined(refreshToken2) || refreshToken2.isEmpty()) {
			throw new Error(`Refresh token failed: no refresh token`);
		}
		const oldAccessToken = localStorage.getItem("accessToken");
		try {
			const res = await unlimitedFetch("https://api.iwara.tv/user/token", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${refreshToken2}`
				}
			});
			if (!res.ok) {
				throw new Error(`Refresh token failed with status: ${res.status}`);
			}
			const {
				accessToken
			} = await res.json();
			if (!accessToken) {
				throw new Error(`No access token in response`);
			}
			if (!oldAccessToken || oldAccessToken !== accessToken) {
				localStorage.setItem("accessToken", accessToken);
			}
			return accessToken;
		} catch (error) {
			originalConsole.warn("Failed to refresh token:", error);
			if (!oldAccessToken?.trim()) {
				throw new Error(`Refresh token failed and no valid access token available`);
			}
			return oldAccessToken;
		}
	}
	async function getAuth (url) {
		return prune({
			"Accept": "application/json",
			"Cooike": unsafeWindow.document.cookie,
			"Authorization": isLoggedIn() ? `Bearer ${localStorage.getItem("accessToken") ?? await refreshToken()}` : void 0,
			"X-Version": !isNullOrUndefined(url) && !url.isEmpty() ? await getXVersion(url) : void 0
		});
	}
	function checkIsHaveDownloadLink (comment) {
		if (!config.checkDownloadLink || isNullOrUndefined(comment) || comment.isEmpty()) {
			return false;
		}
		return ["iwara.zip", "pan.baidu", "/s/", "mega.nz", "drive.google.com", "aliyundrive", "uploadgig", "katfile", "storex", "subyshare", "rapidgator", "filebe", "filespace", "mexa.sh", "mexashare", "mx-sh.net", "icerbox", "alfafile", "1drv.ms", "onedrive.", "gofile.io", "workupload.com", "pixeldrain.", "dailyuploads.net", "katfile.com", "fikper.com", "frdl.io", "rg.to", "gigafile.nu"].filter((i) => comment.toLowerCase().includes(i)).any();
	}
	function toastNode (body, title) {
		return renderNode({
			nodeType: "div",
			childs: [!isNullOrUndefined(title) && !title.isEmpty() ? {
				nodeType: "h3",
				childs: `%#appName#% - ${title}`
			} : {
				nodeType: "h3",
				childs: "%#appName#%"
			}, {
				nodeType: "p",
				childs: body
			}]
		});
	}
	function getTextNode (node) {
		return node.nodeType === Node.TEXT_NODE ? node.textContent || "" : node.nodeType === Node.ELEMENT_NODE ? Array.from(node.childNodes).map(getTextNode).join("") : "";
	}
	function newToast (type2, params) {
		const logFunc = {
			[ToastType.Warn]: originalConsole.warn,
			[ToastType.Error]: originalConsole.error,
			[ToastType.Log]: originalConsole.log,
			[ToastType.Info]: originalConsole.info
		}[type2] || originalConsole.log;
		if (isNullOrUndefined(params)) params = {};
		if (!isNullOrUndefined(params.id) && activeToasts.has(params.id)) activeToasts.get(params.id)?.hide();
		switch (type2) {
			case ToastType.Info:
				params = Object.assign({
					duration: 2e3,
					style: {
						background: "linear-gradient(-30deg, rgb(0, 108, 215), rgb(0, 180, 255))"
					}
				}, params);
			case ToastType.Warn:
				params = Object.assign({
					duration: -1,
					style: {
						background: "linear-gradient(-30deg, rgb(119, 76, 0), rgb(255, 165, 0))"
					}
				}, params);
				break;
			case ToastType.Error:
				params = Object.assign({
					duration: -1,
					style: {
						background: "linear-gradient(-30deg, rgb(108, 0, 0), rgb(215, 0, 0))"
					}
				}, params);
			default:
				break;
		}
		if (!isNullOrUndefined(params.text)) {
			params.text = params.text.replaceVariable(i18nList[config.language]).toString();
		}
		logFunc((!isNullOrUndefined(params.text) ? params.text : !isNullOrUndefined(params.node) ? getTextNode(params.node) : "undefined").replaceVariable(i18nList[config.language]));
		return new Toast(params);
	}
	function getDownloadPath (videoInfo) {
		return analyzeLocalPath(config.downloadPath.trim().replaceVariable({
			NowTime: new Date(),
			UploadTime: new Date(videoInfo.UploadTime),
			AUTHOR: videoInfo.Author,
			ID: videoInfo.ID,
			TITLE: videoInfo.Title.normalize("NFKC").replaceAll(new RegExp("(\\P{Mark})(\\p{Mark}+)", "gu"), "_").replace(/^\.|[\\\\/:*?\"<>|]/img, "_").truncate(72),
			ALIAS: videoInfo.Alias.normalize("NFKC").replaceAll(new RegExp("(\\P{Mark})(\\p{Mark}+)", "gu"), "_").replace(/^\.|[\\\\/:*?\"<>|]/img, "_").truncate(64),
			QUALITY: videoInfo.DownloadQuality
		}));
	}
	function analyzeLocalPath (path) {
		try {
			return new Path(path);
		} catch (error) {
			let toast = newToast(ToastType.Error, {
				node: toastNode([`%#downloadPathError#%`, {
					nodeType: "br"
				}, stringify(error)], "%#settingsCheck#%"),
				position: "center",
				onClick () {
					toast.hide();
				}
			});
			toast.show();
			throw new Error(`%#downloadPathError#% ["${path}"]`);
		}
	}
	async function EnvCheck () {
		try {
			if (GM_info.scriptHandler !== "ScriptCat" && GM_info.downloadMode !== "browser") {
				GM_getValue("isDebug") && originalConsole.debug("[Debug]", GM_info);
				throw new Error("%#browserDownloadModeError#%");
			}
		} catch (error) {
			let toast = newToast(ToastType.Error, {
				node: toastNode([`%#configError#%`, {
					nodeType: "br"
				}, stringify(error)], "%#settingsCheck#%"),
				position: "center",
				onClick () {
					toast.hide();
				}
			});
			toast.show();
			return false;
		}
		return true;
	}
	async function localPathCheck () {
		try {
			let pathTest = analyzeLocalPath(config.downloadPath.replaceVariable({
				NowTime: new Date(),
				UploadTime: new Date(),
				AUTHOR: "test",
				ID: "test",
				TITLE: "test",
				ALIAS: "test",
				QUALITY: "test"
			}));
			if (isNullOrUndefined(pathTest)) throw "analyzeLocalPath error";
			if (pathTest.fullPath.isEmpty()) throw "analyzeLocalPath isEmpty";
		} catch (error) {
			let toast = newToast(ToastType.Error, {
				node: toastNode([`%#downloadPathError#%`, {
					nodeType: "br"
				}, stringify(error)], "%#settingsCheck#%"),
				position: "center",
				onClick () {
					toast.hide();
				}
			});
			toast.show();
			return false;
		}
		return true;
	}
	async function aria2Check () {
		try {
			let res = await (await unlimitedFetch(config.aria2Path, {
				method: "POST",
				headers: {
					"accept": "application/json",
					"content-type": "application/json"
				},
				body: JSON.stringify({
					"jsonrpc": "2.0",
					"method": "aria2.tellActive",
					"id": UUID(),
					"params": ["token:" + config.aria2Token]
				})
			})).json();
			if (res.error) {
				throw new Error(res.error.message);
			}
		} catch (error) {
			let toast = newToast(ToastType.Error, {
				node: toastNode([`Aria2 RPC %#connectionTest#%`, {
					nodeType: "br"
				}, stringify(error)], "%#settingsCheck#%"),
				position: "center",
				onClick () {
					toast.hide();
				}
			});
			toast.show();
			return false;
		}
		return true;
	}
	async function iwaraDownloaderCheck () {
		try {
			let res = await (await unlimitedFetch(config.iwaraDownloaderPath, {
				method: "POST",
				headers: {
					"accept": "application/json",
					"content-type": "application/json"
				},
				body: JSON.stringify(prune({
					"ver": GM_getValue("version", "0.0.0").split(".").map((i) => Number(i)),
					"code": "State",
					"token": config.iwaraDownloaderToken
				}))
			})).json();
			if (res.code !== 0) {
				throw new Error(res.msg);
			}
		} catch (error) {
			let toast = newToast(ToastType.Error, {
				node: toastNode([`IwaraDownloader RPC %#connectionTest#%`, {
					nodeType: "br"
				}, stringify(error)], "%#settingsCheck#%"),
				position: "center",
				onClick () {
					toast.hide();
				}
			});
			toast.show();
			return false;
		}
		return true;
	}
	function aria2Download (videoInfo) {
		(async function (id, author, title, uploadTime, info, tag, quality, alias, downloadUrl) {
			let localPath = analyzeLocalPath(config.downloadPath.replaceVariable({
				NowTime: new Date(),
				UploadTime: new Date(uploadTime),
				AUTHOR: author,
				ID: id,
				TITLE: title.normalize("NFKC").replaceAll(new RegExp("(\\P{Mark})(\\p{Mark}+)", "gu"), "_").replaceEmojis("_").replace(/^\.|[\\\\/:*?\"<>|]/img, "_").truncate(72),
				ALIAS: alias,
				QUALITY: quality
			}).trim());
			downloadUrl.searchParams.set("videoid", id);
			downloadUrl.searchParams.set("download", localPath.fullName);
			let params = [[downloadUrl.href], prune({
				"all-proxy": config.downloadProxy,
				"all-proxy-passwd": !config.downloadProxy.isEmpty() ? config.downloadProxyPassword : void 0,
				"all-proxy-user": !config.downloadProxy.isEmpty() ? config.downloadProxyUsername : void 0,
				"out": localPath.fullName,
				"dir": localPath.directory,
				"referer": window.location.hostname,
				"header": ["Cookie:" + unsafeWindow.document.cookie]
			})];
			let res = await aria2API("aria2.addUri", params);
			originalConsole.log(`Aria2 ${title} ${JSON.stringify(res)}`);
			newToast(ToastType.Info, {
				gravity: "bottom",
				node: toastNode(`${videoInfo.Title}[${videoInfo.ID}] %#pushTaskSucceed#%`)
			}).show();
		})(videoInfo.ID, videoInfo.Author, videoInfo.Title, videoInfo.UploadTime, videoInfo.Comments, videoInfo.Tags, videoInfo.DownloadQuality, videoInfo.Alias, videoInfo.DownloadUrl.toURL());
	}
	function iwaraDownloaderDownload (videoInfo) {
		(async function (videoInfo2) {
			let r = await (await unlimitedFetch(config.iwaraDownloaderPath, {
				method: "POST",
				headers: {
					"accept": "application/json",
					"content-type": "application/json"
				},
				body: JSON.stringify(prune({
					"ver": GM_getValue("version", "0.0.0").split(".").map((i) => Number(i)),
					"code": "add",
					"token": config.iwaraDownloaderToken,
					"data": {
						"info": {
							"title": videoInfo2.Title,
							"url": videoInfo2.DownloadUrl,
							"size": videoInfo2.Size,
							"source": videoInfo2.ID,
							"alias": videoInfo2.Alias,
							"author": videoInfo2.Author,
							"uploadTime": videoInfo2.UploadTime,
							"comments": videoInfo2.Comments,
							"tags": videoInfo2.Tags,
							"path": config.downloadPath.replaceVariable({
								NowTime: new Date(),
								UploadTime: videoInfo2.UploadTime,
								AUTHOR: videoInfo2.Author,
								ID: videoInfo2.ID,
								TITLE: videoInfo2.Title,
								ALIAS: videoInfo2.Alias,
								QUALITY: videoInfo2.DownloadQuality
							})
						},
						"option": {
							"proxy": config.downloadProxy,
							"cookies": unsafeWindow.document.cookie
						}
					}
				}))
			})).json();
			if (r.code === 0) {
				originalConsole.log(`${videoInfo2.Title} %#pushTaskSucceed#% ${r}`);
				newToast(ToastType.Info, {
					node: toastNode(`${videoInfo2.Title}[${videoInfo2.ID}] %#pushTaskSucceed#%`)
				}).show();
			} else {
				let toast = newToast(ToastType.Error, {
					node: toastNode([`${videoInfo2.Title}[${videoInfo2.ID}] %#pushTaskFailed#% `, {
						nodeType: "br"
					}, r.msg], "%#iwaraDownloaderDownload#%"),
					onClick () {
						toast.hide();
					}
				});
				toast.show();
			}
		})(videoInfo);
	}
	function othersDownload (videoInfo) {
		(async function (DownloadUrl) {
			DownloadUrl.searchParams.set("download", getDownloadPath(videoInfo).fullName);
			GM_openInTab(DownloadUrl.href, {
				active: false,
				insert: true,
				setParent: true
			});
		})(videoInfo.DownloadUrl.toURL());
	}
	function browserDownloadErrorParse (error) {
		let errorInfo = stringify(error);
		if (!(error instanceof Error)) {
			errorInfo = {
				"not_enabled": `%#browserDownloadNotEnabled#%`,
				"not_whitelisted": `%#browserDownloadNotWhitelisted#%`,
				"not_permitted": `%#browserDownloadNotPermitted#%`,
				"not_supported": `%#browserDownloadNotSupported#%`,
				"not_succeeded": `%#browserDownloadNotSucceeded#% ${isNullOrUndefined(error.details) ? "UnknownError" : error.details}`
			}[error.error] || `%#browserDownloadUnknownError#%`;
		}
		return errorInfo;
	}
	function browserDownload (videoInfo) {
		(async function (ID, Author, Title, UploadTime, Info, Tag, DownloadQuality, Alias, DownloadUrl) {
			function toastError (error) {
				let toast = newToast(ToastType.Error, {
					node: toastNode([`${Title}[${ID}] %#downloadFailed#%`, {
						nodeType: "br"
					}, browserDownloadErrorParse(error), {
						nodeType: "br"
					}, `%#tryRestartingDownload#%`], "%#browserDownload#%"),
					async onClick () {
						toast.hide();
						await pushDownloadTask(videoInfo);
					}
				});
				toast.show();
			}
			GM_download({
				url: DownloadUrl,
				saveAs: false,
				name: getDownloadPath(videoInfo).fullPath,
				onerror: (err) => toastError(err),
				ontimeout: () => toastError(new Error("%#browserDownloadTimeout#%"))
			});
		})(videoInfo.ID, videoInfo.Author, videoInfo.Title, videoInfo.UploadTime, videoInfo.Comments, videoInfo.Tags, videoInfo.DownloadQuality, videoInfo.Alias, videoInfo.DownloadUrl);
	}
	async function aria2API (method, params) {
		return await (await unlimitedFetch(config.aria2Path, {
			headers: {
				"accept": "application/json",
				"content-type": "application/json"
			},
			body: JSON.stringify({
				jsonrpc: "2.0",
				method,
				id: UUID(),
				params: [`token:${config.aria2Token}`, ...params]
			}),
			method: "POST"
		})).json();
	}
	function aria2TaskExtractVideoID (task2) {
		try {
			if (isNullOrUndefined(task2.files) || task2.files.length !== 1) return;
			const file = task2.files[0];
			if (isNullOrUndefined(file)) return;
			if (file.uris.length < 1) return;
			let downloadUrl = file.uris[0].uri.toURL();
			if (isNullOrUndefined(downloadUrl)) return;
			let videoID;
			if (downloadUrl.searchParams.has("videoid")) videoID = downloadUrl.searchParams.get("videoid");
			if (!isNullOrUndefined(videoID) && !videoID.isEmpty()) return videoID;
			if (isNullOrUndefined(file.path) || file.path.isEmpty()) return;
			let path = analyzeLocalPath(file.path);
			if (isNullOrUndefined(path.fullName) || path.fullName.isEmpty()) return;
			videoID = path.fullName.toLowerCase().among("[", "].mp4", false, true);
			if (videoID.isEmpty()) return;
			return videoID;
		} catch (error) {
			GM_getValue("isDebug") && originalConsole.debug(`[Debug] check aria2 task file fail! ${stringify(task2)}`);
			return;
		}
	}
	async function aria2TaskCheckAndRestart () {
		let stoped = prune((await aria2API("aria2.tellStopped", [0, 4096, ["gid", "status", "files", "errorCode", "bittorrent"]])).result.filter((task2) => isNullOrUndefined(task2.bittorrent)).map((task2) => {
			let ID = aria2TaskExtractVideoID(task2);
			if (!isNullOrUndefined(ID) && !ID.isEmpty()) {
				return {
					id: ID,
					data: task2
				};
			}
		}));
		let active = prune((await aria2API("aria2.tellActive", [["gid", "status", "files", "downloadSpeed", "bittorrent"]])).result.filter((task2) => isNullOrUndefined(task2.bittorrent)).map((task2) => {
			let ID = aria2TaskExtractVideoID(task2);
			if (!isNullOrUndefined(ID) && !ID.isEmpty()) {
				return {
					id: ID,
					data: task2
				};
			}
		}));
		let downloadNormalTasks = active.filter((task2) => isConvertibleToNumber(task2.data.downloadSpeed) && Number(task2.data.downloadSpeed) >= 512).unique("id");
		let downloadCompleted = stoped.filter((task2) => task2.data.status === "complete").unique("id");
		let downloadUncompleted = stoped.difference(downloadCompleted, "id").difference(downloadNormalTasks, "id");
		let downloadToSlowTasks = active.filter((task2) => isConvertibleToNumber(task2.data.downloadSpeed) && Number(task2.data.downloadSpeed) <= 512).unique("id");
		let needRestart = downloadUncompleted.union(downloadToSlowTasks, "id");
		if (needRestart.length !== 0) {
			newToast(ToastType.Warn, {
				id: "aria2TaskCheckAndRestart",
				node: toastNode([`发现 ${needRestart.length} 个需要重启的下载任务！`, {
					nodeType: "br"
				}, "%#tryRestartingDownload#%"], "%#aria2TaskCheck#%"),
				async onClick () {
					this.hide();
					for (let i = 0; i < needRestart.length; i++) {
						const task2 = needRestart[i];
						await pushDownloadTask(await parseVideoInfo({
							Type: "init",
							ID: task2.id
						}), true);
						let activeTasks = active.filter((activeTask) => activeTask.id === task2.id);
						for (let t = 0; t < activeTasks.length; t++) {
							const element = activeTasks[t];
							await aria2API("aria2.forceRemove", [element.data.gid]);
						}
					}
				}
			}).show();
		} else {
			newToast(ToastType.Info, {
				id: "aria2TaskCheckAndRestart",
				duration: 1e4,
				node: toastNode(`未发现需要重启的下载任务！`)
			}).show();
		}
	}
	function getPlayload (authorization) {
		return JSON.parse(decodeURIComponent(encodeURIComponent(window.atob(authorization.split(" ").pop().split(".")[1]))));
	}
	async function check () {
		if (await localPathCheck()) {
			switch (config.downloadType) {
				case DownloadType.Aria2:
					return await aria2Check();
				case DownloadType.IwaraDownloader:
					return await iwaraDownloaderCheck();
				case DownloadType.Browser:
					return await EnvCheck();
				default:
					break;
			}
			return true;
		} else {
			return false;
		}
	}
	async function getXVersion (urlString) {
		let url = urlString.toURL();
		const data = new TextEncoder().encode([url.pathname.split("/").pop(), url.searchParams.get("expires"), "5nFp9kmbNnHdAFhaqMvt"].join("_"));
		const hashBuffer = await crypto.subtle.digest("SHA-1", data);
		return Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
	}
	var main_default = '@keyframes rainbow-horizontal{0%{background-position:0% 0%}to{background-position:200% 0%}}@keyframes rainbow-vertical{0%{background-position:0% 0%}to{background-position:0% 200%}}.rainbow-text{background-image:linear-gradient(to right,#ff4040,#ffff40,#40ff40,#40ffff,#4040ff,#ff40ff,#ff4040);background-size:200% 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:rainbow-horizontal .8s infinite linear;font-weight:700}#pluginMenu{z-index:2147483644;position:fixed;top:50%;right:0;padding:10px 26px;background-color:var(--body-dark);border:1px solid var(--text);border-radius:5px;box-shadow:0 0 10px var(--text);transform:translate(calc(100% - 26px)) translateY(-50%);transition:transform .3s ease-in-out}#pluginMenu:not(.expanded){overflow:visible}#pluginMenu:not(.expanded):before{content:"";mask:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIj48cGF0aCBkPSJNNTYwLTI0MCAzMjAtNDgwbDI0MC0yNDAgNTYgNTYtMTg0IDE4NCAxODQgMTg0LTU2IDU2WiIvPjwvc3ZnPg==) no-repeat center;background-color:var(--text);width:24px;height:24px;position:absolute;left:0;top:50%;line-height:0;transform:translateY(-50%)}#pluginMenu.expanded{transform:translate(0) translateY(-50%)}#pluginMenu ul{list-style:none;margin:0;padding:0}#pluginMenu li{padding:5px 10px;cursor:pointer;text-align:center;user-select:none;color:var(--text)}#pluginMenu li:hover{background-color:var(--primary-dark);border-radius:3px}#pluginConfig{color:var(--text);position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000000bf;z-index:2147483646;display:flex;flex-direction:column;align-items:center;justify-content:center}#pluginConfig .main{background-color:var(--body);padding:24px;margin:10px;overflow-y:auto;width:480px}#pluginConfig .buttonList{display:flex;flex-direction:row;justify-content:center}@media (max-width: 640px){#pluginConfig .main{width:100%}}#pluginConfig button{background-color:var(--primary);margin:0 20px;padding:10px 20px;color:var(--primary-text);font-size:18px;border:none;border-radius:4px;cursor:pointer}#pluginConfig button{background-color:var(--primary)}#pluginConfig button[disabled]{background-color:var(--muted);cursor:not-allowed}#pluginConfig p{display:flex;flex-direction:column;margin-top:10px;margin-bottom:0}#pluginConfig fieldset{border:none;margin:10px 0 0;padding:0;display:flex;justify-content:space-between;flex-wrap:nowrap}#pluginConfig fieldset>legend{margin:0 0 5px;padding:0}#pluginConfig fieldset>label{text-align:center}#pluginConfig p label{display:flex;flex-direction:column;margin:5px 0 0}#pluginConfig .inputRadioLine{display:flex;align-items:center;flex-direction:row;justify-content:space-between}#pluginConfig input[type=text],#pluginConfig input[type=password]{outline:none;border-top:none;border-right:none;border-left:none;border-image:initial;border-bottom:1px solid var(--muted);line-height:1;height:30px;box-sizing:border-box;width:100%;background-color:var(--body);color:var(--text)}#pluginConfig input[type=checkbox].switch{outline:none;appearance:none;-webkit-appearance:none;-moz-appearance:none;position:relative;width:40px;height:20px;background:var(--muted);border-radius:10px;transition:border-color .2s,background-color .2s}#pluginConfig input[type=checkbox].switch:after{content:"";display:inline-block;width:40%;height:80%;border-radius:50%;background:var(--white);box-shadow:0,0,2px,var(--muted);transition:.2s;top:2px;position:absolute;right:55%}#pluginConfig input[type=checkbox].switch:checked{background:var(--success)}#pluginConfig input[type=checkbox].switch:checked:after{content:"";position:absolute;right:2px;top:2px}#pluginOverlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000000bf;z-index:2147483645;display:flex;flex-direction:column;align-items:center;justify-content:center}#pluginOverlay .main{color:var(--text);font-size:24px;width:60%;background-color:#404040bf;padding:24px;margin:10px;overflow-y:auto}@media (max-width: 640px){#pluginOverlay .main{width:100%}}#pluginOverlay button{padding:10px 20px;color:var(--primary-text);font-size:18px;border:none;border-radius:4px;cursor:pointer}#pluginOverlay button{background-color:var(--primary)}#pluginOverlay button[disabled]{background-color:var(--muted);cursor:not-allowed}#pluginOverlay .checkbox{width:32px;height:32px;margin:0 4px 0 0;padding:0}#pluginOverlay .checkbox-container{display:flex;align-items:center;margin:0 0 10px}#pluginOverlay .checkbox-label{color:var(--text);font-size:32px;font-weight:700;margin-left:10px;display:flex;align-items:center}.fixed-bottom-right{position:fixed;bottom:0;right:0;background-color:var(--body);color:var(--text);border-top:1px solid var(--primary);border-left:1px solid var(--primary);border-top-left-radius:6px;padding:2px 5px;margin:0;user-select:none;z-index:102}.follow{bottom:24px;right:2px;border-radius:2px;position:absolute;padding:3px 5px;background-color:#000c;pointer-events:none}.selectButton{accent-color:var(--primary);position:absolute;width:38px;height:38px;right:0;cursor:pointer;z-index:102;top:22px}.deleteButton{accent-color:var(--danger);position:absolute;width:38px;height:38px;left:0;cursor:pointer;z-index:101;border:none;padding:0;margin:3px;top:22px}.toast h3{margin:0 0 10px}.toast p{margin:0}.offscreen-container{position:absolute;visibility:hidden;pointer-events:none;max-width:480px}.toast-container{isolation:isolate;position:fixed;z-index:2147483647;display:flex;flex-direction:column;box-sizing:border-box;transition:transform calc(.6 * var(--toast-rate) * 1s) ease,opacity calc(.6 * var(--toast-rate) * 1s) ease}.toast-container.toast-top{top:0}.toast-container.toast-bottom{bottom:0}.toast-container.toast-left{left:0;align-items:flex-start}.toast-container.toast-center{left:50%;transform:translate(-50%);align-items:center}.toast-container.toast-right{right:0;align-items:flex-end}#toast-container-top-left .toast{margin:10px 0 0 10px;transform-origin:left center}#toast-container-top-center .toast{margin:10px 0 0;transform-origin:top}#toast-container-top-right .toast{margin:10px 10px 0 0;transform-origin:right center}#toast-container-bottom-left .toast{margin:0 0 10px 10px;transform-origin:left center}#toast-container-bottom-center .toast{margin:0 0 10px;transform-origin:bottom}#toast-container-bottom-right .toast{margin:0 10px 10px 0;transform-origin:right center}.toast{--toast-rate: 1;--toast-translate: 0;--toast-scale: 1;position:relative;transition:transform calc(.4s * var(--toast-rate)) cubic-bezier(.34,1.56,.64,1),opacity calc(.3s * var(--toast-rate)) ease;transform:translate3d(0,var(--toast-translate),0) scale(var(--toast-scale));max-width:480px;max-height:0px;will-change:transform,opacity;backface-visibility:hidden;contain:content;border-radius:6px;box-shadow:0 4px 8px #00000040}.toast-close{position:absolute;color:var(--text);top:5px;right:5px;cursor:pointer;font-size:12px;line-height:12px;z-index:2147483648;transform-origin:center center}.toast-content{border-radius:6px;padding:14px 18px;max-width:100%;box-sizing:border-box;background:var(--primary);color:var(--primary-text);cursor:pointer;white-space:normal;word-break:break-all;overflow:hidden;position:relative}.toast-progress{position:absolute;bottom:0;left:0;right:0;height:4px;background:#fffc;transform:scaleX(var(--toast-progress, 0));transition:transform calc(.05s * var(--toast-rate)) linear;will-change:transform;backface-visibility:hidden}.toast:hover{z-index:2147483648;--toast-scale: 1.15}.toast-container.toast-left .toast .toast-content .toast-progress{transform-origin:left}.toast-container.toast-center .toast .toast-content .toast-progress{transform-origin:center}.toast-container.toast-right .toast .toast-content .toast-progress{transform-origin:right}.toast-container.toast-top .toast.show{animation:toast-in-top calc(.3 * var(--toast-rate) * 1s) ease-in-out forwards}.toast-container.toast-bottom .toast.show{animation:toast-in-bottom calc(.3 * var(--toast-rate) * 1s) ease-in-out forwards}.toast-container.toast-top .toast.hide{animation:toast-out-top calc(.3 * var(--toast-rate) * 1s) ease-in-out forwards}.toast-container.toast-bottom .toast.hide{animation:toast-out-bottom calc(.3 * var(--toast-rate) * 1s) ease-in-out forwards}@keyframes toast-in-top{0%{opacity:0;max-height:0px}to{max-height:var(--toast-height)}}@keyframes toast-in-bottom{0%{opacity:0;max-height:0px}to{max-height:var(--toast-height)}}@keyframes toast-out-top{0%{max-height:var(--toast-height)}to{opacity:0;max-height:0px}}@keyframes toast-out-bottom{0%{max-height:var(--toast-height)}to{opacity:0;max-height:0px}}\n';
	var isPageType = (type2) => new Set(Object.values(PageType)).has(type2);
	var isLoggedIn = () => !(unsafeWindow.localStorage.getItem("token") ?? "").isEmpty();
	var rating = () => localStorage.getItem("rating") ?? "all";
	var mouseTarget = null;
	async function getCommentData (id, commentID, page = 0) {
		return await (await unlimitedFetch(`https://api.iwara.tv/video/${id}/comments?page=${page}${!isNullOrUndefined(commentID) && !commentID.isEmpty() ? "&parent=" + commentID : ""}`, {
			headers: await getAuth()
		})).json();
	}
	async function getCommentDatas (id, commentID) {
		let comments = [];
		let base = await getCommentData(id, commentID);
		comments.push(...base.results);
		for (let page = 1; page < Math.ceil(base.count / base.limit); page++) {
			comments.push(...(await getCommentData(id, commentID, page)).results);
		}
		let replies = [];
		for (let index = 0; index < comments.length; index++) {
			const comment = comments[index];
			if (comment.numReplies > 0) {
				replies.push(...await getCommentDatas(id, comment.id));
			}
		}
		comments.push(...replies);
		return comments;
	}
	async function getCDNCache (id, info) {
		let cache = (await db.videos.where("ID").equals(id).toArray()).pop() ?? info;
		let cdnCache = await db.caches.where("ID").equals(id).toArray();
		if (!cdnCache.any() && (cache?.Type === "partial" || cache?.Type === "full")) {
			let query = prune({
				author: cache.Alias ?? cache.Author,
				title: cache.Title
			});
			for (const key in query) {
				let dom = new DOMParser().parseFromString(await (await unlimitedFetch(`https://mmdfans.net/?query=${encodeURIComponent(`${key}:${query[key]}`)}`)).text(), "text/html");
				for (let i of [...dom.querySelectorAll(".mdui-col > a")]) {
					let ID = i.querySelector(".mdui-grid-tile > img")?.src?.toURL()?.pathname?.split("/")?.pop()?.trimTail(".jpg");
					if (isNullOrUndefined(ID)) continue;
					await db.caches.put({
						ID,
						href: `https://mmdfans.net${i.getAttribute("href")}`
					});
				}
			}
		}
		cdnCache = await db.caches.where("ID").equals(id).toArray();
		if (cdnCache.any()) {
			newToast(ToastType.Warn, {
				node: toastNode([`${cache?.RAW?.title}[${id}] %#parsingFailed#%`, {
					nodeType: "br"
				}, `%#cdnCacheFinded#%`], "%#createTask#%"),
				onClick () {
					GM_openInTab(cdnCache[0].href, {
						active: false,
						insert: true,
						setParent: true
					});
					this.hide();
				}
			}).show();
			return;
		}
		newToast(ToastType.Error, {
			node: toastNode([`${cache?.RAW?.title}[${id}] %#parsingFailed#%`], "%#createTask#%"),
			onClick () {
				this.hide();
			}
		}).show();
	}
	async function parseVideoInfo (info) {
		let ID = info.ID;
		let Type = info.Type;
		let RAW = info.RAW;
		try {
			switch (info.Type) {
				case "cache":
					RAW = info.RAW;
					ID = RAW.id;
					Type = "partial";
					break;
				case "init":
				case "fail":
				case "partial":
				case "full":
					let sourceResult = await (await unlimitedFetch(`https://api.iwara.tv/video/${info.ID}`, {
						headers: await getAuth()
					}, {
						retry: true,
						maxRetries: 3,
						failStatuses: [403, 404],
						retryDelay: 1e3,
						onRetry: async () => {
							await refreshToken();
						}
					})).json();
					if (isNullOrUndefined(sourceResult.id)) {
						Type = "fail";
						return {
							ID,
							Type,
							RAW,
							Msg: sourceResult.message ?? stringify(sourceResult)
						};
					}
					RAW = sourceResult;
					ID = RAW.id;
					Type = "full";
					break;
				default:
					Type = "fail";
					return {
						ID,
						Type,
						RAW,
						Msg: "Unknown type"
					};
			}
		} catch (error) {
			newToast(ToastType.Error, {
				node: toastNode([`${info.RAW?.title}[${ID}] %#parsingFailed#%`], "%#createTask#%"),
				async onClick () {
					await parseVideoInfo({
						Type: "init",
						ID,
						RAW,
						UploadTime: 0
					});
					this.hide();
				}
			}).show();
			Type = "fail";
			return {
				ID,
				Type,
				RAW,
				Msg: stringify(error)
			};
		}
		let FileName;
		let Size;
		let External;
		let ExternalUrl;
		let Description;
		let DownloadQuality;
		let DownloadUrl;
		let Comments;
		let UploadTime;
		let Title;
		let Tags;
		let Liked;
		let Alias;
		let Author;
		let AuthorID;
		let Private;
		let Unlisted;
		let Following;
		let Friend;
		UploadTime = new Date(RAW.createdAt ?? 0).getTime();
		Title = RAW.title;
		Tags = RAW.tags;
		Liked = RAW.liked;
		Alias = RAW.user.name;
		Author = RAW.user.username;
		AuthorID = RAW.user.id;
		Private = RAW.private;
		Unlisted = RAW.unlisted;
		External = !isNullOrUndefined(RAW.embedUrl) && !RAW.embedUrl.isEmpty();
		ExternalUrl = RAW.embedUrl;
		if (External) {
			Type = "fail";
			return {
				Type,
				RAW,
				ID,
				Alias,
				Author,
				AuthorID,
				Private,
				UploadTime,
				Title,
				Tags,
				Liked,
				External,
				ExternalUrl,
				Description,
				Unlisted,
				Msg: "external Video"
			};
		}
		try {
			switch (Type) {
				case "full":
					Following = RAW.user.following;
					Friend = RAW.user.friend;
					if (Following) {
						db.follows.put(RAW.user, AuthorID);
					} else {
						db.follows.delete(AuthorID);
					}
					if (Friend) {
						db.friends.put(RAW.user, AuthorID);
					} else {
						db.friends.delete(AuthorID);
					}
					Description = RAW.body;
					FileName = RAW.file.name;
					Size = RAW.file.size;
					let VideoFileSource = (await (await unlimitedFetch(RAW.fileUrl, {
						headers: await getAuth(RAW.fileUrl)
					})).json()).sort((a, b) => (!isNullOrUndefined(config.priority[b.name]) ? config.priority[b.name] : 0) - (!isNullOrUndefined(config.priority[a.name]) ? config.priority[a.name] : 0));
					if (isNullOrUndefined(VideoFileSource) || !(VideoFileSource instanceof Array) || VideoFileSource.length < 1) throw new Error(i18nList[config.language].getVideoSourceFailed.toString());
					DownloadQuality = config.checkPriority ? config.downloadPriority : VideoFileSource[0].name;
					let fileList = VideoFileSource.filter((x) => x.name === DownloadQuality);
					if (!fileList.any()) throw new Error(i18nList[config.language].noAvailableVideoSource.toString());
					let Source = fileList[Math.floor(Math.random() * fileList.length)].src.download;
					if (isNullOrUndefined(Source) || Source.isEmpty()) throw new Error(i18nList[config.language].videoSourceNotAvailable.toString());
					DownloadUrl = decodeURIComponent(`https:${Source}`);
					Comments = `${(await getCommentDatas(ID)).map((i) => i.body).join("\n")}`.normalize("NFKC");
					return {
						Type,
						RAW,
						ID,
						Alias,
						Author,
						AuthorID,
						Private,
						UploadTime,
						Title,
						Tags,
						Liked,
						External,
						FileName,
						DownloadQuality,
						ExternalUrl,
						Description,
						Comments,
						DownloadUrl,
						Size,
						Following,
						Unlisted,
						Friend
					};
				case "partial":
					return {
						Type,
						RAW,
						ID,
						Alias,
						Author,
						AuthorID,
						UploadTime,
						Title,
						Tags,
						Liked,
						External,
						ExternalUrl,
						Unlisted,
						Private
					};
				default:
					Type = "fail";
					return {
						Type,
						RAW,
						ID,
						Alias,
						Author,
						AuthorID,
						Private,
						UploadTime,
						Title,
						Tags,
						Liked,
						External,
						ExternalUrl,
						Description,
						Unlisted,
						Msg: "Unknown type"
					};
			}
		} catch (error) {
			Type = "fail";
			return {
				Type,
				RAW,
				ID,
				Alias,
				Author,
				AuthorID,
				Private,
				UploadTime,
				Title,
				Tags,
				Liked,
				External,
				ExternalUrl,
				Description,
				Unlisted,
				Msg: stringify(error)
			};
		}
	}
	var configEdit = class {
		constructor(config2) {
			this.target = config2;
			this.target.configChange = (item) => {
				this.configChange.call(this, item);
			};
			this.interfacePage = renderNode({
				nodeType: "p"
			});
			let save = renderNode({
				nodeType: "button",
				childs: "%#save#%",
				attributes: {
					title: i18nList[config2.language].save
				},
				events: {
					click: async () => {
						save.disabled = !save.disabled;
						if (await check()) {
							unsafeWindow.location.reload();
						}
						save.disabled = !save.disabled;
					}
				}
			});
			let reset = renderNode({
				nodeType: "button",
				childs: "%#reset#%",
				attributes: {
					title: i18nList[config2.language].reset
				},
				events: {
					click: () => {
						GM_setValue("isFirstRun", true);
						unsafeWindow.location.reload();
					}
				}
			});
			this.interface = renderNode({
				nodeType: "div",
				attributes: {
					id: "pluginConfig"
				},
				childs: [{
					nodeType: "div",
					className: "main",
					childs: [{
						nodeType: "h2",
						childs: "%#appName#%"
					}, {
						nodeType: "label",
						childs: ["%#language#% ", {
							nodeType: "input",
							className: "inputRadioLine",
							attributes: {
								name: "language",
								type: "text",
								value: this.target.language
							},
							events: {
								change: (event) => {
									this.target.language = event.target.value;
								}
							}
						}]
					}, this.downloadTypeSelect(), this.interfacePage, this.switchButton("checkPriority"), this.switchButton("checkDownloadLink"), this.switchButton("autoFollow"), this.switchButton("autoLike"), this.switchButton("autoInjectCheckbox"), this.switchButton("autoDownloadMetadata"), this.switchButton("autoCopySaveFileName"), this.switchButton("addUnlistedAndPrivate"), this.switchButton("experimentalFeatures"), this.switchButton("enableUnsafeMode"), this.switchButton("isDebug", GM_getValue, (name, e) => {
						GM_setValue(name, e.target.checked);
						unsafeWindow.location.reload();
					}, false)]
				}, {
					nodeType: "p",
					className: "buttonList",
					childs: [reset, save]
				}]
			});
		}
		switchButton (name, get, set, defaultValue) {
			return renderNode({
				nodeType: "p",
				className: "inputRadioLine",
				childs: [{
					nodeType: "label",
					childs: `%#${name}#%`,
					attributes: {
						for: name
					}
				}, {
					nodeType: "input",
					className: "switch",
					attributes: {
						type: "checkbox",
						name,
						checked: get !== void 0 ? get(name, defaultValue) : this.target[name] ?? defaultValue ?? false
					},
					events: {
						change: (e) => {
							if (set !== void 0) {
								set(name, e);
								return;
							} else {
								this.target[name] = e.target.checked;
							}
						}
					}
				}]
			});
		}
		inputComponent (name, type2, help, get, set) {
			return renderNode({
				nodeType: "label",
				childs: [{
					nodeType: "span",
					childs: [`%#${name}#%`, help]
				}, {
					nodeType: "input",
					attributes: {
						name,
						type: type2 ?? "text",
						value: get !== void 0 ? get(name) : this.target[name]
					},
					events: {
						change: (e) => {
							if (set !== void 0) {
								set(name, e);
								return;
							} else {
								this.target[name] = e.target.value;
							}
						}
					}
				}]
			});
		}
		downloadTypeSelect () {
			return renderNode({
				nodeType: "fieldset",
				childs: [{
					nodeType: "legend",
					childs: "%#downloadType#%"
				}, ...Object.keys(DownloadType).filter((i) => isNaN(Number(i))).map((type2, index) => renderNode({
					nodeType: "label",
					childs: [{
						nodeType: "input",
						attributes: {
							type: "radio",
							name: "downloadType",
							value: index,
							checked: index === Number(this.target.downloadType)
						},
						events: {
							change: (e) => {
								this.target.downloadType = Number(e.target.value);
							}
						}
					}, type2]
				}))]
			});
		}
		configChange (item) {
			switch (item) {
				case "downloadType":
					const radios = this.interface.querySelectorAll(`[name=${item}]`);
					radios.forEach((radio) => {
						radio.checked = Number(radio.value) === Number(this.target.downloadType);
					});
					this.pageChange();
					break;
				case "checkPriority":
					this.pageChange();
					break;
				default:
					let element = this.interface.querySelector(`[name=${item}]`);
					if (element) {
						switch (element.type) {
							case "radio":
								element.value = this.target[item];
								break;
							case "checkbox":
								element.checked = this.target[item];
								break;
							case "text":
							case "password":
								element.value = this.target[item];
								break;
							default:
								break;
						}
					}
					break;
			}
		}
		pageChange () {
			while (this.interfacePage.hasChildNodes()) {
				this.interfacePage.removeChild(this.interfacePage.firstChild);
			}
			let downloadConfigInput = [this.inputComponent("downloadPath", "text", renderNode({
				nodeType: "a",
				childs: "%#variable#%",
				className: "rainbow-text",
				attributes: {
					style: "float: inline-end;",
					href: "https://github.com/dawn-lc/IwaraDownloadTool/wiki/路径可用变量"
				}
			}))];
			let proxyConfigInput = [this.inputComponent("downloadProxy"), this.inputComponent("downloadProxyUsername"), this.inputComponent("downloadProxyPassword", "password")];
			let aria2ConfigInput = [this.inputComponent("aria2Path"), this.inputComponent("aria2Token", "password"), ...proxyConfigInput];
			let iwaraDownloaderConfigInput = [this.inputComponent("iwaraDownloaderPath"), this.inputComponent("iwaraDownloaderToken", "password"), ...proxyConfigInput];
			switch (this.target.downloadType) {
				case DownloadType.Aria2:
					downloadConfigInput.map((i) => originalNodeAppendChild.call(this.interfacePage, i));
					aria2ConfigInput.map((i) => originalNodeAppendChild.call(this.interfacePage, i));
					break;
				case DownloadType.IwaraDownloader:
					downloadConfigInput.map((i) => originalNodeAppendChild.call(this.interfacePage, i));
					iwaraDownloaderConfigInput.map((i) => originalNodeAppendChild.call(this.interfacePage, i));
					break;
				default:
					downloadConfigInput.map((i) => originalNodeAppendChild.call(this.interfacePage, i));
					break;
			}
			if (this.target.checkPriority) {
				originalNodeAppendChild.call(this.interfacePage, this.inputComponent("downloadPriority"));
			}
		}
		inject () {
			if (!unsafeWindow.document.querySelector("#pluginConfig")) {
				originalNodeAppendChild.call(unsafeWindow.document.body, this.interface);
				this.configChange("downloadType");
			}
		}
	};
	var menu = class {
		constructor() {
			let body = new Proxy(this, {
				set: (target, prop, value) => {
					if (prop === "pageType") {
						if (isNullOrUndefined(value) || this.pageType === value) return true;
						target[prop] = value;
						this.pageChange();
						GM_getValue("isDebug") && originalConsole.debug(`[Debug] Page change to ${this.pageType}`);
						return true;
					}
					return target[prop] = value;
				}
			});
			body.interfacePage = renderNode({
				nodeType: "ul"
			});
			body.interface = renderNode({
				nodeType: "div",
				attributes: {
					id: "pluginMenu"
				},
				childs: body.interfacePage
			});
			let mouseoutTimer = null;
			originalAddEventListener.call(body.interface, "mouseover", (event) => {
				if (mouseoutTimer !== null) {
					clearTimeout(mouseoutTimer);
					mouseoutTimer = null;
				}
				body.interface.classList.add("expanded");
			});
			originalAddEventListener.call(body.interface, "mouseout", (event) => {
				const e = event;
				const relatedTarget = e.relatedTarget;
				if (relatedTarget && body.interface.contains(relatedTarget)) {
					return;
				}
				mouseoutTimer = setTimeout(() => {
					body.interface.classList.remove("expanded");
					mouseoutTimer = null;
				}, 300);
			});
			originalAddEventListener.call(body.interface, "click", (event) => {
				if (event.target === body.interface) {
					body.interface.classList.toggle("expanded");
				}
			});
			body.observer = new MutationObserver((mutationsList) => body.pageType = getPageType(mutationsList) ?? body.pageType);
			body.pageType = PageType.Page;
			return body;
		}
		button (name, click) {
			return renderNode({
				nodeType: "li",
				childs: `%#${name}#%`,
				events: {
					click: (event) => {
						!isNullOrUndefined(click) && click(name, event);
						event.stopPropagation();
						return false;
					}
				}
			});
		}
		async parseUnlistedAndPrivate () {
			if (!isLoggedIn()) return;
			const lastMonthTimestamp = Date.now() - 30 * 24 * 60 * 60 * 1e3;
			const thisMonthUnlistedAndPrivateVideos = await db.videos.where("UploadTime").between(lastMonthTimestamp, Infinity).and((i) => !isInitVideoInfo(i) && !isFailVideoInfo(i) && !isCacheVideoInfo(i) && (i.Private || i.Unlisted)).toArray();
			let parseUnlistedAndPrivateVideos = [];
			let pageCount = 0;
			const MAX_FIND_PAGES = 64;
			GM_getValue("isDebug") && originalConsole.debug(`[Debug] Starting fetch loop. MAX_PAGES=${MAX_FIND_PAGES}`);
			while (pageCount < MAX_FIND_PAGES) {
				GM_getValue("isDebug") && originalConsole.debug(`[Debug] Fetching page ${pageCount}.`);
				const response = await unlimitedFetch(`https://api.iwara.tv/videos?subscribed=true&limit=50&rating=${rating()}&page=${pageCount}`, {
					method: "GET",
					headers: await getAuth()
				}, {
					retry: true,
					retryDelay: 1e3,
					onRetry: async () => {
						await refreshToken();
					}
				});
				GM_getValue("isDebug") && originalConsole.debug("[Debug] Received response, parsing JSON.");
				const data = (await response.json()).results;
				GM_getValue("isDebug") && originalConsole.debug(`[Debug] Page ${pageCount} returned ${data.length} videos.`);
				data.forEach((info) => info.user.following = true);
				const videoPromises = data.map((info) => parseVideoInfo({
					Type: "cache",
					ID: info.id,
					RAW: info
				}));
				GM_getValue("isDebug") && originalConsole.debug("[Debug] Initializing VideoInfo promises.");
				const videoInfos = await Promise.all(videoPromises);
				parseUnlistedAndPrivateVideos.push(...videoInfos);
				let test = videoInfos.filter((i) => i.Type === "partial" && (i.Private || i.Unlisted)).any();
				GM_getValue("isDebug") && originalConsole.debug("[Debug] All VideoInfo objects initialized.");
				if (test && thisMonthUnlistedAndPrivateVideos.intersect(videoInfos, "ID").any()) {
					GM_getValue("isDebug") && originalConsole.debug(`[Debug] Found private video on page ${pageCount}.`);
					break;
				}
				GM_getValue("isDebug") && originalConsole.debug(`[Debug] Latest private video not found on page ${pageCount}, continuing.`);
				pageCount++;
				GM_getValue("isDebug") && originalConsole.debug(`[Debug] Incremented page to ${pageCount}, delaying next fetch.`);
				await delay(100);
			}
			GM_getValue("isDebug") && originalConsole.debug("[Debug] Fetch loop ended. Start updating the database");
			const toUpdate = parseUnlistedAndPrivateVideos.difference((await db.videos.where("ID").anyOf(parseUnlistedAndPrivateVideos.map((v) => v.ID)).toArray()).filter((v) => v.Type === "full"), "ID");
			if (toUpdate.any()) {
				GM_getValue("isDebug") && originalConsole.debug(`[Debug] Need to update ${toUpdate.length} pieces of data.`);
				await db.videos.bulkPut(toUpdate);
				GM_getValue("isDebug") && originalConsole.debug(`[Debug] Update Completed.`);
			} else {
				GM_getValue("isDebug") && originalConsole.debug(`[Debug] No need to update data.`);
			}
		}
		async pageChange () {
			while (this.interfacePage.hasChildNodes()) {
				this.interfacePage.removeChild(this.interfacePage.firstChild);
			}
			let manualDownloadButton = this.button("manualDownload", (name, event) => {
				addDownloadTask();
			});
			let settingsButton = this.button("settings", (name, event) => {
				editConfig.inject();
			});
			let exportConfigButton = this.button("exportConfig", (name, event) => {
				GM_setClipboard(stringify(config));
				newToast(ToastType.Info, {
					node: toastNode(i18nList[config.language].exportConfigSucceed),
					duration: 3e3,
					gravity: "bottom",
					position: "center",
					onClick () {
						this.hide();
					}
				}).show();
			});
			let baseButtons = [manualDownloadButton, exportConfigButton, settingsButton];
			let injectCheckboxButton = this.button("injectCheckbox", (name, event) => {
				if (unsafeWindow.document.querySelector(".selectButton")) {
					unsafeWindow.document.querySelectorAll(".selectButton").forEach((element) => {
						element.remove();
					});
				} else {
					unsafeWindow.document.querySelectorAll(`.videoTeaser`).forEach((element) => {
						injectCheckbox(element);
					});
				}
			});
			let deselectAllButton = this.button("deselectAll", (name, event) => {
				for (const id of selectList.keys()) {
					selectList.delete(id);
				}
			});
			let reverseSelectButton = this.button("reverseSelect", (name, event) => {
				unsafeWindow.document.querySelectorAll(".selectButton").forEach((element) => {
					element.click();
				});
			});
			let selectThisButton = this.button("selectThis", (name, event) => {
				unsafeWindow.document.querySelectorAll(".selectButton").forEach((element) => {
					let button = element;
					!button.checked && button.click();
				});
			});
			let deselectThisButton = this.button("deselectThis", (name, event) => {
				unsafeWindow.document.querySelectorAll(".selectButton").forEach((element) => {
					let button = element;
					button.checked && button.click();
				});
			});
			let downloadSelectedButton = this.button("downloadSelected", (name, event) => {
				analyzeDownloadTask();
				newToast(ToastType.Info, {
					text: `%#${name}#%`,
					close: true
				}).show();
			});
			let selectButtons = [injectCheckboxButton, deselectAllButton, reverseSelectButton, selectThisButton, deselectThisButton, downloadSelectedButton];
			let downloadThisButton = this.button("downloadThis", async (name, event) => {
				let ID = unsafeWindow.location.href.toURL().pathname.split("/")[2];
				await pushDownloadTask(await parseVideoInfo({
					Type: "init",
					ID
				}), true);
			});
			let aria2TaskCheckButton = this.button("aria2TaskCheck", (name, event) => {
				aria2TaskCheckAndRestart();
			});
			config.experimentalFeatures && originalNodeAppendChild.call(this.interfacePage, aria2TaskCheckButton);
			switch (this.pageType) {
				case PageType.Video:
					originalNodeAppendChild.call(this.interfacePage, downloadThisButton);
					selectButtons.map((i) => originalNodeAppendChild.call(this.interfacePage, i));
					baseButtons.map((i) => originalNodeAppendChild.call(this.interfacePage, i));
					break;
				case PageType.Search:
				case PageType.Profile:
				case PageType.Home:
				case PageType.VideoList:
				case PageType.Subscriptions:
				case PageType.Playlist:
				case PageType.Favorites:
				case PageType.Account:
					selectButtons.map((i) => originalNodeAppendChild.call(this.interfacePage, i));
					baseButtons.map((i) => originalNodeAppendChild.call(this.interfacePage, i));
					break;
				case PageType.Page:
				case PageType.Forum:
				case PageType.Image:
				case PageType.ImageList:
				case PageType.ForumSection:
				case PageType.ForumThread:
				default:
					baseButtons.map((i) => originalNodeAppendChild.call(this.interfacePage, i));
					break;
			}
			if (config.addUnlistedAndPrivate && this.pageType === PageType.VideoList) {
				this.parseUnlistedAndPrivate();
			} else {
				GM_getValue("isDebug") && originalConsole.debug("[Debug] Conditions not met: addUnlistedAndPrivate or pageType mismatch.");
			}
		}
		inject () {
			this.observer.observe(unsafeWindow.document.getElementById("app"), {
				childList: true,
				subtree: true
			});
			if (!unsafeWindow.document.querySelector("#pluginMenu")) {
				originalNodeAppendChild.call(unsafeWindow.document.body, this.interface);
				this.pageType = getPageType() ?? this.pageType;
			}
		}
	};
	var pluginMenu = new menu();
	var editConfig = new configEdit(config);
	var selectList = new SyncDictionary("selectList");
	var pageStatus = new MultiPage();
	var pageSelectButtons = new Dictionary();
	var selected = renderNode({
		nodeType: "span",
		childs: ` %#selected#% ${selectList.size} `
	});
	var watermark = renderNode({
		nodeType: "p",
		className: "fixed-bottom-right",
		childs: [`%#appName#% ${GM_getValue("version")} `, selected, GM_getValue("isDebug") ? `%#isDebug#%` : ""]
	});
	function getSelectButton (id) {
		return pageSelectButtons.has(id) ? pageSelectButtons.get(id) : unsafeWindow.document.querySelector(`input.selectButton[videoid="${id}"]`);
	}
	function saveSelectList () {
		GM_getTabs((tabs) => {
			if (Object.keys(tabs).length > 1) return;
			GM_setValue("selectList", {
				timestamp: selectList.timestamp,
				selectList: selectList.toArray()
			});
		});
	}
	function updateSelected () {
		selected.textContent = ` ${i18nList[config.language].selected} ${selectList.size} `;
	}
	function updateButtonState (videoID) {
		const selectButton = getSelectButton(videoID);
		if (selectButton) selectButton.checked = selectList.has(videoID);
	}
	originalAddEventListener.call(unsafeWindow.document, "visibilitychange", saveSelectList);
	pageStatus.onPageLeave = () => {
		saveSelectList();
	};
	selectList.onSet = (key) => {
		updateButtonState(key);
		saveSelectList();
		updateSelected();
	};
	selectList.onDel = (key) => {
		updateButtonState(key);
		saveSelectList();
		updateSelected();
	};
	selectList.onSync = () => {
		pageSelectButtons.forEach((value, key) => {
			updateButtonState(key);
		});
		saveSelectList();
		updateSelected();
	};
	function generateMatadataURL (videoInfo) {
		const metadataContent = generateMetadataContent(videoInfo);
		const blob = new Blob([metadataContent], {
			type: "text/plain"
		});
		return URL.createObjectURL(blob);
	}
	function getMatadataPath (videoInfo) {
		const videoPath = getDownloadPath(videoInfo);
		return `${videoPath.directory}/${videoPath.baseName}.json`;
	}
	function generateMetadataContent (videoInfo) {
		const metadata = Object.assign(videoInfo, {
			DownloadPath: getDownloadPath(videoInfo).fullPath,
			MetaDataVersion: GM_info.script.version
		});
		return JSON.stringify(metadata, (key, value) => {
			if (value instanceof Date) {
				return value.toISOString();
			}
			return value;
		}, 2);
	}
	function browserDownloadMetadata (videoInfo) {
		const url = generateMatadataURL(videoInfo);
		function toastError (error) {
			newToast(ToastType.Error, {
				node: toastNode([`${videoInfo.Title}[${videoInfo.ID}] %#videoMetadata#% %#downloadFailed#%`, {
					nodeType: "br"
				}, browserDownloadErrorParse(error)], "%#browserDownload#%"),
				close: true
			}).show();
		}
		GM_download({
			url,
			saveAs: false,
			name: getMatadataPath(videoInfo),
			onerror: (err) => toastError(err),
			ontimeout: () => toastError(new Error("%#browserDownloadTimeout#%")),
			onload: () => URL.revokeObjectURL(url)
		});
	}
	function othersDownloadMetadata (videoInfo) {
		const url = generateMatadataURL(videoInfo);
		const metadataFile = analyzeLocalPath(getMatadataPath(videoInfo)).fullName;
		const downloadHandle = renderNode({
			nodeType: "a",
			attributes: {
				href: url,
				download: metadataFile
			}
		});
		downloadHandle.click();
		downloadHandle.remove();
		URL.revokeObjectURL(url);
	}
	async function addDownloadTask () {
		let textArea = renderNode({
			nodeType: "textarea",
			attributes: {
				placeholder: i18nList[config.language].manualDownloadTips,
				style: "margin-bottom: 10px;",
				rows: "16",
				cols: "96"
			}
		});
		let body = renderNode({
			nodeType: "div",
			attributes: {
				id: "pluginOverlay"
			},
			childs: [textArea, {
				nodeType: "button",
				events: {
					click: (e) => {
						if (!isNullOrUndefined(textArea.value) && !textArea.value.isEmpty()) {
							let list = [];
							try {
								const parsed = JSON.parse(textArea.value);
								if (Array.isArray(parsed)) {
									list = parsed.map((item) => {
										if (Array.isArray(item) && isString(item[0]) && !item[0].isEmpty()) {
											if (!isVideoInfo(item[1])) {
												item[1].Type = "init";
												item[1].ID = item[1].ID ?? item[0];
												item[1].UpdateTime = item[1].UpdateTime ?? Date.now();
											}
										}
										return [...item];
									});
								} else {
									throw new Error("解析结果不是符合预期的列表");
								}
							} catch (error) {
								list = textArea.value.split("|").map((ID) => [ID.trim(), {
									Type: "init",
									ID: ID.trim(),
									UpdateTime: Date.now()
								}]);
							}
							if (list.length > 0) {
								analyzeDownloadTask(new Dictionary(list));
							}
						}
						body.remove();
					}
				},
				childs: i18nList[config.language].ok
			}]
		});
		unsafeWindow.document.body.appendChild(body);
	}
	async function downloadTaskUnique (taskList) {
		let stoped = prune((await aria2API("aria2.tellStopped", [0, 4096, ["gid", "status", "files", "errorCode", "bittorrent"]])).result.filter((task2) => isNullOrUndefined(task2.bittorrent)).map((task2) => {
			let ID = aria2TaskExtractVideoID(task2);
			if (!isNullOrUndefined(ID) && !ID.isEmpty()) {
				return {
					id: ID,
					data: task2
				};
			}
		}));
		let active = prune((await aria2API("aria2.tellActive", [["gid", "status", "files", "downloadSpeed", "bittorrent"]])).result.filter((task2) => isNullOrUndefined(task2.bittorrent)).map((task2) => {
			let ID = aria2TaskExtractVideoID(task2);
			if (!isNullOrUndefined(ID) && !ID.isEmpty()) {
				return {
					id: ID,
					data: task2
				};
			}
		}));
		let downloadCompleted = stoped.filter((task2) => task2.data.status === "complete").unique("id");
		let startedAndCompleted = [...active, ...downloadCompleted].map((i) => i.id);
		for (let key of taskList.keysArray().intersect(startedAndCompleted)) {
			taskList.delete(key);
		}
	}
	async function analyzeDownloadTask (taskList = selectList) {
		let size = taskList.size;
		let node = renderNode({
			nodeType: "p",
			childs: `${i18nList[config.language].parsingProgress}[${taskList.size}/${size}]`
		});
		let parsingProgressToast = newToast(ToastType.Info, {
			node,
			duration: -1
		});
		function updateParsingProgress () {
			node.firstChild.textContent = `${i18nList[config.language].parsingProgress}[${taskList.size}/${size}]`;
		}
		parsingProgressToast.show();
		if (config.experimentalFeatures && config.downloadType === DownloadType.Aria2) {
			await downloadTaskUnique(taskList);
			updateParsingProgress();
		}
		for (let [id, info] of taskList) {
			await pushDownloadTask(await parseVideoInfo(info));
			taskList.delete(id);
			updateParsingProgress();
			!config.enableUnsafeMode && await delay(3e3);
		}
		parsingProgressToast.hide();
		newToast(ToastType.Info, {
			text: `%#allCompleted#%`,
			duration: -1,
			close: true,
			onClick () {
				this.hide();
			}
		}).show();
	}
	async function pushDownloadTask (videoInfo, bypass = false) {
		switch (videoInfo.Type) {
			case "full":
				await db.videos.put(videoInfo, videoInfo.ID);
				if (!bypass) {
					const authorInfo = await db.follows.get(videoInfo.AuthorID);
					if (config.autoFollow && (!authorInfo?.following || !videoInfo.Following)) {
						await unlimitedFetch(`https://api.iwara.tv/user/${videoInfo.AuthorID}/followers`, {
							method: "POST",
							headers: await getAuth()
						}, {
							retry: true,
							successStatus: 201,
							failStatuses: [404],
							onFail: async (res) => {
								newToast(ToastType.Warn, {
									text: `${videoInfo.Alias} %#autoFollowFailed#% ${res.status}`,
									close: true,
									onClick () {
										this.hide();
									}
								}).show();
							},
							onRetry: async () => {
								await refreshToken();
							}
						});
					}
					if (config.autoLike && !videoInfo.Liked) {
						await unlimitedFetch(`https://api.iwara.tv/video/${videoInfo.ID}/like`, {
							method: "POST",
							headers: await getAuth()
						}, {
							retry: true,
							successStatus: 201,
							failStatuses: [404],
							onFail: async (res) => {
								newToast(ToastType.Warn, {
									text: `${videoInfo.Alias} %#autoLikeFailed#% ${res.status}`,
									close: true,
									onClick () {
										this.hide();
									}
								}).show();
							},
							onRetry: async () => {
								await refreshToken();
							}
						});
					}
					if (config.checkDownloadLink && checkIsHaveDownloadLink(`${videoInfo.Description} ${videoInfo.Comments}`)) {
						let toastBody = toastNode([`${videoInfo.Title}[${videoInfo.ID}] %#findedDownloadLink#%`, {
							nodeType: "br"
						}, `%#openVideoLink#%`], "%#createTask#%");
						newToast(ToastType.Warn, {
							node: toastBody,
							close: config.autoCopySaveFileName,
							onClick () {
								GM_openInTab(`https://www.iwara.tv/video/${videoInfo.ID}`, {
									active: false,
									insert: true,
									setParent: true
								});
								if (config.autoCopySaveFileName) {
									GM_setClipboard(getDownloadPath(videoInfo).fullName, "text");
									toastBody.appendChild(renderNode({
										nodeType: "p",
										childs: "%#copySucceed#%"
									}));
								} else {
									this.hide();
								}
							}
						}).show();
						return;
					}
				}
				if (config.checkPriority && videoInfo.DownloadQuality !== config.downloadPriority) {
					newToast(ToastType.Warn, {
						node: toastNode([`${videoInfo.Title.truncate(64)}[${videoInfo.ID}] %#downloadQualityError#%`, {
							nodeType: "br"
						}, `%#tryReparseDownload#%`], "%#createTask#%"),
						async onClick () {
							this.hide();
							await pushDownloadTask(await parseVideoInfo(videoInfo));
						}
					}).show();
					return;
				}
				switch (config.downloadType) {
					case DownloadType.Aria2:
						aria2Download(videoInfo);
						break;
					case DownloadType.IwaraDownloader:
						iwaraDownloaderDownload(videoInfo);
						break;
					case DownloadType.Browser:
						browserDownload(videoInfo);
						break;
					default:
						othersDownload(videoInfo);
						break;
				}
				if (config.autoDownloadMetadata) {
					switch (config.downloadType) {
						case DownloadType.Others:
							othersDownloadMetadata(videoInfo);
							break;
						case DownloadType.Browser:
							browserDownloadMetadata(videoInfo);
							break;
						default:
							break;
					}
					GM_getValue("isDebug") && originalConsole.debug("[Debug] Download task pushed:", videoInfo);
				}
				selectList.delete(videoInfo.ID);
				break;
			case "partial":
				const partialCache = await db.videos.get(videoInfo.ID);
				if (!isNullOrUndefined(partialCache) && partialCache.Type !== "full") await db.videos.put(videoInfo, videoInfo.ID);
			case "cache":
			case "init":
				return await pushDownloadTask(await parseVideoInfo(videoInfo));
			case "fail":
				const cache = await db.videos.get(videoInfo.ID);
				newToast(ToastType.Error, {
					close: true,
					node: toastNode([`${videoInfo.Title ?? videoInfo.RAW?.title ?? cache?.RAW?.title}[${videoInfo.ID}] %#parsingFailed#%`, {
						nodeType: "br"
					}, videoInfo.Msg, {
						nodeType: "br"
					}, videoInfo.External ? `%#openVideoLink#%` : `%#tryReparseDownload#%`], "%#createTask#%"),
					async onClick () {
						this.hide();
						if (videoInfo.External && !isNullOrUndefined(videoInfo.ExternalUrl) && !videoInfo.ExternalUrl.isEmpty()) {
							GM_openInTab(videoInfo.ExternalUrl, {
								active: false,
								insert: true,
								setParent: true
							});
						} else {
							await pushDownloadTask(await parseVideoInfo({
								Type: "init",
								ID: videoInfo.ID,
								RAW: videoInfo.RAW ?? cache?.RAW
							}));
						}
					}
				}).show();
				break;
			default:
				GM_getValue("isDebug") && originalConsole.debug("[Debug] Unknown type:", videoInfo);
				break;
		}
	}
	function uninjectCheckbox (element) {
		if (element instanceof HTMLElement) {
			if (element instanceof HTMLInputElement && element.classList.contains("selectButton")) {
				element.hasAttribute("videoID") && pageSelectButtons.delete(element.getAttribute("videoID"));
			}
			if (element.querySelector("input.selectButton")) {
				element.querySelectorAll(".selectButton").forEach((i) => i.hasAttribute("videoID") && pageSelectButtons.delete(i.getAttribute("videoID")));
			}
		}
	}
	async function injectCheckbox (element) {
		let ID = element.querySelector("a.videoTeaser__thumbnail").href.toURL().pathname.split("/")[2];
		if (isNullOrUndefined(ID)) return;
		let info = await db.videos.get(ID);
		let Title = info?.Type === "full" || info?.Type === "partial" ? info?.Title : info?.RAW?.title ?? element.querySelector(".videoTeaser__title")?.getAttribute("title") ?? void 0;
		let Alias = info?.Type === "full" || info?.Type === "partial" ? info?.Alias : info?.RAW?.user.name ?? element.querySelector("a.username")?.getAttribute("title") ?? void 0;
		let Author = info?.Type === "full" || info?.Type === "partial" ? info?.Author : info?.RAW?.user.username ?? element.querySelector("a.username")?.href.toURL().pathname.split("/").pop();
		let UploadTime = info?.Type === "full" || info?.Type === "partial" ? info?.UploadTime : new Date(info?.RAW?.updatedAt ?? 0).getTime();
		let button = renderNode({
			nodeType: "input",
			attributes: {
				type: "checkbox",
				videoID: ID,
				checked: selectList.has(ID) ? true : void 0,
				videoName: Title,
				videoAlias: Alias,
				videoAuthor: Author,
				videoUploadTime: UploadTime
			},
			className: "selectButton",
			events: {
				click: (event) => {
					event.target.checked ? selectList.set(ID, {
						Type: "init",
						ID,
						Title,
						Alias,
						Author,
						UploadTime
					}) : selectList.delete(ID);
					event.stopPropagation();
					event.stopImmediatePropagation();
					return false;
				}
			}
		});
		let item = element.querySelector(".videoTeaser__thumbnail")?.parentElement;
		item?.style.setProperty("position", "relative");
		pageSelectButtons.set(ID, button);
		originalNodeAppendChild.call(item, button);
		if (!isNullOrUndefined(Author)) {
			const AuthorInfo = await db.follows.where("username").equals(Author).first();
			if (AuthorInfo?.following && element.querySelector(".videoTeaser__thumbnail")?.querySelector(".follow") === null) {
				originalNodeAppendChild.call(element.querySelector(".videoTeaser__thumbnail"), renderNode({
					nodeType: "div",
					className: "follow",
					childs: {
						nodeType: "div",
						className: ["text", "text--white", "text--tiny", "text--bold"],
						childs: "%#following#%"
					}
				}));
			}
		}
		if (pluginMenu.pageType === PageType.Playlist) {
			let deletePlaylistItme = renderNode({
				nodeType: "button",
				attributes: {
					videoID: ID
				},
				childs: "%#delete#%",
				className: "deleteButton",
				events: {
					click: async (event) => {
						if ((await unlimitedFetch(`https://api.iwara.tv/playlist/${unsafeWindow.location.pathname.split("/")[2]}/${ID}`, {
							method: "DELETE",
							headers: await getAuth()
						})).ok) {
							newToast(ToastType.Info, {
								text: `${Title} %#deleteSucceed#%`,
								close: true
							}).show();
							deletePlaylistItme.remove();
						}
						event.preventDefault();
						event.stopPropagation();
						event.stopImmediatePropagation();
						return false;
					}
				}
			});
			originalNodeAppendChild.call(item, deletePlaylistItme);
		}
	}
	function getPageType (mutationsList) {
		if (unsafeWindow.location.pathname.toLowerCase().endsWith("/search")) {
			return PageType.Search;
		}
		const extractPageType = (page) => {
			if (isNullOrUndefined(page)) return void 0;
			if (page.classList.length < 2) return PageType.Page;
			const pageClass = page.classList[1]?.split("-").pop();
			return !isNullOrUndefined(pageClass) && isPageType(pageClass) ? pageClass : PageType.Page;
		};
		if (isNullOrUndefined(mutationsList)) {
			return extractPageType(unsafeWindow.document.querySelector(".page"));
		}
		for (const mutation of mutationsList) {
			if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
				return extractPageType(Array.from(mutation.addedNodes).find((node) => node instanceof Element && node.classList.contains("page")));
			}
		}
	}
	function pageChange () {
		pluginMenu.pageType = getPageType() ?? pluginMenu.pageType;
		GM_getValue("isDebug") && originalConsole.debug("[Debug]", pageSelectButtons);
	}
	function hijackAddEventListener () {
		unsafeWindow.EventTarget.prototype.addEventListener = function (type2, listener, options) {
			originalAddEventListener.call(this, type2, listener, options);
		};
	}
	function hijackNodeAppendChild () {
		Node.prototype.appendChild = function (node) {
			if (node instanceof HTMLElement && node.classList.contains("videoTeaser")) {
				injectCheckbox(node);
			}
			return originalNodeAppendChild.call(this, node);
		};
	}
	function hijackNodeRemoveChild () {
		Node.prototype.removeChild = function (child) {
			uninjectCheckbox(child);
			return originalNodeRemoveChild.apply(this, [child]);
		};
	}
	function hijackElementRemove () {
		Element.prototype.remove = function () {
			uninjectCheckbox(this);
			return originalElementRemove.apply(this);
		};
	}
	function hijackHistoryPushState () {
		unsafeWindow.history.pushState = function (...args) {
			originalHistoryPushState.apply(this, args);
			pageChange();
		};
	}
	function hijackHistoryReplaceState () {
		unsafeWindow.history.replaceState = function (...args) {
			originalHistoryReplaceState.apply(this, args);
			pageChange();
		};
	}
	function hijackStorage () {
		unsafeWindow.Storage.prototype.setItem = function (key, value) {
			originalStorageSetItem.call(this, key, value);
			if (key === "token") pluginMenu.pageChange();
		};
		unsafeWindow.Storage.prototype.removeItem = function (key) {
			originalStorageRemoveItem.call(this, key);
			if (key === "token") pluginMenu.pageChange();
		};
		unsafeWindow.Storage.prototype.clear = function () {
			originalStorageClear.call(this);
			pluginMenu.pageChange();
		};
	}
	function firstRun () {
		originalConsole.log("First run config reset!");
		GM_listValues().forEach((i) => GM_deleteValue(i));
		Config.destroyInstance();
		editConfig = new configEdit(config);
		let confirmButton = renderNode({
			nodeType: "button",
			attributes: {
				disabled: true,
				title: i18nList[config.language].ok
			},
			childs: "%#ok#%",
			events: {
				click: () => {
					GM_setValue("isFirstRun", false);
					GM_setValue("version", GM_info.script.version);
					unsafeWindow.document.querySelector("#pluginOverlay")?.remove();
					editConfig.inject();
				}
			}
		});
		originalNodeAppendChild.call(unsafeWindow.document.body, renderNode({
			nodeType: "div",
			attributes: {
				id: "pluginOverlay"
			},
			childs: [{
				nodeType: "div",
				className: "main",
				childs: [{
					nodeType: "p",
					childs: i18nList[config.language].useHelpForBase
				}, {
					nodeType: "p",
					childs: "%#useHelpForInjectCheckbox#%"
				}, {
					nodeType: "p",
					childs: "%#useHelpForCheckDownloadLink#%"
				}, {
					nodeType: "p",
					childs: i18nList[config.language].useHelpForManualDownload
				}, {
					nodeType: "p",
					childs: i18nList[config.language].useHelpForBugreport
				}]
			}, {
				nodeType: "div",
				className: "checkbox-container",
				childs: {
					nodeType: "label",
					className: ["checkbox-label", "rainbow-text"],
					childs: [{
						nodeType: "input",
						className: "checkbox",
						attributes: {
							type: "checkbox",
							name: "agree-checkbox"
						},
						events: {
							change: (event) => {
								confirmButton.disabled = !event.target.checked;
							}
						}
					}, "%#alreadyKnowHowToUse#%"]
				}
			}, confirmButton]
		}));
	}
	async function main () {
		if (new Version(GM_getValue("version", "0.0.0")).compare(new Version("3.3.0")) === VersionState.Low) {
			GM_setValue("isFirstRun", true);
			alert(i18nList[config.language].configurationIncompatible);
		}
		if (GM_getValue("isFirstRun", true)) {
			firstRun();
			return;
		}
		if (new Version(GM_getValue("version", "0.0.0")).compare(new Version("3.3.22")) === VersionState.Low) {
			alert(i18nList[config.language].configurationIncompatible);
			try {
				pageStatus.suicide();
				selectList.clear();
				GM_deleteValue("selectList");
				await db.delete();
				GM_setValue("version", GM_info.script.version);
				unsafeWindow.location.reload();
			} catch (error) {
				originalConsole.error(error);
			}
			return;
		}
		if (!await check()) {
			newToast(ToastType.Info, {
				text: `%#configError#%`,
				duration: 60 * 1e3
			}).show();
			editConfig.inject();
			return;
		}
		GM_setValue("version", GM_info.script.version);
		hijackAddEventListener();
		if (config.autoInjectCheckbox) hijackNodeAppendChild();
		hijackNodeRemoveChild();
		hijackElementRemove();
		hijackStorage();
		hijackHistoryPushState();
		hijackHistoryReplaceState();
		originalAddEventListener("mouseover", (event) => {
			mouseTarget = event.target instanceof Element ? event.target : null;
		});
		originalAddEventListener("keydown", (event) => {
			const keyboardEvent = event;
			if (keyboardEvent.code === "Space" && !isNullOrUndefined(mouseTarget)) {
				let element = findElement(mouseTarget, ".videoTeaser");
				let button = element && (element.matches(".selectButton") ? element : element.querySelector(".selectButton"));
				button && button.click();
				button && keyboardEvent.preventDefault();
			}
		});
		new MutationObserver(async (m, o) => {
			if (m.some((m2) => m2.type === "childList" && unsafeWindow.document.getElementById("app"))) {
				pluginMenu.inject();
				o.disconnect();
			}
		}).observe(unsafeWindow.document.body, {
			childList: true,
			subtree: true
		});
		originalNodeAppendChild.call(unsafeWindow.document.body, watermark);
		if (isLoggedIn()) {
			let user = await (await unlimitedFetch("https://api.iwara.tv/user", {
				method: "GET",
				headers: await getAuth()
			})).json();
			let authorProfile = await db.follows.where("username").equals("dawn").first();
			if (isNullOrUndefined(authorProfile)) {
				authorProfile = (await (await unlimitedFetch("https://api.iwara.tv/profile/dawn", {
					method: "GET",
					headers: await getAuth()
				})).json()).user;
				if (user.user.id !== authorProfile.id) {
					if (!authorProfile.following) {
						unlimitedFetch(`https://api.iwara.tv/user/${authorProfile.id}/followers`, {
							method: "POST",
							headers: await getAuth()
						});
					}
					if (!authorProfile.friend) {
						unlimitedFetch(`https://api.iwara.tv/user/${authorProfile.id}/friends`, {
							method: "POST",
							headers: await getAuth()
						});
					}
				}
			}
		}
		newToast(ToastType.Info, {
			node: toastNode(i18nList[config.language].notice),
			duration: 1e4,
			gravity: "bottom",
			position: "center",
			onClick () {
				this.hide();
			}
		}).show();
	}
	if (!unsafeWindow.IwaraDownloadTool) {
		unsafeWindow.IwaraDownloadTool = true;
		if (GM_getValue("isDebug")) {
			debugger;
			unsafeWindow.pageStatus = pageStatus;
			originalConsole.debug(stringify(GM_info));
		}
		GM_getTabs((tabs) => {
			if (Object.keys(tabs).length != 1) return;
			try {
				let selectListStorage = GM_getValue("selectList", {
					timestamp: selectList.timestamp,
					selectList: selectList.toArray()
				});
				if (selectListStorage.timestamp > selectList.timestamp) {
					selectListStorage.selectList.forEach(([key, value]) => {
						selectList.set(key, value);
					});
				}
			} catch (error) {
				selectList.clear();
				GM_deleteValue("selectList");
			}
		});
		GM_addStyle(main_default);
		unsafeWindow.fetch = async (input, init) => {
			GM_getValue("isDebug") && originalConsole.debug(`[Debug] Fetch ${input}`);
			let url = (input instanceof Request ? input.url : input instanceof URL ? input.href : input).toURL();
			if (!isNullOrUndefined(init) && !isNullOrUndefined(init.headers)) {
				let authorization = null;
				if (init.headers instanceof Headers) {
					authorization = init.headers.has("Authorization") ? init.headers.get("Authorization") : null;
				} else {
					if (Array.isArray(init.headers)) {
						let index = init.headers.findIndex(([key, value]) => key.toLowerCase() !== "authorization");
						if (!(index < 0)) authorization = init.headers[index][1];
					} else {
						for (const key in init.headers) {
							if (key.toLowerCase() !== "authorization") continue;
							authorization = init.headers[key];
							break;
						}
					}
				}
				if (!isNullOrUndefined(authorization)) {
					let playload = getPlayload(authorization);
					let token = authorization.split(" ").pop() ?? "";
					if (playload["type"] === "refresh_token" && !token.isEmpty()) {
						localStorage.setItem("token", token);
						config.authorization = token;
						GM_getValue("isDebug") && originalConsole.debug(`[Debug] refresh_token: 凭证已隐藏`);
					}
				}
			}
			return new Promise((resolve, reject) => originalFetch(input, init).then(async (response) => {
				if (url.hostname !== "api.iwara.tv" || url.pathname.isEmpty()) return resolve(response);
				let path = url.pathname.toLowerCase().split("/").slice(1);
				switch (path[0]) {
					case "user":
						if (path[1] === "token") {
							const cloneResponse2 = response.clone();
							if (!cloneResponse2.ok) break;
							const {
								accessToken
							} = await cloneResponse2.json();
							let token = localStorage.getItem("accessToken");
							if (isNullOrUndefined(token) || token !== accessToken) localStorage.setItem("accessToken", accessToken);
						}
						break;
					case "videos":
						const cloneResponse = response.clone();
						if (!cloneResponse.ok) break;
						const cloneBody = await cloneResponse.json();
						const list = (await Promise.allSettled(cloneBody.results.map((info) => parseVideoInfo({
							Type: "cache",
							ID: info.id,
							RAW: info
						})))).filter((i) => i.status === "fulfilled").map((i) => i.value).filter((i) => i.Type === "partial" || i.Type === "full");
						const toUpdate = list.difference((await db.videos.where("ID").anyOf(list.map((v) => v.ID)).toArray()).filter((v) => v.Type === "full"), "ID");
						if (toUpdate.any()) {
							await db.videos.bulkPut(toUpdate);
						}
						if (!config.addUnlistedAndPrivate) break;
						GM_getValue("isDebug") && originalConsole.debug("[Debug]", url.searchParams);
						if (url.searchParams.has("user")) break;
						if (url.searchParams.has("subscribed")) break;
						if (url.searchParams.has("sort") ? url.searchParams.get("sort") !== "date" : false) break;
						const sortedList = list.sort((a, b) => a.UploadTime - b.UploadTime);
						const minTime = sortedList.at(0).UploadTime;
						const maxTime = sortedList.at(-1).UploadTime;
						const startTime = new Date(minTime).sub({
							hours: 4
						}).getTime();
						const endTime = new Date(maxTime).add({
							hours: 4
						}).getTime();
						const cache = (await db.getFilteredVideos(startTime, endTime)).filter((i) => i.Type === "partial" || i.Type === "full").sort((a, b) => a.UploadTime - b.UploadTime).map((i) => i.RAW);
						if (!cache.any()) break;
						cloneBody.count += cache.length;
						cloneBody.limit += cache.length;
						cloneBody.results.push(...cache);
						return resolve(new Response(JSON.stringify(cloneBody), {
							status: cloneResponse.status,
							statusText: cloneResponse.statusText,
							headers: Object.fromEntries(cloneResponse.headers.entries())
						}));
					default:
						break;
				}
				return resolve(response);
			}).catch((err) => reject(err)));
		};
		(unsafeWindow.document.body ? Promise.resolve() : new Promise((resolve) => originalAddEventListener.call(unsafeWindow.document, "DOMContentLoaded", resolve))).then(main);
	}
})();