"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.EmployeeManager = void 0;
var selenium_webdriver_1 = require("selenium-webdriver");
var BasePage_1 = require("./BasePage");
var EmployeeManager = /** @class */ (function (_super) {
    __extends(EmployeeManager, _super);
    function EmployeeManager(options) {
        var _this = _super.call(this, options) || this;
        _this.searchBox = selenium_webdriver_1.By.name("searchBox");
        _this.listContainer = selenium_webdriver_1.By.className("listContainer");
        _this.listedEmployees = selenium_webdriver_1.By.xpath("//li[contains(@name, 'employee')]");
        _this.addButton = selenium_webdriver_1.By.name("addEmployee");
        _this.cardTitle = selenium_webdriver_1.By.id("employeeTitle");
        _this.idNumber = selenium_webdriver_1.By.id("employeeID");
        _this.nameEntry = selenium_webdriver_1.By.name("nameEntry");
        _this.phoneEntry = selenium_webdriver_1.By.name("phoneEntry");
        _this.emailEntry = selenium_webdriver_1.By.name("emailEntry");
        _this.titleEntry = selenium_webdriver_1.By.name("titleEntry");
        _this.saveButton = selenium_webdriver_1.By.name("save");
        _this.cancelButton = selenium_webdriver_1.By.name("cancel");
        _this.deleteButton = selenium_webdriver_1.By.name("delete");
        _this.url =
            "https://devmountain-qa.github.io/employee-manager-v2/build/index.html";
        return _this;
    }
    EmployeeManager.prototype.navigate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.driver.get(this.url)];
                    case 1:
                        _e.sent();
                        _b = (_a = this.driver).wait;
                        _d = (_c = selenium_webdriver_1.until).elementIsEnabled;
                        return [4 /*yield*/, this.getElement(this.searchBox)];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [_e.sent()])])];
                    case 3:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EmployeeManager.prototype.searchFor = function (searchText) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setInput(this.searchBox, searchText)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EmployeeManager.prototype.getEmployeeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var employeeList, list, i, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        employeeList = [];
                        return [4 /*yield*/, this.driver.findElements(this.listedEmployees)];
                    case 1:
                        list = _c.sent();
                        i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(i < list.length)) return [3 /*break*/, 6];
                        _b = (_a = employeeList).push;
                        return [4 /*yield*/, list[i].getText()];
                    case 3: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/, list];
                }
            });
        });
    };
    EmployeeManager.prototype.selectEmployee = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.click(selenium_webdriver_1.By.xpath("//li[text()='" + name + "']"))];
                    case 1:
                        _e.sent();
                        return [4 /*yield*/, this.getElement(this.cardTitle)];
                    case 2:
                        _e.sent();
                        _b = (_a = this.driver).wait;
                        _d = (_c = selenium_webdriver_1.until).elementTextContains;
                        return [4 /*yield*/, this.getElement(this.cardTitle)];
                    case 3: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [_e.sent(), name])])];
                    case 4:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EmployeeManager.prototype.getCurrentEmployee = function () {
        return __awaiter(this, void 0, void 0, function () {
            var employee, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        employee = { name: "", phone: 0, email: "", title: "", id: "" };
                        _a = employee;
                        return [4 /*yield*/, this.getAttribute(this.nameEntry, "value")];
                    case 1:
                        _a.name = _g.sent();
                        _b = employee;
                        _c = parseInt;
                        return [4 /*yield*/, this.getAttribute(this.phoneEntry, "value")];
                    case 2:
                        _b.phone = _c.apply(void 0, [_g.sent(), 10]);
                        _d = employee;
                        return [4 /*yield*/, this.getAttribute(this.emailEntry, "value")];
                    case 3:
                        _d.email = _g.sent();
                        _e = employee;
                        return [4 /*yield*/, this.getAttribute(this.titleEntry, "value")];
                    case 4:
                        _e.title = _g.sent();
                        _f = employee;
                        return [4 /*yield*/, this.getText(this.idNumber)];
                    case 5:
                        _f.id = (_g.sent()).slice(4);
                        return [2 /*return*/, employee];
                }
            });
        });
    };
    EmployeeManager.prototype.addEmployee = function (employee) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.click(this.addButton)];
                    case 1:
                        _e.sent();
                        //   await new Promise((res) => setTimeout(res, 500));
                        //   await this.searchFor("New Employee");
                        //   await new Promise((res) => setTimeout(res, 500));
                        return [4 /*yield*/, this.selectEmployee("New Employee")];
                    case 2:
                        //   await new Promise((res) => setTimeout(res, 500));
                        //   await this.searchFor("New Employee");
                        //   await new Promise((res) => setTimeout(res, 500));
                        _e.sent();
                        return [4 /*yield*/, this.driver.wait(selenium_webdriver_1.until.elementLocated(this.cardTitle))];
                    case 3:
                        _e.sent();
                        _b = (_a = this.driver).wait;
                        _d = (_c = selenium_webdriver_1.until).elementTextIs;
                        return [4 /*yield*/, this.getElement(this.cardTitle)];
                    case 4: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [_e.sent(), "New Employee"])])];
                    case 5:
                        _e.sent();
                        return [4 /*yield*/, this.setInput(this.nameEntry, employee.name)];
                    case 6:
                        _e.sent();
                        return [4 /*yield*/, this.setInput(this.phoneEntry, employee.phone)];
                    case 7:
                        _e.sent();
                        return [4 /*yield*/, this.setInput(this.emailEntry, employee.email)];
                    case 8:
                        _e.sent();
                        return [4 /*yield*/, this.setInput(this.titleEntry, employee.title)];
                    case 9:
                        _e.sent();
                        return [4 /*yield*/, this.click(this.saveButton)];
                    case 10:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EmployeeManager.prototype.deleteEmployee = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var record, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectEmployee(name)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.driver.findElement(selenium_webdriver_1.By.xpath("//li[text()='" + name + "']"))];
                    case 2:
                        record = _a.sent();
                        return [4 /*yield*/, this.click(this.deleteButton)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.driver.wait(selenium_webdriver_1.until.alertIsPresent())];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.driver.switchTo().alert()];
                    case 5:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.accept()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.driver.wait(selenium_webdriver_1.until.stalenessOf(record))];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return EmployeeManager;
}(BasePage_1.BasePage));
exports.EmployeeManager = EmployeeManager;
