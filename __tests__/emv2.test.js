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
var EmployeeManager_1 = require("./pageObjects/EmployeeManager");
var employees = require("./employee-list.json");
describe("employee manager v2", function () {
    var page = new EmployeeManager_1.EmployeeManager({ browser: "chrome" });
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.navigate()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.driver.quit()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Searching narrows the list", function () { return __awaiter(void 0, void 0, void 0, function () {
        var originalList, resultList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.getEmployeeList()];
                case 1:
                    originalList = _a.sent();
                    return [4 /*yield*/, page.searchFor("Bill")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, page.getEmployeeList()];
                case 3:
                    resultList = _a.sent();
                    expect(originalList.length).toBeGreaterThanOrEqual(resultList.length);
                    return [2 /*return*/];
            }
        });
    }); });
    test("Screenshotting the 'screenshot' employees", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.searchFor("Screenshot")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, page.takeScreenshot("screenshot")];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    //I literally wrapped the old add/delete test in a loop, and updated a few parameters.
    //That's it.
    employees.forEach(function (newEmployee) {
        //I updated the test name
        test("Can add and delete an employee (newEmployee.name)", function () { return __awaiter(void 0, void 0, void 0, function () {
            var employee, employeeList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.addEmployee(newEmployee)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.getCurrentEmployee()];
                    case 2:
                        employee = _a.sent();
                        expect(employee.name).toEqual(newEmployee.name);
                        expect(employee.phone).toEqual(newEmployee.phone);
                        expect(employee.email).toEqual(newEmployee.email);
                        expect(employee.title).toEqual(newEmployee.title);
                        //had to update this argument
                        return [4 /*yield*/, page.deleteEmployee(newEmployee.name)];
                    case 3:
                        //had to update this argument
                        _a.sent();
                        return [4 /*yield*/, page.getEmployeeList()];
                    case 4:
                        employeeList = _a.sent();
                        //and this one
                        expect(employeeList).not.toContain(newEmployee.name);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
