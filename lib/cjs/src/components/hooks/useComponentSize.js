"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useComponentSize = function () {
    var _a = (0, react_1.useState)({ width: 0, height: 0 }), size = _a[0], setSize = _a[1];
    var componentRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            var _a, _b;
            var _c = (_b = (_a = componentRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : { width: 0, height: 0 }, width = _c.width, height = _c.height;
            setSize({ width: width, height: height });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    return [componentRef, size];
};
exports.default = useComponentSize;
