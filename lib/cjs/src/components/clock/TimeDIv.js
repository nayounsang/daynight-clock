"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var clock_module_css_1 = require("../style/clock.module.css");
var TimeDiv = function (_a) {
    var style = _a.style, text = _a.text;
    return (0, jsx_runtime_1.jsx)("div", { style: style, className: clock_module_css_1.default.time, children: text });
};
exports.default = TimeDiv;
