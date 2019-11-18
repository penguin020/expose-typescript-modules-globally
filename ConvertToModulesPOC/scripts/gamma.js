"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gamma = /** @class */ (function () {
    function gamma() {
    }
    gamma.prototype.log = function () {
        var caller = (new Error()).stack.split("\n")[2].trim().split(" ")[1];
        console.log("gamma.log called by " + caller);
    };
    gamma._constructor = (function () {
        console.log("gamma static constructor");
    })();
    return gamma;
}());
exports.gamma = gamma;
//# sourceMappingURL=gamma.js.map