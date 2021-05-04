"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.BasePage = void 0;
var selenium_webdriver_1 = require("selenium-webdriver");
var fs = require("fs");
var chromedriver = require("chromedriver");
var geckodriver = require("geckodriver");
var BasePage = /** @class */ (function () {
    /**
     *
     * @param {Options} options - optional paramaters for the base page object.
     * @property {WebDriver} options.driver - if no driver is provided, one will be created
     * @property {string} options.url - provide this if the page has a base url
     */
    function BasePage(options) {
        if (options && options.driver)
            this.driver = options.driver;
        if (options &&
            options.browser &&
            options.browser == "firefox" &&
            options.driver == undefined)
            this.driver = new selenium_webdriver_1.Builder()
                .withCapabilities(selenium_webdriver_1.Capabilities.firefox())
                .build();
        else
            this.driver = new selenium_webdriver_1.Builder()
                .withCapabilities(selenium_webdriver_1.Capabilities.chrome())
                .build();
        if (options && options.url)
            this.url = options.url;
    }
    /**
     * navigates to the url passed in, or to the one stored on the page object
     * @param {string} url - the url to navigate to, unless you wish to use the page's defined base url
     */
    BasePage.prototype.navigate = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!url) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.driver.get(url)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!this.url) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.driver.get(this.url)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/, Promise.reject("BasePage.navigate() needs a URL defined on the page object, or one passed in. No URL was provided.")];
                }
            });
        });
    };
    /**
     * waits for the identified element to be located and visible before returning it.
     * @param {By} elementBy - the locator for the element to return.
     */
    BasePage.prototype.getElement = function (elementBy) {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.driver.wait(selenium_webdriver_1.until.elementLocated(elementBy))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.driver.findElement(elementBy)];
                    case 2:
                        element = _a.sent();
                        return [4 /*yield*/, this.driver.wait(selenium_webdriver_1.until.elementIsVisible(element))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, element];
                }
            });
        });
    };
    /**
     * clicks the given element after waiting for it
     * @param {By} elementBy - the locator for the element to click
     */
    BasePage.prototype.click = function (elementBy) {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getElement(elementBy)];
                    case 1:
                        element = _a.sent();
                        return [4 /*yield*/, this.driver.wait(selenium_webdriver_1.until.elementIsEnabled(element))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, element.click()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * clears the given element after waiting for it, and then sends the provided keys
     * @param {By} elementBy - the locator for the element to clear and sendKeys to
     * @param {any} keys - the string or list of keys to send
     */
    BasePage.prototype.setInput = function (elementBy, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var input;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getElement(elementBy)];
                    case 1:
                        input = _a.sent();
                        return [4 /*yield*/, this.driver.wait(selenium_webdriver_1.until.elementIsEnabled(input))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, input.clear()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, input.sendKeys(keys)];
                }
            });
        });
    };
    /**
     * returns an element's text after waiting for it to be visible
     * @param {By} elementBy - the locator of the element to get text from
     */
    BasePage.prototype.getText = function (elementBy) {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getElement(elementBy)];
                    case 1:
                        element = _a.sent();
                        return [4 /*yield*/, this.driver.wait(selenium_webdriver_1.until.elementIsEnabled(element))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, element.getText()];
                }
            });
        });
    };
    /**
     * returns an element's attribute value after waiting for the element to be visible
     * @param {By} elementBy - the locator of the element to get the value from
     * @param {string} attribute - the attribute to return the value from, such as 'value' or 'href'
     */
    BasePage.prototype.getAttribute = function (elementBy, attribute) {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getElement(elementBy)];
                    case 1:
                        element = _a.sent();
                        return [4 /*yield*/, this.driver.wait(selenium_webdriver_1.until.elementIsEnabled(element))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, element.getAttribute(attribute)];
                }
            });
        });
    };
    /**
     * Will take a screenshot and save it to the filepath/filename provided.
     * Automatically saves as a .png file.
     * @param {string} filepath - the filepath relative to the project's base folder where you want the screenshot saved
     * @example
     * page.takeScreenshot("myFolder/mypic")
     * //picture saves in "myFolder" as "mypic.png"
     */
    BasePage.prototype.takeScreenshot = function (filepath) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = fs).writeFile;
                        _c = [filepath + ".png"];
                        return [4 /*yield*/, this.driver.takeScreenshot()];
                    case 1:
                        _b.apply(_a, _c.concat([_d.sent(), "base64", function (e) {
                                if (e)
                                    console.log(e);
                                else
                                    console.log("screenshot saved successfully");
                            }]));
                        return [2 /*return*/];
                }
            });
        });
    };
    return BasePage;
}());
exports.BasePage = BasePage;
