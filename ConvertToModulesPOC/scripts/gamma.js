System.register([], function (exports_1, context_1) {
    "use strict";
    var gamma;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            gamma = /** @class */ (function () {
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
            exports_1("default", gamma);
        }
    };
});
//# sourceMappingURL=gamma.js.map