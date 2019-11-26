System.register(["../scripts/gamma.js"], function (exports_1, context_1) {
    "use strict";
    var gamma_js_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (gamma_js_1_1) {
                gamma_js_1 = gamma_js_1_1;
            }
        ],
        execute: function () {
            window["gamma"] = gamma_js_1.default;
        }
    };
});
//# sourceMappingURL=yMod.js.map