"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var clock_module_css_1 = require("../style/clock.module.css");
var classnames_1 = require("classnames");
var ClockContainer = function (_a) {
    var children = _a.children, style = _a.style, size = _a.size;
    return ((0, jsx_runtime_1.jsx)("div", { style: style, className: (0, classnames_1.default)(clock_module_css_1.default.container, size === undefined ? "" : clock_module_css_1.default[size]), children: children }));
};
exports.default = ClockContainer;
